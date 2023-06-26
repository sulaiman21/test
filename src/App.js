import { ThemeProvider } from "@mui/material";
import { useRoutes } from "react-router-dom";
import { Provider as ReduxProvider } from "react-redux";
import { Helmet, HelmetProvider } from "react-helmet-async";
import { routes } from "./routes";
import theme from "./theme";
import store from "./redux";

function App() {
	const content = useRoutes(routes);
	return (
		<HelmetProvider>
			<Helmet titleTemplate="Test for Softoo" defaultTitle="Test for Softoo" />
			<ReduxProvider store={store}>
				<ThemeProvider theme={theme}>{content}</ThemeProvider>
			</ReduxProvider>
		</HelmetProvider>
	);
}

export default App;
