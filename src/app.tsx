import { Route, Routes } from 'react-router';

import { Home } from './pages';
import { Layout } from './shared/components/shared';
import { Providers } from './shared/providers';

export function App() {
	return (
		<Providers>
			<Layout>
				<Routes>
					<Route path='/' element={<Home />} />
				</Routes>
			</Layout>
		</Providers>
	);
}
