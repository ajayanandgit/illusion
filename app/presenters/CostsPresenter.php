<?php

use Nette\Application\UI\Form;
use Nette\Application\BadRequestException;
use Nette\Application\ForbiddenRequestException;

/**
 * Costs presenter.
 */
class CostsPresenter extends BasePresenter {

	/** @persistent int */
	public $id;

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
		$this->template->var = "Jupii";
		$this->template->costs = $this->costsRepo->getCostsByCompany($this->company->getId());
		$this->template->balance = $this->costsRepo->getBalance($this->company->getId());
		$this->template->minCost = $this->costsRepo->getMin($this->company->getId());
		$this->template->maxCost = $this->costsRepo->getMax($this->company->getId());
	}


	/**
	 * Form to add cost
	 * @return Nette\Application\UI\Form
	 */
	protected function createComponentCostForm() 
	{
		$form = new Form();

		$form->addText('description', 'Popis', 50, 100)
			 ->addRule(Form::FILLED, 'Musíte zadať popis nákladu.')
			 ->setAttribute('class', 'form-control input-large')
			 ->setAttribute('placeholder', 'Popis nákladu');
		$form->addText('cost_date', 'Dátum', 50, 100)
			 ->setAttribute('class', 'form-control')
			 ->setAttribute('id', 'datepicker')
			 ->addRule(Form::FILLED, 'Musíte vyplniť dátum.');
		$form->addText('value', 'Suma v EUR', 50, 100)
			 ->addRule(Form::FILLED, 'Musíte zadať sumu.')
			 ->setAttribute('class', 'form-control input-large')
			 ->setAttribute('placeholder', 'Hodnota');
		$form->addSubmit('submit', 'Pridať náklad do zoznamu')
			 ->setAttribute('class', 'btn btn-info');

		$form->onSuccess[] = $this->costFormSubmitted;

		return $form;
	}

	/**
	* @param Nette\Application\UI\Form $form
	*/
	public function costFormSubmitted(Form $form) 
	{	
		$cost_date = date_create($form->values->cost_date);

		$cost = new Costs;
		$cost->setDescription($form->values->description)
			 ->setValue($form->values->value)
			 ->setCostDate($cost_date)
			 ->setCompany($this->company);

		$this->em->persist($cost);

		$this->flashMessage('Náklad bol úspešne zaevidovaný do databázy.', 'success');
		
		$this->em->flush();
		$this->redirect('Costs:');
	}

}
