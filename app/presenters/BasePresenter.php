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
}
