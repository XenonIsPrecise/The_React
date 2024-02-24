import { useState } from "react"

export default function SignUpForm(){
    const [formData,setFormData]=useState({firstName:"",lastName:"",password:""});
    const changeData=(evt)=>{
        const changeField = evt.target.name;
        const changedValue = evt.target.value;
        setFormData((currData)=>{
            return{
            ...currData,
            [changeField]:changedValue
            }
        })
    };
    return(
        <>
        <div>
            <label htmlFor="FirstName">Enter your FirstName:</label>
            <input id="FirstName" type="text" name="firstName" value={formData.firstName} onChange={changeData}></input>
        </div>
        <div>
            <label htmlFor="LastName">Enter your LastName:</label>
            <input id="LastName" type="text" name="lastName" value={formData.lastName} onChange={changeData}></input>
        </div>
        <div>
            <label htmlFor="Password">Enter your Password:</label>
            <input id="Password" type="password" name="password" value={formData.password} onChange={changeData}></input>
        </div>
        <div>Hello: {formData.firstName+formData.lastName}</div>
    </>
    
    )
}