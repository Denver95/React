import ReactDOM from 'react-dom/client';
import { App } from './App'  // при export App  ставим усы {App}
import './index.css';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
	<App />
);
