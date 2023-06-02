import React from 'react';
import {Helmet, HelmetProvider} from 'react-helmet-async';

export const Head = () => {
	return (
		<Helmet>
			<meta charSet="utf-8" />
			<title>My Title</title>
			<link rel="canonical" href="http://mysite.com/example" />
			<meta name="description" content="Helmet application" />
		</Helmet>
	);
};
