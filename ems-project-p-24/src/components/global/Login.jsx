import { useRef, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import "../CSS/Login.css";

const Login = ()=>{

    const ref1 = useRef(null);
    const ref2 = useRef(null);
    const [employmentCodeError,setEmploymentCodeError] = useState("");
    const [passwordError,setPasswordError] = useState("");
    const [errorMsg,setErrorMsg] = useState("");

    const navigate = useNavigate();

    const login = async(event)=>{
        event.preventDefault();

        const employmentCodeErrors = ref1.current.value.trim();
        const passwordErrors = ref2.current.value.trim();

        if(employmentCodeErrors === ""){
            setEmploymentCodeError("EmploymentCode Can't be Empty");
        };
        if(passwordErrors === ""){
            setPasswordError("Password Can't be Empty")
            return;
        };

        const identifer = ref1.current.value;
        const password = ref2.current.value;

        try {

            const payLoad = identifer.includes("@") ? {"companyMail" : identifer, "password" : password} : {"employmentCode" : identifer, "password" : password};
            const {data} = await axios.post("http://localhost:2424/login", payLoad);
            
            const {login} = data;
            if(login === "success"){
                const {token,role,employmentCode} = data;

                window.localStorage.setItem("token", token);
                window.localStorage.setItem("employmentCode", employmentCode);

                role === "ROLE_EMPLOYEE" ? navigate("/employeeDashboard") : navigate("/adminDashboard");
            }
        } catch (error) {
            setErrorMsg("Invalid Credentials please try again");
        }      
        
    }

//Onchange Handling Event(EmploymentCode)
    const employmentCodeHandle = ()=>{
        setEmploymentCodeError("");
        setErrorMsg("");
    }
//Onchange Handling Event(Password)
    const passwordHandle = ()=>{
        setPasswordError("");
        setErrorMsg("");
    }

    return(
        <>
            <div className="navigationBar">
                <h1 className="logo">P24 SOLUTIONS</h1>
            </div>

            <div id="loginDivision">
                <div id="formDivision">
                    <form onSubmit={login}>
                        <h1>Login</h1>
                        <table>
                            <thead>
                                    <tr>
                                        <td><input type="text" ref={ref1} placeholder="EmploymentCode/CompanyMail" onChange={employmentCodeHandle}></input></td>
                                        <td><span>{employmentCodeError}</span></td>
                                    </tr>
                                    <tr>
                                        <td>
                                            <input type="password" ref={ref2} placeholder="Password" onChange={passwordHandle}></input>
                                        </td>
                                        <td><span>{passwordError}</span></td>
                                    </tr>
                                    <tr>
                                        <td colSpan={2}>
                                            <button type="submit">Login</button>
                                        </td>
                                    </tr>
                            </thead>
                        </table>
                        <span style={{marginLeft:"4vw"}}>{errorMsg}</span>
                    </form>
                </div>
            </div>
        </>
    );
}
export default Login;