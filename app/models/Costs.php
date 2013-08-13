<?php

use Doctrine\ORM\Mapping;

/**
 * @Entity(repositoryClass="CostsRepository") 
 */
class Costs extends \Nette\Object
{
	/**
	 * @Id
	 * @Column(type="integer")
	 * @GeneratedValue
	 * @var int
	 */
	private $id;

	/**
	 * @Column(type="string")
	 */
	private $description;

	/**
	 * @Column(type="integer")
	 */
	private $value;

	/**
	 * @Column(type="datetime")
	 */
	private $cost_date;

	/**
	 * @ManyToOne(targetEntity="Company", inversedBy="costs")
	 * @JoinColumn(name="company_id", referencedColumnName="id")
	 **/
	private $company;


	/**
	 * Get ID
	 * @return integer
	 */
	public function getId()
	{
		return $this->id;
	}


	/**
	 * Get description of cost
	 * @return string
	 */
	public function getDescription()
	{
		return $this->description;
	}

	/**
	 * Set description of cost
	 * @param String
	 * @return cost
	 */
	public function setDescription($description)
	{
		$this->description = $description;
		return $this;
	}

	/**
	 * Get cost value
	 * @return Costs
	 */
	public function getValue()
	{
		return $this->value;
	}

	/**
	 * Set cost
	 * @param Integer
	 * @return Cost
	 */
	public function setValue($value)
	{
		$this->value = $value;
		return $this;
	}

	/**
	 * Get date of cost
	 */
	public function getCostDate()
	{
		// $date = $this->cost_date;
		// $result = $date->format('d.m.Y');
		
		// return $result;
	}

	/**
	 * Set date of cost
	 */
	public function setCostDate(\DateTime $cost_date)
	{
		$this->cost_date = $cost_date;
		return $this;
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