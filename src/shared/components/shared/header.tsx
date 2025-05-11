import { Container } from './container';
import { Logo } from './logo';

export function Header() {
	return (
		<header className='bg-background/80 sticky top-0 z-50 border-b border-dashed py-2 backdrop-blur-xl'>
			<Container className='flex items-center justify-center'>
				<Logo />
			</Container>
		</header>
	);
}
