import { Button, Input } from 'antd';
import React from 'react';
import { connect } from 'react-redux';
import styles from '../../../../scss/home/component/btnSetStore/index.module.scss';
import { mapStateToProps, mapDispatchToProps } from '../../../../redux/connectFunctions/userInfo';

interface Props {
    setUserInfoByStore:Function;
    userInfo_store:string;
}

interface State {
    setStoreValue: string;
}

class SetStore extends React.Component<Props, State> {
    constructor(props: Props) {
        super(props);
        this.state = {
            setStoreValue: ''
        }
        this.setStore = this.setStore.bind(this);
    }
    setStore() {
        console.log(this.state.setStoreValue);
        this.props.setUserInfoByStore(this.state.setStoreValue);
    }
    render() {
        return (<div className={styles['container']}>
            <Input
                onChange={(e) => {
                    this.setState({ setStoreValue: e.target.value });
                }}
                style={{ width: '400px' }}
                allowClear
            />
            <Button type='primary' onClick={() => { this.setStore() }} >改变userInfo</Button>
            <hr />
            {this.props.userInfo_store}
        </div>);
    }
}
const SetStoreC = connect(mapStateToProps, mapDispatchToProps)(SetStore);
export default SetStoreC;