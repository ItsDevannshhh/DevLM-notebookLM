import { Router } from "express";
import { asyncHandler } from "../utils/async-handler.js";
import {
    bulkDeleteSources,
    createSource,
    deleteSource,
    getSource,
    importWebsite,
    importYoutube,
    listSources,
    uploadPdf,
} from "../controllers/source.controller.js";
import { uploadSinglePdf } from "../middleware/upload.middleware.js";

export const sourceRoutes = Router({ mergeParams: true });

sourceRoutes.post(
    "/upload",
    uploadSinglePdf,
    asyncHandler(uploadPdf),
);