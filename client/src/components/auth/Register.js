
import React, {useState, useContext} from 'react'
import AuthContext from '../../context/auth/authContext';

const Register = () => {

const authContext = useContext(AuthContext);
const { register } = authContext;

    const [user, setUser] = useState({
        name: '',
        email: "",
        password: '',
        password2: ''
    })

    const { name, email, password, password2 } = user;

    const onChange = (e) => {
        setUser( {...user, [e.target.name]: e.target.value
        })
    }

    const onSubmit = (e) => {
        e.preventDefault();
       register({
           name,
           email,
           password
       })

    }

    return (
        <div className=" form-container">
            <h1>
                Account <span className="text-primary">Register</span>
            
            </h1>
            <form onSubmit={onSubmit}>
                <div className="form-group">
                    <label htmlFor="name">Name</label>
                    <input name="name" type="text" value={name} onChange={onChange}  required/>
                </div>
                <div className="form-group">
                    <label htmlFor="email">Email</label>
                    <input name="email" type="email" value={email} onChange={onChange} required/>
                </div> <div className="form-group">
                    <label htmlFor="password">Password</label>
                    <input name="password" type="password" value={password} onChange={onChange} minLength="6" required/>
                </div> <div className="form-group">
                    <label htmlFor="password2">Confirm Password</label>
                    <input name="password2" type="password" value={password2} onChange={onChange} minLength="6" required/>
                </div>
                <input type="submit" value="Register" className="btn btn-primary btn-block"/>
            </form>
            
        </div>
    )
}

export default Register
