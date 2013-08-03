<?php

use Nette\Application\UI,
	Nette\Security as NS;


/**
 * Sign in/out presenters.
 *
 * @author     Daniel Misina
 * @package    UctovnySystem
 */
class SignPresenter extends BasePresenter
{


	/**
	 * Sign in form component factory.
	 * @return Nette\Application\UI\Form
	 */
	protected function createComponentSignInForm()
	{
		$form = new UI\Form;
		$form->getElementPrototype()->class('form-inline');
		$form->addText('username', '')
			 ->setRequired('Please provide a username.')
			 ->setAttribute('placeholder', 'login')
			 ->setAttribute('class', 'form-control');

		$form->addPassword('password', '')
			 ->setRequired('Please provide a password.')
			 ->setAttribute('placeholder', 'heslo')
			 ->setAttribute('class', 'form-control');

		$form->addCheckbox('remember', 'Zapamätať si ma')
			 ->setAttribute('class', 'checkbox');

		$form->addSubmit('login', 'Prihlásiť')
			 ->setAttribute('class', 'btn btn-info');

		$form->onSuccess[] = callback($this, 'signInFormSubmitted');

		return $form;
	}



	public function signInFormSubmitted($form)
	{
		try {
			$values = $form->getValues();
			if ($values->remember) {
				$this->getUser()->setExpiration('+ 3 hours', FALSE);
			} else {
				$this->getUser()->setExpiration('+ 20 minutes', TRUE);
			}
			$this->getUser()->login($values->username, $values->password);
			$this->redirect('Homepage:');

		} catch (NS\AuthenticationException $e) {
			$form->addError($e->getMessage());
		}
	}



	public function actionOut()
	{
		$this->getUser()->logout();
		$this->flashMessage('You have been signed out.');
		$this->redirect('in');
	}

}
