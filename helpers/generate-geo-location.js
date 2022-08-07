import axios from 'axios'


export default function getLocation() {
    const success = (position) => {
        const latitude = position.coords.latitude
        const longitude = position.coords.longitude
        const url = `https://api.bigdatacloud.net/data/reverse-geocode-client?latitude=${latitude}&longitude=${longitude}&localityLanguage=en` 
        let location
        axios.get(url)
        .then(res => {
           location = res.data
           return location
        })
        .catch(err => console.log(err))
    }
    
    const error = () => {
        return 'Could not retrieve location.'
    }
    console.log(navigator.geolocation.getCurrentPosition(success, error));

}