<?php

/**
 * My Application bootstrap file.
 */
use Nette\Application\Routers\Route;


// Load Nette Framework
require LIBS_DIR . '/autoload.php';


// Configure application
$configurator = new Nette\Config\Configurator;

// Enable Nette Debugger for error visualisation & logging
//$configurator->setDebugMode($configurator::AUTO);
$configurator->enableDebugger(__DIR__ . '/../log');

// Enable RobotLoader - this will load all classes automatically
$configurator->setTempDirectory(__DIR__ . '/../temp');
$configurator->createRobotLoader()
	->addDirectory(APP_DIR)
	->register();

\Nella\Console\Config\Extension::register($configurator);
\Nella\Doctrine\Config\Extension::register($configurator);
\Nella\Doctrine\Config\MigrationsExtension::register($configurator);
Kdyby\Replicator\Container::register();

// Create Dependency Injection container from config.neon file
$configurator->addConfig(__DIR__ . '/config/config.neon');
$container = $configurator->createContainer();

/* This piece of code should resolve the time of expiration PROBLEM */
// $container->session->setExpiration('+ 2 days', false);
// if ($container->session->exists()) {
// 		$container->session->start();

// }

// Setup router
$container->router[] = new Route('index.php', 'Homepage:default', Route::ONE_WAY);
$container->router[] = new Route('<presenter>/<action>[/<id>]', 'Homepage:default');


// Configure and run the application!
$container->application->run();
