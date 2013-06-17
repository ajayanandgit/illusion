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
			 ->addRule(Form::FILLED, 'Musíte zadať názov firmy.');
		$form->addSubmit('submit', 'OK')
			 ->setAttribute('class', 'btn btn-info');

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
					->setUser($user);

			$this->em->persist($company);

			$this->flashMessage('Profil firmy bol založený.', 'success');
		} 
		else {
			
			$this->company->setCompanyName($form->values->companyName);			

			$this->flashMessage('Profil firmy bol upravený.', 'success');
		}
		
		$this->em->flush();
		$this->redirect('Company:');
	}

}
