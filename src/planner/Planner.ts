import { EngineRegistry } from "../registry/EngineRegistry.js";
import { PlannerRequest } from "./PlannerRequest.js";
import { PlannerResult } from "./PlannerResult.js";

export class Planner {

    public constructor(

        private readonly registry: EngineRegistry

    ) {}


public plan(

    request: PlannerRequest

): PlannerResult {

    const engines =

        this.registry.findDirect(

            request.input,

            request.output

        );

    if (

        engines.length > 0

    ) {

        return {

            success: true,

            message: "Direct engine found.",

            pipeline: [

                engines[0].manifest.name

            ]

        };

    }

    return {

        success: false,

        message: "No direct engine found.",

        pipeline: []

    };

}



}