import {createStore} from 'redux'
// import {devToolsEnhancer} from 'redux-devtools-extension'


let houseState = {
    name: '',
    address: '',
    city: '',
    state: '',
    zip: 0,
    img: '',
    mortgage: 0,
    rent: 0
}

export const UPDATENAME = 'UPDATENAME'
export const UPDATEADDRESS = 'UPDATEADDRESS'
export const UPDATECITY = 'UPDATECITY'
export const UPDATESTATE = 'UPDATESTATE'
export const UPDATEZIP = 'UPDATEZIP'
export const UPDATEIMG = 'UPDATEIMG'
export const UPDATEMORTGAGE = 'UPDATEMORTGAGE'
export const UPDATERENT = 'UPDATERENT'
export const CLEARSTORE = 'CLEARSTORE'



function reducer(state = houseState, action){
    switch(action.type){
        case UPDATENAME: {
            return {...state, name: action.payload}
        }
        case UPDATEADDRESS: {
            return {...state, address: action.payload}
        }
        case UPDATECITY: {
            return {...state, city: action.payload}
        }
        case UPDATESTATE: {
            return {...state, state: action.payload}
        }
        case UPDATEZIP: {
            return {...state, zip: action.payload}
        }
        case UPDATEIMG: {
            return {...state, img: action.payload}
        }
        case UPDATEMORTGAGE: {
            return {...state, mortgage: action.payload}
        }
        case UPDATERENT: {
            return {...state, rent: action.payload}
        }
        case CLEARSTORE: {
            return {name: '',
            address: '',
            city: '',
            state: '',
            zip: 0,
            img: '',
            mortgage: 0,
            rent: 0}
        }
        default: {
            return state
        }
    }
}

export default createStore(reducer)