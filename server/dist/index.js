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
        .then((user) => res.status(200).send(user))
        .catch((error) => res.status(400).send(error));
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
    app.get('/api/artist/:id', artist_1.getArtistById);
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
const user_1 = __webpack_require__(/*! ./user */ "./server/src/routes/user.ts");
const routes = (app) => {
    user_1.default(app);
    artist_1.default(app);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc2VydmVyL3NyYy9hcHAudHMiLCJ3ZWJwYWNrOi8vLy4vc2VydmVyL3NyYy9jb25maWcvc2VjdXJpdHkudHMiLCJ3ZWJwYWNrOi8vLy4vc2VydmVyL3NyYy9jb250cm9sbGVycy9hcnRpc3QvaW5kZXgudHMiLCJ3ZWJwYWNrOi8vLy4vc2VydmVyL3NyYy9jb250cm9sbGVycy9wcmljZS9pbmRleC50cyIsIndlYnBhY2s6Ly8vLi9zZXJ2ZXIvc3JjL2NvbnRyb2xsZXJzL3VzZXIvaW5kZXgudHMiLCJ3ZWJwYWNrOi8vLy4vc2VydmVyL3NyYy9pbmRleC50cyIsIndlYnBhY2s6Ly8vLi9zZXJ2ZXIvc3JjL21vZGVscy9hcnRpc3QudHMiLCJ3ZWJwYWNrOi8vLy4vc2VydmVyL3NyYy9tb2RlbHMvaW5kZXgudHMiLCJ3ZWJwYWNrOi8vLy4vc2VydmVyL3NyYy9tb2RlbHMvcHJpY2UudHMiLCJ3ZWJwYWNrOi8vLy4vc2VydmVyL3NyYy9tb2RlbHMvdHJhY2sudHMiLCJ3ZWJwYWNrOi8vLy4vc2VydmVyL3NyYy9tb2RlbHMvdHJhbnNhY3Rpb24udHMiLCJ3ZWJwYWNrOi8vLy4vc2VydmVyL3NyYy9tb2RlbHMvdXNlci50cyIsIndlYnBhY2s6Ly8vLi9zZXJ2ZXIvc3JjL3JvdXRlcy9hcnRpc3QudHMiLCJ3ZWJwYWNrOi8vLy4vc2VydmVyL3NyYy9yb3V0ZXMvaW5kZXgudHMiLCJ3ZWJwYWNrOi8vLy4vc2VydmVyL3NyYy9yb3V0ZXMvdXNlci50cyIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJhdXRoLWhlYWRlclwiIiwid2VicGFjazovLy9leHRlcm5hbCBcImJhYmVsLXBvbHlmaWxsXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiYm9keS1wYXJzZXJcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJidWZmZXJcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJkb3RlbnZcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJleHByZXNzXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiZXhwcmVzcy1xdWVyeS1pbnRcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJoZXJva3UtbG9nZ2VyXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwibW9yZ2FuXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicGF0aFwiIiwid2VicGFjazovLy9leHRlcm5hbCBcInNlcXVlbGl6ZS10eXBlc2NyaXB0XCIiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtRQUFBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBOzs7UUFHQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMENBQTBDLGdDQUFnQztRQUMxRTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLHdEQUF3RCxrQkFBa0I7UUFDMUU7UUFDQSxpREFBaUQsY0FBYztRQUMvRDs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0EseUNBQXlDLGlDQUFpQztRQUMxRSxnSEFBZ0gsbUJBQW1CLEVBQUU7UUFDckk7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwyQkFBMkIsMEJBQTBCLEVBQUU7UUFDdkQsaUNBQWlDLGVBQWU7UUFDaEQ7UUFDQTtRQUNBOztRQUVBO1FBQ0Esc0RBQXNELCtEQUErRDs7UUFFckg7UUFDQTs7O1FBR0E7UUFDQTs7Ozs7Ozs7Ozs7Ozs7O0FDbEZBLDhEQUFtQztBQUNuQyxtR0FBeUM7QUFDekMscUZBQWtDO0FBQ2xDLHFGQUE4QjtBQUU5QiwyREFBa0M7QUFDbEMsTUFBTSxVQUFVLEdBQUcsbUJBQU8sQ0FBQyxnQ0FBYSxDQUFDLENBQUM7QUFDMUMscURBQThCO0FBRzlCLDJEQUFrQztBQUNsQyxNQUFNLE1BQU0sR0FBRyxN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Qix3R0FBOEM7QUFFOUMsa0JBQWUsQ0FBQyxHQUF3QixFQUFRLEVBQUU7SUFDOUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxlQUFlLEVBQUUsY0FBTyxDQUFDLENBQUM7QUFDdEMsQ0FBQyxDQUFDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDTEYsd0M7Ozs7Ozs7Ozs7O0FDQUEsMkM7Ozs7Ozs7Ozs7O0FDQUEsd0M7Ozs7Ozs7Ozs7O0FDQUEsbUM7Ozs7Ozs7Ozs7O0FDQUEsbUM7Ozs7Ozs7Ozs7O0FDQUEsb0M7Ozs7Ozs7Ozs7O0FDQUEsOEM7Ozs7Ozs7Ozs7O0FDQUEsMEM7Ozs7Ozs7Ozs7O0FDQUEsbUM7Ozs7Ozs7Ozs7O0FDQUEsaUM7Ozs7Ozs7Ozs7O0FDQUEsaUQiLCJmaWxlIjoiZGlzdC9pbmRleC5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSAwKTtcbiIsImltcG9ydCAqIGFzIGV4cHJlc3MgZnJvbSAnZXhwcmVzcyc7XG5pbXBvcnQgc2VjdXJpdHkgZnJvbSAnLi9jb25maWcvc2VjdXJpdHknO1xuaW1wb3J0IGluaXRpYWxpemUgZnJvbSAnLi9tb2RlbHMnO1xuaW1wb3J0IHJvdXRlcyBmcm9tICcuL3JvdXRlcyc7XG5cbmltcG9ydCBsb2dnZXIgPSByZXF1aXJlKCdtb3JnYW4nKTtcbmNvbnN0IGJvZHlQYXJzZXIgPSByZXF1aXJlKCdib2R5LXBhcnNlcicpO1xuaW1wb3J0IHBhdGggPSByZXF1aXJlKCdwYXRoJyk7XG5cbi8vIENvbmZpZ3VyZSBkb3RlbnYgdG8gbG9hZCBpbiB0aGUgLmVudiBmaWxlXG5pbXBvcnQgZG90ZW52ID0gcmVxdWlyZSgnZG90ZW52Jyk7XG5jb25zdCByZXN1bHQgPSBkb3RlbnYuY29uZmlnKCk7XG5cbmNvbnN0IF9fZGlybmFtZSA9IHByb2Nlc3MuZW52LlBXRDsgLy8gQ291bGQgYnJlYWsgb24gcHJvZFxuXG5jb25zdCBhcHAgPSBleHByZXNzKCk7IC8vIFNldHVwIGV4cHJlc3MgYXBwXG5cbi8vIEFsbG93IGNyb3NzIG9yaWdpbiByZXF1ZXN0cyB3aXRoIGF1dGhvcml6YXRpb24gKGZvciBBUEkgcHVycG9zZXMpXG5hcHAuYWxsKCcqJywgKHJlcTogZXhwcmVzcy5SZXF1ZXN0LCByZXM6IGV4cHJlc3MuUmVzcG9uc2UsIG5leHQ6IGV4cHJlc3MuTmV4dEZ1bmN0aW9uKTogdm9pZCA9PiB7XG4gICAgcmVzLmhlYWRlcignQWNjZXNzLUNvbnRyb2wtQWxsb3ctT3JpZ2luJywgJyonKTtcbiAgICByZXMuaGVhZGVyKCdBY2Nlc3MtQ29udHJvbC1BbGxvdy1NZXRob2RzJywgJ1BVVCwgR0VULCBQT1NULCBERUxFVEUsIE9QVElPTlMnKTtcbiAgICByZXMuaGVhZGVyKCdBY2Nlc3MtQ29udHJvbC1BbGxvdy1DcmVkZW50aWFscycsICd0cnVlJyk7XG4gICAgcmVzLmhlYWRlcignQWNjZXNzLUNvbnRyb2wtQWxsb3ctT3JpZ2luJywgYCR7cmVxLmhlYWRlcnMub3JpZ2lufWApO1xuICAgIHJlcy5oZWFkZXIoXG4gICAgICAgICdBY2Nlc3MtQ29udHJvbC1BbGxvdy1IZWFkZXJzJyxcbiAgICAgICAgJ2FjY2VwdCwgY29udGVudC10eXBlLCB4LXBhcnNlLWFwcGxpY2F0aW9uLWlkLCB4LXBhcnNlLXJlc3QtYXBpLWtleSwgeC1wYXJzZS1zZXNzaW9uLXRva2VuLCBBVVRIT1JJWkFUSU9OJyxcbiAgICApO1xuICAgIC8vIEludGVyY2VwdCBPUFRJT05TIG1ldGhvZFxuICAgIGlmICgnT1BUSU9OUycgPT0gcmVxLm1ldGhvZCkge1xuICAgICAgICByZXMuc2VuZCgyMDApO1xuICAgIH0gZWxzZSB7XG4gICAgICAgIG5leHQoKTtcbiAgICB9XG59KTtcblxuLy8gU2V0dXAgYXV0aGVudGljYXRpb24gYW5kIHNlY3VyaXR5XG5zZWN1cml0eShhcHApO1xuaW5pdGlhbGl6ZSgpO1xuXG4vLyBMb2cgcmVxdWVzdHMgdG8gdGhlIGNvbnNvbGUuXG5hcHAudXNlKGxvZ2dlcignZGV2JykpO1xuXG4vLyBQYXJzZSBpbmNvbWluZyByZXF1ZXN0cyBkYXRhIChodHRwczovL2dpdGh1Yi5jb20vZXhwcmVzc2pzL2JvZHktcGFyc2VyKVxuLy8gICsgaW5jcmVhc2luZyBib2R5IHJlcXVlc3QgbGltaXQgc2l6ZVxuYXBwLnVzZShib2R5UGFyc2VyLmpzb24oeyBsaW1pdDogJzE1bWInLCBleHRlbmRlZDogdHJ1ZSB9KSk7XG5hcHAudXNlKGJvZHlQYXJzZXIudXJsZW5jb2RlZCh7IGxpbWl0OiAnMTVtYicsIGV4dGVuZGVkOiB0cnVlIH0pKTtcblxuLy8gUGFyc2UgcXVlcmllcyBpbnRvIG51bWJlcnMsIG5vdCBzdHJpbmdzXG52YXIgcXVlcnlQYXJzZXIgPSByZXF1aXJlKCdleHByZXNzLXF1ZXJ5LWludCcpO1xuYXBwLnVzZShib2R5UGFyc2VyLmpzb24oKSk7XG5hcHAudXNlKHF1ZXJ5UGFyc2VyKCkpO1xuXG5hcHAudXNlKCcvc2NyaXB0cycsIGV4cHJlc3Muc3RhdGljKHBhdGguam9pbihfX2Rpcm5hbWUsICcuLi8uLi9jbGllbnQvZGlzdCcpKSk7XG5cbi8vIFJlcXVpcmUgcm91dGVzIGFuZCBzaW11bHRhbmVvdXNseSBhdHRhY2ggYXBwXG5yb3V0ZXMoYXBwKTtcblxuLy8gQ2F0Y2ggYWxsIGlmIHRoZSByb3V0ZXMgZG9lc24ndCBmaW5kIGEgdmFsaWQgVVJMXG5hcHAuZ2V0KFxuICAgICcqJyxcbiAgICAocmVxOiBleHByZXNzLlJlcXVlc3QsIHJlczogZXhwcmVzcy5SZXNwb25zZSk6IGV4cHJlc3MuUmVzcG9uc2UgPT5cbiAgICAgICAgcmVzLnN0YXR1cygyMDApLnNlbmQoe1xuICAgICAgICAgICAgbWVzc2FnZTogJ0ZvciBzb21lIHJlYXNvbiwgbm9uZSBvZiB0aGUgcm91dGVzIGhpdC4uLicsXG4gICAgICAgIH0pLFxuKTtcblxuZXhwb3J0IGRlZmF1bHQgYXBwO1xuIiwiaW1wb3J0ICogYXMgYXV0aG9yaXphdGlvbiBmcm9tICdhdXRoLWhlYWRlcic7IC8vIEZvciBwYXJzaW5nIGF1dGhlbnRpY2F0aW9uXG5pbXBvcnQgeyBCdWZmZXIgfSBmcm9tICdidWZmZXInO1xuaW1wb3J0ICogYXMgZXhwcmVzcyBmcm9tICdleHByZXNzJztcbmltcG9ydCAqIGFzIGxvZ2dlciBmcm9tICdoZXJva3UtbG9nZ2VyJzsgLy8gRm9yIGxvZ2dpbmcgdG8gdGhlIGxvZyBoZXJva3UgbG9nIGZpbGVcblxuLy8gV2hpdGVsaXN0ZWQgSVBzXG5jb25zdCB2YWxpZElQcyA9IFtcbiAgICAnOjpmZmZmOjEyNy4wLjAuMScsIC8vIExvY2FsIGhvc3RcbiAgICAnMTI3LjAuMC4xJywgLy8gSVB2NCAtIGxvY2FsaG9zdCAoPylcbiAgICAnOjoxJywgLy8gSVB2NlxuXTtcblxuLy8gV2hpdGVsaXN0ZWQgdXJsc1xuY29uc3QgdmFsaWRSZWZlcmVycyA9IFsnKGh0dHBzPzovLyk/bG9jYWxob3N0OjMwMDAuKiddO1xuY29uc3QgdmFsaWRVUkxzID0gbmV3IFJlZ0V4cCh2YWxpZFJlZmVyZXJzLmpvaW4oJ3wnKSwgJ2knKTsgLy8gQ29udmVydCB0byByZWd1bGFyIGV4cHJlc3Npb25cblxuLy8gV2hpdGVsaXN0ZWQgYXNzZXRzIC0gYWxyZWFkeSBub3QgaW4gdGhlIGJsYWNrbGlzdCBzbyBub3QgZW50aXJlbHkgbmVjY2Vzc2FyeSBhbnltb3JlXG5jb25zdCB2YWxpZFBhZ2VzID0gWycvJywgJy9mYXZpY29uLmljbycsICcvc2NyaXB0cy9pbmRleC5qcyddO1xuXG4vLyBBbnkgcm91dGUgaW4gdGhlIGJsYWNrbGlzdCB3aWxsIHJlcXVpcmUgYXV0aGVudGljYXRpb25cbmNvbnN0IGJsYWNrbGlzdCA9IC9cXC9hcGkuKi87IC8vIEp1c3QgQVBJc1xuXG4vLyBIYW5kbGUgNDAxIGVycm9yIGNvZGUgLSBVbmF1dGhvcml6ZWRcbmNvbnN0IHVuYXV0aG9yaXplZFJlc3BvbnNlID0gKHJlczogZXhwcmVzcy5SZXNwb25zZSk6IHZvaWQgPT4ge1xuICAgIHJlcy5zdGF0dXMoNDAxKS5zZW5kKCdSZXF1ZXN0IGZhaWxlZDogQmFkIGF1dGhlbnRpY2F0aW9uJyk7XG59O1xuXG5jb25zdCBzZWN1cml0eSA9IChhcHApOiB2b2lkID0+IHtcbiAgICAvLyBTa2lwIHdoaXRlbGlzdGVkIGRvbWFpbnNcbiAgICBhcHAudXNlKChyZXE6IGV4cHJlc3MuUmVxdWVzdCwgcmVzOiBleHByZXNzLlJlc3BvbnNlLCBuZXh0OiBleHByZXNzLk5leHRGdW5jdGlvbik6IHZvaWQgPT4ge1xuICAgICAgICAvLyBSZXF1aXJlIGF1dGhlbnRpY2F0aW9uIGlmIG5vdCBpbiB0aGUgd2hpdGVsaXN0IG9yIGlzIGluIGJsYWNrbGlzdFxuICAgICAgICBjb25zdCBpbldoaXRlbGlzdCA9IHZhbGlkUGFnZXMuaW5kZXhPZihyZXEub3JpZ2luYWxVcmwpID4gLTE7XG4gICAgICAgIGlmICghaW5XaGl0ZWxpc3QgfHwgYmxhY2tsaXN0LnRlc3QocmVxLm9yaWdpbmFsVXJsKSkge1xuICAgICAgICAgICAgLy8gR2V0IHRoZSBJUCBhZGRyZXNzXG4gICAgICAgICAgICBjb25zdCBpcDogc3RyaW5nID0gKHJlcS5oZWFkZXJzWyd4LWZvcndhcmRlZC1mb3InXSB8fFxuICAgICAgICAgICAgICAgIHJlcS5jb25uZWN0aW9uLnJlbW90ZUFkZHJlc3MgfHxcbiAgICAgICAgICAgICAgICByZXEuaXApIGFzIHN0cmluZztcbiAgICAgICAgICAgIGNvbnN0IHJlZmVyZXIgPSByZXEuaGVhZGVyKCdSZWZlcmVyJyk7IC8vIElmIHRoZSByZXF1ZXN0IGlzIGJlaW5nIHNlbnQgYnkgYSB3ZWJzaXRlXG4gICAgICAgICAgICBjb25zb2xlLmxvZygnSVA6ICcsIGlwKTtcbiAgICAgICAgICAgIGlmICh2YWxpZElQcy5pbmRleE9mKGlwKSA+IC0xKSB7XG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coaXAsICdpcyBhIHdoaXRlbGlzdGVkIElQJyk7XG4gICAgICAgICAgICAgICAgbG9nZ2VyLmluZm8oJ1doaXRlbGlzdGVkIElQJywgeyBpcDogaXAgfSk7XG4gICAgICAgICAgICAgICAgbmV4dCgpOyAvLyBSZXF1ZXN0IHZhbGlkXG4gICAgICAgICAgICB9IGVsc2UgaWYgKHJlZmVyZXIgJiYgdmFsaWRVUkxzLnRlc3QocmVmZXJlcikpIHtcbiAgICAgICAgICAgICAgICBsb2dnZXIuaW5mbygnV2hpdGVsaXN0ZWQgUmVmZXJlcicsIHsgcmVmZXJlcjogcmVmZXJlciB9KTtcbiAgICAgICAgICAgICAgICBuZXh0KCk7IC8vIFJlcXVlc3QgdmFsaWRcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgLy8gbG9nZ2VyLmluZm8oXCJDaGVja2luZyBhdXRob3JpemF0aW9uLi4uXCIpXG4gICAgICAgICAgICAgICAgY29uc3QgYXV0aEhlYWRlciA9IHJlcS5oZWFkZXJbJ2F1dGhvcml6YXRpb24nXVxuICAgICAgICAgICAgICAgICAgICA/IHJlcS5oZWFkZXJbJ2F1dGhvcml6YXRpb24nXVxuICAgICAgICAgICAgICAgICAgICA6IHJlcS5oZWFkZXJzWydhdXRob3JpemF0aW9uJ107XG5cbiAgICAgICAgICAgICAgICAvLyBGYWlsIGlmIG5vIGJhc2ljIGF1dGhlbnRpY2F0aW9uIHByb3ZpZGVkXG4gICAgICAgICAgICAgICAgaWYgKCFhdXRoSGVhZGVyKSB7XG4gICAgICAgICAgICAgICAgICAgIC8vIE5vIGF1dGhvcml6YXRpb25cbiAgICAgICAgICAgICAgICAgICAgcmVzLnNldCgnV1dXLUF1dGhlbnRpY2F0ZScsICdCYXNpYyByZWFsbT1cIkF1dGhvcml6YXRpb24gUmVxdWlyZWRcIicpOyAvLyBQcm9tcHQgY2hhbGxlbmdlIHBhc3N3b3JkXG4gICAgICAgICAgICAgICAgICAgIGxvZ2dlci5lcnJvcignTm8gQXV0aGVudGljYXRpb24nLCB7XG4gICAgICAgICAgICAgICAgICAgICAgICBpcDogaXAsXG4gICAgICAgICAgICAgICAgICAgICAgICByZWZlcmVyOiByZWZlcmVyLFxuICAgICAgICAgICAgICAgICAgICAgICAgdXJsOiByZXEub3JpZ2luYWxVcmwsXG4gICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gdW5hdXRob3JpemVkUmVzcG9uc2UocmVzKTtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAvLyBSZXRyZWl2ZSBhdXRob3JpemF0aW9uIHRva2VuXG4gICAgICAgICAgICAgICAgY29uc3QgYXV0aCA9IGF1dGhvcml6YXRpb24ucGFyc2UoYXV0aEhlYWRlcik7XG5cbiAgICAgICAgICAgICAgICAvLyBHZXQgdGhlIGJhc2ljIGF1dGggY29tcG9uZW50XG4gICAgICAgICAgICAgICAgY29uc3QgW3VuLCBwd10gPSBuZXcgQnVmZmVyKGF1dGgudG9rZW4sICdiYXNlNjQnKS50b1N0cmluZygpLnNwbGl0KCc6JywgMik7XG5cbiAgICAgICAgICAgICAgICAvLyBWZXJpZnkgYXV0aGVudGljYXRpb24uXG4gICAgICAgICAgICAgICAgaWYgKHVuICE9PSAnYWRtaW4nIHx8IHB3ICE9PSBwcm9jZXNzLmVudi5BRE1JTl9BUElfS0VZKSB7XG4gICAgICAgICAgICAgICAgICAgIGxvZ2dlci5lcnJvcignVW5hdXRob3JpemVkIENyZWRlbnRpYWxzJywgeyB1c2VybmFtZTogdW4sIHBhc3N3b3JkOiBwdyB9KTtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHVuYXV0aG9yaXplZFJlc3BvbnNlKHJlcyk7XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgbG9nZ2VyLmluZm8oJ1VzZXIgQXV0aGVudGljYXRlZCcsIHsgdXNlcm5hbWU6IHVuLCBwYXNzd29yZDogcHcgfSk7XG4gICAgICAgICAgICAgICAgbmV4dCgpOyAvLyBSZXF1ZXN0IHZhbGlkXG4gICAgICAgICAgICB9XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAvLyBTa2lwIGF1dGhlbnRpY2F0aW9uXG4gICAgICAgICAgICBsb2dnZXIuaW5mbygnV2hpdGVsaXN0IG9yIG5vdCBpbiBibGFja2xpc3QnLCB7IHVybDogcmVxLm9yaWdpbmFsVXJsIH0pO1xuICAgICAgICAgICAgbmV4dCgpO1xuICAgICAgICB9XG4gICAgfSk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBzZWN1cml0eTtcbiIsImltcG9ydCAqIGFzIGV4cHJlc3MgZnJvbSAnZXhwcmVzcyc7XG5pbXBvcnQgQXJ0aXN0IGZyb20gJy4uLy4uL21vZGVscy9hcnRpc3QnO1xuaW1wb3J0IFByaWNlIGZyb20gJy4uLy4uL21vZGVscy9wcmljZSc7XG5pbXBvcnQgVHJhY2sgZnJvbSAnLi4vLi4vbW9kZWxzL3RyYWNrJztcbmltcG9ydCB7IHN0cmlwUHJpY2UgfSBmcm9tICcuLi9wcmljZSc7XG5cbmV4cG9ydCBjb25zdCBnZXRBcnRpc3RzID0gKHJlcTogZXhwcmVzcy5SZXF1ZXN0LCByZXM6IGV4cHJlc3MuUmVzcG9uc2UpOiBhbnkgPT4ge1xuICAgIHJldHVybiBBcnRpc3QuZmluZEFsbCh7IGluY2x1ZGU6IFtQcmljZSwgVHJhY2tdIH0pXG4gICAgICAgIC50aGVuKFxuICAgICAgICAgICAgKGFydGlzdHM6IEFydGlzdFtdKTogZXhwcmVzcy5SZXNwb25zZSA9PiB7XG4gICAgICAgICAgICAgICAgY29uc3QgZGF0YSA9IGFydGlzdHMubWFwKChhcnRpc3Q6IEFydGlzdCkgPT4gKHtcbiAgICAgICAgICAgICAgICAgICAgLi4uYXJ0aXN0LmRhdGFWYWx1ZXMsXG4gICAgICAgICAgICAgICAgICAgIHByaWNlczogYXJ0aXN0LnByaWNlcy5tYXAoKHByaWNlKSA9PiBzdHJpcFByaWNlKHByaWNlKSksXG4gICAgICAgICAgICAgICAgfSkpO1xuICAgICAgICAgICAgICAgIHJldHVybiByZXMuc3RhdHVzKDIwMCkuc2VuZCh7XG4gICAgICAgICAgICAgICAgICAgIHN1Y2Nlc3M6IHRydWUsXG4gICAgICAgICAgICAgICAgICAgIGFydGlzdHM6IGRhdGEsXG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9LFxuICAgICAgICApXG4gICAgICAgIC5jYXRjaCgoZXJyb3I6IEVycm9yKTogZXhwcmVzcy5SZXNwb25zZSA9PiByZXMuc3RhdHVzKDQwMCkuc2VuZChlcnJvcikpOyAvLyBFcnJvclxufTtcblxuZXhwb3J0IGludGVyZmFjZSBBcnRpc3RHZXRSZXF1ZXN0IGV4dGVuZHMgZXhwcmVzcy5SZXF1ZXN0IHtcbiAgICBpZDogc3RyaW5nO1xufVxuXG5leHBvcnQgY29uc3QgZ2V0QXJ0aXN0QnlJZCA9IChyZXE6IEFydGlzdEdldFJlcXVlc3QsIHJlczogZXhwcmVzcy5SZXNwb25zZSk6IGFueSA9PiB7XG4gICAgY29uc3QgeyBpZCB9ID0gcmVxLnBhcmFtcztcbiAgICByZXR1cm4gQXJ0aXN0LmZpbmRCeUlkKGlkLCB7IGluY2x1ZGU6IFtQcmljZSwgVHJhY2tdIH0pXG4gICAgICAgIC50aGVuKFxuICAgICAgICAgICAgKGFydGlzdDogQXJ0aXN0KTogZXhwcmVzcy5SZXNwb25zZSA9PiB7XG4gICAgICAgICAgICAgICAgY29uc3QgZGF0YSA9IHtcbiAgICAgICAgICAgICAgICAgICAgLi4uYXJ0aXN0LmRhdGFWYWx1ZXMsXG4gICAgICAgICAgICAgICAgICAgIHByaWNlczogYXJ0aXN0LnByaWNlcy5tYXAoKHByaWNlKSA9PiBzdHJpcFByaWNlKHByaWNlKSksXG4gICAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgICAgICByZXR1cm4gcmVzLnN0YXR1cygyMDApLnNlbmQoe1xuICAgICAgICAgICAgICAgICAgICBzdWNjZXNzOiB0cnVlLFxuICAgICAgICAgICAgICAgICAgICBhcnRpc3Q6IGRhdGEsXG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9LFxuICAgICAgICApXG4gICAgICAgIC5jYXRjaChcbiAgICAgICAgICAgIChlcnJvcjogRXJyb3IpOiBleHByZXNzLlJlc3BvbnNlID0+XG4gICAgICAgICAgICAgICAgcmVzLnN0YXR1cyg0MDApLnNlbmQoe1xuICAgICAgICAgICAgICAgICAgICBzdWNjZXNzOiBmYWxzZSxcbiAgICAgICAgICAgICAgICAgICAgZXJyb3IsXG4gICAgICAgICAgICAgICAgfSksXG4gICAgICAgICk7IC8vIEVycm9yXG59O1xuIiwiaW1wb3J0IFByaWNlIGZyb20gJy4uLy4uL21vZGVscy9wcmljZSc7XG5cbmV4cG9ydCBjb25zdCBzdHJpcFByaWNlID0gKHByaWNlOiBQcmljZSkgPT4gKHtcbiAgICBkYXRlOiBwcmljZS5kYXRlLFxuICAgIHByaWNlOiBwcmljZS5wcmljZSxcbn0pO1xuIiwiaW1wb3J0ICogYXMgZXhwcmVzcyBmcm9tICdleHByZXNzJztcbmltcG9ydCBBcnRpc3QgZnJvbSAnLi4vLi4vbW9kZWxzL2FydGlzdCc7XG5pbXBvcnQgUHJpY2UgZnJvbSAnLi4vLi4vbW9kZWxzL3ByaWNlJztcbmltcG9ydCBUcmFuc2FjdGlvbiBmcm9tICcuLi8uLi9tb2RlbHMvdHJhbnNhY3Rpb24nO1xuaW1wb3J0IFVzZXIgZnJvbSAnLi4vLi4vbW9kZWxzL3VzZXInO1xuXG5leHBvcnQgaW50ZXJmYWNlIFVzZXJHZXRSZXF1ZXN0IGV4dGVuZHMgZXhwcmVzcy5SZXF1ZXN0IHtcbiAgICBpZDogc3RyaW5nO1xufVxuXG5leHBvcnQgY29uc3QgZ2V0VXNlciA9IChyZXE6IFVzZXJHZXRSZXF1ZXN0LCByZXM6IGV4cHJlc3MuUmVzcG9uc2UpOiBhbnkgPT4ge1xuICAgIGNvbnN0IHsgaWQgfSA9IHJlcS5wYXJhbXM7XG4gICAgcmV0dXJuIFVzZXIuZmluZEJ5SWQoaWQsIHtcbiAgICAgICAgaW5jbHVkZTogW1xuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIG1vZGVsOiBUcmFuc2FjdGlvbixcbiAgICAgICAgICAgICAgICBpbmNsdWRlOiBbUHJpY2UsIEFydGlzdF0sXG4gICAgICAgICAgICB9LFxuICAgICAgICBdLFxuICAgIH0pXG4gICAgICAgIC50aGVuKCh1c2VyOiBVc2VyKTogZXhwcmVzcy5SZXNwb25zZSA9PiByZXMuc3RhdHVzKDIwMCkuc2VuZCh1c2VyKSlcbiAgICAgICAgLmNhdGNoKChlcnJvcjogRXJyb3IpOiBleHByZXNzLlJlc3BvbnNlID0+IHJlcy5zdGF0dXMoNDAwKS5zZW5kKGVycm9yKSk7IC8vIEVycm9yXG59O1xuIiwiLy8gQXBwbGljYXRpb24gZW50cnksIHNldHRpbmcgdXAgc2VydmVyXG5pbXBvcnQgYXBwIGZyb20gJy4vYXBwJzsgLy8gVGhlIGV4cHJlc3MgYXBwIHdlIGp1c3QgY3JlYXRlZFxuXG5jb25zdCBwb3J0ID0gcGFyc2VJbnQocHJvY2Vzcy5lbnYuUE9SVCwgMTApIHx8IDUwMDA7IC8vIFVzZSBwb3J0IDUwMDBcbmFwcC5zZXQoJ3BvcnQnLCBwb3J0KTtcblxuLy8gMC4wLjAuMCBtYWtlcyBpdCBhdmFpbGFibGUgb24geW91ciBsb2NhbCBuZXR3b3JrXG4vLyBhcHAubGlzdGVuKHBvcnQsICcwLjAuMC4wJyk7XG5hcHAubGlzdGVuKHBvcnQpO1xuIiwiaW1wb3J0IHsgQ29sdW1uLCBDcmVhdGVkQXQsIEhhc01hbnksIE1vZGVsLCBUYWJsZSwgVXBkYXRlZEF0IH0gZnJvbSAnc2VxdWVsaXplLXR5cGVzY3JpcHQnO1xuaW1wb3J0IFByaWNlIGZyb20gJy4vcHJpY2UnO1xuaW1wb3J0IFRyYWNrIGZyb20gJy4vdHJhY2snO1xuaW1wb3J0IFRyYW5zYWN0aW9uIGZyb20gJy4vdHJhbnNhY3Rpb24nO1xuXG5AVGFibGUoe1xuICAgIG1vZGVsTmFtZTogJ0FydGlzdCcsXG4gICAgdGFibGVOYW1lOiAnQXJ0aXN0JyxcbiAgICBuYW1lOiB7XG4gICAgICAgIHNpbmd1bGFyOiAnQXJ0aXN0JyxcbiAgICAgICAgcGx1cmFsOiAnQXJ0aXN0cycsXG4gICAgfSxcbiAgICBmcmVlemVUYWJsZU5hbWU6IHRydWUsXG59KVxuY2xhc3MgQXJ0aXN0IGV4dGVuZHMgTW9kZWw8QXJ0aXN0PiB7XG4gICAgQENvbHVtblxuICAgIG5hbWU6IHN0cmluZztcblxuICAgIEBDb2x1bW5cbiAgICBzcG90aWZ5VXJsOiBzdHJpbmc7XG5cbiAgICBAQ29sdW1uXG4gICAgbW9udGhseUxpc3RlbnM6IG51bWJlcjtcblxuICAgIEBDb2x1bW5cbiAgICBmb2xsb3dlcnM6IG51bWJlcjtcblxuICAgIEBDb2x1bW5cbiAgICBiaW86IHN0cmluZztcblxuICAgIEBDb2x1bW5cbiAgICBmb3VuZGVkWWVhcjogbnVtYmVyO1xuXG4gICAgQEhhc01hbnkoKCkgPT4gUHJpY2UpXG4gICAgcHJpY2VzOiBQcmljZVtdO1xuXG4gICAgQEhhc01hbnkoKCkgPT4gVHJhbnNhY3Rpb24pXG4gICAgdHJhbnNhY3Rpb25zOiBUcmFuc2FjdGlvbltdO1xuXG4gICAgQEhhc01hbnkoKCkgPT4gVHJhY2spXG4gICAgdHJhY2tzOiBUcmFja1tdO1xuXG4gICAgQENyZWF0ZWRBdFxuICAgIGNyZWF0ZWRBdDogRGF0ZTtcblxuICAgIEBVcGRhdGVkQXRcbiAgICB1cGRhdGVkQXQ6IERhdGU7XG59XG5cbmV4cG9ydCBkZWZhdWx0IEFydGlzdDtcbiIsImltcG9ydCB7IFNlcXVlbGl6ZSB9IGZyb20gJ3NlcXVlbGl6ZS10eXBlc2NyaXB0JztcbmltcG9ydCBBcnRpc3QgZnJvbSAnLi9hcnRpc3QnO1xuaW1wb3J0IFByaWNlIGZyb20gJy4vcHJpY2UnO1xuaW1wb3J0IFRyYWNrIGZyb20gJy4vdHJhY2snO1xuaW1wb3J0IFRyYW5zYWN0aW9uIGZyb20gJy4vdHJhbnNhY3Rpb24nO1xuaW1wb3J0IFVzZXIgZnJvbSAnLi91c2VyJztcblxuaW1wb3J0IGxvZ2dlciA9IHJlcXVpcmUoJ2hlcm9rdS1sb2dnZXInKTsgLy8gRm9yIGxvZ2dpbmcgdG8gdGhlIGxvZyBoZXJva3UgbG9nIGZpbGVcblxuaW1wb3J0IGNvbmZpZ0ZpbGUgPSByZXF1aXJlKCcuLi9jb25maWcvY29uZmlnLmpzb24nKTtcblxuZGVjbGFyZSB2YXIgcHJvY2Vzczoge1xuICAgIGVudjoge1xuICAgICAgICBOT0RFX0VOVjogc3RyaW5nO1xuICAgICAgICBEQVRBQkFTRV9VUkw6IHN0cmluZztcbiAgICB9O1xufTtcblxuZXhwb3J0IGRlZmF1bHQgKCk6IHZvaWQgPT4ge1xuICAgIHZhciBlbnYgPSBwcm9jZXNzLmVudi5OT0RFX0VOViB8fCAnZGV2ZWxvcG1lbnQnOyAvLyBEZXRlcm1pbmUgaWYgdXNpbmcgZGV2ZWxvcG1lbnRcbiAgICAvLyBjb25zdCBfX2Rpcm5hbWUgPSBwcm9jZXNzLmVudi5QV0Q7IC8vIENvdWxkIGJyZWFrIG9uIHByb2RcbiAgICAvLyBjb25zdCBjdXJyZW50RGlyID0gcGF0aC5qb2luKF9fZGlybmFtZSwgJy4vc2VydmVyL3NyYy9tb2RlbHMnKTtcblxuICAgIC8vIFJlZ3VsYXIgYG1vZHVsZS5maWxlbmFtZWAgaXMgdW5kZWZpbmVkIGluIGxvY2FsIGRldlxuICAgIC8vIGNvbnN0IGZpbGVuYW1lID0gbW9kdWxlLmZpbGVuYW1lICE9PSB1bmRlZmluZWQgPyBtb2R1bGUuZmlsZW5hbWUgOiAnaW5kZXgudHMnO1xuICAgIC8vIHZhciBiYXNlbmFtZSA9IHBhdGguYmFzZW5hbWUoZmlsZW5hbWUpO1xuXG4gICAgdmFyIGRiOiBhbnkgPSB7fTtcblxuICAgIC8vIEkgdXNlIHRoZSBub2RlLWNvbmZpZyBwYWNrYWdlIHRvIG1hbmFnZSB0aGUgREIgY29uZmlnIHlvdSBjYW4gY2hvb3NlXG4gICAgLy8gdG8gc3RpY2sgd2l0aCB0aGUgb3JpZ2luYWwgdmVyc2lvbi4gQW5kIEkgcmVtb3ZlZCBlbnZpcm9ubWVudCB2YXJpYWJsZVxuICAgIC8vIHN1cHBvcnQgYmVjYXVzZSBJIGRvbid0IG5lZWQgaXQuXG4gICAgbGV0IHNlcXVlbGl6ZTogYW55ID0ge307XG4gICAgY29uc29sZS5sb2cocHJvY2Vzcy5lbnYuTk9ERV9FTlYpOyAvLyBUT0RPOiBGb3Igc29tZSByZWFzb24sIGluIHByb2R1Y3Rpb24sIHRoaXMgcmVhZHMgYXMgJ2RldmVsb3BtZW50J1xuICAgIGxvZ2dlci5pbmZvKGBwcm9jZXNzLmVudi5OT0RFX0VOVjogJHtwcm9jZXNzLmVudi5OT0RFX0VOVn1gKTtcbiAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgICAgIC8vIEZyb20gdGhlIGVudmlyb25tZW50LCBleHRyYWN0IHRoZSBrZXkgd2l0aCB0aGUgbmFtZSBwcm92aWRlZCBpbiB0aGUgY29uZmlnIGFzIHVzZV9lbnZfdmFyaWFibGVcbiAgICAgICAgLy8gYW5kIHVzZSB0aGF0IHRvIGVzdGFibGlzaCBhIGNvbm5lY3Rpb24gdG8gb3VyIGRhdGFiYXNlLlxuICAgICAgICBjb25zb2xlLmxvZygnVXNpbmcgZGF0YWJhc2UgVVJMOicsIHByb2Nlc3MuZW52LkRBVEFCQVNFX1VSTCk7XG4gICAgICAgIGxvZ2dlci5pbmZvKCdVc2luZyBkYXRhYmFzZSBVUkw6JywgeyB1cmw6IHByb2Nlc3MuZW52LkRBVEFCQVNFX1VSTCB9KTtcbiAgICAgICAgc2VxdWVsaXplID0gbmV3IFNlcXVlbGl6ZShwcm9jZXNzLmVudi5EQVRBQkFTRV9VUkwpOyAvLyBFc3RhYmxpc2ggY29ubmVjdGlvbiB1c2luZyBlbnZpcm9ubWVudCB2YXJpYWJsZXNcbiAgICB9IGVsc2Uge1xuICAgICAgICB2YXIgY29uZmlnID0gY29uZmlnRmlsZVtlbnZdOyAvLyBJZiBsb2NhbCwgdXNlIGNvbmZpZ1xuICAgICAgICBjb25zb2xlLmxvZygnVXNpbmcgbG9jYWwgY29uZmlndXJhdGlvbjonLCBjb25maWcpO1xuICAgICAgICBsb2dnZXIuaW5mbygnVXNpbmcgbG9jYWwgY29uZmlndXJhdGlvbjonLCB7IGNvbmZpZyB9KTtcbiAgICAgICAgc2VxdWVsaXplID0gbmV3IFNlcXVlbGl6ZSh7XG4gICAgICAgICAgICAuLi5jb25maWcsXG4gICAgICAgICAgICAvLyBkYXRhYmFzZTogY29uZmlnLmRhdGFiYXNlLFxuICAgICAgICAgICAgLy8gdXNlcm5hbWU6IGNvbmZpZy51c2VybmFtZSxcbiAgICAgICAgICAgIC8vIHBhc3N3b3JkOiBjb25maWcucGFzc3dvcmQsXG4gICAgICAgIH0pOyAvLyBDb25uZWN0XG4gICAgfVxuXG4gICAgc2VxdWVsaXplLmFkZE1vZGVscyhbVHJhbnNhY3Rpb24sIFVzZXIsIEFydGlzdCwgUHJpY2UsIFRyYWNrXSk7XG4gICAgLy8gaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WID09ICdwcm9kdWN0aW9uJykge1xuICAgIC8vICAgICBzZXF1ZWxpemUuc3luYygpOyAvLyBEb24ndCBjb3JydXB0IHByb2R1Y3Rpb24gZGF0YVxuICAgIC8vIH0gZWxzZSB7XG4gICAgLy8gc2VxdWVsaXplLnN5bmMoeyBmb3JjZTogdHJ1ZSB9KTsgLy8gVE9ETzogUmVtb3ZlIGJlZm9yZSBsaXZlXG4gICAgc2VxdWVsaXplLnN5bmMoeyBhbHRlcjogdHJ1ZSB9KTtcbiAgICAvLyBzZXF1ZWxpemUuc3luYygpO1xuICAgIC8vIH1cblxuICAgIGRiLnNlcXVlbGl6ZSA9IHNlcXVlbGl6ZTtcbiAgICBkYi5TZXF1ZWxpemUgPSBTZXF1ZWxpemU7XG59O1xuIiwiaW1wb3J0IHsgQmVsb25nc1RvLCBDb2x1bW4sIEZvcmVpZ25LZXksIEhhc01hbnksIE1vZGVsLCBUYWJsZSB9IGZyb20gJ3NlcXVlbGl6ZS10eXBlc2NyaXB0JztcbmltcG9ydCBBcnRpc3QgZnJvbSAnLi9hcnRpc3QnO1xuaW1wb3J0IFRyYW5zYWN0aW9uIGZyb20gJy4vdHJhbnNhY3Rpb24nO1xuXG5AVGFibGUoe1xuICAgIG5hbWU6IHtcbiAgICAgICAgc2luZ3VsYXI6ICdQcmljZScsXG4gICAgICAgIHBsdXJhbDogJ1ByaWNlcycsXG4gICAgfSxcbiAgICBmcmVlemVUYWJsZU5hbWU6IHRydWUsXG59KVxuY2xhc3MgUHJpY2UgZXh0ZW5kcyBNb2RlbDxQcmljZT4ge1xuICAgIEBDb2x1bW5cbiAgICBkYXRlOiBEYXRlO1xuXG4gICAgQENvbHVtblxuICAgIHByaWNlOiBudW1iZXI7XG5cbiAgICBARm9yZWlnbktleSgoKSA9PiBBcnRpc3QpXG4gICAgQENvbHVtblxuICAgIGFydGlzdElkOiBudW1iZXI7XG5cbiAgICBAQmVsb25nc1RvKCgpID0+IEFydGlzdClcbiAgICBhcnRpc3Q6IEFydGlzdDtcblxuICAgIEBIYXNNYW55KCgpID0+IFRyYW5zYWN0aW9uKVxuICAgIHRyYW5zYWN0aW9uczogVHJhbnNhY3Rpb25bXTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgUHJpY2U7XG4iLCJpbXBvcnQgeyBCZWxvbmdzVG8sIENvbHVtbiwgRm9yZWlnbktleSwgTW9kZWwsIFRhYmxlIH0gZnJvbSAnc2VxdWVsaXplLXR5cGVzY3JpcHQnO1xuaW1wb3J0IEFydGlzdCBmcm9tICcuL2FydGlzdCc7XG5cbkBUYWJsZSh7XG4gICAgbmFtZToge1xuICAgICAgICBzaW5ndWxhcjogJ1RyYWNrJyxcbiAgICAgICAgcGx1cmFsOiAnVHJhY2tzJyxcbiAgICB9LFxuICAgIGZyZWV6ZVRhYmxlTmFtZTogdHJ1ZSxcbn0pXG5jbGFzcyBUcmFjayBleHRlbmRzIE1vZGVsPFRyYWNrPiB7XG4gICAgQENvbHVtblxuICAgIHRyYWNrU3BvdGlmeUlkOiBzdHJpbmc7XG5cbiAgICBAQ29sdW1uXG4gICAgbmFtZTogc3RyaW5nO1xuXG4gICAgQENvbHVtblxuICAgIGR1cmF0aW9uTXM6IG51bWJlcjtcblxuICAgIEBDb2x1bW5cbiAgICB1cmw6IHN0cmluZztcblxuICAgIEBDb2x1bW5cbiAgICBhbGJ1bU5hbWU6IHN0cmluZztcblxuICAgIEBDb2x1bW5cbiAgICB0aHVtYm5haWw6IHN0cmluZztcblxuICAgIEBDb2x1bW5cbiAgICByZWxlYXNlRGF0ZTogc3RyaW5nO1xuXG4gICAgQEZvcmVpZ25LZXkoKCkgPT4gQXJ0aXN0KVxuICAgIEBDb2x1bW5cbiAgICBhcnRpc3RJZDogbnVtYmVyO1xuXG4gICAgQEJlbG9uZ3NUbygoKSA9PiBBcnRpc3QpXG4gICAgYXJ0aXN0OiBBcnRpc3Q7XG59XG5cbmV4cG9ydCBkZWZhdWx0IFRyYWNrO1xuIiwiaW1wb3J0IHsgQmVsb25nc1RvLCBDb2x1bW4sIEZvcmVpZ25LZXksIE1vZGVsLCBUYWJsZSB9IGZyb20gJ3NlcXVlbGl6ZS10eXBlc2NyaXB0JztcbmltcG9ydCBBcnRpc3QgZnJvbSAnLi9hcnRpc3QnO1xuaW1wb3J0IFByaWNlIGZyb20gJy4vcHJpY2UnO1xuaW1wb3J0IFVzZXIgZnJvbSAnLi91c2VyJztcblxuQFRhYmxlKHtcbiAgICBuYW1lOiB7XG4gICAgICAgIHNpbmd1bGFyOiAnVHJhbnNhY3Rpb24nLFxuICAgICAgICBwbHVyYWw6ICdUcmFuc2FjdGlvbnMnLFxuICAgIH0sXG4gICAgZnJlZXplVGFibGVOYW1lOiB0cnVlLFxufSlcbmNsYXNzIFRyYW5zYWN0aW9uIGV4dGVuZHMgTW9kZWw8VHJhbnNhY3Rpb24+IHtcbiAgICBAQ29sdW1uXG4gICAgZGF0ZTogRGF0ZTtcblxuICAgIEBGb3JlaWduS2V5KCgpID0+IFVzZXIpXG4gICAgQENvbHVtblxuICAgIHVzZXJJZDogbnVtYmVyO1xuXG4gICAgQEJlbG9uZ3NUbygoKSA9PiBVc2VyKVxuICAgIHVzZXI6IFVzZXI7XG5cbiAgICBARm9yZWlnbktleSgoKSA9PiBBcnRpc3QpXG4gICAgQENvbHVtblxuICAgIGFydGlzdElkOiBudW1iZXI7XG5cbiAgICBAQmVsb25nc1RvKCgpID0+IEFydGlzdClcbiAgICBhcnRpc3Q6IEFydGlzdDtcblxuICAgIEBGb3JlaWduS2V5KCgpID0+IFByaWNlKVxuICAgIEBDb2x1bW5cbiAgICBwcmljZUlkOiBudW1iZXI7XG5cbiAgICBAQmVsb25nc1RvKCgpID0+IFByaWNlKVxuICAgIHByaWNlOiBQcmljZTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgVHJhbnNhY3Rpb247XG4iLCJpbXBvcnQge1xuICAgIEFsbG93TnVsbCxcbiAgICBDb2x1bW4sXG4gICAgQ3JlYXRlZEF0LFxuICAgIEhhc01hbnksXG4gICAgTW9kZWwsXG4gICAgVGFibGUsXG4gICAgVXBkYXRlZEF0LFxufSBmcm9tICdzZXF1ZWxpemUtdHlwZXNjcmlwdCc7XG5pbXBvcnQgVHJhbnNhY3Rpb24gZnJvbSAnLi90cmFuc2FjdGlvbic7XG5cbkBUYWJsZSh7IHRhYmxlTmFtZTogJ1VzZXInIH0pXG5jbGFzcyBVc2VyIGV4dGVuZHMgTW9kZWw8VXNlcj4ge1xuICAgIEBBbGxvd051bGwoZmFsc2UpXG4gICAgQENvbHVtblxuICAgIHVzZXJuYW1lOiBzdHJpbmc7XG5cbiAgICBAQ29sdW1uXG4gICAgZmlyc3ROYW1lOiBzdHJpbmc7XG5cbiAgICBAQ29sdW1uXG4gICAgbGFzdE5hbWU6IHN0cmluZztcblxuICAgIEBIYXNNYW55KCgpID0+IFRyYW5zYWN0aW9uKVxuICAgIHRyYW5zYWN0aW9uczogVHJhbnNhY3Rpb25bXTtcblxuICAgIEBDcmVhdGVkQXRcbiAgICBjcmVhdGVkQXQ6IERhdGU7XG5cbiAgICBAVXBkYXRlZEF0XG4gICAgdXBkYXRlZEF0OiBEYXRlO1xufVxuXG5leHBvcnQgZGVmYXVsdCBVc2VyO1xuIiwiaW1wb3J0ICogYXMgZXhwcmVzcyBmcm9tICdleHByZXNzJztcbmltcG9ydCB7IGdldEFydGlzdEJ5SWQsIGdldEFydGlzdHMgfSBmcm9tICcuLi9jb250cm9sbGVycy9hcnRpc3QnO1xuXG5leHBvcnQgZGVmYXVsdCAoYXBwOiBleHByZXNzLkFwcGxpY2F0aW9uKSA9PiB7XG4gICAgYXBwLmdldCgnL2FwaS9hcnRpc3QvJywgZ2V0QXJ0aXN0cyk7XG5cbiAgICBhcHAuZ2V0KCcvYXBpL2FydGlzdC86aWQnLCBnZXRBcnRpc3RCeUlkKTtcbn07XG4iLCIvLyBzZXJ2ZXIvcm91dGVzL2luZGV4LmpzXG4vLyBBUEkgcm91dGUgdGhhdCBtYXBzIGZ1bmN0aW9uYWxpdHlcbmltcG9ydCAqIGFzIGV4cHJlc3MgZnJvbSAnZXhwcmVzcyc7XG5pbXBvcnQgKiBhcyBwYXRoIGZyb20gJ3BhdGgnO1xuaW1wb3J0IEFydGlzdFJvdXRlcyBmcm9tICcuL2FydGlzdCc7XG5pbXBvcnQgVXNlclJvdXRlcyBmcm9tICcuL3VzZXInO1xuXG4vLyBSZXF1aXJlcyBhbiBhcHAgYXMgYW4gaW5wdXQgc28gY2FuIGRpcmVjdCB0aGUgdXNlciBhY2NvcmRpbmdseVxuY29uc3Qgcm91dGVzID0gKGFwcDogZXhwcmVzcy5BcHBsaWNhdGlvbik6IHZvaWQgPT4ge1xuICAgIC8vIE1vZHVsYXIgcm91dGVzXG4gICAgVXNlclJvdXRlcyhhcHApO1xuICAgIEFydGlzdFJvdXRlcyhhcHApO1xuXG4gICAgLy8gU2VydmUgc3RhdGljIGZpbGVzXG4gICAgYXBwLnVzZShleHByZXNzLnN0YXRpYygnLi9jbGllbnQvYnVpbGQnKSk7XG5cbiAgICBhcHAuZ2V0KCcvZmF2aWNvbi5wbmcnLCAocmVxOiBleHByZXNzLlJlcXVlc3QsIHJlczogZXhwcmVzcy5SZXNwb25zZSk6IHZvaWQgPT4ge1xuICAgICAgICBjb25zdCBfX2Rpcm5hbWUgPSBwcm9jZXNzLmVudi5QV0Q7XG4gICAgICAgIHJlcy5zZW5kRmlsZSgnZmF2aWNvbi5wbmcnLCB7IHJvb3Q6IHBhdGguam9pbihfX2Rpcm5hbWUsICcuL2NsaWVudC9hc3NldHMnKSB9KTtcbiAgICB9KTtcblxuICAgIC8vIENsaWVudCBhcHAgZW50cnkgaW5kZXguaHRtbCBmaWxlIC0gcmVhY3Qgcm91dGVyXG4gICAgYXBwLmdldCgnKicsIChyZXE6IGV4cHJlc3MuUmVxdWVzdCwgcmVzOiBleHByZXNzLlJlc3BvbnNlKTogdm9pZCA9PiB7XG4gICAgICAgIGNvbnN0IF9fZGlybmFtZSA9IHByb2Nlc3MuZW52LlBXRDtcbiAgICAgICAgcmVzLnNlbmRGaWxlKCdpbmRleC5odG1sJywgeyByb290OiBwYXRoLmpvaW4oX19kaXJuYW1lLCAnLi9jbGllbnQvYnVpbGQnKSB9KTsgLy8gUmVuZGVyIGNsaWVudFxuICAgIH0pO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgcm91dGVzO1xuIiwiaW1wb3J0ICogYXMgZXhwcmVzcyBmcm9tICdleHByZXNzJztcbmltcG9ydCB7IGdldFVzZXIgfSBmcm9tICcuLi9jb250cm9sbGVycy91c2VyJztcblxuZXhwb3J0IGRlZmF1bHQgKGFwcDogZXhwcmVzcy5BcHBsaWNhdGlvbik6IHZvaWQgPT4ge1xuICAgIGFwcC5nZXQoJy9hcGkvdXNlci86aWQnLCBnZXRVc2VyKTtcbn07XG4iLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJhdXRoLWhlYWRlclwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJiYWJlbC1wb2x5ZmlsbFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJib2R5LXBhcnNlclwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJidWZmZXJcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiZG90ZW52XCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImV4cHJlc3NcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiZXhwcmVzcy1xdWVyeS1pbnRcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiaGVyb2t1LWxvZ2dlclwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJtb3JnYW5cIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicGF0aFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJzZXF1ZWxpemUtdHlwZXNjcmlwdFwiKTsiXSwic291cmNlUm9vdCI6IiJ9