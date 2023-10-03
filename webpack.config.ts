import path from "path";
import webpack from "webpack";
import {BuildEnv, BuildMode, BuildPaths} from "./config/types/config";
import {buildWebpackConfig} from "./config/build/buildWebpackConfig";


export default (env: BuildEnv) => {

    const paths: BuildPaths = {
        entry: path.resolve(__dirname, 'src', 'index.ts'),
        build: path.resolve(__dirname, 'dist'),
        html: path.resolve(__dirname, 'public', 'index.html')
    }

    const mode: BuildMode = env.mode || 'development'
    const PORT = env.port || 3000

    const isDev = mode === 'development'

    const config: webpack.Configuration = buildWebpackConfig(
        {
            mode,
            isDev,
            paths,
            port: PORT
        }
    );


    return config
}
