import { combineReducers } from 'redux'
import { FormCategory, FormDescription, FormAttachFile, FormCheckLocation, FormDescribeLocation, FormSwearCheck } from './form-reducer'

export const rootReducer = combineReducers({
    FormCategory, 
    FormDescription, 
    FormAttachFile, 
    FormCheckLocation, 
    FormDescribeLocation, 
    FormSwearCheck
})

export default rootReducer