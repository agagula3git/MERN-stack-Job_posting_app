import React from 'react'
import CreateAd from './CreateAd'
import Header from './Header'
import './PostAdPage.css'

export default function PostAdPage() {
    return (
        <div className="post-page">
            <Header/>
            <CreateAd/>
        </div>
    )
}
