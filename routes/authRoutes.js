const passport = require('passport');

//index에서 실행
module.exports = (app) =>{

    //string google 은 위의 googlestrategy 를 말함
    app.get('/auth/google', passport.authenticate('google',{scope :['profile','email']}));
    //callback 때는 code를 볼수있음
    app.get('/auth/google/callback',passport.authenticate('google'));
    app.get('/api/current_user',(req,res) =>{
        //incomming request / outgoing response
        //session에있는걸 passport가 접근함 
        res.send(req.session);

    })
    app.get('/api/logout', (req,res) =>{
        //cookie 죽임
        req.logout();
        res.send(req.user);
    })
}   