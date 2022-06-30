export const FormCategory = (state = '', action) => {
    switch (action.type) {
        case 'FORM_CATEGORY':
            return action.payload
        default: return state
    }
}  

export const FormDescription = (state = '', action) => {
    switch (action.type) {
        case 'FORM_DESCRIPTION':
            return action.payload
        default: return state
    }
}  

export const FormAttachFile = (state = '', action) => {
    switch (action.type) {
        case 'FORM_ATTACH':
            return action.payload
        default: return state
    }
}  

export const FormCheckLocation = (state = false, action) => {
    switch (action.type) {
        case 'LOCATION_CHECK':
            return !state 
        default: return state
    }
}  

export const FormDescribeLocation = (state = '', action) => {
    switch (action.type) {
        case 'LOCATION_DESCRIPTION':
            return action.payload
        default: return state
    }
}  

export const FormSwearCheck = (state = false, action) => {
    switch (action.type) {
        case 'SWEAR_CHECK':
            return !state
        default: return state
    }
}  