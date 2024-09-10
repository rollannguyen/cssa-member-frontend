import { useContext } from 'react'
import { UserContext } from '../../context/userContext'

export default function Dashboard() {
    const {user} = useContext(UserContext)

    return (
        <div>
            <h1>Profile and Dashboard</h1>
            <div className="form-group">
            {!!user && (<h2>hello, {user.name}!</h2>)}
            {!!user && (<h2>you currently have zero points!</h2>)}
            </div>
            <div className="form-group">
                <label>Event Code</label>
                <input type='text' placeholder='event code' />
            </div>
            <a href="/login">Sign Out</a>
        </div>
        
    )
}