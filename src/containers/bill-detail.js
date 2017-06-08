import React, { Component } from 'react';
import { connect } from 'react-redux';

class BillDetailDesp extends Component {
   
  calculateBill(billDetail){
	  let totalBill=0;
	  billDetail.map((item) => {
        totalBill += item.itemCostSum
      });      
	  return totalBill;
	
	  /*Object.keys(billDetail).forEach(function(key) {
		  totalBill += billDetail[key].itemCostSum;
	  });
	  return totalBill;*/
  }
    
  renderList() {
	return this.props.billDetail.map((item) => {				
		return (	
         <li className = "list-group-item" key = {item.id} >
			{item.id} {item.itemName} Rs. {item.itemCost} X  {item.itemQnty} = {item.itemCostSum}
         </li>		    
      )
    })
  }
	
  render() {
    if(!this.props.billDetail) {	  
      return (
        <h5>Please click "Get Bill" botton for details!</h5>
      );
    }
    return (
	  <div>
		  <h5>Please find below bill details as below:</h5>
		  <ul className="list-group col-md-4">
			{this.renderList()}
			<li className = "list-group-item" >
			    <h3 className="bold">Total Bill:  {this.calculateBill(this.props.billDetail)}</h3>
            </li>
		  </ul>
		  
	  </div>
    );
  }
}

//whatever gets returned from here will be available as props in selected-book
// container
function mapStateToProps({billDetail}) {
  return {
    billDetail
  }
}

export default connect(mapStateToProps)(BillDetailDesp);
