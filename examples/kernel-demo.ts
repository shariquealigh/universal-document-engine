import { UDEKernel } from "../src/kernel/UDEKernel.js";
import { EngineRegistry } from "../src/registry/EngineRegistry.js";
import { DummyEngine } from "../src/engines/engine-dummy/DummyEngine.js";

const kernel = new UDEKernel();

kernel.start();

const registry = new EngineRegistry();

registry.register(new DummyEngine());

console.log("");

console.log("Registered Engines : " + registry.count());

console.log("");

for (const engine of registry.list()) {

    console.log("- " + engine.manifest.id);

}

console.log("");

console.log("Engines supporting 'test'");

for (

    const engine of registry.findByAction("test")

) {

    console.log(

        "-",

        engine.manifest.name

    );

}

console.log("");

console.log("Engines accepting text/plain");

for (const engine of registry.findByInput("text/plain")) {

    console.log("-", engine.manifest.name);

}

console.log("");

console.log("Engines producing text/plain");

for (const engine of registry.findByOutput("text/plain")) {

    console.log("-", engine.manifest.name);

}