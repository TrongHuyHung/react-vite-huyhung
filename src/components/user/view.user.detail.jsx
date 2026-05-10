import { Button, Drawer, notification } from "antd";
import { useState } from "react";
import { handleUploadFile, updateUserAvatarApi } from "../../services/api.services";


const ViewUserDetail = (props) => {

    const { setOpenViewDetail, openViewDetail, dataViewDetail, setDataViewDetail, loadUser } = props

    const [selectedFile, setSelectedFile] = useState(null);
    const [preview, setPreview] = useState(null);

    const handleOnChangeFile = (event) => {
        if (!event.target.files || event.target.files.length === 0) {
            setPreview(null);
            setSelectedFile(null);
            return
        }
        const file = event.target.files[0];

        if (file) {
            setSelectedFile(file);
            setPreview(URL.createObjectURL(file));
        }
        console.log(file);
    }

    const handleUpdateUserAvatar = async () => {
        const resUpload = await handleUploadFile(selectedFile, "avatar")

        if (resUpload.data) {
            const newAvatar = resUpload.data.fileUploaded;
            const resUpdateAvatar = await updateUserAvatarApi(newAvatar, dataViewDetail._id, dataViewDetail.fullName, dataViewDetail.phone);
            if (resUpdateAvatar.data) {
                setOpenViewDetail(false);
                setPreview(null);
                setSelectedFile(null);
                await loadUser();

                notification.success({
                    message: "Hoàn thành cập nhật file ảnh",
                    description: "Cập ảnh thành công"
                });
            } else {
                notification.error({
                    message: "Lỗi cập nhật file ảnh",
                    description: JSON.stringify(resUpdateAvatar.message)
                });
            }
        } else {
            notification.error({
                message: "Lỗi cập nhật file ảnh",
                description: JSON.stringify(resUpload.message)
            });
        }
    }
    return (
        <Drawer
            width={"50vw"}
            title="Basic Drawer"
            closable={{ 'aria-label': 'Close Button' }}
            onClose={() => {
                setOpenViewDetail(false)
            }
            }
            open={openViewDetail}
        >
            {dataViewDetail ?
                <>
                    <p>Id: {dataViewDetail._id}</p>
                    <p>Họ và tên: {dataViewDetail.fullName}</p>
                    <p>Email: {dataViewDetail.email}</p>
                    <p>Số điện thoại: {dataViewDetail.phone}</p>

                    <div style={{
                        margin: "10px 0",
                        height: "100px", width: "150px",
                        border: "1px solid #ccc"
                    }}>
                        <img
                            src={`${import.meta.env.VITE_BACKEND_URL}/images/avatar/${dataViewDetail.avatar}`}
                            style={{ height: "100%", width: "100%", objectFit: "contain" }}
                        />
                    </div>

                    <div>
                        <label
                            htmlFor="btnFile"
                            style={{
                                backgroundColor: "orange",
                                padding: "5px 20px",
                                cursor: "pointer",
                                borderRadius: "5px"
                            }}
                        >Choose file</label>
                        <input type="file" hidden id="btnFile" onChange={handleOnChangeFile} />
                    </div>
                    {preview &&
                        <>
                            <div style={{
                                margin: "10px 0",
                                height: "100px", width: "150px",

                            }}>
                                <img
                                    src={preview}
                                    style={{ height: "100%", width: "100%", objectFit: "contain" }}
                                />
                            </div>
                            <Button
                                type="primary"
                                onClick={() => handleUpdateUserAvatar()}>Save</Button>
                        </>
                    }
                </>
                :
                <>
                    <p>Không có dữ liệu</p>
                </>
            }
        </Drawer>
    );
}

export default ViewUserDetail;