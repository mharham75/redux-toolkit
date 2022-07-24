const redux = require('redux')
const createStore = redux.createStore

const thunkMiddleware = require('redux-thunk').default
const applyMiddleware = redux.applyMiddleware

const axios = require('axios')

const FETCH_USERS_REQUEST = 'FETCH_USERS_REQUEST'
const FETCH_USERS_SUCCESS = 'FETCH_USERS_SUCCESS'
const FETCH_USERS_FAILURE = 'FETCH_USERS_FAILURE'

function fetchUsersRequest(){
    return{
        type: FETCH_USERS_REQUEST,
    }
}

function fetchUsersSuccess(users){
    return{
        type: FETCH_USERS_SUCCESS,
        payload: users,
    }
}

function fetchUsersFailure(err){
    return{
        type: FETCH_USERS_FAILURE,
        payload: err,
    }
}

const fetchUsers = () => {
    return function(dispatch){
        dispatch(fetchUsersRequest())
        axios.get('https://jsonplaceholder.typicode.com/users')
        .then( response => {
            const data = response.data.map( d => d.id)
            dispatch(fetchUsersSuccess(data))
        })
        .catch(err => dispatch(fetchUsersFailure(err.message)))
    }
}

const initialUsersState = {
    loading: false,
    users: [],
    error: ''
}

const userReducer = (state=initialUsersState, action) => {
    switch(action.type){
        case FETCH_USERS_REQUEST: return{
            ...state,
            laoding: true,
        }
        case FETCH_USERS_SUCCESS: return{
            loading: false,
            users: action.payload,
            error: ''
        }
        case FETCH_USERS_FAILURE: return{
            loading: false,
            users: [],
            error: action.payload,
        }
    }
}

const store = createStore(userReducer,applyMiddleware(thunkMiddleware))
console.log("Initial state ", store.getState())
store.subscribe( () => console.log("Updated State " , store.getState()))
store.dispatch(fetchUsers())
