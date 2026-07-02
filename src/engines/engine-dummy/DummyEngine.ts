import { Engine } from "../../core/Engine.js";
import { EngineManifest } from "../../core/EngineManifest.js";
import { ExecutionContext } from "../../core/ExecutionContext.js";
import { EngineResult } from "../../core/EngineResult.js";

export class DummyEngine implements Engine {

public readonly manifest: EngineManifest = {

    id: "dummy",

    name: "Dummy Engine",

    version: "1.0.0",

    description: "Simple demonstration engine",

    vendor: "UDE",

    inputs: [

        "text/plain"

    ],

    outputs: [

        "text/plain"

    ],

    actions: [

        "test"

    ],

    priority: 1

};

public async execute(
    action: string,
    payload: unknown,
    context: ExecutionContext
): Promise<EngineResult> {

    console.log(
        "DummyEngine:",
        action
    );

    return {

        success: true,

        message: "Dummy execution completed."

    };

}
}
