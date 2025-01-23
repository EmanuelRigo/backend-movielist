import CustomRouter from "../../utils/customRouter.util.js";

class ApiRouter extends CustomRouter {
  constructor() {
    super();
    this.init()
  }

    init = () => {
        this.use("/movies", ["PUBLIC"], moviesApiRouter);
        this.use("/users", ["PUBLIC"], usersApiRouter);
        this.use("/sessions", ["PUBLIC"], sessionsApiRouter);
        this.use("/cookies", ["PUBLIC"], cookiesApiRouter);
    }
}

const apiRouter = new ApiRouter();
export default apiRouter;