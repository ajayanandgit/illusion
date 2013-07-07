<?php

use Doctrine\ORM\Mapping,
		Doctrine\Common\Collections\ArrayCollection;

/**
 * @Entity
 */
class Invoice extends \Nette\Object
{
	/**
	 * @Id
	 * @Column(type="integer")
	 * @GeneratedValue
	 * @var int
	 */
	private $id;

	/**
	 * @Column(type="date")
	 * @GeneratedValue
	 */
	private $invoiceDate;

	/**
	 * @Column(type="text")
	 */
	private $description;

	/**
	 * @ManyToOne(targetEntity="Contact", inversedBy="invoices")
	 * @JoinColumn(name="customer_id", referencedColumnName="id")
	 */
	private $customer;


	/**
	 * @ManyToOne(targetEntity="Company", inversedBy="invoices")
	 * @JoinColumn(name="company_id", referencedColumnName="id")
	 **/
	private $company;

	/**
	 * @ManyToMany(targetEntity="Items", inversedBy="invoices")
	 * @JoinTable(name="invoices_items")
	 */
	private $items;


	public function __construct() 
	{
		$this->items = new ArrayCollection;
	}


	/**
	 * Get ID
	 * @return integer
	 */
	public function getId()
	{
		return $this->id;
	}

	/**
	 * Get invoice date
	 * @return Invoice
	 */
	public function getDate()
	{
		return $this->invoiceDate;
	}

	/**
	 * Get description
	 * @return Invoice
	 */
	public function getDescription()
	{
		return $this->description;
	}

	/**
	 * Set description
	 * @param String
	 * @return Invoice
	 */
	public function setDescription($description)
	{
		$this->description = $description;
		return $this;
	}

	/**
	 * Get Company
	 * @return Company
	 */
	public function getCompany()
	{
		return $this->company;
	}

	/**
	 * Set company
	 * @param Company
	 * @return Invoice
	 */
	public function setCompany(Company $company)
	{
		$this->company = $company;
		return $this;
	}

	/**
	 * Get customer
	 * @return Contact
	 */
	public function getCustomer()
	{
		return $this->customer;
	}

	/**
	 * Set customer
	 * @param Contact
	 * @return Invoice
	 */
	public function setCustomer(Contact $customer)
	{
		$this->customer = $customer;
		return $this;
	}

	/**
	 * Get items
	 * @return ArrayCollection
	 */
	public function getItems()
	{
		return $this->items;
	}

	/**
	 * @param Item
	 * @return Invoice
	 */
	public function addItems(Items $item)
	{
		$this->items->add($item);
		$item->addInvoice($this);
		return $this;
	}
}