const path = require('path');

const gatsbyRequiredRules = path.join(
	process.cwd(),
	'node_modules',
	'gatsby',
	'dist',
	'utils',
	'eslint-rules',
);

module.exports = {
	siteMetadata: {
		title: 'Modern Studio',
		siteUrl: 'https://www.msnieruchomosci.pl',
	},
	plugins: [
		{
			resolve: `gatsby-source-contentful`,
			options: {
				spaceId: `88blcf90vcnn`,
				// Learn about environment variables: https://gatsby.dev/env-vars
				accessToken: 'zftJGHmlJoSPfr2_5mRP11nwFXsmHrdRDj7q57D8IQg',
			},
		},
		{
			resolve: 'gatsby-plugin-eslint',
			options: {
				failOnError: false,
				rulePaths: [gatsbyRequiredRules],
				stages: ['develop'],
				extensions: ['js', 'jsx'],
				exclude: ['node_modules', 'bower_components', '.cache', 'public'],
			},
		},
		'gatsby-plugin-styled-components',
		{
			resolve: 'gatsby-plugin-google-analytics',
			options: {
				trackingId: 'gvkavrag7nip',
			},
		},
		'gatsby-plugin-image',
		'gatsby-plugin-react-helmet',
		'gatsby-plugin-sitemap',
		{
			resolve: 'gatsby-plugin-manifest',
			options: {
				icon: 'src/assets/icons/favicon.png',
			},
		},
		'gatsby-plugin-sharp',
		'gatsby-transformer-sharp',
		{
			resolve: 'gatsby-source-filesystem',
			options: {
				name: 'images',
				path: './src/assets/images/',
			},
			__key: 'images',
		},
		{
			resolve: 'gatsby-plugin-root-import',
			options: {
				assets: path.join(__dirname, 'src', 'assets'),
				components: path.join(__dirname, 'src', 'components'),
			},
		},
		{
			resolve: 'gatsby-plugin-google-fonts',
			options: {
				fonts: ['montserrat:300,400,500,700', 'cormorant garamond:300,500'],
				display: 'swap',
			},
		},
		{
			resolve: 'gatsby-plugin-react-svg',
			options: {
				rule: {
					include: path.resolve(__dirname, 'src/assets/icons-components/'),
				},
			},
		},
	],
};
