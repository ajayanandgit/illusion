<?php

use Doctrine\ORM\Mapping;

/**
 * @Entity
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
}