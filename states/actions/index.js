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
export const locationCheck = () => {
    return {
        type : 'LOCATION_CHECK',
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