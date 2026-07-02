import { EngineRegistry } from "../src/registry/EngineRegistry.js";
import { DummyEngine } from "../src/engines/engine-dummy/DummyEngine.js";
import { Planner } from "../src/planner/Planner.js";

const registry = new EngineRegistry();

registry.register(

    new DummyEngine()

);

const planner =

    new Planner(registry);

const result =

    planner.plan({

        input: "text/plain",

        output: "text/plain"

    });

console.log(result);
