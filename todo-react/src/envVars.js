export const REACT_APP_SERVER_URL = getEnvVar('{REACT_APP_SERVER_URL}');


/** When in develop mode, read env vars normally, when in production output a
 * special string that will be replaced by script
 * @param {string} envVar the env var name
 * @return {string} the env var value
 */
function getEnvVar(envVarStr) {
  // is true when running: npm run build
  const isProd = process.env.NODE_ENV === 'production';
  const envVar = envVarStr.replace('{', '').replace('}', '');
  return isProd ? envVarStr : process.env[envVar] || '';
}

