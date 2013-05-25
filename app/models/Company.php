<?php

use Doctrine\ORM\Mapping;

/**
 * @Entity
 * 
 * @property-read int $id
 * @property-read string $companyName
 */
class company extends \Nette\Object
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
	private $companyName;

	/**
	 * @OneToOne(targetEntity="User", inversedBy="company", cascade="persist")
	 * @JoinColumn(name="user_id", referencedColumnName="id")
	 */
	private $user;



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
	public function getCompanyName()
	{
		return $this->username;
	}

	/**
	 * @param string
	 * @return Company
	 */
	public function setCompanyName($companyName)
	{
		$this->companyName = static::normalizeString($companyName);
		return $this;
	}

	/**
	 * @param string
	 * @return string
	 */
	protected static function normalizeString($s)
	{
		$s = trim($s);
		return $s === "" ? NULL : $s;
	}
}