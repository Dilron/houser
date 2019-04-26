import React, {Component} from 'react'
import {Link, Redirect} from 'react-router-dom'
import axios from 'axios'
import store, { CLEARSTORE, UPDATEIMG } from '../../store'

export default class Wizard extends Component {
    constructor(props){
        super(props)
        const reduxState = store.getState()
        this.state = {
            img: reduxState.img
        }
    }

    handleImg = (val) => {
        this.setState({img: val})
    }

    clearStore = () => {
        store.dispatch({type: CLEARSTORE})
        
    }

    handleNext = () => {
        store.dispatch({type: UPDATEIMG, payload: this.state.img})
        
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
                <div className='wizard-info-field'>
                    <h1>Image URL</h1>
                    <input value={this.state.img} type='text' onChange={(e) => this.handleImg(e.target.value)}></input>
                </div>
                <div className='wizard-complete-container'>
                    <Link to='/wizard1'>
                        <button>Previous</button>
                    </Link>
                    <Link to='/wizard3'>
                    <button onClick={() => this.handleNext()}>Next Step</button>
                    </Link>
                </div>
            </div>
        )
    }
}