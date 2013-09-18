<?php

use Nette\Application\UI\Form;
use Nette\Application\BadRequestException;
use Nette\Application\ForbiddenRequestException;

/**
 * Company presenter.
 */
class CompanyPresenter extends BasePresenter
{
	/** @persistent int */
	public $id;

	/** @var object */
	private $company;


	protected function startup()
	{
		parent::startup();

		if (!$this->getUser()->isLoggedIn()) {
			$this->redirect('Sign:in');
		}
	}

	public function renderDefault()
	{
		$usersCompany = $this->em->getRepository('Company')->findOneBy(array('user' => $this->getUser()->getId()));

		if ($usersCompany) {
			$this->template->company = $usersCompany;
		} else {
			$this->template->company = NULL;
		}
		
	}


	/**
	 * Edit company profile
	 */
	public function actionEdit() 
	{		
		$this->company = $this->em->getRepository('Company')->findOneBy(array('user' => $this->getUser()->getId()));

		if (!$this->company) {
			throw new BadRequestException;
		}

		$this['companyForm']->setDefaults(array(
				'companyName' => $this->company->getCompanyName(),
				'street' => $this->company->getStreet(),
				'city' => $this->company->getCity(),
				'postcode' => $this->company->getPostcode(),
				'ico' => $this->company->getIco(),
				'dic' => $this->company->getDic(),
				'icDph' => $this->company->getIcDph(),
				'accountNumber' => $this->company->getAccountNumber()
			));
	}


	/**
	 * Form to edit company profile
	 * @return Nette\Application\UI\Form
	 */
	protected function createComponentCompanyForm() 
	{
		$form = new Form();

		$form->addText('companyName', 'Názov firmy', 50, 100)
			 ->addRule(Form::FILLED, 'Vyplňte prosím toto pole')
			 ->setAttribute('class', 'form-control input-small');
		$form->addText('street', 'Ulica', 50, 100)
			 ->addRule(Form::FILLED, 'Vyplňte prosím toto pole')
			 ->setAttribute('class', 'form-control input-small');
		$form->addText('city', 'Mesto', 50, 100)
			 ->addRule(Form::FILLED, 'Vyplňte prosím toto pole')
			 ->setAttribute('class', 'form-control input-small');
		$form->addText('postcode', 'PSČ', 50, 100)
			 ->addRule(Form::FILLED, 'Vyplňte prosím toto pole')
			 ->setAttribute('class', 'form-control input-small');
		$form->addText('ico', 'IČO', 50, 100)
			 ->addRule(Form::FILLED, 'Vyplňte prosím toto pole')
			 ->setAttribute('class', 'form-control input-small');
		$form->addText('dic', 'DIČ', 50, 100)
			 ->addRule(Form::FILLED, 'Vyplňte prosím toto pole')
			 ->setAttribute('class', 'form-control input-small');
		$form->addText('icDph', 'IČ DPH', 50, 100)
			 ->addRule(Form::FILLED, 'Vyplňte prosím toto pole')
			 ->setAttribute('class', 'form-control input-small');
		$form->addText('accountNumber', 'Číslo účtu', 50, 100)
			 ->addRule(Form::FILLED, 'Vyplňte prosím toto pole')
			 ->setAttribute('class', 'form-control input-small');
		$form->addSubmit('submit', 'uložiť')
			 ->setAttribute('class', 'btn btn-info btn-small');

		$form->onSuccess[] = $this->companyFormSubmitted;

		return $form;
	}


	/**
	* @param Nette\Application\UI\Form $form
	*/
	public function companyFormSubmitted(Form $form) 
	{
		$id = $this->getUser()->getId();
		$user = $this->em->getRepository('User')->findOneById($id);
		
		if (!$this->company) {
			
			$company = new Company;
			$company->setCompanyName($form->values->companyName)
					->setStreet($form->values->street)
					->setCity($form->values->city)
					->setPostcode($form->values->postcode)
					->setIco($form->values->ico)
					->setDic($form->values->dic)
					->setIcDph($form->values->icDph)
					->setAccountNumber($form->values->accountNumber)
					->setUser($user);

			$this->em->persist($company);

			$this->flashMessage('Profil firmy bol založený.', 'success');
		} 
		else {
			
			$this->company->setCompanyName($form->values->companyName)
						  ->setStreet($form->values->street)
						  ->setCity($form->values->city)
						  ->setPostcode($form->values->postcode)
						  ->setIco($form->values->ico)
						  ->setDic($form->values->dic)
						  ->setIcDph($form->values->icDph)
						  ->setAccountNumber($form->values->accountNumber);

			$this->flashMessage('Profil firmy bol upravený.', 'success');
		}
		
		$this->em->flush();
		$this->redirect('Company:');
	}

}
