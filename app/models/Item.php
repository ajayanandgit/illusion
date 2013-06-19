<?php

use Doctrine\ORM\Mapping;

/**
 * @Entity
 */
class Item extends \Nette\Object
{
	/**
	 * @Id
	 * @Column(type="integer")
	 * @GeneratedValue
	 * @var int
	 */
	private $id;

	/**
	 * @ManyToMany(targetEntity="Invoice", mappedBy="items")
	 */
	private $invoices;


	public function __construct() 
	{
		$this->invoices = new \Doctrine\Common\Collections\ArrayCollection();
	}


	/**
	 * Get ID
	 * @return integer
	 */
	public function getId()
	{
		return $this->id;
	}
}