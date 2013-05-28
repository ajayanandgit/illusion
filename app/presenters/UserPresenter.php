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
		
		// $user = $this->em->getRepository('User')->findOneById($this->id);

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
	protected function createComponentUserProfileForm() {

		$form = new Form();

		$form->addText('email', 'Email')
			 ->addRule(Form::EMAIL, 'Musíte zadať platnú emailovú adresu.');
		$form->addPassword('password', 'Heslo:')
			 ->setRequired('Zvoľte heslo')
			 ->addRule(Form::MIN_LENGTH, 'Heslo musí mať aspoň %d znakov', 5);
		$form->addPassword('passwordVerify', 'Heslo znova:')
			 ->setRequired('Zadajte prosím heslo znova.')
			 ->addRule(Form::EQUAL, 'Heslá sa nezhodujú', $form['password']);
		$form->addSelect('brr', 'Brrr', array(
			'zima' => 'Je mi zima',
			'teplo' => 'Je mi teplo',
		));
		$form['brr']->setDefaultValue('zima');
		$form->addSubmit('submit', 'OK')
			 ->setAttribute('class', 'btn btn-info');

		$form->onSuccess[] = $this->userProfileFormSubmitted;

		return $form;
	}


	/**
	* @param Nette\Application\UI\Form $form
	*/
	public function userProfileFormSubmitted(Form $form) {
	
		$this->user->setEmail($form->values->email);
		$this->user->setPassword($form->values->password);

		$this->flashMessage('Profil používateľa bol upravený.', 'success');
		
		$this->em->flush();
		$this->redirect('User:');
	}
}