import { render } from 'lit-html';
import { setBasePath } from '@shoelace-style/shoelace/dist/utilities/base-path';

import App from './components/App';

import './styles.scss';

setBasePath('/dist/shoelace');

render(App(), document.getElementById('app'));
