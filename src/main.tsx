import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import { BaseLayout } from '@layouts/BaseLayout.tsx';

createRoot(document.getElementById('root')!).render(
	<StrictMode>
		<BaseLayout />
	</StrictMode>,
);
