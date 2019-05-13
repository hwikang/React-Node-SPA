//production  || development environment

if(process.env.NODE_ENV ==='production'){
//process.env가 환경정보가지고있음
//procuction
    module.exports = require('./prod');
}else{
//development - return dev keys
    module.exports = require('./dev');
}