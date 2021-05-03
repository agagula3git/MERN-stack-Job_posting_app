import React from 'react'
import './JobAd.css'
import { Link } from 'react-router-dom'

export default function JobAd({props}) {
    return (
        <div className="card-ad">
            <div className="d-flex justify-content-between">
                <div>
                    <Link to={`/show-one/${props._id}`}>
                        <div id="title">
                            {props.title}
                        </div>
                    </Link>
                        <div id="company-name">
                        {props.company} - <span id="type">{props.type}</span>
                        </div>
                </div>
                <div className="info-add">
                    <div id="location">
                        {props.location}
                    </div>
                    <div id="created_at">
                        {props.created_at}
                    </div>
                </div>
            </div>
        </div>
    )
}
