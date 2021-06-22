import theme from "../../theme";

const initialState = theme;

const changeTheme = (state = initialState, action) => {
	switch (action.type) {
		case "GET_THEME":
			return state;
		default:
			return state;
	}
};

export default changeTheme;
