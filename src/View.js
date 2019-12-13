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
                <Map />
                <button>Previous</button> 
                <button>Next</button>
                </section>
                <section>
                <Table />
                </section>
            </div>
            </>
        );

    }

}

export default View;