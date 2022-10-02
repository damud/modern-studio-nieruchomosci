import React from 'react';
import PropTypes from 'prop-types';
import { StyledHeading } from './HightlightedHeading.styles';

export const HighlightedHeading = ({
	width,
	level = '2',
	children,
	isRight = false,
}) => (
	<StyledHeading width={width} isRight={isRight} as={`h${level}`}>
		{children}
	</StyledHeading>
);

HighlightedHeading.propTypes = {
	children: PropTypes.node.isRequired,
	level: PropTypes.string,
	isRight: PropTypes.bool,
	width: PropTypes.string,
};
