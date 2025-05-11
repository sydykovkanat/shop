import type { JSX } from 'react';

export type IHugeIcon = (props: React.SVGProps<SVGSVGElement>) => JSX.Element;

export const DeliveryTruck = (props: React.SVGProps<SVGSVGElement>) => (
	<svg
		xmlns='http://www.w3.org/2000/svg'
		viewBox='0 0 24 24'
		width={24}
		height={24}
		color={'currentColor'}
		fill={'none'}
		{...props}
	>
		<path
			d='M19.5 17.5C19.5 18.8807 18.3807 20 17 20C15.6193 20 14.5 18.8807 14.5 17.5C14.5 16.1193 15.6193 15 17 15C18.3807 15 19.5 16.1193 19.5 17.5Z'
			stroke='#000000'
			strokeWidth='1.5'
		></path>
		<path
			d='M9.5 17.5C9.5 18.8807 8.38071 20 7 20C5.61929 20 4.5 18.8807 4.5 17.5C4.5 16.1193 5.61929 15 7 15C8.38071 15 9.5 16.1193 9.5 17.5Z'
			stroke='#000000'
			strokeWidth='1.5'
		></path>
		<path
			d='M14.5 17.5H9.5M19.5 17.5H20.2632C20.4831 17.5 20.5931 17.5 20.6855 17.4885C21.3669 17.4036 21.9036 16.8669 21.9885 16.1855C22 16.0931 22 15.9831 22 15.7632V13C22 9.41015 19.0899 6.5 15.5 6.5M2 4H12C13.4142 4 14.1213 4 14.5607 4.43934C15 4.87868 15 5.58579 15 7V15.5M2 12.75V15C2 15.9346 2 16.4019 2.20096 16.75C2.33261 16.978 2.52197 17.1674 2.75 17.299C3.09808 17.5 3.56538 17.5 4.5 17.5'
			stroke='#000000'
			strokeWidth='1.5'
			strokeLinecap='round'
			strokeLinejoin='round'
		></path>
		<path
			d='M2 7H8M2 10H6'
			stroke='#000000'
			strokeWidth='1.5'
			strokeLinecap='round'
			strokeLinejoin='round'
		></path>
	</svg>
);

export const SafeDelivery = (props: React.SVGProps<SVGSVGElement>) => (
	<svg
		xmlns='http://www.w3.org/2000/svg'
		viewBox='0 0 24 24'
		width={24}
		height={24}
		color={'currentColor'}
		fill={'none'}
		{...props}
	>
		<path
			d='M4 14H6.39482C6.68897 14 6.97908 14.0663 7.24217 14.1936L9.28415 15.1816C9.54724 15.3089 9.83735 15.3751 10.1315 15.3751H11.1741C12.1825 15.3751 13 16.1662 13 17.142C13 17.1814 12.973 17.2161 12.9338 17.2269L10.3929 17.9295C9.93707 18.0555 9.449 18.0116 9.025 17.8064L6.84211 16.7503'
			stroke='#000000'
			strokeWidth='1.5'
			strokeLinecap='round'
			strokeLinejoin='round'
		></path>
		<path
			d='M13 16.5L17.5928 15.0889C18.407 14.8352 19.2871 15.136 19.7971 15.8423C20.1659 16.3529 20.0157 17.0842 19.4785 17.3942L11.9629 21.7305C11.4849 22.0063 10.9209 22.0736 10.3952 21.9176L4 20.0199'
			stroke='#000000'
			strokeWidth='1.5'
			strokeLinecap='round'
			strokeLinejoin='round'
		></path>
		<path
			d='M15 12H13C11.1144 12 10.1716 12 9.58579 11.4142C9 10.8284 9 9.88562 9 8V6C9 4.11438 9 3.17157 9.58579 2.58579C10.1716 2 11.1144 2 13 2H15C16.8856 2 17.8284 2 18.4142 2.58579C19 3.17157 19 4.11438 19 6V8C19 9.88562 19 10.8284 18.4142 11.4142C17.8284 12 16.8856 12 15 12Z'
			stroke='#000000'
			strokeWidth='1.5'
			strokeLinecap='round'
			strokeLinejoin='round'
		></path>
		<path
			d='M13 5H15'
			stroke='#000000'
			strokeWidth='1.5'
			strokeLinecap='round'
			strokeLinejoin='round'
		></path>
	</svg>
);

export const Gift = (props: React.SVGProps<SVGSVGElement>) => (
	<svg
		xmlns='http://www.w3.org/2000/svg'
		viewBox='0 0 24 24'
		width={24}
		height={24}
		color={'currentColor'}
		fill={'none'}
		{...props}
	>
		<path
			d='M4 11V15C4 18.2998 4 19.9497 5.02513 20.9749C6.05025 22 7.70017 22 11 22H13C16.2998 22 17.9497 22 18.9749 20.9749C20 19.9497 20 18.2998 20 15V11'
			stroke='#000000'
			strokeWidth='1.5'
			strokeLinecap='round'
			strokeLinejoin='round'
		></path>
		<path
			d='M3 9C3 8.25231 3 7.87846 3.20096 7.6C3.33261 7.41758 3.52197 7.26609 3.75 7.16077C4.09808 7 4.56538 7 5.5 7H18.5C19.4346 7 19.9019 7 20.25 7.16077C20.478 7.26609 20.6674 7.41758 20.799 7.6C21 7.87846 21 8.25231 21 9C21 9.74769 21 10.1215 20.799 10.4C20.6674 10.5824 20.478 10.7339 20.25 10.8392C19.9019 11 19.4346 11 18.5 11H5.5C4.56538 11 4.09808 11 3.75 10.8392C3.52197 10.7339 3.33261 10.5824 3.20096 10.4C3 10.1215 3 9.74769 3 9Z'
			stroke='#000000'
			strokeWidth='1.5'
			strokeLinejoin='round'
		></path>
		<path
			d='M6 3.78571C6 2.79949 6.79949 2 7.78571 2H8.14286C10.2731 2 12 3.7269 12 5.85714V7H9.21429C7.43908 7 6 5.56091 6 3.78571Z'
			stroke='#000000'
			strokeWidth='1.5'
			strokeLinejoin='round'
		></path>
		<path
			d='M18 3.78571C18 2.79949 17.2005 2 16.2143 2H15.8571C13.7269 2 12 3.7269 12 5.85714V7H14.7857C16.5609 7 18 5.56091 18 3.78571Z'
			stroke='#000000'
			strokeWidth='1.5'
			strokeLinejoin='round'
		></path>
		<path
			d='M12 11L12 22'
			stroke='#000000'
			strokeWidth='1.5'
			strokeLinecap='round'
			strokeLinejoin='round'
		></path>
	</svg>
);

export const CustomerSupport = (props: React.SVGProps<SVGSVGElement>) => (
	<svg
		xmlns='http://www.w3.org/2000/svg'
		viewBox='0 0 24 24'
		width={24}
		height={24}
		color={'currentColor'}
		fill={'none'}
		{...props}
	>
		<path
			d='M17 10.8045C17 10.4588 17 10.286 17.052 10.132C17.2032 9.68444 17.6018 9.51076 18.0011 9.32888C18.45 9.12442 18.6744 9.02219 18.8968 9.0042C19.1493 8.98378 19.4022 9.03818 19.618 9.15929C19.9041 9.31984 20.1036 9.62493 20.3079 9.87302C21.2513 11.0188 21.7229 11.5918 21.8955 12.2236C22.0348 12.7334 22.0348 13.2666 21.8955 13.7764C21.6438 14.6979 20.8485 15.4704 20.2598 16.1854C19.9587 16.5511 19.8081 16.734 19.618 16.8407C19.4022 16.9618 19.1493 17.0162 18.8968 16.9958C18.6744 16.9778 18.45 16.8756 18.0011 16.6711C17.6018 16.4892 17.2032 16.3156 17.052 15.868C17 15.714 17 15.5412 17 15.1955V10.8045Z'
			stroke='#000000'
			strokeWidth='1.5'
		></path>
		<path
			d='M7 10.8046C7 10.3694 6.98778 9.97821 6.63591 9.6722C6.50793 9.5609 6.33825 9.48361 5.99891 9.32905C5.55001 9.12458 5.32556 9.02235 5.10316 9.00436C4.43591 8.9504 4.07692 9.40581 3.69213 9.87318C2.74875 11.019 2.27706 11.5919 2.10446 12.2237C1.96518 12.7336 1.96518 13.2668 2.10446 13.7766C2.3562 14.6981 3.15152 15.4705 3.74021 16.1856C4.11129 16.6363 4.46577 17.0475 5.10316 16.996C5.32556 16.978 5.55001 16.8757 5.99891 16.6713C6.33825 16.5167 6.50793 16.4394 6.63591 16.3281C6.98778 16.0221 7 15.631 7 15.1957V10.8046Z'
			stroke='#000000'
			strokeWidth='1.5'
		></path>
		<path
			d='M5 9C5 5.68629 8.13401 3 12 3C15.866 3 19 5.68629 19 9'
			stroke='#000000'
			strokeWidth='1.5'
			strokeLinecap='square'
			strokeLinejoin='round'
		></path>
		<path
			d='M19 17V17.8C19 19.5673 17.2091 21 15 21H13'
			stroke='#000000'
			strokeWidth='1.5'
			strokeLinecap='round'
			strokeLinejoin='round'
		></path>
	</svg>
);
