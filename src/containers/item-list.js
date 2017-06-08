import React, { Component } from 'react';
import { connect } from 'react-redux';
import { selectItemBill } from '../actions/index';
import { bindActionCreators } from 'redux';

class ItemList extends Component {
  
  constructor(props) {
		super(props);
		this.state = { items: []};
  }
  
  onInputChange(qnty, item) {
      let totalBill=0;
      let iMap= {};
	  let iArr= this.state.items;
	  if(qnty>0){
		    iMap.id=item.id;
		    iMap.itemName=item.itemName;
			iMap.itemCost=item.itemCost;
			iMap.itemQnty=qnty;
			iMap.itemCostSum=qnty * item.itemCost;			
			iArr[item.id]=iMap;
	  }else{
		   delete iArr[item.id];
	  } 
	  this.props.selectItemBill(null);
  }
  
  renderList() {
    return this.props.items.map((item) => {
      return (	     
		 <div key={item.id} className="row">
				<div className="col-sm-2" >{item.itemName}</div>
				<div className="col-sm-2" >Rs. {item.itemCost}</div>
				<div className="col-sm-1" ><input value={this.state.term} onChange={event => this.onInputChange(event.target.value, item)}
				      type="text" id={item.id} className="txtWidth" /></div>
		 </div>	    
      )
    })
  }
  render() {	
    return (
	    <div>	
			<div className="row">
				<div className="col-sm-5 col-th-bill-bgColor"><h5 className="bold header">-:Select Items:-</h5></div>
			</div>
			<div className="row">
				<div className="col-sm-2 col-th-bgColor bold" >Item</div>
				<div className="col-sm-2 col-th-bgColor bold" >Price</div>
				<div className="col-sm-1 col-th-bgColor bold" >Quantity</div>
		    </div>
			<div className="row">
				{this.renderList()}
			</div>	
            <div className="row">
			    <button id="bill" onClick={() => this.props.selectItemBill(this.state.items)}> Get Bill </button>				
			</div>			
		</div>	  
    )
  }
}

//whatever is returned from this function will be available as
// a prop to the book-list container
function mapStateToProps(state) {
  return {
    items:state.items,
	billDetail : state.billDetail
  }
}

//Whatever gets returned from this function will be available as
// a prop to the book-list container
function mapDispatchToProps(dispatch) {
  //Whenever selectBook is called, we need to pass down the action
  //to all the reducers in the application
  return bindActionCreators({selectItemBill : selectItemBill }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(ItemList);
