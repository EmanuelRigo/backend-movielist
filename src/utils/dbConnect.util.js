import { connect } from "mongoose";
import envUtil from "./env.util.js";

async function dbConnect() {
    try {
        connect (envUtil.MONGO_LINK);

    }catch {
        console.log(error);
    }}

export default dbConnect