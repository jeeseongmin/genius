import React from "react";
import { Route, Switch } from "react-router-dom";
import Layout from "components/Layout/Layout";
import Home from "routes/Home";

const App = () => {
	return (
		<>
			<Switch>
				<Layout>
					<Route exact path="/" component={Home} />
				</Layout>
			</Switch>
		</>
	);
};

export default App;
