import {Compiler} from "webpack";

/**
* Interface for GetEntrypointsPlugin that describes an options.
*
* @inteface IGetEntrypointsOptions
 */
export interface IGetEntrypointsOptions {
    /**
     * File name to save the entrypoints.
     */
    fileName: string;
}

/**
 * Interface for GetEntrypointsPlugin that describes a plugin's class.
 *
 * @interface IGetEntrypointsPlugin
 */
export interface IGetEntrypointsPlugin {

    /**
     * Options needed to use the plugin.
     */
    options: IGetEntrypointsOptions;

    /**
     * Main function that needs to work the plugin.
     *
     * @param {Compiler} compiler - The compiler to apply.
     * @return {void} This function does not return anything.
     */
    apply(compiler: Compiler): void;
}

/**
 * Interface that describes an object used to save the entrypoints.
 *
 * @interface IGetEntrypointsEntries
 * @property {object} entry - The arrays of js and css files.
 * @property {string[]} entry.js - Array of js files.
 * @property {string[]} entry.css - Array of css files.
 * @property {string} publicPath - The public path.
 * @property {number} version - The version of file.
 */
export interface IGetEntrypointsEntries {
    entry: {
        js: string[];
        css: string[];
    };
    publicPath: string;
    version: number;
}

