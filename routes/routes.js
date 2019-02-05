import indexRoutes from "./indexRoutes.js";
import facebookRoutes from "./facebookRoutes.js";
export default function(router) {
  indexRoutes(router);
  facebookRoutes(router);
};
