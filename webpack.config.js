const GasPlugin = require("gas-webpack-plugin");
const TerserPlugin = require('terser-webpack-plugin');
const path = require('path');
const assignPath = (pathUser) => path.resolve(__dirname,pathUser?pathUser:'')

const entry = assignPath('./src/Index.js');
const outDir = assignPath();
const outName = 'Code.js';

module.exports = {
    mode: "development",
    entry,
    output: {
        path: outDir,
        filename: outName,
    },
    plugins: [
        new GasPlugin({
            autoGlobalExportsFiles: [entry],
        })
    ],
    optimization: {
        minimize: true,
        minimizer: [new TerserPlugin()],
    },
    devtool: false,
};
