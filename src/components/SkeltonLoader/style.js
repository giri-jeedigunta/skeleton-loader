import styled, { keyframes } from 'styled-components';

const SkeletonAnimation = keyframes`
    0%{transform: translate3d(-100%, 0, 0);}
    100%{transform: translate3d(100%, 0, 0);}
`;

const SkeletonWrapper = styled.span`
    margin: 0;
    padding: 0 0 0 5px;
    clear: both;
    display: block;
    width: 100%;
    position: relative;
`;

const Skeleton = styled.span`
	padding: 0;
	margin: 0;
	clear: both;
	width: ${(props) => (props.width ? `${props.width}px` : '100%')};
	height: ${(props) => (props.height ? `${props.height}px` : '100%')};
	background: rgb(241, 241, 241);
	display: inline-block;
	overflow: hidden;
	z-index: 1;
	position: relative;
	vertical-align: top;

	&.hide {
		display: none;
		opacity: 0;
	}

	&.email {
		margin: 0;
		padding: 0;
		display: inline-block;
		vertical-align: top;
		position: absolute;		
		top: 24px;
		left: 64px;
		width: 265px;
		height: 18px;
	}

	&.name {
		margin: 0;
		padding: 0;
		display: inline-block;
		vertical-align: top;
		position: absolute;		
		top: 0px;
		left: 64px;
		width: 275px;
		height: 20px;
	}

	&.thumbnail {
		margin: 0;
		padding: 0;
		display: inline-block;
		vertical-align: top;
		position: absolute;		
		width: 50px;
		height: 50px;
		top: 0;
		left: 5px;
	}

	&::after {
		content: '';
		width: 100%;
		height: 100%;
		margin: 0;
		padding: 0;
		position: absolute;
		top: 0;
		left: 0;
		z-index: 1;
		display: block;
		background: -webkit-linear-gradient(
			90deg,
			rgb(241, 241, 241) 0%,
			rgb(255, 255, 255, 0.5) 7%,
			rgb(241, 241, 241) 100%
		);
		background: -o-linear-gradient(
			90deg,
			rgb(241, 241, 241) 0%,
			rgb(255, 255, 255, 0.5) 7%,
			rgb(241, 241, 241) 100%
		);
		background: -moz-linear-gradient(
			90deg,
			rgb(241, 241, 241) 0%,
			rgb(255, 255, 255, 0.5) 7%,
			rgb(241, 241, 241) 100%
		);
		background: linear-gradient(90deg, rgb(241, 241, 241) 0%, rgb(255, 255, 255, 0.5) 7%, rgb(241, 241, 241) 100%);
		animation: ${SkeletonAnimation} 1.25s ease-in-out infinite;
	}
`;

export { 
    Skeleton, SkeletonWrapper
}