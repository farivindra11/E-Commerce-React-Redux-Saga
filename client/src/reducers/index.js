import { combineReducers } from 'redux'
import add from './add'
import detailAdd from './detailAdd'

export default combineReducers({
  add,
  detailAdd
})