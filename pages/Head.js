import React from 'react';
import Head from 'next/head';
import * as styles from '../static/styles.js';

export default () => (
	<Head>
		<meta name="viewport" content="width=device-width, initial-scale=1" />
		<style type="text/css">
			{styles.skeleton}
		</style>
	</Head>
)