import { Engine } from "./Engine.js";
import { StructuredDocument } from "../models/StructuredDocument.js";

export interface ImportEngine extends Engine {

    import(
        source: string
    ): Promise<StructuredDocument>;

}
