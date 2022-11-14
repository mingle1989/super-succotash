// React
import React from 'react';
// React DOM
import ReactDOM from 'react-dom/client';
// App.jsx
import App from './App';
// Fonts
import './styles/fonts.css';
// Tailwind
import './styles/tailwind.css';
// Main css
import './styles/main.css';

ReactDOM.createRoot(document.getElementById('root')).render(
	<React.StrictMode>
		<App />
	</React.StrictMode>
);
