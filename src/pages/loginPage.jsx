import React from 'react'
import { useState } from 'react'
import axios from 'axios'
import { Link, useNavigate } from 'react-router-dom'

const FormPage = () => {
    const [form, setForm] = useState({ email: "", password: "" })
    const [loading, setLoading] = useState(false)
    const handleChange = (e) => {
        setForm({ ...form, [e.target.name]: e.target.value })
    }

    const navigate = useNavigate()

    const handleSubmit = async (e) => {
        
        try {
        
            setLoading(true)

            const response = await axios.post("http://localhost:3000/api/login", form)
            console.log(response.data)
           
            if (response.status == 200) {
                alert("Login successfully!")
                navigate("/dashboard")
            }


        } catch (error) {
            console.log(error.response?.data || error.message)
            alert("Login failed")

        } finally {
            setLoading(false)
        }
    }

    return (
        <>
            <div className='min-h-screen bg-gray-100 flex items-center justify-center px4' >
                <div className='bg-white shadow-lg rounded-2xl p-8 w-full max-w-md'>
                    <h1 className='text-2xl font-bold text-center text-gray-800 mb-6'>Login Form</h1>


                    <form className='space-y-5' action={handleSubmit}>

                        <div>
                            <label htmlFor="name" className='block text-sm font-medium text-gray-600 mb-1'>Email</label>
                            <input type="text" placeholder='Enter email' name="email" id="" onChange={handleChange} value={form.email} className='
            w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-blue-900 transition' />
                        </div>

                        <div>
                            <label htmlFor="name" className='block text-sm font-medium text-gray-600 mb-1'>Password</label>
                            <input type="text" name="password" onChange={handleChange} placeholder='Enter password' value={form.password} id="" className='
            w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-blue-900 transition' />
                        </div>



                        <button type='submit' disabled={loading} className='w-full bg-blue-600 text-white py-2 rounded-lg font-semibold hover:bg-blue-700 transition duration-300'>{loading ? "Processing" : "Login"}</button>
                        <p>Do not have account? <Link className='text-blue-700 underline' to='/register'>Register</Link> </p>

                    </form>




                </div>
            </div>


        </>
    )
}

export default FormPage