import { Morning, Afternoon, Evening } from "../commons/suns"

const date = new Date()
const hours = date.getHours()

export const Times = () => {
    if (hours >= 0 && hours < 12) {
        return {
            greeting: 'Morning',
            sun: <Morning value={40} />
        }
    } else if (hours >= 12 && hours <= 16) {
        return {
            greeting: 'Afternoon',
            sun: <Afternoon value={40} />
        }
    } else if (hours >= 17 && hours <= 23) {
        return {
            greeting: 'Evening',
            sun: <Evening value={40} />
        }
    }

}