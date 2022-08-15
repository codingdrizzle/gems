export const formCategory = (value) => {
    return {
        type : 'FORM_CATEGORY',
        payload: value
    }
}
export const formDescription = (value) => {
    return {
        type : 'FORM_DESCRIPTION',
        payload: value
    }
}
export const formAttach = (value) => {
    return {
        type : 'FORM_ATTACH',
        payload: value
    }
}
export const locationCheck = (value) => {
    return {
        type : 'LOCATION_CHECK',
        payload: value
    }
}
export const locationDescription = (value) => {
    return {
        type : 'LOCATION_DESCRIPTION',
        payload: value
    }
}
export const swearCheck = () => {
    return {
        type : 'SWEAR_CHECK',
    }
}
export const getComplaints = (value) => {
    return {
        type : 'COMPLAINTS',
        payload: value
    }
}