<?php

/**
 * Homepage presenter.
 *
 * @author     Daniel Misina
 * @package    UctovnySystem
 */
class HomepagePresenter extends BasePresenter
{
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

	public function actionCreateDefaultUser()
	{
		$user = new User('admin');
		$user->setPassword($this->getContext()->authenticator->calculateHash('traktor'));
		$user->setEmail('info@nella-project.org')->setRole('admin');

		$this->em->persist($user);
		try {
			$this->em->flush();
		} catch(\PDOException $e) {
			dump($e);
			$this->terminate();
		}

		$this->sendResponse(new \Nette\Application\Responses\TextResponse('OK'));
		$this->terminate();
	}


	public function renderDefault()
	{
		$this->template->costs = $this->costsRepo->getLastCostsByCompany($this->company->getId());
		$this->template->invoices = $this->invoiceRepo->getLatestInvoices($this->company->getId());
		$this->template->payments = $this->paymentRepo->getLatestPayments($this->company);
	}

}
