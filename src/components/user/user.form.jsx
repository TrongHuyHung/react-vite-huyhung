import { Input, Button, notification } from "antd";
import { useState } from "react";
import { createUserApi } from "../../services/api.services";

const UserForm = () => {
    const [fullName, setFullName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [phone, setPhone] = useState("");

    const handClickBtn = async () => {
        const response = await createUserApi(fullName, email, password, phone);
        if (response.data) {
            notification.success({
                message: "create user",
                description: "tạo user thành công"
            })
        }
        console.log("check api", response.data.data)
    }

    //console.log("Check", fullName, email, password, phone);
    return (
        <div className="user-form" style={{ margin: "20px 0" }}>
            <div style={{ display: "flex", gap: "15px", flexDirection: "column" }}>
                <div>
                    <span>Full Name</span>
                    <Input
                        value={fullName}
                        onChange={(event) => { setFullName(event.target.value) }}
                    />
                </div>
                <div>
                    <span>Email</span>
                    <Input
                        value={email}
                        onChange={(event) => { setEmail(event.target.value) }}
                    />
                </div>
                <div>
                    <span>Password</span>
                    <Input.Password
                        value={password}
                        onChange={(event) => { setPassword(event.target.value) }}
                    />
                </div>
                <div>
                    <span>Phone number</span>
                    <Input
                        value={phone}
                        onChange={(event) => { setPhone(event.target.value) }}
                    />
                </div>
                <div>
                    <Button type="primary" onClick={handClickBtn}> Create User </Button>
                </div>
            </div>
        </div>
    );
}
export default UserForm;