var React = require('react');
var ReactDOM = require('react-dom');
require('./index.css');

// Component's properties:
// state
// lifecycle event
// UI -> required

// Component definition
class App extends React.Component { 
    render() {
        return (
            <div>
                Hello React Training!
            </div>
        )
    }
}

ReactDOM.render(
    <App />,
    document.getElementById('app')
);