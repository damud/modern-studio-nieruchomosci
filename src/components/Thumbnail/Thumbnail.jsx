import React from 'react';
import {
	ThumbnailImage,
	ThumbnailInfo,
	ThumbnailWarpper,
} from './Thumbnail.styles';

export const Thumbnail = ({ imageSource }) => {
	return (
		<ThumbnailWarpper>
			<ThumbnailImage src={imageSource} alt="" />
			<ThumbnailInfo>
				<p>Polna 20</p>
				<p>Nowoczesny apartament z klasą</p>
			</ThumbnailInfo>
		</ThumbnailWarpper>
	);
};
