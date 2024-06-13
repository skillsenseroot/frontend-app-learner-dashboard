/*
Learner Dashboard is now able to handle JS-based configuration!

For the time being, the `.env.*` files are still made available when cloning down this repo or pulling from
the master branch. To switch to using `env.config.js`, make a copy of `example.env.config.js` and configure as needed.

For testing with Jest Snapshot, there is a mock in `/src/setupTest.jsx` for `getConfig` that will need to be
uncommented.

Note: having both .env and env.config.js files will follow a predictable order, in which non-empty values in the
JS-based config will overwrite the .env environment variables.

frontend-platform's getConfig loads configuration in the following sequence:
- .env file config
- optional handlers (commonly used to merge MFE-specific config in via additional process.env variables)
- env.config.js file config
- runtime config
*/
import { DIRECT_PLUGIN, PLUGIN_OPERATIONS } from '@openedx/frontend-plugin-framework';

const config = {
  pluginSlots: {
    footer_slot: {
      plugins: [
        {
          // Hide the default footer
          op: PLUGIN_OPERATIONS.Hide,
          widgetId: 'default_contents',
        },
        {
          // Insert a custom footer
          op: PLUGIN_OPERATIONS.Insert,
          widget: {
            id: 'custom_footer',
            type: DIRECT_PLUGIN,
            RenderWidget: () => (
              <h1 style={{textAlign: 'center'}}>🦶</h1>
            ),
          },
        },
      ]
    }
  },
}

export default config;
