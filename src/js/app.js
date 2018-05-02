import React from 'react';
import ReactDOM from 'react-dom';

import SearchWrap from './SearchWrap';

const wrapper = document.getElementById("app");
wrapper ? ReactDOM.render(<SearchWrap/>, wrapper) : false;

