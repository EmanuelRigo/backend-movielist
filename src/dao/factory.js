import dbConnect from "../utils/dbConnect.util.js";
import argsUtil from "../utils/args.util.js";

const { persistence } = argsUtil;

let dao = {};

switch (persistence) {
  case "fs":
    console.log("connected to FS");
    const { default: MoviesManagerFS } = await import(
      "./fs/managers/movies.manager.fs.js"
    );
    const { default: UsersManagerFS } = await import(
      "./fs/managers/users.manager.fs.js"
    );
    dao = {
      MoviesManager: MoviesManagerFS,
      UsersManager: UsersManagerFS,
    };
    break;
  default:
    console.log("connected to mongo system");
    dbConnect();
    const { default: MoviesManagerMongo } = await import(
      "./mongo/managers/movie.manager.js"
    );
    const { default: UsersManagerMongo } = await import(
      "./mongo/managers/user.manager.js"
    );
    dao = {
      MoviesManager: MoviesManagerMongo,
      UsersManager: UsersManagerMongo,
    };
    break;
}

export default dao;
