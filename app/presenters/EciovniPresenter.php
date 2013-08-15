<?php

use OndrejBrejla\Eciovni\Eciovni;
use OndrejBrejla\Eciovni\ParticipantBuilder;
use OndrejBrejla\Eciovni\ItemImpl;
use OndrejBrejla\Eciovni\DataBuilder;
use OndrejBrejla\Eciovni\TaxImpl;

class EciovniPresenter extends BasePresenter 
{

    protected function createComponentEciovni() {
        $dateNow = new DateTime();
        $dateExp = new DateTime();
        $dateExp->modify('+14 days');
        $variableSymbol = '1234';

        $supplierBuilder = new ParticipantBuilder('František Vosáhlo', 'Uličná', '11', 'Praha 3 - Žižkov', '13000');
        $supplier = $supplierBuilder->setIn('12345678')->setTin('CZ12345678')->setAccountNumber('123456789 / 1111')->build();
        $customerBuilder = new ParticipantBuilder('Antonie Vosáhlová', 'Cizácká', '3', 'Praha 9 - Prosek', '19000');
        $customer = $customerBuilder->setAccountNumber('123456789 / 1111')->build();

        $items = array(
            new ItemImpl('Testovací položka - from percent', 1, 900, TaxImpl::fromPercent(22)),
            new ItemImpl('Testovací položka - from lower decimal', 1, 900, TaxImpl::fromLowerDecimal(0.22)),
            new ItemImpl('Testovací položka - from upper decimal', 1, 900, TaxImpl::fromUpperDecimal(1.22)),
        );

        $dataBuilder = new DataBuilder(date('YmdHis'), 'Daňový doklad, č.', $supplier, $customer, $dateExp, $dateNow, $items);
        $dataBuilder->setVariableSymbol($variableSymbol)->setDateOfVatRevenueRecognition($dateNow);
        $data = $dataBuilder->build();

        return new Eciovni($data);
    }

    public function actionGenerate() {
        include_once(LIBS_DIR . '/mpdf/mpdf.php');
        $mpdf = new \mPDF('utf-8');

        // Exportování připravené faktury do PDF.
        // Pro uložení faktury do souboru použijte druhý a třetí parametr, stejně jak je popsáno v dokumentaci k mPDF->Output().
        $this['eciovni']->exportToPdf($mpdf);
    }

}