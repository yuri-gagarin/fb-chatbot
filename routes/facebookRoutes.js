//facebook webhook routes
import facebookController from "../controllers/facebookController.js";

export default function(router) {
  router
    .route('/webhook')
    .get(facebookController.confirmWebhook);

  router
    .route("/webhook")
    .post(facebookController.handleMessage);
    
}