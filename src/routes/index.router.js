import CustomRouter from "../utils/customRouter.util";
import apiRouter from "./api/index.api.js";


class indexRouter extends CustomRouter {
  constructor() {
    super();
    this._router.use("/api", apiRouter);
  }
  init = () => {
    this.use("/api", ["PUBLIC"], apiRouter);
  }
}

let indexRouter = new indexRouter();
indexRouter = indexRouter.getRouter();
export default indexRouter;
