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

	public function renderDefault()
	{
		$this->template->invoices = $this->em->getRepository('Invoice')->findBy(array('company' => $this->company->getId()));
	}


	public function renderCreate()
	{
		// $this->template->users = $this->getSession('values')->users;
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
			 ->addRule(Form::FILLED, 'Musíte zadať popis.');

		$customer = array();

		foreach ($this->contacts as $contact) 
		{
			$customer[$contact->getId()] = $contact->getName();
		}

		$form->addSelect('customer', 'Zákazník', $customer)
			 ->setPrompt('Vyberte zákazníka');


		// meno, továrnička, defaultný počet
		$replicator = $form->addDynamic('items', function (Container $container) use ($invalidateCallback) {
			$container->currentGroup = $container->form->addGroup('Položka', FALSE);
			$container->addText('name', 'Položka')->setRequired();
			$container->addText('quantity', 'Množstvo')->setRequired();
			$container->addText('value', 'Hodnota')->setRequired();

			$container->addSubmit('removeAjax', 'Vymazať')
				->setAttribute('class', 'ajax')
				->addRemoveOnClick($invalidateCallback);
		}, 1);

		/** @var \Kdyby\Replicator\Container $replicator */
		$replicator->addSubmit('addAjax', 'Pridať ďalšiu položku')
			->setAttribute('class', 'ajax')
			->addCreateOnClick($invalidateCallback);

		$form->addSubmit('sendAjax', 'Uložiť faktúru')
			 ->setAttribute('class', 'ajax')
			 ->onClick[] = callback($this, 'InvoiceFormSubmitted');

		$this[$name] = $form;
		$form->action .= '#snippet--invoicesForm';
		return $form;
	}



	/**
	 * @param SubmitButton $button
	 */
	public function InvoiceFormSubmitted(SubmitButton $button)
	{
		// jenom naplnění šablony, bez přesměrování
		// $this->getSession('values')->users = $button->form->values;

		$form = $button->form->values;

		$invoice = new Invoice;
		
		$invoice->setDescription($form->description)
				->setCompany($this->company)
				->setCustomerId($form->customer);

		foreach ($button->form['items']->values as $item) {
			
			$items = new Items;
			$items->setName($item['name'])
				  ->setQuantity($item['quantity'])
				  ->setValue($item['value']);

			$invoice->addItem($items);
			$this->em->persist($items);
		}
		
		$this->em->persist($invoice);
		$this->em->flush();

		$this->flashMessage('Faktúra bola úspešne zaevidovaná do databázy.', 'success');		
		$this->redirect('Invoice:');
	}

}
