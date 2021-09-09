import { createApp } from "vue";
import App from "./App.vue";
import "./index.css";
import store from "./store";
import { library } from "@fortawesome/fontawesome-svg-core";
import {
  faPlus,
  faLayerGroup,
  faDiceD6,
  faTruckMoving,
  faShoppingCart,
  faFileUpload,
  faFileDownload,
  faCloudUploadAlt,
  faTimesCircle,
  faArrowCircleRight,
  faBrush,
  faCopyright,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";

library.add(
  faPlus,
  faLayerGroup,
  faDiceD6,
  faTruckMoving,
  faShoppingCart,
  faFileUpload,
  faFileDownload,
  faCloudUploadAlt,
  faTimesCircle,
  faArrowCircleRight,
  faBrush,
  faCopyright
);

createApp(App)
  .component("font-awesome-icon", FontAwesomeIcon)
  .use(store)
  .mount("#app");
