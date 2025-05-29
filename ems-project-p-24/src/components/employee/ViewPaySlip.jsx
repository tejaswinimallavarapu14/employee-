import axios from "axios";
import { useEffect, useState } from "react";

const ViewPaySlip = ()=>{

    const [getEmployeeCTC, setGetEmployeeCTC] = useState([]);

    const employmentCode = parseInt(localStorage.getItem("employmentCode"));

    const getCTC = async()=>{
        const {data} = await axios.get(`http://localhost:2424/employee/viewEmployee/${employmentCode}`, {
            headers:{
                "Authorization" : `Bearer ${localStorage.getItem(`token`)}`
            }
        });
        setGetEmployeeCTC(data);
        const basicPay = parseInt(document.getElementById("basicPay").innerText);
        const allowances = parseInt(document.getElementById("allowances").innerText);
        const bonus = parseInt(document.getElementById("bonus").innerText);
    
        const pf = parseInt(document.getElementById("pf").innerText);
        const gf = parseInt(document.getElementById("gf").innerText);
    
        const totalEarnings = document.getElementById("totalEarnings");
        const totalDeductions = document.getElementById("totalDeductions");
    
        const netPay = document.getElementById("netPay");
    
        totalEarnings.innerText = basicPay + allowances + bonus;
        totalDeductions.innerText = pf + gf;
    
        netPay.innerText = parseInt(totalEarnings.innerText) - parseInt(totalDeductions.innerText);
    
    }




    useEffect(()=>{
        getCTC();
    },[]);



    return(
        <>
            <div>
                <div id="employeeDetails2">
                    {
                        getEmployeeCTC.map((ctc,index)=>{
                            return(
                                <table key={index} cellSpacing={5}>
                                    <thead>
                                        <tr>
                                            <th colSpan={4}>PaySlip</th>
                                        </tr>
                                        <tr>
                                            <th colSpan={4}>P24 SOLUTIONS</th>
                                        </tr>
                                        <tr>
                                            <th colSpan={4}>5th Floor, Cyber Tower, Hi-tech City, Hyd</th>
                                        </tr>
                                        <br></br>
                                        <tr>
                                            <td style={{paddingRight:"8vw"}}>Date of Joining</td>
                                            <td style={{paddingRight:"8vw"}}> : {ctc.presentCompanyJoiningDate}</td>
                                            <td style={{paddingRight:"8vw"}}>Mobile No</td>
                                            <td> : {ctc.mobileNo}</td>
                                        </tr>
                                        <tr>
                                            <td>Employee Name</td>
                                            <td> : {ctc.fullName}</td>
                                            <td>Employment Code</td>
                                            <td> : {ctc.employmentCode}</td>
                                        </tr>
                                        <tr>
                                            <td>Pay Period</td>
                                            <td> : January 2025</td>
                                            <td>Working Days</td>
                                            <td> : 26</td>
                                        </tr>
                                    </thead>
                                    <br></br>
                                    <tbody>
                                        <tr>
                                            <td colSpan={3} style={{fontWeight: "bold"}}>Earnings</td>
                                            <td colSpan={1} style={{fontWeight: "bold"}}>Amount</td>
                                        </tr>
                                        <tr>
                                            <td colSpan={4}><hr></hr></td>
                                        </tr>
                                        <tr>
                                            <td colSpan={3}>Basic</td>
                                            <td colSpan={1} id="basicPay">{ctc.basicPay}</td>
                                        </tr>
                                        <tr>
                                            <td colSpan={3}>House Rent Allowances</td>
                                            <td colSpan={1} id="allowances">{ctc.allowances}</td>
                                        </tr>
                                        <tr>
                                            <td colSpan={3}>Monthly Bonus</td>
                                            <td colSpan={1} id="bonus">{ctc.bonus}</td>
                                        </tr>
                                        <br></br>
                                        <tr>
                                            <td colSpan={3} style={{paddingLeft: "30vw"}}>Total Earnings : </td>
                                            <td colSpan={1} id="totalEarnings" style={{fontWeight: "bold"}}></td>
                                        </tr>
                                        <br></br>
                                        <tr>
                                            <td colSpan={3} style={{fontWeight: "bold"}}>Deductinos</td>
                                            <td colSpan={1} style={{fontWeight: "bold"}}>Amount</td>
                                        </tr>
                                        <tr>
                                            <td colSpan={4}><hr></hr></td>
                                        </tr>
                                        <tr>
                                            <td colSpan={3}>Provident Fund</td>
                                            <td colSpan={1} id="pf">{ctc.pf}</td>
                                        </tr>
                                        <tr>
                                            <td colSpan={3}>Gratuity Fund</td>
                                            <td colSpan={1} id="gf">{ctc.gf}</td>
                                        </tr>
                                        <br></br>
                                        <tr>
                                            <td colSpan={3} style={{paddingLeft: "30vw"}}>Total Deductions : </td>
                                            <td colSpan={1} id="totalDeductions" style={{fontWeight: "bold"}}></td>
                                        </tr>
                                        <tr>
                                            <td colSpan={3} style={{paddingLeft: "30vw"}}>Net Pay : </td>
                                            <td colSpan={1} id="netPay" style={{fontWeight: "bold"}}></td>
                                        </tr>
                                    </tbody>
                                    <br></br>
                                    <tfoot>
                                        <tr>
                                            <th colSpan={2}>Employer Signature</th>
                                            <th colSpan={2}>Employee Signature</th>
                                        </tr>
                                        <br></br><br></br>
                                        <tr>
                                            <td colSpan={4}><hr></hr></td>
                                        </tr>
                                        <tr>
                                            <td colSpan={4} style={{paddingLeft:"18vw"}}>This is system generated payslip</td>
                                        </tr>
                                    </tfoot>
                                </table>
                            );
                        })
                    }
                </div>
            </div>
        </>
    );
}
export default ViewPaySlip;