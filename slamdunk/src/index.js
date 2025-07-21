import ReactDOM from 'react-dom/client'; 
import './index.css';
import Card from './Card';
import 'tachyons';

const container = document.getElementById('root');
const root = ReactDOM.createRoot(container);
root.render(
    <div>
            <Card/>;
    </div>
,document.getElementById('root'));

