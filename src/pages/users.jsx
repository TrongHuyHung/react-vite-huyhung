import UserForm from "../components/user/user.form";
import UserTable from "../components/user/user.table";
import { fetchAllUserApi } from '../services/api.services';
import { useEffect, useState } from 'react';



const UsersPage = () => {
    const [dataUser, setDataUser] = useState([])

    useEffect(() => {
        console.log("run 111");
        loadUser();
    }, []);

    const loadUser = async () => {
        const res = await fetchAllUserApi();
        setDataUser(res.data);
    }


    return (
        <div style={{ padding: "20px" }}>
            <UserForm loadUser={loadUser} />
            <UserTable dataUser={dataUser} />
        </div>
    )
}

export default UsersPage;