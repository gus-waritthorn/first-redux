import { connect } from 'react-redux'
import App from './App'
import actions from './action'

const mapStateToProps = (state) => {
	console.log("container count")
    return {
        counter: state.counter,
    }
}

const mapDispatchToProps = (dispatch) => {
	console.log("container add and minus is called")
    return {
        increase: () => dispatch(actions.add(1)),
        decrease: () => dispatch(actions.minus(1))
    }
}

const AppContainer = connect(mapStateToProps, mapDispatchToProps)(App)
export default AppContainer