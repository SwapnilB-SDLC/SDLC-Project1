module.exports = {
  apps: [
    {
      name: 'SDLC-Project',
      script: 'index.js',
      watch: false,
      autorestart: true,
      restart_delay: 1000,
      env: {
        NODE_ENV: 'development'
      },
      env_production: {
        NODE_ENV: 'production'
      }
    }
  ]
};
