(function(e, a) { for(var i in a) e[i] = a[i]; }(exports, /******/ (function(modules) { // webpackBootstrap
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
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
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
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./server/src/app.ts":
/*!***************************!*\
  !*** ./server/src/app.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const express = __webpack_require__(/*! express */ "express");
const security_1 = __webpack_require__(/*! ./config/security */ "./server/src/config/security.ts");
const models_1 = __webpack_require__(/*! ./models */ "./server/src/models/index.ts");
const routes_1 = __webpack_require__(/*! ./routes */ "./server/src/routes/index.ts");
const logger = __webpack_require__(/*! morgan */ "morgan");
const bodyParser = __webpack_require__(/*! body-parser */ "body-parser");
const path = __webpack_require__(/*! path */ "path");
const dotenv = __webpack_require__(/*! dotenv */ "dotenv");
const result = dotenv.config();
const __dirname = process.env.PWD;
const app = express();
app.all('*', (req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Methods', 'PUT, GET, POST, DELETE, OPTIONS');
    res.header('Access-Control-Allow-Credentials', 'true');
    res.header('Access-Control-Allow-Origin', `${req.headers.origin}`);
    res.header('Access-Control-Allow-Headers', 'accept, content-type, x-parse-application-id, x-parse-rest-api-key, x-parse-session-token, AUTHORIZATION');
    if ('OPTIONS' == req.method) {
        res.send(200);
    }
    else {
        next();
    }
});
security_1.default(app);
models_1.default();
app.use(logger('dev'));
app.use(bodyParser.json({ limit: '15mb', extended: true }));
app.use(bodyParser.urlencoded({ limit: '15mb', extended: true }));
var queryParser = __webpack_require__(/*! express-query-int */ "express-query-int");
app.use(bodyParser.json());
app.use(queryParser());
app.use('/scripts', express.static(path.join(__dirname, '../../client/dist')));
routes_1.default(app);
app.get('*', (req, res) => res.status(200).send({
    message: 'For some reason, none of the routes hit...',
}));
exports.default = app;


/***/ }),

/***/ "./server/src/config/config.json":
/*!***************************************!*\
  !*** ./server/src/config/config.json ***!
  \***************************************/
/*! exports provided: development, production, default */
/***/ (function(module) {

module.exports = JSON.parse("{\"development\":{\"username\":\"postgres\",\"password\":\"Whdydals92!\",\"database\":\"discover-artist-betting\",\"host\":\"127.0.0.1\",\"port\":5433,\"dialect\":\"postgres\"},\"production\":{\"use_env_variable\":\"DATABASE_URL\"}}");

/***/ }),

/***/ "./server/src/config/security.ts":
/*!***************************************!*\
  !*** ./server/src/config/security.ts ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const authorization = __webpack_require__(/*! auth-header */ "auth-header");
const buffer_1 = __webpack_require__(/*! buffer */ "buffer");
const logger = __webpack_require__(/*! heroku-logger */ "heroku-logger");
const validIPs = [
    '::ffff:127.0.0.1',
    '127.0.0.1',
    '::1',
];
const validReferers = ['(https?://)?localhost:3000.*'];
const validURLs = new RegExp(validReferers.join('|'), 'i');
const validPages = ['/', '/favicon.ico', '/scripts/index.js'];
const blacklist = /\/api.*/;
const unauthorizedResponse = (res) => {
    res.status(401).send('Request failed: Bad authentication');
};
const security = (app) => {
    app.use((req, res, next) => {
        const inWhitelist = validPages.indexOf(req.originalUrl) > -1;
        if (!inWhitelist || blacklist.test(req.originalUrl)) {
            const ip = (req.headers['x-forwarded-for'] ||
                req.connection.remoteAddress ||
                req.ip);
            const referer = req.header('Referer');
            console.log('IP: ', ip);
            if (validIPs.indexOf(ip) > -1) {
                console.log(ip, 'is a whitelisted IP');
                logger.info('Whitelisted IP', { ip: ip });
                next();
            }
            else if (referer && validURLs.test(referer)) {
                logger.info('Whitelisted Referer', { referer: referer });
                next();
            }
            else {
                const authHeader = req.header['authorization']
                    ? req.header['authorization']
                    : req.headers['authorization'];
                if (!authHeader) {
                    res.set('WWW-Authenticate', 'Basic realm="Authorization Required"');
                    logger.error('No Authentication', {
                        ip: ip,
                        referer: referer,
                        url: req.originalUrl,
                    });
                    return unauthorizedResponse(res);
                }
                const auth = authorization.parse(authHeader);
                const [un, pw] = new buffer_1.Buffer(auth.token, 'base64').toString().split(':', 2);
                if (un !== 'admin' || pw !== process.env.ADMIN_API_KEY) {
                    logger.error('Unauthorized Credentials', { username: un, password: pw });
                    return unauthorizedResponse(res);
                }
                logger.info('User Authenticated', { username: un, password: pw });
                next();
            }
        }
        else {
            logger.info('Whitelist or not in blacklist', { url: req.originalUrl });
            next();
        }
    });
};
exports.default = security;


/***/ }),

/***/ "./server/src/controllers/artist/index.ts":
/*!************************************************!*\
  !*** ./server/src/controllers/artist/index.ts ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const artist_1 = __webpack_require__(/*! ../../models/artist */ "./server/src/models/artist.ts");
const price_1 = __webpack_require__(/*! ../../models/price */ "./server/src/models/price.ts");
const track_1 = __webpack_require__(/*! ../../models/track */ "./server/src/models/track.ts");
const price_2 = __webpack_require__(/*! ../price */ "./server/src/controllers/price/index.ts");
exports.getBrowseArtists = (req, res) => {
    return artist_1.default.findAll()
        .then((artists) => {
        return res.status(200).send({
            success: true,
            artists,
        });
    })
        .catch((error) => res.status(400).send(error));
};
exports.getArtists = (req, res) => {
    return artist_1.default.findAll({ include: [price_1.default, track_1.default] })
        .then((artists) => {
        const data = artists.map((artist) => (Object.assign(Object.assign({}, artist.dataValues), { prices: artist.prices.map((price) => price_2.stripPrice(price)) })));
        return res.status(200).send({
            success: true,
            artists: data,
        });
    })
        .catch((error) => res.status(400).send(error));
};
exports.getArtistById = (req, res) => {
    const { id } = req.params;
    return artist_1.default.findById(id, { include: [price_1.default, track_1.default] })
        .then((artist) => {
        const data = Object.assign(Object.assign({}, artist.dataValues), { prices: artist.prices.map((price) => price_2.stripPrice(price)) });
        return res.status(200).send({
            success: true,
            artist: data,
        });
    })
        .catch((error) => res.status(400).send({
        success: false,
        error,
    }));
};


/***/ }),

/***/ "./server/src/controllers/price/index.ts":
/*!***********************************************!*\
  !*** ./server/src/controllers/price/index.ts ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.stripPrice = (price) => ({
    date: price.date,
    price: price.price,
});


/***/ }),

/***/ "./server/src/controllers/transactions/index.ts":
/*!******************************************************!*\
  !*** ./server/src/controllers/transactions/index.ts ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const artist_1 = __webpack_require__(/*! ../../models/artist */ "./server/src/models/artist.ts");
const transaction_1 = __webpack_require__(/*! ../../models/transaction */ "./server/src/models/transaction.ts");
const user_1 = __webpack_require__(/*! ../../models/user */ "./server/src/models/user.ts");
exports.getTransactions = (req, res) => {
    return transaction_1.default.findAll({
        include: [user_1.default, artist_1.default],
        limit: 10,
        order: [['date', 'DESC']],
    })
        .then((transactions) => res.status(200).send({ success: true, transactions }))
        .catch((error) => res.status(400).send({ success: false, error }));
};


/***/ }),

/***/ "./server/src/controllers/user/index.ts":
/*!**********************************************!*\
  !*** ./server/src/controllers/user/index.ts ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const artist_1 = __webpack_require__(/*! ../../models/artist */ "./server/src/models/artist.ts");
const price_1 = __webpack_require__(/*! ../../models/price */ "./server/src/models/price.ts");
const transaction_1 = __webpack_require__(/*! ../../models/transaction */ "./server/src/models/transaction.ts");
const user_1 = __webpack_require__(/*! ../../models/user */ "./server/src/models/user.ts");
const getScore = (user) => {
    let score = 0;
    user.transactions.forEach((transaction) => {
        score += transaction.artist.monthlyListens - transaction.price.price;
    });
    return score;
};
exports.getUser = (req, res) => {
    const { id } = req.params;
    return user_1.default.findById(id, {
        include: [
            {
                model: transaction_1.default,
                include: [price_1.default, artist_1.default],
            },
        ],
    })
        .then((user) => res.status(200).send({
        success: true,
        score: getScore(user),
        user: user,
    }))
        .catch((error) => res.status(400).send({ success: false, error }));
};
exports.getFriends = (req, res) => {
    return user_1.default.findAll({
        include: [
            {
                model: transaction_1.default,
                include: [price_1.default, artist_1.default],
            },
        ],
    })
        .then((users) => res.status(200).send({
        success: true,
        users: users
            .map((user) => ({
            user,
            score: getScore(user),
        })),
    }))
        .catch((error) => res.status(400).send({ success: false, error }));
};


/***/ }),

/***/ "./server/src/index.ts":
/*!*****************************!*\
  !*** ./server/src/index.ts ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const app_1 = __webpack_require__(/*! ./app */ "./server/src/app.ts");
const port = parseInt(process.env.PORT, 10) || 5000;
app_1.default.set('port', port);
app_1.default.listen(port);


/***/ }),

/***/ "./server/src/models/artist.ts":
/*!*************************************!*\
  !*** ./server/src/models/artist.ts ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_typescript_1 = __webpack_require__(/*! sequelize-typescript */ "sequelize-typescript");
const price_1 = __webpack_require__(/*! ./price */ "./server/src/models/price.ts");
const track_1 = __webpack_require__(/*! ./track */ "./server/src/models/track.ts");
const transaction_1 = __webpack_require__(/*! ./transaction */ "./server/src/models/transaction.ts");
let Artist = class Artist extends sequelize_typescript_1.Model {
};
__decorate([
    sequelize_typescript_1.Column,
    __metadata("design:type", String)
], Artist.prototype, "name", void 0);
__decorate([
    sequelize_typescript_1.Column,
    __metadata("design:type", String)
], Artist.prototype, "spotifyUrl", void 0);
__decorate([
    sequelize_typescript_1.Column,
    __metadata("design:type", Number)
], Artist.prototype, "monthlyListens", void 0);
__decorate([
    sequelize_typescript_1.Column,
    __metadata("design:type", Number)
], Artist.prototype, "followers", void 0);
__decorate([
    sequelize_typescript_1.Column,
    __metadata("design:type", String)
], Artist.prototype, "bio", void 0);
__decorate([
    sequelize_typescript_1.Column,
    __metadata("design:type", Number)
], Artist.prototype, "foundedYear", void 0);
__decorate([
    sequelize_typescript_1.Column,
    __metadata("design:type", String)
], Artist.prototype, "image", void 0);
__decorate([
    sequelize_typescript_1.Column,
    __metadata("design:type", String)
], Artist.prototype, "spotifyId", void 0);
__decorate([
    sequelize_typescript_1.Column,
    __metadata("design:type", Number)
], Artist.prototype, "popularity", void 0);
__decorate([
    sequelize_typescript_1.Column,
    __metadata("design:type", String)
], Artist.prototype, "genre", void 0);
__decorate([
    sequelize_typescript_1.HasMany(() => price_1.default),
    __metadata("design:type", Array)
], Artist.prototype, "prices", void 0);
__decorate([
    sequelize_typescript_1.HasMany(() => transaction_1.default),
    __metadata("design:type", Array)
], Artist.prototype, "transactions", void 0);
__decorate([
    sequelize_typescript_1.HasMany(() => track_1.default),
    __metadata("design:type", Array)
], Artist.prototype, "tracks", void 0);
__decorate([
    sequelize_typescript_1.CreatedAt,
    __metadata("design:type", Date)
], Artist.prototype, "createdAt", void 0);
__decorate([
    sequelize_typescript_1.UpdatedAt,
    __metadata("design:type", Date)
], Artist.prototype, "updatedAt", void 0);
Artist = __decorate([
    sequelize_typescript_1.Table({
        modelName: 'Artist',
        tableName: 'Artist',
        name: {
            singular: 'Artist',
            plural: 'Artists',
        },
        freezeTableName: true,
    })
], Artist);
exports.default = Artist;


/***/ }),

/***/ "./server/src/models/index.ts":
/*!************************************!*\
  !*** ./server/src/models/index.ts ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_typescript_1 = __webpack_require__(/*! sequelize-typescript */ "sequelize-typescript");
const artist_1 = __webpack_require__(/*! ./artist */ "./server/src/models/artist.ts");
const price_1 = __webpack_require__(/*! ./price */ "./server/src/models/price.ts");
const track_1 = __webpack_require__(/*! ./track */ "./server/src/models/track.ts");
const transaction_1 = __webpack_require__(/*! ./transaction */ "./server/src/models/transaction.ts");
const user_1 = __webpack_require__(/*! ./user */ "./server/src/models/user.ts");
const logger = __webpack_require__(/*! heroku-logger */ "heroku-logger");
const configFile = __webpack_require__(/*! ../config/config.json */ "./server/src/config/config.json");
exports.default = () => {
    var env = "development" || false;
    var db = {};
    let sequelize = {};
    console.log("development");
    logger.info(`process.env.NODE_ENV: ${"development"}`);
    if (false) {}
    else {
        var config = configFile[env];
        console.log('Using local configuration:', config);
        logger.info('Using local configuration:', { config });
        sequelize = new sequelize_typescript_1.Sequelize(Object.assign({}, config));
    }
    sequelize.addModels([transaction_1.default, user_1.default, artist_1.default, price_1.default, track_1.default]);
    sequelize.sync({ alter: true });
    db.sequelize = sequelize;
    db.Sequelize = sequelize_typescript_1.Sequelize;
};


/***/ }),

/***/ "./server/src/models/price.ts":
/*!************************************!*\
  !*** ./server/src/models/price.ts ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_typescript_1 = __webpack_require__(/*! sequelize-typescript */ "sequelize-typescript");
const artist_1 = __webpack_require__(/*! ./artist */ "./server/src/models/artist.ts");
const transaction_1 = __webpack_require__(/*! ./transaction */ "./server/src/models/transaction.ts");
let Price = class Price extends sequelize_typescript_1.Model {
};
__decorate([
    sequelize_typescript_1.Column,
    __metadata("design:type", Date)
], Price.prototype, "date", void 0);
__decorate([
    sequelize_typescript_1.Column,
    __metadata("design:type", Number)
], Price.prototype, "price", void 0);
__decorate([
    sequelize_typescript_1.ForeignKey(() => artist_1.default),
    sequelize_typescript_1.Column,
    __metadata("design:type", Number)
], Price.prototype, "artistId", void 0);
__decorate([
    sequelize_typescript_1.BelongsTo(() => artist_1.default),
    __metadata("design:type", artist_1.default)
], Price.prototype, "artist", void 0);
__decorate([
    sequelize_typescript_1.HasMany(() => transaction_1.default),
    __metadata("design:type", Array)
], Price.prototype, "transactions", void 0);
Price = __decorate([
    sequelize_typescript_1.Table({
        name: {
            singular: 'Price',
            plural: 'Prices',
        },
        freezeTableName: true,
    })
], Price);
exports.default = Price;


/***/ }),

/***/ "./server/src/models/track.ts":
/*!************************************!*\
  !*** ./server/src/models/track.ts ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_typescript_1 = __webpack_require__(/*! sequelize-typescript */ "sequelize-typescript");
const artist_1 = __webpack_require__(/*! ./artist */ "./server/src/models/artist.ts");
let Track = class Track extends sequelize_typescript_1.Model {
};
__decorate([
    sequelize_typescript_1.Column,
    __metadata("design:type", String)
], Track.prototype, "trackSpotifyId", void 0);
__decorate([
    sequelize_typescript_1.Column,
    __metadata("design:type", String)
], Track.prototype, "name", void 0);
__decorate([
    sequelize_typescript_1.Column,
    __metadata("design:type", Number)
], Track.prototype, "durationMs", void 0);
__decorate([
    sequelize_typescript_1.Column,
    __metadata("design:type", String)
], Track.prototype, "url", void 0);
__decorate([
    sequelize_typescript_1.Column,
    __metadata("design:type", String)
], Track.prototype, "albumName", void 0);
__decorate([
    sequelize_typescript_1.Column,
    __metadata("design:type", String)
], Track.prototype, "thumbnail", void 0);
__decorate([
    sequelize_typescript_1.Column,
    __metadata("design:type", String)
], Track.prototype, "releaseDate", void 0);
__decorate([
    sequelize_typescript_1.ForeignKey(() => artist_1.default),
    sequelize_typescript_1.Column,
    __metadata("design:type", Number)
], Track.prototype, "artistId", void 0);
__decorate([
    sequelize_typescript_1.BelongsTo(() => artist_1.default),
    __metadata("design:type", artist_1.default)
], Track.prototype, "artist", void 0);
Track = __decorate([
    sequelize_typescript_1.Table({
        name: {
            singular: 'Track',
            plural: 'Tracks',
        },
        freezeTableName: true,
    })
], Track);
exports.default = Track;


/***/ }),

/***/ "./server/src/models/transaction.ts":
/*!******************************************!*\
  !*** ./server/src/models/transaction.ts ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_typescript_1 = __webpack_require__(/*! sequelize-typescript */ "sequelize-typescript");
const artist_1 = __webpack_require__(/*! ./artist */ "./server/src/models/artist.ts");
const price_1 = __webpack_require__(/*! ./price */ "./server/src/models/price.ts");
const user_1 = __webpack_require__(/*! ./user */ "./server/src/models/user.ts");
let Transaction = class Transaction extends sequelize_typescript_1.Model {
};
__decorate([
    sequelize_typescript_1.Column,
    __metadata("design:type", Date)
], Transaction.prototype, "date", void 0);
__decorate([
    sequelize_typescript_1.ForeignKey(() => user_1.default),
    sequelize_typescript_1.Column,
    __metadata("design:type", Number)
], Transaction.prototype, "userId", void 0);
__decorate([
    sequelize_typescript_1.BelongsTo(() => user_1.default),
    __metadata("design:type", user_1.default)
], Transaction.prototype, "user", void 0);
__decorate([
    sequelize_typescript_1.ForeignKey(() => artist_1.default),
    sequelize_typescript_1.Column,
    __metadata("design:type", Number)
], Transaction.prototype, "artistId", void 0);
__decorate([
    sequelize_typescript_1.BelongsTo(() => artist_1.default),
    __metadata("design:type", artist_1.default)
], Transaction.prototype, "artist", void 0);
__decorate([
    sequelize_typescript_1.ForeignKey(() => price_1.default),
    sequelize_typescript_1.Column,
    __metadata("design:type", Number)
], Transaction.prototype, "priceId", void 0);
__decorate([
    sequelize_typescript_1.BelongsTo(() => price_1.default),
    __metadata("design:type", price_1.default)
], Transaction.prototype, "price", void 0);
Transaction = __decorate([
    sequelize_typescript_1.Table({
        name: {
            singular: 'Transaction',
            plural: 'Transactions',
        },
        freezeTableName: true,
    })
], Transaction);
exports.default = Transaction;


/***/ }),

/***/ "./server/src/models/user.ts":
/*!***********************************!*\
  !*** ./server/src/models/user.ts ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_typescript_1 = __webpack_require__(/*! sequelize-typescript */ "sequelize-typescript");
const transaction_1 = __webpack_require__(/*! ./transaction */ "./server/src/models/transaction.ts");
let User = class User extends sequelize_typescript_1.Model {
};
__decorate([
    sequelize_typescript_1.AllowNull(false),
    sequelize_typescript_1.Column,
    __metadata("design:type", String)
], User.prototype, "username", void 0);
__decorate([
    sequelize_typescript_1.Column,
    __metadata("design:type", String)
], User.prototype, "firstName", void 0);
__decorate([
    sequelize_typescript_1.Column,
    __metadata("design:type", String)
], User.prototype, "lastName", void 0);
__decorate([
    sequelize_typescript_1.HasMany(() => transaction_1.default),
    __metadata("design:type", Array)
], User.prototype, "transactions", void 0);
__decorate([
    sequelize_typescript_1.CreatedAt,
    __metadata("design:type", Date)
], User.prototype, "createdAt", void 0);
__decorate([
    sequelize_typescript_1.UpdatedAt,
    __metadata("design:type", Date)
], User.prototype, "updatedAt", void 0);
User = __decorate([
    sequelize_typescript_1.Table({ tableName: 'User' })
], User);
exports.default = User;


/***/ }),

/***/ "./server/src/routes/artist.ts":
/*!*************************************!*\
  !*** ./server/src/routes/artist.ts ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const artist_1 = __webpack_require__(/*! ../controllers/artist */ "./server/src/controllers/artist/index.ts");
exports.default = (app) => {
    app.get('/api/artist/', artist_1.getArtists);
    app.get('/api/artist/browse', artist_1.getBrowseArtists);
    app.get('/api/artist/:id', artist_1.getArtistById);
};


/***/ }),

/***/ "./server/src/routes/friends.ts":
/*!**************************************!*\
  !*** ./server/src/routes/friends.ts ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const user_1 = __webpack_require__(/*! ../controllers/user */ "./server/src/controllers/user/index.ts");
exports.default = (app) => {
    app.get('/api/friends', user_1.getFriends);
};


/***/ }),

/***/ "./server/src/routes/index.ts":
/*!************************************!*\
  !*** ./server/src/routes/index.ts ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const express = __webpack_require__(/*! express */ "express");
const path = __webpack_require__(/*! path */ "path");
const artist_1 = __webpack_require__(/*! ./artist */ "./server/src/routes/artist.ts");
const friends_1 = __webpack_require__(/*! ./friends */ "./server/src/routes/friends.ts");
const transactions_1 = __webpack_require__(/*! ./transactions */ "./server/src/routes/transactions.ts");
const user_1 = __webpack_require__(/*! ./user */ "./server/src/routes/user.ts");
const routes = (app) => {
    user_1.default(app);
    artist_1.default(app);
    friends_1.default(app);
    transactions_1.default(app);
    app.use(express.static('./client/build'));
    app.get('/favicon.png', (req, res) => {
        const __dirname = process.env.PWD;
        res.sendFile('favicon.png', { root: path.join(__dirname, './client/assets') });
    });
    app.get('*', (req, res) => {
        const __dirname = process.env.PWD;
        res.sendFile('index.html', { root: path.join(__dirname, './client/build') });
    });
};
exports.default = routes;


/***/ }),

/***/ "./server/src/routes/transactions.ts":
/*!*******************************************!*\
  !*** ./server/src/routes/transactions.ts ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const transactions_1 = __webpack_require__(/*! ../controllers/transactions */ "./server/src/controllers/transactions/index.ts");
exports.default = (app) => {
    app.get('/api/transactions/', transactions_1.getTransactions);
};


/***/ }),

/***/ "./server/src/routes/user.ts":
/*!***********************************!*\
  !*** ./server/src/routes/user.ts ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const user_1 = __webpack_require__(/*! ../controllers/user */ "./server/src/controllers/user/index.ts");
exports.default = (app) => {
    app.get('/api/user/:id', user_1.getUser);
};


/***/ }),

/***/ 0:
/*!**************************************************!*\
  !*** multi babel-polyfill ./server/src/index.ts ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! babel-polyfill */"babel-polyfill");
module.exports = __webpack_require__(/*! ./server/src/index.ts */"./server/src/index.ts");


/***/ }),

/***/ "auth-header":
/*!******************************!*\
  !*** external "auth-header" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("auth-header");

/***/ }),

/***/ "babel-polyfill":
/*!*********************************!*\
  !*** external "babel-polyfill" ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("babel-polyfill");

/***/ }),

/***/ "body-parser":
/*!******************************!*\
  !*** external "body-parser" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("body-parser");

/***/ }),

/***/ "buffer":
/*!*************************!*\
  !*** external "buffer" ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("buffer");

/***/ }),

/***/ "dotenv":
/*!*************************!*\
  !*** external "dotenv" ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("dotenv");

/***/ }),

/***/ "express":
/*!**************************!*\
  !*** external "express" ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("express");

/***/ }),

/***/ "express-query-int":
/*!************************************!*\
  !*** external "express-query-int" ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("express-query-int");

/***/ }),

/***/ "heroku-logger":
/*!********************************!*\
  !*** external "heroku-logger" ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("heroku-logger");

/***/ }),

/***/ "morgan":
/*!*************************!*\
  !*** external "morgan" ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("morgan");

/***/ }),

/***/ "path":
/*!***********************!*\
  !*** external "path" ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("path");

/***/ }),

/***/ "sequelize-typescript":
/*!***************************************!*\
  !*** external "sequelize-typescript" ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("sequelize-typescript");

/***/ })

/******/ })));
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc2VydmVyL3NyYy9hcHAudHMiLCJ3ZWJwYWNrOi8vLy4vc2VydmVyL3NyYy9jb25maWcvc2VjdXJpdHkudHMiLCJ3ZWJwYWNrOi8vLy4vc2VydmVyL3NyYy9jb250cm9sbGVycy9hcnRpc3QvaW5kZXgudHMiLCJ3ZWJwYWNrOi8vLy4vc2VydmVyL3NyYy9jb250cm9sbGVycy9wcmljZS9pbmRleC50cyIsIndlYnBhY2s6Ly8vLi9zZXJ2ZXIvc3JjL2NvbnRyb2xsZXJzL3RyYW5zYWN0aW9ucy9pbmRleC50cyIsIndlYnBhY2s6Ly8vLi9zZXJ2ZXIvc3JjL2NvbnRyb2xsZXJzL3VzZXIvaW5kZXgudHMiLCJ3ZWJwYWNrOi8vLy4vc2VydmVyL3NyYy9pbmRleC50cyIsIndlYnBhY2s6Ly8vLi9zZXJ2ZXIvc3JjL21vZGVscy9hcnRpc3QudHMiLCJ3ZWJwYWNrOi8vLy4vc2VydmVyL3NyYy9tb2RlbHMvaW5kZXgudHMiLCJ3ZWJwYWNrOi8vLy4vc2VydmVyL3NyYy9tb2RlbHMvcHJpY2UudHMiLCJ3ZWJwYWNrOi8vLy4vc2VydmVyL3NyYy9tb2RlbHMvdHJhY2sudHMiLCJ3ZWJwYWNrOi8vLy4vc2VydmVyL3NyYy9tb2RlbHMvdHJhbnNhY3Rpb24udHMiLCJ3ZWJwYWNrOi8vLy4vc2VydmVyL3NyYy9tb2RlbHMvdXNlci50cyIsIndlYnBhY2s6Ly8vLi9zZXJ2ZXIvc3JjL3JvdXRlcy9hcnRpc3QudHMiLCJ3ZWJwYWNrOi8vLy4vc2VydmVyL3NyYy9yb3V0ZXMvZnJpZW5kcy50cyIsIndlYnBhY2s6Ly8vLi9zZXJ2ZXIvc3JjL3JvdXRlcy9pbmRleC50cyIsIndlYnBhY2s6Ly8vLi9zZXJ2ZXIvc3JjL3JvdXRlcy90cmFuc2FjdGlvbnMudHMiLCJ3ZWJwYWNrOi8vLy4vc2VydmVyL3NyYy9yb3V0ZXMvdXNlci50cyIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJhdXRoLWhlYWRlclwiIiwid2VicGFjazovLy9leHRlcm5hbCBcImJhYmVsLXBvbHlmaWxsXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiYm9keS1wYXJzZXJcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJidWZmZXJcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJkb3RlbnZcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJleHByZXNzXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiZXhwcmVzcy1xdWVyeS1pbnRcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJoZXJva3UtbG9nZ2VyXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwibW9yZ2FuXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicGF0aFwiIiwid2VicGFjazovLy9leHRlcm5hbCBcInNlcXVlbGl6ZS10eXBlc2NyaXB0XCIiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtRQUFBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBOzs7UUFHQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMENBQTBDLGdDQUFnQztRQUMxRTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLHdEQUF3RCxrQkFBa0I7UUFDMUU7UUFDQSxpREFBaUQsY0FBYztRQUMvRDs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0EseUNBQXlDLGlDQUFpQztRQUMxRSxnSEFBZ0gsbUJBQW1CLEVBQUU7UUFDckk7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwyQkFBMkIsMEJBQTBCLEVBQUU7UUFDdkQsaUNBQWlDLGVBQWU7UUFDaEQ7UUFDQTtRQUNBOztRQUVBO1FBQ0Esc0RBQXNELCtEQUErRDs7UUFFckg7UUFDQTs7O1FBR0E7UUFDQTs7Ozs7Ozs7Ozs7Ozs7O0FDbEZBLDhE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Ozs7Ozs7OztBQ0FBLG1DOzs7Ozs7Ozs7OztBQ0FBLG9DOzs7Ozs7Ozs7OztBQ0FBLDhDOzs7Ozs7Ozs7OztBQ0FBLDBDOzs7Ozs7Ozs7OztBQ0FBLG1DOzs7Ozs7Ozs7OztBQ0FBLGlDOzs7Ozs7Ozs7OztBQ0FBLGlEIiwiZmlsZSI6ImRpc3QvaW5kZXguanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gMCk7XG4iLCJpbXBvcnQgKiBhcyBleHByZXNzIGZyb20gJ2V4cHJlc3MnO1xuaW1wb3J0IHNlY3VyaXR5IGZyb20gJy4vY29uZmlnL3NlY3VyaXR5JztcbmltcG9ydCBpbml0aWFsaXplIGZyb20gJy4vbW9kZWxzJztcbmltcG9ydCByb3V0ZXMgZnJvbSAnLi9yb3V0ZXMnO1xuXG5pbXBvcnQgbG9nZ2VyID0gcmVxdWlyZSgnbW9yZ2FuJyk7XG5jb25zdCBib2R5UGFyc2VyID0gcmVxdWlyZSgnYm9keS1wYXJzZXInKTtcbmltcG9ydCBwYXRoID0gcmVxdWlyZSgncGF0aCcpO1xuXG4vLyBDb25maWd1cmUgZG90ZW52IHRvIGxvYWQgaW4gdGhlIC5lbnYgZmlsZVxuaW1wb3J0IGRvdGVudiA9IHJlcXVpcmUoJ2RvdGVudicpO1xuY29uc3QgcmVzdWx0ID0gZG90ZW52LmNvbmZpZygpO1xuXG5jb25zdCBfX2Rpcm5hbWUgPSBwcm9jZXNzLmVudi5QV0Q7IC8vIENvdWxkIGJyZWFrIG9uIHByb2RcblxuY29uc3QgYXBwID0gZXhwcmVzcygpOyAvLyBTZXR1cCBleHByZXNzIGFwcFxuXG4vLyBBbGxvdyBjcm9zcyBvcmlnaW4gcmVxdWVzdHMgd2l0aCBhdXRob3JpemF0aW9uIChmb3IgQVBJIHB1cnBvc2VzKVxuYXBwLmFsbCgnKicsIChyZXE6IGV4cHJlc3MuUmVxdWVzdCwgcmVzOiBleHByZXNzLlJlc3BvbnNlLCBuZXh0OiBleHByZXNzLk5leHRGdW5jdGlvbik6IHZvaWQgPT4ge1xuICAgIHJlcy5oZWFkZXIoJ0FjY2Vzcy1Db250cm9sLUFsbG93LU9yaWdpbicsICcqJyk7XG4gICAgcmVzLmhlYWRlcignQWNjZXNzLUNvbnRyb2wtQWxsb3ctTWV0aG9kcycsICdQVVQsIEdFVCwgUE9TVCwgREVMRVRFLCBPUFRJT05TJyk7XG4gICAgcmVzLmhlYWRlcignQWNjZXNzLUNvbnRyb2wtQWxsb3ctQ3JlZGVudGlhbHMnLCAndHJ1ZScpO1xuICAgIHJlcy5oZWFkZXIoJ0FjY2Vzcy1Db250cm9sLUFsbG93LU9yaWdpbicsIGAke3JlcS5oZWFkZXJzLm9yaWdpbn1gKTtcbiAgICByZXMuaGVhZGVyKFxuICAgICAgICAnQWNjZXNzLUNvbnRyb2wtQWxsb3ctSGVhZGVycycsXG4gICAgICAgICdhY2NlcHQsIGNvbnRlbnQtdHlwZSwgeC1wYXJzZS1hcHBsaWNhdGlvbi1pZCwgeC1wYXJzZS1yZXN0LWFwaS1rZXksIHgtcGFyc2Utc2Vzc2lvbi10b2tlbiwgQVVUSE9SSVpBVElPTicsXG4gICAgKTtcbiAgICAvLyBJbnRlcmNlcHQgT1BUSU9OUyBtZXRob2RcbiAgICBpZiAoJ09QVElPTlMnID09IHJlcS5tZXRob2QpIHtcbiAgICAgICAgcmVzLnNlbmQoMjAwKTtcbiAgICB9IGVsc2Uge1xuICAgICAgICBuZXh0KCk7XG4gICAgfVxufSk7XG5cbi8vIFNldHVwIGF1dGhlbnRpY2F0aW9uIGFuZCBzZWN1cml0eVxuc2VjdXJpdHkoYXBwKTtcbmluaXRpYWxpemUoKTtcblxuLy8gTG9nIHJlcXVlc3RzIHRvIHRoZSBjb25zb2xlLlxuYXBwLnVzZShsb2dnZXIoJ2RldicpKTtcblxuLy8gUGFyc2UgaW5jb21pbmcgcmVxdWVzdHMgZGF0YSAoaHR0cHM6Ly9naXRodWIuY29tL2V4cHJlc3Nqcy9ib2R5LXBhcnNlcilcbi8vICArIGluY3JlYXNpbmcgYm9keSByZXF1ZXN0IGxpbWl0IHNpemVcbmFwcC51c2UoYm9keVBhcnNlci5qc29uKHsgbGltaXQ6ICcxNW1iJywgZXh0ZW5kZWQ6IHRydWUgfSkpO1xuYXBwLnVzZShib2R5UGFyc2VyLnVybGVuY29kZWQoeyBsaW1pdDogJzE1bWInLCBleHRlbmRlZDogdHJ1ZSB9KSk7XG5cbi8vIFBhcnNlIHF1ZXJpZXMgaW50byBudW1iZXJzLCBub3Qgc3RyaW5nc1xudmFyIHF1ZXJ5UGFyc2VyID0gcmVxdWlyZSgnZXhwcmVzcy1xdWVyeS1pbnQnKTtcbmFwcC51c2UoYm9keVBhcnNlci5qc29uKCkpO1xuYXBwLnVzZShxdWVyeVBhcnNlcigpKTtcblxuYXBwLnVzZSgnL3NjcmlwdHMnLCBleHByZXNzLnN0YXRpYyhwYXRoLmpvaW4oX19kaXJuYW1lLCAnLi4vLi4vY2xpZW50L2Rpc3QnKSkpO1xuXG4vLyBSZXF1aXJlIHJvdXRlcyBhbmQgc2ltdWx0YW5lb3VzbHkgYXR0YWNoIGFwcFxucm91dGVzKGFwcCk7XG5cbi8vIENhdGNoIGFsbCBpZiB0aGUgcm91dGVzIGRvZXNuJ3QgZmluZCBhIHZhbGlkIFVSTFxuYXBwLmdldChcbiAgICAnKicsXG4gICAgKHJlcTogZXhwcmVzcy5SZXF1ZXN0LCByZXM6IGV4cHJlc3MuUmVzcG9uc2UpOiBleHByZXNzLlJlc3BvbnNlID0+XG4gICAgICAgIHJlcy5zdGF0dXMoMjAwKS5zZW5kKHtcbiAgICAgICAgICAgIG1lc3NhZ2U6ICdGb3Igc29tZSByZWFzb24sIG5vbmUgb2YgdGhlIHJvdXRlcyBoaXQuLi4nLFxuICAgICAgICB9KSxcbik7XG5cbmV4cG9ydCBkZWZhdWx0IGFwcDtcbiIsImltcG9ydCAqIGFzIGF1dGhvcml6YXRpb24gZnJvbSAnYXV0aC1oZWFkZXInOyAvLyBGb3IgcGFyc2luZyBhdXRoZW50aWNhdGlvblxuaW1wb3J0IHsgQnVmZmVyIH0gZnJvbSAnYnVmZmVyJztcbmltcG9ydCAqIGFzIGV4cHJlc3MgZnJvbSAnZXhwcmVzcyc7XG5pbXBvcnQgKiBhcyBsb2dnZXIgZnJvbSAnaGVyb2t1LWxvZ2dlcic7IC8vIEZvciBsb2dnaW5nIHRvIHRoZSBsb2cgaGVyb2t1IGxvZyBmaWxlXG5cbi8vIFdoaXRlbGlzdGVkIElQc1xuY29uc3QgdmFsaWRJUHMgPSBbXG4gICAgJzo6ZmZmZjoxMjcuMC4wLjEnLCAvLyBMb2NhbCBob3N0XG4gICAgJzEyNy4wLjAuMScsIC8vIElQdjQgLSBsb2NhbGhvc3QgKD8pXG4gICAgJzo6MScsIC8vIElQdjZcbl07XG5cbi8vIFdoaXRlbGlzdGVkIHVybHNcbmNvbnN0IHZhbGlkUmVmZXJlcnMgPSBbJyhodHRwcz86Ly8pP2xvY2FsaG9zdDozMDAwLionXTtcbmNvbnN0IHZhbGlkVVJMcyA9IG5ldyBSZWdFeHAodmFsaWRSZWZlcmVycy5qb2luKCd8JyksICdpJyk7IC8vIENvbnZlcnQgdG8gcmVndWxhciBleHByZXNzaW9uXG5cbi8vIFdoaXRlbGlzdGVkIGFzc2V0cyAtIGFscmVhZHkgbm90IGluIHRoZSBibGFja2xpc3Qgc28gbm90IGVudGlyZWx5IG5lY2Nlc3NhcnkgYW55bW9yZVxuY29uc3QgdmFsaWRQYWdlcyA9IFsnLycsICcvZmF2aWNvbi5pY28nLCAnL3NjcmlwdHMvaW5kZXguanMnXTtcblxuLy8gQW55IHJvdXRlIGluIHRoZSBibGFja2xpc3Qgd2lsbCByZXF1aXJlIGF1dGhlbnRpY2F0aW9uXG5jb25zdCBibGFja2xpc3QgPSAvXFwvYXBpLiovOyAvLyBKdXN0IEFQSXNcblxuLy8gSGFuZGxlIDQwMSBlcnJvciBjb2RlIC0gVW5hdXRob3JpemVkXG5jb25zdCB1bmF1dGhvcml6ZWRSZXNwb25zZSA9IChyZXM6IGV4cHJlc3MuUmVzcG9uc2UpOiB2b2lkID0+IHtcbiAgICByZXMuc3RhdHVzKDQwMSkuc2VuZCgnUmVxdWVzdCBmYWlsZWQ6IEJhZCBhdXRoZW50aWNhdGlvbicpO1xufTtcblxuY29uc3Qgc2VjdXJpdHkgPSAoYXBwKTogdm9pZCA9PiB7XG4gICAgLy8gU2tpcCB3aGl0ZWxpc3RlZCBkb21haW5zXG4gICAgYXBwLnVzZSgocmVxOiBleHByZXNzLlJlcXVlc3QsIHJlczogZXhwcmVzcy5SZXNwb25zZSwgbmV4dDogZXhwcmVzcy5OZXh0RnVuY3Rpb24pOiB2b2lkID0+IHtcbiAgICAgICAgLy8gUmVxdWlyZSBhdXRoZW50aWNhdGlvbiBpZiBub3QgaW4gdGhlIHdoaXRlbGlzdCBvciBpcyBpbiBibGFja2xpc3RcbiAgICAgICAgY29uc3QgaW5XaGl0ZWxpc3QgPSB2YWxpZFBhZ2VzLmluZGV4T2YocmVxLm9yaWdpbmFsVXJsKSA+IC0xO1xuICAgICAgICBpZiAoIWluV2hpdGVsaXN0IHx8IGJsYWNrbGlzdC50ZXN0KHJlcS5vcmlnaW5hbFVybCkpIHtcbiAgICAgICAgICAgIC8vIEdldCB0aGUgSVAgYWRkcmVzc1xuICAgICAgICAgICAgY29uc3QgaXA6IHN0cmluZyA9IChyZXEuaGVhZGVyc1sneC1mb3J3YXJkZWQtZm9yJ10gfHxcbiAgICAgICAgICAgICAgICByZXEuY29ubmVjdGlvbi5yZW1vdGVBZGRyZXNzIHx8XG4gICAgICAgICAgICAgICAgcmVxLmlwKSBhcyBzdHJpbmc7XG4gICAgICAgICAgICBjb25zdCByZWZlcmVyID0gcmVxLmhlYWRlcignUmVmZXJlcicpOyAvLyBJZiB0aGUgcmVxdWVzdCBpcyBiZWluZyBzZW50IGJ5IGEgd2Vic2l0ZVxuICAgICAgICAgICAgY29uc29sZS5sb2coJ0lQOiAnLCBpcCk7XG4gICAgICAgICAgICBpZiAodmFsaWRJUHMuaW5kZXhPZihpcCkgPiAtMSkge1xuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKGlwLCAnaXMgYSB3aGl0ZWxpc3RlZCBJUCcpO1xuICAgICAgICAgICAgICAgIGxvZ2dlci5pbmZvKCdXaGl0ZWxpc3RlZCBJUCcsIHsgaXA6IGlwIH0pO1xuICAgICAgICAgICAgICAgIG5leHQoKTsgLy8gUmVxdWVzdCB2YWxpZFxuICAgICAgICAgICAgfSBlbHNlIGlmIChyZWZlcmVyICYmIHZhbGlkVVJMcy50ZXN0KHJlZmVyZXIpKSB7XG4gICAgICAgICAgICAgICAgbG9nZ2VyLmluZm8oJ1doaXRlbGlzdGVkIFJlZmVyZXInLCB7IHJlZmVyZXI6IHJlZmVyZXIgfSk7XG4gICAgICAgICAgICAgICAgbmV4dCgpOyAvLyBSZXF1ZXN0IHZhbGlkXG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIC8vIGxvZ2dlci5pbmZvKFwiQ2hlY2tpbmcgYXV0aG9yaXphdGlvbi4uLlwiKVxuICAgICAgICAgICAgICAgIGNvbnN0IGF1dGhIZWFkZXIgPSByZXEuaGVhZGVyWydhdXRob3JpemF0aW9uJ11cbiAgICAgICAgICAgICAgICAgICAgPyByZXEuaGVhZGVyWydhdXRob3JpemF0aW9uJ11cbiAgICAgICAgICAgICAgICAgICAgOiByZXEuaGVhZGVyc1snYXV0aG9yaXphdGlvbiddO1xuXG4gICAgICAgICAgICAgICAgLy8gRmFpbCBpZiBubyBiYXNpYyBhdXRoZW50aWNhdGlvbiBwcm92aWRlZFxuICAgICAgICAgICAgICAgIGlmICghYXV0aEhlYWRlcikge1xuICAgICAgICAgICAgICAgICAgICAvLyBObyBhdXRob3JpemF0aW9uXG4gICAgICAgICAgICAgICAgICAgIHJlcy5zZXQoJ1dXVy1BdXRoZW50aWNhdGUnLCAnQmFzaWMgcmVhbG09XCJBdXRob3JpemF0aW9uIFJlcXVpcmVkXCInKTsgLy8gUHJvbXB0IGNoYWxsZW5nZSBwYXNzd29yZFxuICAgICAgICAgICAgICAgICAgICBsb2dnZXIuZXJyb3IoJ05vIEF1dGhlbnRpY2F0aW9uJywge1xuICAgICAgICAgICAgICAgICAgICAgICAgaXA6IGlwLFxuICAgICAgICAgICAgICAgICAgICAgICAgcmVmZXJlcjogcmVmZXJlcixcbiAgICAgICAgICAgICAgICAgICAgICAgIHVybDogcmVxLm9yaWdpbmFsVXJsLFxuICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHVuYXV0aG9yaXplZFJlc3BvbnNlKHJlcyk7XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgLy8gUmV0cmVpdmUgYXV0aG9yaXphdGlvbiB0b2tlblxuICAgICAgICAgICAgICAgIGNvbnN0IGF1dGggPSBhdXRob3JpemF0aW9uLnBhcnNlKGF1dGhIZWFkZXIpO1xuXG4gICAgICAgICAgICAgICAgLy8gR2V0IHRoZSBiYXNpYyBhdXRoIGNvbXBvbmVudFxuICAgICAgICAgICAgICAgIGNvbnN0IFt1biwgcHddID0gbmV3IEJ1ZmZlcihhdXRoLnRva2VuLCAnYmFzZTY0JykudG9TdHJpbmcoKS5zcGxpdCgnOicsIDIpO1xuXG4gICAgICAgICAgICAgICAgLy8gVmVyaWZ5IGF1dGhlbnRpY2F0aW9uLlxuICAgICAgICAgICAgICAgIGlmICh1biAhPT0gJ2FkbWluJyB8fCBwdyAhPT0gcHJvY2Vzcy5lbnYuQURNSU5fQVBJX0tFWSkge1xuICAgICAgICAgICAgICAgICAgICBsb2dnZXIuZXJyb3IoJ1VuYXV0aG9yaXplZCBDcmVkZW50aWFscycsIHsgdXNlcm5hbWU6IHVuLCBwYXNzd29yZDogcHcgfSk7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiB1bmF1dGhvcml6ZWRSZXNwb25zZShyZXMpO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIGxvZ2dlci5pbmZvKCdVc2VyIEF1dGhlbnRpY2F0ZWQnLCB7IHVzZXJuYW1lOiB1biwgcGFzc3dvcmQ6IHB3IH0pO1xuICAgICAgICAgICAgICAgIG5leHQoKTsgLy8gUmVxdWVzdCB2YWxpZFxuICAgICAgICAgICAgfVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgLy8gU2tpcCBhdXRoZW50aWNhdGlvblxuICAgICAgICAgICAgbG9nZ2VyLmluZm8oJ1doaXRlbGlzdCBvciBub3QgaW4gYmxhY2tsaXN0JywgeyB1cmw6IHJlcS5vcmlnaW5hbFVybCB9KTtcbiAgICAgICAgICAgIG5leHQoKTtcbiAgICAgICAgfVxuICAgIH0pO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgc2VjdXJpdHk7XG4iLCJpbXBvcnQgKiBhcyBleHByZXNzIGZyb20gJ2V4cHJlc3MnO1xuaW1wb3J0IEFydGlzdCBmcm9tICcuLi8uLi9tb2RlbHMvYXJ0aXN0JztcbmltcG9ydCBQcmljZSBmcm9tICcuLi8uLi9tb2RlbHMvcHJpY2UnO1xuaW1wb3J0IFRyYWNrIGZyb20gJy4uLy4uL21vZGVscy90cmFjayc7XG5pbXBvcnQgeyBzdHJpcFByaWNlIH0gZnJvbSAnLi4vcHJpY2UnO1xuXG5leHBvcnQgY29uc3QgZ2V0QnJvd3NlQXJ0aXN0cyA9IChyZXE6IGV4cHJlc3MuUmVxdWVzdCwgcmVzOiBleHByZXNzLlJlc3BvbnNlKTogYW55ID0+IHtcbiAgICByZXR1cm4gQXJ0aXN0LmZpbmRBbGwoKVxuICAgICAgICAudGhlbihcbiAgICAgICAgICAgIChhcnRpc3RzOiBBcnRpc3RbXSk6IGV4cHJlc3MuUmVzcG9uc2UgPT4ge1xuICAgICAgICAgICAgICAgIHJldHVybiByZXMuc3RhdHVzKDIwMCkuc2VuZCh7XG4gICAgICAgICAgICAgICAgICAgIHN1Y2Nlc3M6IHRydWUsXG4gICAgICAgICAgICAgICAgICAgIGFydGlzdHMsXG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9LFxuICAgICAgICApXG4gICAgICAgIC5jYXRjaCgoZXJyb3I6IEVycm9yKTogZXhwcmVzcy5SZXNwb25zZSA9PiByZXMuc3RhdHVzKDQwMCkuc2VuZChlcnJvcikpOyAvLyBFcnJvclxufTtcblxuZXhwb3J0IGNvbnN0IGdldEFydGlzdHMgPSAocmVxOiBleHByZXNzLlJlcXVlc3QsIHJlczogZXhwcmVzcy5SZXNwb25zZSk6IGFueSA9PiB7XG4gICAgcmV0dXJuIEFydGlzdC5maW5kQWxsKHsgaW5jbHVkZTogW1ByaWNlLCBUcmFja10gfSlcbiAgICAgICAgLnRoZW4oXG4gICAgICAgICAgICAoYXJ0aXN0czogQXJ0aXN0W10pOiBleHByZXNzLlJlc3BvbnNlID0+IHtcbiAgICAgICAgICAgICAgICBjb25zdCBkYXRhID0gYXJ0aXN0cy5tYXAoKGFydGlzdDogQXJ0aXN0KSA9PiAoe1xuICAgICAgICAgICAgICAgICAgICAuLi5hcnRpc3QuZGF0YVZhbHVlcyxcbiAgICAgICAgICAgICAgICAgICAgcHJpY2VzOiBhcnRpc3QucHJpY2VzLm1hcCgocHJpY2UpID0+IHN0cmlwUHJpY2UocHJpY2UpKSxcbiAgICAgICAgICAgICAgICB9KSk7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHJlcy5zdGF0dXMoMjAwKS5zZW5kKHtcbiAgICAgICAgICAgICAgICAgICAgc3VjY2VzczogdHJ1ZSxcbiAgICAgICAgICAgICAgICAgICAgYXJ0aXN0czogZGF0YSxcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH0sXG4gICAgICAgIClcbiAgICAgICAgLmNhdGNoKChlcnJvcjogRXJyb3IpOiBleHByZXNzLlJlc3BvbnNlID0+IHJlcy5zdGF0dXMoNDAwKS5zZW5kKGVycm9yKSk7IC8vIEVycm9yXG59O1xuXG5leHBvcnQgaW50ZXJmYWNlIEFydGlzdEdldFJlcXVlc3QgZXh0ZW5kcyBleHByZXNzLlJlcXVlc3Qge1xuICAgIGlkOiBzdHJpbmc7XG59XG5cbmV4cG9ydCBjb25zdCBnZXRBcnRpc3RCeUlkID0gKHJlcTogQXJ0aXN0R2V0UmVxdWVzdCwgcmVzOiBleHByZXNzLlJlc3BvbnNlKTogYW55ID0+IHtcbiAgICBjb25zdCB7IGlkIH0gPSByZXEucGFyYW1zO1xuICAgIHJldHVybiBBcnRpc3QuZmluZEJ5SWQoaWQsIHsgaW5jbHVkZTogW1ByaWNlLCBUcmFja10gfSlcbiAgICAgICAgLnRoZW4oXG4gICAgICAgICAgICAoYXJ0aXN0OiBBcnRpc3QpOiBleHByZXNzLlJlc3BvbnNlID0+IHtcbiAgICAgICAgICAgICAgICBjb25zdCBkYXRhID0ge1xuICAgICAgICAgICAgICAgICAgICAuLi5hcnRpc3QuZGF0YVZhbHVlcyxcbiAgICAgICAgICAgICAgICAgICAgcHJpY2VzOiBhcnRpc3QucHJpY2VzLm1hcCgocHJpY2UpID0+IHN0cmlwUHJpY2UocHJpY2UpKSxcbiAgICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgICAgIHJldHVybiByZXMuc3RhdHVzKDIwMCkuc2VuZCh7XG4gICAgICAgICAgICAgICAgICAgIHN1Y2Nlc3M6IHRydWUsXG4gICAgICAgICAgICAgICAgICAgIGFydGlzdDogZGF0YSxcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH0sXG4gICAgICAgIClcbiAgICAgICAgLmNhdGNoKFxuICAgICAgICAgICAgKGVycm9yOiBFcnJvcik6IGV4cHJlc3MuUmVzcG9uc2UgPT5cbiAgICAgICAgICAgICAgICByZXMuc3RhdHVzKDQwMCkuc2VuZCh7XG4gICAgICAgICAgICAgICAgICAgIHN1Y2Nlc3M6IGZhbHNlLFxuICAgICAgICAgICAgICAgICAgICBlcnJvcixcbiAgICAgICAgICAgICAgICB9KSxcbiAgICAgICAgKTsgLy8gRXJyb3Jcbn07XG4iLCJpbXBvcnQgUHJpY2UgZnJvbSAnLi4vLi4vbW9kZWxzL3ByaWNlJztcblxuZXhwb3J0IGNvbnN0IHN0cmlwUHJpY2UgPSAocHJpY2U6IFByaWNlKSA9PiAoe1xuICAgIGRhdGU6IHByaWNlLmRhdGUsXG4gICAgcHJpY2U6IHByaWNlLnByaWNlLFxufSk7XG4iLCJpbXBvcnQgKiBhcyBleHByZXNzIGZyb20gJ2V4cHJlc3MnO1xuaW1wb3J0IEFydGlzdCBmcm9tICcuLi8uLi9tb2RlbHMvYXJ0aXN0JztcbmltcG9ydCBUcmFuc2FjdGlvbiBmcm9tICcuLi8uLi9tb2RlbHMvdHJhbnNhY3Rpb24nO1xuaW1wb3J0IFVzZXIgZnJvbSAnLi4vLi4vbW9kZWxzL3VzZXInO1xuXG5leHBvcnQgY29uc3QgZ2V0VHJhbnNhY3Rpb25zID0gKHJlcTogZXhwcmVzcy5SZXF1ZXN0LCByZXM6IGV4cHJlc3MuUmVzcG9uc2UpOiBhbnkgPT4ge1xuICAgIHJldHVybiBUcmFuc2FjdGlvbi5maW5kQWxsKHtcbiAgICAgICAgaW5jbHVkZTogW1VzZXIsIEFydGlzdF0sXG4gICAgICAgIGxpbWl0OiAxMCxcbiAgICAgICAgb3JkZXI6IFtbJ2RhdGUnLCAnREVTQyddXSxcbiAgICB9KVxuICAgICAgICAudGhlbihcbiAgICAgICAgICAgICh0cmFuc2FjdGlvbnM6IFRyYW5zYWN0aW9uW10pOiBleHByZXNzLlJlc3BvbnNlID0+XG4gICAgICAgICAgICAgICAgcmVzLnN0YXR1cygyMDApLnNlbmQoeyBzdWNjZXNzOiB0cnVlLCB0cmFuc2FjdGlvbnMgfSksXG4gICAgICAgIClcbiAgICAgICAgLmNhdGNoKChlcnJvcjogRXJyb3IpOiBleHByZXNzLlJlc3BvbnNlID0+IHJlcy5zdGF0dXMoNDAwKS5zZW5kKHsgc3VjY2VzczogZmFsc2UsIGVycm9yIH0pKTsgLy8gRXJyb3Jcbn07XG4iLCJpbXBvcnQgKiBhcyBleHByZXNzIGZyb20gJ2V4cHJlc3MnO1xuaW1wb3J0IEFydGlzdCBmcm9tICcuLi8uLi9tb2RlbHMvYXJ0aXN0JztcbmltcG9ydCBQcmljZSBmcm9tICcuLi8uLi9tb2RlbHMvcHJpY2UnO1xuaW1wb3J0IFRyYW5zYWN0aW9uIGZyb20gJy4uLy4uL21vZGVscy90cmFuc2FjdGlvbic7XG5pbXBvcnQgVXNlciBmcm9tICcuLi8uLi9tb2RlbHMvdXNlcic7XG5cbmNvbnN0IGdldFNjb3JlID0gKHVzZXI6IFVzZXIpOiBudW1iZXIgPT4ge1xuICAgIGxldCBzY29yZSA9IDA7XG4gICAgdXNlci50cmFuc2FjdGlvbnMuZm9yRWFjaCgodHJhbnNhY3Rpb24pID0+IHtcbiAgICAgICAgc2NvcmUgKz0gdHJhbnNhY3Rpb24uYXJ0aXN0Lm1vbnRobHlMaXN0ZW5zIC0gdHJhbnNhY3Rpb24ucHJpY2UucHJpY2U7XG4gICAgfSk7XG5cbiAgICByZXR1cm4gc2NvcmU7XG59O1xuXG5leHBvcnQgaW50ZXJmYWNlIFVzZXJHZXRSZXF1ZXN0IGV4dGVuZHMgZXhwcmVzcy5SZXF1ZXN0IHtcbiAgICBpZDogc3RyaW5nO1xufVxuXG5leHBvcnQgY29uc3QgZ2V0VXNlciA9IChyZXE6IFVzZXJHZXRSZXF1ZXN0LCByZXM6IGV4cHJlc3MuUmVzcG9uc2UpOiBhbnkgPT4ge1xuICAgIGNvbnN0IHsgaWQgfSA9IHJlcS5wYXJhbXM7XG4gICAgcmV0dXJuIFVzZXIuZmluZEJ5SWQoaWQsIHtcbiAgICAgICAgaW5jbHVkZTogW1xuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIG1vZGVsOiBUcmFuc2FjdGlvbixcbiAgICAgICAgICAgICAgICBpbmNsdWRlOiBbUHJpY2UsIEFydGlzdF0sXG4gICAgICAgICAgICB9LFxuICAgICAgICBdLFxuICAgIH0pXG4gICAgICAgIC50aGVuKFxuICAgICAgICAgICAgKHVzZXI6IFVzZXIpOiBleHByZXNzLlJlc3BvbnNlID0+XG4gICAgICAgICAgICAgICAgcmVzLnN0YXR1cygyMDApLnNlbmQoe1xuICAgICAgICAgICAgICAgICAgICBzdWNjZXNzOiB0cnVlLFxuICAgICAgICAgICAgICAgICAgICBzY29yZTogZ2V0U2NvcmUodXNlciksXG4gICAgICAgICAgICAgICAgICAgIHVzZXI6IHVzZXIsXG4gICAgICAgICAgICAgICAgfSksXG4gICAgICAgIClcbiAgICAgICAgLmNhdGNoKChlcnJvcjogRXJyb3IpOiBleHByZXNzLlJlc3BvbnNlID0+IHJlcy5zdGF0dXMoNDAwKS5zZW5kKHsgc3VjY2VzczogZmFsc2UsIGVycm9yIH0pKTsgLy8gRXJyb3Jcbn07XG5cbmV4cG9ydCBjb25zdCBnZXRGcmllbmRzID0gKHJlcTogZXhwcmVzcy5SZXF1ZXN0LCByZXM6IGV4cHJlc3MuUmVzcG9uc2UpOiBhbnkgPT4ge1xuICAgIHJldHVybiBVc2VyLmZpbmRBbGwoe1xuICAgICAgICBpbmNsdWRlOiBbXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgbW9kZWw6IFRyYW5zYWN0aW9uLFxuICAgICAgICAgICAgICAgIGluY2x1ZGU6IFtQcmljZSwgQXJ0aXN0XSxcbiAgICAgICAgICAgIH0sXG4gICAgICAgIF0sXG4gICAgfSlcbiAgICAgICAgLnRoZW4oXG4gICAgICAgICAgICAodXNlcnM6IFVzZXJbXSk6IGV4cHJlc3MuUmVzcG9uc2UgPT5cbiAgICAgICAgICAgICAgICByZXMuc3RhdHVzKDIwMCkuc2VuZCh7XG4gICAgICAgICAgICAgICAgICAgIHN1Y2Nlc3M6IHRydWUsXG4gICAgICAgICAgICAgICAgICAgIHVzZXJzOiB1c2Vyc1xuICAgICAgICAgICAgICAgICAgICAgICAgLy8gLmZpbHRlcigodXNlcikgPT4gdXNlci5pZCAhPSAxKVxuICAgICAgICAgICAgICAgICAgICAgICAgLm1hcCgodXNlcikgPT4gKHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB1c2VyLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNjb3JlOiBnZXRTY29yZSh1c2VyKSxcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pKSxcbiAgICAgICAgICAgICAgICB9KSxcbiAgICAgICAgKVxuICAgICAgICAuY2F0Y2goKGVycm9yOiBFcnJvcik6IGV4cHJlc3MuUmVzcG9uc2UgPT4gcmVzLnN0YXR1cyg0MDApLnNlbmQoeyBzdWNjZXNzOiBmYWxzZSwgZXJyb3IgfSkpOyAvLyBFcnJvclxufTtcbiIsIi8vIEFwcGxpY2F0aW9uIGVudHJ5LCBzZXR0aW5nIHVwIHNlcnZlclxuaW1wb3J0IGFwcCBmcm9tICcuL2FwcCc7IC8vIFRoZSBleHByZXNzIGFwcCB3ZSBqdXN0IGNyZWF0ZWRcblxuY29uc3QgcG9ydCA9IHBhcnNlSW50KHByb2Nlc3MuZW52LlBPUlQsIDEwKSB8fCA1MDAwOyAvLyBVc2UgcG9ydCA1MDAwXG5hcHAuc2V0KCdwb3J0JywgcG9ydCk7XG5cbi8vIDAuMC4wLjAgbWFrZXMgaXQgYXZhaWxhYmxlIG9uIHlvdXIgbG9jYWwgbmV0d29ya1xuLy8gYXBwLmxpc3Rlbihwb3J0LCAnMC4wLjAuMCcpO1xuYXBwLmxpc3Rlbihwb3J0KTtcbiIsImltcG9ydCB7IENvbHVtbiwgQ3JlYXRlZEF0LCBIYXNNYW55LCBNb2RlbCwgVGFibGUsIFVwZGF0ZWRBdCB9IGZyb20gJ3NlcXVlbGl6ZS10eXBlc2NyaXB0JztcbmltcG9ydCBQcmljZSBmcm9tICcuL3ByaWNlJztcbmltcG9ydCBUcmFjayBmcm9tICcuL3RyYWNrJztcbmltcG9ydCBUcmFuc2FjdGlvbiBmcm9tICcuL3RyYW5zYWN0aW9uJztcblxuQFRhYmxlKHtcbiAgICBtb2RlbE5hbWU6ICdBcnRpc3QnLFxuICAgIHRhYmxlTmFtZTogJ0FydGlzdCcsXG4gICAgbmFtZToge1xuICAgICAgICBzaW5ndWxhcjogJ0FydGlzdCcsXG4gICAgICAgIHBsdXJhbDogJ0FydGlzdHMnLFxuICAgIH0sXG4gICAgZnJlZXplVGFibGVOYW1lOiB0cnVlLFxufSlcbmNsYXNzIEFydGlzdCBleHRlbmRzIE1vZGVsPEFydGlzdD4ge1xuICAgIEBDb2x1bW5cbiAgICBuYW1lOiBzdHJpbmc7XG5cbiAgICBAQ29sdW1uXG4gICAgc3BvdGlmeVVybDogc3RyaW5nO1xuXG4gICAgQENvbHVtblxuICAgIG1vbnRobHlMaXN0ZW5zOiBudW1iZXI7XG5cbiAgICBAQ29sdW1uXG4gICAgZm9sbG93ZXJzOiBudW1iZXI7XG5cbiAgICBAQ29sdW1uXG4gICAgYmlvOiBzdHJpbmc7XG5cbiAgICBAQ29sdW1uXG4gICAgZm91bmRlZFllYXI6IG51bWJlcjtcblxuICAgIEBDb2x1bW5cbiAgICBpbWFnZTogc3RyaW5nO1xuXG4gICAgQENvbHVtblxuICAgIHNwb3RpZnlJZDogc3RyaW5nO1xuXG4gICAgQENvbHVtblxuICAgIHBvcHVsYXJpdHk6IG51bWJlcjtcblxuICAgIEBDb2x1bW5cbiAgICBnZW5yZTogc3RyaW5nO1xuXG4gICAgQEhhc01hbnkoKCkgPT4gUHJpY2UpXG4gICAgcHJpY2VzOiBQcmljZVtdO1xuXG4gICAgQEhhc01hbnkoKCkgPT4gVHJhbnNhY3Rpb24pXG4gICAgdHJhbnNhY3Rpb25zOiBUcmFuc2FjdGlvbltdO1xuXG4gICAgQEhhc01hbnkoKCkgPT4gVHJhY2spXG4gICAgdHJhY2tzOiBUcmFja1tdO1xuXG4gICAgQENyZWF0ZWRBdFxuICAgIGNyZWF0ZWRBdDogRGF0ZTtcblxuICAgIEBVcGRhdGVkQXRcbiAgICB1cGRhdGVkQXQ6IERhdGU7XG59XG5cbmV4cG9ydCBkZWZhdWx0IEFydGlzdDtcbiIsImltcG9ydCB7IFNlcXVlbGl6ZSB9IGZyb20gJ3NlcXVlbGl6ZS10eXBlc2NyaXB0JztcbmltcG9ydCBBcnRpc3QgZnJvbSAnLi9hcnRpc3QnO1xuaW1wb3J0IFByaWNlIGZyb20gJy4vcHJpY2UnO1xuaW1wb3J0IFRyYWNrIGZyb20gJy4vdHJhY2snO1xuaW1wb3J0IFRyYW5zYWN0aW9uIGZyb20gJy4vdHJhbnNhY3Rpb24nO1xuaW1wb3J0IFVzZXIgZnJvbSAnLi91c2VyJztcblxuaW1wb3J0IGxvZ2dlciA9IHJlcXVpcmUoJ2hlcm9rdS1sb2dnZXInKTsgLy8gRm9yIGxvZ2dpbmcgdG8gdGhlIGxvZyBoZXJva3UgbG9nIGZpbGVcblxuaW1wb3J0IGNvbmZpZ0ZpbGUgPSByZXF1aXJlKCcuLi9jb25maWcvY29uZmlnLmpzb24nKTtcblxuZGVjbGFyZSB2YXIgcHJvY2Vzczoge1xuICAgIGVudjoge1xuICAgICAgICBOT0RFX0VOVjogc3RyaW5nO1xuICAgICAgICBEQVRBQkFTRV9VUkw6IHN0cmluZztcbiAgICB9O1xufTtcblxuZXhwb3J0IGRlZmF1bHQgKCk6IHZvaWQgPT4ge1xuICAgIHZhciBlbnYgPSBwcm9jZXNzLmVudi5OT0RFX0VOViB8fCAnZGV2ZWxvcG1lbnQnOyAvLyBEZXRlcm1pbmUgaWYgdXNpbmcgZGV2ZWxvcG1lbnRcbiAgICAvLyBjb25zdCBfX2Rpcm5hbWUgPSBwcm9jZXNzLmVudi5QV0Q7IC8vIENvdWxkIGJyZWFrIG9uIHByb2RcbiAgICAvLyBjb25zdCBjdXJyZW50RGlyID0gcGF0aC5qb2luKF9fZGlybmFtZSwgJy4vc2VydmVyL3NyYy9tb2RlbHMnKTtcblxuICAgIC8vIFJlZ3VsYXIgYG1vZHVsZS5maWxlbmFtZWAgaXMgdW5kZWZpbmVkIGluIGxvY2FsIGRldlxuICAgIC8vIGNvbnN0IGZpbGVuYW1lID0gbW9kdWxlLmZpbGVuYW1lICE9PSB1bmRlZmluZWQgPyBtb2R1bGUuZmlsZW5hbWUgOiAnaW5kZXgudHMnO1xuICAgIC8vIHZhciBiYXNlbmFtZSA9IHBhdGguYmFzZW5hbWUoZmlsZW5hbWUpO1xuXG4gICAgdmFyIGRiOiBhbnkgPSB7fTtcblxuICAgIC8vIEkgdXNlIHRoZSBub2RlLWNvbmZpZyBwYWNrYWdlIHRvIG1hbmFnZSB0aGUgREIgY29uZmlnIHlvdSBjYW4gY2hvb3NlXG4gICAgLy8gdG8gc3RpY2sgd2l0aCB0aGUgb3JpZ2luYWwgdmVyc2lvbi4gQW5kIEkgcmVtb3ZlZCBlbnZpcm9ubWVudCB2YXJpYWJsZVxuICAgIC8vIHN1cHBvcnQgYmVjYXVzZSBJIGRvbid0IG5lZWQgaXQuXG4gICAgbGV0IHNlcXVlbGl6ZTogYW55ID0ge307XG4gICAgY29uc29sZS5sb2cocHJvY2Vzcy5lbnYuTk9ERV9FTlYpOyAvLyBUT0RPOiBGb3Igc29tZSByZWFzb24sIGluIHByb2R1Y3Rpb24sIHRoaXMgcmVhZHMgYXMgJ2RldmVsb3BtZW50J1xuICAgIGxvZ2dlci5pbmZvKGBwcm9jZXNzLmVudi5OT0RFX0VOVjogJHtwcm9jZXNzLmVudi5OT0RFX0VOVn1gKTtcbiAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgICAgIC8vIEZyb20gdGhlIGVudmlyb25tZW50LCBleHRyYWN0IHRoZSBrZXkgd2l0aCB0aGUgbmFtZSBwcm92aWRlZCBpbiB0aGUgY29uZmlnIGFzIHVzZV9lbnZfdmFyaWFibGVcbiAgICAgICAgLy8gYW5kIHVzZSB0aGF0IHRvIGVzdGFibGlzaCBhIGNvbm5lY3Rpb24gdG8gb3VyIGRhdGFiYXNlLlxuICAgICAgICBjb25zb2xlLmxvZygnVXNpbmcgZGF0YWJhc2UgVVJMOicsIHByb2Nlc3MuZW52LkRBVEFCQVNFX1VSTCk7XG4gICAgICAgIGxvZ2dlci5pbmZvKCdVc2luZyBkYXRhYmFzZSBVUkw6JywgeyB1cmw6IHByb2Nlc3MuZW52LkRBVEFCQVNFX1VSTCB9KTtcbiAgICAgICAgc2VxdWVsaXplID0gbmV3IFNlcXVlbGl6ZShwcm9jZXNzLmVudi5EQVRBQkFTRV9VUkwpOyAvLyBFc3RhYmxpc2ggY29ubmVjdGlvbiB1c2luZyBlbnZpcm9ubWVudCB2YXJpYWJsZXNcbiAgICB9IGVsc2Uge1xuICAgICAgICB2YXIgY29uZmlnID0gY29uZmlnRmlsZVtlbnZdOyAvLyBJZiBsb2NhbCwgdXNlIGNvbmZpZ1xuICAgICAgICBjb25zb2xlLmxvZygnVXNpbmcgbG9jYWwgY29uZmlndXJhdGlvbjonLCBjb25maWcpO1xuICAgICAgICBsb2dnZXIuaW5mbygnVXNpbmcgbG9jYWwgY29uZmlndXJhdGlvbjonLCB7IGNvbmZpZyB9KTtcbiAgICAgICAgc2VxdWVsaXplID0gbmV3IFNlcXVlbGl6ZSh7XG4gICAgICAgICAgICAuLi5jb25maWcsXG4gICAgICAgICAgICAvLyBkYXRhYmFzZTogY29uZmlnLmRhdGFiYXNlLFxuICAgICAgICAgICAgLy8gdXNlcm5hbWU6IGNvbmZpZy51c2VybmFtZSxcbiAgICAgICAgICAgIC8vIHBhc3N3b3JkOiBjb25maWcucGFzc3dvcmQsXG4gICAgICAgIH0pOyAvLyBDb25uZWN0XG4gICAgfVxuXG4gICAgc2VxdWVsaXplLmFkZE1vZGVscyhbVHJhbnNhY3Rpb24sIFVzZXIsIEFydGlzdCwgUHJpY2UsIFRyYWNrXSk7XG4gICAgLy8gaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WID09ICdwcm9kdWN0aW9uJykge1xuICAgIC8vICAgICBzZXF1ZWxpemUuc3luYygpOyAvLyBEb24ndCBjb3JydXB0IHByb2R1Y3Rpb24gZGF0YVxuICAgIC8vIH0gZWxzZSB7XG4gICAgLy8gc2VxdWVsaXplLnN5bmMoeyBmb3JjZTogdHJ1ZSB9KTsgLy8gVE9ETzogUmVtb3ZlIGJlZm9yZSBsaXZlXG4gICAgc2VxdWVsaXplLnN5bmMoeyBhbHRlcjogdHJ1ZSB9KTtcbiAgICAvLyBzZXF1ZWxpemUuc3luYygpO1xuICAgIC8vIH1cblxuICAgIGRiLnNlcXVlbGl6ZSA9IHNlcXVlbGl6ZTtcbiAgICBkYi5TZXF1ZWxpemUgPSBTZXF1ZWxpemU7XG59O1xuIiwiaW1wb3J0IHsgQmVsb25nc1RvLCBDb2x1bW4sIEZvcmVpZ25LZXksIEhhc01hbnksIE1vZGVsLCBUYWJsZSB9IGZyb20gJ3NlcXVlbGl6ZS10eXBlc2NyaXB0JztcbmltcG9ydCBBcnRpc3QgZnJvbSAnLi9hcnRpc3QnO1xuaW1wb3J0IFRyYW5zYWN0aW9uIGZyb20gJy4vdHJhbnNhY3Rpb24nO1xuXG5AVGFibGUoe1xuICAgIG5hbWU6IHtcbiAgICAgICAgc2luZ3VsYXI6ICdQcmljZScsXG4gICAgICAgIHBsdXJhbDogJ1ByaWNlcycsXG4gICAgfSxcbiAgICBmcmVlemVUYWJsZU5hbWU6IHRydWUsXG59KVxuY2xhc3MgUHJpY2UgZXh0ZW5kcyBNb2RlbDxQcmljZT4ge1xuICAgIEBDb2x1bW5cbiAgICBkYXRlOiBEYXRlO1xuXG4gICAgQENvbHVtblxuICAgIHByaWNlOiBudW1iZXI7XG5cbiAgICBARm9yZWlnbktleSgoKSA9PiBBcnRpc3QpXG4gICAgQENvbHVtblxuICAgIGFydGlzdElkOiBudW1iZXI7XG5cbiAgICBAQmVsb25nc1RvKCgpID0+IEFydGlzdClcbiAgICBhcnRpc3Q6IEFydGlzdDtcblxuICAgIEBIYXNNYW55KCgpID0+IFRyYW5zYWN0aW9uKVxuICAgIHRyYW5zYWN0aW9uczogVHJhbnNhY3Rpb25bXTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgUHJpY2U7XG4iLCJpbXBvcnQgeyBCZWxvbmdzVG8sIENvbHVtbiwgRm9yZWlnbktleSwgTW9kZWwsIFRhYmxlIH0gZnJvbSAnc2VxdWVsaXplLXR5cGVzY3JpcHQnO1xuaW1wb3J0IEFydGlzdCBmcm9tICcuL2FydGlzdCc7XG5cbkBUYWJsZSh7XG4gICAgbmFtZToge1xuICAgICAgICBzaW5ndWxhcjogJ1RyYWNrJyxcbiAgICAgICAgcGx1cmFsOiAnVHJhY2tzJyxcbiAgICB9LFxuICAgIGZyZWV6ZVRhYmxlTmFtZTogdHJ1ZSxcbn0pXG5jbGFzcyBUcmFjayBleHRlbmRzIE1vZGVsPFRyYWNrPiB7XG4gICAgQENvbHVtblxuICAgIHRyYWNrU3BvdGlmeUlkOiBzdHJpbmc7XG5cbiAgICBAQ29sdW1uXG4gICAgbmFtZTogc3RyaW5nO1xuXG4gICAgQENvbHVtblxuICAgIGR1cmF0aW9uTXM6IG51bWJlcjtcblxuICAgIEBDb2x1bW5cbiAgICB1cmw6IHN0cmluZztcblxuICAgIEBDb2x1bW5cbiAgICBhbGJ1bU5hbWU6IHN0cmluZztcblxuICAgIEBDb2x1bW5cbiAgICB0aHVtYm5haWw6IHN0cmluZztcblxuICAgIEBDb2x1bW5cbiAgICByZWxlYXNlRGF0ZTogc3RyaW5nO1xuXG4gICAgQEZvcmVpZ25LZXkoKCkgPT4gQXJ0aXN0KVxuICAgIEBDb2x1bW5cbiAgICBhcnRpc3RJZDogbnVtYmVyO1xuXG4gICAgQEJlbG9uZ3NUbygoKSA9PiBBcnRpc3QpXG4gICAgYXJ0aXN0OiBBcnRpc3Q7XG59XG5cbmV4cG9ydCBkZWZhdWx0IFRyYWNrO1xuIiwiaW1wb3J0IHsgQmVsb25nc1RvLCBDb2x1bW4sIEZvcmVpZ25LZXksIE1vZGVsLCBUYWJsZSB9IGZyb20gJ3NlcXVlbGl6ZS10eXBlc2NyaXB0JztcbmltcG9ydCBBcnRpc3QgZnJvbSAnLi9hcnRpc3QnO1xuaW1wb3J0IFByaWNlIGZyb20gJy4vcHJpY2UnO1xuaW1wb3J0IFVzZXIgZnJvbSAnLi91c2VyJztcblxuQFRhYmxlKHtcbiAgICBuYW1lOiB7XG4gICAgICAgIHNpbmd1bGFyOiAnVHJhbnNhY3Rpb24nLFxuICAgICAgICBwbHVyYWw6ICdUcmFuc2FjdGlvbnMnLFxuICAgIH0sXG4gICAgZnJlZXplVGFibGVOYW1lOiB0cnVlLFxufSlcbmNsYXNzIFRyYW5zYWN0aW9uIGV4dGVuZHMgTW9kZWw8VHJhbnNhY3Rpb24+IHtcbiAgICBAQ29sdW1uXG4gICAgZGF0ZTogRGF0ZTtcblxuICAgIEBGb3JlaWduS2V5KCgpID0+IFVzZXIpXG4gICAgQENvbHVtblxuICAgIHVzZXJJZDogbnVtYmVyO1xuXG4gICAgQEJlbG9uZ3NUbygoKSA9PiBVc2VyKVxuICAgIHVzZXI6IFVzZXI7XG5cbiAgICBARm9yZWlnbktleSgoKSA9PiBBcnRpc3QpXG4gICAgQENvbHVtblxuICAgIGFydGlzdElkOiBudW1iZXI7XG5cbiAgICBAQmVsb25nc1RvKCgpID0+IEFydGlzdClcbiAgICBhcnRpc3Q6IEFydGlzdDtcblxuICAgIEBGb3JlaWduS2V5KCgpID0+IFByaWNlKVxuICAgIEBDb2x1bW5cbiAgICBwcmljZUlkOiBudW1iZXI7XG5cbiAgICBAQmVsb25nc1RvKCgpID0+IFByaWNlKVxuICAgIHByaWNlOiBQcmljZTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgVHJhbnNhY3Rpb247XG4iLCJpbXBvcnQge1xuICAgIEFsbG93TnVsbCxcbiAgICBDb2x1bW4sXG4gICAgQ3JlYXRlZEF0LFxuICAgIEhhc01hbnksXG4gICAgTW9kZWwsXG4gICAgVGFibGUsXG4gICAgVXBkYXRlZEF0LFxufSBmcm9tICdzZXF1ZWxpemUtdHlwZXNjcmlwdCc7XG5pbXBvcnQgVHJhbnNhY3Rpb24gZnJvbSAnLi90cmFuc2FjdGlvbic7XG5cbkBUYWJsZSh7IHRhYmxlTmFtZTogJ1VzZXInIH0pXG5jbGFzcyBVc2VyIGV4dGVuZHMgTW9kZWw8VXNlcj4ge1xuICAgIEBBbGxvd051bGwoZmFsc2UpXG4gICAgQENvbHVtblxuICAgIHVzZXJuYW1lOiBzdHJpbmc7XG5cbiAgICBAQ29sdW1uXG4gICAgZmlyc3ROYW1lOiBzdHJpbmc7XG5cbiAgICBAQ29sdW1uXG4gICAgbGFzdE5hbWU6IHN0cmluZztcblxuICAgIEBIYXNNYW55KCgpID0+IFRyYW5zYWN0aW9uKVxuICAgIHRyYW5zYWN0aW9uczogVHJhbnNhY3Rpb25bXTtcblxuICAgIEBDcmVhdGVkQXRcbiAgICBjcmVhdGVkQXQ6IERhdGU7XG5cbiAgICBAVXBkYXRlZEF0XG4gICAgdXBkYXRlZEF0OiBEYXRlO1xufVxuXG5leHBvcnQgZGVmYXVsdCBVc2VyO1xuIiwiaW1wb3J0ICogYXMgZXhwcmVzcyBmcm9tICdleHByZXNzJztcbmltcG9ydCB7IGdldEFydGlzdEJ5SWQsIGdldEFydGlzdHMsIGdldEJyb3dzZUFydGlzdHMgfSBmcm9tICcuLi9jb250cm9sbGVycy9hcnRpc3QnO1xuXG5leHBvcnQgZGVmYXVsdCAoYXBwOiBleHByZXNzLkFwcGxpY2F0aW9uKSA9PiB7XG4gICAgYXBwLmdldCgnL2FwaS9hcnRpc3QvJywgZ2V0QXJ0aXN0cyk7XG4gICAgYXBwLmdldCgnL2FwaS9hcnRpc3QvYnJvd3NlJywgZ2V0QnJvd3NlQXJ0aXN0cyk7XG5cbiAgICBhcHAuZ2V0KCcvYXBpL2FydGlzdC86aWQnLCBnZXRBcnRpc3RCeUlkKTtcbn07XG4iLCJpbXBvcnQgKiBhcyBleHByZXNzIGZyb20gJ2V4cHJlc3MnO1xuaW1wb3J0IHsgZ2V0RnJpZW5kcyB9IGZyb20gJy4uL2NvbnRyb2xsZXJzL3VzZXInO1xuXG5leHBvcnQgZGVmYXVsdCAoYXBwOiBleHByZXNzLkFwcGxpY2F0aW9uKTogdm9pZCA9PiB7XG4gICAgYXBwLmdldCgnL2FwaS9mcmllbmRzJywgZ2V0RnJpZW5kcyk7XG59O1xuIiwiLy8gc2VydmVyL3JvdXRlcy9pbmRleC5qc1xuLy8gQVBJIHJvdXRlIHRoYXQgbWFwcyBmdW5jdGlvbmFsaXR5XG5pbXBvcnQgKiBhcyBleHByZXNzIGZyb20gJ2V4cHJlc3MnO1xuaW1wb3J0ICogYXMgcGF0aCBmcm9tICdwYXRoJztcbmltcG9ydCBBcnRpc3RSb3V0ZXMgZnJvbSAnLi9hcnRpc3QnO1xuaW1wb3J0IEZyaWVuZFJvdXRlcyBmcm9tICcuL2ZyaWVuZHMnO1xuaW1wb3J0IFRyYW5zYWN0aW9uUm91dGVzIGZyb20gJy4vdHJhbnNhY3Rpb25zJztcbmltcG9ydCBVc2VyUm91dGVzIGZyb20gJy4vdXNlcic7XG5cbi8vIFJlcXVpcmVzIGFuIGFwcCBhcyBhbiBpbnB1dCBzbyBjYW4gZGlyZWN0IHRoZSB1c2VyIGFjY29yZGluZ2x5XG5jb25zdCByb3V0ZXMgPSAoYXBwOiBleHByZXNzLkFwcGxpY2F0aW9uKTogdm9pZCA9PiB7XG4gICAgLy8gTW9kdWxhciByb3V0ZXNcbiAgICBVc2VyUm91dGVzKGFwcCk7XG4gICAgQXJ0aXN0Um91dGVzKGFwcCk7XG4gICAgRnJpZW5kUm91dGVzKGFwcCk7XG4gICAgVHJhbnNhY3Rpb25Sb3V0ZXMoYXBwKTtcblxuICAgIC8vIFNlcnZlIHN0YXRpYyBmaWxlc1xuICAgIGFwcC51c2UoZXhwcmVzcy5zdGF0aWMoJy4vY2xpZW50L2J1aWxkJykpO1xuXG4gICAgYXBwLmdldCgnL2Zhdmljb24ucG5nJywgKHJlcTogZXhwcmVzcy5SZXF1ZXN0LCByZXM6IGV4cHJlc3MuUmVzcG9uc2UpOiB2b2lkID0+IHtcbiAgICAgICAgY29uc3QgX19kaXJuYW1lID0gcHJvY2Vzcy5lbnYuUFdEO1xuICAgICAgICByZXMuc2VuZEZpbGUoJ2Zhdmljb24ucG5nJywgeyByb290OiBwYXRoLmpvaW4oX19kaXJuYW1lLCAnLi9jbGllbnQvYXNzZXRzJykgfSk7XG4gICAgfSk7XG5cbiAgICAvLyBDbGllbnQgYXBwIGVudHJ5IGluZGV4Lmh0bWwgZmlsZSAtIHJlYWN0IHJvdXRlclxuICAgIGFwcC5nZXQoJyonLCAocmVxOiBleHByZXNzLlJlcXVlc3QsIHJlczogZXhwcmVzcy5SZXNwb25zZSk6IHZvaWQgPT4ge1xuICAgICAgICBjb25zdCBfX2Rpcm5hbWUgPSBwcm9jZXNzLmVudi5QV0Q7XG4gICAgICAgIHJlcy5zZW5kRmlsZSgnaW5kZXguaHRtbCcsIHsgcm9vdDogcGF0aC5qb2luKF9fZGlybmFtZSwgJy4vY2xpZW50L2J1aWxkJykgfSk7IC8vIFJlbmRlciBjbGllbnRcbiAgICB9KTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IHJvdXRlcztcbiIsImltcG9ydCAqIGFzIGV4cHJlc3MgZnJvbSAnZXhwcmVzcyc7XG5pbXBvcnQgeyBnZXRUcmFuc2FjdGlvbnMgfSBmcm9tICcuLi9jb250cm9sbGVycy90cmFuc2FjdGlvbnMnO1xuXG5leHBvcnQgZGVmYXVsdCAoYXBwOiBleHByZXNzLkFwcGxpY2F0aW9uKTogdm9pZCA9PiB7XG4gICAgYXBwLmdldCgnL2FwaS90cmFuc2FjdGlvbnMvJywgZ2V0VHJhbnNhY3Rpb25zKTtcbn07XG4iLCJpbXBvcnQgKiBhcyBleHByZXNzIGZyb20gJ2V4cHJlc3MnO1xuaW1wb3J0IHsgZ2V0VXNlciB9IGZyb20gJy4uL2NvbnRyb2xsZXJzL3VzZXInO1xuXG5leHBvcnQgZGVmYXVsdCAoYXBwOiBleHByZXNzLkFwcGxpY2F0aW9uKTogdm9pZCA9PiB7XG4gICAgYXBwLmdldCgnL2FwaS91c2VyLzppZCcsIGdldFVzZXIpO1xufTtcbiIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImF1dGgtaGVhZGVyXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImJhYmVsLXBvbHlmaWxsXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImJvZHktcGFyc2VyXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImJ1ZmZlclwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJkb3RlbnZcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiZXhwcmVzc1wiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJleHByZXNzLXF1ZXJ5LWludFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJoZXJva3UtbG9nZ2VyXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm1vcmdhblwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJwYXRoXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInNlcXVlbGl6ZS10eXBlc2NyaXB0XCIpOyJdLCJzb3VyY2VSb290IjoiIn0=