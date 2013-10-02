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
	 * @Column(type="string")
	 */
	private $contactPerson;

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
	private $dic;

	/**
	 * @Column(type="string")
	 */
	private $icDph;


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
	 * @return string
	 */
	public function getContactPerson()
	{
		return $this->contactPerson;
	}

	/**
	 * @param string
	 * @return Contact
	 */
	public function setContactPerson($contactPerson)
	{
		$this->contactPerson = $contactPerson;
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
		return $this->dic;
	}

	/**
	 * @param string
	 * @return Company
	 */
	public function setDic($dic)
	{
		$this->dic = $dic;
		return $this;
	}

	/**
	 * @return string
	 */
	public function getIcDph()
	{
		return $this->icDph;
	}

	/**
	 * @param string
	 * @return Company
	 */
	public function setIcDph($icDph)
	{
		$this->icDph = $icDph;
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
		$user->addContact($this);
		$this->user = $user;
		return $this;
	}

	/**
	 * Unset user
	 * @return void
	 */
	public function unsetUser()
	{
		$this->user = null;
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