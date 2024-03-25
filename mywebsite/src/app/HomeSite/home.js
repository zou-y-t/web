import React , { useState } from 'react';
import { AppstoreOutlined, MailOutlined, SettingOutlined, UserOutlined, CustomerServiceOutlined} from '@ant-design/icons';
import { Menu } from 'antd';
import {Link,Outlet} from "react-router-dom";

//导航栏
const items = [
  {
    label: (<Link to="/user">UserSite</Link>),
    key: 'user',
    icon: <UserOutlined />,
  },
  {
    label: (<Link to="/contest">ContestSite</Link>),
    key: 'app',
    icon: <CustomerServiceOutlined />,
  },
  {
    label: 'Contact Us',
    key: 'mail',
    icon: <MailOutlined />,
  },
  {
    label: 'Navigation Two',
    key: 'app',
    icon: <AppstoreOutlined />,
    disabled: true,
  },
  {
    label: 'Settings',
    key: 'settings',
    icon: <SettingOutlined />,
    children: [
      {
        type: 'group',
        label: 'Item 1',
        children: [
          {
            label: 'Option 1',
            key: 'setting:1',
          },
          {
            label: 'Option 2',
            key: 'setting:2',
          },
        ],
      },
      {
        type: 'group',
        label: 'Item 2',
        children: [
          {
            label: 'Option 3',
            key: 'setting:3',
          },
          {
            label: 'Option 4',
            key: 'setting:4',
          },
        ],
      },
    ],
  }
];


function Home() {
  const [current, setCurrent] = useState('mail');
  const onClick = (e) => {
    console.log('click ', e);
    setCurrent(e.key);
  };
  return (
    <div>

      <Menu onClick={onClick} selectedKeys={[current]} mode="horizontal" items={items} />

      <Outlet/>
    </div>
  );
}

export default Home;