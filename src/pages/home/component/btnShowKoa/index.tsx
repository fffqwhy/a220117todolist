import React from "react";
import { Button } from "antd";
import {getKoaIndex} from '../../../../api/home/index';
import { connect } from "react-redux";
import styles from '../../../../scss/home/component/btnShowKoa/index.module.scss';
import { mapStateToProps } from "../../../../redux/connectFunctions/userInfo";

interface Props {
    userInfo_store:any
}
 
interface State {
    koastring:string;
}
 
class Test extends React.Component<Props, State> {
    constructor(props:Props){
        super(props);
        this.state = {
            koastring:''
        }
        this.getkoa = this.getkoa.bind(this);
    }
    getkoa() {
        getKoaIndex().then((res:any)=>{
            this.setState({koastring:res.data})
        })
    }
    render() { 
        const {userInfo_store} = this.props;
        const {koastring} = this.state;
        return (
            <div className={styles['container']}>
                <Button onClick={this.getkoa}>get</Button>
                {koastring}
                <hr />
                redux - userinfo:
                <br />
                {userInfo_store}
            </div>
        );
    }
}
const TestC = connect(mapStateToProps,{})(Test);
export default TestC;