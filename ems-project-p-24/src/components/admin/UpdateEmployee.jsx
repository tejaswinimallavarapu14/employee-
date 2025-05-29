import React from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
import { Drawer } from "@mui/material"

const UpdateEmployee = ()=>{

    const {id} = useParams();
    const [updateDrawOpen, setUpdateDrawOpen] = useState(false);


//Personal Details
    const [fullName, setFullName] = useState("");
    const [currentDoorNo, setCurrentDoorNo] = useState("");
    const [currentAddressLine1, setCurrentAddressLine1] = useState("");
    const [currentAddressLine2, setCurrentAddressLine2] = useState("");
    const [currentCity, setCurrentCity] = useState("");
    const [currentDistrict, setCurrentDistrict] = useState("");
    const [currentState, setCurrentState] = useState();
    const [currentPincode, setCurrentPincode] = useState();
    const [permanentDoorNo, setPermanentDoorNo] = useState("");
    const [permanentAddressLine1, setPermanentAddressLine1] = useState("");
    const [permanentAddressLine2, setPermanentAddressLine2] = useState("");
    const [permanentCity, setPermanentCity] = useState("");
    const [permanentDistrict, setPermanentDistrict] = useState("");
    const [permanentState, setPermanentState] = useState("");
    const [permanentPincode, setPermanentPincode] = useState();
    const [mobileNo, setMobileNo] = useState("");
    const [personalMail, setPersonalMail] = useState("");
    const [emergencyName, setEmergencyName] = useState("");
    const [emergencyMobileNo, setEmergencyMobileNo] = useState("");
//Professional Details
    const [officePhone, setOfficePhone] = useState("");
    const [buildingNo, setBuildingNo] = useState("");
    const [officeAddressLine1, setOfficeAddressLine1] = useState("");
    const [officeAddressLine2, setOfficeAddressLine2] = useState("");
    const [officeCity, setOfficeCity] = useState("");
    const [officeDistrict, setOfficeDistrict] = useState("");
    const [officeState, setOfficeState] = useState("");
    const [officePincode, setOfficePincode] = useState();
    const [reportingManagerMail, setReportingManagerMail] = useState("");
    const [reportingManagerName, setReportingManagerName] = useState("");
    const [hrName, setHrName] = useState("");
    const [previousCompanyName, setPreviousCompanyName] = useState("");
    const [previousCompanyJoiningDate, setPreviousCompanyJoiningDate] = useState("");
    const [previousCompanyEndDate, setPreviousCompanyEndDate] = useState("");
    const [presentCompanyJoiningDate, setPresentCompanyJoiningDate] = useState("");
//Project Details
    const [projectCode, setProjectCode] = useState("");
    const [projectName, setProjectName] = useState("");
    const [projectStartDate, setProjectStartDate] = useState("");
    const [projectEndDate, setProjectEndDate] = useState("");
    const [projectManagerMail, setProjectManagerMail] = useState("");
//Finance Details
    const [panCard, setPanCard] = useState("");
    const [aadhaar, setAadhaar] = useState();
    const [bankName, setBankName] = useState("");
    const [branch, setBranch] = useState("");
    const [ifsc, setIfsc] = useState("");
    const [basicPay, setBasicPay] = useState();
    const [allowances, setAllowances] = useState();
    const [pf, setPf] = useState();
    const [gf, setGf] = useState();
    const [bonus, setBonus] = useState();


//FormData Object
    const formData = new FormData();

//inserting data into formData Object
    formData.append('id', id);
    formData.append('fullName', fullName);
    formData.append('currentDoorNo', currentDoorNo);
    formData.append('currentAddressLine1', currentAddressLine1);
    formData.append('currentAddressLine2', currentAddressLine2);
    formData.append('currentCity', currentCity);
    formData.append('currentDistrict', currentDistrict);
    formData.append('currentState', currentState);
    formData.append('currentPincode', currentPincode);
    formData.append('permanentDoorNo', permanentDoorNo);
    formData.append('permanentAddressLine1', permanentAddressLine1);
    formData.append('permanentAddressLine2', permanentAddressLine2);
    formData.append('permanentCity', permanentCity);
    formData.append('permanentDistrict', permanentDistrict);
    formData.append('permanentState', permanentState);
    formData.append('permanentPincode', permanentPincode);
    formData.append('mobileNo', mobileNo);
    formData.append('personalMail', personalMail);
    formData.append('emergencyName', emergencyName);
    formData.append('emergencyMobileNo', emergencyMobileNo);
    formData.append('officePhone', officePhone);
    formData.append('buildingNo', buildingNo);
    formData.append('officeAddressLine1', officeAddressLine1);
    formData.append('officeAddressLine2', officeAddressLine2);
    formData.append('officeCity', officeCity);
    formData.append('officeDistrict', officeDistrict);
    formData.append('officeState', officeState);
    formData.append('officePincode', officePincode);
    formData.append('reportingManagerName', reportingManagerName);
    formData.append('reportingManagerMail', reportingManagerMail);
    formData.append('hrName', hrName);
    formData.append('previousCompanyName', previousCompanyName);
    formData.append('previousCompanyJoiningDate', previousCompanyJoiningDate);
    formData.append('previousCompanyEndDate', previousCompanyEndDate);
    formData.append('presentCompanyJoiningDate', presentCompanyJoiningDate);
    formData.append('projectCode', projectCode);
    formData.append('projectName', projectName);
    formData.append('projectStartDate', projectStartDate);
    formData.append('projectEndDate', projectEndDate);
    formData.append('projectManagerMail', projectManagerMail);
    formData.append('panCard', panCard);
    formData.append('aadhaar', aadhaar);
    formData.append('bankName', bankName);
    formData.append('branch', branch);
    formData.append('ifsc', ifsc);
    formData.append('basicPay', basicPay);
    formData.append('allowances', allowances);
    formData.append('pf', pf);
    formData.append('gf', gf);
    formData.append('bonus', bonus);

    const navigate = useNavigate();

    const [employee, setEmployee] = useState([]);

//PUT Request
    const yesUpdate = async()=>{
            try {
                const {data} = await axios.put(`http://localhost:2424/admin/editEmployee`, formData, {
                    headers : {
                        "Content-Type" : "application/json",
                        "Authorization" : `Bearer ${localStorage.getItem(`token`)}`
                    }
                });
                const {status, message} = data;
                if(status === "success"){
                    alert(message);
                }else{
                    alert("Error While Updating Employee !");
                }
                navigate("/adminDashboard");
            } catch (error) {
                alert("Failed to Update Employee Details!");
            }
    }
    const noUpdate = ()=>{
        setUpdateDrawOpen(false);

    }

    const updateEffect = (open)=>{
        setUpdateDrawOpen(open);
      }


//GET Request
    const viewEmployee = async()=>{
        try {
            const {data} = await axios.get(`http://localhost:2424/admin/viewEmployee/${id}`, {
                headers : {
                    "Authorization" : `Bearer ${localStorage.getItem(`token`)}`
                }
            });
            setEmployee(data);
        } catch (error) {
            console.log(error);
        }
    }
    
    useEffect(()=>{
        viewEmployee();
    },[]);



    const samaToSame = ()=>{

        const isChecked = document.getElementById("getOldValues").checked;

        const td1  = document.getElementById("td1").innerText;
        const td2  = document.getElementById("td2").innerText;
        const td3  = document.getElementById("td3").innerText;
        const td4  = document.getElementById("td4").innerText;
        const td5  = document.getElementById("td5").innerText;
        const td6  = document.getElementById("td6").innerText;
        const td7  = document.getElementById("td7").innerText;
        const td8  = document.getElementById("td8").innerText;
        const td9  = document.getElementById("td9").innerText;
        const td10 = document.getElementById("td10").innerText;
        const td11 = document.getElementById("td11").innerText;
        const td12 = document.getElementById("td12").innerText;
        const td13 = document.getElementById("td13").innerText;
        const td14 = document.getElementById("td14").innerText;
        const td15 = document.getElementById("td15").innerText;
        const td16 = document.getElementById("td16").innerText;
        const td17 = document.getElementById("td17").innerText;
        const td18 = document.getElementById("td18").innerText;
        const td19 = document.getElementById("td19").innerText;
        const td20 = document.getElementById("td20").innerText;
        const td21 = document.getElementById("td21").innerText;
        const td22 = document.getElementById("td22").innerText;
        const td23 = document.getElementById("td23").innerText;
        const td24 = document.getElementById("td24").innerText;
        const td25 = document.getElementById("td25").innerText;
        const td26 = document.getElementById("td26").innerText;
        const td27 = document.getElementById("td27").innerText;
        const td28 = document.getElementById("td28").innerText;
        const td29 = document.getElementById("td29").innerText;
        const td30 = document.getElementById("td30").innerText;
        const td31 = document.getElementById("td31").innerText;
        const td32 = document.getElementById("td32").innerText;
        const td33 = document.getElementById("td33").innerText;
        const td34 = document.getElementById("td34").innerText;
        const td35 = document.getElementById("td35").innerText;
        const td36 = document.getElementById("td36").innerText;
        const td37 = document.getElementById("td37").innerText;
        const td38 = document.getElementById("td38").innerText;
        const td39 = document.getElementById("td39").innerText;
        const td40 = document.getElementById("td40").innerText;
        const td41 = document.getElementById("td41").innerText;
        const td42 = document.getElementById("td42").innerText;
        const td43 = document.getElementById("td43").innerText;
        const td44 = document.getElementById("td44").innerText;
        const td45 = document.getElementById("td45").innerText;
        const td46 = document.getElementById("td46").innerText;
        const td47 = document.getElementById("td47").innerText;
        const td48 = document.getElementById("td48").innerText;
        const td49 = document.getElementById("td49").innerText;

        const fullName = document.getElementById("fullName");
        const currentDoorNo = document.getElementById("currentDoorNo");
        const currentAddressLine1 = document.getElementById("currentAddressLine1");
        const currentAddressLine2 = document.getElementById("currentAddressLine2");
        const currentCity = document.getElementById("currentCity");
        const currentDistrict = document.getElementById("currentDistrict");
        const currentState = document.getElementById("currentState");
        const currentPincode = document.getElementById("currentPincode");
        const permanentDoorNo = document.getElementById("permanentDoorNo");
        const permanentAddressLine1 = document.getElementById("permanentAddressLine1");
        const permanentAddressLine2 = document.getElementById("permanentAddressLine2");
        const permanentCity = document.getElementById("permanentCity");
        const permanentDistrict = document.getElementById("permanentDistrict");
        const permanentState = document.getElementById("permanentState");
        const permanentPincode = document.getElementById("permanentPincode");
        const mobileNo = document.getElementById("mobileNo");
        const personalMail = document.getElementById("personalMail");
        const emergencyName = document.getElementById("emergencyName");
        const emergencyMobileNo = document.getElementById("emergencyMobileNo");
        const officePhone = document.getElementById("officePhone");
        const buildingNo = document.getElementById("buildingNo");
        const officeAddressLine1 = document.getElementById("officeAddressLine1");
        const officeAddressLine2 = document.getElementById("officeAddressLine2");
        const officeCity = document.getElementById("officeCity");
        const officeDistrict = document.getElementById("officeDistrict");
        const officeState = document.getElementById("officeState");
        const officePincode = document.getElementById("officePincode");
        const reportingManagerMail = document.getElementById("reportingManagerMail");
        const reportingManagerName = document.getElementById("reportingManagerName");
        const hrName = document.getElementById("hrName");
        const previousCompanyName = document.getElementById("previousCompanyName");
        const previousCompanyJoiningDate = document.getElementById("previousCompanyJoiningDate");
        const previousCompanyEndDate = document.getElementById("previousCompanyEndDate");
        const presentCompanyJoiningDate = document.getElementById("presentCompanyJoiningDate");
        const projectCode = document.getElementById("projectCode");
        const projectName = document.getElementById("projectName");
        const projectStartDate = document.getElementById("projectStartDate");
        const projectEndDate = document.getElementById("projectEndDate");
        const projectManagerMail = document.getElementById("projectManagerMail");
        const panCard = document.getElementById("panCard");
        const aadhaar = document.getElementById("aadhaar");
        const bankName = document.getElementById("bankName");
        const branch = document.getElementById("branch");
        const ifsc = document.getElementById("ifsc");
        const basicPay = document.getElementById("basicPay");
        const allowances = document.getElementById("allowances");
        const pf = document.getElementById("pf");
        const gf = document.getElementById("gf");
        const bonus = document.getElementById("bonus");

        if(isChecked){
            fullName.value = td1 ;
            currentDoorNo.value = td2 ;
            currentAddressLine1.value = td3 ;
            currentAddressLine2.value = td4 ;
            currentCity.value = td5 ;
            currentDistrict.value = td6 ;
            currentState.value = td7 ;
            currentPincode.value = td8 ;
            permanentDoorNo.value = td9 ;
            permanentAddressLine1.value = td10;
            permanentAddressLine2.value = td11;
            permanentCity.value = td12;
            permanentDistrict.value = td13;
            permanentState.value = td14;
            permanentPincode.value = td15;
            mobileNo.value = td16;
            personalMail.value = td17;
            emergencyName.value = td18;
            emergencyMobileNo.value = td19;
            officePhone.value = td20;
            buildingNo.value = td21;
            officeAddressLine1.value = td22;
            officeAddressLine2.value = td23;
            officeCity.value = td24;
            officeDistrict.value = td25;
            officeState.value = td26;
            officePincode.value = td27;
            reportingManagerMail.value = td28;
            reportingManagerName.value = td29;
            hrName.value = td30;
            previousCompanyName.value = td31;
            previousCompanyJoiningDate.value = td32;
            previousCompanyEndDate.value = td33;
            presentCompanyJoiningDate.value = td34;
            projectCode.value = td35;
            projectName.value = td36;
            projectStartDate.value = td37;
            projectEndDate.value = td38;
            projectManagerMail.value = td39;
            panCard.value = td40;
            aadhaar.value = td41;
            bankName.value = td42;
            branch.value = td43;
            ifsc.value = td44;
            basicPay.value = td45;
            allowances.value = td46;
            pf.value = td47;
            gf.value = td48;
            bonus.value = td49;

            setFullName(td1);
            setCurrentDoorNo(td2);
            setCurrentAddressLine1(td3);
            setCurrentAddressLine2(td4);
            setCurrentCity(td5);
            setCurrentDistrict(td6);
            setCurrentState(td7);
            setCurrentPincode(td8);
            setPermanentDoorNo(td9);
            setPermanentAddressLine1(td10);
            setPermanentAddressLine2(td11);
            setPermanentCity(td12);
            setPermanentDistrict(td13);
            setPermanentState(td14);
            setPermanentPincode(td15);
            setMobileNo(td16);
            setPersonalMail(td17);
            setEmergencyName(td18);
            setEmergencyMobileNo(td19);
            setOfficePhone(td20);
            setBuildingNo(td21);
            setOfficeAddressLine1(td22);
            setOfficeAddressLine2(td23);
            setOfficeCity(td24);
            setOfficeDistrict(td25);
            setOfficeState(td26);
            setOfficePincode(td27);
            setReportingManagerMail(td28);
            setReportingManagerName(td29);
            setHrName(td30);
            setPreviousCompanyName(td31);
            setPreviousCompanyJoiningDate(td32);
            setPreviousCompanyEndDate(td33);
            setPresentCompanyJoiningDate(td34);
            setProjectCode(td35);
            setProjectName(td36);
            setProjectStartDate(td37);
            setProjectEndDate(td38);
            setProjectManagerMail(td39);
            setPanCard(td40);
            setAadhaar(td41);
            setBankName(td42);
            setBranch(td43);
            setIfsc(td44);
            setBasicPay(td45);
            setAllowances(td46);
            setPf(td47);
            setGf(td48);
            setBonus(td49);
            
            

        }else{
            fullName.value = "" ;
            currentDoorNo.value = "" ;
            currentAddressLine1.value = "" ;
            currentAddressLine2.value = "" ;
            currentCity.value = "" ;
            currentDistrict.value = "" ;
            currentState.value = "" ;
            currentPincode.value = "" ;
            permanentDoorNo.value = "" ;
            permanentAddressLine1.value = "";
            permanentAddressLine2.value = "";
            permanentCity.value = "";
            permanentDistrict.value = "";
            permanentState.value = "";
            permanentPincode.value = "";
            mobileNo.value = "";
            personalMail.value = "";
            emergencyName.value = "";
            emergencyMobileNo.value = "";
            officePhone.value = "";
            buildingNo.value = "";
            officeAddressLine1.value = "";
            officeAddressLine2.value = "";
            officeCity.value = "";
            officeDistrict.value = "";
            officeState.value = "";
            officePincode.value = "";
            reportingManagerMail.value = "";
            reportingManagerName.value = "";
            hrName.value = "";
            previousCompanyName.value = "";
            previousCompanyJoiningDate.value = "";
            previousCompanyEndDate.value = "";
            presentCompanyJoiningDate.value = "";
            projectCode.value = "";
            projectName.value = "";
            projectStartDate.value = "";
            projectEndDate.value = "";
            projectManagerMail.value = "";
            panCard.value = "";
            aadhaar.value = "";
            bankName.value = "";
            branch.value = "";
            ifsc.value = "";
            basicPay.value = "";
            allowances.value = "";
            pf.value = "";
            gf.value = "";
            bonus.value = "";
        }
    }

// OnChange Handling Event(Basic Pay)
    const basicPayHandle = (event)=>{
        const basicPayInput = parseInt(event.target.value);

        const allowancesInput = document.getElementById("allowances");
        const pfInput = document.getElementById("pf");
        const gfInput = document.getElementById("gf");
        const bonusInput = document.getElementById("bonus");

        setBasicPay(basicPayInput);

        const allowances = basicPayInput * 0.08;
        const pf = basicPayInput * 0.1;
        const gf = basicPayInput * 0.04;
        const bonus = basicPayInput * 0.03;

        allowancesInput.value = allowances;
        pfInput.value = pf;
        gfInput.value = gf;
        bonusInput.value = bonus;

        setAllowances(parseInt(allowances));
        setPf(parseInt(pf));
        setGf(parseInt(gf));
        setBonus(parseInt(bonus));

        }




    

    return(
        <>
            <div className="navigationBar">
                        
                <i className="fa fa-home" onClick={()=>{navigate("/adminDashboard"), localStorage.removeItem("fetchData"), localStorage.removeItem("localData")}}> Home</i>

                <h1 className="logo">P24 SOLUTIONS</h1>
                
            </div>


            <div id="updateEmployeeHead">
                <div id="updateEmployee">
                        <h1  id="innerHeading" style={{color:"green"}}></h1>
                        <table>
                            
                                    {
                                        employee.map((employe,index)=>{
                                            return(
                                                <thead key={index}>
                                                    <tr>
                                                        <th colSpan={2} style={{fontSize: "1.5em"}}>Employment Code : {employe.employmentCode}</th>
                                                    </tr>
                                                    <tr hidden>
                                                        <td id="td1">{employe.fullName}</td>
                                                        <td id="td2">{employe.currentDoorNo}</td>
                                                        <td id="td3">{employe.currentAddressLine1}</td>
                                                        <td id="td4">{employe.currentAddressLine2}</td>
                                                        <td id="td5">{employe.currentCity}</td>
                                                        <td id="td6">{employe.currentDistrict}</td>
                                                        <td id="td7">{employe.currentState}</td>
                                                        <td id="td8">{employe.currentPincode}</td>
                                                        <td id="td9">{employe.permanentDoorNo}</td>
                                                        <td id="td10">{employe.permanentAddressLine1}</td>
                                                        <td id="td11">{employe.permanentAddressLine2}</td>
                                                        <td id="td12">{employe.permanentCity}</td>
                                                        <td id="td13">{employe.permanentDistrict}</td>
                                                        <td id="td14">{employe.permanentState}</td>
                                                        <td id="td15">{employe.permanentPincode}</td>
                                                        <td id="td16">{employe.mobileNo}</td>
                                                        <td id="td17">{employe.personalMail}</td>
                                                        <td id="td18">{employe.emergencyName}</td>
                                                        <td id="td19">{employe.emergencyMobileNo}</td>
                                                        <td id="td20">{employe.officePhone}</td>
                                                        <td id="td21">{employe.buildingNo}</td>
                                                        <td id="td22">{employe.officeAddressLine1}</td>
                                                        <td id="td23">{employe.officeAddressLine2}</td>
                                                        <td id="td24">{employe.officeCity}</td>
                                                        <td id="td25">{employe.officeDistrict}</td>
                                                        <td id="td26">{employe.officeState}</td>
                                                        <td id="td27">{employe.officePincode}</td>
                                                        <td id="td28">{employe.reportingManagerMail}</td>
                                                        <td id="td29">{employe.reportingManagerName}</td>
                                                        <td id="td30">{employe.hrName}</td>
                                                        <td id="td31">{employe.previousCompanyName}</td>
                                                        <td id="td32">{employe.previousCompanyJoiningDate}</td>
                                                        <td id="td33">{employe.previousCompanyEndDate}</td>
                                                        <td id="td34">{employe.presentCompanyJoiningDate}</td>
                                                        <td id="td35">{employe.projectCode}</td>
                                                        <td id="td36">{employe.projectName}</td>
                                                        <td id="td37">{employe.projectStartDate}</td>
                                                        <td id="td38">{employe.projectEndDate}</td>
                                                        <td id="td39">{employe.projectManagerMail}</td>
                                                        <td id="td40">{employe.panCard}</td>
                                                        <td id="td41">{employe.aadhaar}</td>
                                                        <td id="td42">{employe.bankName}</td>
                                                        <td id="td43">{employe.branch}</td>
                                                        <td id="td44">{employe.ifsc}</td>
                                                        <td id="td45">{employe.basicPay}</td>
                                                        <td id="td46">{employe.allowances}</td>
                                                        <td id="td47">{employe.pf}</td>
                                                        <td id="td48">{employe.gf}</td>
                                                        <td id="td49">{employe.bonus}</td>
                                                    </tr>
                                                </thead>
                                            );
                                        })
                                    }

                                    <tbody>
                                    <tr>
                                        <td>
                                            <input type="checkbox" id="getOldValues" onChange={samaToSame}></input> Click here to auto-fill previous details.
                                        </td>
                                    </tr>
                                    <tr>
                                        <th>Personal Details</th>
                                    </tr>
                                    <tr>
                                        <td>Employee Name : </td>
                                        <td>
                                            <input type="text" id="fullName" onChange={(e)=>setFullName(e.target.value)}></input>
                                        </td>
                                    </tr>
                                    <tr>
                                        <th>Current Address</th>
                                    </tr>
                                    <tr>
                                        <td>Door No : </td>
                                        <td>
                                            <input type="text" id="currentDoorNo" onChange={(e)=>setCurrentDoorNo(e.target.value)}></input>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>Address Line-1 : </td>
                                        <td>
                                            <input type="text" id="currentAddressLine1" onChange={(e)=>setCurrentAddressLine1(e.target.value)}></input>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>Address Line-2 : </td>
                                        <td>
                                            <input type="text" id="currentAddressLine2" onChange={(e)=>setCurrentAddressLine2(e.target.value)}></input>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>City : </td>
                                        <td>
                                            <input type="text" id="currentCity" onChange={(e)=>setCurrentCity(e.target.value)}></input>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>District : </td>
                                        <td>
                                            <input type="text" id="currentDistrict" onChange={(e)=>setCurrentDistrict(e.target.value)}></input>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>State : </td>
                                        <td>
                                            <input type="text" id="currentState" onChange={(e)=>setCurrentState(e.target.value)}></input>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>Pincode : </td>
                                        <td>
                                            <input type="text" id="currentPincode" onChange={(e)=>setCurrentPincode(parseInt(e.target.value))}></input>
                                        </td>
                                    </tr>
                                    <tr>
                                        <th>Permanent Address</th>
                                    </tr>
                                    <tr>
                                        <td>Door No : </td>
                                        <td>
                                            <input type="text" id="permanentDoorNo" onChange={(e)=>setPermanentDoorNo(e.target.value)}></input>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>Address Line-1 : </td>
                                        <td>
                                            <input type="text" id="permanentAddressLine1" onChange={(e)=>setPermanentAddressLine1(e.target.value)}></input>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>Address Line-2 : </td>
                                        <td>
                                            <input type="text" id="permanentAddressLine2" onChange={(e)=>setPermanentAddressLine2(e.target.value)}></input>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>City : </td>
                                        <td>
                                            <input type="text" id="permanentCity" onChange={(e)=>setPermanentCity(e.target.value)}></input>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>District : </td>
                                        <td>
                                            <input type="text" id="permanentDistrict" onChange={(e)=>setPermanentDistrict(e.target.value)}></input>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>Satte : </td>
                                        <td>
                                            <input type="text" id="permanentState" onChange={(e)=>setPermanentState(e.target.value)}></input>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>Pincode : </td>
                                        <td>
                                            <input type="text" id="permanentPincode" onChange={(e)=>setPermanentPincode(parseInt(e.target.value))}></input>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>Mobile No : </td>
                                        <td>
                                            <input type="text" id="mobileNo" onChange={(e)=>setMobileNo(e.target.value)}></input>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>Personal Mail : </td>
                                        <td>
                                            <input type="text" id="personalMail" onChange={(e)=>setPersonalMail(e.target.value)}></input>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>Emergency Contact Name : </td>
                                        <td>
                                            <input type="text" id="emergencyName" onChange={(e)=>setEmergencyName(e.target.value)}></input>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>Emergency Contact Mobile No : </td>
                                        <td>
                                            <input type="text" id="emergencyMobileNo" onChange={(e)=>setEmergencyMobileNo(e.target.value)}></input>
                                        </td>
                                    </tr>
                                    <tr>
                                        <th>Professional Details</th>
                                    </tr>
                                    <tr>
                                        <td style={{color:"#2871cc", fontWeight: "bold"}}>Office Address</td>
                                    </tr>
                                    <tr>
                                        <td>Office Phone : </td>
                                        <td>
                                            <input type="text" id="officePhone" onChange={(e)=>setOfficePhone(e.target.value)}></input>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>Building No : </td>
                                        <td>
                                            <input type="text" id="buildingNo" onChange={(e)=>setBuildingNo(e.target.value)}></input>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>Address Line-1 : </td>
                                        <td>
                                            <input type="text" id="officeAddressLine1" onChange={(e)=>setOfficeAddressLine1(e.target.value)}></input>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>Address Line-2 : </td>
                                        <td>
                                            <input type="text" id="officeAddressLine2" onChange={(e)=>setOfficeAddressLine2(e.target.value)}></input>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>City : </td>
                                        <td>
                                            <input type="text" id="officeCity" onChange={(e)=>setOfficeCity(e.target.value)}></input>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>District : </td>
                                        <td>
                                            <input type="text" id="officeDistrict" onChange={(e)=>setOfficeDistrict(e.target.value)}></input>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>State : </td>
                                        <td>
                                            <input type="text" id="officeState" onChange={(e)=>setOfficeState(e.target.value)}></input>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>Pincode : </td>
                                        <td>
                                            <input type="text" id="officePincode" onChange={(e)=>setOfficePincode(parseInt(e.target.value))}></input>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>Reporting Manager Mail : </td>
                                        <td>
                                            <input type="text" id="reportingManagerMail" onChange={(e)=>setReportingManagerMail(e.target.value)}></input>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>Reporting Manager Name : </td>
                                        <td>
                                            <input type="text" id="reportingManagerName" onChange={(e)=>setReportingManagerName(e.target.value)}></input>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>HR Name : </td>
                                        <td>
                                            <input type="text" id="hrName" onChange={(e)=>setHrName(e.target.value)}></input>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>Previous Company Name : </td>
                                        <td>
                                            <input type="text" id="previousCompanyName" onChange={(e)=>setPreviousCompanyName(e.target.value)}></input>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>Previous Company Joining Date : </td>
                                        <td>
                                            <input type="date" id="previousCompanyJoiningDate" onChange={(e)=>setPreviousCompanyJoiningDate(e.target.value)}></input>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>Previous Company End Date : </td>
                                        <td>
                                            <input type="date" id="previousCompanyEndDate" onChange={(e)=>setPreviousCompanyEndDate(e.target.value)}></input>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>Present Company Joining Date : </td>
                                        <td>
                                            <input type="date" id="presentCompanyJoiningDate" onChange={(e)=>setPresentCompanyJoiningDate(e.target.value)}></input>
                                        </td>
                                    </tr>
                                    <tr>
                                        <th>Project Details</th>
                                    </tr>
                                    <tr>
                                        <td>Project Code : </td>
                                        <td>
                                            <input type="text" id="projectCode" onChange={(e)=>setProjectCode(e.target.value)}></input>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>Project Name : </td>
                                        <td>
                                            <input type="text" id="projectName" onChange={(e)=>setProjectName(e.target.value)}></input>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>Project Start Date : </td>
                                        <td>
                                            <input type="date" id="projectStartDate" onChange={(e)=>setProjectStartDate(e.target.value)}></input>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>Project End Date : </td>
                                        <td>
                                            <input type="date" id="projectEndDate" onChange={(e)=>setProjectEndDate(e.target.value)}></input>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>Project Manager Mail : </td>
                                        <td>
                                            <input type="text" id="projectManagerMail" onChange={(e)=>setProjectManagerMail(e.target.value)}></input>
                                        </td>
                                    </tr>
                                    <tr>
                                        <th>Finance Details</th>
                                    </tr>
                                    <tr>
                                        <td>PAN : </td>
                                        <td>
                                            <input type="text" id="panCard" onChange={(e)=>setPanCard(e.target.value)}></input>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>Aadhaar : </td>
                                        <td>
                                            <input type="text" id="aadhaar" onChange={(e)=>setAadhaar(parseInt(e.target.value))}></input>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>Bank Name : </td>
                                        <td>
                                            <input type="text" id="bankName" onChange={(e)=>setBankName(e.target.value)}></input>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>Branch Name : </td>
                                        <td>
                                            <input type="text" id="branch" onChange={(e)=>setBranch(e.target.value)}></input>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>IFSC : </td>
                                        <td>
                                            <input type="text" id="ifsc" onChange={(e)=>setIfsc(e.target.value)}></input>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>Basic Pay : </td>
                                        <td>
                                            <input type="text" id="basicPay" onChange={basicPayHandle}></input>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>Allowances : </td>
                                        <td>
                                            <input type="text" id="allowances" disabled style={{border: "3px solid #ffffff"}}></input>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>Provident Found : </td>
                                        <td>
                                            <input type="text" id="pf" disabled style={{border: "3px solid #ffffff"}}></input>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>Gratuity Fund : </td>
                                        <td>
                                            <input type="text" id="gf" disabled style={{border: "3px solid #ffffff"}}></input>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>Bonus : </td>
                                        <td>
                                            <input type="text" id="bonus" disabled style={{border: "3px solid #ffffff"}}></input>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>
                                            <button  onClick={()=>updateEffect(true)}>Update</button>
                                            <Drawer anchor="top" open={updateDrawOpen} onClose={()=>updateEffect(false)} PaperProps={{sx: {height:200}, className:"logoutStyle"}}>
                                                <dl>
                                                    <dd><h5>Are you sure you want to Update?</h5></dd>
                                                    <dd>
                                                        <button onClick={yesUpdate} className="btn1">Yes</button>
                                                        <button onClick={noUpdate} className="btn2">No</button>
                                                    </dd>
                                                </dl>
                                            </Drawer>
                                        </td>
                                    </tr>
                                </tbody>
                        </table>
                </div>
            </div>



            <div className="footer">
                <div className="copyRights">
                    <h5>COPYRIGHTS</h5>
                    <p><i className="fa fa-copyright"></i> 2025 P24 SOLUTIONS Pvt Ltd. All Rights Reserved.</p>
                </div>
                <div className="support">
                    <h5>SUPPORT</h5>
                    <p>About Us <br></br> Contact Us <br></br> FAQ</p>
                </div>
                <div className="getInTouch">
                    <h5>GET IN TOUCH</h5>
                    <p>contact.p24solutions@gmail.com <br></br> 9876543210</p>
                </div>
                <div className="follow">
                    <h5>FOLLOW US ON</h5>
                    <i className="fa fa-facebook"></i> &nbsp;
                    <i className="fa fa-twitter"></i> &nbsp;
                    <i className="fa fa-google-plus"></i> &nbsp;
                    <i className="fa fa-linkedin"></i> &nbsp;
                    <i className="fa fa-youtube-play"></i>

                    <h5>POWERED BY</h5>
                    <h2>P24 SOLUTIONS</h2>
                </div>
            </div>
        </>
    );
}
export default UpdateEmployee;