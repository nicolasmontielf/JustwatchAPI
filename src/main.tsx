import { render } from 'preact'
import { App } from './app'
import "../node_modules/bulma/css/bulma.css";
import './app.css'

render(<App />, document.getElementById('app') as HTMLElement)
