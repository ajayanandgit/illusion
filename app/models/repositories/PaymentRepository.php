<?php

namespace Repositories;

class PaymentRepository extends \Nella\Doctrine\Repository 
{

	public function getLatestPayments($company)
	{
		// Funkcia vypise splatky podla jednotlivych faktur, neberie do uvahy cas
		// $invoices = $company->getInvoices();

		// foreach ($invoices as $invoice) {
		// 	foreach ($invoice->getPayments() as $payment) {
		// 		dump($payment->getPayment());
		// 	}
		// }

		$query = $this->getEntityManager()->createQueryBuilder();
		$query->select('p')
			  ->from('Payment', 'p')
			  ->orderBy('p.id', 'DESC');

		return $query->getQuery()->getResult();
	}

}