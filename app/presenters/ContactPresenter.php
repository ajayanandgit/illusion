<?php

use Nette\Application\UI\Form;
use Nette\Application\BadRequestException;
use Nette\Application\ForbiddenRequestException;

/**
 * Contact presenter.
 */
class ContactPresenter extends BasePresenter {

	/** @persistent int */
	public $id;

	protected function startup()
	{
		parent::startup();

		if (!$this->getUser()->isLoggedIn()) {
			$this->redirect('Sign:in');
		}
	}

	public function renderDefault()
	{
		$contacts = $this->em->getRepository('Contact')->findBy(array('user' => $this->getUser()->getId()));

		if ($contacts) {
			$this->template->contacts = $contacts;
		} else {
			$this->template->contacts = NULL;
		}
		
	}


	/**
	 * Form to add contact
	 * @return Nette\Application\UI\Form
	 */
	protected function createComponentContactForm() 
	{
		$form = new Form();

		$form->addText('name', 'Názov', 50, 100)
			 ->addRule(Form::FILLED, 'Musíte zadať názov.');
		$form->addSubmit('submit', 'OK')
			 ->setAttribute('class', 'btn btn-info');

		$form->onSuccess[] = $this->contactFormSubmitted;

		return $form;
	}

	/**
	* @param Nette\Application\UI\Form $form
	*/
	public function contactFormSubmitted(Form $form) 
	{	
		$id = $this->getUser()->getId();
		$user = $this->em->getRepository('User')->findOneById($id);

		$contact = new Contact;
		$contact->setName($form->values->name)
				->setUser($user);

		$this->em->persist($contact);

		$this->flashMessage('Nový kontakt bol uložený do adresára.', 'success');
		
		$this->em->flush();
		$this->redirect('Contact:');
	}

}
