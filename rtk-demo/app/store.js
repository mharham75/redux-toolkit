const configureStore = require('@reduxjs/toolkit').configureStore
//const reduxLogger = require('redux-logger')
const cakeReducer = require('../features/cake/cakeSlice')
const chocolateReducer = require('../features/chocolate/chocolateSlice')
const userReducer = require('../features/user/userSlice')

//const logger = reduxLogger.createLogger()

const store = configureStore({
    reducer: {
        cake: cakeReducer,
        chocolate: chocolateReducer,
        user: userReducer,
    },
    //middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),
})

module.exports = store