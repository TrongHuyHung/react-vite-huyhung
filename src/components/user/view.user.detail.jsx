import { Drawer } from "antd";
import { useState } from "react";

const ViewUserDetail = (props) => {

    const { setOpenViewDetail, openViewDetail, dataViewDetail, setDataViewDetail } = props
    const showDrawer = () => {
        setOpen(true);
    };
    const onClose = () => {
        setOpen(false);
    };

    return (
        <Drawer
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