import pluginBabel from '@rolldown/plugin-babel'
import { reactCompilerPreset } from '@vitejs/plugin-react'
import type { UserConfig } from 'tsdown'

const config: UserConfig = {
  entry: ['./src/index.ts'],
  platform: 'neutral',
  dts: true,
  sourcemap: 'inline',
  css: {
    minify: true,
    modules: {
      generateScopedName: '[name]_[local]_[hash]',
    },
  },
  plugins: [
    pluginBabel({
      presets: [reactCompilerPreset()],
    }),
  ],
}

export default config
