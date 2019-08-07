import React from 'react';
import { ListWrap, ListItems, ListItem, UserName, UserEmail, ThumbnailImage } from './style';
import SkeltonLoader from '../SkeltonLoader';

const UserList = (props) => {
	const { users, loader } = props;
	const skeltonLoaders = [];

	for (let i = 0; i < loader; i++) { 
		skeltonLoaders.push(<ListItem key={i}><SkeltonLoader /></ListItem>);
	}

	return (
		<ListWrap>
			<ListItems>
				{!users.length && skeltonLoaders}
				{users.map((user, i) => (
					<ListItem key={user.id}>
						<ThumbnailImage src={user.avatar} alt={user.first_name} />
						<UserName>
							{`${user.first_name} ${user.last_name}`}
							<br />
							<UserEmail>{user.email}</UserEmail>
						</UserName>
					</ListItem>
				))}
			</ListItems>
		</ListWrap>
	);
};

export default UserList;
