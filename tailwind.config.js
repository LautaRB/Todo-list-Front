/** @type {import('tailwindcss').Config} */
export default {
	content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
	safelist: [
		// Se mantienen los estilos independientemente de si se usan o no
		'bg-yellow-100',
		'after:border-b-yellow-100',
		'after:border-l-yellow-100',
		'bg-blue-100',
		'after:border-b-blue-100',
		'after:border-l-blue-100',
		'bg-green-100',
		'after:border-b-green-100',
		'after:border-l-green-100',
		'bg-red-100',
		'after:border-b-red-100',
		'after:border-l-red-100',
		'bg-purple-100',
		'after:border-b-purple-100',
		'after:border-l-purple-100',
		'bg-pink-100',
		'after:border-b-pink-100',
		'after:border-l-pink-100',
		'bg-amber-100',
		'after:border-b-amber-100',
		'after:border-l-amber-100',
		'bg-indigo-100',
		'after:border-b-indigo-100',
		'after:border-l-indigo-100',
	],

	theme: {
		extend: {
			fontFamily: {
				'sour-gummy': ['Sour Gummy', 'sans-serif'],
			},
		},
	},
	plugins: [],
};
