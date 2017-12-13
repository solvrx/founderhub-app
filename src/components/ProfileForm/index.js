import React, { Component } from 'react';
import firebase from "../../constants/firebase";

class ProfileForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            profile: {}
        }
    }

    createProfile = event => {
        event.preventDefault();
        firebase
          .database()
          .ref(`/profiles/${firebase.auth().currentUser.uid}`)
          .set(this.state);
      };
    
      onChange = (key, value) => {
        this.setState({ [key]: value });
      };
    
      render() {
        return (
          <form onSubmit={this.createProfile.bind(this)}>
            <label htmlFor="first-name">First Name</label>
            <input
              type="text"
              name="first-name"
              id="first-name"
              ref="first-name"
              value={this.state.firstName}
              onChange={e => this.onChange("firstName", e.target.value)}
            />
            <label htmlFor="last-name">Last Name</label>
            <input
              type="text"
              name="last-name"
              id="last-name"
              ref="last-name"
              value={this.state.lastName}
              onChange={e => this.onChange("lastName", e.target.value)}
            />
            <label htmlFor="user-description">Description</label>
            <textarea
              name="user-description"
              id="user-description"
              cols="30"
              rows="10"
              value={this.state.userDescription}
              onChange={e => this.onChange("userDescription", e.target.value)}
            />
            <label htmlFor="business-name">Business Name</label>
            <input
              type="text"
              name="business-name"
              id="business-name"
              ref="business-name"
              value={this.state.businessName}
              onChange={e => this.onChange("businessName", e.target.value)}
            />
            <label htmlFor="business-address1">Address</label>
            <input
              type="text"
              name="business-address1"
              id="business-address1"
              ref="business-address1"
              value={this.state.address1}
              onChange={e => this.onChange("address1", e.target.value)}
            />
             <input
              type="text"
              name="business-address2"
              id="business-address2"
              ref="business-address2"
              value={this.state.address2}
              onChange={e => this.onChange("address2", e.target.value)}
            />  
            <input
              type="text"
              name="business-city"
              id="business-city"
              ref="business-city"
              value={this.state.city}
              onChange={e => this.onChange("city", e.target.value)}
            />     
            <input
              type="text"
              name="business-state"
              id="business-state"
              ref="business-state"
              value={this.state.state}
              onChange={e => this.onChange("state", e.target.value)}
            /> 
            <input
              type="text"
              name="business-zipCode"
              id="business-zipCode"
              ref="business-zipCode"
              value={this.state.zipCode}
              onChange={e => this.onChange("zipCode", e.target.value)}
            /> 
            <input 
                type="tel" 
                name="business-phoneNumber" 
                id="business-phoneNumber"
                ref="business-phoneNumber"
                value={this.state.phoneNumber}
                onChange={e => this.onChange("phoneNumber", e.target.value)}
              
            />
            <input 
                type="email" 
                name="business-email" 
                id="business-email"
                ref="business-email"
                value={this.state.email}
                onChange={e => this.onChange("email", e.target.value)}
            />
            <button type="submit">Save</button>
          </form>
        );
      }
}

export default ProfileForm;