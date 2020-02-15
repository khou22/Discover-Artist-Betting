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

module.exports = JSON.parse("{\"development\":{\"username\":\"kevinhou\",\"password\":null,\"database\":\"react-express-boilerplate\",\"host\":\"127.0.0.1\",\"port\":5432,\"dialect\":\"postgres\"},\"production\":{\"use_env_variable\":\"DATABASE_URL\"}}");

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

/***/ "./server/src/models/index.ts":
/*!************************************!*\
  !*** ./server/src/models/index.ts ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_typescript_1 = __webpack_require__(/*! sequelize-typescript */ "sequelize-typescript");
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
    sequelize.addModels([user_1.default]);
    sequelize.sync({ alter: true });
    db.sequelize = sequelize;
    db.Sequelize = sequelize_typescript_1.Sequelize;
};


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
const exampleRoutes_1 = __webpack_require__(/*! ./exampleRoutes */ "./server/src/routes/exampleRoutes.ts");
const routes = (app) => {
    exampleRoutes_1.default(app);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc2VydmVyL3NyYy9hcHAudHMiLCJ3ZWJwYWNrOi8vLy4vc2VydmVyL3NyYy9jb25maWcvc2VjdXJpdHkudHMiLCJ3ZWJwYWNrOi8vLy4vc2VydmVyL3NyYy9jb250cm9sbGVycy91c2VyL2luZGV4LnRzIiwid2VicGFjazovLy8uL3NlcnZlci9zcmMvaW5kZXgudHMiLCJ3ZWJwYWNrOi8vLy4vc2VydmVyL3NyYy9tb2RlbHMvaW5kZXgudHMiLCJ3ZWJwYWNrOi8vLy4vc2VydmVyL3NyYy9tb2RlbHMvdXNlci50cyIsIndlYnBhY2s6Ly8vLi9zZXJ2ZXIvc3JjL3JvdXRlcy9leGFtcGxlUm91dGVzLnRzIiwid2VicGFjazovLy8uL3NlcnZlci9zcmMvcm91dGVzL2luZGV4LnRzIiwid2VicGFjazovLy9leHRlcm5hbCBcImF1dGgtaGVhZGVyXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiYmFiZWwtcG9seWZpbGxcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJib2R5LXBhcnNlclwiIiwid2VicGFjazovLy9leHRlcm5hbCBcImJ1ZmZlclwiIiwid2VicGFjazovLy9leHRlcm5hbCBcImRvdGVudlwiIiwid2VicGFjazovLy9leHRlcm5hbCBcImV4cHJlc3NcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJleHByZXNzLXF1ZXJ5LWludFwiIiwid2VicGFjazovLy9leHRlcm5hbCBcImhlcm9rdS1sb2dnZXJcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJtb3JnYW5cIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJwYXRoXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwic2VxdWVsaXplLXR5cGVzY3JpcHRcIiJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO1FBQUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtR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b0M7Ozs7Ozs7Ozs7O0FDQUEsOEM7Ozs7Ozs7Ozs7O0FDQUEsMEM7Ozs7Ozs7Ozs7O0FDQUEsbUM7Ozs7Ozs7Ozs7O0FDQUEsaUM7Ozs7Ozs7Ozs7O0FDQUEsaUQiLCJmaWxlIjoiZGlzdC9pbmRleC5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSAwKTtcbiIsImltcG9ydCAqIGFzIGV4cHJlc3MgZnJvbSAnZXhwcmVzcyc7XG5pbXBvcnQgc2VjdXJpdHkgZnJvbSAnLi9jb25maWcvc2VjdXJpdHknO1xuaW1wb3J0IGluaXRpYWxpemUgZnJvbSAnLi9tb2RlbHMnO1xuaW1wb3J0IHJvdXRlcyBmcm9tICcuL3JvdXRlcyc7XG5cbmltcG9ydCBsb2dnZXIgPSByZXF1aXJlKCdtb3JnYW4nKTtcbmNvbnN0IGJvZHlQYXJzZXIgPSByZXF1aXJlKCdib2R5LXBhcnNlcicpO1xuaW1wb3J0IHBhdGggPSByZXF1aXJlKCdwYXRoJyk7XG5cbi8vIENvbmZpZ3VyZSBkb3RlbnYgdG8gbG9hZCBpbiB0aGUgLmVudiBmaWxlXG5pbXBvcnQgZG90ZW52ID0gcmVxdWlyZSgnZG90ZW52Jyk7XG5jb25zdCByZXN1bHQgPSBkb3RlbnYuY29uZmlnKCk7XG5cbmNvbnN0IF9fZGlybmFtZSA9IHByb2Nlc3MuZW52LlBXRDsgLy8gQ291bGQgYnJlYWsgb24gcHJvZFxuXG5jb25zdCBhcHAgPSBleHByZXNzKCk7IC8vIFNldHVwIGV4cHJlc3MgYXBwXG5cbi8vIEFsbG93IGNyb3NzIG9yaWdpbiByZXF1ZXN0cyB3aXRoIGF1dGhvcml6YXRpb24gKGZvciBBUEkgcHVycG9zZXMpXG5hcHAuYWxsKCcqJywgKHJlcTogZXhwcmVzcy5SZXF1ZXN0LCByZXM6IGV4cHJlc3MuUmVzcG9uc2UsIG5leHQ6IGV4cHJlc3MuTmV4dEZ1bmN0aW9uKTogdm9pZCA9PiB7XG4gICAgcmVzLmhlYWRlcignQWNjZXNzLUNvbnRyb2wtQWxsb3ctT3JpZ2luJywgJyonKTtcbiAgICByZXMuaGVhZGVyKCdBY2Nlc3MtQ29udHJvbC1BbGxvdy1NZXRob2RzJywgJ1BVVCwgR0VULCBQT1NULCBERUxFVEUsIE9QVElPTlMnKTtcbiAgICByZXMuaGVhZGVyKCdBY2Nlc3MtQ29udHJvbC1BbGxvdy1DcmVkZW50aWFscycsICd0cnVlJyk7XG4gICAgcmVzLmhlYWRlcignQWNjZXNzLUNvbnRyb2wtQWxsb3ctT3JpZ2luJywgYCR7cmVxLmhlYWRlcnMub3JpZ2lufWApO1xuICAgIHJlcy5oZWFkZXIoXG4gICAgICAgICdBY2Nlc3MtQ29udHJvbC1BbGxvdy1IZWFkZXJzJyxcbiAgICAgICAgJ2FjY2VwdCwgY29udGVudC10eXBlLCB4LXBhcnNlLWFwcGxpY2F0aW9uLWlkLCB4LXBhcnNlLXJlc3QtYXBpLWtleSwgeC1wYXJzZS1zZXNzaW9uLXRva2VuLCBBVVRIT1JJWkFUSU9OJyxcbiAgICApO1xuICAgIC8vIEludGVyY2VwdCBPUFRJT05TIG1ldGhvZFxuICAgIGlmICgnT1BUSU9OUycgPT0gcmVxLm1ldGhvZCkge1xuICAgICAgICByZXMuc2VuZCgyMDApO1xuICAgIH0gZWxzZSB7XG4gICAgICAgIG5leHQoKTtcbiAgICB9XG59KTtcblxuLy8gU2V0dXAgYXV0aGVudGljYXRpb24gYW5kIHNlY3VyaXR5XG5zZWN1cml0eShhcHApO1xuaW5pdGlhbGl6ZSgpO1xuXG4vLyBMb2cgcmVxdWVzdHMgdG8gdGhlIGNvbnNvbGUuXG5hcHAudXNlKGxvZ2dlcignZGV2JykpO1xuXG4vLyBQYXJzZSBpbmNvbWluZyByZXF1ZXN0cyBkYXRhIChodHRwczovL2dpdGh1Yi5jb20vZXhwcmVzc2pzL2JvZHktcGFyc2VyKVxuLy8gICsgaW5jcmVhc2luZyBib2R5IHJlcXVlc3QgbGltaXQgc2l6ZVxuYXBwLnVzZShib2R5UGFyc2VyLmpzb24oeyBsaW1pdDogJzE1bWInLCBleHRlbmRlZDogdHJ1ZSB9KSk7XG5hcHAudXNlKGJvZHlQYXJzZXIudXJsZW5jb2RlZCh7IGxpbWl0OiAnMTVtYicsIGV4dGVuZGVkOiB0cnVlIH0pKTtcblxuLy8gUGFyc2UgcXVlcmllcyBpbnRvIG51bWJlcnMsIG5vdCBzdHJpbmdzXG52YXIgcXVlcnlQYXJzZXIgPSByZXF1aXJlKCdleHByZXNzLXF1ZXJ5LWludCcpO1xuYXBwLnVzZShib2R5UGFyc2VyLmpzb24oKSk7XG5hcHAudXNlKHF1ZXJ5UGFyc2VyKCkpO1xuXG5hcHAudXNlKCcvc2NyaXB0cycsIGV4cHJlc3Muc3RhdGljKHBhdGguam9pbihfX2Rpcm5hbWUsICcuLi8uLi9jbGllbnQvZGlzdCcpKSk7XG5cbi8vIFJlcXVpcmUgcm91dGVzIGFuZCBzaW11bHRhbmVvdXNseSBhdHRhY2ggYXBwXG5yb3V0ZXMoYXBwKTtcblxuLy8gQ2F0Y2ggYWxsIGlmIHRoZSByb3V0ZXMgZG9lc24ndCBmaW5kIGEgdmFsaWQgVVJMXG5hcHAuZ2V0KFxuICAgICcqJyxcbiAgICAocmVxOiBleHByZXNzLlJlcXVlc3QsIHJlczogZXhwcmVzcy5SZXNwb25zZSk6IGV4cHJlc3MuUmVzcG9uc2UgPT5cbiAgICAgICAgcmVzLnN0YXR1cygyMDApLnNlbmQoe1xuICAgICAgICAgICAgbWVzc2FnZTogJ0ZvciBzb21lIHJlYXNvbiwgbm9uZSBvZiB0aGUgcm91dGVzIGhpdC4uLicsXG4gICAgICAgIH0pLFxuKTtcblxuZXhwb3J0IGRlZmF1bHQgYXBwO1xuIiwiaW1wb3J0ICogYXMgYXV0aG9yaXphdGlvbiBmcm9tICdhdXRoLWhlYWRlcic7IC8vIEZvciBwYXJzaW5nIGF1dGhlbnRpY2F0aW9uXG5pbXBvcnQgeyBCdWZmZXIgfSBmcm9tICdidWZmZXInO1xuaW1wb3J0ICogYXMgZXhwcmVzcyBmcm9tICdleHByZXNzJztcbmltcG9ydCAqIGFzIGxvZ2dlciBmcm9tICdoZXJva3UtbG9nZ2VyJzsgLy8gRm9yIGxvZ2dpbmcgdG8gdGhlIGxvZyBoZXJva3UgbG9nIGZpbGVcblxuLy8gV2hpdGVsaXN0ZWQgSVBzXG5jb25zdCB2YWxpZElQcyA9IFtcbiAgICAnOjpmZmZmOjEyNy4wLjAuMScsIC8vIExvY2FsIGhvc3RcbiAgICAnMTI3LjAuMC4xJywgLy8gSVB2NCAtIGxvY2FsaG9zdCAoPylcbiAgICAnOjoxJywgLy8gSVB2NlxuXTtcblxuLy8gV2hpdGVsaXN0ZWQgdXJsc1xuY29uc3QgdmFsaWRSZWZlcmVycyA9IFsnKGh0dHBzPzovLyk/bG9jYWxob3N0OjMwMDAuKiddO1xuY29uc3QgdmFsaWRVUkxzID0gbmV3IFJlZ0V4cCh2YWxpZFJlZmVyZXJzLmpvaW4oJ3wnKSwgJ2knKTsgLy8gQ29udmVydCB0byByZWd1bGFyIGV4cHJlc3Npb25cblxuLy8gV2hpdGVsaXN0ZWQgYXNzZXRzIC0gYWxyZWFkeSBub3QgaW4gdGhlIGJsYWNrbGlzdCBzbyBub3QgZW50aXJlbHkgbmVjY2Vzc2FyeSBhbnltb3JlXG5jb25zdCB2YWxpZFBhZ2VzID0gWycvJywgJy9mYXZpY29uLmljbycsICcvc2NyaXB0cy9pbmRleC5qcyddO1xuXG4vLyBBbnkgcm91dGUgaW4gdGhlIGJsYWNrbGlzdCB3aWxsIHJlcXVpcmUgYXV0aGVudGljYXRpb25cbmNvbnN0IGJsYWNrbGlzdCA9IC9cXC9hcGkuKi87IC8vIEp1c3QgQVBJc1xuXG4vLyBIYW5kbGUgNDAxIGVycm9yIGNvZGUgLSBVbmF1dGhvcml6ZWRcbmNvbnN0IHVuYXV0aG9yaXplZFJlc3BvbnNlID0gKHJlczogZXhwcmVzcy5SZXNwb25zZSk6IHZvaWQgPT4ge1xuICAgIHJlcy5zdGF0dXMoNDAxKS5zZW5kKCdSZXF1ZXN0IGZhaWxlZDogQmFkIGF1dGhlbnRpY2F0aW9uJyk7XG59O1xuXG5jb25zdCBzZWN1cml0eSA9IChhcHApOiB2b2lkID0+IHtcbiAgICAvLyBTa2lwIHdoaXRlbGlzdGVkIGRvbWFpbnNcbiAgICBhcHAudXNlKChyZXE6IGV4cHJlc3MuUmVxdWVzdCwgcmVzOiBleHByZXNzLlJlc3BvbnNlLCBuZXh0OiBleHByZXNzLk5leHRGdW5jdGlvbik6IHZvaWQgPT4ge1xuICAgICAgICAvLyBSZXF1aXJlIGF1dGhlbnRpY2F0aW9uIGlmIG5vdCBpbiB0aGUgd2hpdGVsaXN0IG9yIGlzIGluIGJsYWNrbGlzdFxuICAgICAgICBjb25zdCBpbldoaXRlbGlzdCA9IHZhbGlkUGFnZXMuaW5kZXhPZihyZXEub3JpZ2luYWxVcmwpID4gLTE7XG4gICAgICAgIGlmICghaW5XaGl0ZWxpc3QgfHwgYmxhY2tsaXN0LnRlc3QocmVxLm9yaWdpbmFsVXJsKSkge1xuICAgICAgICAgICAgLy8gR2V0IHRoZSBJUCBhZGRyZXNzXG4gICAgICAgICAgICBjb25zdCBpcDogc3RyaW5nID0gKHJlcS5oZWFkZXJzWyd4LWZvcndhcmRlZC1mb3InXSB8fFxuICAgICAgICAgICAgICAgIHJlcS5jb25uZWN0aW9uLnJlbW90ZUFkZHJlc3MgfHxcbiAgICAgICAgICAgICAgICByZXEuaXApIGFzIHN0cmluZztcbiAgICAgICAgICAgIGNvbnN0IHJlZmVyZXIgPSByZXEuaGVhZGVyKCdSZWZlcmVyJyk7IC8vIElmIHRoZSByZXF1ZXN0IGlzIGJlaW5nIHNlbnQgYnkgYSB3ZWJzaXRlXG4gICAgICAgICAgICBjb25zb2xlLmxvZygnSVA6ICcsIGlwKTtcbiAgICAgICAgICAgIGlmICh2YWxpZElQcy5pbmRleE9mKGlwKSA+IC0xKSB7XG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coaXAsICdpcyBhIHdoaXRlbGlzdGVkIElQJyk7XG4gICAgICAgICAgICAgICAgbG9nZ2VyLmluZm8oJ1doaXRlbGlzdGVkIElQJywgeyBpcDogaXAgfSk7XG4gICAgICAgICAgICAgICAgbmV4dCgpOyAvLyBSZXF1ZXN0IHZhbGlkXG4gICAgICAgICAgICB9IGVsc2UgaWYgKHJlZmVyZXIgJiYgdmFsaWRVUkxzLnRlc3QocmVmZXJlcikpIHtcbiAgICAgICAgICAgICAgICBsb2dnZXIuaW5mbygnV2hpdGVsaXN0ZWQgUmVmZXJlcicsIHsgcmVmZXJlcjogcmVmZXJlciB9KTtcbiAgICAgICAgICAgICAgICBuZXh0KCk7IC8vIFJlcXVlc3QgdmFsaWRcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgLy8gbG9nZ2VyLmluZm8oXCJDaGVja2luZyBhdXRob3JpemF0aW9uLi4uXCIpXG4gICAgICAgICAgICAgICAgY29uc3QgYXV0aEhlYWRlciA9IHJlcS5oZWFkZXJbJ2F1dGhvcml6YXRpb24nXVxuICAgICAgICAgICAgICAgICAgICA/IHJlcS5oZWFkZXJbJ2F1dGhvcml6YXRpb24nXVxuICAgICAgICAgICAgICAgICAgICA6IHJlcS5oZWFkZXJzWydhdXRob3JpemF0aW9uJ107XG5cbiAgICAgICAgICAgICAgICAvLyBGYWlsIGlmIG5vIGJhc2ljIGF1dGhlbnRpY2F0aW9uIHByb3ZpZGVkXG4gICAgICAgICAgICAgICAgaWYgKCFhdXRoSGVhZGVyKSB7XG4gICAgICAgICAgICAgICAgICAgIC8vIE5vIGF1dGhvcml6YXRpb25cbiAgICAgICAgICAgICAgICAgICAgcmVzLnNldCgnV1dXLUF1dGhlbnRpY2F0ZScsICdCYXNpYyByZWFsbT1cIkF1dGhvcml6YXRpb24gUmVxdWlyZWRcIicpOyAvLyBQcm9tcHQgY2hhbGxlbmdlIHBhc3N3b3JkXG4gICAgICAgICAgICAgICAgICAgIGxvZ2dlci5lcnJvcignTm8gQXV0aGVudGljYXRpb24nLCB7XG4gICAgICAgICAgICAgICAgICAgICAgICBpcDogaXAsXG4gICAgICAgICAgICAgICAgICAgICAgICByZWZlcmVyOiByZWZlcmVyLFxuICAgICAgICAgICAgICAgICAgICAgICAgdXJsOiByZXEub3JpZ2luYWxVcmwsXG4gICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gdW5hdXRob3JpemVkUmVzcG9uc2UocmVzKTtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAvLyBSZXRyZWl2ZSBhdXRob3JpemF0aW9uIHRva2VuXG4gICAgICAgICAgICAgICAgY29uc3QgYXV0aCA9IGF1dGhvcml6YXRpb24ucGFyc2UoYXV0aEhlYWRlcik7XG5cbiAgICAgICAgICAgICAgICAvLyBHZXQgdGhlIGJhc2ljIGF1dGggY29tcG9uZW50XG4gICAgICAgICAgICAgICAgY29uc3QgW3VuLCBwd10gPSBuZXcgQnVmZmVyKGF1dGgudG9rZW4sICdiYXNlNjQnKS50b1N0cmluZygpLnNwbGl0KCc6JywgMik7XG5cbiAgICAgICAgICAgICAgICAvLyBWZXJpZnkgYXV0aGVudGljYXRpb24uXG4gICAgICAgICAgICAgICAgaWYgKHVuICE9PSAnYWRtaW4nIHx8IHB3ICE9PSBwcm9jZXNzLmVudi5BRE1JTl9BUElfS0VZKSB7XG4gICAgICAgICAgICAgICAgICAgIGxvZ2dlci5lcnJvcignVW5hdXRob3JpemVkIENyZWRlbnRpYWxzJywgeyB1c2VybmFtZTogdW4sIHBhc3N3b3JkOiBwdyB9KTtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHVuYXV0aG9yaXplZFJlc3BvbnNlKHJlcyk7XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgbG9nZ2VyLmluZm8oJ1VzZXIgQXV0aGVudGljYXRlZCcsIHsgdXNlcm5hbWU6IHVuLCBwYXNzd29yZDogcHcgfSk7XG4gICAgICAgICAgICAgICAgbmV4dCgpOyAvLyBSZXF1ZXN0IHZhbGlkXG4gICAgICAgICAgICB9XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAvLyBTa2lwIGF1dGhlbnRpY2F0aW9uXG4gICAgICAgICAgICBsb2dnZXIuaW5mbygnV2hpdGVsaXN0IG9yIG5vdCBpbiBibGFja2xpc3QnLCB7IHVybDogcmVxLm9yaWdpbmFsVXJsIH0pO1xuICAgICAgICAgICAgbmV4dCgpO1xuICAgICAgICB9XG4gICAgfSk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBzZWN1cml0eTtcbiIsImltcG9ydCAqIGFzIGV4cHJlc3MgZnJvbSAnZXhwcmVzcyc7XG5pbXBvcnQgVXNlciBmcm9tICcuLi8uLi9tb2RlbHMvdXNlcic7XG5cbmV4cG9ydCBpbnRlcmZhY2UgVXNlckdldFJlcXVlc3QgZXh0ZW5kcyBleHByZXNzLlJlcXVlc3Qge1xuICAgIGlkOiBzdHJpbmc7XG59XG5cbmV4cG9ydCBjb25zdCBnZXRVc2VyID0gKHJlcTogVXNlckdldFJlcXVlc3QsIHJlczogZXhwcmVzcy5SZXNwb25zZSk6IGFueSA9PiB7XG4gICAgY29uc3QgeyBpZCB9ID0gcmVxLnBhcmFtcztcbiAgICByZXR1cm4gVXNlci5maW5kQnlJZChpZClcbiAgICAgICAgLnRoZW4oKHVzZXI6IFVzZXIpOiBleHByZXNzLlJlc3BvbnNlID0+IHJlcy5zdGF0dXMoMjAwKS5zZW5kKHVzZXIpKVxuICAgICAgICAuY2F0Y2goKGVycm9yOiBFcnJvcik6IGV4cHJlc3MuUmVzcG9uc2UgPT4gcmVzLnN0YXR1cyg0MDApLnNlbmQoZXJyb3IpKTsgLy8gRXJyb3Jcbn07XG4iLCIvLyBBcHBsaWNhdGlvbiBlbnRyeSwgc2V0dGluZyB1cCBzZXJ2ZXJcbmltcG9ydCBhcHAgZnJvbSAnLi9hcHAnOyAvLyBUaGUgZXhwcmVzcyBhcHAgd2UganVzdCBjcmVhdGVkXG5cbmNvbnN0IHBvcnQgPSBwYXJzZUludChwcm9jZXNzLmVudi5QT1JULCAxMCkgfHwgNTAwMDsgLy8gVXNlIHBvcnQgNTAwMFxuYXBwLnNldCgncG9ydCcsIHBvcnQpO1xuXG4vLyAwLjAuMC4wIG1ha2VzIGl0IGF2YWlsYWJsZSBvbiB5b3VyIGxvY2FsIG5ldHdvcmtcbi8vIGFwcC5saXN0ZW4ocG9ydCwgJzAuMC4wLjAnKTtcbmFwcC5saXN0ZW4ocG9ydCk7XG4iLCJpbXBvcnQgeyBTZXF1ZWxpemUgfSBmcm9tICdzZXF1ZWxpemUtdHlwZXNjcmlwdCc7XG5pbXBvcnQgVXNlciBmcm9tICcuL3VzZXInO1xuXG5pbXBvcnQgbG9nZ2VyID0gcmVxdWlyZSgnaGVyb2t1LWxvZ2dlcicpOyAvLyBGb3IgbG9nZ2luZyB0byB0aGUgbG9nIGhlcm9rdSBsb2cgZmlsZVxuXG5pbXBvcnQgY29uZmlnRmlsZSA9IHJlcXVpcmUoJy4uL2NvbmZpZy9jb25maWcuanNvbicpO1xuXG5kZWNsYXJlIHZhciBwcm9jZXNzOiB7XG4gICAgZW52OiB7XG4gICAgICAgIE5PREVfRU5WOiBzdHJpbmc7XG4gICAgICAgIERBVEFCQVNFX1VSTDogc3RyaW5nO1xuICAgIH07XG59O1xuXG5leHBvcnQgZGVmYXVsdCAoKTogdm9pZCA9PiB7XG4gICAgdmFyIGVudiA9IHByb2Nlc3MuZW52Lk5PREVfRU5WIHx8ICdkZXZlbG9wbWVudCc7IC8vIERldGVybWluZSBpZiB1c2luZyBkZXZlbG9wbWVudFxuICAgIC8vIGNvbnN0IF9fZGlybmFtZSA9IHByb2Nlc3MuZW52LlBXRDsgLy8gQ291bGQgYnJlYWsgb24gcHJvZFxuICAgIC8vIGNvbnN0IGN1cnJlbnREaXIgPSBwYXRoLmpvaW4oX19kaXJuYW1lLCAnLi9zZXJ2ZXIvc3JjL21vZGVscycpO1xuXG4gICAgLy8gUmVndWxhciBgbW9kdWxlLmZpbGVuYW1lYCBpcyB1bmRlZmluZWQgaW4gbG9jYWwgZGV2XG4gICAgLy8gY29uc3QgZmlsZW5hbWUgPSBtb2R1bGUuZmlsZW5hbWUgIT09IHVuZGVmaW5lZCA/IG1vZHVsZS5maWxlbmFtZSA6ICdpbmRleC50cyc7XG4gICAgLy8gdmFyIGJhc2VuYW1lID0gcGF0aC5iYXNlbmFtZShmaWxlbmFtZSk7XG5cbiAgICB2YXIgZGI6IGFueSA9IHt9O1xuXG4gICAgLy8gSSB1c2UgdGhlIG5vZGUtY29uZmlnIHBhY2thZ2UgdG8gbWFuYWdlIHRoZSBEQiBjb25maWcgeW91IGNhbiBjaG9vc2VcbiAgICAvLyB0byBzdGljayB3aXRoIHRoZSBvcmlnaW5hbCB2ZXJzaW9uLiBBbmQgSSByZW1vdmVkIGVudmlyb25tZW50IHZhcmlhYmxlXG4gICAgLy8gc3VwcG9ydCBiZWNhdXNlIEkgZG9uJ3QgbmVlZCBpdC5cbiAgICBsZXQgc2VxdWVsaXplOiBhbnkgPSB7fTtcbiAgICBjb25zb2xlLmxvZyhwcm9jZXNzLmVudi5OT0RFX0VOVik7IC8vIFRPRE86IEZvciBzb21lIHJlYXNvbiwgaW4gcHJvZHVjdGlvbiwgdGhpcyByZWFkcyBhcyAnZGV2ZWxvcG1lbnQnXG4gICAgbG9nZ2VyLmluZm8oYHByb2Nlc3MuZW52Lk5PREVfRU5WOiAke3Byb2Nlc3MuZW52Lk5PREVfRU5WfWApO1xuICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViA9PSAncHJvZHVjdGlvbicpIHtcbiAgICAgICAgLy8gRnJvbSB0aGUgZW52aXJvbm1lbnQsIGV4dHJhY3QgdGhlIGtleSB3aXRoIHRoZSBuYW1lIHByb3ZpZGVkIGluIHRoZSBjb25maWcgYXMgdXNlX2Vudl92YXJpYWJsZVxuICAgICAgICAvLyBhbmQgdXNlIHRoYXQgdG8gZXN0YWJsaXNoIGEgY29ubmVjdGlvbiB0byBvdXIgZGF0YWJhc2UuXG4gICAgICAgIGNvbnNvbGUubG9nKCdVc2luZyBkYXRhYmFzZSBVUkw6JywgcHJvY2Vzcy5lbnYuREFUQUJBU0VfVVJMKTtcbiAgICAgICAgbG9nZ2VyLmluZm8oJ1VzaW5nIGRhdGFiYXNlIFVSTDonLCB7IHVybDogcHJvY2Vzcy5lbnYuREFUQUJBU0VfVVJMIH0pO1xuICAgICAgICBzZXF1ZWxpemUgPSBuZXcgU2VxdWVsaXplKHByb2Nlc3MuZW52LkRBVEFCQVNFX1VSTCk7IC8vIEVzdGFibGlzaCBjb25uZWN0aW9uIHVzaW5nIGVudmlyb25tZW50IHZhcmlhYmxlc1xuICAgIH0gZWxzZSB7XG4gICAgICAgIHZhciBjb25maWcgPSBjb25maWdGaWxlW2Vudl07IC8vIElmIGxvY2FsLCB1c2UgY29uZmlnXG4gICAgICAgIGNvbnNvbGUubG9nKCdVc2luZyBsb2NhbCBjb25maWd1cmF0aW9uOicsIGNvbmZpZyk7XG4gICAgICAgIGxvZ2dlci5pbmZvKCdVc2luZyBsb2NhbCBjb25maWd1cmF0aW9uOicsIHsgY29uZmlnIH0pO1xuICAgICAgICBzZXF1ZWxpemUgPSBuZXcgU2VxdWVsaXplKHtcbiAgICAgICAgICAgIC4uLmNvbmZpZyxcbiAgICAgICAgICAgIC8vIGRhdGFiYXNlOiBjb25maWcuZGF0YWJhc2UsXG4gICAgICAgICAgICAvLyB1c2VybmFtZTogY29uZmlnLnVzZXJuYW1lLFxuICAgICAgICAgICAgLy8gcGFzc3dvcmQ6IGNvbmZpZy5wYXNzd29yZCxcbiAgICAgICAgfSk7IC8vIENvbm5lY3RcbiAgICB9XG5cbiAgICBzZXF1ZWxpemUuYWRkTW9kZWxzKFtVc2VyXSk7XG4gICAgLy8gaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WID09ICdwcm9kdWN0aW9uJykge1xuICAgIC8vICAgICBzZXF1ZWxpemUuc3luYygpOyAvLyBEb24ndCBjb3JydXB0IHByb2R1Y3Rpb24gZGF0YVxuICAgIC8vIH0gZWxzZSB7XG4gICAgLy8gc2VxdWVsaXplLnN5bmMoeyBmb3JjZTogdHJ1ZSB9KTsgLy8gVE9ETzogUmVtb3ZlIGJlZm9yZSBsaXZlXG4gICAgc2VxdWVsaXplLnN5bmMoeyBhbHRlcjogdHJ1ZSB9KTtcbiAgICAvLyBzZXF1ZWxpemUuc3luYygpO1xuICAgIC8vIH1cblxuICAgIGRiLnNlcXVlbGl6ZSA9IHNlcXVlbGl6ZTtcbiAgICBkYi5TZXF1ZWxpemUgPSBTZXF1ZWxpemU7XG59O1xuIiwiaW1wb3J0IHsgQWxsb3dOdWxsLCBDb2x1bW4sIENyZWF0ZWRBdCwgTW9kZWwsIFRhYmxlLCBVcGRhdGVkQXQgfSBmcm9tICdzZXF1ZWxpemUtdHlwZXNjcmlwdCc7XG5cbkBUYWJsZSh7IHRhYmxlTmFtZTogJ1VzZXInIH0pXG5jbGFzcyBVc2VyIGV4dGVuZHMgTW9kZWw8VXNlcj4ge1xuICAgIEBBbGxvd051bGwoZmFsc2UpXG4gICAgQENvbHVtblxuICAgIHVzZXJuYW1lOiBzdHJpbmc7XG5cbiAgICBAQWxsb3dOdWxsKGZhbHNlKVxuICAgIEBDb2x1bW5cbiAgICBwYXNzd29yZDogc3RyaW5nO1xuXG4gICAgQENvbHVtblxuICAgIGZpcnN0X25hbWU6IHN0cmluZztcblxuICAgIEBDb2x1bW5cbiAgICBsYXN0X25hbWU6IHN0cmluZztcblxuICAgIEBDb2x1bW5cbiAgICBjcmVhdGVkQnk6IHN0cmluZztcblxuICAgIEBDcmVhdGVkQXRcbiAgICBjcmVhdGVkQXQ6IERhdGU7XG5cbiAgICBAVXBkYXRlZEF0XG4gICAgdXBkYXRlZEF0OiBEYXRlO1xufVxuXG5leHBvcnQgZGVmYXVsdCBVc2VyO1xuIiwiaW1wb3J0ICogYXMgZXhwcmVzcyBmcm9tICdleHByZXNzJztcbmltcG9ydCB7IGdldFVzZXIgfSBmcm9tICcuLi9jb250cm9sbGVycy91c2VyJztcblxuZXhwb3J0IGRlZmF1bHQgKGFwcDogZXhwcmVzcy5BcHBsaWNhdGlvbik6IHZvaWQgPT4ge1xuICAgIGFwcC5nZXQoJy9hcGkvdXNlci86aWQnLCBnZXRVc2VyKTtcbn07XG4iLCIvLyBzZXJ2ZXIvcm91dGVzL2luZGV4LmpzXG4vLyBBUEkgcm91dGUgdGhhdCBtYXBzIGZ1bmN0aW9uYWxpdHlcbmltcG9ydCAqIGFzIGV4cHJlc3MgZnJvbSAnZXhwcmVzcyc7XG5pbXBvcnQgKiBhcyBwYXRoIGZyb20gJ3BhdGgnO1xuaW1wb3J0IEV4YW1wbGVSb3V0ZXMgZnJvbSAnLi9leGFtcGxlUm91dGVzJztcblxuLy8gUmVxdWlyZXMgYW4gYXBwIGFzIGFuIGlucHV0IHNvIGNhbiBkaXJlY3QgdGhlIHVzZXIgYWNjb3JkaW5nbHlcbmNvbnN0IHJvdXRlcyA9IChhcHA6IGV4cHJlc3MuQXBwbGljYXRpb24pOiB2b2lkID0+IHtcbiAgICAvLyBNb2R1bGFyIHJvdXRlc1xuICAgIEV4YW1wbGVSb3V0ZXMoYXBwKTtcblxuICAgIC8vIFNlcnZlIHN0YXRpYyBmaWxlc1xuICAgIGFwcC51c2UoZXhwcmVzcy5zdGF0aWMoJy4vY2xpZW50L2J1aWxkJykpO1xuXG4gICAgYXBwLmdldCgnL2Zhdmljb24ucG5nJywgKHJlcTogZXhwcmVzcy5SZXF1ZXN0LCByZXM6IGV4cHJlc3MuUmVzcG9uc2UpOiB2b2lkID0+IHtcbiAgICAgICAgY29uc3QgX19kaXJuYW1lID0gcHJvY2Vzcy5lbnYuUFdEO1xuICAgICAgICByZXMuc2VuZEZpbGUoJ2Zhdmljb24ucG5nJywgeyByb290OiBwYXRoLmpvaW4oX19kaXJuYW1lLCAnLi9jbGllbnQvYXNzZXRzJykgfSk7XG4gICAgfSk7XG5cbiAgICAvLyBDbGllbnQgYXBwIGVudHJ5IGluZGV4Lmh0bWwgZmlsZSAtIHJlYWN0IHJvdXRlclxuICAgIGFwcC5nZXQoJyonLCAocmVxOiBleHByZXNzLlJlcXVlc3QsIHJlczogZXhwcmVzcy5SZXNwb25zZSk6IHZvaWQgPT4ge1xuICAgICAgICBjb25zdCBfX2Rpcm5hbWUgPSBwcm9jZXNzLmVudi5QV0Q7XG4gICAgICAgIHJlcy5zZW5kRmlsZSgnaW5kZXguaHRtbCcsIHsgcm9vdDogcGF0aC5qb2luKF9fZGlybmFtZSwgJy4vY2xpZW50L2J1aWxkJykgfSk7IC8vIFJlbmRlciBjbGllbnRcbiAgICB9KTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IHJvdXRlcztcbiIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImF1dGgtaGVhZGVyXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImJhYmVsLXBvbHlmaWxsXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImJvZHktcGFyc2VyXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImJ1ZmZlclwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJkb3RlbnZcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiZXhwcmVzc1wiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJleHByZXNzLXF1ZXJ5LWludFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJoZXJva3UtbG9nZ2VyXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm1vcmdhblwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJwYXRoXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInNlcXVlbGl6ZS10eXBlc2NyaXB0XCIpOyJdLCJzb3VyY2VSb290IjoiIn0=