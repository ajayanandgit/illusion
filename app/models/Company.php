<?php

use Doctrine\ORM\Mapping,
		Doctrine\Common\Collections\ArrayCollection;

/**
 * @Entity
 * 
 * @property-read int $id
 * @property-read string $companyName
 */
class Company extends \Nette\Object
{
	/**
	 * @Id
	 * @Column(type="integer")
	 * @GeneratedValue
	 */
	private $id;

	/**
	 * @Column(unique=true)
	 */
	private $companyName;

	/**
	 * @Column(type="string")
	 */
	private $street;

	/**
	 * @Column(type="string")
	 */
	private $city;

	/**
	 * @Column(type="integer")
	 */
	private $postcode;

	/**
	 * @Column(type="integer")
	 */
	private $ico;

	/**
	 * @Column(type="string")
	 */
	private $dic_;

	/**
	 * @Column(type="string")
	 */
	private $icDph_;

	/**
	 * @Column(type="string")
	 */
	private $accountNumber;

	/**
	 * @OneToOne(targetEntity="User", inversedBy="company", cascade="persist")
	 * @JoinColumn(name="user_id", referencedColumnName="id")
	 */
	private $user;

	/**
	 * @OneToMany(targetEntity="Invoice", mappedBy="company")
	 */
	private $invoices;

	/**
	 * @OneToMany(targetEntity="Costs", mappedBy="company")
	 */
	private $costs;

	/**
	 * @OneToMany(targetEntity="Payment", mappedBy="company")
	 */
	private $payments;


	public function __construct() 
	{
		$this->costs = new ArrayCollection;
		$this->invoices = new ArrayCollection;
		$this->payments = new ArrayCollection;
	}
	

	/**
	 * @return int
	 */
	public function getId()
	{
		return $this->id;
	}
	
	/**
	 * @return string
	 */
	public function getCompanyName()
	{
		return $this->companyName;
	}

	/**
	 * @param string
	 * @return Company
	 */
	public function setCompanyName($companyName)
	{
		$this->companyName = $companyName;
		return $this;
	}

	/**
	 * @return string
	 */
	public function getStreet()
	{
		return $this->street;
	}

	/**
	 * @param string
	 * @return Company
	 */
	public function setStreet($street)
	{
		$this->street = $street;
		return $this;
	}

	/**
	 * @return string
	 */
	public function getCity()
	{
		return $this->city;
	}

	/**
	 * @param string
	 * @return Company
	 */
	public function setCity($city)
	{
		$this->city = $city;
		return $this;
	}

	/**
	 * @return string
	 */
	public function getPostcode()
	{
		return $this->postcode;
	}

	/**
	 * @param string
	 * @return Company
	 */
	public function setPostcode($postcode)
	{
		$this->postcode = $postcode;
		return $this;
	}

	/**
	 * @return integer
	 */
	public function getIco()
	{
		return $this->ico;
	}

	/**
	 * @param integer
	 * @return Company
	 */
	public function setIco($ico)
	{
		$this->ico = $ico;
		return $this;
	}

	/**
	 * @return string
	 */
	public function getDic()
	{
		return $this->dic_;
	}

	/**
	 * @param string
	 * @return Company
	 */
	public function setDic($dic)
	{
		$this->dic_ = $dic;
		return $this;
	}

	/**
	 * @return string
	 */
	public function getIcDph()
	{
		return $this->icDph_;
	}

	/**
	 * @param string
	 * @return Company
	 */
	public function setIcDph($icDph)
	{
		$this->icDph_ = $icDph;
		return $this;
	}

	/**
	 * @return string
	 */
	public function getAccountNumber()
	{
		return $this->accountNumber;
	}

	/**
	 * @param string
	 * @return Company
	 */
	public function setAccountNumber($accountNumber)
	{
		$this->accountNumber = $accountNumber;
		return $this;
	}

	/**
	 * Set User
	 * @param User
	 * @return Company
	 */
	public function setUser(User $user) 
	{
		$this->user = $user;
		$user->setCompany($this);
		return $this;
	}

	/**
	 * Get User
	 * @return User
	 */
	public function getUser() 
	{
		return $this->user;
	}

	/**
	 * Get invoices
	 * @return ArrayCollection
	 */
	public function getInvoices()
	{
		return $this->invoices;
	}

	/**
	 * Set invoice
	 * @param Invoice
	 * @return Company
	 */
	public function addInvoice(Invoice $invoice)
	{
		$this->invoices->add($invoice);
		$invoice->setCompany($this);
		return $this;
	}

	/**
	 * Get Costs
	 * @return ArrayCollection
	 */
	public function getCosts()
	{
		return $this->costs;
	}

	/**
	 * Get payments
	 * @return ArrayCollection
	 */
	public function getPayments()
	{
		return $this->payments;
	}

	/**
	 * Add payment
	 * @param Payment
	 * @return Company
	 */
	 
	public function addPayment(Payment $payment)
	{
		$this->payments->add($payment);
		return $this;
	}
}