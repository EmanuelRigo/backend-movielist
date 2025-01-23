import CustomRouter from "../utils/customRouter.util.js";
import apiRouter from "./api/index.api.js";

class IndexRouter extends CustomRouter {
  constructor() {
    super();
    this._router.use("/api", apiRouter);
  }
  init = () => {
    this.use("/api", ["PUBLIC"], apiRouter);
  };
}

let indexRouter = new IndexRouter();
console.log("🚀 ~ indexRouter:", indexRouter)


indexRouter = indexRouter.getRouter();

export default indexRouter;
