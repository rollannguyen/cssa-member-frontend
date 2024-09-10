import { useState } from 'react'
import axios from 'axios'
import { toast } from 'react-hot-toast'
import { useNavigate } from 'react-router-dom'
import cssaLogo from '../../src/assets/cssa_logo.svg'

export default function Register() {

    const navigate = useNavigate()
    const [data, setData] = useState({
        name: '',
        email: '',
        password: '',
    })

    // post request
    
    const registerUser = async (e) => {
        e.preventDefault();
        const {name, email, password} = data
        try {
            const {data} = await axios.post('/register', {
                name, email, password
            })
            if (data.error) {
                toast.error(data.error)
            } else {
                setData({})
                toast.success('account created. please login!!')
                navigate('/login')
            }

        } catch (error) {
            console.log(error)
        }
    }

    return (
        <div>
            <form onSubmit={registerUser}>
                <a href="https://cssa-ucsd.org">
                    <img src={cssaLogo} className="logo" alt="CSSA Logo" />
                </a>
                <h1>Membership Registration</h1>
                <div className="form-group">
                    <label>Name</label>
                    <input type='text' placeholder='please enter your name.' value={data.name} onChange={(e) => setData({...data, name: e.target.value})} />
                </div>
                <div className="form-group">
                <label>UCSD Email</label>
                <input type='email' placeholder='please enter your ucsd email.' value={data.email} onChange={(e) => setData({...data, email: e.target.value})} />
                </div>
                <div className="form-group">
                <label>CSSA Password</label>
                <input type='password' placeholder='please enter a password.' value={data.password} onChange={(e) => setData({...data, password: e.target.value})} />
                </div>
                <button type='submit'>Submit</button>
                <div></div>
                <a href="/login">Already have an account? Login here!</a>
            </form>
        </div>
    )
}