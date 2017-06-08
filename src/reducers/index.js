import { combineReducers } from 'redux';
import ItemReducer  from './reducer-items';
import BillDetailReducer  from './bill-detail';

const rootReducer = combineReducers({
  items : ItemReducer,
  billDetail : BillDetailReducer
});

export default rootReducer;
