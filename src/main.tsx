import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import Layout from './Layouts/baseLayout.tsx';

createRoot(document.getElementById('root')!).render(
	<StrictMode>
		<Layout />
	</StrictMode>,
);
