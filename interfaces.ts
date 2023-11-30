import {Compiler} from "webpack";

export interface IGetEntrypointsOptions {
    fileName: string;
}

export interface IGetEntrypointsPlugin {
    options: IGetEntrypointsOptions;
    apply(compiler: Compiler): void;
}

export interface IGetEntrypointsEntries {
    entry: {
        js: string[];
        css: string[];
    };
    publicPath: string;
    version: number;
}

