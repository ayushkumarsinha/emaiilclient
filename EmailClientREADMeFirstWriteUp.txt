Steps to run the application:
	Download files from "https://github.com/ayushkumarsinha/emailclient.git"
	In terminal type: 
		npm install
		npm install webpack@4.42.0 --save-dev
		npm start

Implemented features:
	On header:
		name of the application as 'Outlook Mail'
		click on blue icon top left with 9 dots to reload entire data
	On sub-header:
		search box : functionality not implemented
		new item : functionality not implemented
		Mark all as read : marks all items as read in all sub-folders(inbox/spam/custom/deleted)
	On left pane:
		click on down arrow next to 'Folders' to show or hide items
		number of unread messages in each sub-folder(inbox/spam/custom/deleted)
		click on each sub-folder(inbox/spam/custom/deleted) to to se respective messages
	On middle pane: 
		messages will show if any of the sub-folder(inbox/spam/custom/deleted) is clicked
		for unread messages, blue bar on left with subject in blue will be shown
		clickable blue bar to mark as read/unread that message
		click on any unread message to mark it as read and see the details on the right(details) pane
		click on delete icon on on any message to move that message to deleted folder
		if message is unread and deleted, the unread count will decrease from that sub folder
		if message is unread and deleted from deleted messages, the unread count will decrease and the message disappears
	On right pane:
		this is a details pane to see the details of the message if clicked from the middle pane


Note: Due to regular office, the complete design and functionality is implemented in 8hrs of coding time.