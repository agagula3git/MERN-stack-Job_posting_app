import React from 'react'
import axios from 'axios'
import Header from './Header';
import './ViewAd.css'

class ViewAd extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            ad : {}
        }
    }
    
    componentDidMount = () =>{
        console.log(this.props.match.params.id)
        axios({
            method: 'get',
            url: 'http://localhost:3001/show-ads/'+this.props.match.params.id
        })
        .then(res => this.setState({ad: res.data}))
        .catch(err => {
            if(err){
                console.log(err);
            }
        })
    }

    render(){
        return(
            <div className="view-ad">
                <Header/>
                <div className="container ad-details">
                    <div className="d-flex justify-content-between">
                        <div>
                            <span>{this.state.ad.type}</span> / <span>{this.state.ad.location}</span>
                        </div>
                        <div>
                            <span>{this.state.ad.company}</span>
                        </div>
                    </div>
                    <h3>{this.state.ad.title}</h3>
                    <hr/>
                    <div style={{whiteSpace: "pre-line", fontSize: "9pt"}}>
                        {this.state.ad.description}
                    </div>
                    <hr/>
                </div>
            </div>
        )
    }
}

export default ViewAd;
