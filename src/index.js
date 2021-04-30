import { render } from 'lit-html';
import { setBasePath } from '@shoelace-style/shoelace/dist/utilities/base-path';
import '@shoelace-style/shoelace/dist/components/button/button';
import '@shoelace-style/shoelace/dist/components/dropdown/dropdown';
import '@shoelace-style/shoelace/dist/components/icon/icon';
import '@shoelace-style/shoelace/dist/components/input/input';
import '@shoelace-style/shoelace/dist/components/spinner/spinner';
import '@shoelace-style/shoelace/dist/components/color-picker/color-picker';

import App from './components/App';

import './styles.scss';

setBasePath('/dist/shoelace');

render(App(), document.getElementById('app'));
