import styled from 'styled-components';

const ListWrap = styled.section`
	margin: 75px auto 0;
	padding: 0;
	width: 100%;
	position: relative;
	clear: both;
	background: #fff;
	color: #333;
	font-family: "Open Sans", sans-serif;
`;

const ListItems = styled.ul`
	margin: 0 auto;
	padding: 0 15px;
	width: 600px;
	min-height: 400px;
	clear: both;
	list-style-type: none;
	display: block;
	border: 1px solid #eee;
	position: relative;
`;

const ListItem = styled.li`
	margin: 0;
	padding: 15px 0;
	width: 100%;
	clear: both;
	list-style-type: none;
	display: block;
	border-bottom: 1px solid #ddd;
	position: relative;
	min-height: 50px;
	&:last-child {
		border: 0 solid;
	}
`;

const UserName = styled.span`
	margin: 0;
	padding: 0 5px;
	display: inline-block;
	font-size: 16px;
	line-height: 20px;
	font-weight: bold;
	vertical-align: top;
	position: relative;
`;

const UserEmail = styled.span`
	margin: 0;
	padding: 0 0 5px;
	display: inline-block;
	font-size: 16px;
	line-height: 20px;
	font-weight: normal;
	clear: both;
	vertical-align: top;
	position: relative;
`;

const ThumbnailImage = styled.img`
	margin: 0 5px;
	padding: 0;
	display: inline-block;
	border: 0;
	width: 50px;
	height: 50px;
	vertical-align: top;
	position: relative;
	background: rgb(241, 241, 241);
`;

export { 
    ListWrap, ListItems, ListItem, UserName, UserEmail, ThumbnailImage
}