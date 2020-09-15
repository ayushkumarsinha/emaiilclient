import React, { Component } from 'react';

class Spam extends Component{
    constructor(props){
        super(props);
        this.forceUpdateHandler = this.forceUpdateHandler.bind(this);
        this.updateOnClick = this.updateOnClick.bind(this);
    }
    forceUpdateHandler(messages){
        this.props.messageReadUnread(messages.mId);
        this.forceUpdate();
    };

    updateOnClick(messages){
        this.props.messageReadUnreadOnClick(messages.mId);
        this.props.messageClick(messages);
        this.forceUpdate();
    }

    componentDidUpdate(prevProps){
        if(prevProps.spamMessages.length !== this.props.spamMessages.length){
            this.props.checkUnreadEmail();  
        }
    }

    render () {
        return(
            <div>
                {this.props.spamMessages.map((messages, index) => {
                    return(
                        <div key={index}>
                            <div className={'row message-card'}>
                                <div className={messages.unread ? 'message-card-unread' : 'message-card-read'} onClick={() => this.forceUpdateHandler(messages)}></div>
                                <div className='m-l-5 message-card-items h-60' onClick={() => this.updateOnClick(messages)}>
                                    <div className='w-95 m-l-5 fs-12'>{messages.from}</div>
                                    <div className={`w-95 m-l-5 fs-12 ${messages.unread ? 'colorBlue' : ''}`}>
                                        <div className='row m-l-0'>
                                            <div className='row col-md-11 m-l-0 p-l-0'>{messages.subject}</div>
                                            <div className='row col-md-1 displayNone'><span onClick={(e)=>{e.stopPropagation();this.props.deleted(messages,'spam')}}><i className="fa fa-trash trashIcon"></i></span></div>
                                        </div>
                                    </div>
                                    <div className='w-95 m-l-5 fs-12'>
                                        <div className='eleminate-extra'>{messages.content}</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    )
                })}
            </div>
        );
    }
}

export default Spam;