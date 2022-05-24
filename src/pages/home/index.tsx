import React from 'react';
import classNames from 'classnames';
import { Link } from 'react-router-dom';
import { Layout } from 'antd';
import { Menu } from 'antd';
import {connect} from 'react-redux';
import { MailOutlined, AppstoreOutlined, SettingOutlined } from '@ant-design/icons';
import type { MenuProps } from 'antd';
import HomeRouter from '../../routes/home';
import '../../scss/home/index.scss';
import { mapDispatchToProps, mapStateToProps } from '../../redux/connectFunctions/userInfo';

const { Header, Footer, Sider, Content } = Layout;

interface Props { }
interface State { }

class Home extends React.Component<Props, State> {
  constructor(props:Props){
    super(props);
  }
  componentDidMount(){
    console.log(this.props);
  }
  render() {
    const items: MenuProps['items'] = [
      {
        label: '邮箱',
        key: 'one',
        icon: <MailOutlined />,
      },
      {
        label: (
          <Link to='/login' >login</Link>
        ),
        key: 'two',
      },
    ];
    const siderMenuItems: MenuProps['items'] = [
      {
        label: (<Link to='/home' >home</Link>),
        key: 'home',
      },
      {
        label: (<Link to='/home/setstore' >setStore</Link>),
        key: 'home/setstore',
      },
    ];
    return (
      <Layout className={classNames({ content: true })}>
        <Header className={classNames({ homeHeader: true })}>
          <div>
            脚手架
          </div>
          <Menu
            mode="horizontal"
            items={items}
            className='headerMenu'
            theme='dark' />
        </Header>
        <Layout className='layoutSecond'>
          <Sider className='homeSider'>
            <Menu
              mode="vertical"
              items={siderMenuItems}
              className='siderMenu'
              theme='dark'
            />
          </Sider>
          <Content>
            <HomeRouter />
          </Content>
        </Layout>
      </Layout>
    );
  }
}
const HomeC = connect(mapStateToProps,mapDispatchToProps)(Home);
export default HomeC;