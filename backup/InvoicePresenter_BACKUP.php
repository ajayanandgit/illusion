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

	public function renderDefault()
	{

	}

	public function renderCreate()
	{

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

		$customer = array();

		foreach ($this->contacts as $contact) 
		{
			$customer[$contact->getId()] = $contact->getName();
		}

		$form->addSelect('customer', 'Zákazník', $customer)
			 ->setPrompt('Vyberte zákazníka');

		//container for all items
		$items = $form->addGroup('Položky');
		$items = $form->addDynamic('items', function (Container $container) {
			$container->addText('name', 'Položka');
			$container->addText('quantity', 'Množstvo');
			$container->addText('value', 'Hodnota');

			//button for removing the new node
			$container->addSubmit('removeNode', 'Odobrať položku')
				->addRemoveOnClick();
		}, 1);

		/** @var \Kdyby\Replicator\Container $items */
		//button for adding a new node
		$items->addSubmit('addNode', 'Pridať položku')
			  ->addCreateOnClick(TRUE);

		$form->addGroup('');
		$form->addSubmit('save', 'Uložit');

		// $form->onSuccess[] = $this->invoiceFormSubmitted;

		return $form;
	}

	/**
	 * @param Nette\Application\UI\Form $form
	 */
	public function invoiceFormSubmitted(Form $form)
	{	
		$invoice = new Invoice;
		$items = new Items;
		
		$invoice->setDescription($form->values->description)
				->setCompany($this->company);
				// ->setCustomerId($form->values->customer);

		foreach ($form['items']->values as $item) {
			
			$items->setName($item['name'])
				  ->setQuantity($item['quantity'])
				  ->setValue($item['value']);

			$invoice->addItems($items);

			$this->em->persist($items);

		}

		$this->em->persist($invoice);

		$this->flashMessage('Faktúra bola úspešne zaevidovaná do databázy.', 'success');
		
		$this->em->flush();
		$this->redirect('Invoice:');
	}

}
