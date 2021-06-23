import "./App.scss";

import Main from "./container/Main";
import { useSelector } from "react-redux";
function App() {
	const theme = useSelector((state) => state.changeTheme);
	return (
		<div
			className="App"
			style={{ backgroundColor: theme.body, color: theme.text }}
		>
			<Main />
		</div>
	);
}

export default App;
