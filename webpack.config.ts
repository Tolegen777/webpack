import path from "path";
import webpack from "webpack";
import {BuildMode, BuildPaths} from "./config/types/config";
import {buildWebpackConfig} from "./config/build/buildWebpackConfig";

const paths: BuildPaths = {
    entry: path.resolve(__dirname, 'src', 'index.ts'),
    build: path.resolve(__dirname, 'dist'),
    html: path.resolve(__dirname, 'public', 'index.html')
}

const mode: BuildMode = 'development'
const isDev = mode === 'development'

const PORT = 3000

const config: webpack.Configuration = buildWebpackConfig(
    {
        mode,
        isDev,
        paths,
        port: PORT
    }
);

export default config
