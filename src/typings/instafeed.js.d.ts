declare interface InstafeedConfig {
    get?: string;
    clientId?: string;
    accessToken?: string;
    resolution?: string;
    sortBy?: string;
    limit?: number;
    template?: string;
}

declare module 'instafeed.js' {

    declare class Instafeed {
        constructor(config: InstafeedConfig);

        run(): void;
    }

    export = Instafeed;
}