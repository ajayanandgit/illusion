<?php

use Doctrine\ORM\Mapping,
		Doctrine\Common\Collections\ArrayCollection;

/**
 * @Entity(repositoryClass="PaymentRepository") 
 */
class Payment extends \Nette\Object
{
	/**
	 * @Id
	 * @Column(type="integer")
	 * @GeneratedValue
	 */
	private $id;

	/**
	 * @Column(type="datetime")
	 */
	private $pay_date;

	/**
	 * @Column(type="integer")
	 */
	private $payment;

	/**
	 * @ManyToOne(targetEntity="Invoice", inversedBy="payments")
	 * @JoinColumn(name="invoice_id", referencedColumnName="id")
	 */
	private $invoice;

	/**
	 * @ManyToOne(targetEntity="Company", inversedBy="payments")
	 * @JoinColumn(name="company_id", referencedColumnName="id")
	 */
	private $company;

	/**
	 * Get ID
	 * @return integer
	 */
	public function getId()
	{
		return $this->id;
	}

	/**
	 * Get date of payment
	 */
	public function getPayDate()
	{
		$date = $this->pay_date;
		$result = $date->format('d.m.Y');
		return $result;
	}

	/**
	 * Set date of payment
	 */
	public function setPayDate(\DateTime $pay_date)
	{
		$this->pay_date = $pay_date;
		return $this;
	}

	/**
	 * Get payment
	 */
	public function getPayment()
	{
		return $this->payment;
	}

	/**
	 * Set payment
	 */
	public function setPayment($payment)
	{
		$this->payment = $payment;
		return $this;
	}

	/**
	 * Get invoice
	 * @return Invoice
	 */
	public function getInvoice()
	{
		return $this->invoice;
	}

	/**
	 * Set invoice
	 * @param Invoice
	 * @return Payment
	 */
	public function setInvoice(Invoice $invoice)
	{
		$invoice->addPayment($this);
		$this->invoice = $invoice;
		return $this;
	}

	/**
	 * Get company
	 * @return Company
	 */
	public function getCompany()
	{
		return $this->company;
	}

	/**
	 * Set company
	 * @param Company
	 * @return Payment
	 */
	public function setInvoice(Company $company)
	{
		$company->addPayment($this);
		$this->company = $company;
		return $this;
	}

}