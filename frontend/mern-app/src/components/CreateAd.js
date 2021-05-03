import React, { Component } from 'react'
import './CreateAd.css'
import 'axios'
import axios from 'axios';

const JOB_TYPES = [
    'Full-time',
    'Part-time',
    'Internship',
    'Contract',
    'Temporary',
    'Volunteer'
]

class CreateAd extends Component {
    constructor(){
        super();
        this.state = {
            title: '',
            company: '',
            location: '',
            type: '',
            description: '',
            created_at: new Date().toLocaleDateString()
        }
    }

    handleChange = e =>{
        const {name, value} = e.target;
        this.setState({ [name] : value});

    }

    resetState = () =>{
        this.setState({
            title: '',
            company: '',
            location: '',
            type: '',
            description: '',
            created_at: ''
        })
    }

    onSubmit = e =>{
        e.preventDefault();
        this.setState({created_at: new Date().toLocaleDateString()});
        console.log(this.state);
        const job = this.state;
        this.resetState()
        axios({
            method: 'post',
            url: 'http://localhost:3001/insertAd',
            data: job
        })
        .then(res => console.log(res.data))
        .catch(err => console.log('Error occured '+ err));  
    }


    render(){
        return (
            <div className="my-container">
                <form id="form" onSubmit={this.onSubmit}>
                    <div className="wrap-items">
                        <div className="form-group">
                            <label className="form-label">Title</label>
                            <input 
                                type="text" 
                                name="title" 
                                value={this.state.title} 
                                onChange={this.handleChange} 
                                className="form-control" 
                                placeholder="Brief but specific title"
                            />
                        </div>
                        <div className="form-group">
                            <label className="form-label">Company</label>
                            <input 
                                type="text" 
                                name="company" 
                                value = {this.state.company}
                                onChange = {this.handleChange}
                                className="form-control" 
                                placeholder="Name of company for this job posting"
                            />
                        </div>
                    </div>
                    <div className="wrap-items">
                        <div className="form-group">
                            <label className="form-label">Location</label>
                            <input 
                                type="text" 
                                name="location" 
                                value = {this.state.location}
                                onChange = {this.handleChange}
                                className="form-control"
                                placeholder="City or postal code"
                            />
                        </div>
                        <div className="form-group">
                            <label className="form-label">Which type of job is it?</label>
                            <br/>
                            <select value={this.state.type} name="type" onChange={this.handleChange} className="form-select">
                                {JOB_TYPES.map(type => (
                                    <option key={type} value={type}>{type}</option>
                                ))}</select>
                        </div>
                    </div>
                    <textarea type="text" name="description" value={this.state.description} onChange={this.handleChange} spellCheck="false" placeholder="Job description"/>
                    <input type="submit" className="btn btn-success" value="Save"/>
                </form> 
            </div>
        )
    }
}

export default CreateAd;
