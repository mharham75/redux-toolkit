const redux = require('redux')
const createStore = redux.createStore

const combineReducers = redux.combineReducers

const CAKE_ORDERED = 'CAKE_ORDERED'
const CAKE_RESTOCKED = 'CAKE_RESTOCKED'
const CHOCOLATE_ORDERED = 'CHOCOLATE_ORDERED'
const CHOCOLATE_RESTOCKED = 'CHOCOLATE_RESTOCKED'

const cakeOrdered = () => {
    return{
        type: CAKE_ORDERED,
        payload: 1,
    }
}
const cakeRestocked = (qty=1) => {
    return{
        type: CAKE_RESTOCKED,
        payload: qty
    }
}

const chocolateOrder = () => {
    return{
        type: CHOCOLATE_ORDERED,
        payload: 1,
    }
}
const chocolateRestocked = (qty) => {
    return{
        type: CHOCOLATE_RESTOCKED,
        payload: qty,
    }
}

const initialCakeState = {
    numOFCakes: 100,
}

const initialChocolateState = {
    numOfChocolates: 200,
}

const CakeReducer = (state=initialCakeState, action) => {
    switch (action.type) {
        case CAKE_ORDERED: return{
            ...state,
            numOFCakes: state.numOFCakes-1
        }
        case CAKE_RESTOCKED: return{
            ...state,
            numOFCakes: state.numOFCakes+action.payload
        }
        default: return state
    }
}

const ChocolateReducer = (state=initialChocolateState, action) => {
    switch(action.type){
        case CHOCOLATE_ORDERED: return{
            ...state,
            numOfChocolates: state.numOfChocolates-1
        }
        case CHOCOLATE_RESTOCKED: return{
            ...state,
            numOfChocolates: state.numOfChocolates+action.payload,
        }
        default: return state
    }
}

const rootReducer = combineReducers({
    cake: CakeReducer,
    chocolate: ChocolateReducer
})

const store = createStore(rootReducer)
console.log("Initial state => " , store.getState())
const unsubscribe = store.subscribe( () => console.log("Updated state => " , store.getState()))
store.dispatch(cakeOrdered())
store.dispatch(cakeOrdered())
store.dispatch(cakeRestocked(2))
store.dispatch(chocolateOrder())
store.dispatch(chocolateOrder())
store.dispatch(chocolateOrder())
store.dispatch(chocolateRestocked(3))
unsubscribe()