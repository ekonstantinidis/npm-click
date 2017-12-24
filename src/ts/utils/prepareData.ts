export default function prepareData(packageJson: {
  dependencies?: any;
  devDependencies?: any;
}): any {
  const dependencies: any = Object.keys(packageJson.dependencies).map(function(
    key
  ) {
    return {
      name: key,
      requiredVersion: packageJson.dependencies[key],
      isDependency: true,
    };
  });

  const devDependencies: any = Object.keys(packageJson.devDependencies).map(
    function(key) {
      return {
        name: key,
        requiredVersion: packageJson.devDependencies[key],
        isDependency: false,
      };
    }
  );

  return [...dependencies, ...devDependencies];
}