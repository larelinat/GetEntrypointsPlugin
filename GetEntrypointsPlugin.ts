const fs = require('fs');
import {IGetEntrypointsPlugin, IGetEntrypointsOptions, IGetEntrypointsEntries} from "./interfaces";
import { Compiler } from 'webpack';


export default class GetEntrypointsPlugin implements IGetEntrypointsPlugin {
    options: IGetEntrypointsOptions;

    constructor(options: IGetEntrypointsOptions) {
        this.options = options;
    }

    apply(compiler: Compiler): void {
        compiler.hooks.emit.tapAsync('ConsolerPlugin', (compilation, callback) => {
            const entrypoints: IGetEntrypointsEntries = {
                entry: {
                    js: [],
                    css: []
                },
                publicPath: String(compilation.outputOptions.publicPath),
                version: new Date().getTime()
            };

            compilation.entrypoints.forEach((entry) => {
                entry.getEntrypointChunk().files.forEach((file) => {
                    if(file.match(/\.css$/)){
                        entrypoints.entry.css.push(file);
                    }
                    else if(file.match(/\.js$/)){
                        entrypoints.entry.js.push(file);
                    }
                })
            })

            fs.writeFile(this.options.fileName, JSON.stringify(entrypoints), () => {});
            callback();

        })
    }

}
