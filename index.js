import { React, ReactDOM } from 'https://unpkg.com/es-react';
import htm from 'https://unpkg.com/htm?module';

const html = htm.bind(React.createElement);

ReactDOM.render(
    html`<div>Hello World</div>`,
    document.body
);