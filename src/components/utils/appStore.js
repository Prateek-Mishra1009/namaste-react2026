// // import { configureStore } from "@reduxjs/toolkit";

// // const appStore= configureStore({

// // })

// // export default appStore

// import { configureStore, createSlice } from "@reduxjs/toolkit";
//    import cardreducer from "./cartSlice"
// const appStore= configureStore({
//     reducers:{
//         cart:cardreducer
//     }
// })

// export default appStore


import { configureStore, createSlice } from "@reduxjs/toolkit";
import cardreducer from "./cartSlice"
const appStore= configureStore({

    reducer:{
        cart:cardreducer
    }
})

export default appStore