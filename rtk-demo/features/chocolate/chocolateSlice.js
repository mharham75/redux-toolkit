const createSlice = require('@reduxjs/toolkit').createSlice

const initialState = {
    numOfChocoaltes: 200,
}

const chocolateSlice = createSlice({
    name: 'chocolate',
    initialState,
    reducers: {
        ordered: (state) => {
            state.numOfChocoaltes--
        },
        restocked: (state,action) => {
            state.numOfChocoaltes += action.payload
        }
    },
})

module.exports = chocolateSlice.reducer
module.exports.chocolateActions = chocolateSlice.actions