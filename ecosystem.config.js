module.exports = {
    apps: [
      {
        name: 'sulu-face',
        port: '3000',
        exec_mode: 'cluster',
        instances: 'max',
        script: './.output/server/index.mjs'
      }
    ]
  }