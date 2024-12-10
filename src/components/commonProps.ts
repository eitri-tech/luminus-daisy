/**
 * Common properties for all components.
 * Used to avoid repetition.
 */
interface CommonProps {

  /**
   * The id of the component.
   * Reference: https://developer.mozilla.org/en-US/docs/Web/HTML/Global_attributes/id
   */
    id?: string;

    /**
     * The children of the component.
     * Reference: https://react.dev/reference/react/Children
     */
    children?: React.ReactNode; 
    
    /**
     * The className of the component.
     * Reference: https://developer.mozilla.org/en-US/docs/Web/HTML/Global_attributes/class
     */
    className?: string;

    /**
     * The name of the component.
     * Reference: https://react.dev/reference/react/Component#proptypes
     */
    name?: string;
  }

export default CommonProps;
