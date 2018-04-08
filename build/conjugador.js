/*!
 * Conjugador.js v0.1.0
 * (c) 2016-2018 Matheus Alves
 * License: MIT
 */
(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["Conjugador"] = factory();
	else
		root["Conjugador"] = factory();
})(typeof self !== 'undefined' ? self : this, function() {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 1);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

module.exports = {"abaular":{"presente":["abaúlo","abaúlas","abaúla","abaulamos","abaulais","abaúlam"],"preteritoImperfeito":["abaulava","abaulavas","abaulava","abaulávamos","abauláveis","abaulavam"],"preteritoPerfeito":["abaulei","abaulaste","abaulou","abaulámos","abaulastes","abaularam"],"preteritoMaisQuePerfeito":["abaulara","abaularas","abaulara","abauláramos","abauláreis","abaularam"],"futuroDoPresente":["abaularei","abaularás","abaulará","abaularemos","abaulareis","abaularão"],"futuroDoPreterito":["abaularia","abaularias","abaularia","abaularíamos","abaularíeis","abaulariam"]},"abolir":{"presente":["abulo","aboles","abole","abolimos","abolis","abolem"],"preteritoImperfeito":["abolia","abolias","abolia","abolíamos","abolíeis","aboliam"],"preteritoPerfeito":["aboli","aboliste","aboliu","abolimos","abolistes","aboliram"],"preteritoMaisQuePerfeito":["abolira","aboliras","abolira","abolíramos","abolíreis","aboliram"],"futuroDoPresente":["abolirei","abolirás","abolirá","aboliremos","abolireis","abolirão"],"futuroDoPreterito":["aboliria","abolirias","aboliria","aboliríamos","aboliríeis","aboliriam"]},"abster":{"presente":["abstenho","absténs","abstém","abstemos","abstendes","abstêm"],"preteritoImperfeito":["abstinha","abstinhas","abstinha","abstínhamos","abstínheis","abstinham"],"preteritoPerfeito":["abstive","abstiveste","absteve","abstivemos","abstivestes","abstiveram"],"preteritoMaisQuePerfeito":["abstivera","abstiveras","abstivera","abstivéramos","abstivéreis","abstiveram"],"futuroDoPresente":["absterei","absterás","absterá","absteremos","abstereis","absterão"],"futuroDoPreterito":["absteria","absterias","absteria","absteríamos","absteríeis","absteriam"]},"acudir":{"presente":["acudo","acodes","acode","acudimos","acudis","acodem"],"preteritoImperfeito":["acudia","acudias","acudia","acudíamos","acudíeis","acudiam"],"preteritoPerfeito":["acudi","acudiste","acudiu","acudimos","acudistes","acudiram"],"preteritoMaisQuePerfeito":["acudira","acudiras","acudira","acudíramos","acudíreis","acudiram"],"futuroDoPresente":["acudirei","acudirás","acudirá","acudiremos","acudireis","acudirão"],"futuroDoPreterito":["acudiria","acudirias","acudiria","acudiríamos","acudiríeis","acudiriam"]},"adequar":{"presente":["adequo","adequas","adequa","adequamos","adequais","adequam"],"preteritoImperfeito":["adequava","adequavas","adequava","adequávamos","adequáveis","adequavam"],"preteritoPerfeito":["adequei","adequaste","adequou","adequámos","adequastes","adequaram"],"preteritoMaisQuePerfeito":["adequara","adequaras","adequara","adequáramos","adequáreis","adequaram"],"futuroDoPresente":["adequarei","adequarás","adequará","adequaremos","adequareis","adequarão"],"futuroDoPreterito":["adequaria","adequarias","adequaria","adequaríamos","adequaríeis","adequariam"]},"advertir":{"presente":["advirto","advertes","adverte","advertimos","advertis","advertem"],"preteritoImperfeito":["advertia","advertias","advertia","advertíamos","advertíeis","advertiam"],"preteritoPerfeito":["adverti","advertiste","advertiu","advertimos","advertistes","advertiram"],"preteritoMaisQuePerfeito":["advertira","advertiras","advertira","advertíramos","advertíreis","advertiram"],"futuroDoPresente":["advertirei","advertirás","advertirá","advertiremos","advertireis","advertirão"],"futuroDoPreterito":["advertiria","advertirias","advertiria","advertiríamos","advertiríeis","advertiriam"]},"advir":{"presente":["advenho","advéns","advém","advimos","advindes","advêm"],"preteritoImperfeito":["advinha","advinhas","advinha","advínhamos","advínheis","advinham"],"preteritoPerfeito":["advim","advieste","adveio","adviemos","adviestes","advieram"],"preteritoMaisQuePerfeito":["adviera","advieras","adviera","adviéramos","adviéreis","advieram"],"futuroDoPresente":["advirei","advirás","advirá","adviremos","advireis","advirão"],"futuroDoPreterito":["adviria","advirias","adviria","adviríamos","adviríeis","adviriam"]},"agredir":{"presente":["agrido","agrides","agride","agredimos","agredis","agridem"],"preteritoImperfeito":["agredia","agredias","agredia","agredíamos","agredíeis","agrediam"],"preteritoPerfeito":["agredi","agrediste","agrediu","agredimos","agredistes","agrediram"],"preteritoMaisQuePerfeito":["agredira","agrediras","agredira","agredíramos","agredíreis","agrediram"],"futuroDoPresente":["agredirei","agredirás","agredirá","agrediremos","agredireis","agredirão"],"futuroDoPreterito":["agrediria","agredirias","agrediria","agrediríamos","agrediríeis","agrediriam"]},"aguar":{"presente":["aguo","aguas","agua","aguamos","aguais","aguam"],"preteritoImperfeito":["aguava","aguavas","aguava","aguávamos","aguáveis","aguavam"],"preteritoPerfeito":["aguei","aguaste","aguou","aguámos","aguastes","aguaram"],"preteritoMaisQuePerfeito":["aguara","aguaras","aguara","aguáramos","aguáreis","aguaram"],"futuroDoPresente":["aguarei","aguarás","aguará","aguaremos","aguareis","aguarão"],"futuroDoPreterito":["aguaria","aguarias","aguaria","aguaríamos","aguaríeis","aguariam"]},"ajuizar":{"presente":["ajuízo","ajuízas","ajuíza","ajuizamos","ajuizais","ajuízam"],"preteritoImperfeito":["ajuizava","ajuizavas","ajuizava","ajuizávamos","ajuizáveis","ajuizavam"],"preteritoPerfeito":["ajuizei","ajuizaste","ajuizou","ajuizámos","ajuizastes","ajuizaram"],"preteritoMaisQuePerfeito":["ajuizara","ajuizaras","ajuizara","ajuizáramos","ajuizáreis","ajuizaram"],"futuroDoPresente":["ajuizarei","ajuizarás","ajuizará","ajuizaremos","ajuizareis","ajuizarão"],"futuroDoPreterito":["ajuizaria","ajuizarias","ajuizaria","ajuizaríamos","ajuizaríeis","ajuizariam"]},"amiudar":{"presente":["amiúdo","amiúdas","amiúda","amiudamos","amiudais","amiúdam"],"preteritoImperfeito":["amiudava","amiudavas","amiudava","amiudávamos","amiudáveis","amiudavam"],"preteritoPerfeito":["amiudei","amiudaste","amiudou","amiudámos","amiudastes","amiudaram"],"preteritoMaisQuePerfeito":["amiudara","amiudaras","amiudara","amiudáramos","amiudáreis","amiudaram"],"futuroDoPresente":["amiudarei","amiudarás","amiudará","amiudaremos","amiudareis","amiudarão"],"futuroDoPreterito":["amiudaria","amiudarias","amiudaria","amiudaríamos","amiudaríeis","amiudariam"]},"ansiar":{"presente":["anseio","anseias","anseia","ansiamos","ansiais","anseiam"],"preteritoImperfeito":["ansiava","ansiavas","ansiava","ansiávamos","ansiáveis","ansiavam"],"preteritoPerfeito":["ansiei","ansiaste","ansiou","ansiámos","ansiastes","ansiaram"],"preteritoMaisQuePerfeito":["ansiara","ansiaras","ansiara","ansiáramos","ansiáreis","ansiaram"],"futuroDoPresente":["ansiarei","ansiarás","ansiará","ansiaremos","ansiareis","ansiarão"],"futuroDoPreterito":["ansiaria","ansiarias","ansiaria","ansiaríamos","ansiaríeis","ansiariam"]},"antever":{"presente":["antevejo","antevês","antevê","antevemos","anteveis","antevêem"],"preteritoImperfeito":["antevia","antevias","antevia","antevíamos","antevíeis","anteviam"],"preteritoPerfeito":["antevi","anteviste","anteviu","antevimos","antevistes","anteviram"],"preteritoMaisQuePerfeito":["antevira","anteviras","antevira","antevíramos","antevíreis","anteviram"],"futuroDoPresente":["anteverei","anteverás","anteverá","anteveremos","antevereis","anteverão"],"futuroDoPreterito":["anteveria","anteverias","anteveria","anteveríamos","anteveríeis","anteveriam"]},"antiquar":{"presente":["antiquo","antiquas","antiqua","antiquamos","antiquais","antiquam"],"preteritoImperfeito":["antiquava","antiquavas","antiquava","antiquávamos","antiquáveis","antiquavam"],"preteritoPerfeito":["antiquei","antiquaste","antiquou","antiquámos","antiquastes","antiquaram"],"preteritoMaisQuePerfeito":["antiquara","antiquaras","antiquara","antiquáramos","antiquáreis","antiquaram"],"futuroDoPresente":["antiquarei","antiquarás","antiquará","antiquaremos","antiquareis","antiquarão"],"futuroDoPreterito":["antiquaria","antiquarias","antiquaria","antiquaríamos","antiquaríeis","antiquariam"]},"apaniguar":{"presente":["apaniguo","apaniguas","apanigua","apaniguamos","apaniguais","apaniguam"],"preteritoImperfeito":["apaniguava","apaniguavas","apaniguava","apaniguávamos","apaniguáveis","apaniguavam"],"preteritoPerfeito":["apaniguei","apaniguaste","apaniguou","apaniguámos","apaniguastes","apaniguaram"],"preteritoMaisQuePerfeito":["apaniguara","apaniguaras","apaniguara","apaniguáramos","apaniguáreis","apaniguaram"],"futuroDoPresente":["apaniguarei","apaniguarás","apaniguará","apaniguaremos","apaniguareis","apaniguarão"],"futuroDoPreterito":["apaniguaria","apaniguarias","apaniguaria","apaniguaríamos","apaniguaríeis","apaniguariam"]},"apaziguar":{"presente":["apaziguo","apaziguas","apazigua","apaziguamos","apaziguais","apaziguam"],"preteritoImperfeito":["apaziguava","apaziguavas","apaziguava","apaziguávamos","apaziguáveis","apaziguavam"],"preteritoPerfeito":["apaziguei","apaziguaste","apaziguou","apaziguámos","apaziguastes","apaziguaram"],"preteritoMaisQuePerfeito":["apaziguara","apaziguaras","apaziguara","apaziguáramos","apaziguáreis","apaziguaram"],"futuroDoPresente":["apaziguarei","apaziguarás","apaziguará","apaziguaremos","apaziguareis","apaziguarão"],"futuroDoPreterito":["apaziguaria","apaziguarias","apaziguaria","apaziguaríamos","apaziguaríeis","apaziguariam"]},"aprazer":{"presente":["aprazo","aprazes","apraz","aprazemos","aprazeis","aprazem"],"preteritoImperfeito":["aprazia","aprazias","aprazia","aprazíamos","aprazíeis","apraziam"],"preteritoPerfeito":["aprouve","aprouveste","aprouve","aprouvemos","aprouvestes","aprouveram"],"preteritoMaisQuePerfeito":["aprouvera","aprouveras","aprouvera","aprouvéramos","aprouvéreis","aprouveram"],"futuroDoPresente":["aprazerei","aprazerás","aprazerá","aprazeremos","aprazereis","aprazerão"],"futuroDoPreterito":["aprazeria","aprazerias","aprazeria","aprazeríamos","aprazeríeis","aprazeriam"]},"arguir":{"presente":["arguo","argúis","argúi","arguimos","arguis","argúem"],"preteritoImperfeito":["arguia","arguias","arguia","arguíamos","arguíeis","arguiam"],"preteritoPerfeito":["argui","arguiste","arguiu","arguimos","arguistes","arguiram"],"preteritoMaisQuePerfeito":["arguira","arguiras","arguira","arguíramos","arguíreis","arguiram"],"futuroDoPresente":["arguirei","arguirás","arguirá","arguiremos","arguireis","arguirão"],"futuroDoPreterito":["arguiria","arguirias","arguiria","arguiríamos","arguiríeis","arguiriam"]},"arruinar":{"presente":["arruíno","arruínas","arruína","arruinamos","arruinais","arruínam"],"preteritoImperfeito":["arruinava","arruinavas","arruinava","arruinávamos","arruináveis","arruinavam"],"preteritoPerfeito":["arruinei","arruinaste","arruinou","arruinámos","arruinastes","arruinaram"],"preteritoMaisQuePerfeito":["arruinara","arruinaras","arruinara","arruináramos","arruináreis","arruinaram"],"futuroDoPresente":["arruinarei","arruinarás","arruinará","arruinaremos","arruinareis","arruinarão"],"futuroDoPreterito":["arruinaria","arruinarias","arruinaria","arruinaríamos","arruinaríeis","arruinariam"]},"assentir":{"presente":["assinto","assentes","assente","assentimos","assentis","assentem"],"preteritoImperfeito":["assentia","assentias","assentia","assentíamos","assentíeis","assentiam"],"preteritoPerfeito":["assenti","assentiste","assentiu","assentimos","assentistes","assentiram"],"preteritoMaisQuePerfeito":["assentira","assentiras","assentira","assentíramos","assentíreis","assentiram"],"futuroDoPresente":["assentirei","assentirás","assentirá","assentiremos","assentireis","assentirão"],"futuroDoPreterito":["assentiria","assentirias","assentiria","assentiríamos","assentiríeis","assentiriam"]},"averiguar":{"presente":["averiguo","averiguas","averigua","averiguamos","averiguais","averiguam"],"preteritoImperfeito":["averiguava","averiguavas","averiguava","averiguávamos","averiguáveis","averiguavam"],"preteritoPerfeito":["averiguei","averiguaste","averiguou","averiguámos","averiguastes","averiguaram"],"preteritoMaisQuePerfeito":["averiguara","averiguaras","averiguara","averiguáramos","averiguáreis","averiguaram"],"futuroDoPresente":["averiguarei","averiguarás","averiguará","averiguaremos","averiguareis","averiguarão"],"futuroDoPreterito":["averiguaria","averiguarias","averiguaria","averiguaríamos","averiguaríeis","averiguariam"]},"avir":{"presente":["avenho","avéns","avém","avimos","avindes","avêm"],"preteritoImperfeito":["avinha","avinhas","avinha","avínhamos","avínheis","avinham"],"preteritoPerfeito":["avim","avieste","aveio","aviemos","aviestes","avieram"],"preteritoMaisQuePerfeito":["aviera","avieras","aviera","aviéramos","aviéreis","avieram"],"futuroDoPresente":["avirei","avirás","avirá","aviremos","avireis","avirão"],"futuroDoPreterito":["aviria","avirias","aviria","aviríamos","aviríeis","aviriam"]},"boiar":{"presente":["bóio","bóias","bóia","boiamos","boiais","bóiam"],"preteritoImperfeito":["boiava","boiavas","boiava","boiávamos","boiáveis","boiavam"],"preteritoPerfeito":["boiei","boiaste","boiou","boiámos","boiastes","boiaram"],"preteritoMaisQuePerfeito":["boiara","boiaras","boiara","boiáramos","boiáreis","boiaram"],"futuroDoPresente":["boiarei","boiarás","boiará","boiaremos","boiareis","boiarão"],"futuroDoPreterito":["boiaria","boiarias","boiaria","boiaríamos","boiaríeis","boiariam"]},"bulir":{"presente":["bulo","boles","bole","bulimos","bulis","bolem"],"preteritoImperfeito":["bulia","bulias","bulia","bulíamos","bulíeis","buliam"],"preteritoPerfeito":["buli","buliste","buliu","bulimos","bulistes","buliram"],"preteritoMaisQuePerfeito":["bulira","buliras","bulira","bulíramos","bulíreis","buliram"],"futuroDoPresente":["bulirei","bulirás","bulirá","buliremos","bulireis","bulirão"],"futuroDoPreterito":["buliria","bulirias","buliria","buliríamos","buliríeis","buliriam"]},"caber":{"presente":["caibo","cabes","cabe","cabemos","cabeis","cabem"],"preteritoImperfeito":["cabia","cabias","cabia","cabíamos","cabíeis","cabiam"],"preteritoPerfeito":["coube","coubeste","coube","coubemos","coubestes","couberam"],"preteritoMaisQuePerfeito":["coubera","couberas","coubera","coubéramos","coubéreis","couberam"],"futuroDoPresente":["caberei","caberás","caberá","caberemos","cabereis","caberão"],"futuroDoPreterito":["caberia","caberias","caberia","caberíamos","caberíeis","caberiam"]},"cerzir":{"presente":["cirzo","cirzes","cirze","cerzimos","cerzis","cirzem"],"preteritoImperfeito":["cerzia","cerzias","cerzia","cerzíamos","cerzíeis","cerziam"],"preteritoPerfeito":["cerzi","cerziste","cerziu","cerzimos","cerzistes","cerziram"],"preteritoMaisQuePerfeito":["cerzira","cerziras","cerzira","cerzíramos","cerzíreis","cerziram"],"futuroDoPresente":["cerzirei","cerzirás","cerzirá","cerziremos","cerzireis","cerzirão"],"futuroDoPreterito":["cerziria","cerzirias","cerziria","cerziríamos","cerziríeis","cerziriam"]},"cobrir":{"presente":["cubro","cobres","cobre","cobrimos","cobris","cobrem"],"preteritoImperfeito":["cobria","cobrias","cobria","cobríamos","cobríeis","cobriam"],"preteritoPerfeito":["cobri","cobriste","cobriu","cobrimos","cobristes","cobriram"],"preteritoMaisQuePerfeito":["cobrira","cobriras","cobrira","cobríramos","cobríreis","cobriram"],"futuroDoPresente":["cobrirei","cobrirás","cobrirá","cobriremos","cobrireis","cobrirão"],"futuroDoPreterito":["cobriria","cobririas","cobriria","cobriríamos","cobriríeis","cobririam"]},"coibir":{"presente":["coíbo","coíbes","coíbe","coibimos","coibis","coíbem"],"preteritoImperfeito":["coibia","coibias","coibia","coibíamos","coibíeis","coibiam"],"preteritoPerfeito":["coibi","coibiste","coibiu","coibimos","coibistes","coibiram"],"preteritoMaisQuePerfeito":["coibira","coibiras","coibira","coibíramos","coibíreis","coibiram"],"futuroDoPresente":["coibirei","coibirás","coibirá","coibiremos","coibireis","coibirão"],"futuroDoPreterito":["coibiria","coibirias","coibiria","coibiríamos","coibiríeis","coibiriam"]},"colorir":{"presente":["coluro","colores","colore","colorimos","coloris","colorem"],"preteritoImperfeito":["coloria","colorias","coloria","coloríamos","coloríeis","coloriam"],"preteritoPerfeito":["colori","coloriste","coloriu","colorimos","coloristes","coloriram"],"preteritoMaisQuePerfeito":["colorira","coloriras","colorira","coloríramos","coloríreis","coloriram"],"futuroDoPresente":["colorirei","colorirás","colorirá","coloriremos","colorireis","colorirão"],"futuroDoPreterito":["coloriria","coloririas","coloriria","coloriríamos","coloriríeis","coloririam"]},"comerciar":{"presente":["comerceio/comercio","comerceias/comercias","comerceia/comercia","comerciamos","comerciais","comerciam/comerceiam"],"preteritoImperfeito":["comerciava","comerciavas","comerciava","comerciávamos","comerciáveis","comerciavam"],"preteritoPerfeito":["comerciei","comerciaste","comerciou","comerciámos","comerciastes","comerciaram"],"preteritoMaisQuePerfeito":["comerciara","comerciaras","comerciara","comerciáramos","comerciáreis","comerciaram"],"futuroDoPresente":["comerciarei","comerciarás","comerciará","comerciaremos","comerciareis","comerciarão"],"futuroDoPreterito":["comerciaria","comerciarias","comerciaria","comerciaríamos","comerciaríeis","comerciariam"]},"compelir":{"presente":["compilo","compeles","compele","compelimos","compelis","compelem"],"preteritoImperfeito":["compelia","compelias","compelia","compelíamos","compelíeis","compeliam"],"preteritoPerfeito":["compeli","compeliste","compeliu","compelimos","compelistes","compeliram"],"preteritoMaisQuePerfeito":["compelira","compeliras","compelira","compelíramos","compelíreis","compeliram"],"futuroDoPresente":["compelirei","compelirás","compelirá","compeliremos","compelireis","compelirão"],"futuroDoPreterito":["compeliria","compelirias","compeliria","compeliríamos","compeliríeis","compeliriam"]},"competir":{"presente":["compito","competes","compete","competimos","competis","competem"],"preteritoImperfeito":["competia","competias","competia","competíamos","competíeis","competiam"],"preteritoPerfeito":["competi","competiste","competiu","competimos","competistes","competiram"],"preteritoMaisQuePerfeito":["competira","competiras","competira","competíramos","competíreis","competiram"],"futuroDoPresente":["competirei","competirás","competirá","competiremos","competireis","competirão"],"futuroDoPreterito":["competiria","competirias","competiria","competiríamos","competiríeis","competiriam"]},"comprazer":{"presente":["comprazo","comprazes","compraz","comprazemos","comprazeis","comprazem"],"preteritoImperfeito":["comprazia","comprazias","comprazia","comprazíamos","comprazíeis","compraziam"],"preteritoPerfeito":["comprouve","comprouveste","comprouve","comprouvemos","comprouvestes","comprouveram"],"preteritoMaisQuePerfeito":["comprouvera","comprouveras","comprouvera","comprouvéramos","comprouvéreis","comprouveram"],"futuroDoPresente":["comprazerei","comprazerás","comprazerá","comprazeremos","comprazereis","comprazerão"],"futuroDoPreterito":["comprazeria","comprazerias","comprazeria","comprazeríamos","comprazeríeis","comprazeriam"]},"concernir":{"presente":["concirno","concernes","concerne","concernimos","concernis","concernem"],"preteritoImperfeito":["concernia","concernias","concernia","concerníamos","concerníeis","concerniam"],"preteritoPerfeito":["concerni","concerniste","concerniu","concernimos","concernistes","concerniram"],"preteritoMaisQuePerfeito":["concernira","concerniras","concernira","concerníramos","concerníreis","concerniram"],"futuroDoPresente":["concernirei","concernirás","concernirá","concerniremos","concernireis","concernirão"],"futuroDoPreterito":["concerniria","concernirias","concerniria","concerniríamos","concerniríeis","concerniriam"]},"conseguir":{"presente":["consigo","consegues","consegue","conseguimos","conseguis","conseguem"],"preteritoImperfeito":["conseguia","conseguias","conseguia","conseguíamos","conseguíeis","conseguiam"],"preteritoPerfeito":["consegui","conseguiste","conseguiu","conseguimos","conseguistes","conseguiram"],"preteritoMaisQuePerfeito":["conseguira","conseguiras","conseguira","conseguíramos","conseguíreis","conseguiram"],"futuroDoPresente":["conseguirei","conseguirás","conseguirá","conseguiremos","conseguireis","conseguirão"],"futuroDoPreterito":["conseguiria","conseguirias","conseguiria","conseguiríamos","conseguiríeis","conseguiriam"]},"consentir":{"presente":["consinto","consentes","consente","consentimos","consentis","consentem"],"preteritoImperfeito":["consentia","consentias","consentia","consentíamos","consentíeis","consentiam"],"preteritoPerfeito":["consenti","consentiste","consentiu","consentimos","consentistes","consentiram"],"preteritoMaisQuePerfeito":["consentira","consentiras","consentira","consentíramos","consentíreis","consentiram"],"futuroDoPresente":["consentirei","consentirás","consentirá","consentiremos","consentireis","consentirão"],"futuroDoPreterito":["consentiria","consentirias","consentiria","consentiríamos","consentiríeis","consentiriam"]},"construir":{"presente":["construo","constróis","constrói","construímos","construís","constroem"],"preteritoImperfeito":["construía","construías","construía","construíamos","construíeis","construíam"],"preteritoPerfeito":["construí","construíste","construiu","construímos","construístes","construíram"],"preteritoMaisQuePerfeito":["construíra","construíras","construíra","construíramos","construíreis","construíram"],"futuroDoPresente":["construirei","construirás","construirá","construiremos","construireis","construirão"],"futuroDoPreterito":["construiria","construirias","construiria","construiríamos","construiríeis","construiriam"]},"consumir":{"presente":["consumo","consomes","consome","consumimos","consumis","consomem"],"preteritoImperfeito":["consumia","consumias","consumia","consumíamos","consumíeis","consumiam"],"preteritoPerfeito":["consumi","consumiste","consumiu","consumimos","consumistes","consumiram"],"preteritoMaisQuePerfeito":["consumira","consumiras","consumira","consumíramos","consumíreis","consumiram"],"futuroDoPresente":["consumirei","consumirás","consumirá","consumiremos","consumireis","consumirão"],"futuroDoPreterito":["consumiria","consumirias","consumiria","consumiríamos","consumiríeis","consumiriam"]},"conter":{"presente":["contenho","contens","contém","contemos","contendes","contêm"],"preteritoImperfeito":["continha","continhas","continha","contínhamos","contínheis","continham"],"preteritoPerfeito":["contive","contiveste","conteve","contivemos","contivestes","contiveram"],"preteritoMaisQuePerfeito":["contivera","contiveras","contivera","contivéramos","contivéreis","contiveram"],"futuroDoPresente":["conterei","conterás","conterá","conteremos","contereis","conterão"],"futuroDoPreterito":["conteria","conterias","conteria","conteríamos","conteríeis","conteriam"]},"contiguar":{"presente":["contiguo","contiguas","contigua","contiguamos","contiguais","contiguam"],"preteritoImperfeito":["contiguava","contiguavas","contiguava","contiguávamos","contiguáveis","contiguavam"],"preteritoPerfeito":["contiguei","contiguaste","contiguou","contiguámos","contiguastes","contiguaram"],"preteritoMaisQuePerfeito":["contiguara","contiguaras","contiguara","contiguáramos","contiguáreis","contiguaram"],"futuroDoPresente":["contiguarei","contiguarás","contiguará","contiguaremos","contiguareis","contiguarão"],"futuroDoPreterito":["contiguaria","contiguarias","contiguaria","contiguaríamos","contiguaríeis","contiguariam"]},"contravir":{"presente":["contravenho","contravens","contravem","contravimos","contravindes","contravêm"],"preteritoImperfeito":["contravinha","contravinhas","contravinha","contravínhamos","contravínheis","contravinham"],"preteritoPerfeito":["contravim","contravieste","contraveio","contraviemos","contraviestes","contravieram"],"preteritoMaisQuePerfeito":["contraviera","contravieras","contraviera","contraviéramos","contraviéreis","contravieram"],"futuroDoPresente":["contravirei","contravirás","contravirá","contraviremos","contravireis","contravirão"],"futuroDoPreterito":["contraviria","contravirias","contraviria","contraviríamos","contraviríeis","contraviriam"]},"convir":{"presente":["convenho","convéns","convém","convimos","convindes","convêm"],"preteritoImperfeito":["convinha","convinhas","convinha","convínhamos","convínheis","convinham"],"preteritoPerfeito":["convim","convieste","conveio","conviemos","conviestes","convieram"],"preteritoMaisQuePerfeito":["conviera","convieras","conviera","conviéramos","conviéreis","convieram"],"futuroDoPresente":["convirei","convirás","convirá","conviremos","convireis","convirão"],"futuroDoPreterito":["conviria","convirias","conviria","conviríamos","conviríeis","conviriam"]},"corroer":{"presente":["corroo","corróis","corrói","corroemos","corroeis","corroem"],"preteritoImperfeito":["corroía","corroías","corroía","corroíamos","corroíeis","corroíam"],"preteritoPerfeito":["corroí","corroeste","corroeu","corroemos","corroestes","corroeram"],"preteritoMaisQuePerfeito":["corroera","corroeras","corroera","corroêramos","corroêreis","corroeram"],"futuroDoPresente":["corroerei","corroerás","corroerá","corroeremos","corroereis","corroerão"],"futuroDoPreterito":["corroeria","corroerias","corroeria","corroeríamos","corroeríeis","corroeriam"]},"crer":{"presente":["creio","crês","crê","cremos","credes","crêem"],"preteritoImperfeito":["cria","crias","cria","críamos","críeis","criam"],"preteritoPerfeito":["cri","creste","creu","cremos","crestes","creram"],"preteritoMaisQuePerfeito":["crera","creras","crera","crêramos","crêreis","creram"],"futuroDoPresente":["crerei","crerás","crerá","creremos","crereis","crerão"],"futuroDoPreterito":["creria","crerias","creria","creríamos","creríeis","creriam"]},"cuspir":{"presente":["cuspo","cospes","cospe","cuspimos","cuspis","cospem"],"preteritoImperfeito":["cuspia","cuspias","cuspia","cuspíamos","cuspíeis","cuspiam"],"preteritoPerfeito":["cuspi","cuspiste","cuspiu","cuspimos","cuspistes","cuspiram"],"preteritoMaisQuePerfeito":["cuspira","cuspiras","cuspira","cuspíramos","cuspíreis","cuspiram"],"futuroDoPresente":["cuspirei","cuspirás","cuspirá","cuspiremos","cuspireis","cuspirão"],"futuroDoPreterito":["cuspiria","cuspirias","cuspiria","cuspiríamos","cuspiríeis","cuspiriam"]},"dar":{"presente":["dou","dás","dá","damos","dais","dão"],"preteritoImperfeito":["dava","davas","dava","dávamos","dáveis","davam"],"preteritoPerfeito":["dei","deste","deu","demos","destes","deram"],"preteritoMaisQuePerfeito":["dera","deras","dera","déramos","déreis","deram"],"futuroDoPresente":["darei","darás","dará","daremos","dareis","darão"],"futuroDoPreterito":["daria","darias","daria","daríamos","daríeis","dariam"]},"demolir":{"presente":["demulo","demoles","demole","demolimos","demolis","demolem"],"preteritoImperfeito":["demolia","demolias","demolia","demolíamos","demolíeis","demoliam"],"preteritoPerfeito":["demoli","demoliste","demoliu","demolimos","demolistes","demoliram"],"preteritoMaisQuePerfeito":["demolira","demoliras","demolira","demolíramos","demolíreis","demoliram"],"futuroDoPresente":["demolirei","demolirás","demolirá","demoliremos","demolireis","demolirão"],"futuroDoPreterito":["demoliria","demolirias","demoliria","demoliríamos","demoliríeis","demoliriam"]},"denegrir":{"presente":["denigro","denigres","denigre","denegrimos","denegris","denigrem"],"preteritoImperfeito":["denegria","denegrias","denegria","denegríamos","denegríeis","denegriam"],"preteritoPerfeito":["denegri","denegriste","denegriu","denegrimos","denegristes","denegriram"],"preteritoMaisQuePerfeito":["denegrira","denegriras","denegrira","denegríramos","denegríreis","denegriram"],"futuroDoPresente":["denegrirei","denegrirás","denegrirá","denegriremos","denegrireis","denegrirão"],"futuroDoPreterito":["denegriria","denegririas","denegriria","denegriríamos","denegriríeis","denegririam"]},"desaguar":{"presente":["desaguo","desaguas","desagua","desaguamos","desaguais","desaguam"],"preteritoImperfeito":["desaguava","desaguavas","desaguava","desaguávamos","desaguáveis","desaguavam"],"preteritoPerfeito":["desaguei","desaguaste","desaguou","desaguámos","desaguastes","desaguaram"],"preteritoMaisQuePerfeito":["desaguara","desaguaras","desaguara","desaguáramos","desaguáreis","desaguaram"],"futuroDoPresente":["desaguarei","desaguarás","desaguará","desaguaremos","desaguareis","desaguarão"],"futuroDoPreterito":["desaguaria","desaguarias","desaguaria","desaguaríamos","desaguaríeis","desaguariam"]},"desavir":{"presente":["desavenho","desavéns","desavém","desavimos","desavindes","desavêm"],"preteritoImperfeito":["desavinha","desavinhas","desavinha","desavínhamos","desavínheis","desavinham"],"preteritoPerfeito":["desavim","desavieste","desaveio","desaviemos","desaviestes","desavieram"],"preteritoMaisQuePerfeito":["desaviera","desavieras","desaviera","desaviéramos","desaviéreis","desavieram"],"futuroDoPresente":["desavirei","desavirás","desavirá","desaviremos","desavireis","desavirão"],"futuroDoPreterito":["desaviria","desavirias","desaviria","desaviríamos","desaviríeis","desaviriam"]},"descaber":{"presente":["descaibo","descabes","descabe","descabemos","descabeis","descabem"],"preteritoImperfeito":["descabia","descabias","descabia","descabíamos","descabíeis","descabiam"],"preteritoPerfeito":["descoube","descoubeste","descoube","descoubemos","descoubestes","descouberam"],"preteritoMaisQuePerfeito":["descoubera","descouberas","descoubera","descoubéramos","descoubéreis","descouberam"],"futuroDoPresente":["descaberei","descaberás","descaberá","descaberemos","descabereis","descaberão"],"futuroDoPreterito":["descaberia","descaberias","descaberia","descaberíamos","descaberíeis","descaberiam"]},"descobrir":{"presente":["descubro","descobres","descobre","descobrimos","descobris","descobrem"],"preteritoImperfeito":["descobria","descobrias","descobria","descobríamos","descobríeis","descobriam"],"preteritoPerfeito":["descobri","descobriste","descobriu","descobrimos","descobristes","descobriram"],"preteritoMaisQuePerfeito":["descobrira","descobriras","descobrira","descobríramos","descobríreis","descobriram"],"futuroDoPresente":["descobrirei","descobrirás","descobrirá","descobriremos","descobrireis","descobrirão"],"futuroDoPreterito":["descobriria","descobririas","descobriria","descobriríamos","descobriríeis","descobririam"]},"desmentir":{"presente":["desminto","desmentes","desmente","desmentimos","desmentis","desmentem"],"preteritoImperfeito":["desmentia","desmentias","desmentia","desmentíamos","desmentíeis","desmentiam"],"preteritoPerfeito":["desmenti","desmentiste","desmentiu","desmentimos","desmentistes","desmentiram"],"preteritoMaisQuePerfeito":["desmentira","desmentiras","desmentira","desmentíramos","desmentíreis","desmentiram"],"futuroDoPresente":["desmentirei","desmentirás","desmentirá","desmentiremos","desmentireis","desmentirão"],"futuroDoPreterito":["desmentiria","desmentirias","desmentiria","desmentiríamos","desmentiríeis","desmentiriam"]},"desmiudar":{"presente":["desmiúdo","desmiúdas","desmiúda","desmiudamos","desmiudais","desmiúdam"],"preteritoImperfeito":["desmiudava","desmiudavas","desmiudava","desmiudávamos","desmiudáveis","desmiudavam"],"preteritoPerfeito":["desmiudei","desmiudaste","desmiudou","desmiudámos","desmiudastes","desmiudaram"],"preteritoMaisQuePerfeito":["desmiudara","desmiudaras","desmiudara","desmiudáramos","desmiudáreis","desmiudaram"],"futuroDoPresente":["desmiudarei","desmiudarás","desmiudará","desmiudaremos","desmiudareis","desmiudarão"],"futuroDoPreterito":["desmiudaria","desmiudarias","desmiudaria","desmiudaríamos","desmiudaríeis","desmiudariam"]},"despir":{"presente":["dispo","despes","despe","despimos","despis","despem"],"preteritoImperfeito":["despia","despias","despia","despíamos","despíeis","despiam"],"preteritoPerfeito":["despi","despiste","despiu","despimos","despistes","despiram"],"preteritoMaisQuePerfeito":["despira","despiras","despira","despíramos","despíreis","despiram"],"futuroDoPresente":["despirei","despirás","despirá","despiremos","despireis","despirão"],"futuroDoPreterito":["despiria","despirias","despiria","despiríamos","despiríeis","despiriam"]},"desprazer":{"presente":["desprazo","desprazes","despraz","desprazemos","desprazeis","desprazem"],"preteritoImperfeito":["desprazia","desprazias","desprazia","desprazíamos","desprazíeis","despraziam"],"preteritoPerfeito":["desprouve","desprouveste","desprouve","desprouvemos","desprouvestes","desprouveram"],"preteritoMaisQuePerfeito":["desprouvera","desprouveras","desprouvera","desprouvéramos","desprouvéreis","desprouveram"],"futuroDoPresente":["desprazerei","desprazerás","desprazerá","desprazeremos","desprazereis","desprazerão"],"futuroDoPreterito":["desprazeria","desprazerias","desprazeria","desprazeríamos","desprazeríeis","desprazeriam"]},"destruir":{"presente":["destruo","destróis","destrói","destruímos","destruís","destroem"],"preteritoImperfeito":["destruía","destruías","destruía","destruíamos","destruíeis","destruíam"],"preteritoPerfeito":["destruí","destruíste","destruiu","destruímos","destruístes","destruíram"],"preteritoMaisQuePerfeito":["destruíra","destruíras","destruíra","destruíramos","destruíreis","destruíram"],"futuroDoPresente":["destruirei","destruirás","destruirá","destruiremos","destruireis","destruirão"],"futuroDoPreterito":["destruiria","destruirias","destruiria","destruiríamos","destruiríeis","destruiriam"]},"deter":{"presente":["detenho","detens","detém","detemos","detendes","detêm"],"preteritoImperfeito":["detinha","detinhas","detinha","detínhamos","detínheis","detinham"],"preteritoPerfeito":["detive","detiveste","deteve","detivemos","detivestes","detiveram"],"preteritoMaisQuePerfeito":["detivera","detiveras","detivera","detivéramos","detivéreis","detiveram"],"futuroDoPresente":["deterei","deterás","deterá","deteremos","detereis","deterão"],"futuroDoPreterito":["deteria","deterias","deteria","deteríamos","deteríeis","deteriam"]},"devir":{"presente":["devenho","devéns","devém","devimos","devindes","devêm"],"preteritoImperfeito":["devinha","devinhas","devinha","devínhamos","devínheis","devinham"],"preteritoPerfeito":["devim","devieste","deveio","deviemos","deviestes","devieram"],"preteritoMaisQuePerfeito":["deviera","devieras","deviera","deviéramos","deviéreis","devieram"],"futuroDoPresente":["devirei","devirás","devirá","deviremos","devireis","devirão"],"futuroDoPreterito":["deviria","devirias","deviria","deviríamos","deviríeis","deviriam"]},"discernir":{"presente":["discirno","discernes","discerne","discernimos","discernis","discernem"],"preteritoImperfeito":["discernia","discernias","discernia","discerníamos","discerníeis","discerniam"],"preteritoPerfeito":["discerni","discerniste","discerniu","discernimos","discernistes","discerniram"],"preteritoMaisQuePerfeito":["discernira","discerniras","discernira","discerníramos","discerníreis","discerniram"],"futuroDoPresente":["discernirei","discernirás","discernirá","discerniremos","discernireis","discernirão"],"futuroDoPreterito":["discerniria","discernirias","discerniria","discerniríamos","discerniríeis","discerniriam"]},"divergir":{"presente":["divirjo","diverges","diverge","divergimos","divergis","divergem"],"preteritoImperfeito":["divergia","divergias","divergia","divergíamos","divergíeis","divergiam"],"preteritoPerfeito":["divergi","divergiste","divergiu","divergimos","divergistes","divergiram"],"preteritoMaisQuePerfeito":["divergira","divergiras","divergira","divergíramos","divergíreis","divergiram"],"futuroDoPresente":["divergirei","divergirás","divergirá","divergiremos","divergireis","divergirão"],"futuroDoPreterito":["divergiria","divergirias","divergiria","divergiríamos","divergiríeis","divergiriam"]},"divertir":{"presente":["divirto","divertes","diverte","divertimos","divertis","divertem"],"preteritoImperfeito":["divertia","divertias","divertia","divertíamos","divertíeis","divertiam"],"preteritoPerfeito":["diverti","divertiste","divertiu","divertimos","divertistes","divertiram"],"preteritoMaisQuePerfeito":["divertira","divertiras","divertira","divertíramos","divertíreis","divertiram"],"futuroDoPresente":["divertirei","divertirás","divertirá","divertiremos","divertireis","divertirão"],"futuroDoPreterito":["divertiria","divertirias","divertiria","divertiríamos","divertiríeis","divertiriam"]},"doer":{"presente":["doo","dóis","dói","doemos","doeis","doem"],"preteritoImperfeito":["doía","doías","doía","doíamos","doíeis","doíam"],"preteritoPerfeito":["doí","doeste","doeu","doemos","doestes","doeram"],"preteritoMaisQuePerfeito":["doera","doeras","doera","doêramos","doêreis","doeram"],"futuroDoPresente":["doerei","doerás","doerá","doeremos","doereis","doerão"],"futuroDoPreterito":["doeria","doerias","doeria","doeríamos","doeríeis","doeriam"]},"dormir":{"presente":["durmo","dormes","dorme","dormimos","dormis","dormem"],"preteritoImperfeito":["dormia","dormias","dormia","dormíamos","dormíeis","dormiam"],"preteritoPerfeito":["dormi","dormiste","dormiu","dormimos","dormistes","dormiram"],"preteritoMaisQuePerfeito":["dormira","dormiras","dormira","dormíramos","dormíreis","dormiram"],"futuroDoPresente":["dormirei","dormirás","dormirá","dormiremos","dormireis","dormirão"],"futuroDoPreterito":["dormiria","dormirias","dormiria","dormiríamos","dormiríeis","dormiriam"]},"eclodir":{"presente":["ecludo","eclodes","eclode","eclodimos","eclodis","eclodem"],"preteritoImperfeito":["eclodia","eclodias","eclodia","eclodíamos","eclodíeis","eclodiam"],"preteritoPerfeito":["eclodi","eclodiste","eclodiu","eclodimos","eclodistes","eclodiram"],"preteritoMaisQuePerfeito":["eclodira","eclodiras","eclodira","eclodíramos","eclodíreis","eclodiram"],"futuroDoPresente":["eclodirei","eclodirás","eclodirá","eclodiremos","eclodireis","eclodirão"],"futuroDoPreterito":["eclodiria","eclodirias","eclodiria","eclodiríamos","eclodiríeis","eclodiriam"]},"empedernir":{"presente":["empedirno","empedernes","empederne","empedernimos","empedernis","empedernem"],"preteritoImperfeito":["empedernia","empedernias","empedernia","empederníamos","empederníeis","empederniam"],"preteritoPerfeito":["empederni","empederniste","empederniu","empedernimos","empedernistes","empederniram"],"preteritoMaisQuePerfeito":["empedernira","empederniras","empedernira","empederníramos","empederníreis","empederniram"],"futuroDoPresente":["empedernirei","empedernirás","empedernirá","empederniremos","empedernireis","empedernirão"],"futuroDoPreterito":["empederniria","empedernirias","empederniria","empederniríamos","empederniríeis","empederniriam"]},"encobrir":{"presente":["encubro","encobres","encobre","encobrimos","encobris","encobrem"],"preteritoImperfeito":["encobria","encobrias","encobria","encobríamos","encobríeis","encobriam"],"preteritoPerfeito":["encobri","encobriste","encobriu","encobrimos","encobristes","encobriram"],"preteritoMaisQuePerfeito":["encobrira","encobriras","encobrira","encobríramos","encobríreis","encobriram"],"futuroDoPresente":["encobrirei","encobrirás","encobrirá","encobriremos","encobrireis","encobrirão"],"futuroDoPreterito":["encobriria","encobririas","encobriria","encobriríamos","encobriríeis","encobririam"]},"engolir":{"presente":["engulo","engoles","engole","engolimos","engolis","engolem"],"preteritoImperfeito":["engolia","engolias","engolia","engolíamos","engolíeis","engoliam"],"preteritoPerfeito":["engoli","engoliste","engoliu","engolimos","engolistes","engoliram"],"preteritoMaisQuePerfeito":["engolira","engoliras","engolira","engolíramos","engolíreis","engoliram"],"futuroDoPresente":["engolirei","engolirás","engolirá","engoliremos","engolireis","engolirão"],"futuroDoPreterito":["engoliria","engolirias","engoliria","engoliríamos","engoliríeis","engoliriam"]},"enraizar":{"presente":["enraízo","enraízas","enraíza","enraizamos","enraizais","enraízam"],"preteritoImperfeito":["enraizava","enraizavas","enraizava","enraizávamos","enraizáveis","enraizavam"],"preteritoPerfeito":["enraizei","enraizaste","enraizou","enraizámos","enraizastes","enraizaram"],"preteritoMaisQuePerfeito":["enraizara","enraizaras","enraizara","enraizáramos","enraizáreis","enraizaram"],"futuroDoPresente":["enraizarei","enraizarás","enraizará","enraizaremos","enraizareis","enraizarão"],"futuroDoPreterito":["enraizaria","enraizarias","enraizaria","enraizaríamos","enraizaríeis","enraizariam"]},"entreter":{"presente":["entretenho","entretens","entretém","entretemos","entretendes","entretêm"],"preteritoImperfeito":["entretinha","entretinhas","entretinha","entretínhamos","entretínheis","entretinham"],"preteritoPerfeito":["entretive","entretiveste","entreteve","entretivemos","entretivestes","entretiveram"],"preteritoMaisQuePerfeito":["entretivera","entretiveras","entretivera","entretivéramos","entretivéreis","entretiveram"],"futuroDoPresente":["entreterei","entreterás","entreterá","entreteremos","entretereis","entreterão"],"futuroDoPreterito":["entreteria","entreterias","entreteria","entreteríamos","entreteríeis","entreteriam"]},"entupir":{"presente":["entupo","entopes","entope","entupimos","entupis","entopem"],"preteritoImperfeito":["entupia","entupias","entupia","entupíamos","entupíeis","entupiam"],"preteritoPerfeito":["entupi","entupiste","entupiu","entupimos","entupistes","entupiram"],"preteritoMaisQuePerfeito":["entupira","entupiras","entupira","entupíramos","entupíreis","entupiram"],"futuroDoPresente":["entupirei","entupirás","entupirá","entupiremos","entupireis","entupirão"],"futuroDoPreterito":["entupiria","entupirias","entupiria","entupiríamos","entupiríeis","entupiriam"]},"enviuvar":{"presente":["enviúvo","enviúvas","enviúva","enviuvamos","enviuvais","enviúvam"],"preteritoImperfeito":["enviuvava","enviuvavas","enviuvava","enviuvávamos","enviuváveis","enviuvavam"],"preteritoPerfeito":["enviuvei","enviuvaste","enviuvou","enviuvámos","enviuvastes","enviuvaram"],"preteritoMaisQuePerfeito":["enviuvara","enviuvaras","enviuvara","enviuváramos","enviuváreis","enviuvaram"],"futuroDoPresente":["enviuvarei","enviuvarás","enviuvará","enviuvaremos","enviuvareis","enviuvarão"],"futuroDoPreterito":["enviuvaria","enviuvarias","enviuvaria","enviuvaríamos","enviuvaríeis","enviuvariam"]},"equivaler":{"presente":["equivalho","equivales","equivale","equivalemos","equivaleis","equivalem"],"preteritoImperfeito":["equivalia","equivalias","equivalia","equivalíamos","equivalíeis","equivaliam"],"preteritoPerfeito":["equivali","equivaleste","equivaleu","equivalemos","equivalestes","equivaleram"],"preteritoMaisQuePerfeito":["equivalera","equivaleras","equivalera","equivalêramos","equivalêreis","equivaleram"],"futuroDoPresente":["equivalerei","equivalerás","equivalerá","equivaleremos","equivalereis","equivalerão"],"futuroDoPreterito":["equivaleria","equivalerias","equivaleria","equivaleríamos","equivaleríeis","equivaleriam"]},"espavorir":{"presente":["espavuro","espavores","espavore","espavorimos","espavoris","espavorem"],"preteritoImperfeito":["espavoria","espavorias","espavoria","espavoríamos","espavoríeis","espavoriam"],"preteritoPerfeito":["espavori","espavoriste","espavoriu","espavorimos","espavoristes","espavoriram"],"preteritoMaisQuePerfeito":["espavorira","espavoriras","espavorira","espavoríramos","espavoríreis","espavoriram"],"futuroDoPresente":["espavorirei","espavorirás","espavorirá","espavoriremos","espavorireis","espavorirão"],"futuroDoPreterito":["espavoriria","espavoririas","espavoriria","espavoriríamos","espavoriríeis","espavoririam"]},"estar":{"presente":["estou","estás","está","estamos","estais","estão"],"preteritoImperfeito":["estava","estavas","estava","estávamos","estáveis","estavam"],"preteritoPerfeito":["estive","estiveste","esteve","estivemos","estivestes","estiveram"],"preteritoMaisQuePerfeito":["estivera","estiveras","estivera","estivéramos","estivéreis","estiverem"],"futuroDoPresente":["estarei","estarás","estará","estaremos","estareis","estarão"],"futuroDoPreterito":["estaria","estarias","estaria","estaríamos","estaríeis","estariam"]},"europeizar":{"presente":["europeízo","europeízas","europeíza","europeizamos","europeizais","europeízam"],"preteritoImperfeito":["europeizava","europeizavas","europeizava","europeizávamos","europeizáveis","europeizavam"],"preteritoPerfeito":["europeizei","europeizaste","europeizou","europeizámos","europeizastes","europeizaram"],"preteritoMaisQuePerfeito":["europeizara","europeizaras","europeizara","europeizáramos","europeizáreis","europeizaram"],"futuroDoPresente":["europeizarei","europeizarás","europeizará","europeizaremos","europeizareis","europeizarão"],"futuroDoPreterito":["europeizaria","europeizarias","europeizaria","europeizaríamos","europeizaríeis","europeizariam"]},"expelir":{"presente":["expilo","expeles","expele","expelimos","expelis","expelem"],"preteritoImperfeito":["expelia","expelias","expelia","expelíamos","expelíeis","expeliam"],"preteritoPerfeito":["expeli","expeliste","expeliu","expelimos","expelistes","expeliram"],"preteritoMaisQuePerfeito":["expelira","expeliras","expelira","expelíramos","expelíreis","expeliram"],"futuroDoPresente":["expelirei","expelirás","expelirá","expeliremos","expelireis","expelirão"],"futuroDoPreterito":["expeliria","expelirias","expeliria","expeliríamos","expeliríeis","expeliriam"]},"explodir":{"presente":["expludo","explodes","explode","explodimos","explodis","explodem"],"preteritoImperfeito":["explodia","explodias","explodia","explodíamos","explodíeis","explodiam"],"preteritoPerfeito":["explodi","explodiste","explodiu","explodimos","explodistes","explodiram"],"preteritoMaisQuePerfeito":["explodira","explodiras","explodira","explodíramos","explodíreis","explodiram"],"futuroDoPresente":["explodirei","explodirás","explodirá","explodiremos","explodireis","explodirão"],"futuroDoPreterito":["explodiria","explodirias","explodiria","explodiríamos","explodiríeis","explodiriam"]},"fremir":{"presente":["frimo","fremes","freme","fremimos","fremis","fremem"],"preteritoImperfeito":["fremia","fremias","fremia","fremíamos","fremíeis","fremiam"],"preteritoPerfeito":["fremi","fremiste","fremiu","fremimos","fremistes","fremiram"],"preteritoMaisQuePerfeito":["fremira","fremiras","fremira","fremíramos","fremíreis","fremiram"],"futuroDoPresente":["fremirei","fremirás","fremirá","fremiremos","fremireis","fremirão"],"futuroDoPreterito":["fremiria","fremirias","fremiria","fremiríamos","fremiríeis","fremiriam"]},"fugir":{"presente":["fujo","foges","foge","fugimos","fugis","fogem"],"preteritoImperfeito":["fugia","fugias","fugia","fugíamos","fugíeis","fugiam"],"preteritoPerfeito":["fugi","fugiste","fugiu","fugimos","fugistes","fugiram"],"preteritoMaisQuePerfeito":["fugira","fugiras","fugira","fugíramos","fugíreis","fugiram"],"futuroDoPresente":["fugirei","fugirás","fugirá","fugiremos","fugireis","fugirão"],"futuroDoPreterito":["fugiria","fugirias","fugiria","fugiríamos","fugiríeis","fugiriam"]},"haver":{"presente":["hei","hás","há","havemos/hemos","heis/haveis","hão"],"preteritoImperfeito":["havia","havias","havia","havíamos","havíeis","haviam"],"preteritoPerfeito":["houve","houveste","houve","houvemos","houvestes","houveram"],"preteritoMaisQuePerfeito":["houvera","houveras","houvera","houvéramos","houvéreis","houveram"],"futuroDoPresente":["haverei","haverás","haverá","haveremos","havereis","haverão"],"futuroDoPreterito":["haveria","haverias","haveria","haveríamos","haveríeis","haveriam"]},"hebraizar":{"presente":["hebraízo","hebraízas","hebraíza","hebraizamos","hebraizais","hebraízam"],"preteritoImperfeito":["hebraizava","hebraizavas","hebraizava","hebraizávamos","hebraizáveis","hebraizavam"],"preteritoPerfeito":["hebraizei","hebraizaste","hebraizou","hebraizámos","hebraizastes","hebraizaram"],"preteritoMaisQuePerfeito":["hebraizara","hebraizaras","hebraizara","hebraizáramos","hebraizáreis","hebraizaram"],"futuroDoPresente":["hebraizarei","hebraizarás","hebraizará","hebraizaremos","hebraizareis","hebraizarão"],"futuroDoPreterito":["hebraizaria","hebraizarias","hebraizaria","hebraizaríamos","hebraizaríeis","hebraizariam"]},"homogeneizar":{"presente":["homogeneízo","homogeneízas","homogeneíza","homogeneizamos","homogeneizais","homogeneízam"],"preteritoImperfeito":["homogeneizava","homogeneizavas","homogeneizava","homogeneizávamos","homogeneizáveis","homogeneizavam"],"preteritoPerfeito":["homogeneizei","homogeneizaste","homogeneizou","homogeneizámos","homogeneizastes","homogeneizaram"],"preteritoMaisQuePerfeito":["homogeneizara","homogeneizaras","homogeneizara","homogeneizáramos","homogeneizáreis","homogeneizaram"],"futuroDoPresente":["homogeneizarei","homogeneizarás","homogeneizará","homogeneizaremos","homogeneizareis","homogeneizarão"],"futuroDoPreterito":["homogeneizaria","homogeneizarias","homogeneizaria","homogeneizaríamos","homogeneizaríeis","homogeneizariam"]},"impelir":{"presente":["impilo","impeles","impele","impelimos","impelis","impelem"],"preteritoImperfeito":["impelia","impelias","impelia","impelíamos","impelíeis","impeliam"],"preteritoPerfeito":["impeli","impeliste","impeliu","impelimos","impelistes","impeliram"],"preteritoMaisQuePerfeito":["impelira","impeliras","impelira","impelíramos","impelíreis","impeliram"],"futuroDoPresente":["impelirei","impelirás","impelirá","impeliremos","impelireis","impelirão"],"futuroDoPreterito":["impeliria","impelirias","impeliria","impeliríamos","impeliríeis","impeliriam"]},"incendiar":{"presente":["incendeio","incendeias","incendeia","incendiamos","incendiais","incendeiam"],"preteritoImperfeito":["incendiava","incendiavas","incendiava","incendiávamos","incendiáveis","incendiavam"],"preteritoPerfeito":["incendiei","incendiaste","incendiou","incendiámos","incendiastes","incendiaram"],"preteritoMaisQuePerfeito":["incendiara","incendiaras","incendiara","incendiáramos","incendiáreis","incendiaram"],"futuroDoPresente":["incendiarei","incendiarás","incendiará","incendiaremos","incendiareis","incendiarão"],"futuroDoPreterito":["incendiaria","incendiarias","incendiaria","incendiaríamos","incendiaríeis","incendiariam"]},"instruir":{"presente":["instruo","instrues","instrue","instruímos","instruís","instruem"],"preteritoImperfeito":["instruía","instruías","instruía","instruíamos","instruíeis","instruíam"],"preteritoPerfeito":["instruí","instruíste","instruiu","instruímos","instruístes","instruíram"],"preteritoMaisQuePerfeito":["instruíra","instruíras","instruíra","instruíramos","instruíreis","instruíram"],"futuroDoPresente":["instruirei","instruirás","instruirá","instruiremos","instruireis","instruirão"],"futuroDoPreterito":["instruiria","instruirias","instruiria","instruiríamos","instruiríeis","instruiriam"]},"intermediar":{"presente":["intermedeio","intermedeias","intermedeia","intermediamos","intermediais","intermedeiam"],"preteritoImperfeito":["intermediava","intermediavas","intermediava","intermediávamos","intermediáveis","intermediavam"],"preteritoPerfeito":["intermediei","intermediaste","intermediou","intermediámos","intermediastes","intermediaram"],"preteritoMaisQuePerfeito":["intermediara","intermediaras","intermediara","intermediáramos","intermediáreis","intermediaram"],"futuroDoPresente":["intermediarei","intermediarás","intermediará","intermediaremos","intermediareis","intermediarão"],"futuroDoPreterito":["intermediaria","intermediarias","intermediaria","intermediaríamos","intermediaríeis","intermediariam"]},"intervir":{"presente":["intervenho","intervéns","intervém","intervimos","intervindes","intervêm"],"preteritoImperfeito":["intervinha","intervinhas","intervinha","intervínhamos","intervínheis","intervinham"],"preteritoPerfeito":["intervim","intervieste","interveio","interviemos","interviestes","intervieram"],"preteritoMaisQuePerfeito":["interviera","intervieras","interviera","interviéramos","interviéreis","intervieram"],"futuroDoPresente":["intervirei","intervirás","intervirá","interviremos","intervireis","intervirão"],"futuroDoPreterito":["interviria","intervirias","interviria","interviríamos","interviríeis","interviriam"]},"investir":{"presente":["invisto","investes","investe","investimos","investis","investem"],"preteritoImperfeito":["investia","investias","investia","investíamos","investíeis","investiam"],"preteritoPerfeito":["investi","investiste","investiu","investimos","investistes","investiram"],"preteritoMaisQuePerfeito":["investira","investiras","investira","investíramos","investíreis","investiram"],"futuroDoPresente":["investirei","investirás","investirá","investiremos","investireis","investirão"],"futuroDoPreterito":["investiria","investirias","investiria","investiríamos","investiríeis","investiriam"]},"ir":{"presente":["vou","vais","vai","imos/vamos","is/ides","vão"],"preteritoImperfeito":["ia","ias","ia","íamos","íeis","iam"],"preteritoPerfeito":["fui","foste","foi","fomos","fostes","foram"],"preteritoMaisQuePerfeito":["fora","foras","fora","fôramos","fôreis","foram"],"futuroDoPresente":["irei","irás","irá","iremos","ireis","irão"],"futuroDoPreterito":["iria","irias","iria","iríamos","iríeis","iriam"]},"jazer":{"presente":["jazo","jazes","jaz","jazemos","jazeis","jazem"],"preteritoImperfeito":["jazia","jazias","jazia","jazíamos","jazíeis","jaziam"],"preteritoPerfeito":["jazi","jazeste","jazeu","jazemos","jazestes","jazeram"],"preteritoMaisQuePerfeito":["jazera","jazeras","jazera","jazêramos","jazêreis","jazeram"],"futuroDoPresente":["jazerei","jazerás","jazerá","jazeremos","jazereis","jazerão"],"futuroDoPreterito":["jazeria","jazerias","jazeria","jazeríamos","jazeríeis","jazeriam"]},"judaizar":{"presente":["judaízo","judaízas","judaíza","judaizamos","judaizais","judaízam"],"preteritoImperfeito":["judaizava","judaizavas","judaizava","judaizávamos","judaizáveis","judaizavam"],"preteritoPerfeito":["judaizei","judaizaste","judaizou","judaizámos","judaizastes","judaizaram"],"preteritoMaisQuePerfeito":["judaizara","judaizaras","judaizara","judaizáramos","judaizáreis","judaizaram"],"futuroDoPresente":["judaizarei","judaizarás","judaizará","judaizaremos","judaizareis","judaizarão"],"futuroDoPreterito":["judaizaria","judaizarias","judaizaria","judaizaríamos","judaizaríeis","judaizariam"]},"ler":{"presente":["leio","lês","lê","lemos","ledes","lêem"],"preteritoImperfeito":["lia","lias","lia","líamos","líeis","liam"],"preteritoPerfeito":["li","leste","leu","lemos","lestes","leram"],"preteritoMaisQuePerfeito":["lera","leras","lera","lêramos","lêreis","leram"],"futuroDoPresente":["lerei","lerás","lerá","leremos","lereis","lerão"],"futuroDoPreterito":["leria","lerias","leria","leríamos","leríeis","leriam"]},"licenciar":{"presente":["licencio/licenceio","licenceias/licencias","licenceia/licencia","licenciamos","licenciais","licenciam/licenceiam"],"preteritoImperfeito":["licenciava","licenciavas","licenciava","licenciávamos","licenciáveis","licenciavam"],"preteritoPerfeito":["licenciei","licenciaste","licenciou","licenciámos","licenciastes","licenciaram"],"preteritoMaisQuePerfeito":["licenciara","licenciaras","licenciara","licenciáramos","licenciáreis","licenciaram"],"futuroDoPresente":["licenciarei","licenciarás","licenciará","licenciaremos","licenciareis","licenciarão"],"futuroDoPreterito":["licenciaria","licenciarias","licenciaria","licenciaríamos","licenciaríeis","licenciariam"]},"malquerer":{"presente":["malquero","malqueres","malquer","malqueremos","malquereis","malquerem"],"preteritoImperfeito":["malqueria","malquerias","malqueria","malqueríamos","malqueríeis","malqueriam"],"preteritoPerfeito":["malquis","malquiseste","malquis","malquisemos","malquisestes","malquiseram"],"preteritoMaisQuePerfeito":["malquisera","malquiseras","malquisera","malquiséramos","malquiséreis","malquiseram"],"futuroDoPresente":["malquererei","malquererás","malquererá","malquereremos","malquerereis","malquererão"],"futuroDoPreterito":["malquereria","malquererias","malquereria","malquereríamos","malquereríeis","malquereriam"]},"manter":{"presente":["mantenho","mantens","mantém","mantemos","mantendes","mantêm"],"preteritoImperfeito":["mantinha","mantinhas","mantinha","mantínhamos","mantínheis","mantinham"],"preteritoPerfeito":["mantive","mantiveste","manteve","mantivemos","mantivestes","mantiveram"],"preteritoMaisQuePerfeito":["mantivera","mantiveras","mantivera","mantivéramos","mantivéreis","mantiveram"],"futuroDoPresente":["manterei","manterás","manterá","manteremos","mantereis","manterão"],"futuroDoPreterito":["manteria","manterias","manteria","manteríamos","manteríeis","manteriam"]},"mediar":{"presente":["medeio","medeias","medeia","mediamos","mediais","medeiam"],"preteritoImperfeito":["mediava","mediavas","mediava","mediávamos","mediáveis","mediavam"],"preteritoPerfeito":["mediei","mediaste","mediou","mediámos","mediastes","mediaram"],"preteritoMaisQuePerfeito":["mediara","mediaras","mediara","mediáramos","mediáreis","mediaram"],"futuroDoPresente":["mediarei","mediarás","mediará","mediaremos","mediareis","mediarão"],"futuroDoPreterito":["mediaria","mediarias","mediaria","mediaríamos","mediaríeis","mediariam"]},"mentir":{"presente":["minto","mentes","mente","mentimos","mentis","mentem"],"preteritoImperfeito":["mentia","mentias","mentia","mentíamos","mentíeis","mentiam"],"preteritoPerfeito":["menti","mentiste","mentiu","mentimos","mentistes","mentiram"],"preteritoMaisQuePerfeito":["mentira","mentiras","mentira","mentíramos","mentíreis","mentiram"],"futuroDoPresente":["mentirei","mentirás","mentirá","mentiremos","mentireis","mentirão"],"futuroDoPreterito":["mentiria","mentirias","mentiria","mentiríamos","mentiríeis","mentiriam"]},"minguar":{"presente":["minguo","minguas","mingua","minguamos","minguais","minguam"],"preteritoImperfeito":["minguava","minguavas","minguava","minguávamos","minguáveis","minguavam"],"preteritoPerfeito":["minguei","minguaste","minguou","minguámos","minguastes","minguaram"],"preteritoMaisQuePerfeito":["minguara","minguaras","minguara","minguáramos","minguáreis","minguaram"],"futuroDoPresente":["minguarei","minguarás","minguará","minguaremos","minguareis","minguarão"],"futuroDoPreterito":["minguaria","minguarias","minguaria","minguaríamos","minguaríeis","minguariam"]},"moer":{"presente":["moo","móis","mói","moemos","moeis","moem"],"preteritoImperfeito":["moía","moías","moía","moíamos","moíeis","moíam"],"preteritoPerfeito":["moí","moeste","moeu","moemos","moestes","moeram"],"preteritoMaisQuePerfeito":["moera","moeras","moera","moêramos","moêreis","moeram"],"futuroDoPresente":["moerei","moerás","moerá","moeremos","moereis","moerão"],"futuroDoPreterito":["moeria","moerias","moeria","moeríamos","moeríeis","moeriam"]},"mugir":{"presente":["mujo","muges","muge","mugimos","mugis","mugem"],"preteritoImperfeito":["mugia","mugias","mugia","mugíamos","mugíeis","mugiam"],"preteritoPerfeito":["mugi","mugiste","mugiu","mugimos","mugistes","mugiram"],"preteritoMaisQuePerfeito":["mugira","mugiras","mugira","mugíramos","mugíreis","mugiram"],"futuroDoPresente":["mugirei","mugirás","mugirá","mugiremos","mugireis","mugirão"],"futuroDoPreterito":["mugiria","mugirias","mugiria","mugiríamos","mugiríeis","mugiriam"]},"multicolorir":{"presente":["multicoluro","multicolores","multicolore","multicolorimos","multicoloris","multicolorem"],"preteritoImperfeito":["multicoloria","multicolorias","multicoloria","multicoloríamos","multicoloríeis","multicoloriam"],"preteritoPerfeito":["multicolori","multicoloriste","multicoloriu","multicolorimos","multicoloristes","multicoloriram"],"preteritoMaisQuePerfeito":["multicolorira","multicoloriras","multicolorira","multicoloríramos","multicoloríreis","multicoloriram"],"futuroDoPresente":["multicolorirei","multicolorirás","multicolorirá","multicoloriremos","multicolorireis","multicolorirão"],"futuroDoPreterito":["multicoloriria","multicoloririas","multicoloriria","multicoloriríamos","multicoloriríeis","multicoloririam"]},"negociar":{"presente":["negoceio/negocio","negocias/negoceias","negoceia/negocia","negociamos","negociais","negociam/negoceiam"],"preteritoImperfeito":["negociava","negociavas","negociava","negociávamos","negociáveis","negociavam"],"preteritoPerfeito":["negociei","negociaste","negociou","negociámos","negociastes","negociaram"],"preteritoMaisQuePerfeito":["negociara","negociaras","negociara","negociáramos","negociáreis","negociaram"],"futuroDoPresente":["negociarei","negociarás","negociará","negociaremos","negociareis","negociarão"],"futuroDoPreterito":["negociaria","negociarias","negociaria","negociaríamos","negociaríeis","negociariam"]},"obliquar":{"presente":["obliquo","obliquas","obliqua","obliquamos","obliquais","obliquam"],"preteritoImperfeito":["obliquava","obliquavas","obliquava","obliquávamos","obliquáveis","obliquavam"],"preteritoPerfeito":["obliquei","obliquaste","obliquou","obliquámos","obliquastes","obliquaram"],"preteritoMaisQuePerfeito":["obliquara","obliquaras","obliquara","obliquáramos","obliquáreis","obliquaram"],"futuroDoPresente":["obliquarei","obliquarás","obliquará","obliquaremos","obliquareis","obliquarão"],"futuroDoPreterito":["obliquaria","obliquarias","obliquaria","obliquaríamos","obliquaríeis","obliquariam"]},"obsequiar":{"presente":["obsequeio","obsequeias","obsequeia","obsequiamos","obsequiais","obsequeiam"],"preteritoImperfeito":["obsequiava","obsequiavas","obsequiava","obsequiávamos","obsequiáveis","obsequiavam"],"preteritoPerfeito":["obsequiei","obsequiaste","obsequiou","obsequiámos","obsequiastes","obsequiaram"],"preteritoMaisQuePerfeito":["obsequiara","obsequiaras","obsequiara","obsequiáramos","obsequiáreis","obsequiaram"],"futuroDoPresente":["obsequiarei","obsequiarás","obsequiará","obsequiaremos","obsequiareis","obsequiarão"],"futuroDoPreterito":["obsequiaria","obsequiarias","obsequiaria","obsequiaríamos","obsequiaríeis","obsequiariam"]},"obstruir":{"presente":["obstruo","obstrues","obstrue","obstruímos","obstruís","obstruem"],"preteritoImperfeito":["obstruía","obstruías","obstruía","obstruíamos","obstruíeis","obstruíam"],"preteritoPerfeito":["obstruí","obstruíste","obstruiu","obstruímos","obstruístes","obstruíram"],"preteritoMaisQuePerfeito":["obstruíra","obstruíras","obstruíra","obstruíramos","obstruíreis","obstruíram"],"futuroDoPresente":["obstruirei","obstruirás","obstruirá","obstruiremos","obstruireis","obstruirão"],"futuroDoPreterito":["obstruiria","obstruirias","obstruiria","obstruiríamos","obstruiríeis","obstruiriam"]},"obter":{"presente":["obtenho","obtens","obtém","obtemos","obtendes","obtêm"],"preteritoImperfeito":["obtinha","obtinhas","obtinha","obtínhamos","obtínheis","obtinham"],"preteritoPerfeito":["obtive","obtiveste","obteve","obtivemos","obtivestes","obtiveram"],"preteritoMaisQuePerfeito":["obtivera","obtiveras","obtivera","obtivéramos","obtivéreis","obtiveram"],"futuroDoPresente":["obterei","obterás","obterá","obteremos","obtereis","obterão"],"futuroDoPreterito":["obteria","obterias","obteria","obteríamos","obteríeis","obteriam"]},"odiar":{"presente":["odeio","odeias","odeia","odiamos","odiais","odeiam"],"preteritoImperfeito":["odiava","odiavas","odiava","odiávamos","odiáveis","odiavam"],"preteritoPerfeito":["odiei","odiaste","odiou","odiámos","odiastes","odiaram"],"preteritoMaisQuePerfeito":["odiara","odiaras","odiara","odiáramos","odiáreis","odiaram"],"futuroDoPresente":["odiarei","odiarás","odiará","odiaremos","odiareis","odiarão"],"futuroDoPreterito":["odiaria","odiarias","odiaria","odiaríamos","odiaríeis","odiariam"]},"parar":{"presente":["paro","paras","pára","paramos","parais","param"],"preteritoImperfeito":["parava","paravas","parava","parávamos","paráveis","paravam"],"preteritoPerfeito":["parei","paraste","parou","parámos","parastes","pararam"],"preteritoMaisQuePerfeito":["parara","pararas","parara","paráramos","paráreis","pararam"],"futuroDoPresente":["pararei","pararás","parará","pararemos","parareis","pararão"],"futuroDoPreterito":["pararia","pararias","pararia","pararíamos","pararíeis","parariam"]},"parir":{"presente":["paro","pares","pare","parimos","paris","parem"],"preteritoImperfeito":["paria","parias","paria","paríamos","paríeis","pariam"],"preteritoPerfeito":["pari","pariste","pariu","parimos","paristes","pariram"],"preteritoMaisQuePerfeito":["parira","pariras","parira","paríramos","paríreis","pariram"],"futuroDoPresente":["parirei","parirás","parirá","pariremos","parireis","parirão"],"futuroDoPreterito":["pariria","paririas","pariria","pariríamos","pariríeis","paririam"]},"perder":{"presente":["perco","perdes","perde","perdemos","perdeis","perdem"],"preteritoImperfeito":["perdia","perdias","perdia","perdíamos","perdíeis","perdiam"],"preteritoPerfeito":["perdi","perdeste","perdeu","perdemos","perdestes","perderam"],"preteritoMaisQuePerfeito":["perdera","perderas","perdera","perdêramos","perdêreis","perderam"],"futuroDoPresente":["perderei","perderás","perderá","perderemos","perdereis","perderão"],"futuroDoPreterito":["perderia","perderias","perderia","perderíamos","perderíeis","perderiam"]},"perseguir":{"presente":["persigo","persegues","persegue","perseguimos","perseguis","perseguem"],"preteritoImperfeito":["perseguia","perseguias","perseguia","perseguíamos","perseguíeis","perseguiam"],"preteritoPerfeito":["persegui","perseguiste","perseguiu","perseguimos","perseguistes","perseguiram"],"preteritoMaisQuePerfeito":["perseguira","perseguiras","perseguira","perseguíramos","perseguíreis","perseguiram"],"futuroDoPresente":["perseguirei","perseguirás","perseguirá","perseguiremos","perseguireis","perseguirão"],"futuroDoPreterito":["perseguiria","perseguirias","perseguiria","perseguiríamos","perseguiríeis","perseguiriam"]},"plebeizar":{"presente":["plebeízo","plebeízas","plebeíza","plebeizamos","plebeizais","plebeízam"],"preteritoImperfeito":["plebeizava","plebeizavas","plebeizava","plebeizávamos","plebeizáveis","plebeizavam"],"preteritoPerfeito":["plebeizei","plebeizaste","plebeizou","plebeizámos","plebeizastes","plebeizaram"],"preteritoMaisQuePerfeito":["plebeizara","plebeizaras","plebeizara","plebeizáramos","plebeizáreis","plebeizaram"],"futuroDoPresente":["plebeizarei","plebeizarás","plebeizará","plebeizaremos","plebeizareis","plebeizarão"],"futuroDoPreterito":["plebeizaria","plebeizarias","plebeizaria","plebeizaríamos","plebeizaríeis","plebeizariam"]},"poder":{"presente":["posso","podes","pode","podemos","podeis","podem"],"preteritoImperfeito":["podia","podias","podia","podíamos","podíeis","podiam"],"preteritoPerfeito":["pude","pudeste","pôde","pudemos","pudestes","puderam"],"preteritoMaisQuePerfeito":["pudera","puderas","pudera","pudéramos","pudéreis","puderam"],"futuroDoPresente":["poderei","poderás","poderá","poderemos","podereis","poderão"],"futuroDoPreterito":["poderia","poderias","poderia","poderíamos","poderíeis","poderiam"]},"polir":{"presente":["pulo","pules","pule","polimos","polis","pulem"],"preteritoImperfeito":["polia","polias","polia","políamos","políeis","poliam"],"preteritoPerfeito":["poli","poliste","poliu","polimos","polistes","poliram"],"preteritoMaisQuePerfeito":["polira","poliras","polira","políramos","políreis","poliram"],"futuroDoPresente":["polirei","polirás","polirá","poliremos","polireis","polirão"],"futuroDoPreterito":["poliria","polirias","poliria","poliríamos","poliríeis","poliriam"]},"premiar":{"presente":["premeio","premeias","premeia","premiamos","premiais","premeiam"],"preteritoImperfeito":["premiava","premiavas","premiava","premiávamos","premiáveis","premiavam"],"preteritoPerfeito":["premiei","premiaste","premiou","premiámos","premiastes","premiaram"],"preteritoMaisQuePerfeito":["premiara","premiaras","premiara","premiáramos","premiáreis","premiaram"],"futuroDoPresente":["premiarei","premiarás","premiará","premiaremos","premiareis","premiarão"],"futuroDoPreterito":["premiaria","premiarias","premiaria","premiaríamos","premiaríeis","premiariam"]},"premir":{"presente":["primo","primes","prime","premimos","premis","primem"],"preteritoImperfeito":["premia","premias","premia","premíamos","premíeis","premiam"],"preteritoPerfeito":["premi","premiste","premiu","premimos","premistes","premiram"],"preteritoMaisQuePerfeito":["premira","premiras","premira","premíramos","premíreis","premiram"],"futuroDoPresente":["premirei","premirás","premirá","premiremos","premireis","premirão"],"futuroDoPreterito":["premiria","premirias","premiria","premiríamos","premiríeis","premiriam"]},"pressentir":{"presente":["pressinto","pressentes","pressente","pressentimos","pressentis","pressentem"],"preteritoImperfeito":["pressentia","pressentias","pressentia","pressentíamos","pressentíeis","pressentiam"],"preteritoPerfeito":["pressenti","pressentiste","pressentiu","pressentimos","pressentistes","pressentiram"],"preteritoMaisQuePerfeito":["pressentira","pressentiras","pressentira","pressentíramos","pressentíreis","pressentiram"],"futuroDoPresente":["pressentirei","pressentirás","pressentirá","pressentiremos","pressentireis","pressentirão"],"futuroDoPreterito":["pressentiria","pressentirias","pressentiria","pressentiríamos","pressentiríeis","pressentiriam"]},"prevenir":{"presente":["previno","prevines","previne","prevenimos","prevenis","previnem"],"preteritoImperfeito":["prevenia","prevenias","prevenia","preveníamos","preveníeis","preveniam"],"preteritoPerfeito":["preveni","preveniste","preveniu","prevenimos","prevenistes","preveniram"],"preteritoMaisQuePerfeito":["prevenira","preveniras","prevenira","preveníramos","preveníreis","preveniram"],"futuroDoPresente":["prevenirei","prevenirás","prevenirá","preveniremos","prevenireis","prevenirão"],"futuroDoPreterito":["preveniria","prevenirias","preveniria","preveniríamos","preveniríeis","preveniriam"]},"prever":{"presente":["prevejo","prevês","prevê","prevemos","preveis","prevêem"],"preteritoImperfeito":["previa","previas","previa","prevíamos","prevíeis","previam"],"preteritoPerfeito":["previ","previste","previu","previmos","previstes","previram"],"preteritoMaisQuePerfeito":["previra","previras","previra","prevíramos","prevíreis","previram"],"futuroDoPresente":["preverei","preverás","preverá","preveremos","prevereis","preverão"],"futuroDoPreterito":["preveria","preverias","preveria","preveríamos","preveríeis","preveriam"]},"progredir":{"presente":["progrido","progrides","progride","progredimos","progredis","progridem"],"preteritoImperfeito":["progredia","progredias","progredia","progredíamos","progredíeis","progrediam"],"preteritoPerfeito":["progredi","progrediste","progrediu","progredimos","progredistes","progrediram"],"preteritoMaisQuePerfeito":["progredira","progrediras","progredira","progredíramos","progredíreis","progrediram"],"futuroDoPresente":["progredirei","progredirás","progredirá","progrediremos","progredireis","progredirão"],"futuroDoPreterito":["progrediria","progredirias","progrediria","progrediríamos","progrediríeis","progrediriam"]},"proibir":{"presente":["proíbo","proíbes","proíbe","proibimos","proibis","proíbem"],"preteritoImperfeito":["proibia","proibias","proibia","proibíamos","proibíeis","proibiam"],"preteritoPerfeito":["proibi","proibiste","proibiu","proibimos","proibistes","proibiram"],"preteritoMaisQuePerfeito":["proibira","proibiras","proibira","proibíramos","proibíreis","proibiram"],"futuroDoPresente":["proibirei","proibirás","proibirá","proibiremos","proibireis","proibirão"],"futuroDoPreterito":["proibiria","proibirias","proibiria","proibiríamos","proibiríeis","proibiriam"]},"prosseguir":{"presente":["prossigo","prossegues","prossegue","prosseguimos","prosseguis","prosseguem"],"preteritoImperfeito":["prosseguia","prosseguias","prosseguia","prosseguíamos","prosseguíeis","prosseguiam"],"preteritoPerfeito":["prossegui","prosseguiste","prosseguiu","prosseguimos","prosseguistes","prosseguiram"],"preteritoMaisQuePerfeito":["prosseguira","prosseguiras","prosseguira","prosseguíramos","prosseguíreis","prosseguiram"],"futuroDoPresente":["prosseguirei","prosseguirás","prosseguirá","prosseguiremos","prosseguireis","prosseguirão"],"futuroDoPreterito":["prosseguiria","prosseguirias","prosseguiria","prosseguiríamos","prosseguiríeis","prosseguiriam"]},"prover":{"presente":["provejo","provês","provê","provemos","proveis","provêem"],"preteritoImperfeito":["provia","provias","provia","províamos","províeis","proviam"],"preteritoPerfeito":["provi","proveste","proveu","provemos","provestes","proveram"],"preteritoMaisQuePerfeito":["provera","proveras","provera","provêramos","provêreis","proveram"],"futuroDoPresente":["proverei","proverás","proverá","proveremos","provereis","proverão"],"futuroDoPreterito":["proveria","proverias","proveria","proveríamos","proveríeis","proveriam"]},"provir":{"presente":["provenho","provéns","provém","provimos","provindes","provêm"],"preteritoImperfeito":["provinha","provinhas","provinha","provínhamos","provínheis","provinham"],"preteritoPerfeito":["provim","provieste","proveio","proviemos","proviestes","provieram"],"preteritoMaisQuePerfeito":["proviera","provieras","proviera","proviéramos","proviéreis","provieram"],"futuroDoPresente":["provirei","provirás","provirá","proviremos","provireis","provirão"],"futuroDoPreterito":["proviria","provirias","proviria","proviríamos","proviríeis","proviriam"]},"querer":{"presente":["quero","queres","quer","queremos","quereis","querem"],"preteritoImperfeito":["queria","querias","queria","queríamos","queríeis","queriam"],"preteritoPerfeito":["quis","quiseste","quis","quisemos","quisestes","quiseram"],"preteritoMaisQuePerfeito":["quisera","quiseras","quisera","quiséramos","quiséreis","quiseram"],"futuroDoPresente":["quererei","quererás","quererá","quereremos","querereis","quererão"],"futuroDoPreterito":["quereria","quererias","quereria","quereríamos","quereríeis","quereriam"]},"rebolir":{"presente":["rebulo","reboles","rebole","rebolimos","rebolis","rebolem"],"preteritoImperfeito":["rebolia","rebolias","rebolia","rebolíamos","rebolíeis","reboliam"],"preteritoPerfeito":["reboli","reboliste","reboliu","rebolimos","rebolistes","reboliram"],"preteritoMaisQuePerfeito":["rebolira","reboliras","rebolira","rebolíramos","rebolíreis","reboliram"],"futuroDoPresente":["rebolirei","rebolirás","rebolirá","reboliremos","rebolireis","rebolirão"],"futuroDoPreterito":["reboliria","rebolirias","reboliria","reboliríamos","reboliríeis","reboliriam"]},"regredir":{"presente":["regrido","regrides","regride","regredimos","regredis","regridem"],"preteritoImperfeito":["regredia","regredias","regredia","regredíamos","regredíeis","regrediam"],"preteritoPerfeito":["regredi","regrediste","regrediu","regredimos","regredistes","regrediram"],"preteritoMaisQuePerfeito":["regredira","regrediras","regredira","regredíramos","regredíreis","regrediram"],"futuroDoPresente":["regredirei","regredirás","regredirá","regrediremos","regredireis","regredirão"],"futuroDoPreterito":["regrediria","regredirias","regrediria","regrediríamos","regrediríeis","regrediriam"]},"remir":{"presente":["redimo","redimes","redime","remimos","remis","redimem"],"preteritoImperfeito":["remia","remias","remia","remíamos","remíeis","remiam"],"preteritoPerfeito":["remi","remiste","remiu","remimos","remistes","remiram"],"preteritoMaisQuePerfeito":["remira","remiras","remira","remíramos","remíreis","remiram"],"futuroDoPresente":["remirei","remirás","remirá","remiremos","remireis","remirão"],"futuroDoPreterito":["remiria","remirias","remiria","remiríamos","remiríeis","remiriam"]},"remoer":{"presente":["remoo","remóis","remói","remoemos","remoeis","remoem"],"preteritoImperfeito":["remoía","remoías","remoía","remoíamos","remoíeis","remoíam"],"preteritoPerfeito":["remoí","remoeste","remoeu","remoemos","remoestes","remoeram"],"preteritoMaisQuePerfeito":["remoera","remoeras","remoera","remoêramos","remoêreis","remoeram"],"futuroDoPresente":["remoerei","remoerás","remoerá","remoeremos","remoereis","remoerão"],"futuroDoPreterito":["remoeria","remoerias","remoeria","remoeríamos","remoeríeis","remoeriam"]},"repelir":{"presente":["repilo","repeles","repele","repelimos","repelis","repelem"],"preteritoImperfeito":["repelia","repelias","repelia","repelíamos","repelíeis","repeliam"],"preteritoPerfeito":["repeli","repeliste","repeliu","repelimos","repelistes","repeliram"],"preteritoMaisQuePerfeito":["repelira","repeliras","repelira","repelíramos","repelíreis","repeliram"],"futuroDoPresente":["repelirei","repelirás","repelirá","repeliremos","repelireis","repelirão"],"futuroDoPreterito":["repeliria","repelirias","repeliria","repeliríamos","repeliríeis","repeliriam"]},"repetir":{"presente":["repito","repetes","repete","repetimos","repetis","repetem"],"preteritoImperfeito":["repetia","repetias","repetia","repetíamos","repetíeis","repetiam"],"preteritoPerfeito":["repeti","repetiste","repetiu","repetimos","repetistes","repetiram"],"preteritoMaisQuePerfeito":["repetira","repetiras","repetira","repetíramos","repetíreis","repetiram"],"futuroDoPresente":["repetirei","repetirás","repetirá","repetiremos","repetireis","repetirão"],"futuroDoPreterito":["repetiria","repetirias","repetiria","repetiríamos","repetiríeis","repetiriam"]},"requerer":{"presente":["requeiro","requeres","requer","requeremos","requereis","requerem"],"preteritoImperfeito":["requeria","requerias","requeria","requeríamos","requeríeis","requeriam"],"preteritoPerfeito":["requeri","requereste","requereu","requeremos","requerestes","requereram"],"preteritoMaisQuePerfeito":["requerera","requereras","requerera","requerêramos","requerêreis","requereram"],"futuroDoPresente":["requererei","requererás","requererá","requereremos","requerereis","requererão"],"futuroDoPreterito":["requereria","requererias","requereria","requereríamos","requereríeis","requereriam"]},"ressentir":{"presente":["ressinto","ressentes","ressente","ressentimos","ressentis","ressentem"],"preteritoImperfeito":["ressentia","ressentias","ressentia","ressentíamos","ressentíeis","ressentiam"],"preteritoPerfeito":["ressenti","ressentiste","ressentiu","ressentimos","ressentistes","ressentiram"],"preteritoMaisQuePerfeito":["ressentira","ressentiras","ressentira","ressentíramos","ressentíreis","ressentiram"],"futuroDoPresente":["ressentirei","ressentirás","ressentirá","ressentiremos","ressentireis","ressentirão"],"futuroDoPreterito":["ressentiria","ressentirias","ressentiria","ressentiríamos","ressentiríeis","ressentiriam"]},"reter":{"presente":["retenho","retens","retém","retemos","retendes","retêm"],"preteritoImperfeito":["retinha","retinhas","retinha","retínhamos","retínheis","retinham"],"preteritoPerfeito":["retive","retiveste","reteve","retivemos","retivestes","retiveram"],"preteritoMaisQuePerfeito":["retivera","retiveras","retivera","retivéramos","retivéreis","retiveram"],"futuroDoPresente":["reterei","reterás","reterá","reteremos","retereis","reterão"],"futuroDoPreterito":["reteria","reterias","reteria","reteríamos","reteríeis","reteriam"]},"reunir":{"presente":["reúno","reúnes","reúne","reunimos","reunis","reúnem"],"preteritoImperfeito":["reunia","reunias","reunia","reuníamos","reuníeis","reuniam"],"preteritoPerfeito":["reuni","reuniste","reuniu","reunimos","reunistes","reuniram"],"preteritoMaisQuePerfeito":["reunira","reuniras","reunira","reuníramos","reuníreis","reuniram"],"futuroDoPresente":["reunirei","reunirás","reunirá","reuniremos","reunireis","reunirão"],"futuroDoPreterito":["reuniria","reunirias","reuniria","reuniríamos","reuniríeis","reuniriam"]},"rever":{"presente":["revejo","revês","revê","revemos","reveis","revêem"],"preteritoImperfeito":["revia","revias","revia","revíamos","revíeis","reviam"],"preteritoPerfeito":["revi","reviste","reviu","revimos","revistes","reviram"],"preteritoMaisQuePerfeito":["revira","reviras","revira","revíramos","revíreis","reviram"],"futuroDoPresente":["reverei","reverás","reverá","reveremos","revereis","reverão"],"futuroDoPreterito":["reveria","reverias","reveria","reveríamos","reveríeis","reveriam"]},"revestir":{"presente":["revisto","revestes","reveste","revestimos","revestis","revestem"],"preteritoImperfeito":["revestia","revestias","revestia","revestíamos","revestíeis","revestiam"],"preteritoPerfeito":["revesti","revestiste","revestiu","revestimos","revestistes","revestiram"],"preteritoMaisQuePerfeito":["revestira","revestiras","revestira","revestíramos","revestíreis","revestiram"],"futuroDoPresente":["revestirei","revestirás","revestirá","revestiremos","revestireis","revestirão"],"futuroDoPreterito":["revestiria","revestirias","revestiria","revestiríamos","revestiríeis","revestiriam"]},"revir":{"presente":["revenho","revéns","revém","revimos","revindes","revêm"],"preteritoImperfeito":["revinha","revinhas","revinha","revínhamos","revínheis","revinham"],"preteritoPerfeito":["revim","revieste","reveio","reviemos","reviestes","revieram"],"preteritoMaisQuePerfeito":["reviera","revieras","reviera","reviéramos","reviéreis","revieram"],"futuroDoPresente":["revirei","revirás","revirá","reviremos","revireis","revirão"],"futuroDoPreterito":["reviria","revirias","reviria","reviríamos","reviríeis","reviriam"]},"rir":{"presente":["rio","ris","ri","rimos","rides","riem"],"preteritoImperfeito":["ria","rias","ria","ríamos","ríeis","riam"],"preteritoPerfeito":["ri","riste","riu","rimos","ristes","riram"],"preteritoMaisQuePerfeito":["rira","riras","rira","ríramos","ríreis","riram"],"futuroDoPresente":["rirei","rirás","rirá","riremos","rireis","rirão"],"futuroDoPreterito":["riria","ririas","riria","riríamos","riríeis","ririam"]},"roer":{"presente":["roo","róis","rói","roemos","roeis","roem"],"preteritoImperfeito":["roía","roías","roía","roíamos","roíeis","roíam"],"preteritoPerfeito":["roí","roeste","roeu","roemos","roestes","roeram"],"preteritoMaisQuePerfeito":["roera","roeras","roera","roêramos","roêreis","roeram"],"futuroDoPresente":["roerei","roerás","roerá","roeremos","roereis","roerão"],"futuroDoPreterito":["roeria","roerias","roeria","roeríamos","roeríeis","roeriam"]},"rugir":{"presente":["rujo","ruges","ruge","rugimos","rugis","rugem"],"preteritoImperfeito":["rugia","rugias","rugia","rugíamos","rugíeis","rugiam"],"preteritoPerfeito":["rugi","rugiste","rugiu","rugimos","rugistes","rugiram"],"preteritoMaisQuePerfeito":["rugira","rugiras","rugira","rugíramos","rugíreis","rugiram"],"futuroDoPresente":["rugirei","rugirás","rugirá","rugiremos","rugireis","rugirão"],"futuroDoPreterito":["rugiria","rugirias","rugiria","rugiríamos","rugiríeis","rugiriam"]},"saber":{"presente":["sei","sabes","sabe","sabemos","sabeis","sabem"],"preteritoImperfeito":["sabia","sabias","sabia","sabíamos","sabíeis","sabiam"],"preteritoPerfeito":["soube","soubeste","soube","soubemos","soubestes","souberam"],"preteritoMaisQuePerfeito":["soubera","souberas","soubera","soubéramos","soubéreis","souberam"],"futuroDoPresente":["saberei","saberás","saberá","saberemos","sabereis","saberão"],"futuroDoPreterito":["saberia","saberias","saberia","saberíamos","saberíeis","saberiam"]},"sacudir":{"presente":["sacudo","sacodes","sacode","sacudimos","sacudis","sacodem"],"preteritoImperfeito":["sacudia","sacudias","sacudia","sacudíamos","sacudíeis","sacudiam"],"preteritoPerfeito":["sacudi","sacudiste","sacudiu","sacudimos","sacudistes","sacudiram"],"preteritoMaisQuePerfeito":["sacudira","sacudiras","sacudira","sacudíramos","sacudíreis","sacudiram"],"futuroDoPresente":["sacudirei","sacudirás","sacudirá","sacudiremos","sacudireis","sacudirão"],"futuroDoPreterito":["sacudiria","sacudirias","sacudiria","sacudiríamos","sacudiríeis","sacudiriam"]},"saudar":{"presente":["saúdo","saúdas","saúda","saudamos","saudais","saúdam"],"preteritoImperfeito":["saudava","saudavas","saudava","saudávamos","saudáveis","saudavam"],"preteritoPerfeito":["saudei","saudaste","saudou","saudámos","saudastes","saudaram"],"preteritoMaisQuePerfeito":["saudara","saudaras","saudara","saudáramos","saudáreis","saudaram"],"futuroDoPresente":["saudarei","saudarás","saudará","saudaremos","saudareis","saudarão"],"futuroDoPreterito":["saudaria","saudarias","saudaria","saudaríamos","saudaríeis","saudariam"]},"seguir":{"presente":["sigo","segues","segue","seguimos","seguis","seguem"],"preteritoImperfeito":["seguia","seguias","seguia","seguíamos","seguíeis","seguiam"],"preteritoPerfeito":["segui","seguiste","seguiu","seguimos","seguistes","seguiram"],"preteritoMaisQuePerfeito":["seguira","seguiras","seguira","seguíramos","seguíreis","seguiram"],"futuroDoPresente":["seguirei","seguirás","seguirá","seguiremos","seguireis","seguirão"],"futuroDoPreterito":["seguiria","seguirias","seguiria","seguiríamos","seguiríeis","seguiriam"]},"sentir":{"presente":["sinto","sentes","sente","sentimos","sentis","sentem"],"preteritoImperfeito":["sentia","sentias","sentia","sentíamos","sentíeis","sentiam"],"preteritoPerfeito":["senti","sentiste","sentiu","sentimos","sentistes","sentiram"],"preteritoMaisQuePerfeito":["sentira","sentiras","sentira","sentíramos","sentíreis","sentiram"],"futuroDoPresente":["sentirei","sentirás","sentirá","sentiremos","sentireis","sentirão"],"futuroDoPreterito":["sentiria","sentirias","sentiria","sentiríamos","sentiríeis","sentiriam"]},"ser":{"presente":["sou","és","é","somos","sois","são"],"preteritoImperfeito":["era","eras","era","éramos","éreis","eram"],"preteritoPerfeito":["fui","foste","foi","fomos","fostes","foram"],"preteritoMaisQuePerfeito":["fora","foras","fora","fôramos","fôreis","foram"],"futuroDoPresente":["serei","serás","será","seremos","sereis","serão"],"futuroDoPreterito":["seria","serias","seria","seríamos","seríeis","seriam"]},"servir":{"presente":["sirvo","serves","serve","servimos","servis","servem"],"preteritoImperfeito":["servia","servias","servia","servíamos","servíeis","serviam"],"preteritoPerfeito":["servi","serviste","serviu","servimos","servistes","serviram"],"preteritoMaisQuePerfeito":["servira","serviras","servira","servíramos","servíreis","serviram"],"futuroDoPresente":["servirei","servirás","servirá","serviremos","servireis","servirão"],"futuroDoPreterito":["serviria","servirias","serviria","serviríamos","serviríeis","serviriam"]},"sorrir":{"presente":["sorrio","sorris","sorri","sorrimos","sorrides","sorriem"],"preteritoImperfeito":["sorria","sorrias","sorria","sorríamos","sorríeis","sorriam"],"preteritoPerfeito":["sorri","sorriste","sorriu","sorrimos","sorristes","sorriram"],"preteritoMaisQuePerfeito":["sorrira","sorriras","sorrira","sorríramos","sorríreis","sorriram"],"futuroDoPresente":["sorrirei","sorrirás","sorrirá","sorriremos","sorrireis","sorrirão"],"futuroDoPreterito":["sorriria","sorririas","sorriria","sorriríamos","sorriríeis","sorririam"]},"sortir":{"presente":["surto","surtes","surte","sortimos","sortis","surtem"],"preteritoImperfeito":["sortia","sortias","sortia","sortíamos","sortíeis","sortiam"],"preteritoPerfeito":["sorti","sortiste","sortiu","sortimos","sortistes","sortiram"],"preteritoMaisQuePerfeito":["sortira","sortiras","sortira","sortíramos","sortíreis","sortiram"],"futuroDoPresente":["sortirei","sortirás","sortirá","sortiremos","sortireis","sortirão"],"futuroDoPreterito":["sortiria","sortirias","sortiria","sortiríamos","sortiríeis","sortiriam"]},"subir":{"presente":["subo","sobes","sobe","subimos","subis","sobem"],"preteritoImperfeito":["subia","subias","subia","subíamos","subíeis","subiam"],"preteritoPerfeito":["subi","subiste","subiu","subimos","subistes","subiram"],"preteritoMaisQuePerfeito":["subira","subiras","subira","subíramos","subíreis","subiram"],"futuroDoPresente":["subirei","subirás","subirá","subiremos","subireis","subirão"],"futuroDoPreterito":["subiria","subirias","subiria","subiríamos","subiríeis","subiriam"]},"sumir":{"presente":["sumo","somes","some","sumimos","sumis","somem"],"preteritoImperfeito":["sumia","sumias","sumia","sumíamos","sumíeis","sumiam"],"preteritoPerfeito":["sumi","sumiste","sumiu","sumimos","sumistes","sumiram"],"preteritoMaisQuePerfeito":["sumira","sumiras","sumira","sumíramos","sumíreis","sumiram"],"futuroDoPresente":["sumirei","sumirás","sumirá","sumiremos","sumireis","sumirão"],"futuroDoPreterito":["sumiria","sumirias","sumiria","sumiríamos","sumiríeis","sumiriam"]},"suster":{"presente":["sustenho","sustens","sustém","sustemos","sustendes","sustêm"],"preteritoImperfeito":["sustinha","sustinhas","sustinha","sustínhamos","sustínheis","sustinham"],"preteritoPerfeito":["sustive","sustiveste","susteve","sustivemos","sustivestes","sustiveram"],"preteritoMaisQuePerfeito":["sustivera","sustiveras","sustivera","sustivéramos","sustivéreis","sustiveram"],"futuroDoPresente":["susterei","susterás","susterá","susteremos","sustereis","susterão"],"futuroDoPreterito":["susteria","susterias","susteria","susteríamos","susteríeis","susteriam"]},"ter":{"presente":["tenho","tens","tem","temos","tendes","têm"],"preteritoImperfeito":["tinha","tinhas","tinha","tínhamos","tínheis","tinham"],"preteritoPerfeito":["tive","tiveste","teve","tivemos","tivestes","tiveram"],"preteritoMaisQuePerfeito":["tivera","tiveras","tivera","tivéramos","tivéreis","tiveram"],"futuroDoPresente":["terei","terás","terá","teremos","tereis","terão"],"futuroDoPreterito":["teria","terias","teria","teríamos","teríeis","teriam"]},"tossir":{"presente":["tusso","tosses","tosse","tossimos","tossis","tossem"],"preteritoImperfeito":["tossia","tossias","tossia","tossíamos","tossíeis","tossiam"],"preteritoPerfeito":["tossi","tossiste","tossiu","tossimos","tossistes","tossiram"],"preteritoMaisQuePerfeito":["tossira","tossiras","tossira","tossíramos","tossíreis","tossiram"],"futuroDoPresente":["tossirei","tossirás","tossirá","tossiremos","tossireis","tossirão"],"futuroDoPreterito":["tossiria","tossirias","tossiria","tossiríamos","tossiríeis","tossiriam"]},"transgredir":{"presente":["transgrido","transgrides","transgride","transgredimos","transgredis","transgridem"],"preteritoImperfeito":["transgredia","transgredias","transgredia","transgredíamos","transgredíeis","transgrediam"],"preteritoPerfeito":["transgredi","transgrediste","transgrediu","transgredimos","transgredistes","transgrediram"],"preteritoMaisQuePerfeito":["transgredira","transgrediras","transgredira","transgredíramos","transgredíreis","transgrediram"],"futuroDoPresente":["transgredirei","transgredirás","transgredirá","transgrediremos","transgredireis","transgredirão"],"futuroDoPreterito":["transgrediria","transgredirias","transgrediria","transgrediríamos","transgrediríeis","transgrediriam"]},"trazer":{"presente":["trago","trazes","traz","trazemos","trazeis","trazem"],"preteritoImperfeito":["trazia","trazias","trazia","trazíamos","trazíeis","traziam"],"preteritoPerfeito":["trouxe","trouxeste","trouxe","trouxemos","trouxestes","trouxeram"],"preteritoMaisQuePerfeito":["trouxera","trouxeras","trouxera","trouxéramos","trouxéreis","trouxeram"],"futuroDoPresente":["trarei","trarás","trará","traremos","trareis","trarão"],"futuroDoPreterito":["traria","trarias","traria","traríamos","traríeis","trariam"]},"valer":{"presente":["valho","vales","vale","valemos","valeis","valem"],"preteritoImperfeito":["valia","valias","valia","valíamos","valíeis","valiam"],"preteritoPerfeito":["vali","valeste","valeu","valemos","valestes","valeram"],"preteritoMaisQuePerfeito":["valera","valeras","valera","valêramos","valêreis","valeram"],"futuroDoPresente":["valerei","valerás","valerá","valeremos","valereis","valerão"],"futuroDoPreterito":["valeria","valerias","valeria","valeríamos","valeríeis","valeriam"]},"ver":{"presente":["vejo","vês","vê","vemos","veis","vêem"],"preteritoImperfeito":["via","vias","via","víamos","víeis","viam"],"preteritoPerfeito":["vi","viste","viu","vimos","vistes","viram"],"preteritoMaisQuePerfeito":["vira","viras","vira","víramos","víreis","viram"],"futuroDoPresente":["verei","verás","verá","veremos","vereis","verão"],"futuroDoPreterito":["veria","verias","veria","veríamos","veríeis","veriam"]},"vestir":{"presente":["visto","vestes","veste","vestimos","vestis","vestem"],"preteritoImperfeito":["vestia","vestias","vestia","vestíamos","vestíeis","vestiam"],"preteritoPerfeito":["vesti","vestiste","vestiu","vestimos","vestistes","vestiram"],"preteritoMaisQuePerfeito":["vestira","vestiras","vestira","vestíramos","vestíreis","vestiram"],"futuroDoPresente":["vestirei","vestirás","vestirá","vestiremos","vestireis","vestirão"],"futuroDoPreterito":["vestiria","vestirias","vestiria","vestiríamos","vestiríeis","vestiriam"]},"vir":{"presente":["venho","vens","vem","vimos","vindes","vêm"],"preteritoImperfeito":["vinha","vinhas","vinha","vínhamos","vínheis","vinham"],"preteritoPerfeito":["vim","vieste","veio","viemos","viestes","vieram"],"preteritoMaisQuePerfeito":["viera","vieras","viera","viéramos","viéreis","vieram"],"futuroDoPresente":["virei","virás","virá","viremos","vireis","virão"],"futuroDoPreterito":["viria","virias","viria","viríamos","viríeis","viriam"]},"viuvar":{"presente":["viúvo","viúvas","viúva","viuvamos","viuvais","viúvam"],"preteritoImperfeito":["viuvava","viuvavas","viuvava","viuvávamos","viuváveis","viuvavam"],"preteritoPerfeito":["viuvei","viuvaste","viuvou","viuvámos","viuvastes","viuvaram"],"preteritoMaisQuePerfeito":["viuvara","viuvaras","viuvara","viuváramos","viuváreis","viuvaram"],"futuroDoPresente":["viuvarei","viuvarás","viuvará","viuvaremos","viuvareis","viuvarão"],"futuroDoPreterito":["viuvaria","viuvarias","viuvaria","viuvaríamos","viuvaríeis","viuvariam"]}}

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var construir = __webpack_require__(2);
var ehIrregular = __webpack_require__(8);
var ehUmVerbo = __webpack_require__(9);
var irregulares = __webpack_require__(0);

/**
 * Conjugar qualquer verbo (regular ou irregular).
 *
 * @param {String} verbo - Um verbo qualquer.
 * @returns {Object} Toda as conjugações.
 */
function conjugar(verbo) {
  if (ehUmVerbo(verbo)) {
    return ehIrregular(verbo)
      ? irregulares[verbo]
      : construir(verbo);
  }

  throw new Error("Verbo inválido.");
}

module.exports = conjugar;


/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var analisar = __webpack_require__(3);

var ar = __webpack_require__(4);
var er = __webpack_require__(5);
var ir = __webpack_require__(6);
var por = __webpack_require__(7);

/**
 * Obter toda a conjugação de um verbo.
 *
 * Somente para verbos terminados em -ar, -er, ir ou -pôr.
 *
 * @param {String} verbo - Um verbo.
 * @returns {Object} Toda a conjugação do verbo.
 */
function construir(verbo) {
  var analise = analisar(verbo);
  var conjugacao;

  switch (analise.sufixo) {
    case "ar":
      conjugacao = ar(analise.prefixo);
      break;
    case "er":
      conjugacao = er(analise.prefixo);
      break;
    case "ir":
      conjugacao = ir(analise.prefixo);
      break;
    case "pôr":
      conjugacao = por(analise.prefixo);
      break;
  }

  return conjugacao;
}

module.exports = construir;


/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/**
 * Obter o prefixo e o sufixo de um verbo.
 *
 * @param {String} verbo - Um verbo qualquer.
 * @returns {Object} Objeto com o prefixo e sufixo do Verbo.
 *
 * @example
 * analisar("amar");
 * // {
 * //   prefixo: "am",
 * //   sufixo: "ar"
 * // }
 */
function analisar(verbo) {
  var prefixo = verbo.replace(/(?:[aei]|pô)r$/i, "");
  var sufixo = verbo.replace(/^.*((?:[aei]|pô)r)$/i, "$1");

  return {
    prefixo: prefixo,
    sufixo: sufixo
  };
}

module.exports = analisar;


/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/**
 * Obter todas as conjugações de um verbo terminado em -ar.
 *
 * @param {String} prefixo - Prefixo do verbo.
 * @returns {Object} Verbo conjugado.
 */
function ar(prefixo) {
  return {
    presente: [
      prefixo + "o",
      prefixo + "as",
      prefixo + "a",
      prefixo + "amos",
      prefixo + "ais",
      prefixo + "am"
    ],
    preteritoImperfeito: [
      prefixo + "ava",
      prefixo + "avas",
      prefixo + "ava",
      prefixo + "ávamos",
      prefixo + "áveis",
      prefixo + "avam"
    ],
    preteritoPerfeito: [
      prefixo + "ei",
      prefixo + "aste",
      prefixo + "ou",
      prefixo + "amos",
      prefixo + "astes",
      prefixo + "aram"
    ],
    preteritoMaisQuePerfeito: [
      prefixo + "ara",
      prefixo + "aras",
      prefixo + "ara",
      prefixo + "áramos",
      prefixo + "áreis",
      prefixo + "aram"
    ],
    futuroDoPresente: [
      prefixo + "arei",
      prefixo + "arás",
      prefixo + "ará",
      prefixo + "aremos",
      prefixo + "areis",
      prefixo + "arão"
    ],
    futuroDoPreterito: [
      prefixo + "aria",
      prefixo + "arias",
      prefixo + "aria",
      prefixo + "aríamos",
      prefixo + "aríeis",
      prefixo + "ariam"
    ]
  };
}

module.exports = ar;


/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/**
 * Obter todas as conjugações de um verbo terminado em -er.
 *
 * @param {String} prefixo - Prefixo do verbo.
 * @returns {Object} Verbo conjugado.
 */
function er(prefixo) {
  return {
    presente: [
      prefixo + "o",
      prefixo + "es",
      prefixo + "e",
      prefixo + "emos",
      prefixo + "eis",
      prefixo + "em"
    ],
    preteritoImperfeito: [
      prefixo + "ia",
      prefixo + "ias",
      prefixo + "ia",
      prefixo + "íamos",
      prefixo + "íeis",
      prefixo + "iam"
    ],
    preteritoPerfeito: [
      prefixo + "i",
      prefixo + "este",
      prefixo + "eu",
      prefixo + "emos",
      prefixo + "estes",
      prefixo + "eram"
    ],
    preteritoMaisQuePerfeito: [
      prefixo + "era",
      prefixo + "eras",
      prefixo + "era",
      prefixo + "êramos",
      prefixo + "êreis",
      prefixo + "eram"
    ],
    futuroDoPresente: [
      prefixo + "erei",
      prefixo + "erás",
      prefixo + "erá",
      prefixo + "eremos",
      prefixo + "ereis",
      prefixo + "erão"
    ],
    futuroDoPreterito: [
      prefixo + "eria",
      prefixo + "erias",
      prefixo + "eria",
      prefixo + "eríamos",
      prefixo + "eríeis",
      prefixo + "eriam"
    ]
  };
}

module.exports = er;


/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/**
 * Obter todas as conjugações de um verbo terminado em -ir.
 *
 * @param {String} prefixo - Prefixo do verbo.
 * @returns {Object} Verbo conjugado.
 */
function ir(prefixo) {
  return {
    presente: [
      prefixo + "o",
      prefixo + "es",
      prefixo + "e",
      prefixo + "imos",
      prefixo + "is",
      prefixo + "em"
    ],
    preteritoImperfeito: [
      prefixo + "ia",
      prefixo + "ias",
      prefixo + "ia",
      prefixo + "íamos",
      prefixo + "íeis",
      prefixo + "iam"
    ],
    preteritoPerfeito: [
      prefixo + "i",
      prefixo + "iste",
      prefixo + "iu",
      prefixo + "imos",
      prefixo + "istes",
      prefixo + "iram"
    ],
    preteritoMaisQuePerfeito: [
      prefixo + "ira",
      prefixo + "iras",
      prefixo + "ira",
      prefixo + "íramos",
      prefixo + "íreis",
      prefixo + "iram"
    ],
    futuroDoPresente: [
      prefixo + "irei",
      prefixo + "irás",
      prefixo + "irá",
      prefixo + "iremos",
      prefixo + "ireis",
      prefixo + "irão"
    ],
    futuroDoPreterito: [
      prefixo + "iria",
      prefixo + "irias",
      prefixo + "iria",
      prefixo + "iríamos",
      prefixo + "iríeis",
      prefixo + "iriam"
    ]
  };
}

module.exports = ir;


/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/**
 * Obter todas as conjugações de um verbo terminado em -pôr.
 *
 * @param {String} prefixo - Prefixo do verbo.
 * @returns {Object} Verbo conjugado.
 */
function por(prefixo) {
  return {
    presente: [
      prefixo + "ponho",
      prefixo + "pões",
      prefixo + "põe",
      prefixo + "pomos",
      prefixo + "pondes",
      prefixo + "põem"
    ],
    preteritoImperfeito: [
      prefixo + "punha",
      prefixo + "punhas",
      prefixo + "punha",
      prefixo + "púnhamos",
      prefixo + "púnheis",
      prefixo + "punham"
    ],
    preteritoPerfeito: [
      prefixo + "pus",
      prefixo + "puseste",
      prefixo + "pôs",
      prefixo + "pusemos",
      prefixo + "pusestes",
      prefixo + "puseram"
    ],
    preteritoMaisQuePerfeito: [
      prefixo + "pusera",
      prefixo + "puseras",
      prefixo + "pusera",
      prefixo + "puséramos",
      prefixo + "puséreis",
      prefixo + "puseram"
    ],
    futuroDoPresente: [
      prefixo + "porei",
      prefixo + "porás",
      prefixo + "porá",
      prefixo + "poremos",
      prefixo + "poreis",
      prefixo + "porão"
    ],
    futuroDoPreterito: [
      prefixo + "poria",
      prefixo + "porias",
      prefixo + "poria",
      prefixo + "poríamos",
      prefixo + "poríeis",
      prefixo + "poriam"
    ]
  };
}

module.exports = por;


/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var irregulares = __webpack_require__(0);

/**
 * Verifica se um verbo é irregular.
 *
 * Não entenderá verbos terminados em -pôr como irregular.
 *
 * @param {String} verbo - Verbo que será verificado.
 * @returns {Boolean}
 *
 * @example
 * ehIrregular("ser"); // true
 * ehIrregular("amar"); // false
 */
function ehIrregular(verbo) {
  return irregulares.hasOwnProperty(verbo);
}

module.exports = ehIrregular;


/***/ }),
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/**
 * Verifica se um verbo é valido.
 *
 * @param {String} verbo - Verbo que será verificado.
 * @returns {Boolean}
 *
 * @example
 * ehValido("amar"); // true
 * ehValido("heloisa"); // false
 */
function ehValido(verbo) {
  return /(?:[aei]|pô)r$/i.test(verbo);
}

module.exports = ehValido;


/***/ })
/******/ ]);
});