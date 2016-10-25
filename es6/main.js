import Person from './Person.js';
import Regex from './RegexExtension.js';

import React from 'react';
import ReactDom from 'react-dom';
import Greeter from './Greeter.js';

let p = new Person('张三', 20);
document.write(p.say());
let regex = new Regex();

document.body.appendChild(regex);
ReactDom.render(<Greeter />, document.getElementById('root'));