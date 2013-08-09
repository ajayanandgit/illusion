<?php

/**
 * Base class for all application presenters.
 *
 * @author     Daniel Misina
 * @package    UctovnySystem
 */
abstract class BasePresenter extends Nette\Application\UI\Presenter
{
	/** @var Doctrine\ORM\EntityManager */
	protected $em;

	public function injectEntityManager(\Doctrine\ORM\EntityManager $em)
	{
		if ($this->em) {
			throw new \Nette\InvalidStateException('Entity manager has already been set');
		}
		$this->em = $em;
		return $this;
	}

	/* Logout function */
	public function handleSignOut()
	{
		$this->getUser()->logout();
		$this->redirect('Sign:in');
	}


	/** @var \Repositories\CostsRepository */
	protected $costsRepo;

	/** @var \Repositories\ContactRepository */
	protected $contactRepo;

	/**
	 * @param \Repositories\CostsRepository
	 */
	public function injectCostsRepository(\Repositories\CostsRepository $costsRepo) {
		if ($this->costsRepo) {
			throw new Nette\InvalidStateException('CostsRepository has already been set');
		}
		$this->costsRepo = $costsRepo;
	}

	/**
	 * @param \Repositories\ContactRepository
	 */
	public function injectContactRepository(\Repositories\ContactRepository $contactRepo) {
		if ($this->contactRepo) {
			throw new Nette\InvalidStateException('ContactRepository has already been set');
		}
		$this->contactRepo = $contactRepo;
	}
	
}
