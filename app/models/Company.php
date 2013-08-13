<?php

use Doctrine\ORM\Mapping;

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
	 * @var int
	 */
	private $id;

	/**
	 * @Column(unique=true)
	 * @var string
	 */
	private $companyName;

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

	public function __construct() {
		$this->costs = new \Doctrine\Common\Collections\ArrayCollection();
		$this->invoices = new \Doctrine\Common\Collections\ArrayCollection();
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
}