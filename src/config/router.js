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
   * Uncomment and modify if you want to change the home page component,
   * or if you want to disable it completely.
   */
  /**
  home: {
    enabled: true,
    component: require('@/pages/User/Home/Home').default
  },
  **/

  /**
   * Uncomment and modify if you want to change the user account page
   *
   * The full _root level_ key is overwritten, the overrides do not happen
   * on the children. Commenting something out here will _not_ load the
   * base value, in fact it will _disable_ it completely.
   * component (or disable entirely).
   */
  /**
  account: {
    enabled: true,
    component: require('@/pages/User/Details').default
  }
  **/
}
