import React, { Component } from 'react';
import styled from 'styled-components';
import { useTable } from 'react-table';

//Columns in React-js
//https://medium.com/@subalerts/create-dynamic-table-from-json-in-react-js-1a4a7b1146ef
//https://plnkr.co/edit/ysN4Qb3lUp9mbqFhumWJ?p=preview
//https://stackoverflow.com/questions/38536399/creating-a-dynamic-table-from-json-response-in-reactjs
//https://jsfiddle.net/combatmonk/7Ldrsg2h/1/
//https://stackoverflow.com/questions/48748803/dynamic-column-and-values-in-react-table

class TableView extends Component {
    constructor(props) {
    super(props);
}

// const columns = Object.keys(response.initial_data[0]).map((key, id)=>{
//     return {
//       Header: key,
//       accessor: key
//     }
//   })


    render () {
        const columns = [
            {
                Header: 'ISP',
                accessor: 'isp'
            },
            {
                Header: 'Data',
                accessor: 'data'
            },
            {
                Header: 'ASN',
                accessor: 'asn'
            },
            {
                Header: 'Port',
                accessor: 'port'
            },
            {
                Header: 'City',
                accessor: 'location/city'
            },
            {
                Header: 'Country',
                accessor: 'location/country'
            }
        ]
        // console.log(this.props.subsetTable)
        return (
            <div>
            <useTable
            columns={columns}
            data={this.props.subsetTable}
            />
            </div>
        );
    }
}



export default TableView;
