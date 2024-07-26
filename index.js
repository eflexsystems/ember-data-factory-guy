/* eslint-env node */
'use strict';
const fs = require('fs');
const Funnel = require('broccoli-funnel');

module.exports = {
  name: require('./package').name,
  isDevelopingAddon: function () {
    return false;
  },

  treeForApp: function (appTree) {
    if (!this.includeFactoryGuyFiles) {
      return appTree;
    }

    const trees = [appTree];

    try {
      if (fs.statSync('tests/factories').isDirectory()) {
        const factoriesTree = new Funnel('tests/factories', {
          destDir: 'tests/factories',
        });
        trees.push(factoriesTree);
      }
    } catch (err) {
      // do nothing;
    }

    const MergeTrees = require('broccoli-merge-trees');

    return MergeTrees(trees);
  },
};
