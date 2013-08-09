<?php

use Doctrine\ORM\Mapping,
		Doctrine\Common\Collections\ArrayCollection;

/**
 * @Entity(repositoryClass="ContactRepository")
 */
class Contact extends \Nette\Object
{
	/**
	 * @Id
	 * @Column(type="integer")
	 * @GeneratedValue
	 * @var int
	 */
	private $id;

	/** @Column(type="text", length=20) */
	private $name;

	/**
	 * @ManyToOne(targetEntity="User", inversedBy="contacts")
	 * @JoinColumn(name="user_id", referencedColumnName="id")
	 **/
	private $user;

	/**
	 * @OneToMany(targetEntity="Invoice", mappedBy="contact")
	 **/
	private $invoices;


	public function __construct() 
	{
		$this->invoices = new ArrayCollection;
	}


	/**
	 * Get ID
	 * @return int
	 */
	public function getId()
	{
		return $this->id;
	}

	/**
	 * Get contact name
	 * @return string
	 */
	public function getName() 
	{
		return $this->name;
	}
	
	/**
	 * Set contact name
	 * @param string
	 * @return Contact
	 */
	public function setName($name) 
	{
		$this->name = (string)$name;
		return $this;
	}

	/**
	 * Get user
	 * @return User
	 */	
	public function getUser() 
	{
		return $this->user;
	}
	
	/**
	 * Set user
	 * @param User
	 * @return Contact
	 */
	public function setUser(User $user) 
	{
		$this->user = $user;
		return $this;
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
	 * Add invoice
	 * @param Invoice
	 * @return Company
	 */
	 
	public function addInvoice(Invoice $invoice)
	{
		$this->invoices->add($invoice);
		return $this;
	}
}