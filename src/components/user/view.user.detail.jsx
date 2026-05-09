import { Drawer } from "antd";


const ViewUserDetail = (props) => {

    const { setOpenViewDetail, openViewDetail, dataViewDetail, setDataViewDetail } = props


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

                    <div>
                        <img height={300} width={250} src={`${import.meta.env.VITE_BACKEND_URL}/images/avatar/${dataViewDetail.avatar}`} />
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
                        <input type="file" hidden id="btnFile" />
                    </div>

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