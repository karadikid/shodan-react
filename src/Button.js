import React, { Component } from 'react';

class Button extends Component {

render (){
    return(
        <div>
        <button onClick={this.props.click}>
            DONT PRESS YET
        </button>
        </div>
    );
}

}

export default Button;