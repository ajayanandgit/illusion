<?php

use Doctrine\ORM\Mapping;

/**
 * @Entity
 * 
 * @property-read int $id
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

	/**
	 * @ManyToMany(targetEntity="AddressBook", mappedBy="contacts")
	 **/
	private $addressBooks;

    public function __construct() 
    {
        $this->addressBooks = new \Doctrine\Common\Collections\ArrayCollection();
    }


	/**
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
	public function getContactName() {
		return $this->name;
	}
	
	/**
	 * Set contact name
	 * @param string
	 * @return Tag
	 */
	public function setContactName($name) 
	{
		$this->name = (string)$name;
		return $this;
	}

	/**
	 * Get address books
	 * @return ArrayCollection
	 */
	public function getAddressBooks() 
	{
		return $this->addressBooks;
	}

	/**
	 * Add address cook
	 * @param addressBook
	 * @return Contact
	 */
	public function addAddressBook(AddressBook $addressBook) 
	{
		$this->addressBooks->add($addressBook);
		return $this;
	}
}