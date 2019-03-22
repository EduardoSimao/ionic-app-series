webpackJsonp([0],{

/***/ 108:
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 108;

/***/ }),

/***/ 149:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"../pages/got/got.module": [
		150
	],
	"../pages/pll/pll.module": [
		152
	],
	"../pages/supernatural/supernatural.module": [
		154
	]
};
function webpackAsyncContext(req) {
	var ids = map[req];
	if(!ids)
		return Promise.reject(new Error("Cannot find module '" + req + "'."));
	return Promise.all(ids.slice(1).map(__webpack_require__.e)).then(function() {
		return __webpack_require__(ids[0]);
	});
};
webpackAsyncContext.keys = function webpackAsyncContextKeys() {
	return Object.keys(map);
};
webpackAsyncContext.id = 149;
module.exports = webpackAsyncContext;

/***/ }),

/***/ 150:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GotPageModule", function() { return GotPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__got__ = __webpack_require__(151);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var GotPageModule = /** @class */ (function () {
    function GotPageModule() {
    }
    GotPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__got__["a" /* GotPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__got__["a" /* GotPage */]),
            ],
        })
    ], GotPageModule);
    return GotPageModule;
}());

//# sourceMappingURL=got.module.js.map

/***/ }),

/***/ 151:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return GotPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(18);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/**
 * Generated class for the GotPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var GotPage = /** @class */ (function () {
    function GotPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    GotPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad GotPage');
    };
    GotPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-got',template:/*ion-inline-start:"/home/renan/Vídeos/aula1/src/pages/got/got.html"*/'<!--\n  Generated template for the GotPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>got</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n  <ion-card>\n    <ion-item>\n      <ion-avatar item-start>\n        <img src="../../assets/imgs/got/got-logo.jpg">\n      </ion-avatar>\n      <h2>Game of Thrones</h2>\n      <p>7ª Temporada</p>\n    </ion-item>\n\n    <img src="../../assets/imgs/got/got-7.jpg">\n\n    <ion-card-content>\n      <p>Jon Snow (Kit Harington) se recusa a baixar a cabeça para Daenerys (Emilia Clarke), mas decide renunciar ao seu Rei no Norte, se ela o ajudar a combater a ameaça que vem daquela região. Enquanto isso, os dois se reúnem juntamente com Cersei (Lena Headey), Tyrion (Peter Dinklage), Jorah (Iain Glen), Varys (Conleth Hill), Missandei (Nathalie Emmanuel), Qyburn (Anton Lesser), Euron Greyjoy (Pilou Asbæk), Sandor (Rory McCann) e Montanha no Poço do Dragão, onde está uma criatura que pode unir os Sete Reinos contra o Rei da Noite (Vladimir Furdik).</p>\n    </ion-card-content>\n\n    <ion-row>\n      <ion-col>\n        <button ion-button icon-start clear small>\n          <ion-icon name="thumbs-up"></ion-icon>\n          <div>45746 Likes</div>\n        </button>\n      </ion-col>\n      <ion-col>\n        <button ion-button icon-start clear small>\n          <ion-icon name="text"></ion-icon>\n          <div>745465 Comments</div>\n        </button>\n      </ion-col>\n      <ion-col align-self-center text-center>\n        <ion-note>\n          1a ago\n        </ion-note>\n      </ion-col>\n    </ion-row>\n  </ion-card>\n\n  <ion-card>\n    <ion-item>\n      <ion-avatar item-start>\n        <img src="../../assets/imgs/got/got-logo.jpg">\n      </ion-avatar>\n      <h2>Game of Thrones</h2>\n      <p>6ª Temporada</p>\n    </ion-item>\n\n    <img src="../../assets/imgs/got/got-6.jpg">\n\n    <ion-card-content>\n      <p>Após ser capturada, Daenerys Targaryen (Daenerys Targaryen) é levada para Vaes Dothrak. Bran Stark (Isaac Hempstead Wright) continua treinando com o Corvo de Três Olhos. Enquanto isso, a herança de Ramsay Bolton (Iwan Rheon) é ameaçada em Winterfell e o destino de Jon Snow (Kit Harington), revelado. </p>\n    </ion-card-content>\n\n    <ion-row>\n      <ion-col>\n        <button ion-button icon-start clear small>\n          <ion-icon name="thumbs-up"></ion-icon>\n          <div>546465 Likes</div>\n        </button>\n      </ion-col>\n      <ion-col>\n        <button ion-button icon-start clear small>\n          <ion-icon name="text"></ion-icon>\n          <div>456454 Comments</div>\n        </button>\n      </ion-col>\n      <ion-col align-self-center text-center>\n        <ion-note>\n          2a ago\n        </ion-note>\n      </ion-col>\n    </ion-row>\n  </ion-card>\n\n  <ion-card>\n    <ion-item>\n      <ion-avatar item-start>\n        <img src="../../assets/imgs/got/got-logo.jpg">\n      </ion-avatar>\n      <h2>Game of Thrones</h2>\n      <p>5ª Temporada</p>\n    </ion-item>\n\n    <img src="../../assets/imgs/got/got-5.jpg">\n\n    <ion-card-content>\n      <p>Daenerys Targaryen (Emilia Clarke) torna-se cada vez mais poderosa e não passa despercebida por ninguém em Westeros. Enquanto isso, Jon Snow (Kit Harington) enfrenta grandes mudanças e Arya Stark (Maisie Williams) continua com sua busca por vingança. </p>\n    </ion-card-content>\n\n    <ion-row>\n      <ion-col>\n        <button ion-button icon-start clear small>\n          <ion-icon name="thumbs-up"></ion-icon>\n          <div>746413 Likes</div>\n        </button>\n      </ion-col>\n      <ion-col>\n        <button ion-button icon-start clear small>\n          <ion-icon name="text"></ion-icon>\n          <div>4568434 Comments</div>\n        </button>\n      </ion-col>\n      <ion-col align-self-center text-center>\n        <ion-note>\n          3a ago\n        </ion-note>\n      </ion-col>\n    </ion-row>\n  </ion-card>\n\n  <ion-card>\n    <ion-item>\n      <ion-avatar item-start>\n        <img src="../../assets/imgs/got/got-logo.jpg">\n      </ion-avatar>\n      <h2>Game of Thrones</h2>\n      <p>4ª Temporada</p>\n    </ion-item>\n\n    <img src="../../assets/imgs/got/got-4.jpg">\n\n    <ion-card-content>\n      <p>Joffrey (Jack Gleeson) se prepara para casar com Margaery (Natalie Dormer). Jon Snow (Kit Harington) tenta alertar a Patrulha da Noite sobre a invasão iminente de um enorme exército selvagem. Bran (Isaac Hempstead-Wright) segue suas visões do Corvo de Três Olhos. Do outro lado do Mar Estreito, Daenerys (Emilia Clarke) decide libertar populações escravizadas, enquanto se esforça para controlar seus dragões em crescimento.</p>\n    </ion-card-content>\n\n    <ion-row>\n      <ion-col>\n        <button ion-button icon-start clear small>\n          <ion-icon name="thumbs-up"></ion-icon>\n          <div>7468431 Likes</div>\n        </button>\n      </ion-col>\n      <ion-col>\n        <button ion-button icon-start clear small>\n          <ion-icon name="text"></ion-icon>\n          <div>357464 Comments</div>\n        </button>\n      </ion-col>\n      <ion-col align-self-center text-center>\n        <ion-note>\n          4a ago\n        </ion-note>\n      </ion-col>\n    </ion-row>\n  </ion-card>\n\n  <ion-card>\n    <ion-item>\n\n      <ion-avatar item-start>\n        <img src="../../assets/imgs/got/got-logo.jpg">\n      </ion-avatar>\n      <h2>Game of Thrones</h2>\n      <p>3ª Temporada</p>\n    </ion-item>\n\n    <img src="../../assets/imgs/got/got-3.jpg">\n\n    <ion-card-content>\n      <p>Com a morte de Renly Baratheon, as alianças na guerra são alteradas. Joffrey Baratheon garante uma aliança com a Casa Tyrell e agora comanda os maiores exércitos do reino. Bran Stark e seus protetores devem cruzar o Norte para alcançar a Muralha, enquanto Arya enfrenta as Terras Fluviais em busca de sua mãe e irmão. Tyrion Lannister e Sansa Stark  enfrentam um perigoso tribunal para poder sobreviver. No continente oriental, os dragões de Daenerys Targaryen estão crescendo e sua fama, se espalhando. Mas, para conquistar o Trono de Ferro, ela ainda precisa de apoiadores. Enquanto a Patrulha da Noite é ameaçada pelos Caminhantes Brancos, Jon Snow se infiltra no exército selvagem de Mance Rayder  e descobre os planos do Rei-Além-do-Muro.</p>\n    </ion-card-content>\n\n    <ion-row>\n      <ion-col>\n        <button ion-button icon-start clear small>\n          <ion-icon name="thumbs-up"></ion-icon>\n          <div>456456 Likes</div>\n        </button>\n      </ion-col>\n      <ion-col>\n        <button ion-button icon-start clear small>\n          <ion-icon name="text"></ion-icon>\n          <div>4564646 Comments</div>\n        </button>\n      </ion-col>\n      <ion-col align-self-center text-center>\n        <ion-note>\n          5a ago\n        </ion-note>\n      </ion-col>\n    </ion-row>\n  </ion-card>\n\n  <ion-card>\n    <ion-item>\n      <ion-avatar item-start>\n        <img src="../../assets/imgs/got/got-logo.jpg">\n      </ion-avatar>\n      <h2>Game of Thrones</h2>\n      <p>2ª Temporada</p>\n    </ion-item>\n\n    <img src="../../assets/imgs/got/got-2.jpg">\n\n    <ion-card-content>\n      <p> Os Sete Reinos estão em guerra pelo Trono de Ferro, em posse de Joffrey Baratheon, que tem o apoio da poderosa Casa Lannister. Enquanto Robb Stark  luta para conquistar a independência de seu povo e dos habitantes das Terras Fluviais e Renly  reivindica o trono com o apoio da Casa Tyrell, Tyrion Lannister chega a King\'s Landing para enfrentar a irmã, Cersei, atual rainha regente. No norte distante, a Patrulha da Noite monta uma expedição além da Muralha para investigar se havia selvagens nas montanhas. Já ao leste, Daenerys Targaryen  e seu pequeno grupo de seguidores precisam encontrar um caminho através de uma terra proibida e recrutar novos aliados para apoiar sua reivindicação ao Trono de Ferro.</p>\n    </ion-card-content>\n\n    <ion-row>\n      <ion-col>\n        <button ion-button icon-start clear small>\n          <ion-icon name="thumbs-up"></ion-icon>\n          <div>4467844 Likes</div>\n        </button>\n      </ion-col>\n      <ion-col>\n        <button ion-button icon-start clear small>\n          <ion-icon name="text"></ion-icon>\n          <div>764546 Comments</div>\n        </button>\n      </ion-col>\n      <ion-col align-self-center text-center>\n        <ion-note>\n          6a ago\n        </ion-note>\n      </ion-col>\n    </ion-row>\n  </ion-card>\n\n  <ion-card>\n    <ion-item>\n      <ion-avatar item-start>\n        <img src="../../assets/imgs/got/got-logo.jpg">\n      </ion-avatar>\n      <h2>Game of Thrones</h2>\n      <p>1ª Temporada</p>\n    </ion-item>\n\n    <img src="../../assets/imgs/got/got-1.jpg">\n\n    <ion-card-content>\n      <p>\n        Quando o incorruptível Ned Stark é convocado pelo seu grande amigo, o rei Robert Baratheon, para servir como Mão do Rei após a morte de Jon Arryn, ele precisa deixar o castelo da família, em Winterfell, e partir para a capital dos Sete Reinos, Porto Real. Ele leva suas duas filhas consigo, Arya e Sansa, prometida em casamento ao príncipe Joffrey. Quando assume o posto, Eddard começa a investigar segredos que prometem preocupar a rainha, Cersei Lannister. Do outro lado do mar, a jovem Daenerys Targaryen é vendida em casamento a Khal Drogo  pelo seu próprio irmão, Viserys. Os dois são os últimos sobreviventes da família que governou Westeros por 300 anos, e o único desejo do mais velho é ter um exército para voltar para casa e retomar o Trono de Ferro.</p>\n    </ion-card-content>\n\n    <ion-row>\n      <ion-col>\n        <button ion-button icon-start clear small>\n          <ion-icon name="thumbs-up"></ion-icon>\n          <div>75676786 Likes</div>\n        </button>\n      </ion-col>\n      <ion-col>\n        <button ion-button icon-start clear small>\n          <ion-icon name="text"></ion-icon>\n          <div>7867645 Comments</div>\n        </button>\n      </ion-col>\n      <ion-col align-self-center text-center>\n        <ion-note>\n          7a ago\n        </ion-note>\n      </ion-col>\n    </ion-row>\n  </ion-card>\n</ion-content>\n'/*ion-inline-end:"/home/renan/Vídeos/aula1/src/pages/got/got.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavParams */]])
    ], GotPage);
    return GotPage;
}());

//# sourceMappingURL=got.js.map

/***/ }),

/***/ 152:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PllPageModule", function() { return PllPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__pll__ = __webpack_require__(153);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var PllPageModule = /** @class */ (function () {
    function PllPageModule() {
    }
    PllPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__pll__["a" /* PllPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__pll__["a" /* PllPage */]),
            ],
        })
    ], PllPageModule);
    return PllPageModule;
}());

//# sourceMappingURL=pll.module.js.map

/***/ }),

/***/ 153:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PllPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(18);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/**
 * Generated class for the PllPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var PllPage = /** @class */ (function () {
    function PllPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    PllPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad PllPage');
    };
    PllPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-pll',template:/*ion-inline-start:"/home/renan/Vídeos/aula1/src/pages/pll/pll.html"*/'<!--\n  Generated template for the PllPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>pll</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n  <ion-card>\n    <ion-item>\n      <ion-avatar item-start>\n        <img src="../../assets/imgs/pll/pll-logo.jpg">\n      </ion-avatar>\n      <h2>Pretty Little Liars</h2>\n      <p>7ª Temporada</p>\n    </ion-item>\n\n    <img src="../../assets/imgs/pll/pll-7.jpg">\n\n    <ion-card-content>\n      <p>Essa temporada cheia de voltas ao lar e reuniões é a mais fatal e mais romântica até agora. Os transtornos\n        românticos envolvem "Ezria", "Spaleb" e "Haleb", enquanto a lista de suspeitos para "Uber A" está crescendo.\n        Depois de terem cometido o maior erro de suas vidas, as mentirosas se juntam para descobrir respostas –\n        incluindo quem matou Jessica e Charlotte DiLaurentis – na jornada para a pergunta final: quem, por Deus, é\n        "A.D."? Mentiras passadas e segredos sujos vêm à tona nos últimos episódios da série de suspense esmagador que\n        transformou entretenimento, moda e fãs.</p>\n    </ion-card-content>\n\n    <ion-row>\n      <ion-col>\n        <button ion-button icon-start clear small>\n          <ion-icon name="thumbs-up"></ion-icon>\n          <div>85442 Likes</div>\n        </button>\n      </ion-col>\n      <ion-col>\n        <button ion-button icon-start clear small>\n          <ion-icon name="text"></ion-icon>\n          <div>285148 Comments</div>\n        </button>\n      </ion-col>\n      <ion-col align-self-center text-center>\n        <ion-note>\n          1a ago\n        </ion-note>\n      </ion-col>\n    </ion-row>\n  </ion-card>\n\n  <ion-card>\n    <ion-item>\n      <ion-avatar item-start>\n        <img src="../../assets/imgs/pll/pll-logo.jpg">\n      </ion-avatar>\n      <h2>Pretty Little Liars</h2>\n      <p>6ª Temporada</p>\n    </ion-item>\n\n    <img src="../../assets/imgs/pll/pll-6.jpg">\n\n    <ion-card-content>\n      <p>Cada um das meninas têm prosseguido com seus próprios caminhos e começaram a se ajustar a uma vida sem "A",\n        quando algo acontece em Rosewood que as obriga a voltar para onde tudo começou. Divididas entre seus velhos\n        hábitos e as suas novas vidas, os eventos em Rosewood obrigam as mentirosas à unir forças, mais uma vez, como as\n        relações são postas à prova e segredos são revelados. Tendo amadurecido ao longo dos últimos anos, estas não são\n        as mesmas meninas que saíram de Rosewood. À medida que novas mentiras surgem - como elas vão seguir em frente\n        sem voltar atrás? </p>\n    </ion-card-content>\n\n    <ion-row>\n      <ion-col>\n        <button ion-button icon-start clear small>\n          <ion-icon name="thumbs-up"></ion-icon>\n          <div>87550 Likes</div>\n        </button>\n      </ion-col>\n      <ion-col>\n        <button ion-button icon-start clear small>\n          <ion-icon name="text"></ion-icon>\n          <div>54786 Comments</div>\n        </button>\n      </ion-col>\n      <ion-col align-self-center text-center>\n        <ion-note>\n          2a ago\n        </ion-note>\n      </ion-col>\n    </ion-row>\n  </ion-card>\n\n  <ion-card>\n    <ion-item>\n      <ion-avatar item-start>\n        <img src="../../assets/imgs/pll/pll-logo.jpg">\n      </ion-avatar>\n      <h2>Pretty Little Liars</h2>\n      <p>5ª Temporada</p>\n    </ion-item>\n\n    <img src="../../assets/imgs/pll/pll-5.png">\n\n    <ion-card-content>\n      <p>Com mais perguntas do que nunca e outros rostos familiares de volta à Rosewood, há agora cinco mentirosas\n        tentando juntar as peças para saber quem vem atormentando-as. Ao meio de muito segredos uma confissão\n        surpreendente é revelada e divide as cinco amigas, e o jogo fica mais longe de terminar. Alison é realmente "A"?\n        Ou "A" está fingindo ser Alison? Na verdade, um novo jogo está começando... um onde sobreviver ao último ano\n        pode ser o mais desafio difícil das mentirosas até o momento! </p>\n    </ion-card-content>\n\n    <ion-row>\n      <ion-col>\n        <button ion-button icon-start clear small>\n          <ion-icon name="thumbs-up"></ion-icon>\n          <div>784651 Likes</div>\n        </button>\n      </ion-col>\n      <ion-col>\n        <button ion-button icon-start clear small>\n          <ion-icon name="text"></ion-icon>\n          <div>324684 Comments</div>\n        </button>\n      </ion-col>\n      <ion-col align-self-center text-center>\n        <ion-note>\n          3a ago\n        </ion-note>\n      </ion-col>\n    </ion-row>\n  </ion-card>\n\n  <ion-card>\n    <ion-item>\n      <ion-avatar item-start>\n        <img src="../../assets/imgs/pll/pll-logo.jpg">\n      </ion-avatar>\n      <h2>Pretty Little Liars</h2>\n      <p>4ª Temporada</p>\n    </ion-item>\n\n    <img src="../../assets/imgs/pll/pll-4.png">\n\n    <ion-card-content>\n      <p>Com "A" à espreita nas sombras e a verdade sobre Alison mais perto do que nunca, terminar o ensino médio nunca\n        foi tão perigoso, então as mentirosas ficam mais ousadas em seu trabalho de detetive - e nas histórias que elas\n        contam para encobrir seus segredos! O suspense continua a aumentar e relacionamentos são colocados em risco\n        enquanto as meninas tentam descobrir se sua amiga está, na verdade, viva ou morta - e se ela está viva, será que\n        Alison está apenas zombando delas ou buscando por ajuda? </p>\n    </ion-card-content>\n\n    <ion-row>\n      <ion-col>\n        <button ion-button icon-start clear small>\n          <ion-icon name="thumbs-up"></ion-icon>\n          <div>35468 Likes</div>\n        </button>\n      </ion-col>\n      <ion-col>\n        <button ion-button icon-start clear small>\n          <ion-icon name="text"></ion-icon>\n          <div>2168154 Comments</div>\n        </button>\n      </ion-col>\n      <ion-col align-self-center text-center>\n        <ion-note>\n          4a ago\n        </ion-note>\n      </ion-col>\n    </ion-row>\n  </ion-card>\n\n  <ion-card>\n    <ion-item>\n\n      <ion-avatar item-start>\n        <img src="../../assets/imgs/pll/pll-logo.jpg">\n      </ion-avatar>\n      <h2>Pretty Little Liars</h2>\n      <p>3ª Temporada</p>\n    </ion-item>\n\n    <img src="../../assets/imgs/pll/pll-3.png">\n\n    <ion-card-content>\n      <p>A primeira parte aborda a questão se Garrett realmente matou ou estava envolvido no assassinato de Maya ou da\n        amiga das meninas e "abelha rainha", Alison. E também se concentra em como Mona conseguiu seu papel como "A" e\n        porquê, desde então, alguém tomou seu lugar como líder da Equipe A. Já a segunda parte lida com outra revelação\n        de "A" e as consequências, enquanto a misteriosa Casaco Vermelho persegue as meninas </p>\n    </ion-card-content>\n\n    <ion-row>\n      <ion-col>\n        <button ion-button icon-start clear small>\n          <ion-icon name="thumbs-up"></ion-icon>\n          <div>79465 Likes</div>\n        </button>\n      </ion-col>\n      <ion-col>\n        <button ion-button icon-start clear small>\n          <ion-icon name="text"></ion-icon>\n          <div>375153 Comments</div>\n        </button>\n      </ion-col>\n      <ion-col align-self-center text-center>\n        <ion-note>\n          5a ago\n        </ion-note>\n      </ion-col>\n    </ion-row>\n  </ion-card>\n\n  <ion-card>\n    <ion-item>\n      <ion-avatar item-start>\n        <img src="../../assets/imgs/pll/pll-logo.jpg">\n      </ion-avatar>\n      <h2>Pretty Little Liars</h2>\n      <p>2ª Temporada</p>\n    </ion-item>\n\n    <img src="../../assets/imgs/pll/pll-2.png">\n\n    <ion-card-content>\n      <p> Com sua vida em casa num verdadeiro tumulto, Spencer permanece focada em sua família e surpreendente com o\n        apoio que ela recebe de seus pais. Emily, por outro lado, não consegue encontrar a solução que suas amigas estão\n        conseguindo, mas faz de tudo para encontrar qualquer vestígio de evidência que elas possam ter deixado passar.\n        Aria procura encontrar conforto em Ezra, mas com o seu relacionamento ainda novo para o mundo afora, o casal se\n        esforça para tornar esse relacionamento publico. Com todo mundo tendo conforto e compartilhando um enorme\n        suspiro de alívio, Emily pode estar certa e o diabo que elas pensaram que estava descansando não é nada perto do\n        mal que ainda paira por aí.. </p>\n    </ion-card-content>\n\n    <ion-row>\n      <ion-col>\n        <button ion-button icon-start clear small>\n          <ion-icon name="thumbs-up"></ion-icon>\n          <div>764684 Likes</div>\n        </button>\n      </ion-col>\n      <ion-col>\n        <button ion-button icon-start clear small>\n          <ion-icon name="text"></ion-icon>\n          <div>354645 Comments</div>\n        </button>\n      </ion-col>\n      <ion-col align-self-center text-center>\n        <ion-note>\n          6a ago\n        </ion-note>\n      </ion-col>\n    </ion-row>\n  </ion-card>\n\n  <ion-card>\n    <ion-item>\n      <ion-avatar item-start>\n        <img src="../../assets/imgs/pll/pll-logo.jpg">\n      </ion-avatar>\n      <h2>Pretty Little Liars</h2>\n      <p>1ª Temporada</p>\n    </ion-item>\n\n    <img src="../../assets/imgs/pll/pll-1.png">\n\n    <ion-card-content>\n      <p>Com o mistério em torno do desaparecimento de Alison, Aria muda-se e depois de um ano retorna a pacata cidade.\n        A partir desse dia, quando todas estão "juntas" novamente, as meninas começam a receber mensagens de "A" que as\n        faz pensar que Alison ainda estaria viva, contendo coisas que apenas Alison sabia, além de várias ofensas as\n        garotas. Mas não poderia ser Alison, poderia? Com o decorrer da série, são apresentados vários suspeitos. Quem\n        quer que seja, ele (a) parece saber todos os segredos das meninas e está observando cada um de seus movimentos.\n        As meninas são amigas novamente, e elas estarão uma com a outra quando os seus segredos vierem à tona. </p>\n    </ion-card-content>\n\n    <ion-row>\n      <ion-col>\n        <button ion-button icon-start clear small>\n          <ion-icon name="thumbs-up"></ion-icon>\n          <div>35464354 Likes</div>\n        </button>\n      </ion-col>\n      <ion-col>\n        <button ion-button icon-start clear small>\n          <ion-icon name="text"></ion-icon>\n          <div>6874635 Comments</div>\n        </button>\n      </ion-col>\n      <ion-col align-self-center text-center>\n        <ion-note>\n          7a ago\n        </ion-note>\n      </ion-col>\n    </ion-row>\n  </ion-card>\n\n</ion-content>'/*ion-inline-end:"/home/renan/Vídeos/aula1/src/pages/pll/pll.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavParams */]])
    ], PllPage);
    return PllPage;
}());

//# sourceMappingURL=pll.js.map

/***/ }),

/***/ 154:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SupernaturalPageModule", function() { return SupernaturalPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__supernatural__ = __webpack_require__(155);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var SupernaturalPageModule = /** @class */ (function () {
    function SupernaturalPageModule() {
    }
    SupernaturalPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__supernatural__["a" /* SupernaturalPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__supernatural__["a" /* SupernaturalPage */]),
            ],
        })
    ], SupernaturalPageModule);
    return SupernaturalPageModule;
}());

//# sourceMappingURL=supernatural.module.js.map

/***/ }),

/***/ 155:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SupernaturalPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(18);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/**
 * Generated class for the SupernaturalPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var SupernaturalPage = /** @class */ (function () {
    function SupernaturalPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    SupernaturalPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad SupernaturalPage');
    };
    SupernaturalPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-supernatural',template:/*ion-inline-start:"/home/renan/Vídeos/aula1/src/pages/supernatural/supernatural.html"*/'<!--\n  Generated template for the SupernaturalPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>supernatural</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n\n  <ion-card>\n    <ion-item>\n      <ion-avatar item-start>\n        <img src="../../assets/imgs/spn/spn.png">\n      </ion-avatar>\n      <h2>Supernatural</h2>\n      <p>14ª Temporada</p>\n    </ion-item>\n\n    <img src="../../assets/imgs/spn/spn-14.jpg">\n\n    <ion-card-content>\n      <p>Ainda tentando se acostumar a viver sem seus poderes, Jack (Alexander Calvert) visita os avós com a intenção de\n        estabelecer alguma conexão familiar. Em uma tentaiva de encontrar Dean (Jensen Ackles), Castiel (Misha Collins)\n        acaba conhecendo Kip (Dean Armstrong), um demônio que deseja fazer um acordo com Sam (Jared Padalecki) para se\n        tornar o novo Rei do Inferno.</p>\n    </ion-card-content>\n\n    <ion-row>\n      <ion-col>\n        <button ion-button icon-start clear small>\n          <ion-icon name="thumbs-up"></ion-icon>\n          <div>12 Likes</div>\n        </button>\n      </ion-col>\n      <ion-col>\n        <button ion-button icon-start clear small>\n          <ion-icon name="text"></ion-icon>\n          <div>4 Comments</div>\n        </button>\n      </ion-col>\n      <ion-col align-self-center text-center>\n        <ion-note>\n          11h ago\n        </ion-note>\n      </ion-col>\n    </ion-row>\n  </ion-card>\n\n  <ion-card>\n    <ion-item>\n      <ion-avatar item-start>\n        <img src="../../assets/imgs/spn/spn.png">\n      </ion-avatar>\n      <h2>Supernatural</h2>\n      <p>13ª Temporada</p>\n    </ion-item>\n\n    <img src="../../assets/imgs/spn/spn-13.jpg">\n\n    <ion-card-content>\n      <p>Dean (Jensen Ackles) e Sam (Jared Padalecki) sofrem com a perda de tantos aliados. Lúcifer (Mark Pellegrino)\n        mantém Mary (Samantha Smith) viva, como refém, para poder trocá-la por seu filho. Dean fica esperançoso quando\n        Jack (Alexander Calvert) involuntariamente traz Castiel (Misha Collins) de volta à vida.</p>\n    </ion-card-content>\n\n    <ion-row>\n      <ion-col>\n        <button ion-button icon-start clear small>\n          <ion-icon name="thumbs-up"></ion-icon>\n          <div>120 Likes</div>\n        </button>\n      </ion-col>\n      <ion-col>\n        <button ion-button icon-start clear small>\n          <ion-icon name="text"></ion-icon>\n          <div>40 Comments</div>\n        </button>\n      </ion-col>\n      <ion-col align-self-center text-center>\n        <ion-note>\n          12h ago\n        </ion-note>\n      </ion-col>\n    </ion-row>\n  </ion-card>\n\n  <ion-card>\n    <ion-item>\n      <ion-avatar item-start>\n        <img src="../../assets/imgs/spn/spn.png">\n      </ion-avatar>\n      <h2>Supernatural</h2>\n      <p>12ª Temporada</p>\n    </ion-item>\n\n    <img src="../../assets/imgs/spn/spn-12.jpg">\n\n    <ion-card-content>\n      <p>Dean (Jensen Ackles) reencontra uma velha amiga após 30 anos sem se verem. Sam (Jared Padalecki) é capturado\n        por Lady Bevell (Elizabeth Blackmore) e torturado como punição por seus pecados passados. Dean, Mary (Samantha\n        Smith) e Castiel (Misha Collins), então, bolam um plano para resgatar o irmão Winchester sequestrado.</p>\n    </ion-card-content>\n\n    <ion-row>\n      <ion-col>\n        <button ion-button icon-start clear small>\n          <ion-icon name="thumbs-up"></ion-icon>\n          <div>200 Likes</div>\n        </button>\n      </ion-col>\n      <ion-col>\n        <button ion-button icon-start clear small>\n          <ion-icon name="text"></ion-icon>\n          <div>400 Comments</div>\n        </button>\n      </ion-col>\n      <ion-col align-self-center text-center>\n        <ion-note>\n          15h ago\n        </ion-note>\n      </ion-col>\n    </ion-row>\n  </ion-card>\n\n  <ion-card>\n    <ion-item>\n      <ion-avatar item-start>\n        <img src="../../assets/imgs/spn/spn.png">\n      </ion-avatar>\n      <h2>Supernatural</h2>\n      <p>11ª Temporada</p>\n    </ion-item>\n\n    <img src="../../assets/imgs/spn/spn-11.jpg">\n\n    <ion-card-content>\n      <p>Enquanto Crowley (Mark Sheppard) cuida de Amara (Emily Swallow), alimentando-a com almas, Sam (Jared\n        Padalecki), Dean (Jensen Ackles) e Castiel (Misha Collins) tentam encontrar uma maneira de matar a Escuridão,\n        aprisionada no corpo da moça.</p>\n    </ion-card-content>\n\n    <ion-row>\n      <ion-col>\n        <button ion-button icon-start clear small>\n          <ion-icon name="thumbs-up"></ion-icon>\n          <div>500 Likes</div>\n        </button>\n      </ion-col>\n      <ion-col>\n        <button ion-button icon-start clear small>\n          <ion-icon name="text"></ion-icon>\n          <div>685 Comments</div>\n        </button>\n      </ion-col>\n      <ion-col align-self-center text-center>\n        <ion-note>\n          18h ago\n        </ion-note>\n      </ion-col>\n    </ion-row>\n  </ion-card>\n\n  <ion-card>\n    <ion-item>\n\n      <ion-avatar item-start>\n        <img src="../../assets/imgs/spn/spn.png">\n      </ion-avatar>\n      <h2>Supernatural</h2>\n      <p>10ª Temporada</p>\n    </ion-item>\n\n    <img src="../../assets/imgs/spn/spn-10.jpg">\n\n    <ion-card-content>\n      <p>Sam (Jared Padalecki) procura por Dean (Jensen Ackles), que, após ser ressuscitado pela marca de Caim, agora é\n        um demônio trabalhando para Crowley (Mark Sheppard). Enquanto isso, Rowena (Ruth Connell), uma misteriosa bruxa,\n        entra em cena.</p>\n    </ion-card-content>\n\n    <ion-row>\n      <ion-col>\n        <button ion-button icon-start clear small>\n          <ion-icon name="thumbs-up"></ion-icon>\n          <div>967 Likes</div>\n        </button>\n      </ion-col>\n      <ion-col>\n        <button ion-button icon-start clear small>\n          <ion-icon name="text"></ion-icon>\n          <div>1200 Comments</div>\n        </button>\n      </ion-col>\n      <ion-col align-self-center text-center>\n        <ion-note>\n          22h ago\n        </ion-note>\n      </ion-col>\n    </ion-row>\n  </ion-card>\n\n  <ion-card>\n    <ion-item>\n      <ion-avatar item-start>\n        <img src="../../assets/imgs/spn/spn.png">\n      </ion-avatar>\n      <h2>Supernatural</h2>\n      <p>9ª Temporada</p>\n    </ion-item>\n\n    <img src="../../assets/imgs/spn/spn-9.jpg">\n\n    <ion-card-content>\n      <p>Depois que anjos caíram na Terra, duas facções angelicais passam a brigar uma com a outra, enquanto outras\n        vagam pelo mundo causando problemas ou caçando Castiel (Misha Collins). Sam (Jared Padalecki) e Dean (Jensen\n        Ackles) mantêm Crowley (Mark Sheppard) como prisioneiro e tentam transformá-lo de volta em ser humano.</p>\n    </ion-card-content>\n\n    <ion-row>\n      <ion-col>\n        <button ion-button icon-start clear small>\n          <ion-icon name="thumbs-up"></ion-icon>\n          <div>1500 Likes</div>\n        </button>\n      </ion-col>\n      <ion-col>\n        <button ion-button icon-start clear small>\n          <ion-icon name="text"></ion-icon>\n          <div>2000 Comments</div>\n        </button>\n      </ion-col>\n      <ion-col align-self-center text-center>\n        <ion-note>\n          24h ago\n        </ion-note>\n      </ion-col>\n    </ion-row>\n  </ion-card>\n\n  <ion-card>\n    <ion-item>\n      <ion-avatar item-start>\n        <img src="../../assets/imgs/spn/spn.png">\n      </ion-avatar>\n      <h2>Supernatural</h2>\n      <p>8ª Temporada</p>\n    </ion-item>\n\n    <img src="../../assets/imgs/spn/spn-8.jpg">\n\n    <ion-card-content>\n      <p>Dean (Jensen Ackles) retorna à Terra sem Castiel (Misha Collins), um ano depois de ser arrastado para o\n        Purgatório. Os irmãos Winchester começam uma luta contra Crowley (Mark Sheppard), com o objetivo de trancar as\n        Portas do Inferno e prender todos os demônios de uma vez por todas.</p>\n    </ion-card-content>\n\n    <ion-row>\n      <ion-col>\n        <button ion-button icon-start clear small>\n          <ion-icon name="thumbs-up"></ion-icon>\n          <div>785 Likes</div>\n        </button>\n      </ion-col>\n      <ion-col>\n        <button ion-button icon-start clear small>\n          <ion-icon name="text"></ion-icon>\n          <div>3500 Comments</div>\n        </button>\n      </ion-col>\n      <ion-col align-self-center text-center>\n        <ion-note>\n          1d ago\n        </ion-note>\n      </ion-col>\n    </ion-row>\n  </ion-card>\n\n  <ion-card>\n    <ion-item>\n      <ion-avatar item-start>\n        <img src="../../assets/imgs/spn/spn.png">\n      </ion-avatar>\n      <h2>Supernatural</h2>\n      <p>7ª Temporada</p>\n    </ion-item>\n\n    <img src="../../assets/imgs/spn/spn-7.jpg">\n\n    <ion-card-content>\n      <p>Após absorver as almas do Purgatório, Castiel (Misha Collins) passa a punir todos os malfeitores do mundo. Sam\n        (Jared Padalecki) e Dean (Jensen Ackles) descobrem uma de suas maiores fraquezas e iniciam uma missão de caça\n        aos Leviatãs. Enquanto isso, o fantasma de um velho conhecido continua os assombrando.</p>\n    </ion-card-content>\n\n    <ion-row>\n      <ion-col>\n        <button ion-button icon-start clear small>\n          <ion-icon name="thumbs-up"></ion-icon>\n          <div>4350 Likes</div>\n        </button>\n      </ion-col>\n      <ion-col>\n        <button ion-button icon-start clear small>\n          <ion-icon name="text"></ion-icon>\n          <div>3687 Comments</div>\n        </button>\n      </ion-col>\n      <ion-col align-self-center text-center>\n        <ion-note>\n          1d ago\n        </ion-note>\n      </ion-col>\n    </ion-row>\n  </ion-card>\n\n  <ion-card>\n    <ion-item>\n      <ion-avatar item-start>\n        <img src="../../assets/imgs/spn/spn.png">\n      </ion-avatar>\n      <h2>Supernatural</h2>\n      <p>6ª Temporada</p>\n    </ion-item>\n\n    <img src="../../assets/imgs/spn/spn-6.jpg">\n\n    <ion-card-content>\n      <p>Um ano depois, Dean (Jensen Ackles) vive feliz na companhia de Lisa (Cindy Sampson) e Ben (Nicholas Elia). Mas\n        quando reencontra Sam (Jared Padalecki), ele é obrigado a abandonar a nova vida e trabalhar com seu avô Samuel\n        (Mitch Pileggi), que se dedica à captura de monstros.</p>\n    </ion-card-content>\n\n    <ion-row>\n      <ion-col>\n        <button ion-button icon-start clear small>\n          <ion-icon name="thumbs-up"></ion-icon>\n          <div>5684 Likes</div>\n        </button>\n      </ion-col>\n      <ion-col>\n        <button ion-button icon-start clear small>\n          <ion-icon name="text"></ion-icon>\n          <div>11502 Comments</div>\n        </button>\n      </ion-col>\n      <ion-col align-self-center text-center>\n        <ion-note>\n          2d ago\n        </ion-note>\n      </ion-col>\n    </ion-row>\n  </ion-card>\n\n  <ion-card>\n    <ion-item>\n      <ion-avatar item-start>\n        <img src="../../assets/imgs/spn/spn.png">\n      </ion-avatar>\n      <h2>Supernatural</h2>\n      <p>5ª Temporada</p>\n    </ion-item>\n\n    <img src="../../assets/imgs/spn/spn-5.jpg">\n\n    <ion-card-content>\n      <p>Enquanto Castiel (Misha Collins) procura por Deus para impedir o Apocalipse de Lúcifer, Sam (Jared Padalecki) e\n        Dean (Jensen Ackles) lutam contra anjos, demônios e seu destino, que é servirem de "hospedeiros" para o Diabo e\n        o Arcanjo Miguel, respectivamente.</p>\n    </ion-card-content>\n\n    <ion-row>\n      <ion-col>\n        <button ion-button icon-start clear small>\n          <ion-icon name="thumbs-up"></ion-icon>\n          <div>15204 Likes</div>\n        </button>\n      </ion-col>\n      <ion-col>\n        <button ion-button icon-start clear small>\n          <ion-icon name="text"></ion-icon>\n          <div>20154 Comments</div>\n        </button>\n      </ion-col>\n      <ion-col align-self-center text-center>\n        <ion-note>\n          3d ago\n        </ion-note>\n      </ion-col>\n    </ion-row>\n  </ion-card>\n\n  <ion-card>\n    <ion-item>\n      <ion-avatar item-start>\n        <img src="../../assets/imgs/spn/spn.png">\n      </ion-avatar>\n      <h2>Supernatural</h2>\n      <p>4ª Temporada</p>\n    </ion-item>\n\n    <img src="../../assets/imgs/spn/spn-4.jpg">\n\n    <ion-card-content>\n      <p>Dean (Jensen Ackles) é resgatado do inferno por um anjo chamado Castiel (Misha Collins), com quem os Winchester\n        constroem uma parceria para impedir que Lilith rompa os 66 selos e, assim, permitindo que Lúcifer ande sobre a\n        terra livremente.</p>\n    </ion-card-content>\n\n    <ion-row>\n      <ion-col>\n        <button ion-button icon-start clear small>\n          <ion-icon name="thumbs-up"></ion-icon>\n          <div>18289 Likes</div>\n        </button>\n      </ion-col>\n      <ion-col>\n        <button ion-button icon-start clear small>\n          <ion-icon name="text"></ion-icon>\n          <div>22154 Comments</div>\n        </button>\n      </ion-col>\n      <ion-col align-self-center text-center>\n        <ion-note>\n          4d ago\n        </ion-note>\n      </ion-col>\n    </ion-row>\n  </ion-card>\n\n  <ion-card>\n    <ion-item>\n      <ion-avatar item-start>\n        <img src="../../assets/imgs/spn/spn.png">\n      </ion-avatar>\n      <h2>Supernatural</h2>\n      <p>3ª Temporada</p>\n    </ion-item>\n\n    <img src="../../assets/imgs/spn/spn-3.jpg">\n\n    <ion-card-content>\n      <p>Na esperança de desfazerem o acordo de Dean (Jensen Ackles) sobre ser obrigado a ir para o inferno, os irmãos\n        Winchester pedem ajuda à Ruby (Genevieve Padalecki), um demônio do bem, e à Bela Talbot (Lauren Cohan), uma\n        vendedora de objetos ocultos.</p>\n    </ion-card-content>\n\n    <ion-row>\n      <ion-col>\n        <button ion-button icon-start clear small>\n          <ion-icon name="thumbs-up"></ion-icon>\n          <div>20204 Likes</div>\n        </button>\n      </ion-col>\n      <ion-col>\n        <button ion-button icon-start clear small>\n          <ion-icon name="text"></ion-icon>\n          <div>25574 Comments</div>\n        </button>\n      </ion-col>\n      <ion-col align-self-center text-center>\n        <ion-note>\n          5d ago\n        </ion-note>\n      </ion-col>\n    </ion-row>\n  </ion-card>\n\n  <ion-card>\n    <ion-item>\n      <ion-avatar item-start>\n        <img src="../../assets/imgs/spn/spn.png">\n      </ion-avatar>\n      <h2>Supernatural</h2>\n      <p>2ª Temporada</p>\n    </ion-item>\n\n    <img src="../../assets/imgs/spn/spn-2.jpg">\n\n    <ion-card-content>\n      <p>Sam (Jared Padalecki) e Dean (Jensen Ackles) precisam lidar com uma perda recente. Enquanto isso, eles decidem\n        se vingar de Azazel (Fredric Lehne), e de toda as tragédias causadas por ele, e recebem a ajuda de Bobby (Jim\n        Beaver), Ellen (Samantha Ferris), Jo (Alona Tal) e Ash (Chad Lindberg).</p>\n    </ion-card-content>\n\n    <ion-row>\n      <ion-col>\n        <button ion-button icon-start clear small>\n          <ion-icon name="thumbs-up"></ion-icon>\n          <div>30365 Likes</div>\n        </button>\n      </ion-col>\n      <ion-col>\n        <button ion-button icon-start clear small>\n          <ion-icon name="text"></ion-icon>\n          <div>45541 Comments</div>\n        </button>\n      </ion-col>\n      <ion-col align-self-center text-center>\n        <ion-note>\n          6d ago\n        </ion-note>\n      </ion-col>\n    </ion-row>\n  </ion-card>\n\n  <ion-card>\n    <ion-item>\n      <ion-avatar item-start>\n        <img src="../../assets/imgs/spn/spn.png">\n      </ion-avatar>\n      <h2>Supernatural</h2>\n      <p>1ª Temporada</p>\n    </ion-item>\n\n    <img src="../../assets/imgs/spn/spn-1.jpg">\n\n    <ion-card-content>\n      <p>Após perderem a mãe em um incêndio suspeito há mais de vinte anos atrás, os irmãos Sam (Jared Padalecki) e Dean\n        (Jensen Ackles) Winchester descobrem que seu pai desapareceu durante uma "viagem de caça". Mas John Winchester\n        (Jeffrey Dean Morgan) não é um caçador comum: ele é especializado em capturar criaturas sobrenaturais e treinou\n        seus filhos para que fizessem o mesmo quando crescessem. Enquanto procuram pistas sobre o paradeiro de seu pai,\n        Sam e Dean salvam pessoas inocentes e enfrentam fantasmas, demônios e vampiros.</p>\n    </ion-card-content>\n\n    <ion-row>\n      <ion-col>\n        <button ion-button icon-start clear small>\n          <ion-icon name="thumbs-up"></ion-icon>\n          <div>60154 Likes</div>\n        </button>\n      </ion-col>\n      <ion-col>\n        <button ion-button icon-start clear small>\n          <ion-icon name="text"></ion-icon>\n          <div>82014 Comments</div>\n        </button>\n      </ion-col>\n      <ion-col align-self-center text-center>\n        <ion-note>\n          7d ago\n        </ion-note>\n      </ion-col>\n    </ion-row>\n  </ion-card>\n  \n</ion-content>'/*ion-inline-end:"/home/renan/Vídeos/aula1/src/pages/supernatural/supernatural.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavParams */]])
    ], SupernaturalPage);
    return SupernaturalPage;
}());

//# sourceMappingURL=supernatural.js.map

/***/ }),

/***/ 199:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__supernatural_supernatural__ = __webpack_require__(155);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__pll_pll__ = __webpack_require__(153);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__got_got__ = __webpack_require__(151);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var HomePage = /** @class */ (function () {
    function HomePage(navCtrl) {
        this.navCtrl = navCtrl;
    }
    HomePage.prototype.supernaturalClick = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__supernatural_supernatural__["a" /* SupernaturalPage */]);
    };
    HomePage.prototype.pllClick = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__pll_pll__["a" /* PllPage */]);
    };
    HomePage.prototype.gotClick = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_4__got_got__["a" /* GotPage */]);
    };
    HomePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-home',template:/*ion-inline-start:"/home/renan/Vídeos/aula1/src/pages/home/home.html"*/'<ion-header>\n  <ion-navbar>\n    <ion-title>\n      Home\n    </ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding>\n  <ion-card>\n    <ion-item>\n      <ion-avatar item-start>\n        <img src="../../assets/imgs/spn/spn.png">\n      </ion-avatar>\n      <h2>Supernatural</h2>\n    </ion-item>\n\n    <img src="../../assets/imgs/spn/supernatural.jpg">\n\n    <ion-card-content>\n      <p>Os irmãos Sam e Dean Winchester encaram cenários sinistros caçando monstros. Velhos truques, armas e\n        esconderijos não funcionam mais e seus amigos os traem, forçando os irmãos a contar um com o outro enquanto\n        enfrentam novos inimigos.</p>\n    </ion-card-content>\n\n    <ion-row>\n      <ion-col>\n        <button ion-button icon-start (click)="supernaturalClick()" clear small>\n          <div>Ver todas as temporadas</div>\n        </button>\n      </ion-col>\n    </ion-row>\n\n  </ion-card>\n\n\n  <ion-card>\n\n    <ion-item>\n      <ion-avatar item-start>\n        <img src="../../assets/imgs/pll/pll-logo.jpg">\n      </ion-avatar>\n      <h2>Pretty Little Liars</h2>\n    </ion-item>\n\n    <img src="../../assets/imgs/pll/pll.jpg">\n\n    <ion-card-content>\n      <p>Já se passaram três anos desde o desaparecimento de Alison. Spencer, Aria, Hanna e Emily, agora no ensino\n        médio, têm um novo desafio: desvendar mensagens anônimas ameaçando contar seus segredos.</p>\n    </ion-card-content>\n\n    <ion-row>\n      <ion-col>\n        <button ion-button color="primary" (click)="pllClick()" clear small icon-start>\n          <div>Ver todas as temporadas</div>\n        </button>\n      </ion-col>\n    </ion-row>\n\n  </ion-card>\n\n\n  <ion-card>\n\n    <ion-item>\n      <ion-avatar item-start>\n        <img src="../../assets/imgs/got/got-logo.jpg">\n      </ion-avatar>\n      <h2>Game of Thrones</h2>\n    </ion-item>\n\n    <img src="../../assets/imgs/got/got.jpg">\n\n    <ion-card-content>\n      <p>Sucesso entre os livros mais vendidos, a série de obras "A Song of Ice and Fire", de George R.R. Martin, é levada à tela quando HBO decide navegar a fundo pelo gênero e recriar a fantasia medieval épica. Este é o retrato de duas famílias poderosas - reis e rainhas, cavaleiros e renegados, homens honestos e mentirosos - disputando um jogo mortal pelo controle dos Sete Reinos de Westeros para assumir o Trono de Ferro. A série foi filmada em Malta e no norte da Irlanda, tendo participação do escritor dos livros.</p>\n    </ion-card-content>\n\n    <ion-row>\n      <ion-col>\n        <button ion-button color="primary" (click)="gotClick()" clear small icon-start>\n          <div>Ver todas as temporadas</div>\n        </button>\n      </ion-col>\n    </ion-row>\n\n  </ion-card>\n\n</ion-content>'/*ion-inline-end:"/home/renan/Vídeos/aula1/src/pages/home/home.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */]])
    ], HomePage);
    return HomePage;
}());

//# sourceMappingURL=home.js.map

/***/ }),

/***/ 200:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(201);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(223);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 223:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(31);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(195);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_status_bar__ = __webpack_require__(198);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__app_component__ = __webpack_require__(273);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_home_home__ = __webpack_require__(199);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_supernatural_supernatural_module__ = __webpack_require__(154);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__pages_pll_pll_module__ = __webpack_require__(152);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__pages_got_got_module__ = __webpack_require__(150);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};










var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_6__pages_home_home__["a" /* HomePage */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["c" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* MyApp */], {}, {
                    links: [
                        { loadChildren: '../pages/got/got.module#GotPageModule', name: 'GotPage', segment: 'got', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/pll/pll.module#PllPageModule', name: 'PllPage', segment: 'pll', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/supernatural/supernatural.module#SupernaturalPageModule', name: 'SupernaturalPage', segment: 'supernatural', priority: 'low', defaultHistory: [] }
                    ]
                }),
                __WEBPACK_IMPORTED_MODULE_7__pages_supernatural_supernatural_module__["SupernaturalPageModule"],
                __WEBPACK_IMPORTED_MODULE_8__pages_pll_pll_module__["PllPageModule"],
                __WEBPACK_IMPORTED_MODULE_9__pages_got_got_module__["GotPageModule"]
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["a" /* IonicApp */]],
            entryComponents: [
                __WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_6__pages_home_home__["a" /* HomePage */]
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_4__ionic_native_status_bar__["a" /* StatusBar */],
                __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */],
                { provide: __WEBPACK_IMPORTED_MODULE_1__angular_core__["u" /* ErrorHandler */], useClass: __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["b" /* IonicErrorHandler */] }
            ]
        })
    ], AppModule);
    return AppModule;
}());

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 273:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(198);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(195);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_home_home__ = __webpack_require__(199);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var MyApp = /** @class */ (function () {
    function MyApp(platform, statusBar, splashScreen) {
        this.rootPage = __WEBPACK_IMPORTED_MODULE_4__pages_home_home__["a" /* HomePage */];
        platform.ready().then(function () {
            // Okay, so the platform is ready and our plugins are available.
            // Here you can do any higher level native things you might need.
            statusBar.styleDefault();
            splashScreen.hide();
        });
    }
    MyApp = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({template:/*ion-inline-start:"/home/renan/Vídeos/aula1/src/app/app.html"*/'<ion-nav [root]="rootPage"></ion-nav>\n'/*ion-inline-end:"/home/renan/Vídeos/aula1/src/app/app.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* Platform */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */]])
    ], MyApp);
    return MyApp;
}());

//# sourceMappingURL=app.component.js.map

/***/ })

},[200]);
//# sourceMappingURL=main.js.map