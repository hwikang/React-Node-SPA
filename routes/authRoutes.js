const passport = require('passport');

//index에서 실행
module.exports = (app) =>{

    //string google 은 위의 googlestrategy 를 말함
    app.get('/auth/google', passport.authenticate('google',{scope :['profile','email']}));
    //callback 때는 code를 볼수있음
    app.get('/auth/google/callback',passport.authenticate('google'));

}