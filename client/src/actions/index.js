import axois from 'axios';
import {FETCH_USER} from './type'

//action creater
export const fetchUser = () =>{
    //action creater 가 함수를 리턴하면 reduxthunk 가 자동으로 dispatch 에게줌

    return function (dispatch) {
        axois
        .get('/api/current_user')
        .then(res=>dispatch({type:FETCH_USER , payload:res}))
        //끝나면 dispatch
    }; 
};