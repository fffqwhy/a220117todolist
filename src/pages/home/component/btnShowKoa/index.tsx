import React from "react";
import { Button } from "antd";
import {getKoaIndex} from '../../../../api/home/index';

interface Props {
    
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
        const {koastring} = this.state;
        return (
            <div>
                <Button onClick={this.getkoa}>get</Button>
                {koastring}
            </div>
        );
    }
}
 
export default Test;