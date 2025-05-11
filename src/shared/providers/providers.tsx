import type { PropsWithChildren } from 'react';

import { DeviceProvider } from './device-provider';

export function Providers({ children }: PropsWithChildren) {
	return (
		<>
			<DeviceProvider>{children}</DeviceProvider>
		</>
	);
}
