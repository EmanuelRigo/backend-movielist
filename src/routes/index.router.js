import CustomRouter from "../utils/customRouter.util.js";
import apiRouter from "./api/index.api.js";
console.log("apiRouter:", apiRouter);

class IndexRouter extends CustomRouter {
  constructor() {
    super();
    this.init();
  }
  init = () => {
    this.use("/api", ["PUBLIC"], apiRouter);
  };
}

let indexRouter = new IndexRouter();
indexRouter = indexRouter.getRouter();
export default indexRouter;