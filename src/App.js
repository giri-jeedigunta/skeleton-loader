import React, { useState, useEffect } from 'react';
import config from "./utils/config";
import API from './utils/API';
import Header from './components/Header';
import UserList from './components/UserList';

function App() {
	const [ users, setData ] = useState({ data: [] });

	useEffect(() => {
		(async () => {
			const result = await API.get('/users', {
				params: {
					per_page: config.itemsPerPage,
					delay: 30
				}
			});
			setData(result.data);
		})();
	}, []);

	return (
		<React.Fragment>
			<Header />
			<UserList users={users.data} loader={config.itemsPerPage}/>
		</React.Fragment>
	);
}

export default App;


