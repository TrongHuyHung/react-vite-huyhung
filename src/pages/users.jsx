import UserForm from "../components/user/user.form";
import UserTable from "../components/user/user.table";
import { fetchAllUserApi } from '../services/api.services';
import { useEffect, useState } from 'react';



const UsersPage = () => {
    const [dataUser, setDataUser] = useState([])

    useEffect(() => {
        loadUser();
    }, []);

    const loadUser = async () => {
        const res = await fetchAllUserApi();
        setDataUser(res.data);
    }

    return (
        <div style={{ padding: "20px" }}>
            <UserForm loadUser={loadUser} />
            <UserTable
                dataUser={dataUser}
                loadUser={loadUser}
            />
        </div>
    )
}

export default UsersPage;