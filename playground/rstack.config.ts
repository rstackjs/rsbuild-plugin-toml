// Configuration guide: https://rstack.rs/config
import { define } from 'rstack';
import { pluginToml } from '../src/index.ts';

define.app({
  plugins: [pluginToml()],
});
