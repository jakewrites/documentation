import React from 'react';

if (process.env.NODE_ENV !== 'production') {
  const { whyDidYouUpdate } = require('why-did-you-update');
  whyDidYouUpdate(React);
}

import { configure, addDecorator, setAddon } from '@storybook/react';
import { setOptions } from '@storybook/addon-options';
import infoAddon, { setDefaults } from '@storybook/addon-info';

// import '../styles/globalStyles.scss';

addDecorator(story => (
  <div style={{ padding: '2em' }}>
    {story()}
  </div>
));

function loadStories() {
  require('../src/stories/Button');
}

setOptions({
  name: 'IOTA Documentation',
  url: 'https://github.com/iotaledger/documentation',
  goFullScreen: false,
});

// addon-info https://www.npmjs.com/package/@storybook/addon-info
setDefaults({
  header: false, // Toggles display of header with component name and description
  inline: true, // Displays info inline vs click button to view
  source: true, // Displays the source of story Component
  propTables: [/* Components used in story */], // displays Prop Tables with this components
  propTablesExclude: [], // Exclude Components from being shoun in Prop Tables section
  styles: {}, // Overrides styles of addon
  marksyConf: {}, // Overrides components used to display markdown. Warning! This option's name will be likely deprecated in favor to "components" with the same API in 3.3 release. Follow this PR #1501 for details
  maxPropsIntoLine: 1, // Max props to display per line in source code
  maxPropObjectKeys: 10,
  maxPropArrayLength: 10,
  maxPropStringLength: 100,
});

setAddon(infoAddon);

configure(loadStories, module);