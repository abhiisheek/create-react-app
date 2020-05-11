const fs = require('fs');
const path = require('path');

const getConfig = (customConfigFileName, defaultConfig, env) => {
  const customConfigPath = path.resolve(
    process.cwd(),
    `./archetype/${customConfigFileName}`
  );
  const useCustomConfig = fs.existsSync(customConfigPath);

  return useCustomConfig
    ? require(customConfigPath)(env, defaultConfig)
    : defaultConfig;
};

module.exports = getConfig;
