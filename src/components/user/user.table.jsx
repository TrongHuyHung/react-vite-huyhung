import { Flex, Space, Table, Tag } from 'antd';
import { fetchAllUserApi } from '../../services/api.services';
import { useEffect, useState } from 'react';


const UserTable = () => {
    const [dataUser, setDataUser] = useState([])

    useEffect(() => {
        console.log("run 111");
        loadUser();
    }, []);

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
        setDataUser(res.data);
    }

    return (
        <Table columns={columns} dataSource={dataUser} rowKey={"_id"} />
    );
}
export default UserTable;