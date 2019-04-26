import React, {Component} from 'react'
import {Link, Redirect} from 'react-router-dom'
import axios from 'axios'
import store, { CLEARSTORE, UPDATEMORTGAGE, UPDATERENT } from '../../store'

export default class Wizard extends Component {
    constructor(props){
        super(props)
        const reduxState = store.getState()
        this.state = {
            mortgage: reduxState.mortgage,
            rent: reduxState.rent
        }
    }

    handleMortgage = (val) => {
        this.setState({mortgage: val})
    }
    
    handleRent = (val) => {
        this.setState({rent: val})
    }

    clearStore = () => {
        store.dispatch({type: CLEARSTORE})
    }

    handleComplete = () => {
        store.dispatch({type: UPDATEMORTGAGE, payload: this.state.mortgage})
        store.dispatch({type: UPDATERENT, payload: this.state.rent})
        let reduxState = store.getState()
        axios.post('/api/wizard', reduxState).then(res => {
            res.status(200).send('ok')
        })
        .catch(err => console.log('error adding new listing: ', err))
    }

    render(){
        let recommended = this.state.mortgage * 1.25
        return (
            <div className='wizard-tower'>
                <header className='wizard-head'>
                    <h1>Add New Listing</h1>
                    <button onClick={() => this.clearStore()}>Cancel</button>
                </header>
                <span>Recommended Rent: ${recommended}</span>
                <div className='wizard-info-field'>
                    <h1>Monthly Mortgage</h1>
                    <input type='number' onChange={(e) => this.handleMortgage(e.target.value)}></input>
                    <h1>Monthly Rent</h1>
                    <input type='number' onChange={(e) => this.handleRent(e.target.value)}></input>
                </div>
                <div className='wizard-complete-container'>
                    <Link to='/wizard2'>
                        <button>Previous</button>
                    </Link>
                    <Link to='/'>
                        <button onClick={() => this.handleComplete()}>Complete</button>
                    </Link>
                </div>
            </div>
        )
    }
}