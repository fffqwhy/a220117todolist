import React from 'react';
import classNames from 'classnames';
import { Link } from 'react-router-dom';
import { Layout } from 'antd';
import { Menu } from 'antd';
import { MailOutlined, AppstoreOutlined, SettingOutlined } from '@ant-design/icons';
import type { MenuProps } from 'antd';
import HomeRouter from '../../routes/home';
import '../../scss/home/index.scss';

const { Header, Footer, Sider, Content } = Layout;

interface Props { }
interface State { }

class Home extends React.Component<Props, State> {
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
        label: (<Link to='/home/2452' >2452</Link>),
        key: 'home/2452',
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

export default Home;