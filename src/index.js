import "./styles/main.scss";
import "./utils/loader";
import router from "./routes/index";
//window.addEventListener('load', router);

window.addEventListener('hashchange', router);
