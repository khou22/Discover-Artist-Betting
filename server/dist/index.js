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

module.exports = JSON.parse("{\"development\":{\"username\":\"kevinhou\",\"password\":null,\"database\":\"discover-artist-betting\",\"host\":\"127.0.0.1\",\"port\":5432,\"dialect\":\"postgres\"},\"production\":{\"use_env_variable\":\"DATABASE_URL\"}}");

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
const stripPrice = (price) => ({
    date: price.date,
    price: price.price,
});
exports.getArtists = (req, res) => {
    return artist_1.default.findAll({ include: [price_1.default] })
        .then((artists) => {
        const data = artists.map((artist) => (Object.assign(Object.assign({}, artist.dataValues), { prices: artist.prices.map((price) => stripPrice(price)) })));
        return res.status(200).send(data);
    })
        .catch((error) => res.status(400).send(error));
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
const user_1 = __webpack_require__(/*! ../../models/user */ "./server/src/models/user.ts");
exports.getUser = (req, res) => {
    const { id } = req.params;
    return user_1.default.findById(id)
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
    sequelize.addModels([user_1.default, artist_1.default, price_1.default]);
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
let User = class User extends sequelize_typescript_1.Model {
};
__decorate([
    sequelize_typescript_1.AllowNull(false),
    sequelize_typescript_1.Column,
    __metadata("design:type", String)
], User.prototype, "username", void 0);
__decorate([
    sequelize_typescript_1.AllowNull(false),
    sequelize_typescript_1.Column,
    __metadata("design:type", String)
], User.prototype, "password", void 0);
__decorate([
    sequelize_typescript_1.Column,
    __metadata("design:type", String)
], User.prototype, "first_name", void 0);
__decorate([
    sequelize_typescript_1.Column,
    __metadata("design:type", String)
], User.prototype, "last_name", void 0);
__decorate([
    sequelize_typescript_1.Column,
    __metadata("design:type", String)
], User.prototype, "createdBy", void 0);
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
};


/***/ }),

/***/ "./server/src/routes/exampleRoutes.ts":
/*!********************************************!*\
  !*** ./server/src/routes/exampleRoutes.ts ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const user_1 = __webpack_require__(/*! ../controllers/user */ "./server/src/controllers/user/index.ts");
exports.default = (app) => {
    app.get('/api/user/:id', user_1.getUser);
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
const exampleRoutes_1 = __webpack_require__(/*! ./exampleRoutes */ "./server/src/routes/exampleRoutes.ts");
const routes = (app) => {
    exampleRoutes_1.default(app);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc2VydmVyL3NyYy9hcHAudHMiLCJ3ZWJwYWNrOi8vLy4vc2VydmVyL3NyYy9jb25maWcvc2VjdXJpdHkudHMiLCJ3ZWJwYWNrOi8vLy4vc2VydmVyL3NyYy9jb250cm9sbGVycy9hcnRpc3QvaW5kZXgudHMiLCJ3ZWJwYWNrOi8vLy4vc2VydmVyL3NyYy9jb250cm9sbGVycy91c2VyL2luZGV4LnRzIiwid2VicGFjazovLy8uL3NlcnZlci9zcmMvaW5kZXgudHMiLCJ3ZWJwYWNrOi8vLy4vc2VydmVyL3NyYy9tb2RlbHMvYXJ0aXN0LnRzIiwid2VicGFjazovLy8uL3NlcnZlci9zcmMvbW9kZWxzL2luZGV4LnRzIiwid2VicGFjazovLy8uL3NlcnZlci9zcmMvbW9kZWxzL3ByaWNlLnRzIiwid2VicGFjazovLy8uL3NlcnZlci9zcmMvbW9kZWxzL3VzZXIudHMiLCJ3ZWJwYWNrOi8vLy4vc2VydmVyL3NyYy9yb3V0ZXMvYXJ0aXN0LnRzIiwid2VicGFjazovLy8uL3NlcnZlci9zcmMvcm91dGVzL2V4YW1wbGVSb3V0ZXMudHMiLCJ3ZWJwYWNrOi8vLy4vc2VydmVyL3NyYy9yb3V0ZXMvaW5kZXgudHMiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiYXV0aC1oZWFkZXJcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJiYWJlbC1wb2x5ZmlsbFwiIiwid2VicGFjazovLy9leHRlcm5hbCBcImJvZHktcGFyc2VyXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiYnVmZmVyXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiZG90ZW52XCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiZXhwcmVzc1wiIiwid2VicGFjazovLy9leHRlcm5hbCBcImV4cHJlc3MtcXVlcnktaW50XCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiaGVyb2t1LWxvZ2dlclwiIiwid2VicGFjazovLy9leHRlcm5hbCBcIm1vcmdhblwiIiwid2VicGFjazovLy9leHRlcm5hbCBcInBhdGhcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJzZXF1ZWxpemUtdHlwZXNjcmlwdFwiIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7UUFBQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTs7O1FBR0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDBDQUEwQyxnQ0FBZ0M7UUFDMUU7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSx3REFBd0Qsa0JBQWtCO1FBQzFFO1FBQ0EsaURBQWlELGNBQWM7UUFDL0Q7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBLHlDQUF5QyxpQ0FBaUM7UUFDMUUsZ0hBQWdILG1CQUFtQixFQUFFO1FBQ3JJO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMkJBQTJCLDBCQUEwQixFQUFFO1FBQ3ZELGlDQUFpQyxlQUFlO1FBQ2hEO1FBQ0E7UUFDQTs7UUFFQTtRQUNBLHNEQUFzRCwrREFBK0Q7O1FBRXJIO1FBQ0E7OztRQUdBO1FBQ0E7Ozs7Ozs7Ozs7Ozs7OztBQ2xGQSw4REFBbUM7QUFDbkMsbUdBQXlDO0FBQ3pDLHFGQUFrQztBQUNsQyxxRkFBOEI7QUFFOUIsMkRBQWtDO0FBQ2xDLE1BQU0sVUFBVSxHQUFHLG1CQUFPLENBQUMsZ0NBQWEsQ0FBQyxDQUFDO0FBQzFDLHFEQUE4QjtBQUc5QiwyREFBa0M7QUFDbEMsTUFBTSxNQUFNLEdBQUcsTUFBTSxDQUFDLE1BQU0sRUFBRSxDQUFDO0FBRS9CLE1BQU0sU0FBUyxHQUFHLE9BQU8sQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDO0FBRWxDLE1BQU0sR0FBRyxHQUFHLE9BQU8sRUFBRSxDQUFDO0FBR3RCLEdBQUcsQ0FBQyxHQUFHLENB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QUFFO1FBQy9ELE1BQU0sU0FBUyxHQUFHLE9BQU8sQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDO1FBQ2xDLEdBQUcsQ0FBQyxRQUFRLENBQUMsWUFBWSxFQUFFLEVBQUUsSUFBSSxFQUFFLElBQUksQ0FBQyxJQUFJLENBQUMsU0FBUyxFQUFFLGdCQUFnQixDQUFDLEVBQUUsQ0FBQyxDQUFDO0lBQ2pGLENBQUMsQ0FBQyxDQUFDO0FBQ1AsQ0FBQyxDQUFDO0FBRUYsa0JBQWUsTUFBTSxDQUFDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDNUJ0Qix3Qzs7Ozs7Ozs7Ozs7QUNBQSwyQzs7Ozs7Ozs7Ozs7QUNBQSx3Qzs7Ozs7Ozs7Ozs7QUNBQSxtQzs7Ozs7Ozs7Ozs7QUNBQSxtQzs7Ozs7Ozs7Ozs7QUNBQSxvQzs7Ozs7Ozs7Ozs7QUNBQSw4Qzs7Ozs7Ozs7Ozs7QUNBQSwwQzs7Ozs7Ozs7Ozs7QUNBQSxtQzs7Ozs7Ozs7Ozs7QUNBQSxpQzs7Ozs7Ozs7Ozs7QUNBQSxpRCIsImZpbGUiOiJkaXN0L2luZGV4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IDApO1xuIiwiaW1wb3J0ICogYXMgZXhwcmVzcyBmcm9tICdleHByZXNzJztcbmltcG9ydCBzZWN1cml0eSBmcm9tICcuL2NvbmZpZy9zZWN1cml0eSc7XG5pbXBvcnQgaW5pdGlhbGl6ZSBmcm9tICcuL21vZGVscyc7XG5pbXBvcnQgcm91dGVzIGZyb20gJy4vcm91dGVzJztcblxuaW1wb3J0IGxvZ2dlciA9IHJlcXVpcmUoJ21vcmdhbicpO1xuY29uc3QgYm9keVBhcnNlciA9IHJlcXVpcmUoJ2JvZHktcGFyc2VyJyk7XG5pbXBvcnQgcGF0aCA9IHJlcXVpcmUoJ3BhdGgnKTtcblxuLy8gQ29uZmlndXJlIGRvdGVudiB0byBsb2FkIGluIHRoZSAuZW52IGZpbGVcbmltcG9ydCBkb3RlbnYgPSByZXF1aXJlKCdkb3RlbnYnKTtcbmNvbnN0IHJlc3VsdCA9IGRvdGVudi5jb25maWcoKTtcblxuY29uc3QgX19kaXJuYW1lID0gcHJvY2Vzcy5lbnYuUFdEOyAvLyBDb3VsZCBicmVhayBvbiBwcm9kXG5cbmNvbnN0IGFwcCA9IGV4cHJlc3MoKTsgLy8gU2V0dXAgZXhwcmVzcyBhcHBcblxuLy8gQWxsb3cgY3Jvc3Mgb3JpZ2luIHJlcXVlc3RzIHdpdGggYXV0aG9yaXphdGlvbiAoZm9yIEFQSSBwdXJwb3NlcylcbmFwcC5hbGwoJyonLCAocmVxOiBleHByZXNzLlJlcXVlc3QsIHJlczogZXhwcmVzcy5SZXNwb25zZSwgbmV4dDogZXhwcmVzcy5OZXh0RnVuY3Rpb24pOiB2b2lkID0+IHtcbiAgICByZXMuaGVhZGVyKCdBY2Nlc3MtQ29udHJvbC1BbGxvdy1PcmlnaW4nLCAnKicpO1xuICAgIHJlcy5oZWFkZXIoJ0FjY2Vzcy1Db250cm9sLUFsbG93LU1ldGhvZHMnLCAnUFVULCBHRVQsIFBPU1QsIERFTEVURSwgT1BUSU9OUycpO1xuICAgIHJlcy5oZWFkZXIoJ0FjY2Vzcy1Db250cm9sLUFsbG93LUNyZWRlbnRpYWxzJywgJ3RydWUnKTtcbiAgICByZXMuaGVhZGVyKCdBY2Nlc3MtQ29udHJvbC1BbGxvdy1PcmlnaW4nLCBgJHtyZXEuaGVhZGVycy5vcmlnaW59YCk7XG4gICAgcmVzLmhlYWRlcihcbiAgICAgICAgJ0FjY2Vzcy1Db250cm9sLUFsbG93LUhlYWRlcnMnLFxuICAgICAgICAnYWNjZXB0LCBjb250ZW50LXR5cGUsIHgtcGFyc2UtYXBwbGljYXRpb24taWQsIHgtcGFyc2UtcmVzdC1hcGkta2V5LCB4LXBhcnNlLXNlc3Npb24tdG9rZW4sIEFVVEhPUklaQVRJT04nLFxuICAgICk7XG4gICAgLy8gSW50ZXJjZXB0IE9QVElPTlMgbWV0aG9kXG4gICAgaWYgKCdPUFRJT05TJyA9PSByZXEubWV0aG9kKSB7XG4gICAgICAgIHJlcy5zZW5kKDIwMCk7XG4gICAgfSBlbHNlIHtcbiAgICAgICAgbmV4dCgpO1xuICAgIH1cbn0pO1xuXG4vLyBTZXR1cCBhdXRoZW50aWNhdGlvbiBhbmQgc2VjdXJpdHlcbnNlY3VyaXR5KGFwcCk7XG5pbml0aWFsaXplKCk7XG5cbi8vIExvZyByZXF1ZXN0cyB0byB0aGUgY29uc29sZS5cbmFwcC51c2UobG9nZ2VyKCdkZXYnKSk7XG5cbi8vIFBhcnNlIGluY29taW5nIHJlcXVlc3RzIGRhdGEgKGh0dHBzOi8vZ2l0aHViLmNvbS9leHByZXNzanMvYm9keS1wYXJzZXIpXG4vLyAgKyBpbmNyZWFzaW5nIGJvZHkgcmVxdWVzdCBsaW1pdCBzaXplXG5hcHAudXNlKGJvZHlQYXJzZXIuanNvbih7IGxpbWl0OiAnMTVtYicsIGV4dGVuZGVkOiB0cnVlIH0pKTtcbmFwcC51c2UoYm9keVBhcnNlci51cmxlbmNvZGVkKHsgbGltaXQ6ICcxNW1iJywgZXh0ZW5kZWQ6IHRydWUgfSkpO1xuXG4vLyBQYXJzZSBxdWVyaWVzIGludG8gbnVtYmVycywgbm90IHN0cmluZ3NcbnZhciBxdWVyeVBhcnNlciA9IHJlcXVpcmUoJ2V4cHJlc3MtcXVlcnktaW50Jyk7XG5hcHAudXNlKGJvZHlQYXJzZXIuanNvbigpKTtcbmFwcC51c2UocXVlcnlQYXJzZXIoKSk7XG5cbmFwcC51c2UoJy9zY3JpcHRzJywgZXhwcmVzcy5zdGF0aWMocGF0aC5qb2luKF9fZGlybmFtZSwgJy4uLy4uL2NsaWVudC9kaXN0JykpKTtcblxuLy8gUmVxdWlyZSByb3V0ZXMgYW5kIHNpbXVsdGFuZW91c2x5IGF0dGFjaCBhcHBcbnJvdXRlcyhhcHApO1xuXG4vLyBDYXRjaCBhbGwgaWYgdGhlIHJvdXRlcyBkb2Vzbid0IGZpbmQgYSB2YWxpZCBVUkxcbmFwcC5nZXQoXG4gICAgJyonLFxuICAgIChyZXE6IGV4cHJlc3MuUmVxdWVzdCwgcmVzOiBleHByZXNzLlJlc3BvbnNlKTogZXhwcmVzcy5SZXNwb25zZSA9PlxuICAgICAgICByZXMuc3RhdHVzKDIwMCkuc2VuZCh7XG4gICAgICAgICAgICBtZXNzYWdlOiAnRm9yIHNvbWUgcmVhc29uLCBub25lIG9mIHRoZSByb3V0ZXMgaGl0Li4uJyxcbiAgICAgICAgfSksXG4pO1xuXG5leHBvcnQgZGVmYXVsdCBhcHA7XG4iLCJpbXBvcnQgKiBhcyBhdXRob3JpemF0aW9uIGZyb20gJ2F1dGgtaGVhZGVyJzsgLy8gRm9yIHBhcnNpbmcgYXV0aGVudGljYXRpb25cbmltcG9ydCB7IEJ1ZmZlciB9IGZyb20gJ2J1ZmZlcic7XG5pbXBvcnQgKiBhcyBleHByZXNzIGZyb20gJ2V4cHJlc3MnO1xuaW1wb3J0ICogYXMgbG9nZ2VyIGZyb20gJ2hlcm9rdS1sb2dnZXInOyAvLyBGb3IgbG9nZ2luZyB0byB0aGUgbG9nIGhlcm9rdSBsb2cgZmlsZVxuXG4vLyBXaGl0ZWxpc3RlZCBJUHNcbmNvbnN0IHZhbGlkSVBzID0gW1xuICAgICc6OmZmZmY6MTI3LjAuMC4xJywgLy8gTG9jYWwgaG9zdFxuICAgICcxMjcuMC4wLjEnLCAvLyBJUHY0IC0gbG9jYWxob3N0ICg/KVxuICAgICc6OjEnLCAvLyBJUHY2XG5dO1xuXG4vLyBXaGl0ZWxpc3RlZCB1cmxzXG5jb25zdCB2YWxpZFJlZmVyZXJzID0gWycoaHR0cHM/Oi8vKT9sb2NhbGhvc3Q6MzAwMC4qJ107XG5jb25zdCB2YWxpZFVSTHMgPSBuZXcgUmVnRXhwKHZhbGlkUmVmZXJlcnMuam9pbignfCcpLCAnaScpOyAvLyBDb252ZXJ0IHRvIHJlZ3VsYXIgZXhwcmVzc2lvblxuXG4vLyBXaGl0ZWxpc3RlZCBhc3NldHMgLSBhbHJlYWR5IG5vdCBpbiB0aGUgYmxhY2tsaXN0IHNvIG5vdCBlbnRpcmVseSBuZWNjZXNzYXJ5IGFueW1vcmVcbmNvbnN0IHZhbGlkUGFnZXMgPSBbJy8nLCAnL2Zhdmljb24uaWNvJywgJy9zY3JpcHRzL2luZGV4LmpzJ107XG5cbi8vIEFueSByb3V0ZSBpbiB0aGUgYmxhY2tsaXN0IHdpbGwgcmVxdWlyZSBhdXRoZW50aWNhdGlvblxuY29uc3QgYmxhY2tsaXN0ID0gL1xcL2FwaS4qLzsgLy8gSnVzdCBBUElzXG5cbi8vIEhhbmRsZSA0MDEgZXJyb3IgY29kZSAtIFVuYXV0aG9yaXplZFxuY29uc3QgdW5hdXRob3JpemVkUmVzcG9uc2UgPSAocmVzOiBleHByZXNzLlJlc3BvbnNlKTogdm9pZCA9PiB7XG4gICAgcmVzLnN0YXR1cyg0MDEpLnNlbmQoJ1JlcXVlc3QgZmFpbGVkOiBCYWQgYXV0aGVudGljYXRpb24nKTtcbn07XG5cbmNvbnN0IHNlY3VyaXR5ID0gKGFwcCk6IHZvaWQgPT4ge1xuICAgIC8vIFNraXAgd2hpdGVsaXN0ZWQgZG9tYWluc1xuICAgIGFwcC51c2UoKHJlcTogZXhwcmVzcy5SZXF1ZXN0LCByZXM6IGV4cHJlc3MuUmVzcG9uc2UsIG5leHQ6IGV4cHJlc3MuTmV4dEZ1bmN0aW9uKTogdm9pZCA9PiB7XG4gICAgICAgIC8vIFJlcXVpcmUgYXV0aGVudGljYXRpb24gaWYgbm90IGluIHRoZSB3aGl0ZWxpc3Qgb3IgaXMgaW4gYmxhY2tsaXN0XG4gICAgICAgIGNvbnN0IGluV2hpdGVsaXN0ID0gdmFsaWRQYWdlcy5pbmRleE9mKHJlcS5vcmlnaW5hbFVybCkgPiAtMTtcbiAgICAgICAgaWYgKCFpbldoaXRlbGlzdCB8fCBibGFja2xpc3QudGVzdChyZXEub3JpZ2luYWxVcmwpKSB7XG4gICAgICAgICAgICAvLyBHZXQgdGhlIElQIGFkZHJlc3NcbiAgICAgICAgICAgIGNvbnN0IGlwOiBzdHJpbmcgPSAocmVxLmhlYWRlcnNbJ3gtZm9yd2FyZGVkLWZvciddIHx8XG4gICAgICAgICAgICAgICAgcmVxLmNvbm5lY3Rpb24ucmVtb3RlQWRkcmVzcyB8fFxuICAgICAgICAgICAgICAgIHJlcS5pcCkgYXMgc3RyaW5nO1xuICAgICAgICAgICAgY29uc3QgcmVmZXJlciA9IHJlcS5oZWFkZXIoJ1JlZmVyZXInKTsgLy8gSWYgdGhlIHJlcXVlc3QgaXMgYmVpbmcgc2VudCBieSBhIHdlYnNpdGVcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKCdJUDogJywgaXApO1xuICAgICAgICAgICAgaWYgKHZhbGlkSVBzLmluZGV4T2YoaXApID4gLTEpIHtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhpcCwgJ2lzIGEgd2hpdGVsaXN0ZWQgSVAnKTtcbiAgICAgICAgICAgICAgICBsb2dnZXIuaW5mbygnV2hpdGVsaXN0ZWQgSVAnLCB7IGlwOiBpcCB9KTtcbiAgICAgICAgICAgICAgICBuZXh0KCk7IC8vIFJlcXVlc3QgdmFsaWRcbiAgICAgICAgICAgIH0gZWxzZSBpZiAocmVmZXJlciAmJiB2YWxpZFVSTHMudGVzdChyZWZlcmVyKSkge1xuICAgICAgICAgICAgICAgIGxvZ2dlci5pbmZvKCdXaGl0ZWxpc3RlZCBSZWZlcmVyJywgeyByZWZlcmVyOiByZWZlcmVyIH0pO1xuICAgICAgICAgICAgICAgIG5leHQoKTsgLy8gUmVxdWVzdCB2YWxpZFxuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAvLyBsb2dnZXIuaW5mbyhcIkNoZWNraW5nIGF1dGhvcml6YXRpb24uLi5cIilcbiAgICAgICAgICAgICAgICBjb25zdCBhdXRoSGVhZGVyID0gcmVxLmhlYWRlclsnYXV0aG9yaXphdGlvbiddXG4gICAgICAgICAgICAgICAgICAgID8gcmVxLmhlYWRlclsnYXV0aG9yaXphdGlvbiddXG4gICAgICAgICAgICAgICAgICAgIDogcmVxLmhlYWRlcnNbJ2F1dGhvcml6YXRpb24nXTtcblxuICAgICAgICAgICAgICAgIC8vIEZhaWwgaWYgbm8gYmFzaWMgYXV0aGVudGljYXRpb24gcHJvdmlkZWRcbiAgICAgICAgICAgICAgICBpZiAoIWF1dGhIZWFkZXIpIHtcbiAgICAgICAgICAgICAgICAgICAgLy8gTm8gYXV0aG9yaXphdGlvblxuICAgICAgICAgICAgICAgICAgICByZXMuc2V0KCdXV1ctQXV0aGVudGljYXRlJywgJ0Jhc2ljIHJlYWxtPVwiQXV0aG9yaXphdGlvbiBSZXF1aXJlZFwiJyk7IC8vIFByb21wdCBjaGFsbGVuZ2UgcGFzc3dvcmRcbiAgICAgICAgICAgICAgICAgICAgbG9nZ2VyLmVycm9yKCdObyBBdXRoZW50aWNhdGlvbicsIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlwOiBpcCxcbiAgICAgICAgICAgICAgICAgICAgICAgIHJlZmVyZXI6IHJlZmVyZXIsXG4gICAgICAgICAgICAgICAgICAgICAgICB1cmw6IHJlcS5vcmlnaW5hbFVybCxcbiAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiB1bmF1dGhvcml6ZWRSZXNwb25zZShyZXMpO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIC8vIFJldHJlaXZlIGF1dGhvcml6YXRpb24gdG9rZW5cbiAgICAgICAgICAgICAgICBjb25zdCBhdXRoID0gYXV0aG9yaXphdGlvbi5wYXJzZShhdXRoSGVhZGVyKTtcblxuICAgICAgICAgICAgICAgIC8vIEdldCB0aGUgYmFzaWMgYXV0aCBjb21wb25lbnRcbiAgICAgICAgICAgICAgICBjb25zdCBbdW4sIHB3XSA9IG5ldyBCdWZmZXIoYXV0aC50b2tlbiwgJ2Jhc2U2NCcpLnRvU3RyaW5nKCkuc3BsaXQoJzonLCAyKTtcblxuICAgICAgICAgICAgICAgIC8vIFZlcmlmeSBhdXRoZW50aWNhdGlvbi5cbiAgICAgICAgICAgICAgICBpZiAodW4gIT09ICdhZG1pbicgfHwgcHcgIT09IHByb2Nlc3MuZW52LkFETUlOX0FQSV9LRVkpIHtcbiAgICAgICAgICAgICAgICAgICAgbG9nZ2VyLmVycm9yKCdVbmF1dGhvcml6ZWQgQ3JlZGVudGlhbHMnLCB7IHVzZXJuYW1lOiB1biwgcGFzc3dvcmQ6IHB3IH0pO1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gdW5hdXRob3JpemVkUmVzcG9uc2UocmVzKTtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICBsb2dnZXIuaW5mbygnVXNlciBBdXRoZW50aWNhdGVkJywgeyB1c2VybmFtZTogdW4sIHBhc3N3b3JkOiBwdyB9KTtcbiAgICAgICAgICAgICAgICBuZXh0KCk7IC8vIFJlcXVlc3QgdmFsaWRcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIC8vIFNraXAgYXV0aGVudGljYXRpb25cbiAgICAgICAgICAgIGxvZ2dlci5pbmZvKCdXaGl0ZWxpc3Qgb3Igbm90IGluIGJsYWNrbGlzdCcsIHsgdXJsOiByZXEub3JpZ2luYWxVcmwgfSk7XG4gICAgICAgICAgICBuZXh0KCk7XG4gICAgICAgIH1cbiAgICB9KTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IHNlY3VyaXR5O1xuIiwiaW1wb3J0ICogYXMgZXhwcmVzcyBmcm9tICdleHByZXNzJztcbmltcG9ydCBBcnRpc3QgZnJvbSAnLi4vLi4vbW9kZWxzL2FydGlzdCc7XG5pbXBvcnQgUHJpY2UgZnJvbSAnLi4vLi4vbW9kZWxzL3ByaWNlJztcblxuY29uc3Qgc3RyaXBQcmljZSA9IChwcmljZTogUHJpY2UpID0+ICh7XG4gICAgZGF0ZTogcHJpY2UuZGF0ZSxcbiAgICBwcmljZTogcHJpY2UucHJpY2UsXG59KTtcblxuZXhwb3J0IGNvbnN0IGdldEFydGlzdHMgPSAocmVxOiBleHByZXNzLlJlcXVlc3QsIHJlczogZXhwcmVzcy5SZXNwb25zZSk6IGFueSA9PiB7XG4gICAgcmV0dXJuIEFydGlzdC5maW5kQWxsKHsgaW5jbHVkZTogW1ByaWNlXSB9KVxuICAgICAgICAudGhlbihcbiAgICAgICAgICAgIChhcnRpc3RzOiBBcnRpc3RbXSk6IGV4cHJlc3MuUmVzcG9uc2UgPT4ge1xuICAgICAgICAgICAgICAgIGNvbnN0IGRhdGEgPSBhcnRpc3RzLm1hcCgoYXJ0aXN0OiBBcnRpc3QpID0+ICh7XG4gICAgICAgICAgICAgICAgICAgIC4uLmFydGlzdC5kYXRhVmFsdWVzLFxuICAgICAgICAgICAgICAgICAgICBwcmljZXM6IGFydGlzdC5wcmljZXMubWFwKChwcmljZSkgPT4gc3RyaXBQcmljZShwcmljZSkpLFxuICAgICAgICAgICAgICAgIH0pKTtcbiAgICAgICAgICAgICAgICByZXR1cm4gcmVzLnN0YXR1cygyMDApLnNlbmQoZGF0YSk7XG4gICAgICAgICAgICB9LFxuICAgICAgICApXG4gICAgICAgIC5jYXRjaCgoZXJyb3I6IEVycm9yKTogZXhwcmVzcy5SZXNwb25zZSA9PiByZXMuc3RhdHVzKDQwMCkuc2VuZChlcnJvcikpOyAvLyBFcnJvclxufTtcbiIsImltcG9ydCAqIGFzIGV4cHJlc3MgZnJvbSAnZXhwcmVzcyc7XG5pbXBvcnQgVXNlciBmcm9tICcuLi8uLi9tb2RlbHMvdXNlcic7XG5cbmV4cG9ydCBpbnRlcmZhY2UgVXNlckdldFJlcXVlc3QgZXh0ZW5kcyBleHByZXNzLlJlcXVlc3Qge1xuICAgIGlkOiBzdHJpbmc7XG59XG5cbmV4cG9ydCBjb25zdCBnZXRVc2VyID0gKHJlcTogVXNlckdldFJlcXVlc3QsIHJlczogZXhwcmVzcy5SZXNwb25zZSk6IGFueSA9PiB7XG4gICAgY29uc3QgeyBpZCB9ID0gcmVxLnBhcmFtcztcbiAgICByZXR1cm4gVXNlci5maW5kQnlJZChpZClcbiAgICAgICAgLnRoZW4oKHVzZXI6IFVzZXIpOiBleHByZXNzLlJlc3BvbnNlID0+IHJlcy5zdGF0dXMoMjAwKS5zZW5kKHVzZXIpKVxuICAgICAgICAuY2F0Y2goKGVycm9yOiBFcnJvcik6IGV4cHJlc3MuUmVzcG9uc2UgPT4gcmVzLnN0YXR1cyg0MDApLnNlbmQoZXJyb3IpKTsgLy8gRXJyb3Jcbn07XG4iLCIvLyBBcHBsaWNhdGlvbiBlbnRyeSwgc2V0dGluZyB1cCBzZXJ2ZXJcbmltcG9ydCBhcHAgZnJvbSAnLi9hcHAnOyAvLyBUaGUgZXhwcmVzcyBhcHAgd2UganVzdCBjcmVhdGVkXG5cbmNvbnN0IHBvcnQgPSBwYXJzZUludChwcm9jZXNzLmVudi5QT1JULCAxMCkgfHwgNTAwMDsgLy8gVXNlIHBvcnQgNTAwMFxuYXBwLnNldCgncG9ydCcsIHBvcnQpO1xuXG4vLyAwLjAuMC4wIG1ha2VzIGl0IGF2YWlsYWJsZSBvbiB5b3VyIGxvY2FsIG5ldHdvcmtcbi8vIGFwcC5saXN0ZW4ocG9ydCwgJzAuMC4wLjAnKTtcbmFwcC5saXN0ZW4ocG9ydCk7XG4iLCJpbXBvcnQgeyBDb2x1bW4sIENyZWF0ZWRBdCwgSGFzTWFueSwgTW9kZWwsIFRhYmxlLCBVcGRhdGVkQXQgfSBmcm9tICdzZXF1ZWxpemUtdHlwZXNjcmlwdCc7XG5pbXBvcnQgUHJpY2UgZnJvbSAnLi9wcmljZSc7XG5cbkBUYWJsZSh7XG4gICAgbW9kZWxOYW1lOiAnQXJ0aXN0JyxcbiAgICB0YWJsZU5hbWU6ICdBcnRpc3QnLFxuICAgIG5hbWU6IHtcbiAgICAgICAgc2luZ3VsYXI6ICdBcnRpc3QnLFxuICAgICAgICBwbHVyYWw6ICdBcnRpc3RzJyxcbiAgICB9LFxuICAgIGZyZWV6ZVRhYmxlTmFtZTogdHJ1ZSxcbn0pXG5jbGFzcyBBcnRpc3QgZXh0ZW5kcyBNb2RlbDxBcnRpc3Q+IHtcbiAgICBAQ29sdW1uXG4gICAgbmFtZTogc3RyaW5nO1xuXG4gICAgQENvbHVtblxuICAgIHNwb3RpZnlVcmw6IHN0cmluZztcblxuICAgIEBDb2x1bW5cbiAgICBtb250aGx5TGlzdGVuczogbnVtYmVyO1xuXG4gICAgQENvbHVtblxuICAgIGZvbGxvd2VyczogbnVtYmVyO1xuXG4gICAgQENvbHVtblxuICAgIGJpbzogc3RyaW5nO1xuXG4gICAgQENvbHVtblxuICAgIGZvdW5kZWRZZWFyOiBudW1iZXI7XG5cbiAgICBASGFzTWFueSgoKSA9PiBQcmljZSlcbiAgICBwcmljZXM6IFByaWNlW107XG5cbiAgICBAQ3JlYXRlZEF0XG4gICAgY3JlYXRlZEF0OiBEYXRlO1xuXG4gICAgQFVwZGF0ZWRBdFxuICAgIHVwZGF0ZWRBdDogRGF0ZTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgQXJ0aXN0O1xuIiwiaW1wb3J0IHsgU2VxdWVsaXplIH0gZnJvbSAnc2VxdWVsaXplLXR5cGVzY3JpcHQnO1xuaW1wb3J0IEFydGlzdCBmcm9tICcuL2FydGlzdCc7XG5pbXBvcnQgUHJpY2UgZnJvbSAnLi9wcmljZSc7XG5pbXBvcnQgVXNlciBmcm9tICcuL3VzZXInO1xuXG5pbXBvcnQgbG9nZ2VyID0gcmVxdWlyZSgnaGVyb2t1LWxvZ2dlcicpOyAvLyBGb3IgbG9nZ2luZyB0byB0aGUgbG9nIGhlcm9rdSBsb2cgZmlsZVxuXG5pbXBvcnQgY29uZmlnRmlsZSA9IHJlcXVpcmUoJy4uL2NvbmZpZy9jb25maWcuanNvbicpO1xuXG5kZWNsYXJlIHZhciBwcm9jZXNzOiB7XG4gICAgZW52OiB7XG4gICAgICAgIE5PREVfRU5WOiBzdHJpbmc7XG4gICAgICAgIERBVEFCQVNFX1VSTDogc3RyaW5nO1xuICAgIH07XG59O1xuXG5leHBvcnQgZGVmYXVsdCAoKTogdm9pZCA9PiB7XG4gICAgdmFyIGVudiA9IHByb2Nlc3MuZW52Lk5PREVfRU5WIHx8ICdkZXZlbG9wbWVudCc7IC8vIERldGVybWluZSBpZiB1c2luZyBkZXZlbG9wbWVudFxuICAgIC8vIGNvbnN0IF9fZGlybmFtZSA9IHByb2Nlc3MuZW52LlBXRDsgLy8gQ291bGQgYnJlYWsgb24gcHJvZFxuICAgIC8vIGNvbnN0IGN1cnJlbnREaXIgPSBwYXRoLmpvaW4oX19kaXJuYW1lLCAnLi9zZXJ2ZXIvc3JjL21vZGVscycpO1xuXG4gICAgLy8gUmVndWxhciBgbW9kdWxlLmZpbGVuYW1lYCBpcyB1bmRlZmluZWQgaW4gbG9jYWwgZGV2XG4gICAgLy8gY29uc3QgZmlsZW5hbWUgPSBtb2R1bGUuZmlsZW5hbWUgIT09IHVuZGVmaW5lZCA/IG1vZHVsZS5maWxlbmFtZSA6ICdpbmRleC50cyc7XG4gICAgLy8gdmFyIGJhc2VuYW1lID0gcGF0aC5iYXNlbmFtZShmaWxlbmFtZSk7XG5cbiAgICB2YXIgZGI6IGFueSA9IHt9O1xuXG4gICAgLy8gSSB1c2UgdGhlIG5vZGUtY29uZmlnIHBhY2thZ2UgdG8gbWFuYWdlIHRoZSBEQiBjb25maWcgeW91IGNhbiBjaG9vc2VcbiAgICAvLyB0byBzdGljayB3aXRoIHRoZSBvcmlnaW5hbCB2ZXJzaW9uLiBBbmQgSSByZW1vdmVkIGVudmlyb25tZW50IHZhcmlhYmxlXG4gICAgLy8gc3VwcG9ydCBiZWNhdXNlIEkgZG9uJ3QgbmVlZCBpdC5cbiAgICBsZXQgc2VxdWVsaXplOiBhbnkgPSB7fTtcbiAgICBjb25zb2xlLmxvZyhwcm9jZXNzLmVudi5OT0RFX0VOVik7IC8vIFRPRE86IEZvciBzb21lIHJlYXNvbiwgaW4gcHJvZHVjdGlvbiwgdGhpcyByZWFkcyBhcyAnZGV2ZWxvcG1lbnQnXG4gICAgbG9nZ2VyLmluZm8oYHByb2Nlc3MuZW52Lk5PREVfRU5WOiAke3Byb2Nlc3MuZW52Lk5PREVfRU5WfWApO1xuICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViA9PSAncHJvZHVjdGlvbicpIHtcbiAgICAgICAgLy8gRnJvbSB0aGUgZW52aXJvbm1lbnQsIGV4dHJhY3QgdGhlIGtleSB3aXRoIHRoZSBuYW1lIHByb3ZpZGVkIGluIHRoZSBjb25maWcgYXMgdXNlX2Vudl92YXJpYWJsZVxuICAgICAgICAvLyBhbmQgdXNlIHRoYXQgdG8gZXN0YWJsaXNoIGEgY29ubmVjdGlvbiB0byBvdXIgZGF0YWJhc2UuXG4gICAgICAgIGNvbnNvbGUubG9nKCdVc2luZyBkYXRhYmFzZSBVUkw6JywgcHJvY2Vzcy5lbnYuREFUQUJBU0VfVVJMKTtcbiAgICAgICAgbG9nZ2VyLmluZm8oJ1VzaW5nIGRhdGFiYXNlIFVSTDonLCB7IHVybDogcHJvY2Vzcy5lbnYuREFUQUJBU0VfVVJMIH0pO1xuICAgICAgICBzZXF1ZWxpemUgPSBuZXcgU2VxdWVsaXplKHByb2Nlc3MuZW52LkRBVEFCQVNFX1VSTCk7IC8vIEVzdGFibGlzaCBjb25uZWN0aW9uIHVzaW5nIGVudmlyb25tZW50IHZhcmlhYmxlc1xuICAgIH0gZWxzZSB7XG4gICAgICAgIHZhciBjb25maWcgPSBjb25maWdGaWxlW2Vudl07IC8vIElmIGxvY2FsLCB1c2UgY29uZmlnXG4gICAgICAgIGNvbnNvbGUubG9nKCdVc2luZyBsb2NhbCBjb25maWd1cmF0aW9uOicsIGNvbmZpZyk7XG4gICAgICAgIGxvZ2dlci5pbmZvKCdVc2luZyBsb2NhbCBjb25maWd1cmF0aW9uOicsIHsgY29uZmlnIH0pO1xuICAgICAgICBzZXF1ZWxpemUgPSBuZXcgU2VxdWVsaXplKHtcbiAgICAgICAgICAgIC4uLmNvbmZpZyxcbiAgICAgICAgICAgIC8vIGRhdGFiYXNlOiBjb25maWcuZGF0YWJhc2UsXG4gICAgICAgICAgICAvLyB1c2VybmFtZTogY29uZmlnLnVzZXJuYW1lLFxuICAgICAgICAgICAgLy8gcGFzc3dvcmQ6IGNvbmZpZy5wYXNzd29yZCxcbiAgICAgICAgfSk7IC8vIENvbm5lY3RcbiAgICB9XG5cbiAgICBzZXF1ZWxpemUuYWRkTW9kZWxzKFtVc2VyLCBBcnRpc3QsIFByaWNlXSk7XG4gICAgLy8gaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WID09ICdwcm9kdWN0aW9uJykge1xuICAgIC8vICAgICBzZXF1ZWxpemUuc3luYygpOyAvLyBEb24ndCBjb3JydXB0IHByb2R1Y3Rpb24gZGF0YVxuICAgIC8vIH0gZWxzZSB7XG4gICAgLy8gc2VxdWVsaXplLnN5bmMoeyBmb3JjZTogdHJ1ZSB9KTsgLy8gVE9ETzogUmVtb3ZlIGJlZm9yZSBsaXZlXG4gICAgc2VxdWVsaXplLnN5bmMoeyBhbHRlcjogdHJ1ZSB9KTtcbiAgICAvLyBzZXF1ZWxpemUuc3luYygpO1xuICAgIC8vIH1cblxuICAgIGRiLnNlcXVlbGl6ZSA9IHNlcXVlbGl6ZTtcbiAgICBkYi5TZXF1ZWxpemUgPSBTZXF1ZWxpemU7XG59O1xuIiwiaW1wb3J0IHsgQmVsb25nc1RvLCBDb2x1bW4sIEZvcmVpZ25LZXksIE1vZGVsLCBUYWJsZSB9IGZyb20gJ3NlcXVlbGl6ZS10eXBlc2NyaXB0JztcbmltcG9ydCBBcnRpc3QgZnJvbSAnLi9hcnRpc3QnO1xuXG5AVGFibGUoe1xuICAgIG5hbWU6IHtcbiAgICAgICAgc2luZ3VsYXI6ICdQcmljZScsXG4gICAgICAgIHBsdXJhbDogJ1ByaWNlcycsXG4gICAgfSxcbiAgICBmcmVlemVUYWJsZU5hbWU6IHRydWUsXG59KVxuY2xhc3MgUHJpY2UgZXh0ZW5kcyBNb2RlbDxQcmljZT4ge1xuICAgIEBDb2x1bW5cbiAgICBkYXRlOiBEYXRlO1xuXG4gICAgQENvbHVtblxuICAgIHByaWNlOiBudW1iZXI7XG5cbiAgICBARm9yZWlnbktleSgoKSA9PiBBcnRpc3QpXG4gICAgQENvbHVtblxuICAgIGFydGlzdElkOiBudW1iZXI7XG5cbiAgICBAQmVsb25nc1RvKCgpID0+IEFydGlzdClcbiAgICBhcnRpc3Q6IEFydGlzdDtcbn1cblxuZXhwb3J0IGRlZmF1bHQgUHJpY2U7XG4iLCJpbXBvcnQgeyBBbGxvd051bGwsIENvbHVtbiwgQ3JlYXRlZEF0LCBNb2RlbCwgVGFibGUsIFVwZGF0ZWRBdCB9IGZyb20gJ3NlcXVlbGl6ZS10eXBlc2NyaXB0JztcblxuQFRhYmxlKHsgdGFibGVOYW1lOiAnVXNlcicgfSlcbmNsYXNzIFVzZXIgZXh0ZW5kcyBNb2RlbDxVc2VyPiB7XG4gICAgQEFsbG93TnVsbChmYWxzZSlcbiAgICBAQ29sdW1uXG4gICAgdXNlcm5hbWU6IHN0cmluZztcblxuICAgIEBBbGxvd051bGwoZmFsc2UpXG4gICAgQENvbHVtblxuICAgIHBhc3N3b3JkOiBzdHJpbmc7XG5cbiAgICBAQ29sdW1uXG4gICAgZmlyc3RfbmFtZTogc3RyaW5nO1xuXG4gICAgQENvbHVtblxuICAgIGxhc3RfbmFtZTogc3RyaW5nO1xuXG4gICAgQENvbHVtblxuICAgIGNyZWF0ZWRCeTogc3RyaW5nO1xuXG4gICAgQENyZWF0ZWRBdFxuICAgIGNyZWF0ZWRBdDogRGF0ZTtcblxuICAgIEBVcGRhdGVkQXRcbiAgICB1cGRhdGVkQXQ6IERhdGU7XG59XG5cbmV4cG9ydCBkZWZhdWx0IFVzZXI7XG4iLCJpbXBvcnQgKiBhcyBleHByZXNzIGZyb20gJ2V4cHJlc3MnO1xuaW1wb3J0IHsgZ2V0QXJ0aXN0cyB9IGZyb20gJy4uL2NvbnRyb2xsZXJzL2FydGlzdCc7XG5cbmV4cG9ydCBkZWZhdWx0IChhcHA6IGV4cHJlc3MuQXBwbGljYXRpb24pID0+IHtcbiAgICAvLyBDb250YWN0IGZvcm0gZW1haWxcbiAgICBhcHAuZ2V0KCcvYXBpL2FydGlzdC8nLCBnZXRBcnRpc3RzKTtcbn07XG4iLCJpbXBvcnQgKiBhcyBleHByZXNzIGZyb20gJ2V4cHJlc3MnO1xuaW1wb3J0IHsgZ2V0VXNlciB9IGZyb20gJy4uL2NvbnRyb2xsZXJzL3VzZXInO1xuXG5leHBvcnQgZGVmYXVsdCAoYXBwOiBleHByZXNzLkFwcGxpY2F0aW9uKTogdm9pZCA9PiB7XG4gICAgYXBwLmdldCgnL2FwaS91c2VyLzppZCcsIGdldFVzZXIpO1xufTtcbiIsIi8vIHNlcnZlci9yb3V0ZXMvaW5kZXguanNcbi8vIEFQSSByb3V0ZSB0aGF0IG1hcHMgZnVuY3Rpb25hbGl0eVxuaW1wb3J0ICogYXMgZXhwcmVzcyBmcm9tICdleHByZXNzJztcbmltcG9ydCAqIGFzIHBhdGggZnJvbSAncGF0aCc7XG5pbXBvcnQgQXJ0aXN0Um91dGVzIGZyb20gJy4vYXJ0aXN0JztcbmltcG9ydCBFeGFtcGxlUm91dGVzIGZyb20gJy4vZXhhbXBsZVJvdXRlcyc7XG5cbi8vIFJlcXVpcmVzIGFuIGFwcCBhcyBhbiBpbnB1dCBzbyBjYW4gZGlyZWN0IHRoZSB1c2VyIGFjY29yZGluZ2x5XG5jb25zdCByb3V0ZXMgPSAoYXBwOiBleHByZXNzLkFwcGxpY2F0aW9uKTogdm9pZCA9PiB7XG4gICAgLy8gTW9kdWxhciByb3V0ZXNcbiAgICBFeGFtcGxlUm91dGVzKGFwcCk7XG4gICAgQXJ0aXN0Um91dGVzKGFwcCk7XG5cbiAgICAvLyBTZXJ2ZSBzdGF0aWMgZmlsZXNcbiAgICBhcHAudXNlKGV4cHJlc3Muc3RhdGljKCcuL2NsaWVudC9idWlsZCcpKTtcblxuICAgIGFwcC5nZXQoJy9mYXZpY29uLnBuZycsIChyZXE6IGV4cHJlc3MuUmVxdWVzdCwgcmVzOiBleHByZXNzLlJlc3BvbnNlKTogdm9pZCA9PiB7XG4gICAgICAgIGNvbnN0IF9fZGlybmFtZSA9IHByb2Nlc3MuZW52LlBXRDtcbiAgICAgICAgcmVzLnNlbmRGaWxlKCdmYXZpY29uLnBuZycsIHsgcm9vdDogcGF0aC5qb2luKF9fZGlybmFtZSwgJy4vY2xpZW50L2Fzc2V0cycpIH0pO1xuICAgIH0pO1xuXG4gICAgLy8gQ2xpZW50IGFwcCBlbnRyeSBpbmRleC5odG1sIGZpbGUgLSByZWFjdCByb3V0ZXJcbiAgICBhcHAuZ2V0KCcqJywgKHJlcTogZXhwcmVzcy5SZXF1ZXN0LCByZXM6IGV4cHJlc3MuUmVzcG9uc2UpOiB2b2lkID0+IHtcbiAgICAgICAgY29uc3QgX19kaXJuYW1lID0gcHJvY2Vzcy5lbnYuUFdEO1xuICAgICAgICByZXMuc2VuZEZpbGUoJ2luZGV4Lmh0bWwnLCB7IHJvb3Q6IHBhdGguam9pbihfX2Rpcm5hbWUsICcuL2NsaWVudC9idWlsZCcpIH0pOyAvLyBSZW5kZXIgY2xpZW50XG4gICAgfSk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCByb3V0ZXM7XG4iLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJhdXRoLWhlYWRlclwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJiYWJlbC1wb2x5ZmlsbFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJib2R5LXBhcnNlclwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJidWZmZXJcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiZG90ZW52XCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImV4cHJlc3NcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiZXhwcmVzcy1xdWVyeS1pbnRcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiaGVyb2t1LWxvZ2dlclwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJtb3JnYW5cIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicGF0aFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJzZXF1ZWxpemUtdHlwZXNjcmlwdFwiKTsiXSwic291cmNlUm9vdCI6IiJ9