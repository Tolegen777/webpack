import {BuildOptions} from "../types/config";
import webpack from "webpack";
import {buildPlugins} from "./buildPlugins";
import {buildResolvers} from "./buildResolvers";
import {buildLoaders} from "./buildLoaders";
import {buildDevServer} from "./buildDevServer";
export function buildWebpackConfig(options: BuildOptions): webpack.Configuration {
 return {
     mode: options.mode,
     entry: options.paths.entry,
     output: {
         filename: '[name].[contenthash].js',
         path: options.paths.build,
         clean: true,
     },
     module: {
         rules: buildLoaders(),
     },
     resolve: buildResolvers(),
     plugins: buildPlugins(options),
     devServer: buildDevServer(options),
     devtool: 'inline-source-map'
 }
}
