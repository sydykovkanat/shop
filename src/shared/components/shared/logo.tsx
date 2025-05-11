import { Link } from 'react-router';

export function Logo() {
	return (
		<Link
			to='/'
			className='relative flex items-center text-3xl font-normal transition-all duration-300 hover:opacity-80'
			style={{ fontFamily: 'LogoFont' }}
		>
			<span className='text-primary'>iSh</span>

			<span className='text-primary relative'>
				o
				<span
					className='absolute inline-block h-[0.15em] w-[0.15em] rounded-full bg-black'
					style={{
						top: '50%',
						left: '50%',
						transform: 'translate(-50%, -50%)',
					}}
				/>
			</span>

			<span className='text-primary'>p</span>
		</Link>
	);
}
