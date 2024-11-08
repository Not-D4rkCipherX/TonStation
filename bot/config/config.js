const _isArray = require("../utils/_isArray");

require("dotenv").config();
const settings = {
  API_ID:
    process.env.API_ID && /^\d+$/.test(process.env.API_ID)
      ? parseInt(process.env.API_ID)
      : process.env.API_ID && !/^\d+$/.test(process.env.API_ID)
      ? "N/A"
      : undefined,
  API_HASH: process.env.API_HASH || "",

  AUTO_FARM: process.env.AUTO_FARM
    ? process.env.AUTO_FARM.toLowerCase() === "true"
    : true,

  MAX_CONCURRENT_ACCOUNT:
    process.env.MAX_CONCURRENT_ACCOUNT &&
    /^\d+$/.test(process.env.MAX_CONCURRENT_ACCOUNT)
      ? parseInt(process.env.MAX_CONCURRENT_ACCOUNT)
      : 10,

  RUN_COUNT:
    process.env.RUN_COUNT && /^\d+$/.test(process.env.RUN_COUNT)
      ? parseInt(process.env.RUN_COUNT)
      : 1,

  USE_NON_THREAD: process.env.USE_NON_THREAD
    ? process.env.USE_NON_THREAD.toLowerCase() === "true"
    : true,

  AUTO_CLAIM_TASKS: process.env.AUTO_CLAIM_TASKS
    ? process.env.AUTO_CLAIM_TASKS.toLowerCase() === "true"
    : true,

  SLEEP_BETWEEN_REQUESTS:
    process.env.SLEEP_BETWEEN_REQUESTS &&
    _isArray(process.env.SLEEP_BETWEEN_REQUESTS)
      ? JSON.parse(process.env.SLEEP_BETWEEN_REQUESTS)
      : process.env.SLEEP_BETWEEN_REQUESTS &&
        /^\d+$/.test(process.env.SLEEP_BETWEEN_REQUESTS)
      ? parseInt(process.env.SLEEP_BETWEEN_REQUESTS)
      : [1500, 2000],

  DELAY_BETWEEN_PAINTING:
    process.env.DELAY_BETWEEN_PAINTING &&
    _isArray(process.env.DELAY_BETWEEN_PAINTING)
      ? JSON.parse(process.env.DELAY_BETWEEN_PAINTING)
      : [15, 20],

  SLEEP_BETWEEN_NON_THREADS:
    process.env.SLEEP_BETWEEN_NON_THREADS &&
    _isArray(process.env.SLEEP_BETWEEN_NON_THREADS)
      ? JSON.parse(process.env.SLEEP_BETWEEN_NON_THREADS)
      : [1500, 2000],

  DELAY_BETWEEN_STARTING_BOT:
    process.env.DELAY_BETWEEN_STARTING_BOT &&
    _isArray(process.env.DELAY_BETWEEN_STARTING_BOT)
      ? JSON.parse(process.env.DELAY_BETWEEN_STARTING_BOT)
      : [15, 20],

  DELAY_BETWEEN_TASKS:
    process.env.DELAY_BETWEEN_TASKS && _isArray(process.env.DELAY_BETWEEN_TASKS)
      ? JSON.parse(process.env.DELAY_BETWEEN_TASKS)
      : [15, 20],

  USE_PROXY_FROM_TXT_FILE: process.env.USE_PROXY_FROM_TXT_FILE
    ? process.env.USE_PROXY_FROM_TXT_FILE.toLowerCase() === "true"
    : false,

  USE_PROXY_FROM_JS_FILE: process.env.USE_PROXY_FROM_JS_FILE
    ? process.env.USE_PROXY_FROM_JS_FILE.toLowerCase() === "true"
    : false,

  CAN_CREATE_SESSION: false,
};

module.exports = settings;
