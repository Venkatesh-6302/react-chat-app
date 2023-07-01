import {Component} from 'react'
import ChatMessage from '../ChatMessage'
import ReactScrollableFeed from 'react-scrollable-feed'
import './index.css'

const userList=["Alen","Bob","Carol","Dean","Elin"]

class ChatBox extends Component{

    state={messagesList:[],message:'',senderName:"Alen"}

    onChangeMessage=event=>{

        this.setState({message:event.target.value})
    }

    sendMessage=(event)=>{
        const {senderName,message}=this.state

        if (message!==""){
        const currentTime = new Date();
           const newData={
            profile:senderName[0],
            name:senderName,
            time:currentTime.getHours() + ":" + currentTime.getMinutes(),
            message:message
           }
           

           this.setState(prevState=>({
            messagesList:[...prevState.messagesList,newData],
            message:'',
            senderName:userList[Math.floor(Math.random() * userList.length)],
           }))
        

    }
}
    render(){
        const {messagesList,message}=this.state
        return(
            <div className='chat-container'>
                <div className='header'>
                    <h3 className='main-heading'>Introduction</h3>
                    <p className='description'>This Channel Is For Company Wide Chatter</p>
                    <hr/>
                </div>
                <div className='chat-body' style={{overflowy:'scrol' ,heigt:'250px'}}>
                    <ReactScrollableFeed>
                    { messagesList.map(data=>(
                    <ChatMessage key={data.id}
                    messageDetails={data}/>
                    ))}
                    </ReactScrollableFeed>
                </div>
                <div className='chat-footer'>

                    <input className='input' type='text' value={message} placeholder='Type Message' onChange={this.onChangeMessage}/>
                    <button className='send-btn' onClick={this.sendMessage}>Send</button>
                </div>
            </div>
        )
    }
}

export default ChatBox
