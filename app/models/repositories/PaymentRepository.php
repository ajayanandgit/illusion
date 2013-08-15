<?php

namespace Repositories;

class PaymentRepository extends \Nella\Doctrine\Repository 
{

	public function getLatestPayments($company_id)
	{
		$query = $this->getEntityManager()->createQueryBuilder();
		$query->select('p')
			  ->from('Payment', 'p')
			  ->where('p.company = :company_id')->setParameter('company_id', $company_id)
			  ->orderBy('p.pay_date', 'DESC')
			  ->setMaxResults(5);

		return $query->getQuery()->getResult();
	}

}