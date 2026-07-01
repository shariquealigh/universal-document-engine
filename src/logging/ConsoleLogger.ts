import { Logger } from "./Logger.js";
import { LogLevel } from "./LogLevel.js";

export class ConsoleLogger implements Logger {

    private currentLevel = LogLevel.INFO;

    public trace(message: string): void {
        console.log("[TRACE]", message);
    }

    public debug(message: string): void {
        console.log("[DEBUG]", message);
    }

    public info(message: string): void {
        console.log("[INFO ]", message);
    }

    public warn(message: string): void {
        console.warn("[WARN ]", message);
    }

    public error(message: string): void {
        console.error("[ERROR]", message);
    }

    public level(): LogLevel {
        return this.currentLevel;
    }

}
