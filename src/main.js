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
  faPlusSquare,
  faCopyright,
  faCog,
  faPencilAlt,
  faTrashAlt
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import Datepicker from "vue3-datepicker";

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
  faPlusSquare,
  faCopyright,
  faCog,
  faPencilAlt,
  faTrashAlt
);

createApp(App)
  .component("font-awesome-icon", FontAwesomeIcon)
  .component("datepicker", Datepicker)
  .use(store)
  .mount("#app");
