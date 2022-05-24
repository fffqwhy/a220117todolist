export const SET_USER_INFO = 'SET_USER_INFO';

export const setUserInfo = (data:any)=>{
    return {
        type:SET_USER_INFO,
        text:data
    }
}