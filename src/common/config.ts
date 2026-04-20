import { LoadJsonFile } from 'utils';
import type StaticConfig from '~/static/config.json';

let config = LoadJsonFile('static/config.json');

$BROWSER: {
  config = await config;
}

export default config as typeof StaticConfig;
