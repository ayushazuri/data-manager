import {
	aboutMe,
	achievement,
	certification,
	education,
	experience,
	project,
	skill,
} from "./dataReducer";

import changeTheme from "./theme";
import { combineReducers } from "redux";

const rootReducer = combineReducers({
	changeTheme,
	aboutMe,
	skill,
	project,
	education,
	experience,
	certification,
	achievement,
});

export default rootReducer;
