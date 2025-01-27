import CustomRouter from "../../utils/customRouter.util.js";
import moviesApiRouter from "./movies.api.js";
import usersApiRouter from "./users.api.js";
import sessionsApiRouter from "./sessions.api.js";
class ApiRouter extends CustomRouter {
  constructor() {
    super();
    this.init()
  }

    init = () => {
        this.use("/movies", ["PUBLIC"], moviesApiRouter);
        this.use("/users", ["PUBLIC"], usersApiRouter);
        this.use("/sessions", ["PUBLIC"], sessionsApiRouter);
        // this.use("/cookies", ["PUBLIC"], cookiesApiRouter);
        // this.use("/cookies", ["PUBLIC"], cookiesRouter);
    }
}

const apiRouter = new ApiRouter();
export default apiRouter;