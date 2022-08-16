import React from 'react'
import { Police, Fire, Ambulance, Nadmo  } from '../commons/partners'
import { Flag } from '../commons/flag'


const AgencyIcon = ({type}) => {
    if (type === 'Ghana Police Service'){
        return (<Police value={40} />)
    }else if (type === 'Ghana Fire Service'){
        return (<Fire value={40}/>)
    }else if (type === 'Ghana Ambulance Service'){
        return (<Ambulance value={40} />)
    }else if (type === 'Ghana Nadmo Service'){
        return (<Nadmo value={40}/>)
    }else{
        return (<Flag/>)
    }
}

export default AgencyIcon