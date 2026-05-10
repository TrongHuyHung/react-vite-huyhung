import { DeleteOutlined, EditOutlined } from '@ant-design/icons';
import { Button, Flex, Space, Table, Tag } from 'antd';
import UpdateUserModel from './update.user.model';
import { useState } from 'react';
import ViewUserDetail from './view.user.detail';
import DeleteUserModel from './delete.user.model';


const UserTable = (props) => {
    const { dataUser, loadUser } = props;

    const [isModalUpdateOpen, setIsModalUpdateOpen] = useState(false);
    const [dataUpdate, setDataUpdate] = useState({});

    const [openViewDetail, setOpenViewDetail] = useState(false);
    const [dataViewDetail, setDataViewDetail] = useState({});

    const [openViewDelete, setOpenViewDelete] = useState(false);
    const [dataViewDelete, setDataViewDelete] = useState({});

    const columns = [
        {
            title: "STT",
            render: (_, record, index) => (
                <>
                    <div>{index + 1}</div>
                </>
            )
        },
        {
            title: 'Id',
            dataIndex: '_id',
            render: (_, record) => {
                return (
                    <a
                        href="#"
                        onClick={() => {
                            setDataViewDetail(record)
                            setOpenViewDetail(true)
                        }
                        }
                    >{record._id}</a>
                )
            },

        },
        {
            title: 'Full Name',
            dataIndex: 'fullName',

        },
        {
            title: 'Email',
            dataIndex: 'email',

        },
        {
            title: 'Action',
            key: 'action',
            render: (_, record) => (
                <div style={{ display: "flex", gap: "20px" }}>
                    <EditOutlined
                        style={{ cursor: "pointer", color: "orange" }}
                        onClick={() => {
                            setDataUpdate(record);
                            setIsModalUpdateOpen(true);
                        }}
                    />
                    <DeleteOutlined
                        style={{ cursor: "pointer", color: "red" }}
                        onClick={() => {
                            setDataViewDelete(record);
                            setOpenViewDelete(true)
                        }}
                    />
                </div>
            ),
        }
    ];



    return (
        <>
            <Table columns={columns} dataSource={dataUser} rowKey={"_id"} />
            <UpdateUserModel
                isModalUpdateOpen={isModalUpdateOpen}
                setIsModalUpdateOpen={setIsModalUpdateOpen}
                dataUpdate={dataUpdate}
                setDataUpdate={setDataUpdate}
                loadUser={loadUser}
            />

            <ViewUserDetail
                setOpenViewDetail={setOpenViewDetail}
                openViewDetail={openViewDetail}
                dataViewDetail={dataViewDetail}
                setDataViewDetail={setDataViewDetail}
                loadUser={loadUser}
            />

            <DeleteUserModel
                openViewDelete={openViewDelete}
                setOpenViewDelete={setOpenViewDelete}
                dataViewDelete={dataViewDelete}
                setDataViewDelete={setDataViewDelete}
                loadUser={loadUser}
            />

        </>
    );
}
export default UserTable;