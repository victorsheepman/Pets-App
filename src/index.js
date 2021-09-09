import "./styles/main.scss";//sass
import "./utils/loader";//loaders
//import "./utils/footer";
import router from "./routes/index";//enrutador
window.addEventListener('load', router);

window.addEventListener('hashchange', router);
