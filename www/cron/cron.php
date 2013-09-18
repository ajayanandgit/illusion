<?php

header('Content-Type:text/html; charset=UTF-8');

// Database connection details 
$db_srv = 'localhost';
$db_usr = 'root'; 
$db_pwd = ''; 
$db_name = 'illusion';

// Charset information
$char_set = 'utf8';
$char_collation = 'utf8_general_ci';

// Establish connection
$connection = mysql_connect($db_srv,$db_usr,$db_pwd) or die(mysql_error()); 
$db = mysql_select_db($db_name) or die(mysql_error()); 

if (function_exists("mysql_set_charset")) {
	mysql_set_charset($char_set, $connection);
}

if ( isset($_GET['function'])
	 && method_exists('Load', $_GET['function']) )
{
	$loader = new Load();
	$loader->$_GET['function']();
} else {
	// Function not found
}

class Load 
{
	function init() 
	{ 
		$request_url = "http://www.ecb.europa.eu/stats/eurofxref/eurofxref-daily.xml";
		$xml = simplexml_load_file($request_url) or die("Cannot load data.");

		// print_r('<pre>');
		// print_r($xml);
		// print_r('</pre>');

		$data = array(
		'rates' => $xml->Cube->Cube->Cube,
		);
		$actTime = $xml->Cube->Cube['time'];


		$update_time = "UPDATE `currency_time` 
						SET `time` = now() 
						WHERE `option` = 'latest_update'";
		mysql_query($update_time);

		$update_time = "UPDATE `currency_time` 
						SET `time` = '$actTime'
						WHERE `option` = 'actual_date'";
		mysql_query($update_time);


		foreach ($data['rates'] as $rate) {
			$currency = $rate['currency'];
			$name = $rate['name'];
			$rate = $rate['rate'];

			$update_rate = "UPDATE `currency_rates`
							SET `rate` = '$rate'
							WHERE `currency` = '$currency'";
			mysql_query($update_rate);
		}
	}
}