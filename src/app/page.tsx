import Image from 'next/image';

import black from './black.png';
import white from './white.png';

export default function Home() {
	return (
		<div className="w-screen h-screen flex flex-col items-center justify-center">
			<Image src={black} alt="brdx" className="block dark:hidden" />
			<Image src={white} alt="brdx" className="hidden dark:block" />
		</div>
	);
}
