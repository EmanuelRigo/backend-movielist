import MoviesDTO from "../dto/movie.dto.js";
import dao from "../dao/factory.js";
const { MoviesManager } = dao;

async function createService(data) {
  data = new MoviesDTO(data);
  const response = await MoviesManager.create(data);
  return response;
}

async function readFilteredService(opt) {
  const response = await MoviesManager.getFiltered(opt);
  return response;
}

async function readOneService(id) {
  const response = await MoviesManager.readById(id);
  return response;
}

async function readAllService() {
  const response = await MoviesManager.getAll();
  return response;
}

async function updateService(id, data) {
  const response = await MoviesManager.update(id, data);
  return response;
}

const destroyService = async (id) => await MoviesManager.destroy(id);

export {
  createService,
  readFilteredService,
  readAllService,
  readOneService,
  updateService,
  destroyService,
};