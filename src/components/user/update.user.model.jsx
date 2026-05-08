import { Input, Button, notification, Modal } from "antd";
import { useEffect, useState } from "react";
import { updateUserApi } from "../../services/api.services";


const UpdateUserModel = (props) => {
    const [_id, setId] = useState("");
    const [fullName, setFullName] = useState("");
    const [phone, setPhone] = useState("");

    const { isModalUpdateOpen, setIsModalUpdateOpen, dataUpdate, setDataUpdate, loadUser } = props;

    useEffect(() => {
        if (dataUpdate) {
            setId(dataUpdate._id);
            setFullName(dataUpdate.fullName);
            setPhone(dataUpdate.phone);
        }

    }, [dataUpdate]);

    const handSubmitBtn = async () => {

        const response = await updateUserApi(_id, fullName, phone);
        if (response.data) {
            notification.success({
                message: "update user",
                description: "cập nhật thành công"
            })
            resetAndCloseModal();
            await loadUser();
        } else {
            notification.error({
                message: "error create user",
                description: JSON.stringify(response.message)
            })
        }

    }

    const resetAndCloseModal = () => {
        setFullName("");
        setId("");
        setPhone("");
        setIsModalUpdateOpen(false);
        setDataUpdate(null);
    }
    return (
        <Modal
            title="Update User"
            closable={{ 'aria-label': 'Custom Close Button' }}
            open={isModalUpdateOpen}
            onOk={() => handSubmitBtn()}
            onCancel={resetAndCloseModal}
            maskClosable={false}
            okText={"SAVE"}
        >
            <div style={{ display: "flex", gap: "15px", flexDirection: "column" }}>
                <div>
                    <span>Id</span>
                    <Input
                        value={_id}
                        disabled
                    />
                </div>
                <div>
                    <span>Full Name</span>
                    <Input
                        value={fullName}
                        onChange={(event) => { setFullName(event.target.value) }}
                    />
                </div>
                <div>
                    <span>Phone number</span>
                    <Input
                        value={phone}
                        onChange={(event) => { setPhone(event.target.value) }}
                    />
                </div>

            </div>
        </Modal>
    );
}

export default UpdateUserModel