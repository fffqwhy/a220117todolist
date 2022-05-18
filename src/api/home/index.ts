import axios from 'axios';

const getKoaIndex = ()=>{
    return axios.get('/users/bar').then((res:any)=>{
        return res;
    }).catch((err:any)=>{
        return err;
    })
}

export {getKoaIndex};