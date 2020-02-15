import { Sequelize } from 'sequelize-typescript';
import User from './user';

import logger = require('heroku-logger'); // For logging to the log heroku log file

import configFile = require('../config/config.json');

declare var process: {
    env: {
        NODE_ENV: string;
        DATABASE_URL: string;
    };
};

export default (): void => {
    var env = process.env.NODE_ENV || 'development'; // Determine if using development
    // const __dirname = process.env.PWD; // Could break on prod
    // const currentDir = path.join(__dirname, './server/src/models');

    // Regular `module.filename` is undefined in local dev
    // const filename = module.filename !== undefined ? module.filename : 'index.ts';
    // var basename = path.basename(filename);

    var db: any = {};

    // I use the node-config package to manage the DB config you can choose
    // to stick with the original version. And I removed environment variable
    // support because I don't need it.
    let sequelize: any = {};
    console.log(process.env.NODE_ENV); // TODO: For some reason, in production, this reads as 'development'
    logger.info(`process.env.NODE_ENV: ${process.env.NODE_ENV}`);
    if (process.env.NODE_ENV == 'production') {
        // From the environment, extract the key with the name provided in the config as use_env_variable
        // and use that to establish a connection to our database.
        console.log('Using database URL:', process.env.DATABASE_URL);
        logger.info('Using database URL:', { url: process.env.DATABASE_URL });
        sequelize = new Sequelize(process.env.DATABASE_URL); // Establish connection using environment variables
    } else {
        var config = configFile[env]; // If local, use config
        console.log('Using local configuration:', config);
        logger.info('Using local configuration:', { config });
        sequelize = new Sequelize({
            ...config,
            // database: config.database,
            // username: config.username,
            // password: config.password,
        }); // Connect
    }

    sequelize.addModels([User]);
    // if (process.env.NODE_ENV == 'production') {
    //     sequelize.sync(); // Don't corrupt production data
    // } else {
    // sequelize.sync({ force: true }); // TODO: Remove before live
    sequelize.sync({ alter: true });
    // sequelize.sync();
    // }

    db.sequelize = sequelize;
    db.Sequelize = Sequelize;
};
