const store = require('./app/store')
const cakeActions = require('./features/cake/cakeSlice').cakeActions
const chocolateActions = require('./features/chocolate/chocolateSlice').chocolateActions
const fetchUsers = require('./features/user/userSlice').fetchUsers

console.log('Initial state ' , store.getState());
const unsubscribe = store.subscribe( () => { console.log("Updated state => ",store.getState())})

store.dispatch(fetchUsers())

/*
store.dispatch(cakeActions.ordered())
store.dispatch(cakeActions.ordered())
store.dispatch(cakeActions.ordered())
store.dispatch(cakeActions.restocked(3))

store.dispatch(chocolateActions.ordered())
store.dispatch(chocolateActions.ordered())
store.dispatch(chocolateActions.restocked(2))

unsubscribe()
*/