// import { createSlice } from "@reduxjs/toolkit";

// const cartSlice = createSlice({
//   name: "cart",
//   initialState: {
//     item: ["burger", "pizzza"],
//   },
//   reducers: {
//     addItem: (state, action) => {
//       state.item.push(action.payload);
//     },
//     removeItem: (state) => {
//       state.item.pop();
//     },
//     clearCart: (state) => {
//       state.item.length = 0;
//     },
//   },
// });

// export const { addItem, removeItem, clearCart } = cartSlice.actions;
// export default cartSlice.reducer;


import { createSlice } from "@reduxjs/toolkit";

const cartSlice= createSlice({
  name:"cart",
  initialState:{
    items:[]
  },
  reducers:{
    addItem:(state,action)=>{ state.items.push(action.payload)},
     removeItem:(state,action)=>{ state.items.pop()},
     clearCart:(state,action)=>{state.items.length==0}

  }
})


export const {addItem,removeItem,clearCart}=cartSlice.actions
export default cartSlice.reducer