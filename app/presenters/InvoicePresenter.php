<?php

use Nette\Forms\Container;
use Nette\Application\UI\Form;
use Nette\Forms\Controls\SubmitButton;

/**
 * Invoices presenter.
 */
class InvoicePresenter extends BasePresenter
{
	/** @var */
	public $company;

	/** @var */
	public $contacts;

	/** @var */
	public $invoice;

	/** @persistent int */
	public $act_invoice_id;



	protected function startup()
	{
		parent::startup();

		if (!$this->getUser()->isLoggedIn()) {
			$this->redirect('Sign:in');
		}

		$user_id = $this->getUser()->getId();
		$this->company = $this->em->getRepository('Company')->findOneBy(array('user' => $user_id));
		$this->contacts = $this->em->getRepository('Contact')->findBy(array('user' => $this->getUser()->getId()));
	}

	// public function actionCreate()
	// {
	// 	if ($values = $this->getSession('values')->users) {
	// 		$this['invoiceForm']->setDefaults($values);
	// 	}
	// }

	public function actionEdit($id)
	{
		$this->invoice = $this->em->getRepository('Invoice')->findOneBy(array('id' => $id));
		$form = $this['invoiceForm'];

		if (!$this->invoice) {
			throw new BadRequestException;
		}

		$items = $this->invoice->getItems();

		$form->setDefaults(array(
			'description' => $this->invoice->getDescription(),
			'create_date' => $this->invoice->getCreateDate(),
			'delivery_date' => $this->invoice->getDeliveryDate(),
			'due_date' => $this->invoice->getDueDate(),
			'customer' => $this->invoice->getCustomer(),
		));
	}

	public function renderDefault()
	{
		// $this->template->invoices = $this->em->getRepository('Invoice')->findBy(array('company' => $this->company->getId()));
		$this->template->invoices = $this->invoiceRepo->getOrderInvoices($this->company->getId());
	}

	public function renderUnpaid()
	{
		$this->template->unpaidInvoices = $this->invoiceRepo->getUnpaidInvoices($this->company->getId());
	}

	public function renderDisplay($id)
	{
		$this->template->invoice = $this->em->getRepository('Invoice')->findOneBy(array('id' => $id));
		$this->act_invoice_id = $id;
	}
	

	/**
	 * @return Form
	 */
	protected function createComponentInvoiceForm($name)
	{
		$form = new Form;

		$presenter = $this;
		$invalidateCallback = function () use ($presenter) {
			/** @var \Nette\Application\UI\Presenter $presenter */
			$presenter->invalidateControl('usersForm');
		};


		$form->addGroup('Základné údaje');
		$form->addText('description', 'Popis', 50, 100)
			 ->setAttribute('class', 'form-control input-small')
			 ->addRule(Form::FILLED, 'Musíte zadať popis.');
		$form->addText('create_date', 'Dátum vystavenia', 50, 100)
			 ->setAttribute('class', 'form-control input-small')
			 ->addRule(Form::FILLED, 'Musíte vyplniť dátum.');
		$form->addText('delivery_date', 'Dátum doručenia', 50, 100)
			 ->setAttribute('class', 'form-control input-small')
			 ->addRule(Form::FILLED, 'Musíte vyplniť dátum.');
		$form->addText('due_date', 'Dátum splatnosti', 50, 100)
			 ->setAttribute('class', 'form-control input-small')
			 ->addRule(Form::FILLED, 'Musíte vyplniť dátum.');

		$customer = array();

		foreach ($this->contacts as $contact) 
		{
			$customer[$contact->getId()] = $contact->getName();
		}

		$form->addSelect('customer', 'Zákazník', $customer)
			 ->setPrompt('Vyberte zákazníka')
			 ->setAttribute('class', 'form-control');


		// meno, továrnička, defaultný počet
		$replicator = $form->addDynamic('items', function (Container $container) use ($invalidateCallback) {
			$container->currentGroup = $container->form->addGroup('Položka', FALSE);
			$container->addText('name', 'Názov')->setRequired()
					  ->setAttribute('class', 'form-control input-small');
			$container->addText('quantity', 'Množstvo')->setRequired()
					  ->setAttribute('class', 'form-control input-small');
			$container->addText('unit', 'Merná jednotka')->setRequired()
					  ->setAttribute('class', 'form-control input-small')
					  ->setAttribute('placeholder', 'napr. kg, ks, hod');
			$container->addText('value', 'Hodnota')->setRequired()
					  ->setAttribute('class', 'form-control input-small');

			$container->addSubmit('removeAjax', 'Vymazať')
				->setAttribute('class', 'ajax btn btn-info btn-small')
				->addRemoveOnClick($invalidateCallback);
		}, 1);

		/** @var \Kdyby\Replicator\Container $replicator */
		$replicator->addSubmit('addAjax', 'Pridať ďalšiu položku')
			->setAttribute('class', 'ajax btn btn-info btn-small')
			->addCreateOnClick($invalidateCallback);

		$form->addSubmit('sendAjax', 'Uložiť faktúru')
			 ->setAttribute('class', 'ajax btn btn-info btn-small')
			 ->onClick[] = callback($this, 'InvoiceFormSubmitted');

		$this[$name] = $form;
		$form->action .= '#snippet--invoicesForm';
		return $form;
	}

	/**
	 * @return Form
	 */
	protected function createComponentPaymentForm()
	{
		$form = new Form;
		$today = date("d.m.Y");

		$form->addText('pay_date', 'Dátum splátky', 50, 100)
			 ->setAttribute('class', 'form-control input-small')
			 ->setAttribute('placeholder', $today)
			 ->addRule(Form::FILLED, 'Musíte vyplniť dátum.');
		$form->addText('payment', 'Splátka', 50, 100)
			 ->setAttribute('placeholder', '100 €')
			 ->setAttribute('class', 'form-control input-small');
		// $form->addHidden($invoice_id);
		$form->addSubmit('submit', 'Uložiť splátku faktúry')
			 ->setAttribute('class', 'btn btn-info btn-small');

		$form->onSuccess[] = $this->paymentFormSubmitted;

		return $form;
	}

	/**
	 * @param SubmitButton $button
	 */
	public function InvoiceFormSubmitted(SubmitButton $button)
	{
		$form = $button->form->values;
		$totalsum = 0;

		$cid = $form->customer;
		$customer = $this->em->getRepository('Contact')->findOneBy(array('id' => $cid));

		$create_date = date_create($form->create_date);
		$delivery_date = date_create($form->delivery_date);
		$due_date = date_create($form->due_date);

		$invoice = new Invoice;
		
		$invoice->setDescription($form->description)
				->setCreateDate($create_date)
				->setDeliveryDate($delivery_date)
				->setDueDate($due_date)
				->setCompany($this->company)
				->setCustomer($customer)
				->setConstantSymbol();

		foreach ($button->form['items']->values as $item) {
			
			$items = new Items;
			$items->setName($item['name'])
				  ->setQuantity($item['quantity'])
				  ->setUnit($item['unit'])
				  ->setValue($item['value']);

			$invoice->addItem($items);
			$this->em->persist($items);

			// Total sum of invoice
			$itemsum = $item['quantity'] * $item['value'];
			$totalsum += $itemsum;
		}

		$invoice->setTotalSum($totalsum);
				
		$this->em->persist($invoice);
		$this->em->flush();

		$this->flashMessage('Faktúra bola úspešne zaevidovaná do databázy.', 'success');		
		$this->redirect('Invoice:');
	}

	/**
	* @param Nette\Application\UI\Form $form
	*/
	public function paymentFormSubmitted(Form $form) 
	{	
		$total = $form->values->payment;
		$invoice = $this->em->getRepository('Invoice')->findOneBy(array('id' => $this->act_invoice_id));
				
		$pay_date = date_create($form->values->pay_date);
		
		$payment = new Payment;
		$payment->setPayDate($pay_date)
				->setPayment($form->values->payment)
				->setInvoice($invoice)
				->setCompany($this->company);


		$this->em->persist($payment);

		$this->flashMessage('Splátka faktúry bola pridaná.', 'success');
		
		$this->em->flush();

		foreach ($invoice->getPayments() as $payment) {
			$total += $payment->getPayment();
		}
		if ($total >= $invoice->getTotalSum()) $this->invoiceUpdateStatus($invoice);

		$this->redirect('Invoice:display', $this->act_invoice_id);
	}

	public function invoiceUpdateStatus(Invoice $invoice)
	{
		$invoice->setStatus(1);
		$this->em->persist($invoice);
		$this->em->flush();
	}
}
