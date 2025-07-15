import ReactDOM from 'react-dom/client'; // or 'react-dom' if using older versions of React
import './index.css';
import Card from './Card';
import 'tachyons';

const container = document.getElementById('root');
const root = ReactDOM.createRoot(container);
root.render(
    <div>
            <Card/>;
            <Card/>;
            <Card/>;
    </div>
,document.getElementById('root'));

