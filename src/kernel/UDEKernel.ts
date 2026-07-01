import { Version } from "./Version.js";
import { ConsoleLogger } from "../logging/ConsoleLogger.js";

export class UDEKernel {

    private readonly logger = new ConsoleLogger();

    public async boot(): Promise<void> {

        console.log(Version.banner());

        this.logger.info("Booting UDE Kernel...");

        this.logger.info("Kernel Ready.");

    }

    public async shutdown(): Promise<void> {

        this.logger.info("Shutting down...");

        this.logger.info("Shutdown Complete.");

    }

    public version(): string {

        return Version.VERSION;

    }

}
