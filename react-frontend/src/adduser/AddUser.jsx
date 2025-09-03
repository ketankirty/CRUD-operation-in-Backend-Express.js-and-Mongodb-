import axios from 'axios';
import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const AddUser = () => {
    const initialUser = {
        name: "",
        email: "",
        Address: "",
    };

    const [user, setUser] = useState(initialUser);
    const navigate = useNavigate();

    // Handle input changes
    const inputHandler = (e) => {
        const { name, value } = e.target;
        setUser({ ...user, [name]: value });
    };

    // Submit form
    const submitForm = async (e) => {
        e.preventDefault();
        console.log("Sending user data:", user);

        try {
            await axios.post("http://localhost:8000/api/user", user);
            toast.success("User created successfully!", { position: "top-right" });
            setTimeout(() => navigate("/"), 1500); // Navigate after toast
        } catch (error) {
            console.error(error);
            toast.error("Failed to create user. Please try again.", { position: "top-right" });
        }
    };

    return (
        <div>
            <Link to='/' type="button" className="btn btn-secondary m-3">
                <i className="fa-solid fa-backward"></i> Back
            </Link>

            <div className='addUser flex justify-center items-center flex-col mt-5 gap-3'>
                <span
                    className='text-3xl font-bold'
                    style={{ textShadow: '1px 1px 2px rgba(0,0,0,0.7)' }}
                >
                    Add New User
                </span>

                <form
                    onSubmit={submitForm}
                    className='addUserForm bg-red-200 m-3 p-4 rounded-3xl shadow-lg'
                >
                    <div className='inputGroup'>
                        <label htmlFor="name" className='text-xl'>Name:</label>
                        <input
                            type="text"
                            onChange={inputHandler}
                            id='name'
                            name='name'
                            value={user.name}
                            className='bg-amber-100 m-2 p-2 rounded-2xl'
                            placeholder='Enter your name'
                            required
                        />
                    </div>

                    <div className='inputGroup'>
                        <label htmlFor="email" className='text-xl'>Email:</label>
                        <input
                            type="email"
                            onChange={inputHandler}
                            id='email'
                            name='email'
                            value={user.email}
                            className='bg-amber-100 m-2 p-2 rounded-2xl'
                            placeholder='Enter your email'
                            required
                        />
                    </div>

                    <div className='inputGroup'>
                        <label htmlFor="Address" className='text-xl'>Address:</label>
                        <input
                            type="text"
                            onChange={inputHandler}
                            id='Address'
                            name='Address'
                            value={user.Address}
                            className='bg-amber-100 m-2 p-2 rounded-2xl'
                            placeholder='Enter your Address'
                            required
                        />
                    </div>

                    <div className='inputGroup flex justify-center'>
                        <button type="submit" className="btn btn-primary">
                            Submit
                        </button>
                    </div>
                </form>
            </div>

            {/* Toast notifications */}
            <ToastContainer />
        </div>
    );
};

export default AddUser;
