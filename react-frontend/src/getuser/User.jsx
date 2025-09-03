import React, { useState, useEffect } from 'react'
import "./user.css";
import axios from "axios"
import { Link } from 'react-router-dom';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import { DotLottieReact } from '@lottiefiles/dotlottie-react';


const User = () => {

    const [users, setUsers] = useState([])

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get("http://localhost:8000/api/users");
                setUsers(response.data)

            } catch (error) {
                console.log("Error while fetching the data.", error);


            }
        }
        fetchData();

    }, []);

    const deleteUser = async (userId) => {
        await axios.delete(`http://localhost:8000/api/delete/user/${userId}`)


            .then((response) => {
                setUsers((prevUser) => prevUser.filter((user) => user._id !== userId))
                toast.success(response.data.message || "User deleted successfully!", { position: "top-right" });

            })

            .catch((error) => {
                console.log(error);
                toast.error("Failed to delete user");

            });


    }



    return (
        <div className="userTable  ">
            <Link to='/add' type="button" className="btn btn-primary">Add User
                <i className="fa-sharp fa-solid fa-user-plus"></i>
            </Link>

            {users.length === 0 ? (
                <div className='my-4 p-2  text-center'>
                    <h3>No data available to display. </h3>
                    <p className='text-xl font-semibold'>Please add User.</p>
                    <span className=''><i className="fa-solid fa-arrow-right m-2 p-1"></i>
                        <Link to='/add' type="button" className="btn btn-primary">
                            <i className="fa-sharp fa-solid fa-user-plus text-2xl"></i>
                        </Link>
                    </span>

                </div>
            ) : (<table className='table table-bordered'>

                <thead>
                    <tr>
                        <th scope='col'>S.No</th>
                        <th scope='col'>Name</th>
                        <th scope='col'>Email</th>
                        <th scope='col'>Address</th>
                        <th scope='col'>Action</th>

                    </tr>
                </thead>

                <tbody>

                    {users.map((user, index) => {
                        return <tr key={user._id || user.id || index}>
                            <td>{index + 1}</td>
                            <td className='capitalize'>{user.name}</td>
                            <td>{user.email}</td>
                            <td className='capitalize'>{user.Address}</td>
                            <td className='actionbtn'>

                                <Link
                                    to={`/update/` + user._id}
                                    type="button"
                                    className="btn btn-info"
                                >
                                    <i className="fa-solid fa-pen-to-square"></i>
                                </Link>

                                <button onClick={() => { deleteUser(user._id) }} type="button" className="btn btn-danger">
                                    <i className="fa-solid fa-trash-arrow-up"></i>
                                </button>

                            </td>

                        </tr>
                    })}

                </tbody>

            </table>)}


            <ToastContainer />
        </div>
    )
}

export default User