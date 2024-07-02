/**
 * Accepted values for Window properties
 *
 * > Note that some properties are inherited from other sets.
 *
 * @group Properties
 */
export interface PageProps extends React.HTMLAttributes<HTMLDivElement> {
  /**
   * Sets the page title; this feature is intended to be used when building web applications with Eitri.
   */
  title?: string

  /**
   * This option should be used when there is a form component; when you touch the element, it triggers focus on the contained form component.
   *
   * Example:
   *
   * ```jsx
   * <Window sendFocusToInput>
   *  <Text>Acima de um input</Text>
   *  <Input />
   * </Window>
   * ```
   */
  sendFocusToInput?: boolean

  /**
   * When activated, it controls the top spacing to prevent content from being covered by the gesture bar on mobile devices.
   *
   * Example:
   *
   * ```jsx
   *  <Window topInset={true}>
   * ```
   */
  topInset?: boolean

  /**
   * When activated, it controls the bottom spacing to prevent content from being covered by the gesture bar on mobile devices.
   *
   * Example:
   *
   * ```jsx
   *  <Window bottomInset={true}>
   * ```
   */

  bottomInset?: boolean

  /**
   * Determina a cor da viewport onde a aplicação irá rodar
   * Example:
   *
   * ```jsx
   *  <Window viewportColor="primary-100">
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
   *  <Window statusBarTextColor="white">
   * ```
   */
  statusBarTextColor?: "white" | "black"
}
