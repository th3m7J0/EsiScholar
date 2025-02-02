const env = process.env.NODE_ENV; // 'dev' or 'test'

const dev = {
    db: {
        host: process.env.DEV_DB_HOST || 'localhost',
        port: parseInt(process.env.DEV_DB_PORT) || 27017,
        name: process.env.DEV_DB_NAME || 'scholar_esi'
    }
};

const test = {
    db: {
        host: process.env.TEST_DB_HOST || 'localhost',
        port: parseInt(process.env.TEST_DB_PORT) || 27017,
        name: process.env.TEST_DB_NAME || 'test_scholar_esi'
    }
};

const config = {
    dev,
    test
};

module.exports = config[env];
