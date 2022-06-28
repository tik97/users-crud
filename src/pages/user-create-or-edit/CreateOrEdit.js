import React, {useEffect, useMemo, useState} from "react";
import {useParams, useLocation, Link} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {createUser, getSingleUser, removeUser} from "../../redux/actions/users";
import './style.scss';

const CreateOrEdit = () => {

    const { id } = useParams();
    const { pathname } = useLocation();
    const dispatch = useDispatch();
    const user = useSelector(state => state.users.user);
    const errors = useSelector(state => state.users.errors);
    console.log(user)
    useEffect(() => {
        if (id) {
            dispatch(getSingleUser(id))
        }
    }, [])

    const [form, setForm] = useState({
        first_name: '',
        last_name: '',
        birth_date: '',
        gender: '',
        job: '',
        biography: '',
        is_active: false
    })

    useEffect(() => {
        if (user) {
            setForm({
                first_name: user ? user.first_name : '',
                last_name: user ? user.last_name : '',
                birth_date: user ? user.birth_date : '',
                gender: user ? user.gender : '',
                job: user ? user.job : '',
                biography: user ? user.biography : '',
                is_active: user ? user.is_active : false
            })
        }
    }, [user])

    const handleOnchange = e => {
        if (e.target.type === 'checkbox') {
            setForm({
                ...form,
                [e.target.name]: e.target.checked
            })
        } else {
            setForm({
                ...form,
                [e.target.name]: e.target.value
            })
        }
    }

    const create = e => {
        e.preventDefault()
        dispatch(createUser(form))
        if (!id) {
            setForm({
                first_name: '',
                last_name: '',
                birth_date: '',
                gender: '',
                job: '',
                biography: '',
                is_active: false
            })
        } else {
            alert('User edited!')
        }
    }

    return (
        <div className="create-or-edit-wrapper">
            <form onSubmit={create} className="create-wrapper">
                <div>
                    <div className="user-data">
                        <div className="name">First name</div>
                        <div className="value">
                            <input
                                type="text"
                                required
                                name="first_name"
                                placeholder="First name"
                                onChange={handleOnchange}
                                value={form.first_name}
                            />
                        </div>
                    </div>
                    <div className="error">{errors ? errors.first_name.toString() : ''}</div>
                </div>
                <div>
                    <div className="user-data">
                        <div className="name">Last name</div>
                        <div className="value">
                            <input
                                type="text"
                                required
                                name="last_name"
                                placeholder="Last name"
                                onChange={handleOnchange}
                                value={form.last_name}
                            />
                        </div>
                    </div>
                    <div className="error">{errors ? errors.last_name.toString() : ''}</div>
                </div>
                <div>
                    <div className="user-data">
                        <div className="name">Birth date</div>
                        <div className="value">
                            <input
                                type="date"
                                required
                                name="birth_date"
                                onChange={handleOnchange}
                                value={form.birth_date}
                            />
                        </div>
                    </div>
                    <div className="error">{errors ? errors.birth_date.toString() : ''}</div>
                </div>
                <div>
                    <div className="user-data">
                        <div className="name">Gender</div>
                        <div className="value">
                            <select
                                name="gender"
                                required
                                value={form.gender}
                                onChange={handleOnchange}
                            >
                                <option value="" disabled>Select gender</option>
                                <option value="male">Male</option>
                                <option value="female">Female</option>
                            </select>
                        </div>
                    </div>
                    <div className="error">{errors ? errors.gender.toString() : ''}</div>
                </div>
                <div>
                    <div className="user-data">
                        <div className="name">Job name</div>
                        <div className="value">
                            <input
                                type="text"
                                name="job"
                                required
                                placeholder="Job name"
                                onChange={handleOnchange}
                                value={form.job}
                            />
                        </div>
                    </div>
                    <div className="error">{errors ? errors.job.toString() : ''}</div>
                </div>
                <div>
                    <div className="user-data">
                        <div className="name">Biography</div>
                        <div className="value">
                        <textarea
                            name="biography"
                            required
                            onChange={handleOnchange}
                            value={form.biography}
                        >{}</textarea>
                        </div>
                    </div>
                    <div className="error">{errors ? errors.biography.toString() : ''}</div>
                </div>
                <div className="user-data">
                    <div className="name">Is active</div>
                    <div>
                        <input
                            type="checkbox"
                            name="is_active"
                            onChange={handleOnchange}
                            value={form.is_active}
                        />
                    </div>

                </div>
                <button type="submit" className="create-btn">{id ? 'Edit' : 'Create'}</button>
            </form>
            {id ? <Link to="/" onClick={() => dispatch(removeUser(id))} className="delete-btn">Delete User</Link> : ''}
        </div>
    )
}

export default CreateOrEdit;
