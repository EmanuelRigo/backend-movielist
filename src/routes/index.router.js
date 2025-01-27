import CustomRouter from "../utils/customRouter.util.js";
import apiRouter from "./api/index.api.js";

class IndexRouter extends CustomRouter {
  constructor() {
    super();
  }
  init = () => {
    this.use("/api", ["PUBLIC"], apiRouter);
  };
}

let indexRouter = new IndexRouter();

indexRouter = indexRouter.getRouter();

export default indexRouter;
