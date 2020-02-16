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
        .then((user) => res.status(200).send({ success: true, user }))
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
        .then((users) => res
        .status(200)
        .send({ success: true, users: users.filter((user) => user.id != 1) }))
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
const user_1 = __webpack_require__(/*! ./user */ "./server/src/routes/user.ts");
const routes = (app) => {
    user_1.default(app);
    artist_1.default(app);
    friends_1.default(app);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc2VydmVyL3NyYy9hcHAudHMiLCJ3ZWJwYWNrOi8vLy4vc2VydmVyL3NyYy9jb25maWcvc2VjdXJpdHkudHMiLCJ3ZWJwYWNrOi8vLy4vc2VydmVyL3NyYy9jb250cm9sbGVycy9hcnRpc3QvaW5kZXgudHMiLCJ3ZWJwYWNrOi8vLy4vc2VydmVyL3NyYy9jb250cm9sbGVycy9wcmljZS9pbmRleC50cyIsIndlYnBhY2s6Ly8vLi9zZXJ2ZXIvc3JjL2NvbnRyb2xsZXJzL3VzZXIvaW5kZXgudHMiLCJ3ZWJwYWNrOi8vLy4vc2VydmVyL3NyYy9pbmRleC50cyIsIndlYnBhY2s6Ly8vLi9zZXJ2ZXIvc3JjL21vZGVscy9hcnRpc3QudHMiLCJ3ZWJwYWNrOi8vLy4vc2VydmVyL3NyYy9tb2RlbHMvaW5kZXgudHMiLCJ3ZWJwYWNrOi8vLy4vc2VydmVyL3NyYy9tb2RlbHMvcHJpY2UudHMiLCJ3ZWJwYWNrOi8vLy4vc2VydmVyL3NyYy9tb2RlbHMvdHJhY2sudHMiLCJ3ZWJwYWNrOi8vLy4vc2VydmVyL3NyYy9tb2RlbHMvdHJhbnNhY3Rpb24udHMiLCJ3ZWJwYWNrOi8vLy4vc2VydmVyL3NyYy9tb2RlbHMvdXNlci50cyIsIndlYnBhY2s6Ly8vLi9zZXJ2ZXIvc3JjL3JvdXRlcy9hcnRpc3QudHMiLCJ3ZWJwYWNrOi8vLy4vc2VydmVyL3NyYy9yb3V0ZXMvZnJpZW5kcy50cyIsIndlYnBhY2s6Ly8vLi9zZXJ2ZXIvc3JjL3JvdXRlcy9pbmRleC50cyIsIndlYnBhY2s6Ly8vLi9zZXJ2ZXIvc3JjL3JvdXRlcy91c2VyLnRzIiwid2VicGFjazovLy9leHRlcm5hbCBcImF1dGgtaGVhZGVyXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiYmFiZWwtcG9seWZpbGxcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJib2R5LXBhcnNlclwiIiwid2VicGFjazovLy9leHRlcm5hbCBcImJ1ZmZlclwiIiwid2VicGFjazovLy9leHRlcm5hbCBcImRvdGVudlwiIiwid2VicGFjazovLy9leHRlcm5hbCBcImV4cHJlc3NcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJleHByZXNzLXF1ZXJ5LWludFwiIiwid2VicGFjazovLy9leHRlcm5hbCBcImhlcm9rdS1sb2dnZXJcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJtb3JnYW5cIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJwYXRoXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwic2VxdWVsaXplLXR5cGVzY3JpcHRcIiJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO1FBQUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7OztRQUdBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwwQ0FBMEMsZ0NBQWdDO1FBQzFFO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0Esd0RBQXdELGtCQUFrQjtRQUMxRTtRQUNBLGlEQUFpRCxjQUFjO1FBQy9EOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQSx5Q0FBeUMsaUNBQWlDO1FBQzFFLGdIQUFnSCxtQkFBbUIsRUFBRTtRQUNySTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDJCQUEyQiwwQkFBMEIsRUFBRTtRQUN2RCxpQ0FBaUMsZUFBZTtRQUNoRDtRQUNBO1FBQ0E7O1FBRUE7UUFDQSxzREFBc0QsK0RBQStEOztRQUVySDtRQUNBOzs7UUFHQTtRQUNBOzs7Ozs7Ozs7Ozs7Ozs7QUNsRkEsOERBQW1DO0FBQ25DLG1HQUF5QztBQUN6QyxxRkFBa0M7QUFDbEMscUZBQThCO0FBRTlCLDJEQUFrQztBQUNsQyxNQUFNLFVBQVUsR0FBRyxtQkFBTyxDQUFDLGdDQUFhLENBQUMsQ0FBQztBQUMx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QUM7UUFDbEMsR0FBRyxDQUFDLFFBQVEsQ0FBQyxhQUFhLEVBQUUsRUFBRSxJQUFJLEVBQUUsSUFBSSxDQUFDLElBQUksQ0FBQyxTQUFTLEVBQUUsaUJBQWlCLENBQUMsRUFBRSxDQUFDLENBQUM7SUFDbkYsQ0FBQyxDQUFDLENBQUM7SUFHSCxHQUFHLENBQUMsR0FBRyxDQUFDLEdBQUcsRUFBRSxDQUFDLEdBQW9CLEVBQUUsR0FBcUIsRUFBUSxFQUFFO1FBQy9ELE1BQU0sU0FBUyxHQUFHLE9BQU8sQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDO1FBQ2xDLEdBQUcsQ0FBQyxRQUFRLENBQUMsWUFBWSxFQUFFLEVBQUUsSUFBSSxFQUFFLElBQUksQ0FBQyxJQUFJLENBQUMsU0FBUyxFQUFFLGdCQUFnQixDQUFDLEVBQUUsQ0FBQyxDQUFDO0lBQ2pGLENBQUMsQ0FBQyxDQUFDO0FBQ1AsQ0FBQyxDQUFDO0FBRUYsa0JBQWUsTUFBTSxDQUFDOzs7Ozs7Ozs7Ozs7Ozs7QUM3QnRCLHdHQUE4QztBQUU5QyxrQkFBZSxDQUFDLEdBQXdCLEVBQVEsRUFBRTtJQUM5QyxHQUFHLENBQUMsR0FBRyxDQUFDLGVBQWUsRUFBRSxjQUFPLENBQUMsQ0FBQztBQUN0QyxDQUFDLENBQUM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNMRix3Qzs7Ozs7Ozs7Ozs7QUNBQSwyQzs7Ozs7Ozs7Ozs7QUNBQSx3Qzs7Ozs7Ozs7Ozs7QUNBQSxtQzs7Ozs7Ozs7Ozs7QUNBQSxtQzs7Ozs7Ozs7Ozs7QUNBQSxvQzs7Ozs7Ozs7Ozs7QUNBQSw4Qzs7Ozs7Ozs7Ozs7QUNBQSwwQzs7Ozs7Ozs7Ozs7QUNBQSxtQzs7Ozs7Ozs7Ozs7QUNBQSxpQzs7Ozs7Ozs7Ozs7QUNBQSxpRCIsImZpbGUiOiJkaXN0L2luZGV4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IDApO1xuIiwiaW1wb3J0ICogYXMgZXhwcmVzcyBmcm9tICdleHByZXNzJztcbmltcG9ydCBzZWN1cml0eSBmcm9tICcuL2NvbmZpZy9zZWN1cml0eSc7XG5pbXBvcnQgaW5pdGlhbGl6ZSBmcm9tICcuL21vZGVscyc7XG5pbXBvcnQgcm91dGVzIGZyb20gJy4vcm91dGVzJztcblxuaW1wb3J0IGxvZ2dlciA9IHJlcXVpcmUoJ21vcmdhbicpO1xuY29uc3QgYm9keVBhcnNlciA9IHJlcXVpcmUoJ2JvZHktcGFyc2VyJyk7XG5pbXBvcnQgcGF0aCA9IHJlcXVpcmUoJ3BhdGgnKTtcblxuLy8gQ29uZmlndXJlIGRvdGVudiB0byBsb2FkIGluIHRoZSAuZW52IGZpbGVcbmltcG9ydCBkb3RlbnYgPSByZXF1aXJlKCdkb3RlbnYnKTtcbmNvbnN0IHJlc3VsdCA9IGRvdGVudi5jb25maWcoKTtcblxuY29uc3QgX19kaXJuYW1lID0gcHJvY2Vzcy5lbnYuUFdEOyAvLyBDb3VsZCBicmVhayBvbiBwcm9kXG5cbmNvbnN0IGFwcCA9IGV4cHJlc3MoKTsgLy8gU2V0dXAgZXhwcmVzcyBhcHBcblxuLy8gQWxsb3cgY3Jvc3Mgb3JpZ2luIHJlcXVlc3RzIHdpdGggYXV0aG9yaXphdGlvbiAoZm9yIEFQSSBwdXJwb3NlcylcbmFwcC5hbGwoJyonLCAocmVxOiBleHByZXNzLlJlcXVlc3QsIHJlczogZXhwcmVzcy5SZXNwb25zZSwgbmV4dDogZXhwcmVzcy5OZXh0RnVuY3Rpb24pOiB2b2lkID0+IHtcbiAgICByZXMuaGVhZGVyKCdBY2Nlc3MtQ29udHJvbC1BbGxvdy1PcmlnaW4nLCAnKicpO1xuICAgIHJlcy5oZWFkZXIoJ0FjY2Vzcy1Db250cm9sLUFsbG93LU1ldGhvZHMnLCAnUFVULCBHRVQsIFBPU1QsIERFTEVURSwgT1BUSU9OUycpO1xuICAgIHJlcy5oZWFkZXIoJ0FjY2Vzcy1Db250cm9sLUFsbG93LUNyZWRlbnRpYWxzJywgJ3RydWUnKTtcbiAgICByZXMuaGVhZGVyKCdBY2Nlc3MtQ29udHJvbC1BbGxvdy1PcmlnaW4nLCBgJHtyZXEuaGVhZGVycy5vcmlnaW59YCk7XG4gICAgcmVzLmhlYWRlcihcbiAgICAgICAgJ0FjY2Vzcy1Db250cm9sLUFsbG93LUhlYWRlcnMnLFxuICAgICAgICAnYWNjZXB0LCBjb250ZW50LXR5cGUsIHgtcGFyc2UtYXBwbGljYXRpb24taWQsIHgtcGFyc2UtcmVzdC1hcGkta2V5LCB4LXBhcnNlLXNlc3Npb24tdG9rZW4sIEFVVEhPUklaQVRJT04nLFxuICAgICk7XG4gICAgLy8gSW50ZXJjZXB0IE9QVElPTlMgbWV0aG9kXG4gICAgaWYgKCdPUFRJT05TJyA9PSByZXEubWV0aG9kKSB7XG4gICAgICAgIHJlcy5zZW5kKDIwMCk7XG4gICAgfSBlbHNlIHtcbiAgICAgICAgbmV4dCgpO1xuICAgIH1cbn0pO1xuXG4vLyBTZXR1cCBhdXRoZW50aWNhdGlvbiBhbmQgc2VjdXJpdHlcbnNlY3VyaXR5KGFwcCk7XG5pbml0aWFsaXplKCk7XG5cbi8vIExvZyByZXF1ZXN0cyB0byB0aGUgY29uc29sZS5cbmFwcC51c2UobG9nZ2VyKCdkZXYnKSk7XG5cbi8vIFBhcnNlIGluY29taW5nIHJlcXVlc3RzIGRhdGEgKGh0dHBzOi8vZ2l0aHViLmNvbS9leHByZXNzanMvYm9keS1wYXJzZXIpXG4vLyAgKyBpbmNyZWFzaW5nIGJvZHkgcmVxdWVzdCBsaW1pdCBzaXplXG5hcHAudXNlKGJvZHlQYXJzZXIuanNvbih7IGxpbWl0OiAnMTVtYicsIGV4dGVuZGVkOiB0cnVlIH0pKTtcbmFwcC51c2UoYm9keVBhcnNlci51cmxlbmNvZGVkKHsgbGltaXQ6ICcxNW1iJywgZXh0ZW5kZWQ6IHRydWUgfSkpO1xuXG4vLyBQYXJzZSBxdWVyaWVzIGludG8gbnVtYmVycywgbm90IHN0cmluZ3NcbnZhciBxdWVyeVBhcnNlciA9IHJlcXVpcmUoJ2V4cHJlc3MtcXVlcnktaW50Jyk7XG5hcHAudXNlKGJvZHlQYXJzZXIuanNvbigpKTtcbmFwcC51c2UocXVlcnlQYXJzZXIoKSk7XG5cbmFwcC51c2UoJy9zY3JpcHRzJywgZXhwcmVzcy5zdGF0aWMocGF0aC5qb2luKF9fZGlybmFtZSwgJy4uLy4uL2NsaWVudC9kaXN0JykpKTtcblxuLy8gUmVxdWlyZSByb3V0ZXMgYW5kIHNpbXVsdGFuZW91c2x5IGF0dGFjaCBhcHBcbnJvdXRlcyhhcHApO1xuXG4vLyBDYXRjaCBhbGwgaWYgdGhlIHJvdXRlcyBkb2Vzbid0IGZpbmQgYSB2YWxpZCBVUkxcbmFwcC5nZXQoXG4gICAgJyonLFxuICAgIChyZXE6IGV4cHJlc3MuUmVxdWVzdCwgcmVzOiBleHByZXNzLlJlc3BvbnNlKTogZXhwcmVzcy5SZXNwb25zZSA9PlxuICAgICAgICByZXMuc3RhdHVzKDIwMCkuc2VuZCh7XG4gICAgICAgICAgICBtZXNzYWdlOiAnRm9yIHNvbWUgcmVhc29uLCBub25lIG9mIHRoZSByb3V0ZXMgaGl0Li4uJyxcbiAgICAgICAgfSksXG4pO1xuXG5leHBvcnQgZGVmYXVsdCBhcHA7XG4iLCJpbXBvcnQgKiBhcyBhdXRob3JpemF0aW9uIGZyb20gJ2F1dGgtaGVhZGVyJzsgLy8gRm9yIHBhcnNpbmcgYXV0aGVudGljYXRpb25cbmltcG9ydCB7IEJ1ZmZlciB9IGZyb20gJ2J1ZmZlcic7XG5pbXBvcnQgKiBhcyBleHByZXNzIGZyb20gJ2V4cHJlc3MnO1xuaW1wb3J0ICogYXMgbG9nZ2VyIGZyb20gJ2hlcm9rdS1sb2dnZXInOyAvLyBGb3IgbG9nZ2luZyB0byB0aGUgbG9nIGhlcm9rdSBsb2cgZmlsZVxuXG4vLyBXaGl0ZWxpc3RlZCBJUHNcbmNvbnN0IHZhbGlkSVBzID0gW1xuICAgICc6OmZmZmY6MTI3LjAuMC4xJywgLy8gTG9jYWwgaG9zdFxuICAgICcxMjcuMC4wLjEnLCAvLyBJUHY0IC0gbG9jYWxob3N0ICg/KVxuICAgICc6OjEnLCAvLyBJUHY2XG5dO1xuXG4vLyBXaGl0ZWxpc3RlZCB1cmxzXG5jb25zdCB2YWxpZFJlZmVyZXJzID0gWycoaHR0cHM/Oi8vKT9sb2NhbGhvc3Q6MzAwMC4qJ107XG5jb25zdCB2YWxpZFVSTHMgPSBuZXcgUmVnRXhwKHZhbGlkUmVmZXJlcnMuam9pbignfCcpLCAnaScpOyAvLyBDb252ZXJ0IHRvIHJlZ3VsYXIgZXhwcmVzc2lvblxuXG4vLyBXaGl0ZWxpc3RlZCBhc3NldHMgLSBhbHJlYWR5IG5vdCBpbiB0aGUgYmxhY2tsaXN0IHNvIG5vdCBlbnRpcmVseSBuZWNjZXNzYXJ5IGFueW1vcmVcbmNvbnN0IHZhbGlkUGFnZXMgPSBbJy8nLCAnL2Zhdmljb24uaWNvJywgJy9zY3JpcHRzL2luZGV4LmpzJ107XG5cbi8vIEFueSByb3V0ZSBpbiB0aGUgYmxhY2tsaXN0IHdpbGwgcmVxdWlyZSBhdXRoZW50aWNhdGlvblxuY29uc3QgYmxhY2tsaXN0ID0gL1xcL2FwaS4qLzsgLy8gSnVzdCBBUElzXG5cbi8vIEhhbmRsZSA0MDEgZXJyb3IgY29kZSAtIFVuYXV0aG9yaXplZFxuY29uc3QgdW5hdXRob3JpemVkUmVzcG9uc2UgPSAocmVzOiBleHByZXNzLlJlc3BvbnNlKTogdm9pZCA9PiB7XG4gICAgcmVzLnN0YXR1cyg0MDEpLnNlbmQoJ1JlcXVlc3QgZmFpbGVkOiBCYWQgYXV0aGVudGljYXRpb24nKTtcbn07XG5cbmNvbnN0IHNlY3VyaXR5ID0gKGFwcCk6IHZvaWQgPT4ge1xuICAgIC8vIFNraXAgd2hpdGVsaXN0ZWQgZG9tYWluc1xuICAgIGFwcC51c2UoKHJlcTogZXhwcmVzcy5SZXF1ZXN0LCByZXM6IGV4cHJlc3MuUmVzcG9uc2UsIG5leHQ6IGV4cHJlc3MuTmV4dEZ1bmN0aW9uKTogdm9pZCA9PiB7XG4gICAgICAgIC8vIFJlcXVpcmUgYXV0aGVudGljYXRpb24gaWYgbm90IGluIHRoZSB3aGl0ZWxpc3Qgb3IgaXMgaW4gYmxhY2tsaXN0XG4gICAgICAgIGNvbnN0IGluV2hpdGVsaXN0ID0gdmFsaWRQYWdlcy5pbmRleE9mKHJlcS5vcmlnaW5hbFVybCkgPiAtMTtcbiAgICAgICAgaWYgKCFpbldoaXRlbGlzdCB8fCBibGFja2xpc3QudGVzdChyZXEub3JpZ2luYWxVcmwpKSB7XG4gICAgICAgICAgICAvLyBHZXQgdGhlIElQIGFkZHJlc3NcbiAgICAgICAgICAgIGNvbnN0IGlwOiBzdHJpbmcgPSAocmVxLmhlYWRlcnNbJ3gtZm9yd2FyZGVkLWZvciddIHx8XG4gICAgICAgICAgICAgICAgcmVxLmNvbm5lY3Rpb24ucmVtb3RlQWRkcmVzcyB8fFxuICAgICAgICAgICAgICAgIHJlcS5pcCkgYXMgc3RyaW5nO1xuICAgICAgICAgICAgY29uc3QgcmVmZXJlciA9IHJlcS5oZWFkZXIoJ1JlZmVyZXInKTsgLy8gSWYgdGhlIHJlcXVlc3QgaXMgYmVpbmcgc2VudCBieSBhIHdlYnNpdGVcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKCdJUDogJywgaXApO1xuICAgICAgICAgICAgaWYgKHZhbGlkSVBzLmluZGV4T2YoaXApID4gLTEpIHtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhpcCwgJ2lzIGEgd2hpdGVsaXN0ZWQgSVAnKTtcbiAgICAgICAgICAgICAgICBsb2dnZXIuaW5mbygnV2hpdGVsaXN0ZWQgSVAnLCB7IGlwOiBpcCB9KTtcbiAgICAgICAgICAgICAgICBuZXh0KCk7IC8vIFJlcXVlc3QgdmFsaWRcbiAgICAgICAgICAgIH0gZWxzZSBpZiAocmVmZXJlciAmJiB2YWxpZFVSTHMudGVzdChyZWZlcmVyKSkge1xuICAgICAgICAgICAgICAgIGxvZ2dlci5pbmZvKCdXaGl0ZWxpc3RlZCBSZWZlcmVyJywgeyByZWZlcmVyOiByZWZlcmVyIH0pO1xuICAgICAgICAgICAgICAgIG5leHQoKTsgLy8gUmVxdWVzdCB2YWxpZFxuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAvLyBsb2dnZXIuaW5mbyhcIkNoZWNraW5nIGF1dGhvcml6YXRpb24uLi5cIilcbiAgICAgICAgICAgICAgICBjb25zdCBhdXRoSGVhZGVyID0gcmVxLmhlYWRlclsnYXV0aG9yaXphdGlvbiddXG4gICAgICAgICAgICAgICAgICAgID8gcmVxLmhlYWRlclsnYXV0aG9yaXphdGlvbiddXG4gICAgICAgICAgICAgICAgICAgIDogcmVxLmhlYWRlcnNbJ2F1dGhvcml6YXRpb24nXTtcblxuICAgICAgICAgICAgICAgIC8vIEZhaWwgaWYgbm8gYmFzaWMgYXV0aGVudGljYXRpb24gcHJvdmlkZWRcbiAgICAgICAgICAgICAgICBpZiAoIWF1dGhIZWFkZXIpIHtcbiAgICAgICAgICAgICAgICAgICAgLy8gTm8gYXV0aG9yaXphdGlvblxuICAgICAgICAgICAgICAgICAgICByZXMuc2V0KCdXV1ctQXV0aGVudGljYXRlJywgJ0Jhc2ljIHJlYWxtPVwiQXV0aG9yaXphdGlvbiBSZXF1aXJlZFwiJyk7IC8vIFByb21wdCBjaGFsbGVuZ2UgcGFzc3dvcmRcbiAgICAgICAgICAgICAgICAgICAgbG9nZ2VyLmVycm9yKCdObyBBdXRoZW50aWNhdGlvbicsIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlwOiBpcCxcbiAgICAgICAgICAgICAgICAgICAgICAgIHJlZmVyZXI6IHJlZmVyZXIsXG4gICAgICAgICAgICAgICAgICAgICAgICB1cmw6IHJlcS5vcmlnaW5hbFVybCxcbiAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiB1bmF1dGhvcml6ZWRSZXNwb25zZShyZXMpO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIC8vIFJldHJlaXZlIGF1dGhvcml6YXRpb24gdG9rZW5cbiAgICAgICAgICAgICAgICBjb25zdCBhdXRoID0gYXV0aG9yaXphdGlvbi5wYXJzZShhdXRoSGVhZGVyKTtcblxuICAgICAgICAgICAgICAgIC8vIEdldCB0aGUgYmFzaWMgYXV0aCBjb21wb25lbnRcbiAgICAgICAgICAgICAgICBjb25zdCBbdW4sIHB3XSA9IG5ldyBCdWZmZXIoYXV0aC50b2tlbiwgJ2Jhc2U2NCcpLnRvU3RyaW5nKCkuc3BsaXQoJzonLCAyKTtcblxuICAgICAgICAgICAgICAgIC8vIFZlcmlmeSBhdXRoZW50aWNhdGlvbi5cbiAgICAgICAgICAgICAgICBpZiAodW4gIT09ICdhZG1pbicgfHwgcHcgIT09IHByb2Nlc3MuZW52LkFETUlOX0FQSV9LRVkpIHtcbiAgICAgICAgICAgICAgICAgICAgbG9nZ2VyLmVycm9yKCdVbmF1dGhvcml6ZWQgQ3JlZGVudGlhbHMnLCB7IHVzZXJuYW1lOiB1biwgcGFzc3dvcmQ6IHB3IH0pO1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gdW5hdXRob3JpemVkUmVzcG9uc2UocmVzKTtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICBsb2dnZXIuaW5mbygnVXNlciBBdXRoZW50aWNhdGVkJywgeyB1c2VybmFtZTogdW4sIHBhc3N3b3JkOiBwdyB9KTtcbiAgICAgICAgICAgICAgICBuZXh0KCk7IC8vIFJlcXVlc3QgdmFsaWRcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIC8vIFNraXAgYXV0aGVudGljYXRpb25cbiAgICAgICAgICAgIGxvZ2dlci5pbmZvKCdXaGl0ZWxpc3Qgb3Igbm90IGluIGJsYWNrbGlzdCcsIHsgdXJsOiByZXEub3JpZ2luYWxVcmwgfSk7XG4gICAgICAgICAgICBuZXh0KCk7XG4gICAgICAgIH1cbiAgICB9KTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IHNlY3VyaXR5O1xuIiwiaW1wb3J0ICogYXMgZXhwcmVzcyBmcm9tICdleHByZXNzJztcbmltcG9ydCBBcnRpc3QgZnJvbSAnLi4vLi4vbW9kZWxzL2FydGlzdCc7XG5pbXBvcnQgUHJpY2UgZnJvbSAnLi4vLi4vbW9kZWxzL3ByaWNlJztcbmltcG9ydCBUcmFjayBmcm9tICcuLi8uLi9tb2RlbHMvdHJhY2snO1xuaW1wb3J0IHsgc3RyaXBQcmljZSB9IGZyb20gJy4uL3ByaWNlJztcblxuZXhwb3J0IGNvbnN0IGdldEJyb3dzZUFydGlzdHMgPSAocmVxOiBleHByZXNzLlJlcXVlc3QsIHJlczogZXhwcmVzcy5SZXNwb25zZSk6IGFueSA9PiB7XG4gICAgcmV0dXJuIEFydGlzdC5maW5kQWxsKClcbiAgICAgICAgLnRoZW4oXG4gICAgICAgICAgICAoYXJ0aXN0czogQXJ0aXN0W10pOiBleHByZXNzLlJlc3BvbnNlID0+IHtcbiAgICAgICAgICAgICAgICByZXR1cm4gcmVzLnN0YXR1cygyMDApLnNlbmQoe1xuICAgICAgICAgICAgICAgICAgICBzdWNjZXNzOiB0cnVlLFxuICAgICAgICAgICAgICAgICAgICBhcnRpc3RzLFxuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfSxcbiAgICAgICAgKVxuICAgICAgICAuY2F0Y2goKGVycm9yOiBFcnJvcik6IGV4cHJlc3MuUmVzcG9uc2UgPT4gcmVzLnN0YXR1cyg0MDApLnNlbmQoZXJyb3IpKTsgLy8gRXJyb3Jcbn07XG5cbmV4cG9ydCBjb25zdCBnZXRBcnRpc3RzID0gKHJlcTogZXhwcmVzcy5SZXF1ZXN0LCByZXM6IGV4cHJlc3MuUmVzcG9uc2UpOiBhbnkgPT4ge1xuICAgIHJldHVybiBBcnRpc3QuZmluZEFsbCh7IGluY2x1ZGU6IFtQcmljZSwgVHJhY2tdIH0pXG4gICAgICAgIC50aGVuKFxuICAgICAgICAgICAgKGFydGlzdHM6IEFydGlzdFtdKTogZXhwcmVzcy5SZXNwb25zZSA9PiB7XG4gICAgICAgICAgICAgICAgY29uc3QgZGF0YSA9IGFydGlzdHMubWFwKChhcnRpc3Q6IEFydGlzdCkgPT4gKHtcbiAgICAgICAgICAgICAgICAgICAgLi4uYXJ0aXN0LmRhdGFWYWx1ZXMsXG4gICAgICAgICAgICAgICAgICAgIHByaWNlczogYXJ0aXN0LnByaWNlcy5tYXAoKHByaWNlKSA9PiBzdHJpcFByaWNlKHByaWNlKSksXG4gICAgICAgICAgICAgICAgfSkpO1xuICAgICAgICAgICAgICAgIHJldHVybiByZXMuc3RhdHVzKDIwMCkuc2VuZCh7XG4gICAgICAgICAgICAgICAgICAgIHN1Y2Nlc3M6IHRydWUsXG4gICAgICAgICAgICAgICAgICAgIGFydGlzdHM6IGRhdGEsXG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9LFxuICAgICAgICApXG4gICAgICAgIC5jYXRjaCgoZXJyb3I6IEVycm9yKTogZXhwcmVzcy5SZXNwb25zZSA9PiByZXMuc3RhdHVzKDQwMCkuc2VuZChlcnJvcikpOyAvLyBFcnJvclxufTtcblxuZXhwb3J0IGludGVyZmFjZSBBcnRpc3RHZXRSZXF1ZXN0IGV4dGVuZHMgZXhwcmVzcy5SZXF1ZXN0IHtcbiAgICBpZDogc3RyaW5nO1xufVxuXG5leHBvcnQgY29uc3QgZ2V0QXJ0aXN0QnlJZCA9IChyZXE6IEFydGlzdEdldFJlcXVlc3QsIHJlczogZXhwcmVzcy5SZXNwb25zZSk6IGFueSA9PiB7XG4gICAgY29uc3QgeyBpZCB9ID0gcmVxLnBhcmFtcztcbiAgICByZXR1cm4gQXJ0aXN0LmZpbmRCeUlkKGlkLCB7IGluY2x1ZGU6IFtQcmljZSwgVHJhY2tdIH0pXG4gICAgICAgIC50aGVuKFxuICAgICAgICAgICAgKGFydGlzdDogQXJ0aXN0KTogZXhwcmVzcy5SZXNwb25zZSA9PiB7XG4gICAgICAgICAgICAgICAgY29uc3QgZGF0YSA9IHtcbiAgICAgICAgICAgICAgICAgICAgLi4uYXJ0aXN0LmRhdGFWYWx1ZXMsXG4gICAgICAgICAgICAgICAgICAgIHByaWNlczogYXJ0aXN0LnByaWNlcy5tYXAoKHByaWNlKSA9PiBzdHJpcFByaWNlKHByaWNlKSksXG4gICAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgICAgICByZXR1cm4gcmVzLnN0YXR1cygyMDApLnNlbmQoe1xuICAgICAgICAgICAgICAgICAgICBzdWNjZXNzOiB0cnVlLFxuICAgICAgICAgICAgICAgICAgICBhcnRpc3Q6IGRhdGEsXG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9LFxuICAgICAgICApXG4gICAgICAgIC5jYXRjaChcbiAgICAgICAgICAgIChlcnJvcjogRXJyb3IpOiBleHByZXNzLlJlc3BvbnNlID0+XG4gICAgICAgICAgICAgICAgcmVzLnN0YXR1cyg0MDApLnNlbmQoe1xuICAgICAgICAgICAgICAgICAgICBzdWNjZXNzOiBmYWxzZSxcbiAgICAgICAgICAgICAgICAgICAgZXJyb3IsXG4gICAgICAgICAgICAgICAgfSksXG4gICAgICAgICk7IC8vIEVycm9yXG59O1xuIiwiaW1wb3J0IFByaWNlIGZyb20gJy4uLy4uL21vZGVscy9wcmljZSc7XG5cbmV4cG9ydCBjb25zdCBzdHJpcFByaWNlID0gKHByaWNlOiBQcmljZSkgPT4gKHtcbiAgICBkYXRlOiBwcmljZS5kYXRlLFxuICAgIHByaWNlOiBwcmljZS5wcmljZSxcbn0pO1xuIiwiaW1wb3J0ICogYXMgZXhwcmVzcyBmcm9tICdleHByZXNzJztcbmltcG9ydCBBcnRpc3QgZnJvbSAnLi4vLi4vbW9kZWxzL2FydGlzdCc7XG5pbXBvcnQgUHJpY2UgZnJvbSAnLi4vLi4vbW9kZWxzL3ByaWNlJztcbmltcG9ydCBUcmFuc2FjdGlvbiBmcm9tICcuLi8uLi9tb2RlbHMvdHJhbnNhY3Rpb24nO1xuaW1wb3J0IFVzZXIgZnJvbSAnLi4vLi4vbW9kZWxzL3VzZXInO1xuXG5leHBvcnQgaW50ZXJmYWNlIFVzZXJHZXRSZXF1ZXN0IGV4dGVuZHMgZXhwcmVzcy5SZXF1ZXN0IHtcbiAgICBpZDogc3RyaW5nO1xufVxuXG5leHBvcnQgY29uc3QgZ2V0VXNlciA9IChyZXE6IFVzZXJHZXRSZXF1ZXN0LCByZXM6IGV4cHJlc3MuUmVzcG9uc2UpOiBhbnkgPT4ge1xuICAgIGNvbnN0IHsgaWQgfSA9IHJlcS5wYXJhbXM7XG4gICAgcmV0dXJuIFVzZXIuZmluZEJ5SWQoaWQsIHtcbiAgICAgICAgaW5jbHVkZTogW1xuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIG1vZGVsOiBUcmFuc2FjdGlvbixcbiAgICAgICAgICAgICAgICBpbmNsdWRlOiBbUHJpY2UsIEFydGlzdF0sXG4gICAgICAgICAgICB9LFxuICAgICAgICBdLFxuICAgIH0pXG4gICAgICAgIC50aGVuKCh1c2VyOiBVc2VyKTogZXhwcmVzcy5SZXNwb25zZSA9PiByZXMuc3RhdHVzKDIwMCkuc2VuZCh7IHN1Y2Nlc3M6IHRydWUsIHVzZXIgfSkpXG4gICAgICAgIC5jYXRjaCgoZXJyb3I6IEVycm9yKTogZXhwcmVzcy5SZXNwb25zZSA9PiByZXMuc3RhdHVzKDQwMCkuc2VuZCh7IHN1Y2Nlc3M6IGZhbHNlLCBlcnJvciB9KSk7IC8vIEVycm9yXG59O1xuXG5leHBvcnQgY29uc3QgZ2V0RnJpZW5kcyA9IChyZXE6IGV4cHJlc3MuUmVxdWVzdCwgcmVzOiBleHByZXNzLlJlc3BvbnNlKTogYW55ID0+IHtcbiAgICByZXR1cm4gVXNlci5maW5kQWxsKHtcbiAgICAgICAgaW5jbHVkZTogW1xuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIG1vZGVsOiBUcmFuc2FjdGlvbixcbiAgICAgICAgICAgICAgICBpbmNsdWRlOiBbUHJpY2UsIEFydGlzdF0sXG4gICAgICAgICAgICB9LFxuICAgICAgICBdLFxuICAgIH0pXG4gICAgICAgIC50aGVuKFxuICAgICAgICAgICAgKHVzZXJzOiBVc2VyW10pOiBleHByZXNzLlJlc3BvbnNlID0+XG4gICAgICAgICAgICAgICAgcmVzXG4gICAgICAgICAgICAgICAgICAgIC5zdGF0dXMoMjAwKVxuICAgICAgICAgICAgICAgICAgICAuc2VuZCh7IHN1Y2Nlc3M6IHRydWUsIHVzZXJzOiB1c2Vycy5maWx0ZXIoKHVzZXIpID0+IHVzZXIuaWQgIT0gMSkgfSksXG4gICAgICAgIClcbiAgICAgICAgLmNhdGNoKChlcnJvcjogRXJyb3IpOiBleHByZXNzLlJlc3BvbnNlID0+IHJlcy5zdGF0dXMoNDAwKS5zZW5kKHsgc3VjY2VzczogZmFsc2UsIGVycm9yIH0pKTsgLy8gRXJyb3Jcbn07XG4iLCIvLyBBcHBsaWNhdGlvbiBlbnRyeSwgc2V0dGluZyB1cCBzZXJ2ZXJcbmltcG9ydCBhcHAgZnJvbSAnLi9hcHAnOyAvLyBUaGUgZXhwcmVzcyBhcHAgd2UganVzdCBjcmVhdGVkXG5cbmNvbnN0IHBvcnQgPSBwYXJzZUludChwcm9jZXNzLmVudi5QT1JULCAxMCkgfHwgNTAwMDsgLy8gVXNlIHBvcnQgNTAwMFxuYXBwLnNldCgncG9ydCcsIHBvcnQpO1xuXG4vLyAwLjAuMC4wIG1ha2VzIGl0IGF2YWlsYWJsZSBvbiB5b3VyIGxvY2FsIG5ldHdvcmtcbi8vIGFwcC5saXN0ZW4ocG9ydCwgJzAuMC4wLjAnKTtcbmFwcC5saXN0ZW4ocG9ydCk7XG4iLCJpbXBvcnQgeyBDb2x1bW4sIENyZWF0ZWRBdCwgSGFzTWFueSwgTW9kZWwsIFRhYmxlLCBVcGRhdGVkQXQgfSBmcm9tICdzZXF1ZWxpemUtdHlwZXNjcmlwdCc7XG5pbXBvcnQgUHJpY2UgZnJvbSAnLi9wcmljZSc7XG5pbXBvcnQgVHJhY2sgZnJvbSAnLi90cmFjayc7XG5pbXBvcnQgVHJhbnNhY3Rpb24gZnJvbSAnLi90cmFuc2FjdGlvbic7XG5cbkBUYWJsZSh7XG4gICAgbW9kZWxOYW1lOiAnQXJ0aXN0JyxcbiAgICB0YWJsZU5hbWU6ICdBcnRpc3QnLFxuICAgIG5hbWU6IHtcbiAgICAgICAgc2luZ3VsYXI6ICdBcnRpc3QnLFxuICAgICAgICBwbHVyYWw6ICdBcnRpc3RzJyxcbiAgICB9LFxuICAgIGZyZWV6ZVRhYmxlTmFtZTogdHJ1ZSxcbn0pXG5jbGFzcyBBcnRpc3QgZXh0ZW5kcyBNb2RlbDxBcnRpc3Q+IHtcbiAgICBAQ29sdW1uXG4gICAgbmFtZTogc3RyaW5nO1xuXG4gICAgQENvbHVtblxuICAgIHNwb3RpZnlVcmw6IHN0cmluZztcblxuICAgIEBDb2x1bW5cbiAgICBtb250aGx5TGlzdGVuczogbnVtYmVyO1xuXG4gICAgQENvbHVtblxuICAgIGZvbGxvd2VyczogbnVtYmVyO1xuXG4gICAgQENvbHVtblxuICAgIGJpbzogc3RyaW5nO1xuXG4gICAgQENvbHVtblxuICAgIGZvdW5kZWRZZWFyOiBudW1iZXI7XG5cbiAgICBAQ29sdW1uXG4gICAgaW1hZ2U6IHN0cmluZztcblxuICAgIEBDb2x1bW5cbiAgICBzcG90aWZ5SWQ6IHN0cmluZztcblxuICAgIEBDb2x1bW5cbiAgICBwb3B1bGFyaXR5OiBudW1iZXI7XG5cbiAgICBAQ29sdW1uXG4gICAgZ2VucmU6IHN0cmluZztcblxuICAgIEBIYXNNYW55KCgpID0+IFByaWNlKVxuICAgIHByaWNlczogUHJpY2VbXTtcblxuICAgIEBIYXNNYW55KCgpID0+IFRyYW5zYWN0aW9uKVxuICAgIHRyYW5zYWN0aW9uczogVHJhbnNhY3Rpb25bXTtcblxuICAgIEBIYXNNYW55KCgpID0+IFRyYWNrKVxuICAgIHRyYWNrczogVHJhY2tbXTtcblxuICAgIEBDcmVhdGVkQXRcbiAgICBjcmVhdGVkQXQ6IERhdGU7XG5cbiAgICBAVXBkYXRlZEF0XG4gICAgdXBkYXRlZEF0OiBEYXRlO1xufVxuXG5leHBvcnQgZGVmYXVsdCBBcnRpc3Q7XG4iLCJpbXBvcnQgeyBTZXF1ZWxpemUgfSBmcm9tICdzZXF1ZWxpemUtdHlwZXNjcmlwdCc7XG5pbXBvcnQgQXJ0aXN0IGZyb20gJy4vYXJ0aXN0JztcbmltcG9ydCBQcmljZSBmcm9tICcuL3ByaWNlJztcbmltcG9ydCBUcmFjayBmcm9tICcuL3RyYWNrJztcbmltcG9ydCBUcmFuc2FjdGlvbiBmcm9tICcuL3RyYW5zYWN0aW9uJztcbmltcG9ydCBVc2VyIGZyb20gJy4vdXNlcic7XG5cbmltcG9ydCBsb2dnZXIgPSByZXF1aXJlKCdoZXJva3UtbG9nZ2VyJyk7IC8vIEZvciBsb2dnaW5nIHRvIHRoZSBsb2cgaGVyb2t1IGxvZyBmaWxlXG5cbmltcG9ydCBjb25maWdGaWxlID0gcmVxdWlyZSgnLi4vY29uZmlnL2NvbmZpZy5qc29uJyk7XG5cbmRlY2xhcmUgdmFyIHByb2Nlc3M6IHtcbiAgICBlbnY6IHtcbiAgICAgICAgTk9ERV9FTlY6IHN0cmluZztcbiAgICAgICAgREFUQUJBU0VfVVJMOiBzdHJpbmc7XG4gICAgfTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0ICgpOiB2b2lkID0+IHtcbiAgICB2YXIgZW52ID0gcHJvY2Vzcy5lbnYuTk9ERV9FTlYgfHwgJ2RldmVsb3BtZW50JzsgLy8gRGV0ZXJtaW5lIGlmIHVzaW5nIGRldmVsb3BtZW50XG4gICAgLy8gY29uc3QgX19kaXJuYW1lID0gcHJvY2Vzcy5lbnYuUFdEOyAvLyBDb3VsZCBicmVhayBvbiBwcm9kXG4gICAgLy8gY29uc3QgY3VycmVudERpciA9IHBhdGguam9pbihfX2Rpcm5hbWUsICcuL3NlcnZlci9zcmMvbW9kZWxzJyk7XG5cbiAgICAvLyBSZWd1bGFyIGBtb2R1bGUuZmlsZW5hbWVgIGlzIHVuZGVmaW5lZCBpbiBsb2NhbCBkZXZcbiAgICAvLyBjb25zdCBmaWxlbmFtZSA9IG1vZHVsZS5maWxlbmFtZSAhPT0gdW5kZWZpbmVkID8gbW9kdWxlLmZpbGVuYW1lIDogJ2luZGV4LnRzJztcbiAgICAvLyB2YXIgYmFzZW5hbWUgPSBwYXRoLmJhc2VuYW1lKGZpbGVuYW1lKTtcblxuICAgIHZhciBkYjogYW55ID0ge307XG5cbiAgICAvLyBJIHVzZSB0aGUgbm9kZS1jb25maWcgcGFja2FnZSB0byBtYW5hZ2UgdGhlIERCIGNvbmZpZyB5b3UgY2FuIGNob29zZVxuICAgIC8vIHRvIHN0aWNrIHdpdGggdGhlIG9yaWdpbmFsIHZlcnNpb24uIEFuZCBJIHJlbW92ZWQgZW52aXJvbm1lbnQgdmFyaWFibGVcbiAgICAvLyBzdXBwb3J0IGJlY2F1c2UgSSBkb24ndCBuZWVkIGl0LlxuICAgIGxldCBzZXF1ZWxpemU6IGFueSA9IHt9O1xuICAgIGNvbnNvbGUubG9nKHByb2Nlc3MuZW52Lk5PREVfRU5WKTsgLy8gVE9ETzogRm9yIHNvbWUgcmVhc29uLCBpbiBwcm9kdWN0aW9uLCB0aGlzIHJlYWRzIGFzICdkZXZlbG9wbWVudCdcbiAgICBsb2dnZXIuaW5mbyhgcHJvY2Vzcy5lbnYuTk9ERV9FTlY6ICR7cHJvY2Vzcy5lbnYuTk9ERV9FTlZ9YCk7XG4gICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WID09ICdwcm9kdWN0aW9uJykge1xuICAgICAgICAvLyBGcm9tIHRoZSBlbnZpcm9ubWVudCwgZXh0cmFjdCB0aGUga2V5IHdpdGggdGhlIG5hbWUgcHJvdmlkZWQgaW4gdGhlIGNvbmZpZyBhcyB1c2VfZW52X3ZhcmlhYmxlXG4gICAgICAgIC8vIGFuZCB1c2UgdGhhdCB0byBlc3RhYmxpc2ggYSBjb25uZWN0aW9uIHRvIG91ciBkYXRhYmFzZS5cbiAgICAgICAgY29uc29sZS5sb2coJ1VzaW5nIGRhdGFiYXNlIFVSTDonLCBwcm9jZXNzLmVudi5EQVRBQkFTRV9VUkwpO1xuICAgICAgICBsb2dnZXIuaW5mbygnVXNpbmcgZGF0YWJhc2UgVVJMOicsIHsgdXJsOiBwcm9jZXNzLmVudi5EQVRBQkFTRV9VUkwgfSk7XG4gICAgICAgIHNlcXVlbGl6ZSA9IG5ldyBTZXF1ZWxpemUocHJvY2Vzcy5lbnYuREFUQUJBU0VfVVJMKTsgLy8gRXN0YWJsaXNoIGNvbm5lY3Rpb24gdXNpbmcgZW52aXJvbm1lbnQgdmFyaWFibGVzXG4gICAgfSBlbHNlIHtcbiAgICAgICAgdmFyIGNvbmZpZyA9IGNvbmZpZ0ZpbGVbZW52XTsgLy8gSWYgbG9jYWwsIHVzZSBjb25maWdcbiAgICAgICAgY29uc29sZS5sb2coJ1VzaW5nIGxvY2FsIGNvbmZpZ3VyYXRpb246JywgY29uZmlnKTtcbiAgICAgICAgbG9nZ2VyLmluZm8oJ1VzaW5nIGxvY2FsIGNvbmZpZ3VyYXRpb246JywgeyBjb25maWcgfSk7XG4gICAgICAgIHNlcXVlbGl6ZSA9IG5ldyBTZXF1ZWxpemUoe1xuICAgICAgICAgICAgLi4uY29uZmlnLFxuICAgICAgICAgICAgLy8gZGF0YWJhc2U6IGNvbmZpZy5kYXRhYmFzZSxcbiAgICAgICAgICAgIC8vIHVzZXJuYW1lOiBjb25maWcudXNlcm5hbWUsXG4gICAgICAgICAgICAvLyBwYXNzd29yZDogY29uZmlnLnBhc3N3b3JkLFxuICAgICAgICB9KTsgLy8gQ29ubmVjdFxuICAgIH1cblxuICAgIHNlcXVlbGl6ZS5hZGRNb2RlbHMoW1RyYW5zYWN0aW9uLCBVc2VyLCBBcnRpc3QsIFByaWNlLCBUcmFja10pO1xuICAgIC8vIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViA9PSAncHJvZHVjdGlvbicpIHtcbiAgICAvLyAgICAgc2VxdWVsaXplLnN5bmMoKTsgLy8gRG9uJ3QgY29ycnVwdCBwcm9kdWN0aW9uIGRhdGFcbiAgICAvLyB9IGVsc2Uge1xuICAgIC8vIHNlcXVlbGl6ZS5zeW5jKHsgZm9yY2U6IHRydWUgfSk7IC8vIFRPRE86IFJlbW92ZSBiZWZvcmUgbGl2ZVxuICAgIHNlcXVlbGl6ZS5zeW5jKHsgYWx0ZXI6IHRydWUgfSk7XG4gICAgLy8gc2VxdWVsaXplLnN5bmMoKTtcbiAgICAvLyB9XG5cbiAgICBkYi5zZXF1ZWxpemUgPSBzZXF1ZWxpemU7XG4gICAgZGIuU2VxdWVsaXplID0gU2VxdWVsaXplO1xufTtcbiIsImltcG9ydCB7IEJlbG9uZ3NUbywgQ29sdW1uLCBGb3JlaWduS2V5LCBIYXNNYW55LCBNb2RlbCwgVGFibGUgfSBmcm9tICdzZXF1ZWxpemUtdHlwZXNjcmlwdCc7XG5pbXBvcnQgQXJ0aXN0IGZyb20gJy4vYXJ0aXN0JztcbmltcG9ydCBUcmFuc2FjdGlvbiBmcm9tICcuL3RyYW5zYWN0aW9uJztcblxuQFRhYmxlKHtcbiAgICBuYW1lOiB7XG4gICAgICAgIHNpbmd1bGFyOiAnUHJpY2UnLFxuICAgICAgICBwbHVyYWw6ICdQcmljZXMnLFxuICAgIH0sXG4gICAgZnJlZXplVGFibGVOYW1lOiB0cnVlLFxufSlcbmNsYXNzIFByaWNlIGV4dGVuZHMgTW9kZWw8UHJpY2U+IHtcbiAgICBAQ29sdW1uXG4gICAgZGF0ZTogRGF0ZTtcblxuICAgIEBDb2x1bW5cbiAgICBwcmljZTogbnVtYmVyO1xuXG4gICAgQEZvcmVpZ25LZXkoKCkgPT4gQXJ0aXN0KVxuICAgIEBDb2x1bW5cbiAgICBhcnRpc3RJZDogbnVtYmVyO1xuXG4gICAgQEJlbG9uZ3NUbygoKSA9PiBBcnRpc3QpXG4gICAgYXJ0aXN0OiBBcnRpc3Q7XG5cbiAgICBASGFzTWFueSgoKSA9PiBUcmFuc2FjdGlvbilcbiAgICB0cmFuc2FjdGlvbnM6IFRyYW5zYWN0aW9uW107XG59XG5cbmV4cG9ydCBkZWZhdWx0IFByaWNlO1xuIiwiaW1wb3J0IHsgQmVsb25nc1RvLCBDb2x1bW4sIEZvcmVpZ25LZXksIE1vZGVsLCBUYWJsZSB9IGZyb20gJ3NlcXVlbGl6ZS10eXBlc2NyaXB0JztcbmltcG9ydCBBcnRpc3QgZnJvbSAnLi9hcnRpc3QnO1xuXG5AVGFibGUoe1xuICAgIG5hbWU6IHtcbiAgICAgICAgc2luZ3VsYXI6ICdUcmFjaycsXG4gICAgICAgIHBsdXJhbDogJ1RyYWNrcycsXG4gICAgfSxcbiAgICBmcmVlemVUYWJsZU5hbWU6IHRydWUsXG59KVxuY2xhc3MgVHJhY2sgZXh0ZW5kcyBNb2RlbDxUcmFjaz4ge1xuICAgIEBDb2x1bW5cbiAgICB0cmFja1Nwb3RpZnlJZDogc3RyaW5nO1xuXG4gICAgQENvbHVtblxuICAgIG5hbWU6IHN0cmluZztcblxuICAgIEBDb2x1bW5cbiAgICBkdXJhdGlvbk1zOiBudW1iZXI7XG5cbiAgICBAQ29sdW1uXG4gICAgdXJsOiBzdHJpbmc7XG5cbiAgICBAQ29sdW1uXG4gICAgYWxidW1OYW1lOiBzdHJpbmc7XG5cbiAgICBAQ29sdW1uXG4gICAgdGh1bWJuYWlsOiBzdHJpbmc7XG5cbiAgICBAQ29sdW1uXG4gICAgcmVsZWFzZURhdGU6IHN0cmluZztcblxuICAgIEBGb3JlaWduS2V5KCgpID0+IEFydGlzdClcbiAgICBAQ29sdW1uXG4gICAgYXJ0aXN0SWQ6IG51bWJlcjtcblxuICAgIEBCZWxvbmdzVG8oKCkgPT4gQXJ0aXN0KVxuICAgIGFydGlzdDogQXJ0aXN0O1xufVxuXG5leHBvcnQgZGVmYXVsdCBUcmFjaztcbiIsImltcG9ydCB7IEJlbG9uZ3NUbywgQ29sdW1uLCBGb3JlaWduS2V5LCBNb2RlbCwgVGFibGUgfSBmcm9tICdzZXF1ZWxpemUtdHlwZXNjcmlwdCc7XG5pbXBvcnQgQXJ0aXN0IGZyb20gJy4vYXJ0aXN0JztcbmltcG9ydCBQcmljZSBmcm9tICcuL3ByaWNlJztcbmltcG9ydCBVc2VyIGZyb20gJy4vdXNlcic7XG5cbkBUYWJsZSh7XG4gICAgbmFtZToge1xuICAgICAgICBzaW5ndWxhcjogJ1RyYW5zYWN0aW9uJyxcbiAgICAgICAgcGx1cmFsOiAnVHJhbnNhY3Rpb25zJyxcbiAgICB9LFxuICAgIGZyZWV6ZVRhYmxlTmFtZTogdHJ1ZSxcbn0pXG5jbGFzcyBUcmFuc2FjdGlvbiBleHRlbmRzIE1vZGVsPFRyYW5zYWN0aW9uPiB7XG4gICAgQENvbHVtblxuICAgIGRhdGU6IERhdGU7XG5cbiAgICBARm9yZWlnbktleSgoKSA9PiBVc2VyKVxuICAgIEBDb2x1bW5cbiAgICB1c2VySWQ6IG51bWJlcjtcblxuICAgIEBCZWxvbmdzVG8oKCkgPT4gVXNlcilcbiAgICB1c2VyOiBVc2VyO1xuXG4gICAgQEZvcmVpZ25LZXkoKCkgPT4gQXJ0aXN0KVxuICAgIEBDb2x1bW5cbiAgICBhcnRpc3RJZDogbnVtYmVyO1xuXG4gICAgQEJlbG9uZ3NUbygoKSA9PiBBcnRpc3QpXG4gICAgYXJ0aXN0OiBBcnRpc3Q7XG5cbiAgICBARm9yZWlnbktleSgoKSA9PiBQcmljZSlcbiAgICBAQ29sdW1uXG4gICAgcHJpY2VJZDogbnVtYmVyO1xuXG4gICAgQEJlbG9uZ3NUbygoKSA9PiBQcmljZSlcbiAgICBwcmljZTogUHJpY2U7XG59XG5cbmV4cG9ydCBkZWZhdWx0IFRyYW5zYWN0aW9uO1xuIiwiaW1wb3J0IHtcbiAgICBBbGxvd051bGwsXG4gICAgQ29sdW1uLFxuICAgIENyZWF0ZWRBdCxcbiAgICBIYXNNYW55LFxuICAgIE1vZGVsLFxuICAgIFRhYmxlLFxuICAgIFVwZGF0ZWRBdCxcbn0gZnJvbSAnc2VxdWVsaXplLXR5cGVzY3JpcHQnO1xuaW1wb3J0IFRyYW5zYWN0aW9uIGZyb20gJy4vdHJhbnNhY3Rpb24nO1xuXG5AVGFibGUoeyB0YWJsZU5hbWU6ICdVc2VyJyB9KVxuY2xhc3MgVXNlciBleHRlbmRzIE1vZGVsPFVzZXI+IHtcbiAgICBAQWxsb3dOdWxsKGZhbHNlKVxuICAgIEBDb2x1bW5cbiAgICB1c2VybmFtZTogc3RyaW5nO1xuXG4gICAgQENvbHVtblxuICAgIGZpcnN0TmFtZTogc3RyaW5nO1xuXG4gICAgQENvbHVtblxuICAgIGxhc3ROYW1lOiBzdHJpbmc7XG5cbiAgICBASGFzTWFueSgoKSA9PiBUcmFuc2FjdGlvbilcbiAgICB0cmFuc2FjdGlvbnM6IFRyYW5zYWN0aW9uW107XG5cbiAgICBAQ3JlYXRlZEF0XG4gICAgY3JlYXRlZEF0OiBEYXRlO1xuXG4gICAgQFVwZGF0ZWRBdFxuICAgIHVwZGF0ZWRBdDogRGF0ZTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgVXNlcjtcbiIsImltcG9ydCAqIGFzIGV4cHJlc3MgZnJvbSAnZXhwcmVzcyc7XG5pbXBvcnQgeyBnZXRBcnRpc3RCeUlkLCBnZXRBcnRpc3RzLCBnZXRCcm93c2VBcnRpc3RzIH0gZnJvbSAnLi4vY29udHJvbGxlcnMvYXJ0aXN0JztcblxuZXhwb3J0IGRlZmF1bHQgKGFwcDogZXhwcmVzcy5BcHBsaWNhdGlvbikgPT4ge1xuICAgIGFwcC5nZXQoJy9hcGkvYXJ0aXN0LycsIGdldEFydGlzdHMpO1xuICAgIGFwcC5nZXQoJy9hcGkvYXJ0aXN0L2Jyb3dzZScsIGdldEJyb3dzZUFydGlzdHMpO1xuXG4gICAgYXBwLmdldCgnL2FwaS9hcnRpc3QvOmlkJywgZ2V0QXJ0aXN0QnlJZCk7XG59O1xuIiwiaW1wb3J0ICogYXMgZXhwcmVzcyBmcm9tICdleHByZXNzJztcbmltcG9ydCB7IGdldEZyaWVuZHMgfSBmcm9tICcuLi9jb250cm9sbGVycy91c2VyJztcblxuZXhwb3J0IGRlZmF1bHQgKGFwcDogZXhwcmVzcy5BcHBsaWNhdGlvbik6IHZvaWQgPT4ge1xuICAgIGFwcC5nZXQoJy9hcGkvZnJpZW5kcycsIGdldEZyaWVuZHMpO1xufTtcbiIsIi8vIHNlcnZlci9yb3V0ZXMvaW5kZXguanNcbi8vIEFQSSByb3V0ZSB0aGF0IG1hcHMgZnVuY3Rpb25hbGl0eVxuaW1wb3J0ICogYXMgZXhwcmVzcyBmcm9tICdleHByZXNzJztcbmltcG9ydCAqIGFzIHBhdGggZnJvbSAncGF0aCc7XG5pbXBvcnQgQXJ0aXN0Um91dGVzIGZyb20gJy4vYXJ0aXN0JztcbmltcG9ydCBGcmllbmRSb3V0ZXMgZnJvbSAnLi9mcmllbmRzJztcbmltcG9ydCBVc2VyUm91dGVzIGZyb20gJy4vdXNlcic7XG5cbi8vIFJlcXVpcmVzIGFuIGFwcCBhcyBhbiBpbnB1dCBzbyBjYW4gZGlyZWN0IHRoZSB1c2VyIGFjY29yZGluZ2x5XG5jb25zdCByb3V0ZXMgPSAoYXBwOiBleHByZXNzLkFwcGxpY2F0aW9uKTogdm9pZCA9PiB7XG4gICAgLy8gTW9kdWxhciByb3V0ZXNcbiAgICBVc2VyUm91dGVzKGFwcCk7XG4gICAgQXJ0aXN0Um91dGVzKGFwcCk7XG4gICAgRnJpZW5kUm91dGVzKGFwcCk7XG5cbiAgICAvLyBTZXJ2ZSBzdGF0aWMgZmlsZXNcbiAgICBhcHAudXNlKGV4cHJlc3Muc3RhdGljKCcuL2NsaWVudC9idWlsZCcpKTtcblxuICAgIGFwcC5nZXQoJy9mYXZpY29uLnBuZycsIChyZXE6IGV4cHJlc3MuUmVxdWVzdCwgcmVzOiBleHByZXNzLlJlc3BvbnNlKTogdm9pZCA9PiB7XG4gICAgICAgIGNvbnN0IF9fZGlybmFtZSA9IHByb2Nlc3MuZW52LlBXRDtcbiAgICAgICAgcmVzLnNlbmRGaWxlKCdmYXZpY29uLnBuZycsIHsgcm9vdDogcGF0aC5qb2luKF9fZGlybmFtZSwgJy4vY2xpZW50L2Fzc2V0cycpIH0pO1xuICAgIH0pO1xuXG4gICAgLy8gQ2xpZW50IGFwcCBlbnRyeSBpbmRleC5odG1sIGZpbGUgLSByZWFjdCByb3V0ZXJcbiAgICBhcHAuZ2V0KCcqJywgKHJlcTogZXhwcmVzcy5SZXF1ZXN0LCByZXM6IGV4cHJlc3MuUmVzcG9uc2UpOiB2b2lkID0+IHtcbiAgICAgICAgY29uc3QgX19kaXJuYW1lID0gcHJvY2Vzcy5lbnYuUFdEO1xuICAgICAgICByZXMuc2VuZEZpbGUoJ2luZGV4Lmh0bWwnLCB7IHJvb3Q6IHBhdGguam9pbihfX2Rpcm5hbWUsICcuL2NsaWVudC9idWlsZCcpIH0pOyAvLyBSZW5kZXIgY2xpZW50XG4gICAgfSk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCByb3V0ZXM7XG4iLCJpbXBvcnQgKiBhcyBleHByZXNzIGZyb20gJ2V4cHJlc3MnO1xuaW1wb3J0IHsgZ2V0VXNlciB9IGZyb20gJy4uL2NvbnRyb2xsZXJzL3VzZXInO1xuXG5leHBvcnQgZGVmYXVsdCAoYXBwOiBleHByZXNzLkFwcGxpY2F0aW9uKTogdm9pZCA9PiB7XG4gICAgYXBwLmdldCgnL2FwaS91c2VyLzppZCcsIGdldFVzZXIpO1xufTtcbiIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImF1dGgtaGVhZGVyXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImJhYmVsLXBvbHlmaWxsXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImJvZHktcGFyc2VyXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImJ1ZmZlclwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJkb3RlbnZcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiZXhwcmVzc1wiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJleHByZXNzLXF1ZXJ5LWludFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJoZXJva3UtbG9nZ2VyXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm1vcmdhblwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJwYXRoXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInNlcXVlbGl6ZS10eXBlc2NyaXB0XCIpOyJdLCJzb3VyY2VSb290IjoiIn0=