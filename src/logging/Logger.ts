import { LogLevel } from "./LogLevel.js";

/**
 * Common logging interface for UDE.
 */
export interface Logger {

    /**
     * Current minimum logging level.
     */
    level: LogLevel;
	banner(message: string): void;
	
    debug(message: string): void;

    info(message: string): void;

    warn(message: string): void;

    error(message: string): void;

    fatal(message: string): void;

    /**
     * Generic logging method.
     */
    log(level: LogLevel, message: string): void;
}
