const pkgJson = require('../package.json');
import semver from 'semver';

const docVersion = `v${ semver.major(pkgJson.version) }.${ semver.minor(pkgJson.version) }`;

export const DOC_LINKS = {
  CONSOLE_URL:             `https://docs.harvesterhci.io/${ docVersion }/host/`,
  RANCHER_INTEGRATION_URL: `https://docs.harvesterhci.io/${ docVersion }/rancher/rancher-integration`,
  STORAGE_NETWORK_EXAMPLE: `https://docs.harvesterhci.io/${ docVersion }/advanced/storagenetwork#configuration-example`,
  KSMTUNED_MODE:           `https://docs.harvesterhci.io/${ docVersion }/host/#ksmtuned-mode`,
  UPGRADE_URL:             `https://docs.harvesterhci.io/${ docVersion }/upgrade/index`
};
