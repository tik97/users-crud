import React, {useEffect} from "react";
import {Link, useParams} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {getSingleUser} from "../../redux/actions/users";
import './style.scss';

const SingleUser = () => {
    const { id } = useParams();
    const dispatch = useDispatch()
    const user = useSelector(state => state.users.user)

    useEffect(() => {
        dispatch(getSingleUser(id))
    }, [])

    return (
        <div className="single-user-wrapper">
            {user ? <div>
                <div className="user-data">
                    <div className="name">Full name</div>
                    <div className="value">{user.first_name} {user.last_name}</div>
                </div>
                <div className="user-data">
                    <div className="name">Birth date</div>
                    <div className="value">{user.birth_date}</div>
                </div>
                <div className="user-data">
                    <div className="name">Gender</div>
                    <div className="value">{user.gender}</div>
                </div>
                <div className="user-data">
                    <div className="name">Job name</div>
                    <div className="value">{user.job}</div>
                </div>
                <div className="user-data">
                    <div className="name">Biography</div>
                    <div className="value">{user.biography}</div>
                </div>
                <div className="user-data">
                    <div className="name">Is active</div>
                    <div className="value">{user.is_active ? 'Active' : 'Inactive'}</div>
                </div>
                <div className="actions">
                    <Link to={`/edit/${user.id}`} className="edit">Edit</Link>
                    <button className="remove">Remove</button>
                </div>
            </div> : 'No User data'}
        </div>
    )
}

export default SingleUser;
