
const add = (value) => {
	console.log("add is called")
    return { type: 'ADD', payload: value}
}
const minus = (value) => {
    return { type: 'MINUS', payload: value}
}


export default actions