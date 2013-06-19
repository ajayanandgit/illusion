<?php

use Doctrine\ORM\Mapping;

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
	 * @ManyToOne(targetEntity="Company", inversedBy="costs")
	 * @JoinColumn(name="company_id", referencedColumnName="id")
	 **/
	private $company;

	/**
	 * @ManyToMany(targetEntity="Item", inversedBy="invoices")
	 * @JoinTable(name="invoices_items")
	 */
	private $items;


	public function __construct() 
	{
		$this->items = new \Doctrine\Common\Collections\ArrayCollection();
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
	 * @return Cost
	 */
	public function setCompany(Company $company)
	{
		$this->company = $company;
		return $this;
	}
}