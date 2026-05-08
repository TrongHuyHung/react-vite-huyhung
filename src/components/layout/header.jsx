// import './header.css'
import { Link, NavLink } from 'react-router-dom';
import { Menu } from 'antd';
import { AppstoreOutlined, MailOutlined, SettingOutlined } from '@ant-design/icons';
import { useState } from 'react';

const items = [
    {
        label: <Link to={"/"}>Home</Link>,
        key: 'home',
        icon: <MailOutlined />,
    },
    {
        label: <Link to={"/users"}>Users</Link>,
        key: 'user',
        icon: <AppstoreOutlined />,

    },
    {
        label: <Link to={"/books"}>Books</Link>,
        key: 'books',
        icon: <SettingOutlined />,

    }
];
const Header = () => {

    const [current, setCurrent] = useState('mail');
    const onClick = e => {
        console.log('click ', e);
        setCurrent(e.key);
    };
    return (
        <Menu onClick={onClick} selectedKeys={[current]} mode="horizontal" items={items} />
    );
}
export default Header;