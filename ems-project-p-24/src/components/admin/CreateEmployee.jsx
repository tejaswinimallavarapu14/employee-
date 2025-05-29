import { useState} from "react";
import axios from "axios";

const CreateEmployee = ()=>{

//Personal Details
    const [fullName, setFullName] = useState("");
    const [dateOfBirth, setDateOfBirth] = useState("");
    // const [gender, setGender] = useState("");
    const [selectedOption,setSelectedOption] = useState("");
    const [age, setAge] = useState();
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
    const [employmentCode, setEmploymentCode] = useState();
    const [companyMail, setCompanyMail] = useState("");
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

//Error Messages UseStates
    const [fullNameError, setFullNameError] = useState("");
    const [dateOfBirthError, setDateOfBirthError] = useState("");
    const [genderError, setGenderError] = useState("");
    const [ageError, setAgeError] = useState("");
    const [currentDoorNoError, setCurrentDoorNoError] = useState("");
    const [currentAddressLine1Error, setCurrentAddressLine1Error] = useState("");
    const [currentAddressLine2Error, setCurrentAddressLine2Error] = useState("");
    const [currentCityError, setCurrentCityError] = useState("");
    const [currentDistrictError, setCurrentDistrictError] = useState("");
    const [currentStateError, setCurrentStateError] = useState("");
    const [currentPincodeError, setCurrentPincodeError] = useState();
    const [permanentDoorNoError, setPermanentDoorNoError] = useState("");
    const [permanentAddressLine1Error, setPermanentAddressLine1Error] = useState("");
    const [permanentAddressLine2Error, setPermanentAddressLine2Error] = useState("");
    const [permanentCityError, setPermanentCityError] = useState("");
    const [permanentDistrictError, setPermanentDistrictError] = useState("");
    const [permanentStateError, setPermanentStateError] = useState("");
    const [permanentPincodeError, setPermanentPincodeError] = useState();
    const [mobileNoError, setMobileNoError] = useState("");
    const [personalMailError, setPersonalMailError] = useState("");
    const [emergencyNameError, setEmergencyNameError] = useState("");
    const [emergencyMobileNoError, setEmergencyMobileNoError] = useState("");
    const [employmentCodeError, setEmploymentCodeError] = useState();
    const [companyMailError, setCompanyMailError] = useState("");
    const [officePhoneError, setOfficePhoneError] = useState("");
    const [buildingNoError, setBuildingNoError] = useState("");
    const [officeAddressLine1Error, setOfficeAddressLine1Error] = useState("");
    const [officeAddressLine2Error, setOfficeAddressLine2Error] = useState("");
    const [officeCityError, setOfficeCityError] = useState("");
    const [officeDistrictError, setOfficeDistrictError] = useState("");
    const [officeStateError, setOfficeStateError] = useState("");
    const [officePincodeError, setOfficePincodeError] = useState();
    const [reportingManagerMailError, setReportingManagerMailError] = useState("");
    const [reportingManagerNameError, setReportingManagerNameError] = useState("");
    const [hrNameError, setHrNameError] = useState("");
    const [previousCompanyNameError, setPreviousCompanyNameError] = useState("");
    const [previousCompanyJoiningDateError, setPreviousCompanyJoiningDateError] = useState("");
    const [previousCompanyEndDateError, setPreviousCompanyEndDateError] = useState("");
    const [presentCompanyJoiningDateError, setPresentCompanyJoiningDateError] = useState("");
    const [panCardError, setPanCardError] = useState("");
    const [aadhaarError, setAadhaarError] = useState();
    const [bankNameError, setBankNameError] = useState("");
    const [branchError, setBranchError] = useState("");
    const [ifscError, setIfscError] = useState("");
    const [basicPayError, setBasicPayError] = useState();
    const [allowancesError, setAllowancesError] = useState();

//FormData Object
    const formData = new FormData();

//inserting data into formData Object
    formData.append('fullName', fullName);
    formData.append('dateOfBirth', dateOfBirth);
    formData.append('gender', selectedOption);
    formData.append('age', age);
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
    formData.append('employmentCode', employmentCode);
    formData.append('companyMail', companyMail);
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

//onChange Same Address for Current & Permanent Addresses
    const sameAddress = ()=>{

        const isChecked = document.getElementById('addressCheck').checked;

      const currentDoorNo = document.getElementById('currentDoorNo').value;
      const currentAddress1 = document.getElementById('currentAddress1').value;
      const currentAddress2 = document.getElementById('currentAddress2').value;
      const currentCity = document.getElementById('currentCity').value;
      const currentDistrict = document.getElementById('currentDistrict').value;
      const currentState = document.getElementById('currentState').value;
      const currentPincode = document.getElementById('currentPincode').value;

      const permanentDoorNo = document.getElementById('permanentDoorNo');
      const permanentAddress1 = document.getElementById('permanentAddress1');
      const permanentAddress2 = document.getElementById('permanentAddress2');
      const permanentCity = document.getElementById('permanentCity');
      const permanentDistrict = document.getElementById('permanentDistrict');
      const permanentState = document.getElementById('permanentState');
      const permanentPincode = document.getElementById('permanentPincode');

      if (isChecked) {
        // Copy values from current address to permanent address
        permanentDoorNo.value = currentDoorNo;
        permanentAddress1.value = currentAddress1;
        permanentAddress2.value = currentAddress2;
        permanentCity.value = currentCity;
        permanentDistrict.value = currentDistrict;
        permanentState.value = currentState;
        permanentPincode.value = currentPincode;

        setPermanentDoorNoError("");
        setPermanentAddressLine2Error("");
        setPermanentAddressLine1Error("");
        setPermanentCityError("");
        setPermanentDistrictError("");
        setPermanentStateError("");
        setPermanentPincodeError("");

        setPermanentDoorNo(currentDoorNo);
        setPermanentAddressLine2(currentAddress1);
        setPermanentAddressLine1(currentAddress2);
        setPermanentCity(currentCity);
        setPermanentDistrict(currentDistrict);
        setPermanentState(currentState);
        setPermanentPincode(parseInt(currentPincode));

      } else {

        // Clear the permanent address fields
        permanentDoorNo.value = '';
        permanentAddress1.value = '';
        permanentAddress2.value = '';
        permanentCity.value = '';
        permanentDistrict.value = '';
        permanentState.value = '';
        permanentPincode.value = '';
      }
    }

//Office Address Auto Print
    const officeAddressPrint = ()=>{
        const isChecked = document.getElementById('officeAddress').checked;

        if(isChecked){
            const officePhone = document.getElementById('officePhone').value="040-66420000";
            const officeBuildingNo = document.getElementById('officeBuildingNo').value="210";
            const officeAddress1 = document.getElementById('officeAddress1').value="ISB Road";
            const officeAddress2 = document.getElementById('officeAddress2').value="Lingampalli Road";
            const officeCity = document.getElementById('officeCity').value="Manikonda";
            const officeDistrict = document.getElementById('officeDistrict').value="Hyderabad";
            const officeState = document.getElementById('officeState').value="Telangana";
            const officePincode = document.getElementById('officePincode').value=500032;

            setOfficePhoneError("");
            setBuildingNoError("");
            setOfficeAddressLine1Error("");
            setOfficeAddressLine2Error("");
            setOfficeCityError("");
            setOfficeDistrictError("");
            setOfficeStateError("");
            setOfficePincodeError("");

            setOfficePhone(officePhone);
            setBuildingNo(officeBuildingNo);
            setOfficeAddressLine1(officeAddress1);
            setOfficeAddressLine2(officeAddress2);
            setOfficeCity(officeCity);
            setOfficeDistrict(officeDistrict);
            setOfficeState(officeState);
            setOfficePincode(officePincode);
            
        }else{

            document.getElementById('officePhone').value="";
            document.getElementById('officeBuildingNo').value="";
            document.getElementById('officeAddress1').value="";
            document.getElementById('officeAddress2').value="";
            document.getElementById('officeCity').value="";
            document.getElementById('officeDistrict').value="";
            document.getElementById('officeState').value="";
            document.getElementById('officePincode').value='';
        }
    }

//Age caluculating function based on given date
    function calculateAge(event) {

        setDateOfBirth(event.target.value);
        setDateOfBirthError("");

        const dobInput = document.getElementById('dob').value;
        const ageInput = document.getElementById('ageId');
        
        if (dobInput) {
          const dob = new Date(dobInput);
          const today = new Date();
          
          let age = today.getFullYear() - dob.getFullYear();
          const monthDifference = today.getMonth() - dob.getMonth();
          
          // Adjust age if the birth date hasn't occurred yet this year
          if (monthDifference < 0 || (monthDifference === 0 && today.getDate() < dob.getDate())) {
            age--;
          }
          
          ageInput.value = age; // Update the age field
          setAge(age);
          setAgeError("");
        } else {
          ageInput.value = ''; // Clear age field if no date is selected
        }
      }

//Post Request Function
  
    const addEmployee = async(event)=>{
        event.preventDefault();
            
        const fullNameErrors = event.target.fullName.value.trim();
        const dateOfBirthErrors = event.target.dob.value.trim();
        const genderErrors = event.target.gender.value.trim();
        const ageErrors = event.target.age.value.trim();
        const currentDoorNoErrors = event.target.currentDoorNo.value.trim();
        const currentAddressLine1Errors = event.target.currentAddress1.value.trim();
        const currentAddressLine2Errors = event.target.currentAddress2.value.trim();
        const currentCityErrors = event.target.currentCity.value.trim();
        const currentDistrictErrors = event.target.currentDistrict.value.trim();
        const currentStateErrors = event.target.currentState.value.trim();
        const currentPincodeErrors = event.target.currentPincode.value.trim();
        const permanentDoorNoErrors = event.target.permanentDoorNo.value.trim();
        const permanentAddressLine1Errors = event.target.permanentAddress1.value.trim();
        const permanentAddressLine2Errors = event.target.permanentAddress2.value.trim();
        const permanentCityErrors = event.target.permanentCity.value.trim();
        const permanentDistrictErrors = event.target.permanentDistrict.value.trim();
        const permanentStateErrors = event.target.permanentState.value.trim();
        const permanentPincodeErrors = event.target.permanentPincode.value.trim();
        const mobileNoErrors = event.target.mobileNo.value.trim();
        const personalMailErrors = event.target.personalMail.value.trim();
        const emergencyNameErrors = event.target.emergencyName.value.trim();
        const emergencyMobileNoErrors = event.target.mobileNo.value.trim();
        const employmentCodeErrors = event.target.employmentCode.value.trim();
        const companyMailErrors = event.target.companyMail.value.trim();
        const officePhoneErrors = event.target.officePhone.value.trim();
        const buildingNoErrors = event.target.buildingNo.value.trim();
        const officeAddressLine1Errors = event.target.officeAddress1.value.trim();
        const officeAddressLine2Errors = event.target.officeAddress2.value.trim();
        const officeCityErrors = event.target.officeCity.value.trim();
        const officeDistrictErrors = event.target.officeDistrict.value.trim();
        const officeStateError = event.target.officeState.value.trim();
        const officePincodeErrors = event.target.officePincode.value.trim();
        const reportingManagerNameErrors = event.target.reportingManagerName.value.trim();
        const reportingManagerMailErrors = event.target.reportingManagerMail.value.trim();
        const hrNameErrors = event.target.hrName.value.trim();
        const previousCompanyNameErrors = event.target.previousCompanyName.value.trim();
        const previousCompanyJoiningDateErrors = event.target.previousCompanyJoiningDate.value.trim();
        const previousCompanyEndDateErrors = event.target.previousCompanyEndDate.value.trim();
        const presentCompanyJoiningDateErrors = event.target.presentCompanyJoiningDate.value.trim();
        const panCardErrors = event.target.pan.value.trim();
        const aadhaarErrors = event.target.aadhaar.value.trim();
        const bankNameErrors = event.target.bankName.value.trim();
        const branchErrors = event.target.branch.value.trim();
        const ifscErrors = event.target.ifsc.value.trim();
        const basicPayErrors = event.target.basicPay.value.trim();

//All Validations

        if(fullNameErrors === ""){
            setFullNameError("*");
        }
        if(dateOfBirthErrors === ""){
            setDateOfBirthError("*");
        }
        if(genderErrors === ""){
            setGenderError("*");
        }
        if(ageErrors === ""){
            setAgeError("*");
        }
        if(currentDoorNoErrors === ""){
            setCurrentDoorNoError("*");
        }
        if(currentAddressLine1Errors === ""){
            setCurrentAddressLine1Error("*");
        }
        if(currentAddressLine2Errors === ""){
            setCurrentAddressLine2Error("*");
        }
        if(currentCityErrors === ""){
            setCurrentCityError("*");
        }
        if(currentDistrictErrors === ""){
            setCurrentDistrictError("*");
        }
        if(currentStateErrors === ""){
            setCurrentStateError("*");
        }
        if(currentPincodeErrors === ""){
            setCurrentPincodeError("*");
        }
        if(permanentDoorNoErrors === ""){
            setPermanentDoorNoError("*");
        }
        if(permanentAddressLine1Errors === ""){
            setPermanentAddressLine1Error("*");
        }
        if(permanentAddressLine2Errors === ""){
            setPermanentAddressLine2Error("*");
        }
        if(permanentCityErrors === ""){
            setPermanentCityError("*");
        }
        if(permanentDistrictErrors === ""){
            setPermanentDistrictError("*");
        }
        if(permanentStateErrors === ""){
            setPermanentStateError("*");
        }
        if(permanentPincodeErrors === ""){
            setPermanentPincodeError("*");
        }
        if(mobileNoErrors === ""){
            setMobileNoError("*");
        }
        if(personalMailErrors === ""){
            setPersonalMailError("*");
        }
        if(emergencyNameErrors === ""){
            setEmergencyNameError("*");
        }
        if(emergencyMobileNoErrors === ""){
            setEmergencyMobileNoError("*");
        }
        if(employmentCodeErrors === ""){
            setEmploymentCodeError("*");
        }
        if(companyMailErrors === ""){
            setCompanyMailError("*");
        }
        if(officePhoneErrors === ""){
            setOfficePhoneError("*");
        }
        if(buildingNoErrors === ""){
            setBuildingNoError("*");
        }
        if(officeAddressLine1Errors === ""){
            setOfficeAddressLine1Error("*");
        }
        if(officeAddressLine2Errors === ""){
            setOfficeAddressLine2Error("*");
        }
        if(officeCityErrors === ""){
            setOfficeCityError("*");
        }
        if(officeDistrictErrors === ""){
            setOfficeDistrictError("*");
        }
        if(officeStateError === ""){
            setOfficeStateError("*");
        }
        if(officePincodeErrors === ""){
            setOfficePincodeError("*");
        }
        if(reportingManagerNameErrors === ""){
            setReportingManagerNameError("*");
        }
        if(reportingManagerMailErrors === ""){
            setReportingManagerMailError("*");
        }
        if(hrNameErrors === ""){
            setHrNameError("*");
        }
        if(previousCompanyNameErrors === ""){
            setPreviousCompanyNameError("*");
        }
        if(previousCompanyJoiningDateErrors === ""){
            setPreviousCompanyJoiningDateError("*");
        }
        if(previousCompanyEndDateErrors === ""){
            setPreviousCompanyEndDateError("*");
        }
        if(presentCompanyJoiningDateErrors === ""){
            setPresentCompanyJoiningDateError("*");
        }
        if(panCardErrors === ""){
            setPanCardError("*");
        }
        if(aadhaarErrors === ""){
            setAadhaarError("*");
        }
        if(bankNameErrors === ""){
            setBankNameError("*");
        }
        if(branchErrors === ""){
            setBranchError("*");
        }
        if(ifscErrors === ""){
            setIfscError("*");
        }
        if(basicPayErrors === ""){
            setBasicPayError("*");
            return;
        }

        try {
            const {data} = await axios.post("http://localhost:2424/admin/addEmployee", formData, {
                headers : {
                    "Content-Type" : "application/json",
                    "Authorization" : `Bearer ${localStorage.getItem(`token`)}`
                }
            });

            const {status,message} = data;

            if(status === "success"){
                alert(message);
            }else{
                alert("Failed to create New Employee");
            }
        } catch (error) {
            alert("EmploymentCode/CompanyMail Can't be same !");
        }
      }


// OnChange Handling Event(Full Name)
    const fullNameHandle = (event)=>{
        setFullName(event.target.value);
        setFullNameError("");
        }
// OnChange Handling Event(Gender)
    const genderHandle = (event)=>{
        setSelectedOption(event.target.value);
        setGenderError("");
        }
// OnChange Handling Event(Current Door No)
    const currentDoorHandle = (event)=>{
        setCurrentDoorNo(event.target.value);
        setCurrentDoorNoError("");
        }
// OnChange Handling Event(Current Address Line-1)
    const currentAddress1Handle = (event)=>{
        setCurrentAddressLine1(event.target.value);
        setCurrentAddressLine1Error("");
        }
// OnChange Handling Event(Current Address Line-2)
    const currentAddress2Handle = (event)=>{
        setCurrentAddressLine2(event.target.value);
        setCurrentAddressLine2Error("");
        }
// OnChange Handling Event(Current City)
    const currentCityHandle = (event)=>{
        setCurrentCity(event.target.value);
        setCurrentCityError("");
        }
// OnChange Handling Event(Current District)
    const currentDistrictHandle = (event)=>{
        setCurrentDistrict(event.target.value);
        setCurrentDistrictError("");
        }
// OnChange Handling Event(Current State)
    const currentStateHandle = (event)=>{
        setCurrentState(event.target.value);
        setCurrentStateError("");
        }
// OnChange Handling Event(Current Pincode)
    const currentPincodeHandle = (event)=>{
        setCurrentPincode(parseInt(event.target.value));
        setCurrentPincodeError("");
        }
// OnChange Handling Event(Permanent Door No)
    const permanentDoorHandle = (event)=>{
        setPermanentDoorNo(event.target.value);
        }
// OnChange Handling Event(Permanent Address Line-1)
    const permanentAddress1Handle = (event)=>{
        setPermanentAddressLine1(event.target.value);
        }
// OnChange Handling Event(Permanent Address Line-2)
    const permanentAddress2Handle = (event)=>{
        setPermanentAddressLine2(event.target.value);
        }
// OnChange Handling Event(Permanent City)
    const permanentCityHandle = (event)=>{
        setPermanentCity(event.target.value);
        }
// OnChange Handling Event(Permanent District)
    const permanentDistrictHandle = (event)=>{
        setPermanentDistrict(event.target.value);
        }
// OnChange Handling Event(Permanent State)
    const permanentStateHandle = (event)=>{
        setPermanentState(event.target.value);
        }
// OnChange Handling Event(Permanent Pincode)
    const permanentPincodeHandle = (event)=>{
        setPermanentPincode(parseInt(event.target.value));
        }
// OnChange Handling Event(Mobile Number)
    const mobileNoHandle = (event)=>{
        setMobileNo(event.target.value);
        setMobileNoError("");
        }
// OnChange Handling Event(Personal Mail)
    const personalMailHandle = (event)=>{
        setPersonalMail(event.target.value);
        setPersonalMailError("");
        }
// OnChange Handling Event(Emergency Contact Name)
    const emergencyNameHandle = (event)=>{
        setEmergencyName(event.target.value);
        setEmergencyNameError("");
        }
// OnChange Handling Event(Emergency Contact Number)
    const emergencyNoHandle = (event)=>{
        setEmergencyMobileNo(event.target.value);
        setEmergencyMobileNoError("");
        }
// OnChange Handling Event(Employment Code)
    const employmentCodeHandle = (event)=>{
        setEmploymentCode(parseInt(event.target.value));
        setEmploymentCodeError("");
        }
// OnChange Handling Event(Company Mail)
    const companyMailHandle = (event)=>{
        setCompanyMail(event.target.value);
        setCompanyMailError("");
        }
// OnChange Handling Event(Office Phone)
    const officePhoneHandle = (event)=>{
        setOfficePhone(event.target.value);
        }
// OnChange Handling Event(Office building No)
    const buildingNoHandle = (event)=>{
        setBuildingNo(event.target.value);
        }
// OnChange Handling Event(Office Address Line-1)
    const officeAddress1Handle = (event)=>{
        setOfficeAddressLine1(event.target.value);
        }
// OnChange Handling Event(Office Address Line-2)
    const officeAddress2Handle = (event)=>{
        setOfficeAddressLine2(event.target.value);
        }
// OnChange Handling Event(Office City)
    const officeCityHandle = (event)=>{
        setOfficeCity(event.target.value);
        }
// OnChange Handling Event(Office District)
    const officeDistrictHandle = (event)=>{
        setOfficeDistrict(event.target.value);
        }
// OnChange Handling Event(Office State)
    const officeStateHandle = (event)=>{
        setOfficeState(event.target.value);
        }
// OnChange Handling Event(Office Pincode)
    const officePincodeHandle = (event)=>{
        setOfficePincode(parseInt(event.target.value));
        }
// OnChange Handling Event(Reporting Manager Mail)
    const reportingMangerMailHandle = (event)=>{
        setReportingManagerMail(event.target.value);
        setReportingManagerMailError("");
        }
// OnChange Handling Event(Reporting Manager Name)
    const reportingMangerNameHandle = (event)=>{
        setReportingManagerName(event.target.value);
        setReportingManagerNameError("");
        }
// OnChange Handling Event(HR Name)
    const hrNameHandle = (event)=>{
        setHrName(event.target.value);
        setHrNameError("");
        }
// OnChange Handling Event(Previous Company Name)
    const previousCompanyNameHandle = (event)=>{
        setPreviousCompanyName(event.target.value);
        setPreviousCompanyNameError("");
        }
// OnChange Handling Event(Previous Company Joining Date)
    const previousCompanyJoiningDateHandle = (event)=>{
        setPreviousCompanyJoiningDate(event.target.value);
        setPreviousCompanyJoiningDateError("");
        }
// OnChange Handling Event(Previous Company End Date)
    const previousCompanyEndDateHandle = (event)=>{
        setPreviousCompanyEndDate(event.target.value);
        setPreviousCompanyEndDateError("");
        }
// OnChange Handling Event(Present Company Joining Date)
    const presentCompanyJoiningDateHandle = (event)=>{
        setPresentCompanyJoiningDate(event.target.value);
        setPresentCompanyJoiningDateError("");
        }
// OnChange Handling Event(Project Code)
    const projectCodeHandle = (event)=>{
        setProjectCode(event.target.value);
        }
// OnChange Handling Event(Project Name)
    const projectNameHandle = (event)=>{
        setProjectName(event.target.value);
        }
// OnChange Handling Event(Project Start Date)
    const projectStartDateHandle = (event)=>{
        setProjectStartDate(event.target.value);
        }
// OnChange Handling Event(Project End Date)
    const projectEndDateHandle = (event)=>{
        setProjectEndDate(event.target.value);
        }
// OnChange Handling Event(Project Manager Mail)
    const projectManagerMailHandle = (event)=>{
        setProjectManagerMail(event.target.value);
        }
// OnChange Handling Event(PAN Card)
    const panHandle = (event)=>{
        setPanCard(event.target.value);
        setPanCardError("");
        }
// OnChange Handling Event(Aadhaar Card)
    const aadhaarHandle = (event)=>{
        setAadhaar(parseInt(event.target.value));
        setAadhaarError("");
        }
// OnChange Handling Event(Bank Name)
    const bankNameHandle = (event)=>{
        setBankName(event.target.value);
        setBankNameError("");
        }
// OnChange Handling Event(Branch Name)
    const branchHandle = (event)=>{
        setBranch(event.target.value);
        setBranchError("");
        }
// OnChange Handling Event(IFSC)
    const ifscHandle = (event)=>{
        setIfsc(event.target.value);
        setIfscError("");
        }
// OnChange Handling Event(Basic Pay)
    const basicPayHandle = (event)=>{
        const basicPayInput = parseInt(event.target.value);

        const allowancesInput = document.getElementById("allowances");
        const pfInput = document.getElementById("pf");
        const gfInput = document.getElementById("gf");
        const bonusInput = document.getElementById("bonus");

        if(isNaN(basicPayInput) || basicPayInput <= 0){
            setBasicPayError("*");
            setBasicPay(0);
            setAllowances(0);
            setPf(0);
            setGf(0);
            setBonus(0);
            return;
        }

        setBasicPay(basicPayInput);
        setBasicPayError("");

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

            <div id="createEmployeeHead">
                <div id="createEmployee">
                    <form onSubmit={addEmployee}>
                        <h1>Create New Employee</h1>
                        <table>
                            <thead>
                                <tr>
                                    <th colSpan={2}>Employee Personal Details(*Required)</th>
                                </tr>
                                <tr>
                                    <td>Full Name : </td>
                                    <td>
                                        <input type="text" name="fullName" onChange={fullNameHandle}></input>
                                    </td>
                                    <td>
                                        <span>{fullNameError}</span>
                                    </td>
                                </tr>
                                <tr>
                                    <td>Date Of Birth : </td>
                                    <td>
                                        <input type="date" id="dob" name="dob" onChange={calculateAge}></input>
                                    </td>
                                    <td>
                                        <span>{dateOfBirthError}</span>
                                    </td>
                                </tr>
                                <tr>
                                    <td>Gender : </td>
                                    <td>
                                        <div style={{display:"inline-block", marginLeft:"3vw"}}>Male</div><input type="radio" name={"gender"} value="Male" checked={selectedOption === "Male"} onChange={genderHandle}></input>
                                        <div style={{display:"inline-block"}}>Female</div><input type="radio" name={"gender"} value="Female" checked={selectedOption === "Female"} onChange={genderHandle}></input>
                                    </td>
                                    <td>
                                        <span>{genderError}</span>
                                    </td>
                                </tr>
                                <tr>
                                    <td>Age : </td>
                                    <td>
                                        <input type="text" id="ageId" name="age" readOnly></input>
                                    </td>
                                    <td>
                                        <span>{ageError}</span>
                                    </td>
                                </tr>
                                <tr>
                                    <th>Current Address</th>
                                </tr>
                                <tr>
                                    <td>Door No : </td>
                                    <td>
                                        <input type="text" id="currentDoorNo" name="currentDoor" onChange={currentDoorHandle}></input>
                                    </td>
                                    <td>
                                        <span>{currentDoorNoError}</span>
                                    </td>
                                </tr>
                                <tr>
                                    <td>Address Line-1 : </td>
                                    <td>
                                        <input type="text" id="currentAddress1" name="currentAddress1" onChange={currentAddress1Handle}></input>
                                    </td>
                                    <td>
                                        <span>{currentAddressLine1Error}</span>
                                    </td>
                                </tr>
                                <tr>
                                    <td>Address Line-2 : </td>
                                    <td>
                                        <input type="text" id="currentAddress2" name="currentAddress2" onChange={currentAddress2Handle}></input>
                                    </td>
                                    <td>
                                        <span>{currentAddressLine2Error}</span>
                                    </td>
                                </tr>
                                <tr>
                                    <td>City : </td>
                                    <td>
                                        <input type="text" id="currentCity" name="currentCity" onChange={currentCityHandle}></input>
                                    </td>
                                    <td>
                                        <span>{currentCityError}</span>
                                    </td>
                                </tr>
                                <tr>
                                    <td>District : </td>
                                    <td>
                                        <input type="text" id="currentDistrict" name="currentDistrict" onChange={currentDistrictHandle}></input>
                                    </td>
                                    <td>
                                        <span>{currentDistrictError}</span>
                                    </td>
                                </tr>
                                <tr>
                                    <td>State : </td>
                                    <td>
                                        <input type="text" id="currentState"name="currentState" onChange={currentStateHandle}></input>
                                    </td>
                                    <td>
                                        <span>{currentStateError}</span>
                                    </td>
                                </tr>
                                <tr>
                                    <td>Pincode : </td>
                                    <td>
                                        <input type="text" id="currentPincode" name="currentPincode" onChange={currentPincodeHandle}></input>
                                    </td>
                                    <td>
                                        <span>{currentPincodeError}</span>
                                    </td>
                                </tr>
                                <tr>
                                    <th>Permanent Address</th>
                                </tr>
                                <tr>
                                    <td colSpan={2}>
                                        <input type="checkbox" id="addressCheck" onChange={sameAddress}></input>Permanent address is same as current address
                                    </td>
                                </tr>
                                <tr>
                                    <td>Door No : </td>
                                    <td>
                                        <input type="text" id="permanentDoorNo" name="permanentDoor" onChange={permanentDoorHandle}></input>
                                    </td>
                                    <td>
                                        <span>{permanentDoorNoError}</span>
                                    </td>
                                </tr>
                                <tr>
                                    <td>Address Line-1 : </td>
                                    <td>
                                        <input type="text" id="permanentAddress1" name="permanentAddress1" onChange={permanentAddress1Handle}></input>
                                    </td>
                                    <td>
                                        <span>{permanentAddressLine1Error}</span>
                                    </td>
                                </tr>
                                <tr>
                                    <td>Address Line-2 : </td>
                                    <td>
                                        <input type="text" id="permanentAddress2" name="permanentAddress2" onChange={permanentAddress2Handle}></input>
                                    </td>
                                    <td>
                                        <span>{permanentAddressLine2Error}</span>
                                    </td>
                                </tr>
                                <tr>
                                    <td>City : </td>
                                    <td>
                                        <input type="text" id="permanentCity" name="permanentCity" onChange={permanentCityHandle}></input>
                                    </td>
                                    <td>
                                        <span>{permanentCityError}</span>
                                    </td>
                                </tr>
                                <tr>
                                    <td>District : </td>
                                    <td>
                                        <input type="text" id="permanentDistrict" name="permanentDistrict" onChange={permanentDistrictHandle}></input>
                                    </td>
                                    <td>
                                        <span>{permanentDistrictError}</span>
                                    </td>
                                </tr>
                                <tr>
                                    <td>State : </td>
                                    <td>
                                        <input type="text" id="permanentState" name="permanentState" onChange={permanentStateHandle}></input>
                                    </td>
                                    <td>
                                        <span>{permanentStateError}</span>
                                    </td>
                                </tr>
                                <tr>
                                    <td>Pincode : </td>
                                    <td>
                                        <input type="text" id="permanentPincode" name="permanentPincode" onChange={permanentPincodeHandle}></input>
                                    </td>
                                    <td>
                                        <span>{permanentPincodeError}</span>
                                    </td>
                                </tr>
                                <tr>
                                    <td>Mobile Number : </td>
                                    <td>
                                        <input type="text" name="mobileNo" onChange={mobileNoHandle}></input>
                                    </td>
                                    <td>
                                        <span>{mobileNoError}</span>
                                    </td>
                                </tr>
                                <tr>
                                    <td>Personal Mail : </td>
                                    <td>
                                        <input type="text" name="personalMail" onChange={personalMailHandle}></input>
                                    </td>
                                    <td>
                                        <span>{personalMailError}</span>
                                    </td>
                                </tr>
                                <tr>
                                    <td>Emergency Contact Name : </td>
                                    <td>
                                        <input type="text" name="emergencyName" onChange={emergencyNameHandle}></input>
                                    </td>
                                    <td>
                                        <span>{emergencyNameError}</span>
                                    </td>
                                </tr>
                                <tr>
                                    <td>Emergency Contact Number : </td>
                                    <td>
                                        <input type="text" name="emergencyNo" onChange={emergencyNoHandle}></input>
                                    </td>
                                    <td>
                                        <span>{emergencyMobileNoError}</span>
                                    </td>
                                </tr>
                                <tr>
                                    <th colSpan={2}>Employee Professional Details(*Required)</th>
                                </tr>
                                <tr>
                                    <td>Employment Code : </td>
                                    <td>
                                        <input type="text" name="employmentCode" onChange={employmentCodeHandle}></input>
                                    </td>
                                    <td>
                                        <span>{employmentCodeError}</span>
                                    </td>
                                </tr>
                                <tr>
                                    <td>Company Mail : </td>
                                    <td>
                                        <input type="text" name="companyMail" onChange={companyMailHandle}></input>
                                    </td>
                                    <td>
                                        <span>{companyMailError}</span>
                                    </td>
                                </tr>
                                <tr>
                                    <th>Office Address</th>
                                </tr>
                                <tr>
                                    <td colSpan={2}>
                                        <input type="checkbox" id="officeAddress" onChange={officeAddressPrint}></input>Click to auto-update office Address
                                    </td>
                                </tr>
                                <tr>
                                    <td>Office Phone Number : </td>
                                    <td>
                                        <input type="text" id="officePhone" name="officePhone" onChange={officePhoneHandle}></input>
                                    </td>
                                    <td>
                                        <span>{officePhoneError}</span>
                                    </td>
                                </tr>
                                <tr>
                                    <td>Building No : </td>
                                    <td>
                                        <input type="text" id="officeBuildingNo"  name="buildingNo" onChange={buildingNoHandle}></input>
                                    </td>
                                    <td>
                                        <span>{buildingNoError}</span>
                                    </td>
                                </tr>
                                <tr>
                                    <td>Address Line-1 : </td>
                                    <td>
                                        <input type="text" id="officeAddress1" name="officeAddress1" onChange={officeAddress1Handle}></input>
                                    </td>
                                    <td>
                                        <span>{officeAddressLine1Error}</span>
                                    </td>
                                </tr>
                                <tr>
                                    <td>Address Line-2 : </td>
                                    <td>
                                        <input type="text" id="officeAddress2" name="officeAddress2" onChange={officeAddress2Handle}></input>
                                    </td>
                                    <td>
                                        <span>{officeAddressLine2Error}</span>
                                    </td>
                                </tr>
                                <tr>
                                    <td>City : </td>
                                    <td>
                                        <input type="text" id="officeCity" name="officeCity" onChange={officeCityHandle}></input>
                                    </td>
                                    <td>
                                        <span>{officeCityError}</span>
                                    </td>
                                </tr>
                                <tr>
                                    <td>District : </td>
                                    <td>
                                        <input type="text" id="officeDistrict" name="officeDistrict" onChange={officeDistrictHandle}></input>
                                    </td>
                                    <td>
                                        <span>{officeDistrictError}</span>
                                    </td>
                                </tr>
                                <tr>
                                    <td>State : </td>
                                    <td>
                                        <input type="text" id="officeState" name="officeState" onChange={officeStateHandle}></input>
                                    </td>
                                    <td>
                                        <span>{officeStateError}</span>
                                    </td>
                                </tr>
                                <tr>
                                    <td>Pincode : </td>
                                    <td>
                                        <input type="text" id="officePincode" name="officePincode" onChange={officePincodeHandle}></input>
                                    </td>
                                    <td>
                                        <span>{officePincodeError}</span>
                                    </td>
                                </tr>
                                <tr>
                                    <td>Reporting Manager Name : </td>
                                    <td>
                                        <input type="text" name="reportingManagerName" onChange={reportingMangerNameHandle}></input>
                                    </td>
                                    <td>
                                        <span>{reportingManagerNameError}</span>
                                    </td>
                                </tr>
                                <tr>
                                    <td>Reporting Manager Mail : </td>
                                    <td>
                                        <input type="gmail" name="reportingManagerMail" onChange={reportingMangerMailHandle}></input>
                                    </td>
                                    <td>
                                        <span>{reportingManagerMailError}</span>
                                    </td>
                                </tr>
                                <tr>
                                    <td>HR Name : </td>
                                    <td>
                                        <input type="text" name="hrName" onChange={hrNameHandle}></input>
                                    </td>
                                    <td>
                                        <span>{hrNameError}</span>
                                    </td>
                                </tr>
                                <tr>
                                    <td>Previous Conpany Name : </td>
                                    <td>
                                        <input type="text" name="previousCompanyName" onChange={previousCompanyNameHandle}></input>
                                    </td>
                                    <td>
                                        <span>{previousCompanyNameError}</span>
                                    </td>
                                </tr>
                                <tr>
                                    <td>Previous Conpany Joining Date : </td>
                                    <td>
                                        <input type="date" name="previousCompanyJoiningDate" onChange={previousCompanyJoiningDateHandle}></input>
                                    </td>
                                    <td>
                                        <span>{previousCompanyJoiningDateError}</span>
                                    </td>
                                </tr>
                                <tr>
                                    <td>Previous Conpany End Date : </td>
                                    <td>
                                        <input type="date" name="previousCompanyEndDate" onChange={previousCompanyEndDateHandle}></input>
                                    </td>
                                    <td>
                                        <span>{previousCompanyEndDateError}</span>
                                    </td>
                                </tr>
                                <tr>
                                    <td>Present Conpany Joining Date : </td>
                                    <td>
                                        <input type="date" name="presentCompanyJoiningDate" onChange={presentCompanyJoiningDateHandle}></input>
                                    </td>
                                    <td>
                                        <span>{presentCompanyJoiningDateError}</span>
                                    </td>
                                </tr>
                                <tr>
                                    <th colSpan={2}>Employee Project Details(*Optional)</th>
                                </tr>
                                <tr>
                                    <td>Project Code : </td>
                                    <td>
                                        <input type="text" onChange={projectCodeHandle}></input>
                                    </td>
                                </tr>
                                <tr>
                                    <td>Project Name : </td>
                                    <td>
                                        <input type="text" onChange={projectNameHandle}></input>
                                    </td>
                                </tr>
                                <tr>
                                    <td>Project Start Date : </td>
                                    <td>
                                        <input type="date" onChange={projectStartDateHandle}></input>
                                    </td>
                                </tr>
                                <tr>
                                    <td>Project End Date : </td>
                                    <td>
                                        <input type="date" onChange={projectEndDateHandle}></input>
                                    </td>
                                </tr>
                                <tr>
                                    <td>Project Manager Mail : </td>
                                    <td>
                                        <input type="gmail" onChange={projectManagerMailHandle}></input>
                                    </td>
                                </tr>
                                <tr>
                                    <th colSpan={2}>Finance Details(*Required)</th>
                                </tr>
                                <tr>
                                    <td>PAN Card : </td>
                                    <td>
                                        <input type="text" name="pan" onChange={panHandle}></input>
                                    </td>
                                    <td>
                                        <span>{panCardError}</span>
                                    </td>
                                </tr>
                                <tr>
                                    <td>Aaadhaar Number : </td>
                                    <td>
                                        <input type="text" name="aadhaar" onChange={aadhaarHandle}></input>
                                    </td>
                                    <td>
                                        <span>{aadhaarError}</span>
                                    </td>
                                </tr>
                                <tr>
                                    <td>Bank Name : </td>
                                    <td>
                                        <input type="text" name="bankName" onChange={bankNameHandle}></input>
                                    </td>
                                    <td>
                                        <span>{bankNameError}</span>
                                    </td>
                                </tr>
                                <tr>
                                    <td>Branch Name : </td>
                                    <td>
                                        <input type="text" name="branch" onChange={branchHandle}></input>
                                    </td>
                                    <td>
                                        <span>{branchError}</span>
                                    </td>
                                </tr>
                                <tr>
                                    <td>Bank IFSC : </td>
                                    <td>
                                        <input type="text" name="ifsc" onChange={ifscHandle}></input>
                                    </td>
                                    <td>
                                        <span>{ifscError}</span>
                                    </td>
                                </tr>
                                <tr>
                                    <th>Employee CTC</th>
                                </tr>
                                <tr>
                                    <td>Basic pay : </td>
                                    <td>
                                        <input type="text" id="basicPay" name="basicPay" onChange={basicPayHandle}></input>
                                    </td>
                                    <td>
                                        <span>{basicPayError}</span>
                                    </td>
                                </tr>
                                <tr>
                                    <td>Allowances : </td>
                                    <td>
                                        <input type="text" id="allowances" name="allowances" disabled style={{border: "3px solid #ffffff"}}></input>
                                    </td>
                                </tr>
                                <tr>
                                    <td>Provident Fund : </td>
                                    <td>
                                        <input type="text" id="pf" name="pf" disabled style={{border: "3px solid #ffffff"}}></input>
                                    </td>
                                </tr>
                                <tr>
                                    <td>Gratuity Fund : </td>
                                    <td>
                                        <input type="text" id="gf" name="gf" disabled style={{border: "3px solid #ffffff"}}></input>
                                    </td>
                                </tr>
                                <tr>
                                    <td>Bonus : </td>
                                    <td>
                                        <input type="text" id="bonus" name="bonus" disabled style={{border: "3px solid #ffffff"}}></input>
                                    </td>
                                </tr>
                                <tr>
                                    <td colSpan={2}>
                                        <button type="submit">Create</button>
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
export default CreateEmployee;