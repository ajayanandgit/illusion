<?php

use Nette\Application\UI\Form;
use Nette\Application\BadRequestException;
use Nette\Application\ForbiddenRequestException;
use Nette\Forms\Container;

/**
 * Invoices presenter.
 */
class InvoicePresenter extends BasePresenter
{
	/** @var */
	public $company;	

	protected function startup()
	{
		parent::startup();

		if (!$this->getUser()->isLoggedIn()) {
			$this->redirect('Sign:in');
		}

		$user_id = $this->getUser()->getId();
		$this->company = $this->em->getRepository('Company')->findOneBy(array('user' => $user_id));
	}

	public function renderDefault()
	{

	}

	public function renderCreate()
	{
		$contacts = $this->em->getRepository('Contact')->findBy(array('user' => $this->getUser()->getId()));

		if ($contacts) {
			$this->template->contacts = $contacts;
		} else {
			$this->template->contacts = NULL;
		}		
	}

	/**
	 * Form to create invoice
	 * @return Nette\Application\UI\Form
	 */
	protected function createComponentInvoiceForm() 
	{
		$form = new Form();

		$form->addGroup('Základné údaje');
		$form->addText('description', 'Popis', 50, 100)
			 ->addRule(Form::FILLED, 'Musíte zadať popis.');
		
		$customer = array(
			'Europe' => array(
				'CZ' => 'Czech republic',
				'SK' => 'Slovakia',
				'GB' => 'United Kingdom',
			),
			'CA' => 'Canada',
			'US' => 'USA',
			'?'  => 'other',
		);
		$form->addSelect('contact', 'Zákazník', $customer)
			 ->setPrompt('Vyberte zákazníka');

		//container for all items
		$items = $form->addGroup('Položky');
		$items = $form->addDynamic("items", function (Container $container) {
			$container->addText("name", "Položka");
			$container->addText("quantity", "Množstvo");
			$container->addText("value", "Hodnota");

			//button for removing the new node
			$container->addSubmit("removeItem", "Odobrať položku")
				->addRemoveOnClick();
		}, 2);

		/** @var \Kdyby\Replicator\Container $items */
		//button for adding a new node
		$items->addSubmit("addItem", "Pridať položku")
			  ->addCreateOnClick(TRUE);

		$form->addGroup('');
		$form->addSubmit("save", "Uložit");

		$form->onSuccess[] = $this->invoiceFormSubmitted;

		return $form;
	}

	/**
	* @param Nette\Application\UI\Form $form
	*/
	public function invoiceFormSubmitted(Form $form) 
	{	
		$invoice = new Invoice;
		$invoice->setDescription($form->values->description)
				->setCompany($this->company);


		foreach ($form['items']->values as $item) {
			dump($item['name'] . ' ' . $item['quantity'] . ' ' . $item['value']);
		}
		exit;

		$this->em->persist($invoice);

		$this->flashMessage('Faktúra bola úspešne zaevidovaná do databázy.', 'success');
		
		$this->em->flush();
		$this->redirect('Invoice:');
	}

}
