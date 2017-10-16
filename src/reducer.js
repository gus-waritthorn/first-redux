const reducer = (state = { counter: 0}, action) => {
    if(action.type === 'ADD'){
        return { counter: state.counter + action.payload }
    }
    if(action.type === 'MINUS'){
        return { counter: state.counter - action.payload }
    }
    return state
}

export default reducer