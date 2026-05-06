import { Flex, Space, Table, Tag } from 'antd';
import { fetchAllUserApi } from '../../services/api.services';
import { useState } from 'react';


const UserTable = () => {
    const [dataUser, setDataUser] = useState([
        { _id: "eric", fullName: 25, email: "Hanoi" },
        { _id: "hoidanit", fullName: 25, email: "HoChiMinh" },
    ])
    const columns = [
        {
            title: 'Id',
            dataIndex: '_id',

        },
        {
            title: 'Full Name',
            dataIndex: 'fullName',

        },
        {
            title: 'Email',
            dataIndex: 'email',

        }
    ];

    const loadUser = async () => {
        console.log("before run");
        const res = await fetchAllUserApi();
        console.log("after run", res);
        // setDataUser(res.data);
    }

    loadUser();

    return (
        <Table columns={columns} dataSource={dataUser} />
    );
}
export default UserTable;