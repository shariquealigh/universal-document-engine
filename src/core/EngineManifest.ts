export interface EngineManifest {

    id: string;

    name: string;

    version: string;

    description: string;

    vendor: string;

    inputs: string[];

    outputs: string[];

    actions: string[];

    priority: number;

}
