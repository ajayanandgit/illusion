<?php

use Doctrine\ORM\Mapping,
		Doctrine\Common\Collections\ArrayCollection;

/**
 * @Entity
 */
class User extends \Nette\Object
{
	/**
	 * @Id
	 * @Column(type="integer")
	 * @GeneratedValue
	 * @var int
	 */
	private $id;

	/**
	 * @Column(unique=true)
	 * @var string
	 */
	private $username;

	/**
	 * @Column
	 * @var string
	 */
	private $email;

	/**
	 * @Column
	 * @var string
	 */
	private $password;

	/**
	 * @Column
	 * @var string
	 */
	private $role;

	/**
	 * @OneToOne(targetEntity="Company", mappedBy="user")
	 */
	private $company;	

	/**
	 * @OneToMany(targetEntity="Contact", mappedBy="user")
	 **/
	private $contacts;



	public function __construct() 
	{
		$this->contacts = new ArrayCollection;
	}



	/**
	 * @return int
	 */
	public function getId()
	{
		return $this->id;
	}
	
	/**
	 * @return string
	 */
	public function getUsername()
	{
		return $this->username;
	}

	/**
	 * @param string
	 * @return User
	 */
	public function setUsername($username)
	{
		$this->username = static::normalizeString($username);
		return $this;
	}
	
	/**
	 * @return string
	 */
	public function getPassword()
	{
		return $this->password;
	}
	
	/**
	 * @param string
	 * @return User
	 */
	public function setPassword($password)
	{
		$this->password = md5($password);
		return $this;
	}
	
	/**
	 * @return string
	 */
	public function getEmail()
	{
		return $this->email;
	}
	
	/**
	 * @param string
	 * @return User
	 */
	public function setEmail($email)
	{
		$this->email = static::normalizeString($email);
		return $this;
	}
	
	/**
	 * @return string
	 */
	public function getRole()
	{
		return $this->role;
	}
	
	/**
	 * @param string
	 * @return User
	 */
	public function setRole()
	{
		$this->role = 'user';
		return $this;
	}

	/**
	 * Get User's company
	 * @return Company
	 */
	public function getCompany() 
	{
		return $this->company;
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
	 * Remove contact
	 * @param Contact
	 * @return User
	 */
	public function removeContact(Contact $contact)
	{
		$this->contacts->removeElement($contact);
		return $this;
	}
}