/**
 * Universal Document Engine
 * Kernel
 */

import { Logger } from "../logging/Logger.js";
import { ConsoleLogger } from "../logging/ConsoleLogger.js";
import { Version } from "./Version.js";

export class UDEKernel {

    private readonly logger: Logger;

    public constructor() {

        this.logger = new ConsoleLogger();

    }

    public getLogger(): Logger {

        return this.logger;

    }

    public getVersion(): string {

    return Version.title();

}

public start(): void {

    this.logger.banner(Version.banner());

    this.logger.info("Kernel started.");

}

}
