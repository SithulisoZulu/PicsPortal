/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}','node_modules/preline/dist/*.js',],
	theme: {
		extend: {
		  margin: {
			320: '320px',
		  },
		  width: {
			190: '190px',
			275: '275px',
			300: '300px',
			340: '340px',
			350: '350px',
			656: '656px',
			880: '880px',
			508: '508px',
		  },
		  height: {
			80: '80px',
			340: '340px',
			370: '370px',
			420: '420px',
			510: '510px',
			600: '600px',
			685: '685px',
			800: '800px',
			'90vh': '90vh',
		  },
		  flex: {
			0.7: '0.7 1 0%',
		  },
		  maxHeight: {
			370: '370px',
		  },
		  minWidth: {
			210: '210px',
			350: '350px',
			620: '620px',
		  },
		  textColor: {
			lightGray: '#F1EFEE',
			primary: '#FAFAFA',
			secColor: '#efefef',
			navColor: '#BEBEBE',
		  },
		  backgroundColor: {
			mainColor: '#FBF8F9',
			secondaryColor: '#F0F0F0',
			blackOverlay: 'rgba(0, 0 ,0 ,0.7)',
		  },
		  keyframes: {
			'slide-in': {
			  '0%': {
				'-webkit-transform': 'translateX(-200px)',
				transform: 'translateX(-200px)',
			  },
			  '100%': {
				'-webkit-transform': 'translateX(0px)',
				transform: 'translateX(0px)',
			  },
			  
			},
	
			'slide-fwd': {
			  '0%': {
				'-webkit-transform': 'translateZ(0px)',
				transform: 'translateZ(0px)',
			  },
			  '100%': {
				'-webkit-transform': 'translateZ(160px)',
				transform: 'translateZ(160px)',
			  },
			},
			'reverse-spin': {
				from: {
				  transform: 'rotate(360deg)'
				}
				}
		  },
		  animation: {
			'slide-in': 'slide-in 0.5s ease-out',
			'slide-fwd': ' slide-fwd 0.45s cubic-bezier(0.250, 0.460, 0.450, 0.940) both',
			'spin-slow': 'spin 4s linear infinite',
			'reverse-spin': 'reverse-spin 1s linear infinite'
		  },
		  transitionProperty: {
			height: 'height',
		  },
		},
		cursor: {
		  'zoom-in': 'zoom-in',
		  pointer: 'pointer',
		},
	  },
	plugins: [require('preline/plugin'),],
}
