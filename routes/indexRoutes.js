import indexController from "../controllers/indexController.js";

export default function(router) {
  router
    .route("/")
    .get(indexController.index);
  router
    .route("/response")
    .post(indexController.responseGr);
};