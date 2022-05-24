import {setUserInfo} from '../../action/userInfo';

function mapStateToProps(state:any){ 
    return {
        userInfo_store : state.userInfoReducer.userInfo,
    }
}
function mapDispatchToProps(dispatch:any){
    return {
        setUserInfoByStore: (data:string) => dispatch(setUserInfo(data))
    }
}

export {mapStateToProps,mapDispatchToProps}