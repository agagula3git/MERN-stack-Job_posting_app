import React from 'react'
import axios from 'axios'
import JobAd from './JobAd';

class ListOfAds extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            ads: []
        }
    }

    componentDidMount = () =>{
        axios({
            method: 'get',
            url: 'http://localhost:3001/show-ads'
        })
        .then(res => this.setState({ads: res.data}))
        .catch(err => {
            console.log('Error occured '+ err);
        });
    }

    render(){
        return(
            <div>
                {this.state.ads.map(ad =>(
                    <JobAd key={ad._id} props={ad}/>
                ))}
            </div>
        )
    }
}

export default ListOfAds