import { useRef, useState } from "react";
import axios from "axios";

const RegisterEmployee = ()=>{

    const ref1 = useRef(null);
    const ref2 = useRef(null);
    const ref3 = useRef(null);
    const ref4 = useRef(null);

    const [employmentCodeError,setEmploymentCodeError] = useState("");
    const [passwordError,setPasswordError] = useState("");
    const [gmailError,setGmailError] = useState("");
    const [confirmPasswordError,setConfirmPasswordError] = useState("");

    const register = async(event)=>{
        event.preventDefault();

        const employmentCodeErrors = ref1.current.value.trim();
        const gmailErrors = ref2.current.value.trim();
        const passwordErrors = ref2.current.value.trim();
        const confirmPasswordError = ref1.current.value.trim();

        if(employmentCodeErrors === ""){
            setEmploymentCodeError("EmploymentCode Can't be Empty");
        };
        if(gmailErrors === ""){
            setGmailError("Gmail Can't be Empty");
        };
        if(passwordErrors === ""){
            setPasswordError("Password Can't be Empty")
        };
        if(confirmPasswordError === ""){
            setConfirmPasswordError("Confirm Password Can't be Empty")
            return;
        };

        
            try {
                if(ref3.current.value === ref4.current.value){
                    const {data} = await axios.post("http://localhost:2424/admin/register",{"employmentCode" : ref1.current.value,
                                                                                            "companyMail" : ref2.current.value,
                                                                                            "password" : ref3.current.value,
                                                                                            "role" : "ROLE_EMPLOYEE"},
                                                    {
                                                        headers : {
                                                            "Authorization" : `Bearer ${localStorage.getItem(`token`)}`
                                                        }
                                                    });
                    const {status} = data;
                    if(status === "success"){
                        alert("Employee Registration Success");
                    }else{
                        alert("Employee Registration Failed!");
                    }
                }else{
                    alert("Password & Confirm Password must be same!");
                }
            } catch (error) {
                alert("EmploymentCode/CompantMail already Exists !");
            }
    }

//Onchange Handling Event(EmploymentCode)
    const employmentCodeHandle = ()=>{
        setEmploymentCodeError("");
    }
//Onchange Handling Event(Gmail)
    const gmailHandle = ()=>{
        setGmailError("");
    }
//Onchange Handling Event(Password)
    const passwordHandle = ()=>{
        setPasswordError("");
    }
//Onchange Handling Event(Confirm Password)
    const confirmPasswordHandle = ()=>{
        setConfirmPasswordError("");
    }

    return(
        <>  
            <div id="registerDivision">
                <div id="registerFormDivision">
                    <form onSubmit={register}>
                        <h1>Employee Register</h1>
                        <table>
                            <thead>
                                <tr>
                                    <td>
                                        <input type="text" ref={ref1} placeholder="Employement Code" onChange={employmentCodeHandle}></input>
                                    </td>
                                    <td>
                                        <span>{employmentCodeError}</span>
                                    </td>
                                </tr>
                                <tr>
                                    <td>
                                        <input type="gmail" ref={ref2} placeholder="Company Mail" onChange={gmailHandle}></input>
                                    </td>
                                    <td>
                                        <span>{gmailError}</span>
                                    </td>
                                </tr>
                                <tr>
                                    <td>
                                        <input type="password" ref={ref3} placeholder="Password" onChange={passwordHandle}></input>
                                    </td>
                                    <td>
                                        <span>{passwordError}</span>
                                    </td>
                                </tr>
                                <tr>
                                    <td>
                                        <input type="password" ref={ref4} placeholder="Confirm Password" onChange={confirmPasswordHandle}></input>
                                    </td>
                                    <td>
                                        <span>{confirmPasswordError}</span>
                                    </td>
                                </tr>
                                <tr>
                                    <td>
                                        <button type="submit">Register</button>
                                    </td>
                                </tr>
                            </thead>
                        </table>
                    </form>
                </div>
            </div>
            
        </>
    );
}
export default RegisterEmployee;