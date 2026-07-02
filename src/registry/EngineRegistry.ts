import { Engine } from "../core/Engine.js";

export class EngineRegistry {

    private readonly engines = new Map<string, Engine>();

    public register(engine: Engine): void {

        this.engines.set(
            engine.manifest.id,
            engine
        );

    }

    public get(id: string): Engine | undefined {

        return this.engines.get(id);

    }

    public list(): Engine[] {

        

        return Array.from(
            this.engines.values()
        );

    }

    public count(): number {

    return this.engines.size;

}

public has(id: string): boolean {

    return this.engines.has(id);

}

public findByAction(
    action: string
): Engine[] {

    return this.list().filter(

        engine =>

            engine.manifest.actions.includes(action)

    );

}

public findByInput(
    input: string
): Engine[] {

    return this.list().filter(

        engine =>

            engine.manifest.inputs.includes(input)

    );

}

public findByOutput(
    output: string
): Engine[] {

    return this.list().filter(

        engine =>

            engine.manifest.outputs.includes(output)

    );

}

public findDirect(

    input: string,

    output: string

): Engine[] {

    return this.list().filter(

        engine =>

            engine.manifest.inputs.includes(input)

            &&

            engine.manifest.outputs.includes(output)

    );

}

}
