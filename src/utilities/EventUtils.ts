/**
 * Utility class for events
 */
export class EventUtils {
    
    /**
     * Creates a synthetic event
     * @param type 
     * @param target 
     * @param bubbles 
     * @param cancelable 
     * @returns 
     */
    static createSyntheticEvent(
        type: string,
        target: EventTarget,
        bubbles: boolean,
        cancelable: boolean
    ): Event {
        const event = new Event(type, { bubbles, cancelable });
        Object.defineProperty(event, 'target', {
            value: target,
            writable: false,
        });
        Object.defineProperty(event, 'currentTarget', {
            value: target,
            writable: false,
        });
        return event;
    }


    static createOnChangeEvent(
        selectElement: HTMLSelectElement,
        newValue: string
    ):React.ChangeEvent<HTMLSelectElement>{
        const event = {
            target: {
              ...selectElement,
              value: newValue,
            },
            currentTarget: selectElement,
            bubbles: true,
            cancelable: true,
          };
        
          return event as React.ChangeEvent<HTMLSelectElement>;
    }
}
