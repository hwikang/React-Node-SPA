const proxy = require('http-proxy-middleware')

//cra 가 알아서 이거찾음
module.exports = function(app){
    app.use(proxy(['/api','/auth/google'],{target : 'http://localhost:5000'}));
    
}