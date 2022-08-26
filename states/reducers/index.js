import { combineReducers } from 'redux'
import { FormCategory, FormDescription, FormAttachFile, FormCheckLocation, FormDescribeLocation, FormSwearCheck, GetAllComplaints, GetUserID } from './form-reducer'

export const rootReducer = combineReducers({
    FormCategory, 
    FormDescription, 
    FormAttachFile, 
    FormCheckLocation, 
    FormDescribeLocation, 
    FormSwearCheck,
    submissions: GetAllComplaints,
    userID: GetUserID
})

export default rootReducer