import React from 'react';
import { getPageSlug } from 'helpers/getPageSlug';
import {
	ThumbnailImage,
	ThumbnailInfo,
	ThumbnailWarpper,
} from './Thumbnail.styles';

export const Thumbnail = ({ imageSource = '', title = '', address = '' }) => {
	return (
		<ThumbnailWarpper to={getPageSlug(address)}>
			<ThumbnailImage src={imageSource} alt="" />
			<ThumbnailInfo>
				<p>{address}</p>
				<p>{title}</p>
			</ThumbnailInfo>
		</ThumbnailWarpper>
	);
};
