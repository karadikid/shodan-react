import React, { Component } from 'react';
import Map from './Maps';
import Table from './Table';

class View extends Component {
    constructor(props){
    super(props);
    // this.state = {
    };

    //

    render () {
        return (
            <>
            <div>
                <section>
                <Map {...this.props.subsetArray}/>
                <button>Previous</button> 
                <button>Next</button>
                </section>
                <section>
                <Table {...this.props.subsetArray}/>
                </section>
            </div>
            </>
        );

    }

}

export default View;