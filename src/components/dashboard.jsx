import React, { Component } from 'react';
import Inbox from './inbox.jsx';
import JunkEmail from './junkEmail.jsx';
import spamMessages from './spamMessages.json';
import inboxMessages from './inboxMessages.json';
import Spam from './spamEmail.jsx';
import Deleted from './deleted.jsx';

class Dashboard extends Component{
    constructor(props){
        super(props);
        this.state={
            pageName: 'Outlook Mail',
            isFolderSubMenuOpen: true,
            inbox: false,
            junkEmail: false,
            isMessageDetailsClicked: false,
            mIdContent: '',
            inboxMessages: inboxMessages,
            spamMessages: spamMessages,
            deletedMessages:[],
            spam: false,
            deleted: false,
            messageDetail: '',
            fromSender: '',
            subject: '',
            newInboxMessage: 0,
            newSpamMessage: 0,
            newJunkMessage: 0,
            newDeletedMessage: 0,
            callUpdate: false
        }
        this.reloadPage = this.reloadPage.bind(this);
        this.checkIsFolderSubMenuOpen = this.checkIsFolderSubMenuOpen.bind(this);
        this.inboxHandler = this.inboxHandler.bind(this);
        this.junkEmailHandler = this.junkEmailHandler.bind(this);
        this.messageDetails = this.messageDetails.bind(this);
        this.checkUnreadEmail = this.checkUnreadEmail.bind(this);
        this.markAllAsRead = this.markAllAsRead.bind(this);
        this.deleted = this.deleted.bind(this);
    }

    reloadPage(){
        window.location.reload(false);
    }

    // logic to check for open and close folders tab on left pane
    checkIsFolderSubMenuOpen(){
        this.setState({
            isFolderSubMenuOpen: !this.state.isFolderSubMenuOpen,
            inbox: false,
            spam: false,
            junkEmail: false,
            deleted: false,
            mIdContent: '',
            messageDetail: '',
            fromSender: '',
            subject: ''
        });
    }

    // logic to set flag for click on inbox
    inboxHandler(){
        this.setState({
            inbox: true,
            spam: false,
            junkEmail: false,
            deleted: false,
            mIdContent: '',
            messageDetail: '',
            fromSender: '',
            subject: ''
        });
    }
    
    // logic to set flag for click on junk/Custom
    junkEmailHandler(){
        this.setState({
            inbox: false,
            spam: false,
            junkEmail: true,
            deleted: false,
            mIdContent: '',
            messageDetail: '',
            fromSender: '',
            subject: ''
        });
    }

    // logic to set flag for click on spam
    spamEmailHandler(){
        this.setState({
            inbox: false,
            spam: true,
            junkEmail: false,
            deleted: false,
            mIdContent: '',
            messageDetail: '',
            fromSender: '',
            subject: ''
        });
    }

    // logic to set flag for click on deleted
    deletedHandler(){
        this.setState({
            inbox: false,
            spam: false,
            junkEmail: false,
            deleted: true,
            mIdContent: '',
            messageDetail: '',
            fromSender: '',
            subject: ''
        });
    }

    // logic to set message details in the details view on right
    messageDetails(message){
        this.setState({
            isMessageDetailsClicked: true,
            mIdContent: message.content,
            fromSender: message.from,
            subject: message.subject
        })
    }

    // logic to set color for unread message by click on message item card
    messageReadUnread(readUnreadId){
        if(this.state.inbox){
            const msg = [...this.state.inboxMessages];
            const tempMessage = msg.filter(m=>m.mId===readUnreadId);
            tempMessage[0].unread = !tempMessage[0].unread;
            this.setState({
                inboxMessages: msg
            });
        }
        if(this.state.spam){
            const msg = [...this.state.spamMessages];
            const tempMessage = msg.filter(m=>m.mId===readUnreadId);
            tempMessage[0].unread = !tempMessage[0].unread;
            this.setState({
                spamMessages: msg
            });
        }
        if(this.state.deleted){
            const msg = [...this.state.deletedMessages];
            const tempMessage = msg.filter(m=>m.mId===readUnreadId);
            tempMessage[0].unread = !tempMessage[0].unread;
            this.setState({
                deletedMessages: msg
            });
        }
        this.checkUnreadEmail();
        this.forceUpdate();
    }

    // logic to set color for unread message by click on blue/white bar for unread and read respectively
    messageReadUnreadOnClick(readUnreadId){
        if(this.state.inbox){
            const msg = [...this.state.inboxMessages];
            const tempMessage = msg.filter(m=>m.mId===readUnreadId);
            tempMessage[0].unread = false;
            this.setState({
                inboxMessages: msg,
                mIdContent: '',
                messageDetail: '',
                fromSender: '',
                subject: ''
            });
        }
        if(this.state.spam){
            const msg = [...this.state.spamMessages];
            const tempMessage = msg.filter(m=>m.mId===readUnreadId);
            tempMessage[0].unread = false;
            this.setState({
                spamMessages: msg,
                mIdContent: '',
                messageDetail: '',
                fromSender: '',
                subject: ''
            });
        } 
        if(this.state.deleted){
            const msg = [...this.state.deletedMessages];
            const tempMessage = msg.filter(m=>m.mId===readUnreadId);
            tempMessage[0].unread = false;
            this.setState({
                deletedMessages: msg,
                mIdContent: '',
                messageDetail: '',
                fromSender: '',
                subject: ''
            });
        }
        this.checkUnreadEmail();       
        this.forceUpdate();
    }

    // logic to check count of unread messages on left pane
    checkUnreadEmail(){
        const unreadInbox = this.state.inboxMessages && this.state.inboxMessages.filter(m=>m.unread).length;
        this.setState({
            newInboxMessage: unreadInbox
        });

        const unreadSpam = this.state.spamMessages && this.state.spamMessages.filter(m=>m.unread).length;
        this.setState({
            newSpamMessage: unreadSpam
        });

        const unreadJunk = this.state.junkMessages && this.state.junkMessages.filter(m=>m.unread).length;
        this.setState({
            newJunkMessage: unreadJunk
        });

        const unreadDeleted = this.state.deletedMessages && this.state.deletedMessages.filter(m=>m.unread).length;
        this.setState({
            newDeletedMessage: unreadDeleted
        });

    }

    // logic to mark all messages as read on click of 'Mark all as read' on header sub-menu
    markAllAsRead(){
        const unreadInbox = this.state.inboxMessages && this.state.inboxMessages.filter(m=>m.unread);
        for (let index = 0; index < unreadInbox.length; index++) {
            const element = unreadInbox[index];
            const msg = [...this.state.inboxMessages];
            const tempMessage = msg.filter(m=>m.mId===element.mId);
            tempMessage[0].unread = false;
            this.setState({
                inboxMessages: msg,
                mIdContent: '',
                messageDetail: '',
                fromSender: '',
                subject: ''
            });
        }

        const unreadSpam = this.state.spamMessages && this.state.spamMessages.filter(m=>m.unread);
        for (let index = 0; index < unreadSpam.length; index++) {
            const element = unreadSpam[index];
            const msg = [...this.state.spamMessages];
            const tempMessage = msg.filter(m=>m.mId===element.mId);
            tempMessage[0].unread = false;
            this.setState({
                spamMessages: msg,
                mIdContent: '',
                messageDetail: '',
                fromSender: '',
                subject: ''
            });
        }

        const unreadJunk = this.state.junkMessages && this.state.junkMessages.filter(m=>m.unread);
        if (unreadJunk){
            for (let index = 0; index < unreadJunk.length; index++) {
                const element = unreadJunk[index];
                const msg = [...this.state.junkMessages];
                const tempMessage = msg.filter(m=>m.mId===element.mId);
                tempMessage[0].unread = false;
                this.setState({
                    junkMessages: msg,
                    mIdContent: '',
                    messageDetail: '',
                    fromSender: '',
                    subject: ''
                });
            }
        }

        const unreadDeleted = this.state.deletedMessages && this.state.deletedMessages.filter(m=>m.unread);
        if (unreadDeleted){
            for (let index = 0; index < unreadDeleted.length; index++) {
                const element = unreadDeleted[index];
                const msg = [...this.state.deletedMessages];
                const tempMessage = msg.filter(m=>m.mId===element.mId);
                tempMessage[0].unread = false;
                this.setState({
                    deletedMessages: msg,
                    mIdContent: '',
                    messageDetail: '',
                    fromSender: '',
                    subject: ''
                });
            }
        }

        this.checkUnreadEmail();
    }

    //// logic to remove messages from inbox/spam folder to deleted and from deleted to completely remove 
    //// on click of trash icon
    deleted(message, mailBox){        
        switch(mailBox){
            case 'inbox':
                const restInboxMessage = [...this.state.inboxMessages]
                const inboxMess = restInboxMessage && restInboxMessage.length > 0 && restInboxMessage.filter(m=>m.mId !== message.mId);
                this.setState({
                    inboxMessages: inboxMess,
                    deletedMessages: [...this.state.deletedMessages, message]
                });
                break;
            case 'spam':
                const restSpamMessage = [...this.state.spamMessages]
                const spamMess = restSpamMessage && restSpamMessage.length > 0 && restSpamMessage.filter(m=>m.mId !== message.mId);
                this.setState({
                    spamMessages: spamMess,
                    deletedMessages: [...this.state.deletedMessages, message]
                });
                break;
            case 'deleted':
                const restdelMessage = [...this.state.deletedMessages]
                const delMess = restdelMessage && restdelMessage.length > 0 && restdelMessage.filter(m=>m.mId === message.mId);
                restdelMessage.splice(delMess[0].mId,1);
                this.setState({
                    deletedMessages: restdelMessage,
                    mIdContent: '',
                    messageDetail: '',
                    fromSender: '',
                    subject: ''
                });
                break;
            default: 
                break;
        }
        this.checkUnreadEmail();              
        this.forceUpdate();
    }

    // logic to check for unread messages on mounting
    componentDidMount(){
        this.checkUnreadEmail();
    }
    
    render () {
        return(
            <div>
                <div className='row col-12 col-md-12 dashboard-header'>
                    <div className='row col-11 col-md-11'>
                        <div className='dashboard-header-menu' onClick={() => this.reloadPage()}>
                            <i className='outlookHome fa fa-th'></i>
                        </div>
                        <div className='dashboard-header-pagename'>
                            {this.state.pageName}
                        </div>
                    </div>
                    <div className='row col-1 col-md-1 dashboard-header-newMailNotification'>
                        <div className='messageIcon-boxing'>
                            <i className='messageIcon fa fa-comments'></i>
                        </div>
                    </div>
                </div>
                <div className='dashboard-body col-md-12'>
                   <div className='row dashboard-header-menu-items'>
                        <div className='col-md-2 dashboard-header-menu-itemsLeft'>
                            <div className=''>
                                <input type='textbox' className='dashboard-header-searchBox' placeholder='Search Mail' />
                                <i className="fa fa-search fa-flip-horizontal searchIcon"></i>
                            </div>
                            <div className=''>
        
                            </div>
                        </div>
                        <div className='col-md-10 dashboard-header-menu-itemsRight'>
                            <div className='row col-md-12'>
                                <div className='col-md-1'>
                                    <div className='row dashboard-header-header-item'>
                                        <div>
                                            <i className="fa fa-plus-circle fa-flip-horizontal searchIcon"></i>
                                        </div>
                                        <div className='p-l-5'>
                                            New
                                        </div>
                                    </div>
                                </div>
                                <div className='col-md-2'>
                                    <div className='row dashboard-header-header-item' onClick={() => this.markAllAsRead()}>
                                        <div>
                                            <i className="fa fa-envelope-open searchIcon"></i>
                                        </div>
                                        <div className='p-l-5'>
                                            Mark all as read
                                        </div>
                                    </div>            
                                </div>
                            </div>
                        </div>
                   </div>
                </div>
                <div className='dashboard-body col-md-12'>
                   <div className='row full-height'>
                        <div className='col-md-2 dashboard-body-content dashboard-body-menu-itemsLeft'>
                            <div className=''>
                                <label text='Folders' className='dashboard-body-menu-itemsLeft-each'>
                                    <div onClick={() => this.checkIsFolderSubMenuOpen()}>
                                        <i className={this.state.isFolderSubMenuOpen ? 'fa fa-angle-down' : 'fa fa-angle-up'}></i> Folders
                                    </div>
                                </label>
                                {this.state.isFolderSubMenuOpen && <div className={`p-l-5-percent dashboard-body-submenu-items${this.state.inbox ? ' dashboard-header-submenu-items-selected':' dashboard-header-submenu-items-unselected'}`}>
                                    <ul className='dashboard-body-menu-itemsLeft-each' 
                                        onClick={() => this.inboxHandler()}>Inbox {this.state.newInboxMessage > 0 ? <span>({this.state.newInboxMessage})</span> : ''}</ul>
                                </div>}
                                {this.state.isFolderSubMenuOpen && <div className={`p-l-5-percent dashboard-body-submenu-items${this.state.junkEmail ? ' dashboard-header-submenu-items-selected':' dashboard-header-submenu-items-unselected'}`}>
                                    <ul className='dashboard-body-menu-itemsLeft-each' 
                                        onClick={() => this.junkEmailHandler()}>Custom {this.state.newJunkMessage > 0 ? <span>({this.state.newJunkMessage})</span> : ''}</ul>
                                </div>}
                                {this.state.isFolderSubMenuOpen && <div className={`p-l-5-percent dashboard-body-submenu-items${this.state.spam ? ' dashboard-header-submenu-items-selected':' dashboard-header-submenu-items-unselected'}`}>
                                    <ul className='dashboard-body-menu-itemsLeft-each' 
                                        onClick={() => this.spamEmailHandler()}>Spam {this.state.newSpamMessage > 0 ? <span>({this.state.newSpamMessage})</span> : ''}</ul>
                                </div>}
                                {this.state.isFolderSubMenuOpen && <div className={`p-l-5-percent dashboard-body-submenu-items${this.state.deleted ? ' dashboard-header-submenu-items-selected':' dashboard-header-submenu-items-unselected'}`}>
                                    <ul className='dashboard-body-menu-itemsLeft-each' 
                                        onClick={() => this.deletedHandler()}>Deleted {this.state.newDeletedMessage > 0 ? <span>({this.state.newDeletedMessage})</span> : ''}</ul>
                                </div>}
                            </div>
                            <div className=''>
        
                            </div>
                        </div>
                        <div className='col-md-3 dashboard-body-content dashboard-body-menu-itemsRight' >
                            {this.state.inbox && 
                                <Inbox 
                                    inboxMessages={this.state.inboxMessages} 
                                    messageClick={(message)=>this.messageDetails(message)} 
                                    messageReadUnread={(readUnreadId)=>this.messageReadUnread(readUnreadId)}
                                    messageReadUnreadOnClick={(readUnreadId)=>this.messageReadUnreadOnClick(readUnreadId)}
                                    deleted={(deletedItem, mailBox)=>this.deleted(deletedItem, mailBox)}
                                    checkUnreadEmail={()=>this.checkUnreadEmail()}/>}
                            {this.state.junkEmail && <JunkEmail />}
                            {this.state.spam && 
                                <Spam 
                                    spamMessages={this.state.spamMessages} 
                                    messageClick={(message)=>this.messageDetails(message)} 
                                    messageReadUnread={(readUnreadId)=>this.messageReadUnread(readUnreadId)}
                                    messageReadUnreadOnClick={(readUnreadId)=>this.messageReadUnreadOnClick(readUnreadId)}
                                    deleted={(deletedItem, mailBox)=>this.deleted(deletedItem, mailBox)}
                                    checkUnreadEmail={()=>this.checkUnreadEmail()}/>}
                            {this.state.deleted && 
                                <Deleted 
                                    deletedMessages={this.state.deletedMessages} 
                                    messageClick={(message)=>this.messageDetails(message)} 
                                    messageReadUnread={(readUnreadId)=>this.messageReadUnread(readUnreadId)}
                                    messageReadUnreadOnClick={(readUnreadId)=>this.messageReadUnreadOnClick(readUnreadId)}
                                    deleted={(deletedItem, mailBox)=>this.deleted(deletedItem, mailBox)}
                                    checkUnreadEmail={()=>this.checkUnreadEmail()}/>}
                        </div>
                        <div className='col-md-7 dashboard-body-content dashboard-body-menu-itemsRight-details'>
                            {this.state.mIdContent !== '' ? 
                            <div>
                                <div className='senderFrom'>
                                    <label text='From'>From : {this.state.fromSender}</label>
                                </div>
                                <div className='senderFrom subject'>
                                    <label text='Subject'>Subject : {this.state.subject}</label>
                                </div>
                                <div className='messagebody'>
                                    <label>{this.state.mIdContent}</label>
                                </div>
                            </div>
                            : ''}
                        </div>
                   </div>
                </div>
            </div>
        );
    }
}

export default Dashboard;