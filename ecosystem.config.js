const { join } = require('path');

module.exports = {
  apps: [{
    // 指定解释器
    interpreter: './node_modules/.bin/ts-node',
    // 解释器参数 -P 表示项目路径，会自动使用项目的 tsconfig.json
    interpreter_args: '-P ./tsconfig.json',
    cwd: './',
    env: {
      NODE_ENV: 'development'
    },
    env_production: {
      NODE_ENV: 'production'
    },
    out_file: "./logs/app.log",
    error_file: "./logs/err.log",
    log_date_format:"YYYY-MM-DD HH:mm Z",
    kill_timeout: 10000,
    name: 'crawl_freess',
    script: './app.ts',
    wait_ready: true,
    watch: false,
    // watch: ['server'],
    ignore_watch: ['node_modules','logs'],
    watch_options: {
      "usePolling": true
    }
  }]
};
