<?php

use Doctrine\ORM\Mapping;

/**
 * @Entity
 * 
 * @property-read int $id
 */
class AddressBook extends \Nette\Object
{
	/**
	 * @Id
	 * @Column(type="integer")
	 * @GeneratedValue
	 * @var int
	 */
	private $id;

	/**
	 * @OneToOne(targetEntity="User", inversedBy="addressBook", cascade="persist")
	 * @JoinColumn(name="user_id", referencedColumnName="id")
	 */
	private $user;

	/**
	 * @ManyToMany(targetEntity="Contact", inversedBy="addressBooks")
	 * @JoinTable(name="addressBooks_contacts")
	 **/
	private $contacts;

	public function __construct() 
	{
		$this->contacts = new \Doctrine\Common\Collections\ArrayCollection();
	}


	/**
	 * @return int
	 */
	public function getId()
	{
		return $this->id;
	}

	/**
	 * Set User
	 * @param User
	 * @return Company
	 */
	public function setUser(User $user) 
	{
		$this->user = $user;
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
	 * Get contacts
	 * @return ArrayCollection
	 */	
	public function getContacts() 
	{
		return $this->contacts;
	}
	
	/**
	 * Add contacts
	 * @param Contact
	 * @return AddressBook
	 */
	public function addContact(Contact $contact) 
	{
		$this->contacts->add($contact);
		$contact->addArticle($this);
		return $this;
	}

	/**
	 * Remove contact
	 * @param Contact
	 * @return AddressBook
	 */
	public function removeTag(Contact $contact) 
	{
		if ($this->contacts->contains($contact)) {
			$this->contacts->removeElement($contact);
		}
		return $this;
	}
}