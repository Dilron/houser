import React, {Component} from 'react'
import {Link, Redirect} from 'react-router-dom'
import store, {UPDATENAME, UPDATEADDRESS, UPDATECITY, UPDATESTATE, UPDATEZIP, CLEARSTORE} from '../../store'

export default class Wizard extends Component {
    constructor(props){
        super(props)
        const reduxState = store.getState()
        this.state = {
            name: reduxState.name,
            address: reduxState.address,
            city: reduxState.city,
            state: reduxState.state,
            zip: reduxState.zip
        }
    }

    handleName = (val) => {
        this.setState({name: val})
    }

    handleAddress = (val) => {
        this.setState({address: val})
    }

    handleCity = (val) => {
        this.setState({city: val})
    }

    handleState = (val) => {
        this.setState({state: val})
    }

    handleZip = (val) => {
        this.setState({zip: val})
    }

    handleNext = () => {
        let newHouse = {...this.state}
        store.dispatch({type: UPDATENAME, payload: newHouse.name})
        store.dispatch({type: UPDATEADDRESS, payload: newHouse.address})
        store.dispatch({type: UPDATECITY, payload: newHouse.city})
        store.dispatch({type: UPDATESTATE, payload: newHouse.state})
        store.dispatch({type: UPDATEZIP, payload: newHouse.zip})
        
    }

    clearStore = () => {
        store.dispatch({type: CLEARSTORE})
        
    }

    render(){
        return (
            <div className='wizard-tower'>
                <header className='wizard-head'>
                    <h1>Add New Listing</h1> 
                    <Link to='/'>
                    <button onClick={() => this.clearStore()}>Cancel</button>
                    </Link>   
                </header>
                <div className='wizard-info-fields'>
                    <h1>Property Name</h1>
                    <input value={this.state.name} type='text' onChange={(e) => this.handleName(e.target.value)}></input>
                    <h1>Address</h1>
                    <input value={this.state.address} type='text' onChange={(e) => this.handleAddress(e.target.value)}></input>
                    <div className='wizard-info-subs'>
                        <div>
                            <h1>City</h1>
                            <input value={this.state.city} type='text' onChange={(e) => this.handleCity(e.target.value)}></input>
                        </div>
                        <div>
                            <h1>State</h1>
                            <input value={this.state.state} type='text' onChange={(e) => this.handleState(e.target.value)}></input>
                        </div>
                        <div>
                            <h1>ZIP</h1>
                            <input value={this.state.zip} type='text' onChange={(e) => this.handleZip(e.target.value)}></input>
                        </div>
                    </div>
                </div>
                <div className='wizard-complete-container'>
                    <Link to='/wizard2'>
                    <button onClick={() => this.handleNext()}>Next Step</button>
                    </Link>
                </div>
            </div>
        )
    }
}