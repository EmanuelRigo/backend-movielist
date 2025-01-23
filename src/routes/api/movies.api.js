import CustomRouter from "../../utils/customRouter.util.js";
import {
  createMoviesController,
  destroyController,
  readAllController,
  readOneMoviesController,
  readMoviesController,
  updateController,
} from "../../controller/movies.controllers.js";

class MoviesApiRouter extends CustomRouter {
  constructor() {
    super();
    this.init();
  }
  init = () => {
    this.create("/", ["USER"], createMoviesController);

    this.read("/", ["PUBLIC"], readMoviesController);

    this.read("/all", ["PUBLIC"], readAllController);

    this.read("/:pid", ["PUBLIC"], readOneMoviesController);

    this.update("/:id", ["USER"], updateController);

    this.destroy("/:id", ["PUBLIC"], destroyController);
  };
}

const moviesApiRouter = new MoviesApiRouter();
export default moviesApiRouter.getRouter();
