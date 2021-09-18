import "./styles/main.scss";
import "./utils/loader";
import router from "./routes/index";
import './utils/sw';
window.addEventListener('load', router);
window.addEventListener('hashchange', router);
