import React, { Component } from 'react';

//Columns in React-js
//https://medium.com/@subalerts/create-dynamic-table-from-json-in-react-js-1a4a7b1146ef
//https://plnkr.co/edit/ysN4Qb3lUp9mbqFhumWJ?p=preview
//https://stackoverflow.com/questions/38536399/creating-a-dynamic-table-from-json-response-in-reactjs
//https://jsfiddle.net/combatmonk/7Ldrsg2h/1/

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
    let keys = this.getKeys();
    return keys.map((key, index) => {
        return <th key={key} > {key.toUpperCase()} </th>
    })
    console.log(keys)
}

getRows(){
    let items = this.props.subsetTable;
    let keys = this.getKeys();
    return items.map((row, index) => {
        return <tr key={index}><RenderRow key={index} data={row} keys={row}/></tr>
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
                    <tbody>
                    <tbody> { this.getRows() }</tbody>
                    </tbody>
                </table>
            </div>
            </>
        );
    }
}
    const RenderRow = (props) => {
        return props.keys.map((key, index) => {
        return <td key={props.subsetTable[key]}>{props.subsetTable[key]}</td>
    })
}
export default Table;
