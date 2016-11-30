import React from 'react';
import NavigationBar from './common/navigationBar';
import FlashMessagesList from './flash/FlashMessagesList';
class App extends React.Component{
    render(){
        return (
        	<div className="container">
        	<NavigationBar />
        	<FlashMessagesList/>
        	{this.props.children}
        	</div>
        );
    }
}

export default App;