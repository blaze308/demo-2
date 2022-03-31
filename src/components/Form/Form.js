import React, { useEffect, useState } from 'react'
import styles from "./form.module.css"
import { useNavigate } from 'react-router-dom'

const Form = () => {
  const [redirect, setREdirect] = useState(false)
  const navigate = useNavigate()
  
    const [data, setData] = useState({
        firstName: "",
        lastName: "",
        gender: "",
      })
    
      const handleChange = e =>{
        const name = e.target.name
        const value = e.target.value
        setData({...data, [name] : value})
      }
    
      const handleSubmit = e => {
        e.preventDefault()
    
        if (data.firstName === "" || data.lastName === "" || data.gender === ""){
          alert("please enter all details")
        }
        else{

          navigate("/service")
                }
       
      }

      console.log(data);

  return (
    <>
    <form onSubmit={handleSubmit} className={styles.form} action="">
      <div className={styles.form__group}>
        <label htmlFor="" className={styles.form__label}>
          First Name
        </label>
        <input type="text" onChange={handleChange} name="firstName" className={styles.form__input}/>
      </div>
      <div className={styles.form__group}>
        <label htmlFor="" className={styles.form__label}>
          Last Name
        </label>
        <input type="text"  onChange={handleChange} name="lastName" className={styles.form__input}/>
      </div>
      <div className={styles.form__group}>
        <label htmlFor="" className={styles.form__label}>
          Gender
        </label>
        <select name="gender"  onChange={handleChange} id="">
          <option value="">---Select Gender---</option>
          <option value="male">Male</option>
          <option value="female">Female</option>
        </select>
      </div>
      <button className={styles.form__button}  type="submit">Login</button>
    </form>
    </>
  )
}

export default Form