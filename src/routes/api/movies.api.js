import CustomRouter from "../../utils/customRouter.util.js";
import {
  createMovieController,
  destroyMovieController,
  readAllMoviesController,
  readOneMovieController,
  readMoviesController,
  updateMovieController,
} from "../../controller/movies.controllers.js";

class MoviesApiRouter extends CustomRouter {
  constructor() {
    super();
    this.init();
  }
  init = () => {
    this.create("/", ["USER"], createMovieController);

    this.read("/", ["PUBLIC"], readMoviesController);

    this.read("/all", ["PUBLIC"], readAllMoviesController);

    this.read("/:pid", ["PUBLIC"], readOneMovieController);

    this.update("/:id", ["USER"], updateMovieController);

    this.destroy("/:id", ["PUBLIC"], destroyMovieController);
  };
}

const moviesApiRouter = new MoviesApiRouter();
export default moviesApiRouter.getRouter();
