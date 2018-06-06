'use strict';

import * as _L from './Leaflet.js';

var L = window.L = {};

for (var x in _L) {
	L[x] = _L[x];
}

export default L;
