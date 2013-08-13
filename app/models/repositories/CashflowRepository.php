<?php

use Doctrine\ORM\Query\ResultSetMapping;

namespace Repositories;

class CashflowRepository extends \Nella\Doctrine\Repository 
{
	public function getCashflow($company_id)
	{
		$rsm = new ResultSetMapping();
		$rsm->addEntityResult('id', 'id1');
		$rsm->addEntityResult('id', 'id2');
		$rsm->addFieldResult('g1', 'id', 'game_id1');
		$rsm->addFieldResult('g2', 'id', 'game_id2');

		$query = $entityManager->createNativeQuery('
			SELECT  description, id
			FROM    (
				SELECT	description, id
				FROM	costs
				Union
				SELECT	payment, id
				FROM	payment
			) As a
			Group By id
			Order By id
		', $rsm);
		// $query->setParameter(1, 'romanb');

		$cashflow = $query->getResult();
	}
}