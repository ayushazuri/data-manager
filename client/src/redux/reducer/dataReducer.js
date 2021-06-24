export const aboutMe = (state = {}, action) => {
	switch (action.type) {
		case "ABOUT_ME":
			return action.payload;
		default:
			return state;
	}
};
export const skill = (state = {}, action) => {
	switch (action.type) {
		case "SKILL":
			return action.payload;
		default:
			return state;
	}
};
export const project = (state = {}, action) => {
	switch (action.type) {
		case "PROJECT":
			return action.payload;
		default:
			return state;
	}
};
export const education = (state = {}, action) => {
	switch (action.type) {
		case "EDUCATION":
			return action.payload;
		default:
			return state;
	}
};
export const experience = (state = {}, action) => {
	switch (action.type) {
		case "EXPERIENCE":
			return action.payload;
		default:
			return state;
	}
};
export const certification = (state = {}, action) => {
	switch (action.type) {
		case "CERTIFICATION":
			return action.payload;
		default:
			return state;
	}
};
export const achievement = (state = {}, action) => {
	switch (action.type) {
		case "ACHIEVEMENT":
			return action.payload;
		default:
			return state;
	}
};
