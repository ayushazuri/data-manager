import "./App.scss";
import { useSelector } from "react-redux";
import Main from "./container/Main";
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
