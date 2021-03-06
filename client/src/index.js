import React from "react";
import ReactDOM from "react-dom";
import App from "App";
import { BrowserRouter } from "react-router-dom";
import "index.css";

import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import configureStore from "app/store";
const { store, persistor } = configureStore();

ReactDOM.render(
	<Provider store={store}>
		<BrowserRouter>
			<PersistGate loading={null} persistor={persistor}>
				<App />
			</PersistGate>
		</BrowserRouter>
	</Provider>,
	document.getElementById("root")
);
