import * as api from '../api/index'
import configData from '../config.json'

export const login = async (formData, setShowAlert, setAlertMessage) => {
    try{
        const  {data}  = await api.loginIn(formData)
        localStorage.setItem("profile", JSON.stringify(data))
        console.log("data.type: ", data.type);
        if(data.type === 'admin' || data.type === 'admin'){
            window.location.href=configData.ADMIN_DASHBOARD_URL
        }else{
            window.location.href=configData.DASHBOARD_URL
        }
        return data
    }catch(err){
        setShowAlert(true)
        err.response.status === 400 || err.response.status === 401 
        ? setAlertMessage(err.response.data.message) : setAlertMessage("Oops! Something went worng")
        return false
    }
}

export const register = async (formData, setShowAlert, setAlertMessage) => {
    try{
        //registering user to the DB
        const {data} = await api.register(formData)
        login(formData, setShowAlert, setAlertMessage)
        return data
    }catch(err){
        setShowAlert(true)
        err.response.status === 400 || err.response.status === 401
        ? setAlertMessage(err.response.data.message) : setAlertMessage("Oops! Something went worng")
        return false
    }
}

export const logout = () =>{
    localStorage.removeItem("profile");
    window.location.href=configData.LOGIN_URL
}


export const getUser = async (formData, setShowAlert, setAlertMessage) => {
    try{
        //registering user to the DB
        const data = await api.getUser(formData)
        return data
    }catch(err){
        setShowAlert(true)
        err.response.status === 400 || err.response.status === 401
        ? setAlertMessage(err.response.data.message) : setAlertMessage("Oops! Something went worng")
        return false
    }
}

export const getEmailList = async () => {
    try{
        const data = await api.getEmailList()
        return data 
    }catch(err){
        return null 
    }
}

export const deleteUser = async(data, setShowAlert, setAlertMessage) => {
    try{
        const response = await api.deleteUser(data)
        localStorage.removeItem("profile")
        window.location.href=configData.USER_DELETED_URL
    }catch(err){
        setShowAlert(true)
         err.response.status === 400 || err.response.status === 401
         ? setAlertMessage(err.response.data.message) : setAlertMessage("Oops! Something went worng")
        return false
    }
}

export const updatePassword = async (formData, setShowAlert, setAlertMessage, showHomeAlert, homeAlertMessage) => {
    try{
        //registering user to the DB
        const {data} = await api.updatePassword(formData)
        showHomeAlert(true)
        homeAlertMessage("Password Updated Sucessfully!")
        return true
    }catch(err){
        setShowAlert(true)
        err.response.status === 400 || err.response.status === 401
        ? setAlertMessage(err.response.data.message) : setAlertMessage("Oops! Something went worng")
        return false
    }
}


export const editUser = async (formData, setShowAlert, setAlertMessage, showHomeAlert, homeAlertMessage) => {
    try{
        //registering user to the DB
        const {data} = await api.editUser(formData)
        showHomeAlert(true)
        homeAlertMessage("User Updated Sucessfully!")
        return true
    }catch(err){
        setShowAlert(true)
        err.response.status === 400 || err.response.status === 401
        ? setAlertMessage(err.response.data.message) : setAlertMessage("Oops! Something went worng")
        return false
    }
}

export const getUsers = async () => {
    try{
        const data = await api.getUsers()
        return data 
    }catch(err){
        return null 
    }
}

export const adminDeleteUser = async (data, setShowAlert, setAlertMessage) => {
    try{
        const response = await api.adminDeleteUser(data)
        setShowAlert(true)
        response.status === 200
         ? setAlertMessage(response.data.message) : setAlertMessage("Oops! Something went worng")
        return response
    }catch(err){
        // setShowAlert(true)
        // err.response.status === 400 || err.response.status === 401
        //  ? setAlertMessage(err.response.data.message) : setAlertMessage("Oops! Something went worng")
        return false
    }
}