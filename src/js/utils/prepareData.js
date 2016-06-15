export default function prepareData(packageJson) {
  const dependencies = Object.keys(packageJson.dependencies).map(function(key) {
    return {
      name: key,
      version: packageJson.dependencies[key],
      isDependency: true
    };
  });

  const devDependencies = Object.keys(packageJson.devDependencies).map(function(key) {
    return {
      name: key,
      version: packageJson.devDependencies[key],
      isDependency: false
    };
  });

  return [
    ...dependencies,
    ...devDependencies
  ];
};
