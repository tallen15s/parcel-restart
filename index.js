/**
 * TODO: Import some components
 * U might also need to import 'api' to get your initial data?
 */
import { Table } from "./components";

const root = document.getElementById("root");

function render() {
  root.innerHTML = Table();
}

render();
// TODO: Use api to 'fetch' 'initial data?' Maybe 'api.index()'?
