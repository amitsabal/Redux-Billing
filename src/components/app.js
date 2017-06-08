import React from 'react';
import { Component } from 'react';
import ItemList from '../containers/item-list';
import BillDetailDesp from '../containers/bill-detail';

export default class App extends Component {
  render() {
    return (
      <div>
        <ItemList />
		<br/>
        <BillDetailDesp />
      </div>
    );
  }
}
