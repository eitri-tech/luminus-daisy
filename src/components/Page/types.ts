/**
 * Accepted values for Page properties
 *
 * > Note that some properties are inherited from other sets.
 *
 * @group Properties
 */
export interface PageProps {
  /**
   * Sets the page title; this feature is intended to be used when building web applications with Eitri.
   */
  title?: string

  /**
   * When activated, it controls the top spacing to prevent content from being covered by the gesture bar on mobile devices.
   *
   * Example:
   *
   * ```jsx
   *  <Page topInset={true}>
   * ```
   */
  topInset?: boolean

  /**
   * When activated, it controls the bottom spacing to prevent content from being covered by the gesture bar on mobile devices.
   *
   * Example:
   *
   * ```jsx
   *  <Page bottomInset={true}>
   * ```
   */

  bottomInset?: boolean

  /**
   * Determina a cor da viewport onde a aplicação irá rodar
   * Example:
   *
   * ```jsx
   *  <Page viewportColor="primary-100">
   * ```
   */
  viewportColor?: string

  /**
   * Determina a cor dos ícones da StatusBar do aparelho.
   *
   * Use: `white` para branco ou `black` para preto.
   * Example:
   *
   * ```jsx
   *  <Page statusBarTextColor="white">
   * ```
   */
  statusBarTextColor?: "white" | "black"

  children: React.ReactNode;
}
