import React from "react";
import ReactDom from "react-dom";
import './index.css';
import Hello from './Hello';
//import registerServiceWorker from './registerServiceWorker';
import 'tachyons';

ReactDom.render(<Hello greeting={'Hello' + 'React Ninjas'}/>, document.getElementById('root'));
//registerServiceWorker();
