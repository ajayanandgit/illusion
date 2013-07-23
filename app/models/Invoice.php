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
	 */
	private $id;

	/**
	 * @Column(type="text")
	 */
	private $description;

	/**
	 * @Column(type="integer")
	 */
	private $customer_id;


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

	// /**
	//  * Get invoice date
	//  * @return Invoice
	//  */
	// public function getInvoiceDate()
	// {
	// 	return $this->invoiceDate;
	// }

	// *
	//  * Set invoice date
	//  * @param Date
	//  * @return Invoice
	
	// public function setInvoiceDate($invoiceDate)
	// {
	// 	$this->invoiceDate = $invoiceDate;
	// 	return $this;
	// }

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
	 * Get customer id
	 * @return Invoice
	 */
	public function getCustomerId()
	{
		return $this->customer_id;
	}

	/**
	 * Set customer id
	 * @param Integer
	 * @return Invoice
	 */
	public function setCustomerId($customer_id)
	{
		$this->customer_id = $customer_id;
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
	public function addItem(Items $item)
	{
		$item->addInvoice($this);
		$this->items[] = $item;
		return $this;
	}
}