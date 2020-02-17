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

module.exports = JSON.parse("{\"development\":{\"username\":\"kevinhou\",\"password\":\"\",\"database\":\"discover-artist-betting\",\"host\":\"127.0.0.1\",\"port\":5432,\"dialect\":\"postgres\"},\"production\":{\"use_env_variable\":\"DATABASE_URL\"}}");

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
    id: price.id,
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
exports.createTransaction = (req, res) => {
    const { body: { artistId, priceId }, } = req;
    return transaction_1.default.create({
        date: new Date(),
        userId: 1,
        artistId,
        priceId,
    })
        .then((transaction) => res.status(200).send({ success: true, transaction }))
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
        .catch((error) => {
        console.log(error);
        return res.status(400).send({ success: false, error });
    });
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
    app.post('/api/transactions/', transactions_1.createTransaction);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc2VydmVyL3NyYy9hcHAudHMiLCJ3ZWJwYWNrOi8vLy4vc2VydmVyL3NyYy9jb25maWcvc2VjdXJpdHkudHMiLCJ3ZWJwYWNrOi8vLy4vc2VydmVyL3NyYy9jb250cm9sbGVycy9hcnRpc3QvaW5kZXgudHMiLCJ3ZWJwYWNrOi8vLy4vc2VydmVyL3NyYy9jb250cm9sbGVycy9wcmljZS9pbmRleC50cyIsIndlYnBhY2s6Ly8vLi9zZXJ2ZXIvc3JjL2NvbnRyb2xsZXJzL3RyYW5zYWN0aW9ucy9pbmRleC50cyIsIndlYnBhY2s6Ly8vLi9zZXJ2ZXIvc3JjL2NvbnRyb2xsZXJzL3VzZXIvaW5kZXgudHMiLCJ3ZWJwYWNrOi8vLy4vc2VydmVyL3NyYy9pbmRleC50cyIsIndlYnBhY2s6Ly8vLi9zZXJ2ZXIvc3JjL21vZGVscy9hcnRpc3QudHMiLCJ3ZWJwYWNrOi8vLy4vc2VydmVyL3NyYy9tb2RlbHMvaW5kZXgudHMiLCJ3ZWJwYWNrOi8vLy4vc2VydmVyL3NyYy9tb2RlbHMvcHJpY2UudHMiLCJ3ZWJwYWNrOi8vLy4vc2VydmVyL3NyYy9tb2RlbHMvdHJhY2sudHMiLCJ3ZWJwYWNrOi8vLy4vc2VydmVyL3NyYy9tb2RlbHMvdHJhbnNhY3Rpb24udHMiLCJ3ZWJwYWNrOi8vLy4vc2VydmVyL3NyYy9tb2RlbHMvdXNlci50cyIsIndlYnBhY2s6Ly8vLi9zZXJ2ZXIvc3JjL3JvdXRlcy9hcnRpc3QudHMiLCJ3ZWJwYWNrOi8vLy4vc2VydmVyL3NyYy9yb3V0ZXMvZnJpZW5kcy50cyIsIndlYnBhY2s6Ly8vLi9zZXJ2ZXIvc3JjL3JvdXRlcy9pbmRleC50cyIsIndlYnBhY2s6Ly8vLi9zZXJ2ZXIvc3JjL3JvdXRlcy90cmFuc2FjdGlvbnMudHMiLCJ3ZWJwYWNrOi8vLy4vc2VydmVyL3NyYy9yb3V0ZXMvdXNlci50cyIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJhdXRoLWhlYWRlclwiIiwid2VicGFjazovLy9leHRlcm5hbCBcImJhYmVsLXBvbHlmaWxsXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiYm9keS1wYXJzZXJcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJidWZmZXJcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJkb3RlbnZcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJleHByZXNzXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiZXhwcmVzcy1xdWVyeS1pbnRcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJoZXJva3UtbG9nZ2VyXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwibW9yZ2FuXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicGF0aFwiIiwid2VicGFjazovLy9leHRlcm5hbCBcInNlcXVlbGl6ZS10eXBlc2NyaXB0XCIiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtRQUFBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBOzs7UUFHQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMENBQTBDLGdDQUFnQztRQUMxRTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLHdEQUF3RCxrQkFBa0I7UUFDMUU7UUFDQSxpREFBaUQsY0FBYztRQUMvRDs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0EseUNBQXlDLGlDQUFpQztRQUMxRSxnSEFBZ0gsbUJBQW1CLEVBQUU7UUFDckk7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwyQkFBMkIsMEJBQTBCLEVBQUU7UUFDdkQsaUNBQWlDLGVBQWU7UUFDaEQ7UUFDQTtRQUNBOztRQUVBO1FBQ0Esc0RBQXNELCtEQUErRDs7UUFFckg7UUFDQTs7O1FBR0E7UUFDQTs7Ozs7Ozs7Ozs7Ozs7O0FDbEZBLDhE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QUcsQ0FBQyxHQUFHLEVBQUUsQ0FBQyxHQUFvQixFQUFFLEdBQXFCLEVBQVEsRUFBRTtRQUMvRCxNQUFNLFNBQVMsR0FBRyxPQUFPLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQztRQUNsQyxHQUFHLENBQUMsUUFBUSxDQUFDLFlBQVksRUFBRSxFQUFFLElBQUksRUFBRSxJQUFJLENBQUMsSUFBSSxDQUFDLFNBQVMsRUFBRSxnQkFBZ0IsQ0FBQyxFQUFFLENBQUMsQ0FBQztJQUNqRixDQUFDLENBQUMsQ0FBQztBQUNQLENBQUMsQ0FBQztBQUVGLGtCQUFlLE1BQU0sQ0FBQzs7Ozs7Ozs7Ozs7Ozs7O0FDL0J0QixnSUFBaUY7QUFFakYsa0JBQWUsQ0FBQyxHQUF3QixFQUFRLEVBQUU7SUFDOUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxvQkFBb0IsRUFBRSw4QkFBZSxDQUFDLENBQUM7SUFDL0MsR0FBRyxDQUFDLElBQUksQ0FBQyxvQkFBb0IsRUFBRSxnQ0FBaUIsQ0FBQyxDQUFDO0FBQ3RELENBQUMsQ0FBQzs7Ozs7Ozs7Ozs7Ozs7O0FDTEYsd0dBQThDO0FBRTlDLGtCQUFlLENBQUMsR0FBd0IsRUFBUSxFQUFFO0lBQzlDLEdBQUcsQ0FBQyxHQUFHLENBQUMsZUFBZSxFQUFFLGNBQU8sQ0FBQyxDQUFDO0FBQ3RDLENBQUMsQ0FBQzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ0xGLHdDOzs7Ozs7Ozs7OztBQ0FBLDJDOzs7Ozs7Ozs7OztBQ0FBLHdDOzs7Ozs7Ozs7OztBQ0FBLG1DOzs7Ozs7Ozs7OztBQ0FBLG1DOzs7Ozs7Ozs7OztBQ0FBLG9DOzs7Ozs7Ozs7OztBQ0FBLDhDOzs7Ozs7Ozs7OztBQ0FBLDBDOzs7Ozs7Ozs7OztBQ0FBLG1DOzs7Ozs7Ozs7OztBQ0FBLGlDOzs7Ozs7Ozs7OztBQ0FBLGlEIiwiZmlsZSI6ImRpc3QvaW5kZXguanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gMCk7XG4iLCJpbXBvcnQgKiBhcyBleHByZXNzIGZyb20gJ2V4cHJlc3MnO1xuaW1wb3J0IHNlY3VyaXR5IGZyb20gJy4vY29uZmlnL3NlY3VyaXR5JztcbmltcG9ydCBpbml0aWFsaXplIGZyb20gJy4vbW9kZWxzJztcbmltcG9ydCByb3V0ZXMgZnJvbSAnLi9yb3V0ZXMnO1xuXG5pbXBvcnQgbG9nZ2VyID0gcmVxdWlyZSgnbW9yZ2FuJyk7XG5jb25zdCBib2R5UGFyc2VyID0gcmVxdWlyZSgnYm9keS1wYXJzZXInKTtcbmltcG9ydCBwYXRoID0gcmVxdWlyZSgncGF0aCcpO1xuXG4vLyBDb25maWd1cmUgZG90ZW52IHRvIGxvYWQgaW4gdGhlIC5lbnYgZmlsZVxuaW1wb3J0IGRvdGVudiA9IHJlcXVpcmUoJ2RvdGVudicpO1xuY29uc3QgcmVzdWx0ID0gZG90ZW52LmNvbmZpZygpO1xuXG5jb25zdCBfX2Rpcm5hbWUgPSBwcm9jZXNzLmVudi5QV0Q7IC8vIENvdWxkIGJyZWFrIG9uIHByb2RcblxuY29uc3QgYXBwID0gZXhwcmVzcygpOyAvLyBTZXR1cCBleHByZXNzIGFwcFxuXG4vLyBBbGxvdyBjcm9zcyBvcmlnaW4gcmVxdWVzdHMgd2l0aCBhdXRob3JpemF0aW9uIChmb3IgQVBJIHB1cnBvc2VzKVxuYXBwLmFsbCgnKicsIChyZXE6IGV4cHJlc3MuUmVxdWVzdCwgcmVzOiBleHByZXNzLlJlc3BvbnNlLCBuZXh0OiBleHByZXNzLk5leHRGdW5jdGlvbik6IHZvaWQgPT4ge1xuICAgIHJlcy5oZWFkZXIoJ0FjY2Vzcy1Db250cm9sLUFsbG93LU9yaWdpbicsICcqJyk7XG4gICAgcmVzLmhlYWRlcignQWNjZXNzLUNvbnRyb2wtQWxsb3ctTWV0aG9kcycsICdQVVQsIEdFVCwgUE9TVCwgREVMRVRFLCBPUFRJT05TJyk7XG4gICAgcmVzLmhlYWRlcignQWNjZXNzLUNvbnRyb2wtQWxsb3ctQ3JlZGVudGlhbHMnLCAndHJ1ZScpO1xuICAgIHJlcy5oZWFkZXIoJ0FjY2Vzcy1Db250cm9sLUFsbG93LU9yaWdpbicsIGAke3JlcS5oZWFkZXJzLm9yaWdpbn1gKTtcbiAgICByZXMuaGVhZGVyKFxuICAgICAgICAnQWNjZXNzLUNvbnRyb2wtQWxsb3ctSGVhZGVycycsXG4gICAgICAgICdhY2NlcHQsIGNvbnRlbnQtdHlwZSwgeC1wYXJzZS1hcHBsaWNhdGlvbi1pZCwgeC1wYXJzZS1yZXN0LWFwaS1rZXksIHgtcGFyc2Utc2Vzc2lvbi10b2tlbiwgQVVUSE9SSVpBVElPTicsXG4gICAgKTtcbiAgICAvLyBJbnRlcmNlcHQgT1BUSU9OUyBtZXRob2RcbiAgICBpZiAoJ09QVElPTlMnID09IHJlcS5tZXRob2QpIHtcbiAgICAgICAgcmVzLnNlbmQoMjAwKTtcbiAgICB9IGVsc2Uge1xuICAgICAgICBuZXh0KCk7XG4gICAgfVxufSk7XG5cbi8vIFNldHVwIGF1dGhlbnRpY2F0aW9uIGFuZCBzZWN1cml0eVxuc2VjdXJpdHkoYXBwKTtcbmluaXRpYWxpemUoKTtcblxuLy8gTG9nIHJlcXVlc3RzIHRvIHRoZSBjb25zb2xlLlxuYXBwLnVzZShsb2dnZXIoJ2RldicpKTtcblxuLy8gUGFyc2UgaW5jb21pbmcgcmVxdWVzdHMgZGF0YSAoaHR0cHM6Ly9naXRodWIuY29tL2V4cHJlc3Nqcy9ib2R5LXBhcnNlcilcbi8vICArIGluY3JlYXNpbmcgYm9keSByZXF1ZXN0IGxpbWl0IHNpemVcbmFwcC51c2UoYm9keVBhcnNlci5qc29uKHsgbGltaXQ6ICcxNW1iJywgZXh0ZW5kZWQ6IHRydWUgfSkpO1xuYXBwLnVzZShib2R5UGFyc2VyLnVybGVuY29kZWQoeyBsaW1pdDogJzE1bWInLCBleHRlbmRlZDogdHJ1ZSB9KSk7XG5cbi8vIFBhcnNlIHF1ZXJpZXMgaW50byBudW1iZXJzLCBub3Qgc3RyaW5nc1xudmFyIHF1ZXJ5UGFyc2VyID0gcmVxdWlyZSgnZXhwcmVzcy1xdWVyeS1pbnQnKTtcbmFwcC51c2UoYm9keVBhcnNlci5qc29uKCkpO1xuYXBwLnVzZShxdWVyeVBhcnNlcigpKTtcblxuYXBwLnVzZSgnL3NjcmlwdHMnLCBleHByZXNzLnN0YXRpYyhwYXRoLmpvaW4oX19kaXJuYW1lLCAnLi4vLi4vY2xpZW50L2Rpc3QnKSkpO1xuXG4vLyBSZXF1aXJlIHJvdXRlcyBhbmQgc2ltdWx0YW5lb3VzbHkgYXR0YWNoIGFwcFxucm91dGVzKGFwcCk7XG5cbi8vIENhdGNoIGFsbCBpZiB0aGUgcm91dGVzIGRvZXNuJ3QgZmluZCBhIHZhbGlkIFVSTFxuYXBwLmdldChcbiAgICAnKicsXG4gICAgKHJlcTogZXhwcmVzcy5SZXF1ZXN0LCByZXM6IGV4cHJlc3MuUmVzcG9uc2UpOiBleHByZXNzLlJlc3BvbnNlID0+XG4gICAgICAgIHJlcy5zdGF0dXMoMjAwKS5zZW5kKHtcbiAgICAgICAgICAgIG1lc3NhZ2U6ICdGb3Igc29tZSByZWFzb24sIG5vbmUgb2YgdGhlIHJvdXRlcyBoaXQuLi4nLFxuICAgICAgICB9KSxcbik7XG5cbmV4cG9ydCBkZWZhdWx0IGFwcDtcbiIsImltcG9ydCAqIGFzIGF1dGhvcml6YXRpb24gZnJvbSAnYXV0aC1oZWFkZXInOyAvLyBGb3IgcGFyc2luZyBhdXRoZW50aWNhdGlvblxuaW1wb3J0IHsgQnVmZmVyIH0gZnJvbSAnYnVmZmVyJztcbmltcG9ydCAqIGFzIGV4cHJlc3MgZnJvbSAnZXhwcmVzcyc7XG5pbXBvcnQgKiBhcyBsb2dnZXIgZnJvbSAnaGVyb2t1LWxvZ2dlcic7IC8vIEZvciBsb2dnaW5nIHRvIHRoZSBsb2cgaGVyb2t1IGxvZyBmaWxlXG5cbi8vIFdoaXRlbGlzdGVkIElQc1xuY29uc3QgdmFsaWRJUHMgPSBbXG4gICAgJzo6ZmZmZjoxMjcuMC4wLjEnLCAvLyBMb2NhbCBob3N0XG4gICAgJzEyNy4wLjAuMScsIC8vIElQdjQgLSBsb2NhbGhvc3QgKD8pXG4gICAgJzo6MScsIC8vIElQdjZcbl07XG5cbi8vIFdoaXRlbGlzdGVkIHVybHNcbmNvbnN0IHZhbGlkUmVmZXJlcnMgPSBbJyhodHRwcz86Ly8pP2xvY2FsaG9zdDozMDAwLionXTtcbmNvbnN0IHZhbGlkVVJMcyA9IG5ldyBSZWdFeHAodmFsaWRSZWZlcmVycy5qb2luKCd8JyksICdpJyk7IC8vIENvbnZlcnQgdG8gcmVndWxhciBleHByZXNzaW9uXG5cbi8vIFdoaXRlbGlzdGVkIGFzc2V0cyAtIGFscmVhZHkgbm90IGluIHRoZSBibGFja2xpc3Qgc28gbm90IGVudGlyZWx5IG5lY2Nlc3NhcnkgYW55bW9yZVxuY29uc3QgdmFsaWRQYWdlcyA9IFsnLycsICcvZmF2aWNvbi5pY28nLCAnL3NjcmlwdHMvaW5kZXguanMnXTtcblxuLy8gQW55IHJvdXRlIGluIHRoZSBibGFja2xpc3Qgd2lsbCByZXF1aXJlIGF1dGhlbnRpY2F0aW9uXG5jb25zdCBibGFja2xpc3QgPSAvXFwvYXBpLiovOyAvLyBKdXN0IEFQSXNcblxuLy8gSGFuZGxlIDQwMSBlcnJvciBjb2RlIC0gVW5hdXRob3JpemVkXG5jb25zdCB1bmF1dGhvcml6ZWRSZXNwb25zZSA9IChyZXM6IGV4cHJlc3MuUmVzcG9uc2UpOiB2b2lkID0+IHtcbiAgICByZXMuc3RhdHVzKDQwMSkuc2VuZCgnUmVxdWVzdCBmYWlsZWQ6IEJhZCBhdXRoZW50aWNhdGlvbicpO1xufTtcblxuY29uc3Qgc2VjdXJpdHkgPSAoYXBwKTogdm9pZCA9PiB7XG4gICAgLy8gU2tpcCB3aGl0ZWxpc3RlZCBkb21haW5zXG4gICAgYXBwLnVzZSgocmVxOiBleHByZXNzLlJlcXVlc3QsIHJlczogZXhwcmVzcy5SZXNwb25zZSwgbmV4dDogZXhwcmVzcy5OZXh0RnVuY3Rpb24pOiB2b2lkID0+IHtcbiAgICAgICAgLy8gUmVxdWlyZSBhdXRoZW50aWNhdGlvbiBpZiBub3QgaW4gdGhlIHdoaXRlbGlzdCBvciBpcyBpbiBibGFja2xpc3RcbiAgICAgICAgY29uc3QgaW5XaGl0ZWxpc3QgPSB2YWxpZFBhZ2VzLmluZGV4T2YocmVxLm9yaWdpbmFsVXJsKSA+IC0xO1xuICAgICAgICBpZiAoIWluV2hpdGVsaXN0IHx8IGJsYWNrbGlzdC50ZXN0KHJlcS5vcmlnaW5hbFVybCkpIHtcbiAgICAgICAgICAgIC8vIEdldCB0aGUgSVAgYWRkcmVzc1xuICAgICAgICAgICAgY29uc3QgaXA6IHN0cmluZyA9IChyZXEuaGVhZGVyc1sneC1mb3J3YXJkZWQtZm9yJ10gfHxcbiAgICAgICAgICAgICAgICByZXEuY29ubmVjdGlvbi5yZW1vdGVBZGRyZXNzIHx8XG4gICAgICAgICAgICAgICAgcmVxLmlwKSBhcyBzdHJpbmc7XG4gICAgICAgICAgICBjb25zdCByZWZlcmVyID0gcmVxLmhlYWRlcignUmVmZXJlcicpOyAvLyBJZiB0aGUgcmVxdWVzdCBpcyBiZWluZyBzZW50IGJ5IGEgd2Vic2l0ZVxuICAgICAgICAgICAgY29uc29sZS5sb2coJ0lQOiAnLCBpcCk7XG4gICAgICAgICAgICBpZiAodmFsaWRJUHMuaW5kZXhPZihpcCkgPiAtMSkge1xuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKGlwLCAnaXMgYSB3aGl0ZWxpc3RlZCBJUCcpO1xuICAgICAgICAgICAgICAgIGxvZ2dlci5pbmZvKCdXaGl0ZWxpc3RlZCBJUCcsIHsgaXA6IGlwIH0pO1xuICAgICAgICAgICAgICAgIG5leHQoKTsgLy8gUmVxdWVzdCB2YWxpZFxuICAgICAgICAgICAgfSBlbHNlIGlmIChyZWZlcmVyICYmIHZhbGlkVVJMcy50ZXN0KHJlZmVyZXIpKSB7XG4gICAgICAgICAgICAgICAgbG9nZ2VyLmluZm8oJ1doaXRlbGlzdGVkIFJlZmVyZXInLCB7IHJlZmVyZXI6IHJlZmVyZXIgfSk7XG4gICAgICAgICAgICAgICAgbmV4dCgpOyAvLyBSZXF1ZXN0IHZhbGlkXG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIC8vIGxvZ2dlci5pbmZvKFwiQ2hlY2tpbmcgYXV0aG9yaXphdGlvbi4uLlwiKVxuICAgICAgICAgICAgICAgIGNvbnN0IGF1dGhIZWFkZXIgPSByZXEuaGVhZGVyWydhdXRob3JpemF0aW9uJ11cbiAgICAgICAgICAgICAgICAgICAgPyByZXEuaGVhZGVyWydhdXRob3JpemF0aW9uJ11cbiAgICAgICAgICAgICAgICAgICAgOiByZXEuaGVhZGVyc1snYXV0aG9yaXphdGlvbiddO1xuXG4gICAgICAgICAgICAgICAgLy8gRmFpbCBpZiBubyBiYXNpYyBhdXRoZW50aWNhdGlvbiBwcm92aWRlZFxuICAgICAgICAgICAgICAgIGlmICghYXV0aEhlYWRlcikge1xuICAgICAgICAgICAgICAgICAgICAvLyBObyBhdXRob3JpemF0aW9uXG4gICAgICAgICAgICAgICAgICAgIHJlcy5zZXQoJ1dXVy1BdXRoZW50aWNhdGUnLCAnQmFzaWMgcmVhbG09XCJBdXRob3JpemF0aW9uIFJlcXVpcmVkXCInKTsgLy8gUHJvbXB0IGNoYWxsZW5nZSBwYXNzd29yZFxuICAgICAgICAgICAgICAgICAgICBsb2dnZXIuZXJyb3IoJ05vIEF1dGhlbnRpY2F0aW9uJywge1xuICAgICAgICAgICAgICAgICAgICAgICAgaXA6IGlwLFxuICAgICAgICAgICAgICAgICAgICAgICAgcmVmZXJlcjogcmVmZXJlcixcbiAgICAgICAgICAgICAgICAgICAgICAgIHVybDogcmVxLm9yaWdpbmFsVXJsLFxuICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHVuYXV0aG9yaXplZFJlc3BvbnNlKHJlcyk7XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgLy8gUmV0cmVpdmUgYXV0aG9yaXphdGlvbiB0b2tlblxuICAgICAgICAgICAgICAgIGNvbnN0IGF1dGggPSBhdXRob3JpemF0aW9uLnBhcnNlKGF1dGhIZWFkZXIpO1xuXG4gICAgICAgICAgICAgICAgLy8gR2V0IHRoZSBiYXNpYyBhdXRoIGNvbXBvbmVudFxuICAgICAgICAgICAgICAgIGNvbnN0IFt1biwgcHddID0gbmV3IEJ1ZmZlcihhdXRoLnRva2VuLCAnYmFzZTY0JykudG9TdHJpbmcoKS5zcGxpdCgnOicsIDIpO1xuXG4gICAgICAgICAgICAgICAgLy8gVmVyaWZ5IGF1dGhlbnRpY2F0aW9uLlxuICAgICAgICAgICAgICAgIGlmICh1biAhPT0gJ2FkbWluJyB8fCBwdyAhPT0gcHJvY2Vzcy5lbnYuQURNSU5fQVBJX0tFWSkge1xuICAgICAgICAgICAgICAgICAgICBsb2dnZXIuZXJyb3IoJ1VuYXV0aG9yaXplZCBDcmVkZW50aWFscycsIHsgdXNlcm5hbWU6IHVuLCBwYXNzd29yZDogcHcgfSk7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiB1bmF1dGhvcml6ZWRSZXNwb25zZShyZXMpO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIGxvZ2dlci5pbmZvKCdVc2VyIEF1dGhlbnRpY2F0ZWQnLCB7IHVzZXJuYW1lOiB1biwgcGFzc3dvcmQ6IHB3IH0pO1xuICAgICAgICAgICAgICAgIG5leHQoKTsgLy8gUmVxdWVzdCB2YWxpZFxuICAgICAgICAgICAgfVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgLy8gU2tpcCBhdXRoZW50aWNhdGlvblxuICAgICAgICAgICAgbG9nZ2VyLmluZm8oJ1doaXRlbGlzdCBvciBub3QgaW4gYmxhY2tsaXN0JywgeyB1cmw6IHJlcS5vcmlnaW5hbFVybCB9KTtcbiAgICAgICAgICAgIG5leHQoKTtcbiAgICAgICAgfVxuICAgIH0pO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgc2VjdXJpdHk7XG4iLCJpbXBvcnQgKiBhcyBleHByZXNzIGZyb20gJ2V4cHJlc3MnO1xuaW1wb3J0IEFydGlzdCBmcm9tICcuLi8uLi9tb2RlbHMvYXJ0aXN0JztcbmltcG9ydCBQcmljZSBmcm9tICcuLi8uLi9tb2RlbHMvcHJpY2UnO1xuaW1wb3J0IFRyYWNrIGZyb20gJy4uLy4uL21vZGVscy90cmFjayc7XG5pbXBvcnQgeyBzdHJpcFByaWNlIH0gZnJvbSAnLi4vcHJpY2UnO1xuXG5leHBvcnQgY29uc3QgZ2V0QnJvd3NlQXJ0aXN0cyA9IChyZXE6IGV4cHJlc3MuUmVxdWVzdCwgcmVzOiBleHByZXNzLlJlc3BvbnNlKTogYW55ID0+IHtcbiAgICByZXR1cm4gQXJ0aXN0LmZpbmRBbGwoKVxuICAgICAgICAudGhlbihcbiAgICAgICAgICAgIChhcnRpc3RzOiBBcnRpc3RbXSk6IGV4cHJlc3MuUmVzcG9uc2UgPT4ge1xuICAgICAgICAgICAgICAgIHJldHVybiByZXMuc3RhdHVzKDIwMCkuc2VuZCh7XG4gICAgICAgICAgICAgICAgICAgIHN1Y2Nlc3M6IHRydWUsXG4gICAgICAgICAgICAgICAgICAgIGFydGlzdHMsXG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9LFxuICAgICAgICApXG4gICAgICAgIC5jYXRjaCgoZXJyb3I6IEVycm9yKTogZXhwcmVzcy5SZXNwb25zZSA9PiByZXMuc3RhdHVzKDQwMCkuc2VuZChlcnJvcikpOyAvLyBFcnJvclxufTtcblxuZXhwb3J0IGNvbnN0IGdldEFydGlzdHMgPSAocmVxOiBleHByZXNzLlJlcXVlc3QsIHJlczogZXhwcmVzcy5SZXNwb25zZSk6IGFueSA9PiB7XG4gICAgcmV0dXJuIEFydGlzdC5maW5kQWxsKHsgaW5jbHVkZTogW1ByaWNlLCBUcmFja10gfSlcbiAgICAgICAgLnRoZW4oXG4gICAgICAgICAgICAoYXJ0aXN0czogQXJ0aXN0W10pOiBleHByZXNzLlJlc3BvbnNlID0+IHtcbiAgICAgICAgICAgICAgICBjb25zdCBkYXRhID0gYXJ0aXN0cy5tYXAoKGFydGlzdDogQXJ0aXN0KSA9PiAoe1xuICAgICAgICAgICAgICAgICAgICAuLi5hcnRpc3QuZGF0YVZhbHVlcyxcbiAgICAgICAgICAgICAgICAgICAgcHJpY2VzOiBhcnRpc3QucHJpY2VzLm1hcCgocHJpY2UpID0+IHN0cmlwUHJpY2UocHJpY2UpKSxcbiAgICAgICAgICAgICAgICB9KSk7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHJlcy5zdGF0dXMoMjAwKS5zZW5kKHtcbiAgICAgICAgICAgICAgICAgICAgc3VjY2VzczogdHJ1ZSxcbiAgICAgICAgICAgICAgICAgICAgYXJ0aXN0czogZGF0YSxcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH0sXG4gICAgICAgIClcbiAgICAgICAgLmNhdGNoKChlcnJvcjogRXJyb3IpOiBleHByZXNzLlJlc3BvbnNlID0+IHJlcy5zdGF0dXMoNDAwKS5zZW5kKGVycm9yKSk7IC8vIEVycm9yXG59O1xuXG5leHBvcnQgaW50ZXJmYWNlIEFydGlzdEdldFJlcXVlc3QgZXh0ZW5kcyBleHByZXNzLlJlcXVlc3Qge1xuICAgIGlkOiBzdHJpbmc7XG59XG5cbmV4cG9ydCBjb25zdCBnZXRBcnRpc3RCeUlkID0gKHJlcTogQXJ0aXN0R2V0UmVxdWVzdCwgcmVzOiBleHByZXNzLlJlc3BvbnNlKTogYW55ID0+IHtcbiAgICBjb25zdCB7IGlkIH0gPSByZXEucGFyYW1zO1xuICAgIHJldHVybiBBcnRpc3QuZmluZEJ5SWQoaWQsIHsgaW5jbHVkZTogW1ByaWNlLCBUcmFja10gfSlcbiAgICAgICAgLnRoZW4oXG4gICAgICAgICAgICAoYXJ0aXN0OiBBcnRpc3QpOiBleHByZXNzLlJlc3BvbnNlID0+IHtcbiAgICAgICAgICAgICAgICBjb25zdCBkYXRhID0ge1xuICAgICAgICAgICAgICAgICAgICAuLi5hcnRpc3QuZGF0YVZhbHVlcyxcbiAgICAgICAgICAgICAgICAgICAgcHJpY2VzOiBhcnRpc3QucHJpY2VzLm1hcCgocHJpY2UpID0+IHN0cmlwUHJpY2UocHJpY2UpKSxcbiAgICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgICAgIHJldHVybiByZXMuc3RhdHVzKDIwMCkuc2VuZCh7XG4gICAgICAgICAgICAgICAgICAgIHN1Y2Nlc3M6IHRydWUsXG4gICAgICAgICAgICAgICAgICAgIGFydGlzdDogZGF0YSxcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH0sXG4gICAgICAgIClcbiAgICAgICAgLmNhdGNoKFxuICAgICAgICAgICAgKGVycm9yOiBFcnJvcik6IGV4cHJlc3MuUmVzcG9uc2UgPT5cbiAgICAgICAgICAgICAgICByZXMuc3RhdHVzKDQwMCkuc2VuZCh7XG4gICAgICAgICAgICAgICAgICAgIHN1Y2Nlc3M6IGZhbHNlLFxuICAgICAgICAgICAgICAgICAgICBlcnJvcixcbiAgICAgICAgICAgICAgICB9KSxcbiAgICAgICAgKTsgLy8gRXJyb3Jcbn07XG4iLCJpbXBvcnQgUHJpY2UgZnJvbSAnLi4vLi4vbW9kZWxzL3ByaWNlJztcblxuZXhwb3J0IGNvbnN0IHN0cmlwUHJpY2UgPSAocHJpY2U6IFByaWNlKSA9PiAoe1xuICAgIGlkOiBwcmljZS5pZCxcbiAgICBkYXRlOiBwcmljZS5kYXRlLFxuICAgIHByaWNlOiBwcmljZS5wcmljZSxcbn0pO1xuIiwiaW1wb3J0ICogYXMgZXhwcmVzcyBmcm9tICdleHByZXNzJztcbmltcG9ydCBBcnRpc3QgZnJvbSAnLi4vLi4vbW9kZWxzL2FydGlzdCc7XG5pbXBvcnQgVHJhbnNhY3Rpb24gZnJvbSAnLi4vLi4vbW9kZWxzL3RyYW5zYWN0aW9uJztcbmltcG9ydCBVc2VyIGZyb20gJy4uLy4uL21vZGVscy91c2VyJztcblxuZXhwb3J0IGNvbnN0IGdldFRyYW5zYWN0aW9ucyA9IChyZXE6IGV4cHJlc3MuUmVxdWVzdCwgcmVzOiBleHByZXNzLlJlc3BvbnNlKTogYW55ID0+IHtcbiAgICByZXR1cm4gVHJhbnNhY3Rpb24uZmluZEFsbCh7XG4gICAgICAgIGluY2x1ZGU6IFtVc2VyLCBBcnRpc3RdLFxuICAgICAgICBsaW1pdDogMTAsXG4gICAgICAgIG9yZGVyOiBbWydkYXRlJywgJ0RFU0MnXV0sXG4gICAgfSlcbiAgICAgICAgLnRoZW4oXG4gICAgICAgICAgICAodHJhbnNhY3Rpb25zOiBUcmFuc2FjdGlvbltdKTogZXhwcmVzcy5SZXNwb25zZSA9PlxuICAgICAgICAgICAgICAgIHJlcy5zdGF0dXMoMjAwKS5zZW5kKHsgc3VjY2VzczogdHJ1ZSwgdHJhbnNhY3Rpb25zIH0pLFxuICAgICAgICApXG4gICAgICAgIC5jYXRjaCgoZXJyb3I6IEVycm9yKTogZXhwcmVzcy5SZXNwb25zZSA9PiByZXMuc3RhdHVzKDQwMCkuc2VuZCh7IHN1Y2Nlc3M6IGZhbHNlLCBlcnJvciB9KSk7IC8vIEVycm9yXG59O1xuXG5leHBvcnQgaW50ZXJmYWNlIENyZWF0ZVRyYW5zYWN0aW9uIGV4dGVuZHMgZXhwcmVzcy5SZXF1ZXN0IHtcbiAgICBib2R5OiB7XG4gICAgICAgIGFydGlzdElkOiBudW1iZXI7XG4gICAgICAgIHByaWNlSWQ6IG51bWJlcjtcbiAgICB9O1xufVxuXG5leHBvcnQgY29uc3QgY3JlYXRlVHJhbnNhY3Rpb24gPSAocmVxOiBDcmVhdGVUcmFuc2FjdGlvbiwgcmVzOiBleHByZXNzLlJlc3BvbnNlKTogYW55ID0+IHtcbiAgICBjb25zdCB7XG4gICAgICAgIGJvZHk6IHsgYXJ0aXN0SWQsIHByaWNlSWQgfSxcbiAgICB9ID0gcmVxO1xuICAgIHJldHVybiBUcmFuc2FjdGlvbi5jcmVhdGUoe1xuICAgICAgICBkYXRlOiBuZXcgRGF0ZSgpLFxuICAgICAgICB1c2VySWQ6IDEsXG4gICAgICAgIGFydGlzdElkLFxuICAgICAgICBwcmljZUlkLFxuICAgIH0pXG4gICAgICAgIC50aGVuKFxuICAgICAgICAgICAgKHRyYW5zYWN0aW9uKTogZXhwcmVzcy5SZXNwb25zZSA9PiByZXMuc3RhdHVzKDIwMCkuc2VuZCh7IHN1Y2Nlc3M6IHRydWUsIHRyYW5zYWN0aW9uIH0pLFxuICAgICAgICApXG4gICAgICAgIC5jYXRjaCgoZXJyb3I6IEVycm9yKTogZXhwcmVzcy5SZXNwb25zZSA9PiByZXMuc3RhdHVzKDQwMCkuc2VuZCh7IHN1Y2Nlc3M6IGZhbHNlLCBlcnJvciB9KSk7IC8vIEVycm9yXG59O1xuIiwiaW1wb3J0ICogYXMgZXhwcmVzcyBmcm9tICdleHByZXNzJztcbmltcG9ydCBBcnRpc3QgZnJvbSAnLi4vLi4vbW9kZWxzL2FydGlzdCc7XG5pbXBvcnQgUHJpY2UgZnJvbSAnLi4vLi4vbW9kZWxzL3ByaWNlJztcbmltcG9ydCBUcmFuc2FjdGlvbiBmcm9tICcuLi8uLi9tb2RlbHMvdHJhbnNhY3Rpb24nO1xuaW1wb3J0IFVzZXIgZnJvbSAnLi4vLi4vbW9kZWxzL3VzZXInO1xuXG5jb25zdCBnZXRTY29yZSA9ICh1c2VyOiBVc2VyKTogbnVtYmVyID0+IHtcbiAgICBsZXQgc2NvcmUgPSAwO1xuICAgIHVzZXIudHJhbnNhY3Rpb25zLmZvckVhY2goKHRyYW5zYWN0aW9uKSA9PiB7XG4gICAgICAgIHNjb3JlICs9IHRyYW5zYWN0aW9uLmFydGlzdC5tb250aGx5TGlzdGVucyAtIHRyYW5zYWN0aW9uLnByaWNlLnByaWNlO1xuICAgIH0pO1xuXG4gICAgcmV0dXJuIHNjb3JlO1xufTtcblxuZXhwb3J0IGludGVyZmFjZSBVc2VyR2V0UmVxdWVzdCBleHRlbmRzIGV4cHJlc3MuUmVxdWVzdCB7XG4gICAgaWQ6IHN0cmluZztcbn1cblxuZXhwb3J0IGNvbnN0IGdldFVzZXIgPSAocmVxOiBVc2VyR2V0UmVxdWVzdCwgcmVzOiBleHByZXNzLlJlc3BvbnNlKTogYW55ID0+IHtcbiAgICBjb25zdCB7IGlkIH0gPSByZXEucGFyYW1zO1xuICAgIHJldHVybiBVc2VyLmZpbmRCeUlkKGlkLCB7XG4gICAgICAgIGluY2x1ZGU6IFtcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBtb2RlbDogVHJhbnNhY3Rpb24sXG4gICAgICAgICAgICAgICAgaW5jbHVkZTogW1ByaWNlLCBBcnRpc3RdLFxuICAgICAgICAgICAgfSxcbiAgICAgICAgXSxcbiAgICB9KVxuICAgICAgICAudGhlbihcbiAgICAgICAgICAgICh1c2VyOiBVc2VyKTogZXhwcmVzcy5SZXNwb25zZSA9PlxuICAgICAgICAgICAgICAgIHJlcy5zdGF0dXMoMjAwKS5zZW5kKHtcbiAgICAgICAgICAgICAgICAgICAgc3VjY2VzczogdHJ1ZSxcbiAgICAgICAgICAgICAgICAgICAgc2NvcmU6IGdldFNjb3JlKHVzZXIpLFxuICAgICAgICAgICAgICAgICAgICB1c2VyOiB1c2VyLFxuICAgICAgICAgICAgICAgIH0pLFxuICAgICAgICApXG4gICAgICAgIC5jYXRjaChcbiAgICAgICAgICAgIChlcnJvcjogRXJyb3IpOiBleHByZXNzLlJlc3BvbnNlID0+IHtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhlcnJvcik7XG5cbiAgICAgICAgICAgICAgICByZXR1cm4gcmVzLnN0YXR1cyg0MDApLnNlbmQoeyBzdWNjZXNzOiBmYWxzZSwgZXJyb3IgfSk7XG4gICAgICAgICAgICB9LFxuICAgICAgICApOyAvLyBFcnJvclxufTtcblxuZXhwb3J0IGNvbnN0IGdldEZyaWVuZHMgPSAocmVxOiBleHByZXNzLlJlcXVlc3QsIHJlczogZXhwcmVzcy5SZXNwb25zZSk6IGFueSA9PiB7XG4gICAgcmV0dXJuIFVzZXIuZmluZEFsbCh7XG4gICAgICAgIGluY2x1ZGU6IFtcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBtb2RlbDogVHJhbnNhY3Rpb24sXG4gICAgICAgICAgICAgICAgaW5jbHVkZTogW1ByaWNlLCBBcnRpc3RdLFxuICAgICAgICAgICAgfSxcbiAgICAgICAgXSxcbiAgICB9KVxuICAgICAgICAudGhlbihcbiAgICAgICAgICAgICh1c2VyczogVXNlcltdKTogZXhwcmVzcy5SZXNwb25zZSA9PlxuICAgICAgICAgICAgICAgIHJlcy5zdGF0dXMoMjAwKS5zZW5kKHtcbiAgICAgICAgICAgICAgICAgICAgc3VjY2VzczogdHJ1ZSxcbiAgICAgICAgICAgICAgICAgICAgdXNlcnM6IHVzZXJzXG4gICAgICAgICAgICAgICAgICAgICAgICAvLyAuZmlsdGVyKCh1c2VyKSA9PiB1c2VyLmlkICE9IDEpXG4gICAgICAgICAgICAgICAgICAgICAgICAubWFwKCh1c2VyKSA9PiAoe1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHVzZXIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc2NvcmU6IGdldFNjb3JlKHVzZXIpLFxuICAgICAgICAgICAgICAgICAgICAgICAgfSkpLFxuICAgICAgICAgICAgICAgIH0pLFxuICAgICAgICApXG4gICAgICAgIC5jYXRjaCgoZXJyb3I6IEVycm9yKTogZXhwcmVzcy5SZXNwb25zZSA9PiByZXMuc3RhdHVzKDQwMCkuc2VuZCh7IHN1Y2Nlc3M6IGZhbHNlLCBlcnJvciB9KSk7IC8vIEVycm9yXG59O1xuIiwiLy8gQXBwbGljYXRpb24gZW50cnksIHNldHRpbmcgdXAgc2VydmVyXG5pbXBvcnQgYXBwIGZyb20gJy4vYXBwJzsgLy8gVGhlIGV4cHJlc3MgYXBwIHdlIGp1c3QgY3JlYXRlZFxuXG5jb25zdCBwb3J0ID0gcGFyc2VJbnQocHJvY2Vzcy5lbnYuUE9SVCwgMTApIHx8IDUwMDA7IC8vIFVzZSBwb3J0IDUwMDBcbmFwcC5zZXQoJ3BvcnQnLCBwb3J0KTtcblxuLy8gMC4wLjAuMCBtYWtlcyBpdCBhdmFpbGFibGUgb24geW91ciBsb2NhbCBuZXR3b3JrXG4vLyBhcHAubGlzdGVuKHBvcnQsICcwLjAuMC4wJyk7XG5hcHAubGlzdGVuKHBvcnQpO1xuIiwiaW1wb3J0IHsgQ29sdW1uLCBDcmVhdGVkQXQsIEhhc01hbnksIE1vZGVsLCBUYWJsZSwgVXBkYXRlZEF0IH0gZnJvbSAnc2VxdWVsaXplLXR5cGVzY3JpcHQnO1xuaW1wb3J0IFByaWNlIGZyb20gJy4vcHJpY2UnO1xuaW1wb3J0IFRyYWNrIGZyb20gJy4vdHJhY2snO1xuaW1wb3J0IFRyYW5zYWN0aW9uIGZyb20gJy4vdHJhbnNhY3Rpb24nO1xuXG5AVGFibGUoe1xuICAgIG1vZGVsTmFtZTogJ0FydGlzdCcsXG4gICAgdGFibGVOYW1lOiAnQXJ0aXN0JyxcbiAgICBuYW1lOiB7XG4gICAgICAgIHNpbmd1bGFyOiAnQXJ0aXN0JyxcbiAgICAgICAgcGx1cmFsOiAnQXJ0aXN0cycsXG4gICAgfSxcbiAgICBmcmVlemVUYWJsZU5hbWU6IHRydWUsXG59KVxuY2xhc3MgQXJ0aXN0IGV4dGVuZHMgTW9kZWw8QXJ0aXN0PiB7XG4gICAgQENvbHVtblxuICAgIG5hbWU6IHN0cmluZztcblxuICAgIEBDb2x1bW5cbiAgICBzcG90aWZ5VXJsOiBzdHJpbmc7XG5cbiAgICBAQ29sdW1uXG4gICAgbW9udGhseUxpc3RlbnM6IG51bWJlcjtcblxuICAgIEBDb2x1bW5cbiAgICBmb2xsb3dlcnM6IG51bWJlcjtcblxuICAgIEBDb2x1bW5cbiAgICBiaW86IHN0cmluZztcblxuICAgIEBDb2x1bW5cbiAgICBmb3VuZGVkWWVhcjogbnVtYmVyO1xuXG4gICAgQENvbHVtblxuICAgIGltYWdlOiBzdHJpbmc7XG5cbiAgICBAQ29sdW1uXG4gICAgc3BvdGlmeUlkOiBzdHJpbmc7XG5cbiAgICBAQ29sdW1uXG4gICAgcG9wdWxhcml0eTogbnVtYmVyO1xuXG4gICAgQENvbHVtblxuICAgIGdlbnJlOiBzdHJpbmc7XG5cbiAgICBASGFzTWFueSgoKSA9PiBQcmljZSlcbiAgICBwcmljZXM6IFByaWNlW107XG5cbiAgICBASGFzTWFueSgoKSA9PiBUcmFuc2FjdGlvbilcbiAgICB0cmFuc2FjdGlvbnM6IFRyYW5zYWN0aW9uW107XG5cbiAgICBASGFzTWFueSgoKSA9PiBUcmFjaylcbiAgICB0cmFja3M6IFRyYWNrW107XG5cbiAgICBAQ3JlYXRlZEF0XG4gICAgY3JlYXRlZEF0OiBEYXRlO1xuXG4gICAgQFVwZGF0ZWRBdFxuICAgIHVwZGF0ZWRBdDogRGF0ZTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgQXJ0aXN0O1xuIiwiaW1wb3J0IHsgU2VxdWVsaXplIH0gZnJvbSAnc2VxdWVsaXplLXR5cGVzY3JpcHQnO1xuaW1wb3J0IEFydGlzdCBmcm9tICcuL2FydGlzdCc7XG5pbXBvcnQgUHJpY2UgZnJvbSAnLi9wcmljZSc7XG5pbXBvcnQgVHJhY2sgZnJvbSAnLi90cmFjayc7XG5pbXBvcnQgVHJhbnNhY3Rpb24gZnJvbSAnLi90cmFuc2FjdGlvbic7XG5pbXBvcnQgVXNlciBmcm9tICcuL3VzZXInO1xuXG5pbXBvcnQgbG9nZ2VyID0gcmVxdWlyZSgnaGVyb2t1LWxvZ2dlcicpOyAvLyBGb3IgbG9nZ2luZyB0byB0aGUgbG9nIGhlcm9rdSBsb2cgZmlsZVxuXG5pbXBvcnQgY29uZmlnRmlsZSA9IHJlcXVpcmUoJy4uL2NvbmZpZy9jb25maWcuanNvbicpO1xuXG5kZWNsYXJlIHZhciBwcm9jZXNzOiB7XG4gICAgZW52OiB7XG4gICAgICAgIE5PREVfRU5WOiBzdHJpbmc7XG4gICAgICAgIERBVEFCQVNFX1VSTDogc3RyaW5nO1xuICAgIH07XG59O1xuXG5leHBvcnQgZGVmYXVsdCAoKTogdm9pZCA9PiB7XG4gICAgdmFyIGVudiA9IHByb2Nlc3MuZW52Lk5PREVfRU5WIHx8ICdkZXZlbG9wbWVudCc7IC8vIERldGVybWluZSBpZiB1c2luZyBkZXZlbG9wbWVudFxuICAgIC8vIGNvbnN0IF9fZGlybmFtZSA9IHByb2Nlc3MuZW52LlBXRDsgLy8gQ291bGQgYnJlYWsgb24gcHJvZFxuICAgIC8vIGNvbnN0IGN1cnJlbnREaXIgPSBwYXRoLmpvaW4oX19kaXJuYW1lLCAnLi9zZXJ2ZXIvc3JjL21vZGVscycpO1xuXG4gICAgLy8gUmVndWxhciBgbW9kdWxlLmZpbGVuYW1lYCBpcyB1bmRlZmluZWQgaW4gbG9jYWwgZGV2XG4gICAgLy8gY29uc3QgZmlsZW5hbWUgPSBtb2R1bGUuZmlsZW5hbWUgIT09IHVuZGVmaW5lZCA/IG1vZHVsZS5maWxlbmFtZSA6ICdpbmRleC50cyc7XG4gICAgLy8gdmFyIGJhc2VuYW1lID0gcGF0aC5iYXNlbmFtZShmaWxlbmFtZSk7XG5cbiAgICB2YXIgZGI6IGFueSA9IHt9O1xuXG4gICAgLy8gSSB1c2UgdGhlIG5vZGUtY29uZmlnIHBhY2thZ2UgdG8gbWFuYWdlIHRoZSBEQiBjb25maWcgeW91IGNhbiBjaG9vc2VcbiAgICAvLyB0byBzdGljayB3aXRoIHRoZSBvcmlnaW5hbCB2ZXJzaW9uLiBBbmQgSSByZW1vdmVkIGVudmlyb25tZW50IHZhcmlhYmxlXG4gICAgLy8gc3VwcG9ydCBiZWNhdXNlIEkgZG9uJ3QgbmVlZCBpdC5cbiAgICBsZXQgc2VxdWVsaXplOiBhbnkgPSB7fTtcbiAgICBjb25zb2xlLmxvZyhwcm9jZXNzLmVudi5OT0RFX0VOVik7IC8vIFRPRE86IEZvciBzb21lIHJlYXNvbiwgaW4gcHJvZHVjdGlvbiwgdGhpcyByZWFkcyBhcyAnZGV2ZWxvcG1lbnQnXG4gICAgbG9nZ2VyLmluZm8oYHByb2Nlc3MuZW52Lk5PREVfRU5WOiAke3Byb2Nlc3MuZW52Lk5PREVfRU5WfWApO1xuICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViA9PSAncHJvZHVjdGlvbicpIHtcbiAgICAgICAgLy8gRnJvbSB0aGUgZW52aXJvbm1lbnQsIGV4dHJhY3QgdGhlIGtleSB3aXRoIHRoZSBuYW1lIHByb3ZpZGVkIGluIHRoZSBjb25maWcgYXMgdXNlX2Vudl92YXJpYWJsZVxuICAgICAgICAvLyBhbmQgdXNlIHRoYXQgdG8gZXN0YWJsaXNoIGEgY29ubmVjdGlvbiB0byBvdXIgZGF0YWJhc2UuXG4gICAgICAgIGNvbnNvbGUubG9nKCdVc2luZyBkYXRhYmFzZSBVUkw6JywgcHJvY2Vzcy5lbnYuREFUQUJBU0VfVVJMKTtcbiAgICAgICAgbG9nZ2VyLmluZm8oJ1VzaW5nIGRhdGFiYXNlIFVSTDonLCB7IHVybDogcHJvY2Vzcy5lbnYuREFUQUJBU0VfVVJMIH0pO1xuICAgICAgICBzZXF1ZWxpemUgPSBuZXcgU2VxdWVsaXplKHByb2Nlc3MuZW52LkRBVEFCQVNFX1VSTCk7IC8vIEVzdGFibGlzaCBjb25uZWN0aW9uIHVzaW5nIGVudmlyb25tZW50IHZhcmlhYmxlc1xuICAgIH0gZWxzZSB7XG4gICAgICAgIHZhciBjb25maWcgPSBjb25maWdGaWxlW2Vudl07IC8vIElmIGxvY2FsLCB1c2UgY29uZmlnXG4gICAgICAgIGNvbnNvbGUubG9nKCdVc2luZyBsb2NhbCBjb25maWd1cmF0aW9uOicsIGNvbmZpZyk7XG4gICAgICAgIGxvZ2dlci5pbmZvKCdVc2luZyBsb2NhbCBjb25maWd1cmF0aW9uOicsIHsgY29uZmlnIH0pO1xuICAgICAgICBzZXF1ZWxpemUgPSBuZXcgU2VxdWVsaXplKHtcbiAgICAgICAgICAgIC4uLmNvbmZpZyxcbiAgICAgICAgICAgIC8vIGRhdGFiYXNlOiBjb25maWcuZGF0YWJhc2UsXG4gICAgICAgICAgICAvLyB1c2VybmFtZTogY29uZmlnLnVzZXJuYW1lLFxuICAgICAgICAgICAgLy8gcGFzc3dvcmQ6IGNvbmZpZy5wYXNzd29yZCxcbiAgICAgICAgfSk7IC8vIENvbm5lY3RcbiAgICB9XG5cbiAgICBzZXF1ZWxpemUuYWRkTW9kZWxzKFtUcmFuc2FjdGlvbiwgVXNlciwgQXJ0aXN0LCBQcmljZSwgVHJhY2tdKTtcbiAgICAvLyBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgLy8gICAgIHNlcXVlbGl6ZS5zeW5jKCk7IC8vIERvbid0IGNvcnJ1cHQgcHJvZHVjdGlvbiBkYXRhXG4gICAgLy8gfSBlbHNlIHtcbiAgICAvLyBzZXF1ZWxpemUuc3luYyh7IGZvcmNlOiB0cnVlIH0pOyAvLyBUT0RPOiBSZW1vdmUgYmVmb3JlIGxpdmVcbiAgICBzZXF1ZWxpemUuc3luYyh7IGFsdGVyOiB0cnVlIH0pO1xuICAgIC8vIHNlcXVlbGl6ZS5zeW5jKCk7XG4gICAgLy8gfVxuXG4gICAgZGIuc2VxdWVsaXplID0gc2VxdWVsaXplO1xuICAgIGRiLlNlcXVlbGl6ZSA9IFNlcXVlbGl6ZTtcbn07XG4iLCJpbXBvcnQgeyBCZWxvbmdzVG8sIENvbHVtbiwgRm9yZWlnbktleSwgSGFzTWFueSwgTW9kZWwsIFRhYmxlIH0gZnJvbSAnc2VxdWVsaXplLXR5cGVzY3JpcHQnO1xuaW1wb3J0IEFydGlzdCBmcm9tICcuL2FydGlzdCc7XG5pbXBvcnQgVHJhbnNhY3Rpb24gZnJvbSAnLi90cmFuc2FjdGlvbic7XG5cbkBUYWJsZSh7XG4gICAgbmFtZToge1xuICAgICAgICBzaW5ndWxhcjogJ1ByaWNlJyxcbiAgICAgICAgcGx1cmFsOiAnUHJpY2VzJyxcbiAgICB9LFxuICAgIGZyZWV6ZVRhYmxlTmFtZTogdHJ1ZSxcbn0pXG5jbGFzcyBQcmljZSBleHRlbmRzIE1vZGVsPFByaWNlPiB7XG4gICAgQENvbHVtblxuICAgIGRhdGU6IERhdGU7XG5cbiAgICBAQ29sdW1uXG4gICAgcHJpY2U6IG51bWJlcjtcblxuICAgIEBGb3JlaWduS2V5KCgpID0+IEFydGlzdClcbiAgICBAQ29sdW1uXG4gICAgYXJ0aXN0SWQ6IG51bWJlcjtcblxuICAgIEBCZWxvbmdzVG8oKCkgPT4gQXJ0aXN0KVxuICAgIGFydGlzdDogQXJ0aXN0O1xuXG4gICAgQEhhc01hbnkoKCkgPT4gVHJhbnNhY3Rpb24pXG4gICAgdHJhbnNhY3Rpb25zOiBUcmFuc2FjdGlvbltdO1xufVxuXG5leHBvcnQgZGVmYXVsdCBQcmljZTtcbiIsImltcG9ydCB7IEJlbG9uZ3NUbywgQ29sdW1uLCBGb3JlaWduS2V5LCBNb2RlbCwgVGFibGUgfSBmcm9tICdzZXF1ZWxpemUtdHlwZXNjcmlwdCc7XG5pbXBvcnQgQXJ0aXN0IGZyb20gJy4vYXJ0aXN0JztcblxuQFRhYmxlKHtcbiAgICBuYW1lOiB7XG4gICAgICAgIHNpbmd1bGFyOiAnVHJhY2snLFxuICAgICAgICBwbHVyYWw6ICdUcmFja3MnLFxuICAgIH0sXG4gICAgZnJlZXplVGFibGVOYW1lOiB0cnVlLFxufSlcbmNsYXNzIFRyYWNrIGV4dGVuZHMgTW9kZWw8VHJhY2s+IHtcbiAgICBAQ29sdW1uXG4gICAgdHJhY2tTcG90aWZ5SWQ6IHN0cmluZztcblxuICAgIEBDb2x1bW5cbiAgICBuYW1lOiBzdHJpbmc7XG5cbiAgICBAQ29sdW1uXG4gICAgZHVyYXRpb25NczogbnVtYmVyO1xuXG4gICAgQENvbHVtblxuICAgIHVybDogc3RyaW5nO1xuXG4gICAgQENvbHVtblxuICAgIGFsYnVtTmFtZTogc3RyaW5nO1xuXG4gICAgQENvbHVtblxuICAgIHRodW1ibmFpbDogc3RyaW5nO1xuXG4gICAgQENvbHVtblxuICAgIHJlbGVhc2VEYXRlOiBzdHJpbmc7XG5cbiAgICBARm9yZWlnbktleSgoKSA9PiBBcnRpc3QpXG4gICAgQENvbHVtblxuICAgIGFydGlzdElkOiBudW1iZXI7XG5cbiAgICBAQmVsb25nc1RvKCgpID0+IEFydGlzdClcbiAgICBhcnRpc3Q6IEFydGlzdDtcbn1cblxuZXhwb3J0IGRlZmF1bHQgVHJhY2s7XG4iLCJpbXBvcnQgeyBCZWxvbmdzVG8sIENvbHVtbiwgRm9yZWlnbktleSwgTW9kZWwsIFRhYmxlIH0gZnJvbSAnc2VxdWVsaXplLXR5cGVzY3JpcHQnO1xuaW1wb3J0IEFydGlzdCBmcm9tICcuL2FydGlzdCc7XG5pbXBvcnQgUHJpY2UgZnJvbSAnLi9wcmljZSc7XG5pbXBvcnQgVXNlciBmcm9tICcuL3VzZXInO1xuXG5AVGFibGUoe1xuICAgIG5hbWU6IHtcbiAgICAgICAgc2luZ3VsYXI6ICdUcmFuc2FjdGlvbicsXG4gICAgICAgIHBsdXJhbDogJ1RyYW5zYWN0aW9ucycsXG4gICAgfSxcbiAgICBmcmVlemVUYWJsZU5hbWU6IHRydWUsXG59KVxuY2xhc3MgVHJhbnNhY3Rpb24gZXh0ZW5kcyBNb2RlbDxUcmFuc2FjdGlvbj4ge1xuICAgIEBDb2x1bW5cbiAgICBkYXRlOiBEYXRlO1xuXG4gICAgQEZvcmVpZ25LZXkoKCkgPT4gVXNlcilcbiAgICBAQ29sdW1uXG4gICAgdXNlcklkOiBudW1iZXI7XG5cbiAgICBAQmVsb25nc1RvKCgpID0+IFVzZXIpXG4gICAgdXNlcjogVXNlcjtcblxuICAgIEBGb3JlaWduS2V5KCgpID0+IEFydGlzdClcbiAgICBAQ29sdW1uXG4gICAgYXJ0aXN0SWQ6IG51bWJlcjtcblxuICAgIEBCZWxvbmdzVG8oKCkgPT4gQXJ0aXN0KVxuICAgIGFydGlzdDogQXJ0aXN0O1xuXG4gICAgQEZvcmVpZ25LZXkoKCkgPT4gUHJpY2UpXG4gICAgQENvbHVtblxuICAgIHByaWNlSWQ6IG51bWJlcjtcblxuICAgIEBCZWxvbmdzVG8oKCkgPT4gUHJpY2UpXG4gICAgcHJpY2U6IFByaWNlO1xufVxuXG5leHBvcnQgZGVmYXVsdCBUcmFuc2FjdGlvbjtcbiIsImltcG9ydCB7XG4gICAgQWxsb3dOdWxsLFxuICAgIENvbHVtbixcbiAgICBDcmVhdGVkQXQsXG4gICAgSGFzTWFueSxcbiAgICBNb2RlbCxcbiAgICBUYWJsZSxcbiAgICBVcGRhdGVkQXQsXG59IGZyb20gJ3NlcXVlbGl6ZS10eXBlc2NyaXB0JztcbmltcG9ydCBUcmFuc2FjdGlvbiBmcm9tICcuL3RyYW5zYWN0aW9uJztcblxuQFRhYmxlKHsgdGFibGVOYW1lOiAnVXNlcicgfSlcbmNsYXNzIFVzZXIgZXh0ZW5kcyBNb2RlbDxVc2VyPiB7XG4gICAgQEFsbG93TnVsbChmYWxzZSlcbiAgICBAQ29sdW1uXG4gICAgdXNlcm5hbWU6IHN0cmluZztcblxuICAgIEBDb2x1bW5cbiAgICBmaXJzdE5hbWU6IHN0cmluZztcblxuICAgIEBDb2x1bW5cbiAgICBsYXN0TmFtZTogc3RyaW5nO1xuXG4gICAgQEhhc01hbnkoKCkgPT4gVHJhbnNhY3Rpb24pXG4gICAgdHJhbnNhY3Rpb25zOiBUcmFuc2FjdGlvbltdO1xuXG4gICAgQENyZWF0ZWRBdFxuICAgIGNyZWF0ZWRBdDogRGF0ZTtcblxuICAgIEBVcGRhdGVkQXRcbiAgICB1cGRhdGVkQXQ6IERhdGU7XG59XG5cbmV4cG9ydCBkZWZhdWx0IFVzZXI7XG4iLCJpbXBvcnQgKiBhcyBleHByZXNzIGZyb20gJ2V4cHJlc3MnO1xuaW1wb3J0IHsgZ2V0QXJ0aXN0QnlJZCwgZ2V0QXJ0aXN0cywgZ2V0QnJvd3NlQXJ0aXN0cyB9IGZyb20gJy4uL2NvbnRyb2xsZXJzL2FydGlzdCc7XG5cbmV4cG9ydCBkZWZhdWx0IChhcHA6IGV4cHJlc3MuQXBwbGljYXRpb24pID0+IHtcbiAgICBhcHAuZ2V0KCcvYXBpL2FydGlzdC8nLCBnZXRBcnRpc3RzKTtcbiAgICBhcHAuZ2V0KCcvYXBpL2FydGlzdC9icm93c2UnLCBnZXRCcm93c2VBcnRpc3RzKTtcblxuICAgIGFwcC5nZXQoJy9hcGkvYXJ0aXN0LzppZCcsIGdldEFydGlzdEJ5SWQpO1xufTtcbiIsImltcG9ydCAqIGFzIGV4cHJlc3MgZnJvbSAnZXhwcmVzcyc7XG5pbXBvcnQgeyBnZXRGcmllbmRzIH0gZnJvbSAnLi4vY29udHJvbGxlcnMvdXNlcic7XG5cbmV4cG9ydCBkZWZhdWx0IChhcHA6IGV4cHJlc3MuQXBwbGljYXRpb24pOiB2b2lkID0+IHtcbiAgICBhcHAuZ2V0KCcvYXBpL2ZyaWVuZHMnLCBnZXRGcmllbmRzKTtcbn07XG4iLCIvLyBzZXJ2ZXIvcm91dGVzL2luZGV4LmpzXG4vLyBBUEkgcm91dGUgdGhhdCBtYXBzIGZ1bmN0aW9uYWxpdHlcbmltcG9ydCAqIGFzIGV4cHJlc3MgZnJvbSAnZXhwcmVzcyc7XG5pbXBvcnQgKiBhcyBwYXRoIGZyb20gJ3BhdGgnO1xuaW1wb3J0IEFydGlzdFJvdXRlcyBmcm9tICcuL2FydGlzdCc7XG5pbXBvcnQgRnJpZW5kUm91dGVzIGZyb20gJy4vZnJpZW5kcyc7XG5pbXBvcnQgVHJhbnNhY3Rpb25Sb3V0ZXMgZnJvbSAnLi90cmFuc2FjdGlvbnMnO1xuaW1wb3J0IFVzZXJSb3V0ZXMgZnJvbSAnLi91c2VyJztcblxuLy8gUmVxdWlyZXMgYW4gYXBwIGFzIGFuIGlucHV0IHNvIGNhbiBkaXJlY3QgdGhlIHVzZXIgYWNjb3JkaW5nbHlcbmNvbnN0IHJvdXRlcyA9IChhcHA6IGV4cHJlc3MuQXBwbGljYXRpb24pOiB2b2lkID0+IHtcbiAgICAvLyBNb2R1bGFyIHJvdXRlc1xuICAgIFVzZXJSb3V0ZXMoYXBwKTtcbiAgICBBcnRpc3RSb3V0ZXMoYXBwKTtcbiAgICBGcmllbmRSb3V0ZXMoYXBwKTtcbiAgICBUcmFuc2FjdGlvblJvdXRlcyhhcHApO1xuXG4gICAgLy8gU2VydmUgc3RhdGljIGZpbGVzXG4gICAgYXBwLnVzZShleHByZXNzLnN0YXRpYygnLi9jbGllbnQvYnVpbGQnKSk7XG5cbiAgICBhcHAuZ2V0KCcvZmF2aWNvbi5wbmcnLCAocmVxOiBleHByZXNzLlJlcXVlc3QsIHJlczogZXhwcmVzcy5SZXNwb25zZSk6IHZvaWQgPT4ge1xuICAgICAgICBjb25zdCBfX2Rpcm5hbWUgPSBwcm9jZXNzLmVudi5QV0Q7XG4gICAgICAgIHJlcy5zZW5kRmlsZSgnZmF2aWNvbi5wbmcnLCB7IHJvb3Q6IHBhdGguam9pbihfX2Rpcm5hbWUsICcuL2NsaWVudC9hc3NldHMnKSB9KTtcbiAgICB9KTtcblxuICAgIC8vIENsaWVudCBhcHAgZW50cnkgaW5kZXguaHRtbCBmaWxlIC0gcmVhY3Qgcm91dGVyXG4gICAgYXBwLmdldCgnKicsIChyZXE6IGV4cHJlc3MuUmVxdWVzdCwgcmVzOiBleHByZXNzLlJlc3BvbnNlKTogdm9pZCA9PiB7XG4gICAgICAgIGNvbnN0IF9fZGlybmFtZSA9IHByb2Nlc3MuZW52LlBXRDtcbiAgICAgICAgcmVzLnNlbmRGaWxlKCdpbmRleC5odG1sJywgeyByb290OiBwYXRoLmpvaW4oX19kaXJuYW1lLCAnLi9jbGllbnQvYnVpbGQnKSB9KTsgLy8gUmVuZGVyIGNsaWVudFxuICAgIH0pO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgcm91dGVzO1xuIiwiaW1wb3J0ICogYXMgZXhwcmVzcyBmcm9tICdleHByZXNzJztcbmltcG9ydCB7IGNyZWF0ZVRyYW5zYWN0aW9uLCBnZXRUcmFuc2FjdGlvbnMgfSBmcm9tICcuLi9jb250cm9sbGVycy90cmFuc2FjdGlvbnMnO1xuXG5leHBvcnQgZGVmYXVsdCAoYXBwOiBleHByZXNzLkFwcGxpY2F0aW9uKTogdm9pZCA9PiB7XG4gICAgYXBwLmdldCgnL2FwaS90cmFuc2FjdGlvbnMvJywgZ2V0VHJhbnNhY3Rpb25zKTtcbiAgICBhcHAucG9zdCgnL2FwaS90cmFuc2FjdGlvbnMvJywgY3JlYXRlVHJhbnNhY3Rpb24pO1xufTtcbiIsImltcG9ydCAqIGFzIGV4cHJlc3MgZnJvbSAnZXhwcmVzcyc7XG5pbXBvcnQgeyBnZXRVc2VyIH0gZnJvbSAnLi4vY29udHJvbGxlcnMvdXNlcic7XG5cbmV4cG9ydCBkZWZhdWx0IChhcHA6IGV4cHJlc3MuQXBwbGljYXRpb24pOiB2b2lkID0+IHtcbiAgICBhcHAuZ2V0KCcvYXBpL3VzZXIvOmlkJywgZ2V0VXNlcik7XG59O1xuIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiYXV0aC1oZWFkZXJcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiYmFiZWwtcG9seWZpbGxcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiYm9keS1wYXJzZXJcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiYnVmZmVyXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImRvdGVudlwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJleHByZXNzXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImV4cHJlc3MtcXVlcnktaW50XCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImhlcm9rdS1sb2dnZXJcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwibW9yZ2FuXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInBhdGhcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwic2VxdWVsaXplLXR5cGVzY3JpcHRcIik7Il0sInNvdXJjZVJvb3QiOiIifQ==