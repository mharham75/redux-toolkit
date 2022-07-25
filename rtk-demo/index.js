const store = require('./app/store')
const cakeActions = require('./features/cake/cakeSlice').cakeActions
const chocolateActions = require('./features/chocolate/chocolateSlice').chocolateActions

console.log('Initial state ' , store.getState());
const unsubscribe = store.subscribe( () => {})
store.dispatch(cakeActions.ordered())
store.dispatch(cakeActions.ordered())
store.dispatch(cakeActions.ordered())
store.dispatch(cakeActions.restocked(3))

store.dispatch(chocolateActions.ordered())
store.dispatch(chocolateActions.ordered())
store.dispatch(chocolateActions.restocked(2))

unsubscribe()