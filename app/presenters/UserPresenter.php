<?php

use Nette\Application\UI\Form;
use Nette\Application\BadRequestException;
use Nette\Application\ForbiddenRequestException;

/**
 * User presenter.
 */
class UserPresenter extends BasePresenter 
{
	/** @persistent int */
	public $id;

	/** @var object */
	private $user;


	protected function startup()
	{
		parent::startup();

		if (!$this->getUser()->isLoggedIn()) {
			$this->redirect('Sign:in');
		}

		$this->id = $this->getUser()->getId();
		$this->user = $this->em->getRepository('User')->findOneById($this->id);

	}

	public function RenderDefault()
	{
		$userProfile = $this->em->getRepository('User')->findOneById($this->id);

		$this->template->profile = $userProfile;
	}


	/**
	 * Edit profile of user
	 */
	public function actionDefault() 
	{
		if (!$this->user) {
			throw new BadRequestException;
		}

		$this['userProfileForm']->setDefaults(array(
				'email' => $this->user->getEmail(),
		));
	}

	
	/**
	 * Form to edit user's profile
	 * @return Nette\Application\UI\Form
	 */
	protected function createComponentUserProfileForm() 
	{
		$form = new Form();

		$form->addText('email', 'Email')
			 ->addRule(Form::EMAIL, 'Musíte zadať platnú emailovú adresu.');
		$form->addSubmit('submit', 'Uložiť')
			 ->setAttribute('class', 'btn btn-success');

		$form->onSuccess[] = $this->userProfileFormSubmitted;

		return $form;
	}


	/**
	 * Form to change acount password
	 * @return Nette\Application\UI\Form
	 */
	protected function createComponentChangePasswordForm()
	{
		$form = new Form();

		$form->addPassword('oldPassword', 'Staré heslo:')
			 ->setRequired('Zvoľte heslo')
			 ->addRule(Form::MIN_LENGTH, 'Heslo musí mať aspoň %d znakov', 5);
		$form->addPassword('newPassword', 'Nové heslo:')
			 ->setRequired('Zvoľte heslo')
			 ->addRule(Form::MIN_LENGTH, 'Heslo musí mať aspoň %d znakov', 5);
		$form->addPassword('newPasswordVerify', 'Nové heslo znova:')
			 ->setRequired('Zadajte prosím heslo znova.')
			 ->addRule(Form::EQUAL, 'Heslá sa nezhodujú', $form['newPassword']);
		$form->addSubmit('submit', 'Uložiť')
			 ->setAttribute('class', 'btn btn-success');

		$form->onSuccess[] = $this->changePasswordFormSubmitted;

		return $form;
	}


	/**
	* @param Nette\Application\UI\Form $form
	*/
	public function userProfileFormSubmitted(Form $form) 
	{	
		$this->user->setEmail($form->values->email);

		$this->flashMessage('Profil používateľa bol aktualizovaný.', 'success');
		
		$this->em->flush();
		$this->redirect('User:');
	}


	/**
	* @param Nette\Application\UI\Form $form
	*/
	public function changePasswordFormSubmitted(Form $form) 
	{
		if (md5($form->values->oldPassword) != $this->user->getPassword()) {
			
			$this->flashMessage('Zadali ste nesprávne heslo.', 'error');
			$this->redirect('User:password');

		} else {

			$this->user->setPassword($form->values->newPassword);

			$this->flashMessage('Heslo bolo úspešné zmenené.', 'success');
			
			$this->em->flush();
			$this->redirect('Homepage:');
		}	
	}
}