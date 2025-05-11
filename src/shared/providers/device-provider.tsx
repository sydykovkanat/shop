import {
	createContext,
	type PropsWithChildren,
	useContext,
	useEffect,
	useState,
} from 'react';

type DeviceType = 'mobile' | 'desktop';

interface DeviceContextProps {
	device: DeviceType;
}

const DeviceContext = createContext<DeviceContextProps | undefined>(undefined);

export const DeviceProvider = ({ children }: PropsWithChildren) => {
	const [device, setDevice] = useState<DeviceType>('desktop');

	useEffect(() => {
		const userAgent = navigator.userAgent || navigator.vendor;
		const isMobile = /android|iphone|ipad|ipod/i.test(userAgent);

		setDevice(isMobile ? 'mobile' : 'desktop');
	}, []);

	return (
		<DeviceContext.Provider value={{ device }}>
			{children}
		</DeviceContext.Provider>
	);
};

export const useDevice = (): DeviceContextProps => {
	const context = useContext(DeviceContext);
	if (!context) {
		throw new Error('useDevice must be used within a DeviceProvider');
	}
	return context;
};
