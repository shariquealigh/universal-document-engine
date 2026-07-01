/**
 * Universal Document Engine
 * Global version information
 */

export class Version {

    public static readonly NAME = "Universal Document Engine";

    public static readonly SHORT_NAME = "UDE";

    public static readonly VERSION = "0.1.0-alpha";

    public static readonly CODENAME = "Genesis";

    public static readonly AUTHOR = "Syed Sharique Ali";

    public static readonly LICENSE = "MIT";

    public static readonly WEBSITE = "https://github.com/your-repository";

    public static readonly BUILD_DATE = "2026-07-01";

    /**
     * Returns the complete product title.
     */
    public static title(): string {

        return `${Version.NAME} ${Version.VERSION}`;

    }

    /**
     * Returns a startup banner.
     */
    public static banner(): string {

        return `
============================================================
 Universal Document Engine
------------------------------------------------------------
 Version   : ${Version.VERSION}
 Codename  : ${Version.CODENAME}
 Author    : ${Version.AUTHOR}
 License   : ${Version.LICENSE}
============================================================
`;

    }

}
