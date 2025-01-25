import {
  createService,
  readFilteredService,
  readAllService,
  readOneService,
  updateService,
  destroyService,
} from "../services/movies.services.js";

const createMovieController = async (req, res) => {
  const message = "MOVIE CREATED";
  const data = req.body;
  const response = await createService(data);
  return res.json201(response, message);
};

const readOneMovieController = async (req, res) => {
  const id = req.params.mid;
  const response = await readOneService(id);
  const message = "MOVIE READ";
  if (response) {
    return res.json201(response, message);
  } else {
    return res.json404();
  }
};

const readMoviesController = async (req, res) => {
  const { limit = 10, sort, query, available } = req.query;
  const pg = req.params.page || 1;
  const limitNumber = parseInt(limit, 10);
  const pageNumber = parseInt(pg, 10);

  if (isNaN(limitNumber) || limitNumber <= 0) {
    return res
      .status(400)
      .send({ error: "El parámetro 'limit' debe ser un número positivo." });
  }

  if (isNaN(pageNumber) || pageNumber <= 0) {
    return res
      .status(400)
      .send({ error: "El parámetro 'page' debe ser un número positivo." });
  }

  const filter = {};

  if (query) {
    filter.category = query;
  }

  if (available) {
    if (available === "true") {
      filter.status = true;
    } else if (available === "false") {
      filter.status = false;
    }
    console.log("filter con disponibilidad:", filter);
  }

  const options = {
    limit: limitNumber,
    page: pageNumber,
    sort,
    filter,
  };

  try {
    const response = await readFilteredService(options);
    console.log("🚀 ~ readMoviesController ~ options:", options);

    const message = "MOVIES UPDATED";

    if (response.docs.length > 0) {
      return res.json201(response, message);
    } else {
      return res.json404();
    }
  } catch (error) {
    console.error("Error al obtener películas:", error);
    return res.status(500).send({ error: "Error interno del servidor" });
  }
};

const readAllMoviesController = async (req, res) => {
  const response = await readAllService();
  const message = "MOVIES UPDATED";
  if (response.length > 0) {
    return res.json201(response, message);
  } else {
    return res.json404();
  }
};

const updateMovieController = async (req, res) => {
  const { id } = req.params;
  const data = req.body;
  const message = "MOVIE UPDATED";
  const response = await updateService(id, data);

  if (response) {
    return res.json201(response, message);
  } else {
    return res.json404();
  }
};

const destroyMovieController = async (req, res) => {
  const { id } = req.params;

  const message = "MOVIE DELETED";

  const response = await destroyService(id);

  if (response) {
    return res.json201(response, message);
  } else {
    return res.json404();
  }
};

export {
  createMovieController,
  readMoviesController,
  readAllMoviesController,
  readOneMovieController,
  updateMovieController,
  destroyMovieController,
};