// Task: Design a "Sign Up" form with fields for username, email, and password.
// Store the input data in the component's state.


import React, {useState} from 'react';
import './Form.css'

const SignUpForm = () => {
 
    const[formData, setFormData] = useState ({
        username: '',
        email: '',
        password: '',       
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name] : value,
        });
    };
    

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Form Data : ', formData);
    }

        return (
            <form onSubmit={handleSubmit}>
                    <p>Sign Up Form</p>
                <div className='username'>
                    <label htmlFor="username">User Name :</label> &nbsp;
                    <input type="text" id='username' name='username'
                    value={FormData.username}
                    onChange={handleChange}
                    required
                    />
                </div>

                <br />

                <div className='email'>
                    <label htmlFor="email">User Email :</label> &nbsp;
                    <input type="email" id='email' name='email'
                    value={formData.email}
                    onChange={handleChange}
                    required
                    />
                </div>

                <br />
                
                <div className='password'>
                    <label htmlFor="password">Password :</label>  &nbsp;
                    <input type="password" id='password' name='password' 
                    value={formData.password}
                    onChange={handleChange}
                    required
                    />
                </div>

                <br />
                <div className='submit'>
                    <button type='submit'>Sign Up</button>
                </div>

            </form>
        );
    }

export default SignUpForm;

