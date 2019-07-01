import { Router } from "express";
import multer from "multer";
import multerConfig from "./config/multer";

import UserController from "./app/controllers/UserController";
import sessionController from "./app/controllers/sessionController";

import authMiddleware from "./app/middlewares/auth";
import FileController from "./app/controllers/FileController";
import MeetupController from "./app/controllers/MeetupController";

const routes = new Router();
const upload = multer(multerConfig);

routes.post("/users", UserController.store);
routes.post("/sessions", sessionController.store);

routes.use(authMiddleware);

routes.post("/files", upload.single("file"), FileController.store);

routes.put("/users", UserController.update);

routes.post("/meetups", MeetupController.store);

export default routes;
