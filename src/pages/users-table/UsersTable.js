import React, {useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {getUsers, removeUser, removeUserData} from "../../redux/actions/users";
import {Link} from "react-router-dom";
import './style.scss';

const UsersTable = () => {
    const dispatch = useDispatch();
    const users = useSelector(state => state.users.users);

    useEffect(() => {
        dispatch(getUsers())
        dispatch(removeUserData())
    }, []);

    const remove = (id, index) => {
        dispatch(removeUser(id, index))
    }
    return (
        <div className="users-table-wrapper">
            {users ? <div>
                <Link to="/create" className="create-btn">Create User</Link>
                <table>
                    <thead>
                    <tr>
                        <th>First name</th>
                        <th>Last name</th>
                        <th>Birth day</th>
                        <th>Gender</th>
                        <th>Actions</th>
                    </tr>
                    </thead>
                    {users.map((user, index) => (
                        <tbody key={user.id}>
                        <tr>
                            <td><Link to={`/user/${user.id}`}>{user.first_name}</Link></td>
                            <td>{user.last_name}</td>
                            <td>{user.birth_date}</td>
                            <td>{user.gender}</td>
                            <td className="actions">
                                <Link to={`/edit/${user.id}`} className="edit">Edit</Link>
                                <button onClick={() => remove(user.id, index)} className="remove">Remove</button>
                            </td>
                        </tr>
                        </tbody>
                    ))}
                </table>
            </div> : 'There is no users'}

        </div>
    )
}

export default UsersTable;
