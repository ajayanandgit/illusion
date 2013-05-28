<?php

$container = require_once __DIR__ . '/bootstrap.php';

$user = new User;
$user->setName('vinco')
	 ->setPassword('vinco');


/*
$item1 = new Item;
$item1->setDescription('nova polozka 1')
	  ->setUnitPrice(100)
	  ->setQuantity(25);

$item2 = new Item;
$item2->setDescription('nova polozka 2')
	  ->setUnitPrice(100)
	  ->setQuantity(25);

$invoice = new Invoice;
$invoice->addItem($item1)
		->addItem($item2)
		->setNotes('Toto je prva faktura pre Trustmediu s.r.o.')
		->setInvoiceDate();
		
$company = new Company;
$company->setUser($user)
		->addInvoice($invoice)
		->setName('Trustmedia s.r.o.')
		->setIco('987321654');


$container->model->persist($company);
$container->model->flush();*/


// $invoice = $container->model->find('Invoice', 15);
// //$invoice->getItems();

// foreach ($invoice->getItems() as $item) {
// 	debug($item);
// }


// $company = $container->model->find('Company', 13);

// foreach ($company->getInvoices()->getItems() as $invoice) {
// 	debug($invoice);
// }






//$article = $container->model->getRepository('Article')->find(7);
// $asdf = $container->model->find('Company', 2);
// $asdf->getUser()->getName();
// debug($asdf);


//$article = $container->model->getRepository('Article')->findOneByTitle('Nejaka titulka');

/*
debug($article);
debug($article->getAuthor()->getFullname());

foreach ($article->getTags() as $tag) {
	debug($tag);
}
*/

/*$tag =  $container->model->find('Tag', 13);
$author =  $container->model->find('Author', 7);
$articleRepo = $container->model->getRepository('Article');*/

//debug($tag);

//debug($articleRepo->getLast());
//debug($tag->getArticles());
//foreach ($tag->getArticles() as $article) {
//	debug($article);
//}
//debug($articleRepo->getForAuthor($author));