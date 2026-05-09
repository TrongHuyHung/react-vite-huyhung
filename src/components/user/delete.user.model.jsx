import { notification, Popconfirm } from "antd";
import { useEffect, useState } from "react";
import { deleteUserApi } from "../../services/api.services";


const DeleteUserModel = (props) => {
    const { openViewDelete, setOpenViewDelete, dataViewDelete, setDataViewDelete, loadUser } = props;
    const [_id, setId] = useState("");


    useEffect(() => {
        if (dataViewDelete) {
            setId(dataViewDelete._id);
        }

    }, [dataViewDelete]);

    const handSubmitDeleteBtn = async () => {
        const response = await deleteUserApi(_id);
        if (response.data) {
            notification.success({
                message: "delete user",
                description: "xóa thành công"
            })
            resetAndCloseModal();
            await loadUser();
        } else {
            notification.error({
                message: "error delete user",
                description: JSON.stringify(response.message)
            })
        }
    }

    const resetAndCloseModal = () => {
        setId("");
        setDataViewDelete(null);
        setOpenViewDelete(false);
    }
    return (
        <Popconfirm
            title="Xóa tài khoản"
            description="Bạn có chắc chắn muốn xóa tài khoản?"
            placement="topLeft"
            open={openViewDelete}
            onConfirm={() => handSubmitDeleteBtn()}
            onCancel={() => resetAndCloseModal()}
            okText="Yes"
            cancelText="No"
        ></Popconfirm>
    );
}

export default DeleteUserModel;