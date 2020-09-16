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

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.<br />
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.<br />
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br />
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: https://facebook.github.io/create-react-app/docs/code-splitting

### Analyzing the Bundle Size

This section has moved here: https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size

### Making a Progressive Web App

This section has moved here: https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app

### Advanced Configuration

This section has moved here: https://facebook.github.io/create-react-app/docs/advanced-configuration

### Deployment

This section has moved here: https://facebook.github.io/create-react-app/docs/deployment

### `npm run build` fails to minify

This section has moved here: https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify
