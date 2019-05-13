const passport =require('passport');
const GoogleStrategy = require('passport-google-oauth20').Strategy;
const keys =require('../config/key');
const mongoose = require('mongoose');
//users 모델(컬렉션) 가져옴
const User = mongoose.model('users');

//setting id as cookie in user’s browser
passport.serializeUser((user,done) => {
    //googleId 랑 다른거임
    done(null,user.id);
});

// getting id from the cookie
//done은 성공했을때 실행할 함수 
passport.deserializeUser((id,done) => {
    User.findById(id)
    .then(user =>{
        done(null,user);
    });
});

//새 객체생성
passport.use(new GoogleStrategy(
    {
        clientID:keys.googleClientID,
        clientSecret : keys.googleClientSecret,
        callbackURL :'/auth/google/callback',
        proxy : true
    },
    (accessToken,refreshToken,profile,done) =>{
        //promise ,
        User.findOne({googleId:profile.id})
        .then((existingUser) =>{
            if(existingUser){
                // id 가 있으면 추가안함
                //done (errObj,user)
                done(null,existingUser);
                console.log(existingUser + "is already exist");

            }else{                
                //save 해야 db에 저장
                new User({googleId:profile.id})
                .save()
                .then(user => done(null,user))
            }

        })
    })
);

