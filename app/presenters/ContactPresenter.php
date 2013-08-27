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

	/** @var object */
	private $contact;

	protected function startup()
	{
		parent::startup();

		if (!$this->getUser()->isLoggedIn()) {
			$this->redirect('Sign:in');
		}
	}

	public function renderDefault()
	{
		// $contacts = $this->em->getRepository('Contact')->findBy(array('user' => $this->getUser()->getId()));
		$contacts = $this->contactRepo->getAlphaListContacts($this->getUser()->getId());

		if ($contacts) {
			$this->template->contacts = $contacts;
		} else {
			$this->template->contacts = NULL;
		}
		
	}

	/**
	 * Edit contact profile
	 */
	public function actionEdit($contactId) 
	{
		$this->contact = $this->em->getRepository('Contact')->findOneBy(array('id' => $contactId));

		if (!$this->contact) {
			throw new BadRequestException;
		}

		$this['contactForm']->setDefaults(array(
				'name' => $this->contact->getName(),
				'street' => $this->contact->getStreet(),
				'city' => $this->contact->getCity(),
				'postcode' => $this->contact->getPostcode(),
				'ico' => $this->contact->getIco(),
				'dic' => $this->contact->getDic(),
				'icDph' => $this->contact->getIcDph(),
				'vatPayer' => $this->contact->getVatPayer()
			));
	}

	public function handleRemoveContact($contactId)
	{
		$contact = $this->em->getRepository('Contact')->findOneBy(array('id' => $contactId));
		$user = $this->em->getRepository('User')->findOneById($this->getUser()->getId());

		// $user->removeContact($contact);
		$this->em->remove($contact);
		$this->em->flush();

		$this->flashMessage("Kontakt bol vymazaný.", 'danger');
		$this->redirect('Contact:');
	}


	/**
	 * Form to add contact
	 * @return Nette\Application\UI\Form
	 */
	protected function createComponentContactForm() 
	{
		$form = new Form();

		$form->addText('name', 'Názov', 50, 100)
			 ->addRule(Form::FILLED, 'Musíte zadať názov.')
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
		$form->addCheckbox('vatPayer', 'Platca DPH', 50, 100)
			 ->setAttribute('class', 'form-control input-small');
		$form->addSubmit('submit', 'uložiť')
			 ->setAttribute('class', 'btn btn-info btn-small');


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

		if (!$this->contact) 
		{
			$contact = new Contact;
			$contact->setName($form->values->name)
					->setStreet($form->values->street)
					->setCity($form->values->city)
					->setPostcode($form->values->postcode)
					->setIco($form->values->ico)
					->setDic($form->values->dic)
					->setIcDph($form->values->icDph)
					->setVatPayer($form->values->vatPayer)
					->setUser($user);

			$this->em->persist($contact);

			$this->flashMessage('Nový kontakt bol uložený do adresára.', 'success');
		}
		else
		{
			$this->contact->setName($form->values->name)
						  ->setStreet($form->values->street)
						  ->setCity($form->values->city)
						  ->setPostcode($form->values->postcode)
						  ->setIco($form->values->ico)
						  ->setDic($form->values->dic)
						  ->setIcDph($form->values->icDph)
						  ->setVatPayer($form->values->vatPayer);

			$this->flashMessage('Kontakt bol úspešne upravený.', 'success');
		}

		$this->em->flush();
		$this->redirect('Contact:');
	}

}
