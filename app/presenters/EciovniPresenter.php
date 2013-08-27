<?php

use OndrejBrejla\Eciovni\Eciovni;
use OndrejBrejla\Eciovni\ParticipantBuilder;
use OndrejBrejla\Eciovni\ItemImpl;
use OndrejBrejla\Eciovni\DataBuilder;
use OndrejBrejla\Eciovni\TaxImpl;

class EciovniPresenter extends BasePresenter 
{
	/** @var */
	public $data;	

	protected function createComponentEciovni() 
	{
		// $dateNow = new DateTime();
		// $dateExp = new DateTime();
		// $dateExp->modify('+14 days');
		// $variableSymbol = '1234';

		// $supplierBuilder = new ParticipantBuilder('name', 'Uličná', '11', 'Praha 3 - Žižkov', '13000');
		// $supplier = $supplierBuilder->setIn('12345678')->setTin('CZ12345678')->setAccountNumber('123456789 / 1111')->build();
		// $customerBuilder = new ParticipantBuilder('nieco', 'Cizácká', '3', 'Praha 9 - Prosek', '19000');
		// $customer = $customerBuilder->setAccountNumber('123456789 / 1111')->build();

		// $items = array(
		// 	new ItemImpl('Testovací položka - from percent', 1, 900, TaxImpl::fromPercent(22)),
		// 	new ItemImpl('Testovací položka - from lower decimal', 1, 900, TaxImpl::fromLowerDecimal(0.22)),
		// 	new ItemImpl('Testovací položka - from upper decimal', 1, 900, TaxImpl::fromUpperDecimal(1.22)),
		// );

		// $dataBuilder = new DataBuilder(date('YmdHis'), 'Daňový doklad, č.', $supplier, $customer, $dateExp, $dateNow, $items);
		// $dataBuilder->setVariableSymbol($variableSymbol)->setDateOfVatRevenueRecognition($dateNow);
		// $data = $dataBuilder->build();

		return new Eciovni($this->data);
	}

	public function actionGenerate($id) 
	{
		include_once(LIBS_DIR . '/mpdf/mpdf.php');
		$mpdf = new \mPDF('utf-8');

		$invoice = $this->em->getRepository('Invoice')->findOneBy(array('id' => $id));
		$company = $invoice->getCompany();
		$my_customer = $invoice->getCustomer();
		$my_items = $invoice->getItems();


		$dateNow = new DateTime();
		$dateExp = new DateTime();
		$dateExp->modify('+14 days');
		$variableSymbol = '1234';

		$supplierBuilder = new ParticipantBuilder($company->getCompanyName(), 'Uličná', '11', 'Praha 3 - Žižkov', '13000');
		$supplier = $supplierBuilder->setIn('12345678')->setTin('CZ12345678')->setAccountNumber('123456789 / 1111')->build();
		$customerBuilder = new ParticipantBuilder($my_customer->getName(), 'Cizácká', '3', 'Praha 9 - Prosek', '19000');
		$customer = $customerBuilder->setAccountNumber('123456789 / 1111')->build();

		$items = array();
		$i = 0;
		foreach ($my_items as $item) {
			$items[$i] = new ItemImpl($item->getName(), 1, 900, TaxImpl::fromPercent(22));
			$i++;
		}


		$dataBuilder = new DataBuilder(date('YmdHis'), 'Daňový doklad, č.', $supplier, $customer, $dateExp, $dateNow, $items);
		$dataBuilder->setVariableSymbol($variableSymbol)->setDateOfVatRevenueRecognition($dateNow);
		$data = $dataBuilder->build();
		$this->data = $data;



		// Exportování připravené faktury do PDF.
		// Pro uložení faktury do souboru použijte druhý a třetí parametr, stejně jak je popsáno v dokumentaci k mPDF->Output().
		$this['eciovni']->exportToPdf($mpdf);
		$invoice->exportToPdf($mpdf);
	}

}