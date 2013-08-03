<?php

use Doctrine\ORM\Mapping,
		Doctrine\Common\Collections\ArrayCollection;

/**
 * @Entity(repositoryClass="InvoiceRepository") 
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
	 * @Column(type="datetime")
	 */
	private $create_date;

	/**
	 * @Column(type="datetime")
	 */
	private $delivery_date;

	/**
	 * @Column(type="datetime")
	 */
	private $due_date;

	/**
	 * @ManyToOne(targetEntity="Company", inversedBy="invoices")
	 * @JoinColumn(name="company_id", referencedColumnName="id")
	 **/
	private $company;

	/**
	 * @ManyToOne(targetEntity="Contact", inversedBy="invoices")
	 * @JoinColumn(name="customer_id", referencedColumnName="id")
	 **/
	private $customer;

	/**
	 * @ManyToMany(targetEntity="Items", inversedBy="invoices")
	 * @JoinTable(name="invoices_items")
	 */
	private $items;


	/**
	 * Get ID
	 * @return integer
	 */
	public function getId()
	{
		return $this->id;
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
	 * Get date of invoice's creation
	 */
	public function getCreateDate()
	{
		$date = $this->create_date;
		$result = $date->format('d.m.Y');
		return $result;
	}

	/**
	 * Set date of invoice's creation
	 */
	public function setCreateDate(\DateTime $create_date)
	{
		$this->create_date = $create_date;
		return $this;
	}

	/**
	 * Get date of invoice's delivery
	 */
	public function getDeliveryDate()
	{
		$date = $this->delivery_date;
		$result = $date->format('d.m.Y');
		return $result;
	}

	/**
	 * Set date of invoice's delivery
	 */
	public function setDeliveryDate(\DateTime $delivery_date)
	{
		$this->delivery_date = $delivery_date;
		return $this;
	}

	/**
	 * Get date of invoice's maturity
	 */
	public function getDueDate()
	{
		$date = $this->due_date;
		$result = $date->format('d.m.Y');
		return $result;
	}

	/**
	 * Set date of invoice's maturity
	 */
	public function setDueDate(\DateTime $due_date)
	{
		$this->due_date = $due_date;
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
	 * @return Customer
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
		$customer->addInvoice($this);
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
	public function addItem(Items $item)
	{
		$item->addInvoice($this);
		$this->items[] = $item;
		return $this;
	}
}