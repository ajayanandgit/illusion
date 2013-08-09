<?php

namespace Repositories;

class InvoiceRepository extends \Nella\Doctrine\Repository 
{
	public function getOrderInvoices($company_id)
	{
		$query = $this->getEntityManager()->createQueryBuilder();
		$query->select('i')
			  ->from('Invoice', 'i')
			  ->where('c.company = :company_id')->setParameter('company_id', $company_id);

		return $query->getQuery()->getResult();
	}

}