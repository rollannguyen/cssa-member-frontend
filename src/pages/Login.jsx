import { useState } from 'react'
import axios from 'axios'
import {toast} from 'react-hot-toast'
import { useNavigate } from 'react-router-dom'
import cssaLogo from '../../src/assets/cssa_logo.svg'

export default function Login() {

    const navigate = useNavigate()

    const [data, setData] = useState({
        email: '',
        password: '',
    })

    const loginUser = async (e) => {
        e.preventDefault()
        const {email, password} = data
        try {
            const {data} = await axios.post('/login', {
                email, password
            })
            if (data.error) {
                toast.error(data.error)
            } else {
                setData({})
                navigate('/dashboard')
            }
        } catch (error) {
            
        }
    }
    
    return (
        <div>
            <form onSubmit={loginUser}> 
                <a href="https://cssa-ucsd.org">
                    <img src={cssaLogo} className="logo" alt="CSSA Logo" />
                </a>
                <h1>CSSA General Membership</h1>
                <div className="form-group">
                    <label>UCSD Email</label>
                    <input type='email' placeholder='cssa@ucsd.edu' value={data.email} onChange={(e) => setData({...data, email: e.target.value})} />
                </div>
                <div className="form-group">
                <label>Password</label>
                <input type='password' placeholder='I<3c0gSci!' value={data.password} onChange={(e) => setData({...data, password: e.target.value})} />
                </div>
                <button type='sumbit'>Login</button>
                <div></div>
                <a href="/register">First time? Enroll as a member!</a>
            </form>
        </div>
    )
}