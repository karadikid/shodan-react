import React, { Component } from 'react';

//Columns in React-js
//https://medium.com/@subalerts/create-dynamic-table-from-json-in-react-js-1a4a7b1146ef
//https://plnkr.co/edit/ysN4Qb3lUp9mbqFhumWJ?p=preview
//https://stackoverflow.com/questions/38536399/creating-a-dynamic-table-from-json-response-in-reactjs
//https://jsfiddle.net/combatmonk/7Ldrsg2h/1/
//https://stackoverflow.com/questions/48748803/dynamic-column-and-values-in-react-table

class Table extends Component {
    constructor(props) {
    super(props);
    this.getHeaders = this.getHeaders.bind(this);
    this.getRows = this.getRows.bind(this);
    this.getKeys = this.getKeys.bind(this);
}

getKeys(){
    console.log(this.props.subsetTable)
    return Object.keys(this.props.subsetTable);   
}

getHeaders(){
    var keys = this.getKeys();
    return keys.map((key, index) => {
        return <th key={key} > {key.toUpperCase()} </th>
    })
    console.log(keys)
}

getRows(){
    var items = this.props.subsetTable;
    var keys = this.getKeys();
    return items.map((row, index) => {
        return <tr key={index}><RenderRow key={index} subsetTable={row} keys={row}/></tr>
    })
}

    render () {
        return (
            <>
            <div>
                <table>
                    <thead>
                    <tr> { this.getHeaders()} </tr>
                    </thead>
                    <tbody> { this.getRows() }</tbody>
                </table>
            </div>
            </>
        );
    }
}
    const RenderRow = (props) => {
        console.log(props)
    //     return props.keys.map((key, index) => {
    //         return <td key={props.subsetTable[key]}>{props.subsetTable[key]}</td>
    // })
}
export default Table;
