const flowbite = require('flowbite-react/tailwind');

/** @type {import('tailwindcss').Config} */
export default {
	content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}', flowbite.content()],
	safelist: [
		// Se mantienen los estilos independientemente de si se usan o no
		{
			pattern: /bg-(yellow|blue|green|pink|violet)-(100|200)/,
			variants: ['dark'],
		},
		{
			pattern: /border-(b|l)-(yellow|blue|green|pink|violet)-(100)/,
			variants: ['after', 'dark'],
		},

		'background-blue',
		'background-red',
		'background-yellow',
	],

	theme: {
		extend: {
			width: {
				mobile: '90%',
				desktop: '85%',
			},
		},
	},
	plugins: [flowbite.plugin()],
};
