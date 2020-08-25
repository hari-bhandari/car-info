const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function(app) {
    app.use(
        createProxyMiddleware("/vehicle-enquiry/v1/vehicles", {
            target: "https://driver-vehicle-licensing.api.gov.uk",
            secure: true,
            changeOrigin: true
        })
    );

};