import React from 'react';
import Chat from './chat'
import { Link } from 'react-router'
import io from 'socket.io-client'
var socket = io.connect();

class MainPage extends React.Component {

    onClick(val) {
        // call the server-side function 'adduser' and send one parameter (value of prompt)
        socket.emit('adduser', val);
    }

	render()
	{
		return (
			<div>
				<h1> There u are!</h1>
                <ul>
                <li><Link to="/chat" onClick={this.onClick.bind(this, "room1")}>room1</Link></li>
                <li><Link to="/chat" onClick={this.onClick.bind(this, "room2")}>room2</Link></li>
                </ul>
			</div>
		);
	}
}

export default MainPage;