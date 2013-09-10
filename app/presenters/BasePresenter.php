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


	/**
	 * Definition of menu items
	 */
	public function beforeRender()
	{
		parent::beforeRender();
		$this->template->menuItems = array(
			'Domov' => 'Homepage:',
			'Moja firma' => 'Company:',
			'Adresár' => 'Contact:',
			'Náklady' => 'Costs:',
			'Faktúry' => 'Invoice:',
			'Peňažný denník' => 'CashFlow:',
		);
	}


	/**
	 * Logout function
	 */
	public function handleSignOut()
	{
		$this->getUser()->logout();
		$this->redirect('Sign:in');
	}


	/** @var \Repositories\CostsRepository */
	protected $costsRepo;

	/** @var \Repositories\InvoiceRepository */
	protected $invoiceRepo;

	/** @var \Repositories\ContactRepository */
	protected $contactRepo;

	/** @var \Repositories\CashflowRepository */
	protected $cashflowRepo;

	/** @var \Repositories\PaymentRepository */
	protected $paymentRepo;

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
	 * @param \Repositories\InvoiceRepository
	 */
	public function injectInvoiceRepository(\Repositories\InvoiceRepository $invoiceRepo) {
		if ($this->invoiceRepo) {
			throw new Nette\InvalidStateException('InvoiceRepository has already been set');
		}
		$this->invoiceRepo = $invoiceRepo;
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

	/**
	 * @param \Repositories\CashflowRepository
	 */
	public function injectCashflowRepository(\Repositories\CashflowRepository $cashflowRepo) {
		if ($this->cashflowRepo) {
			throw new Nette\InvalidStateException('CashflowRepository has already been set');
		}
		$this->cashflowRepo = $cashflowRepo;
	}
	
	/**
	 * @param \Repositories\paymentRepository
	 */
	public function injectPaymentRepository(\Repositories\paymentRepository $paymentRepo) {
		if ($this->paymentRepo) {
			throw new Nette\InvalidStateException('paymentRepository has already been set');
		}
		$this->paymentRepo = $paymentRepo;
	}

	public function templatePrepareFilters($template)
    {
        $template->registerFilter($latte = $this->context->nette->createLatte());
    
        $set = Nette\Latte\Macros\MacroSet::install($latte->getCompiler());
        $set->addMacro('ifCurrentIn', function($node, $writer)
        {
            return $writer->write('foreach (%node.array as $l) { if ($_presenter->isLinkCurrent($l)) { $_c = true; break; }} if (isset($_c)): ');
        }, 'endif; unset($_c);');
    }
}
