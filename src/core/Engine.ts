import { EngineManifest } from "./EngineManifest.js";
import { ExecutionContext } from "./ExecutionContext.js";
import { EngineResult } from "./EngineResult.js";

export interface Engine {

    readonly manifest: EngineManifest;

    execute(
        action: string,
        payload: unknown,
        context: ExecutionContext
    ): Promise<EngineResult>;

}



