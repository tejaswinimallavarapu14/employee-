import React from "react";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Login from "./global/Login";
import AdminDashboard from "./admin/AdminDashboard";
import EmployeeDashboard from "./employee/EmployeeDashboard";
import PersonalDetails from "./employee/PersonalDetails";
import ProfessionalDetails from "./employee/ProfessionalDetails";
import ProjectDetails from "./employee/ProjectDetails";
import FinanceDetails from "./employee/FinanceDetails";
import EmployeeHomePage from "./employee/EmployeeHomePage";
import RegisterEmployee from "./admin/RegisterEmployee";
import ViewAllEmployees from "./admin/ViewAllEmployees";
import CreateEmployee from "./admin/CreateEmployee";
import UpdateEmployee from "./admin/UpdateEmployee";
import ViewMoreDetails from "./admin/ViewMoreDetails";
import ViewPaySlip from "./employee/ViewPaySlip";

const Master = ()=>{
    return(
        <>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Login></Login>}></Route>

                    <Route path="/adminDashboard" element={<AdminDashboard></AdminDashboard>}>
                        <Route index element={<ViewAllEmployees></ViewAllEmployees>}></Route>
                        <Route path="adminDashboard/registerEmployee" element={<RegisterEmployee></RegisterEmployee>}></Route>
                        <Route path="adminDashboard/viewAllEmployees" element={<ViewAllEmployees></ViewAllEmployees>}></Route>
                        <Route path="adminDashboard/createEmployee" element={<CreateEmployee></CreateEmployee>}></Route>
                    </Route>

                    <Route path="/employeeDashboard" element={<EmployeeDashboard></EmployeeDashboard>}>
                        <Route path="employeeDashboard/personalDetails" element={<PersonalDetails></PersonalDetails>}></Route>
                        <Route path="employeeDashboard/professionalDetails" element={<ProfessionalDetails></ProfessionalDetails>}></Route>
                        <Route path="employeeDashboard/projectDetails" element={<ProjectDetails></ProjectDetails>}></Route>
                        <Route path="employeeDashboard/financeDetails" element={<FinanceDetails></FinanceDetails>}></Route>
                        <Route index element={<EmployeeHomePage></EmployeeHomePage>}></Route>
                        <Route path="employeeDashboard/employeeHomePage" element={<EmployeeHomePage></EmployeeHomePage>}></Route>
                        <Route path="employeeDashboard/viewPaySlip" element={<ViewPaySlip></ViewPaySlip>}></Route>
                    </Route>

                    <Route path="/viewMoreDetails/:id" element={<ViewMoreDetails></ViewMoreDetails>}></Route>
                    <Route path="/updateEmployee/:id" element={<UpdateEmployee></UpdateEmployee>}></Route>
                    
                </Routes>
            </BrowserRouter>
        </>
    );
}
export default Master;



