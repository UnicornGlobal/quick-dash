/**
 * The configuration is 'order of precedence' whereby the base framework
 * config is loaded, and then these files are parsed and whatever is
 * configured then overwrites the base config.
 *
 * NB The config key is based on the file name.
 *
 * All examples are based on the base framework config.
 *
 * The full _root level_ key is overwritten, the overrides do not happen
 * on the children. Commenting something out here will _not_ load the
 * base value, in fact it will _disable_ it completely.
 *
 * Also view the base framework config folder for more info.
 */
export default {
  /**
   * This will disable the admin menu altogether and will make all the
   * options that follow it moot.
   */
  // enabled: true,
  /**
   * This will enable the admin user management functionality
   */
  // users: true,
  /**
   * Uncomment if you want to manage the settings page component and
   * availability.
   */
  /**
  settings: {
    enabled: true,
    component: require('@/pages/User/Details').default
  }
  **/
}
