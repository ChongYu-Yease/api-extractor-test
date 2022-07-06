import path from 'path'
import typescript from '@rollup/plugin-typescript'
import nodeResolve from 'rollup-plugin-node-resolve';
import commonjs from 'rollup-plugin-commonjs';

// 初始化配置
const initConfig = () => {
    return {
        input: 'src/index.ts',
        output: [{
            file: 'dist/index.umd.js',
            format: 'umd',
            name: "Index",
        }, ],

        plugins: [
            typescript({
                tsconfig: './tsconfig.json'
            }),

            nodeResolve({
                mainField: ['jsnext:main', 'browser', 'module', 'main'],
                browser: true
            }),
            commonjs(),
        ],
    }
}


export default initConfig()