<?php

use Nette\Application\UI\Form;
use Nette\Application\BadRequestException;
use Nette\Application\ForbiddenRequestException;

/**
 * Cashflow presenter.
 */
class CashflowPresenter extends BasePresenter {

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
		$this->template->cashflow = $this->cashflowRepo->getCashflow($this->company->getId());
	}

}
