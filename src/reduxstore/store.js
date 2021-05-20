import {createStore,applyMiddleware} from "redux"
import demo from "./reducer"
//import {FirstMiddleWare} from "./middleware"
import {logger} from "./middleware"

var middlewares=applyMiddleware(logger)

export default createStore(demo,middlewares)
/*var store =createStore(demo)*/

// store.dispatch({
//     type:"login"
// })

// console.log("...........",store.getState())

// store.dispatch({
//     type:"LOGIN",
//     payload:{email:"13psathwane@gmail.com" , name:"prajakta"}
// })//parameter action
// // //action are plane js objects with key known as type
//  console.log("............after login match",store.getState())

/*export default store*/