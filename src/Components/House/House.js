import React, {Component} from 'react'
import axios from 'axios'
import './House.css'

export default class House extends Component {


    render(){
        return(
            <div className='house-display-container'>
                <img className='house-image' src={this.props.home.img} alt={this.props.home.name}/>
                <div className='house-info-container'>
                    <h1>Property Name: {this.props.home.name}</h1>
                    <h1>Address: {this.props.home.address}</h1>
                    <h1>City: {this.props.home.address} </h1>
                    <h1>State: {this.props.home.state}</h1>
                    <h1>ZIP: {this.props.home.zip}</h1>
                </div>
                <div className='house-cost-container'>
                    <h1>Monthly Mortgage: {this.props.home.mortgage}</h1>
                    <h1>Desired Rent: {this.props.home.rent}</h1>
                </div>
                <img onClick={() => this.props.deleteHouse(this.props.home.id)} src='https://raw.githubusercontent.com/DevMountain/simulation-2/master/assets/delete_button.png' />
            </div>
        )
    }
}