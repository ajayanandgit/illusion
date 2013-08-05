<?php

use Doctrine\ORM\Mapping,
		Doctrine\Common\Collections\ArrayCollection;

/**
 * @Entity
 */
class Items extends \Nette\Object
{
	/**
	 * @Id
	 * @Column(type="integer")
	 * @GeneratedValue
	 */
	private $id;

	/**
	 * @Column(type="string")
	 */
	private $name;

	/**
	 * @Column(type="integer")
	 */
	private $quantity;

	/**
	 * @Column(type="integer")
	 */
	private $value;

	/**
	 * @Column(type="string", length=10)
	 */
	private $unit;

	/**
	 * @ManyToMany(targetEntity="Invoice", mappedBy="items")
	 */
	private $invoices;


	public function __construct() 
	{
		$this->invoices = new ArrayCollection;
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
	 * BLBOST
	 */
	public function setId($id)
	{
		return $this->id = $id;
	}

	/**
	 * Get name
	 * @return Item
	 */
	public function getName()
	{
		return $this->name;
	}

	/**
	 * Set name
	 * @param String
	 * @return Item
	 */
	public function setName($name)
	{
		$this->name = $name;
		return $this;
	}

	/**
	 * Get quantity
	 * @return Item
	 */
	public function getQuantity()
	{
		return $this->quantity;
	}

	/**
	 * Set quantity
	 * @param Integer
	 * @return Item
	 */
	public function setQuantity($quantity)
	{
		$this->quantity = $quantity;
		return $this;
	}

	/**
	 * Get unit of item
	 * @return Item
	 */
	public function getUnit()
	{
		return $this->unit;
	}

	/**
	 * Set unit of item
	 * @param String
	 * @return Item
	 */
	public function setUnit($unit)
	{
		$this->unit = (string)$unit;
		return $this;
	}

	/**
	 * Get value
	 * @return Item
	 */
	public function getValue()
	{
		return $this->value;
	}

	/**
	 * Set value
	 * @param Integer
	 * @return Item
	 */
	public function setValue($value)
	{
		$this->value = $value;
		return $this;
	}

	/**
	 * Add invoice
	 * @param Invoice
	 * @return Item
	 */
	public function addInvoice(Invoice $invoice)
	{
		$this->invoices[] = $invoice;
	}
}