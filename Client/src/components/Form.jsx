import { useState } from "react";
import validation from "./validation";

const Form = ({ login }) => {
   const [errors, setErrors] = useState({});
   const [userData, setUserData] = useState({
    email: '',
    password: ''
   })

   const handleChange = (event) =>{
    setUserData({
        ...userData,
        [event.target.name]: event.target.value 
    })

    setErrors(validation({
        ...userData,
        [event.target.name]: event.target.value 
    }))
   }

   const handleSumbit = (event) =>{
    event.preventDefault()
    login(userData)
   }

    return (
        <form onSubmit={handleSumbit}>
            <label htmlFor="email">Email: </label>
            <input type="email" name="email" onChange={handleChange} value={userData.email}></input>
            {errors.email && <p>{errors.email}</p>}
            <hr/>
            <label htmlFor="password">Password: </label>
            <input type="password" name="password" onChange={handleChange} value={userData.password}></input>
            {errors.password && <p>{errors.password}</p>}
            <hr/>
            <button>Submit</button>
        </form>
    )
}

export default Form;