import React from "react";

const Layout = ({ children }) => {
	return (
		<div class="min-h-screen flex flex-col">
			<div class="pt-16 flex-1 flex flex-col w-full">{children}</div>
		</div>
	);
};

export default Layout;
