/*
直接更新state的多个方法的对象
 */
import {
  RECEIVE_ADDRESS,
  REVEIVE_CATEGORYS,
  REVEIVE_SHOPS
} from './mutation-type'
export default {
  [RECEIVE_ADDRESS] (state,{address}){
    state.address=address
  },

  [REVEIVE_CATEGORYS] (state,{categorys}){
    state.categorys=categorys
  },

  [REVEIVE_SHOPS] (state,{shops}){
    state.shops=shops
  }
}
