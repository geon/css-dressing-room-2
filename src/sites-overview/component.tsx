import * as React from 'react';
import {Site} from '../site/Site';
import {Thumbnail, thumbnailWidth, thumbnailHeight} from './Thumbnail'
import {connect} from 'react-redux';
import {Dispatch} from '../Dispatch';
import {Action, add, remove} from '../sites/actions';
import styled from 'styled-components';
import {v4 as uuid} from 'node-uuid';


interface SitesOverviewProps {
	sites: Array<Site>
};

interface SitesOverviewDispatchProps {
	dispatch: Dispatch<Action>
};

const mapDispatchToProps = (dispatch: Dispatch<any>): SitesOverviewDispatchProps => ({
	dispatch
})

const removeButtonRadius = 16;
const removeStickOut = 10;
const Styled = styled.ul`
	padding: 0;
	overflow: auto;

	display: flex;
	flex-direction: row;

	li {
		flex: 0 0 auto;

		cursor: pointer;
		list-style: none;

		margin-right: 10px;
		margin-top: ${removeStickOut}px;

		position: relative;
		> button.remove {

			position: absolute;
			top: ${-removeStickOut}px;
			right: ${-removeStickOut}px;

			display: block;
			height: ${removeButtonRadius*2}px;
			width: ${removeButtonRadius*2}px;
			border-radius: ${removeButtonRadius}px;
			border: none;

			color: white;
			background: red;

			opacity: 0;
			transition: opacity 0.1s;
		}
		&:hover > button.remove {

			opacity: 1;
		}

		&.add > button {
			display: block;
			width: ${thumbnailWidth}px;
			height: ${thumbnailHeight}px;
			color: white;
			background-color: #eee;

			text-align: center;

			border: none;
			font-size: 60px;

			&:focus {

				outline: none;
			}
		}
	}
`;

const render = ({
	sites,
	dispatch
}: SitesOverviewProps & SitesOverviewDispatchProps) =>
<Styled>
	{sites.map((site, i) =>
		<li key={site.uuid}>
			<Thumbnail site={site}/>
			<button className="remove" onClick={(e)=>dispatch(remove(site))}>X</button>
		</li>
	)}
	<li className="add">
		<button onClick={(e)=>dispatch(add(uuid()))}>+</button>
	</li>
</Styled>;

export const SitesOverview = connect(null, mapDispatchToProps)(render);
