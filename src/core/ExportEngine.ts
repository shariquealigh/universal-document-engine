import { Engine } from "./Engine.js";
import { StructuredDocument } from "../models/StructuredDocument.js";

export interface ExportEngine extends Engine {

    export(
        document: StructuredDocument,
        destination: string
    ): Promise<void>;

}
