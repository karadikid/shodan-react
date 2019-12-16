import React, { Component } from 'react';
import Map from './Maps';
import TableView from './TableView';

class View extends Component {
    constructor(props){
    super(props);
    // this.state = {
    };

    render () {
        let items = this.props.subsetKey[this.props.count];
        return (
            <>
            <div>
                <section>
                <Map subsetMap={this.props.subsetKey}/>
                <button onClick={this.props.click} >Previous</button> 
                <button onClick={this.props.otherClick}>Next</button>
                </section>
                <section>
                <TableView subsetTable={this.props.subsetKey}/>
                </section>
            </div>
            </>
        );

    }

}

export default View;