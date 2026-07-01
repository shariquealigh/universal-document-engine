import { Logger } from "./Logger.js";
import { LogLevel } from "./LogLevel.js";

export class ConsoleLogger implements Logger {

    public level: LogLevel;

    constructor(level: LogLevel = LogLevel.INFO) {
        this.level = level;
    }

	public banner(message: string): void {

    console.log(message);

}

    public debug(message: string): void {
        this.log(LogLevel.DEBUG, message);
    }

    public info(message: string): void {
        this.log(LogLevel.INFO, message);
    }

    public warn(message: string): void {
        this.log(LogLevel.WARN, message);
    }

    public error(message: string): void {
        this.log(LogLevel.ERROR, message);
    }

    public fatal(message: string): void {
        this.log(LogLevel.FATAL, message);
    }

    public log(level: LogLevel, message: string): void {

        if (level < this.level)
            return;

        const prefix = LogLevel[level];

        switch (level) {

            case LogLevel.ERROR:
            case LogLevel.FATAL:
                console.error(`[${prefix}] ${message}`);
                break;

            case LogLevel.WARN:
                console.warn(`[${prefix}] ${message}`);
                break;

            default:
                console.log(`[${prefix}] ${message}`);
        }
    }
}
