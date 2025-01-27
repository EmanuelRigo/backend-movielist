import MovieModel from "../models/movie.model.js";
import Manager from "./manager.js";

const movieManager = new Manager(MovieModel);
export default movieManager