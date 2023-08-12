const days = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat']

const getter = new Date()
export const date = `${days[getter.getDay()]}, 0${getter.getDate()}/0${getter.getMonth()+1}/${getter.getFullYear()}`
