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

	protected function startup()
	{
		parent::startup();

		if (!$this->getUser()->isLoggedIn()) {
			$this->redirect('Sign:in');
		}
	}

	public function renderDefault()
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

		return $form;
	}

	/**
	* @param Nette\Application\UI\Form $form
	*/
	public function invoiceFormSubmitted(Form $form) 
	{	
		// $invoice = new Invoice;
		// $invoice->setDescription($form->values->description)
		// 		->setCompany($this->company);

		// $this->em->persist($invoice);

		// $this->flashMessage('Náklad bol úspešne zaevidovaný do databázy.', 'success');
		
		// $this->em->flush();
		// $this->redirect('Costs:');
	}

}
