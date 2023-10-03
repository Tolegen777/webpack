import {BuildOptions} from "../types/config";
import webpack from "webpack";
import {buildPlugins} from "./buildPlugins";
import {buildResolvers} from "./buildResolvers";
import {buildLoaders} from "./buildLoaders";
import {buildDevServer} from "./buildDevServer";
export function buildWebpackConfig(options: BuildOptions): webpack.Configuration {

  const {isDev, mode, paths} = options

 return {
     mode: mode,
     entry: paths.entry,
     output: {
         filename: '[name].[contenthash].js',
         path: paths.build,
         clean: true,
     },
     module: {
         rules: buildLoaders(),
     },
     resolve: buildResolvers(),
     plugins: buildPlugins(options),
     devServer: isDev ? buildDevServer(options) : undefined,
     devtool: isDev ? 'inline-source-map' : undefined
 }
}
