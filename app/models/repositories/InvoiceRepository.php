<?php

namespace Repositories;

class InvoiceRepository extends \Nella\Doctrine\Repository 
{
	
	public function getOrderInvoices($company_id)
	{
		$query = $this->getEntityManager()->createQueryBuilder();
		$query->select('i')
			  ->from('Invoice', 'i')
			  ->where('i.company = :company_id')->setParameter('company_id', $company_id)
			  ->orderBy('i.id', 'DESC');

		return $query->getQuery()->getResult();
	}

	public function getLatestInvoices($company_id)
	{
		$query = $this->getEntityManager()->createQueryBuilder();
		$query->select('i')
			  ->from('Invoice', 'i')
			  ->where('i.company = :company_id')->setParameter('company_id', $company_id)
			  ->orderBy('i.id', 'DESC')
			  ->setMaxResults(5);

		return $query->getQuery()->getResult();
	}

	public function getUnpaidInvoices($company_id)
	{
		$query = $this->getEntityManager()->createQueryBuilder();
		$query->select('i')
			  ->from('Invoice', 'i')
			  ->andWhere('i.company = :company_id')->setParameter('company_id', $company_id)
			  ->andWhere('i.status = 0')
			  ->orderBy('i.id', 'DESC');

		return $query->getQuery()->getResult();
	}

}