const appName = 'app';
const createActionPrefix = (actionNameSpace, actionNamePrefix = '') =>
  actionNameSpace
    ? `${appName}/${actionNameSpace}/${actionNamePrefix}`
    : `${appName}/${actionNamePrefix}`;

export default createActionPrefix;
