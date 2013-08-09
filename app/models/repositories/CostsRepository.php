<?php

namespace Repositories;

class CostsRepository extends \Nella\Doctrine\Repository 
{
	public function getCostsByCompany($company_id)
	{
		$query = $this->getEntityManager()->createQueryBuilder();
		$query->select('c')
			  ->from('Costs', 'c')
			  ->where('c.company = :company_id')->setParameter('company_id', $company_id)
			  ->orderBy('c.id', 'DESC');

		return $query->getQuery()->getResult();
	}

	public function getBalance($company_id)
	{
		$query = $this->getEntityManager()->createQueryBuilder();
		$query->select('sum(c.value)')
			  ->from('Costs', 'c')
			  ->where('c.company = :company_id')->setParameter('company_id', $company_id);

		return $query->getQuery()->getSingleResult();
	}

}