import React, {Component} from 'react'
import House from '../House/House'
import './Dashboard.css'
import axios from 'axios'
import {Link} from 'react-router-dom'
import store from '../../store'

export default class Dashboard extends Component{
    constructor(props){
        super(props)
        this.state = {
            homes: []
        }
    }

    componentDidMount() {
        store.subscribe(() => {
            axios.get('/api/houses').then(res => {
                this.setState({homes: res.data})
            })
            .catch(err => console.log('error in component did mount get houses: ', err))
        })
        axios.get('/api/houses').then(res => {
            this.setState({homes: res.data})
        })
        .catch(err => console.log('error in component did mount get houses: ', err))
    }

    deleteHouse = (id) => {
        axios.delete(`/api/houses/${id}`).then(res => {
            console.log('house gone now')
        })
        .catch(err => console.log('could not house gone: ', err))
        axios.get('/api/houses').then(res => {
            this.setState({homes: res.data})
        })
        .catch(err => console.log('error in component did mount get houses: ', err))
    }

    render(){
        return(
            <div className='dash-container'>
                <header className='dash-header'>
                    <h1>Dashboard</h1>
                    <Link to='/wizard1'>
                        <button>Add New Property</button>
                    </Link>
                </header>
                <h1 className='listing-container-title'>Home Listings</h1>
                <div className='listings-container'>
                    {this.state.homes.map(ele => {
                        return <House key={ele.id} home={ele} deleteHouse={this.deleteHouse}/>
                    })}
                </div>
            </div>
        )
    }
}