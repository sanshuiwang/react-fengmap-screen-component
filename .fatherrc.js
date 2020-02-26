import react from 'react'
import commonjs from 'rollup-plugin-commonjs'

export default {
  esm: {
    type: 'rollup'
  },
  cjs: 'rollup',
  // umd: {
  //   name: 'ReactFengmapScreenComponent',
  //   globals: {
  //     react: 'React'
  //   }
  // },
  lessInRollupMode: {},
  // cssModules: {
  //   generateScopedName: '[name]__[local]___[hash:base64:5]'
  // },
  extraRollupPlugins: [
    commonjs({
      namedExports: { react: Object.keys(react) }
    })
  ],
  doc: {
    public: './public',
    base: '/react-fengmap-screen-component/',
    title: 'react-fengmap-screen-component',
    description: 'react-fengmap-screen-component'
  }
}
