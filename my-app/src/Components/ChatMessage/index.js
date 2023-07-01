import { Component } from 'react'
import './index.css'

class ChatMessage extends Component {

    state={likeCount:0}

    likeBtn=()=>{

        this.setState(prevState=>({likeCount:prevState.likeCount+1}))
    }
    
    render (){
    const {messageDetails}=this.props 
    const {profile,name,time,message}=messageDetails
    const {likeCount}=this.state
    return (
        <div className='container'>
            <div className='profile-name-container'>
                <div className="profile-container">
                    <p>{profile}</p>
                </div>
            <div className='name-time-container'>
                    <h2 className='name'>{name}</h2>
                    <p className='time'>{time}</p>
                </div>
            </div>
            <div className='msg-like-container'>
                <div className='message'>
                    <p>{message}</p>
                </div>
                <button className='linke-btn' onClick={this.likeBtn}>Likes</button>
                <p className='like-count'>{likeCount}</p>
            </div>
            
        </div>
       
    )
}
}

export default ChatMessage