import { combineReducers } from 'redux'
import { FormCategory, FormDescription, FormAttachFile, FormCheckLocation, FormDescribeLocation, FormSwearCheck, GetAllComplaints } from './form-reducer'

export const rootReducer = combineReducers({
    FormCategory, 
    FormDescription, 
    FormAttachFile, 
    FormCheckLocation, 
    FormDescribeLocation, 
    FormSwearCheck,
    GetAllComplaints
})

export default rootReducer