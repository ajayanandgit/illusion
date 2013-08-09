<?php

namespace Repositories;

class ContactRepository extends \Nella\Doctrine\Repository 
{
	public function getAlphaListContacts($user_id)
	{
		$query = $this->getEntityManager()->createQueryBuilder();
		$query->select('c')
			  ->from('Contact', 'c')
			  ->where('c.user = :user_id')->setParameter('user_id', $user_id)
			  ->orderBy('c.name', 'ASC');

		return $query->getQuery()->getResult();
	}
}