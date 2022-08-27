import { combineReducers } from 'redux'
import { FormCategory, FormDescription, FormAttachFile, FormCheckLocation, FormDescribeLocation, FormSwearCheck, GetAllComplaints, GetUser } from './form-reducer'

export const rootReducer = combineReducers({
    FormCategory, 
    FormDescription, 
    FormAttachFile, 
    FormCheckLocation, 
    FormDescribeLocation, 
    FormSwearCheck,
    submissions: GetAllComplaints,
    user: GetUser
})

export default rootReducer