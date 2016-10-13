import { combineReducers } from 'redux'
import { routerReducer } from 'react-router-redux'

/*import { page } from './page'*/

const app = combineReducers({
	routing: routerReducer,
	/*page*/
})

export default app;