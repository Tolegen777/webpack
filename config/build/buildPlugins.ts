import webpack from "webpack";
import {BuildOptions} from "../types/config";
import HtmlWebpackPlugin from "html-webpack-plugin";

export function buildPlugins({paths}: BuildOptions): webpack.WebpackPluginInstance[] {
    return [
        new webpack.ProgressPlugin(),
        new HtmlWebpackPlugin({ template: paths.html }),
    ]
}
