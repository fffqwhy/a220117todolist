import {SET_USER_INFO} from '../action/userInfo';

const initailUserInfo = {
    userInfo:'no'
};

export const userInfoReducer = (state:any = initailUserInfo,actions:any)=>{
    switch(actions.type){
        case SET_USER_INFO:
            return {userInfo:actions.text}
        default:
            return state;
    }
}