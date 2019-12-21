declare module '@interactjs/interact/interact' {
    interface InteractStatic {
        maxInteractions: (newValue: any) => any;
    }
}
declare module '@interactjs/core/scope' {
    interface Scope {
        autoStart: AutoStart;
        maxInteractions: (...args: any) => any;
    }
}
declare module '@interactjs/core/defaultOptions' {
    interface BaseDefaults {
        actionChecker?: any;
        cursorChecker?: any;
        styleCursor?: any;
    }
    interface PerActionDefaults {
        manualStart?: boolean;
        max?: number;
        maxPerElement?: number;
        allowFrom?: string | Interact.Element;
        ignoreFrom?: string | Interact.Element;
        cursorChecker?: Interact.CursorChecker;
        mouseButtons?: 0 | 1 | 2 | 4 | 16;
    }
}
declare module '@interactjs/core/scope' {
    interface SignalArgs {
        'autoStart:before-start': Interact.SignalArgs['interactions:move'];
        'autoStart:prepared': {
            interaction: Interact.Interaction;
        };
    }
}
export interface AutoStart {
    maxInteractions: number;
    withinInteractionLimit: typeof withinInteractionLimit;
    cursorElement: Interact.Element;
}
declare function withinInteractionLimit<T extends Interact.ActionName>(interactable: Interact.Interactable, element: Interact.Element, action: Interact.ActionProps<T>, scope: Interact.Scope): boolean;
declare const _default: import("@interactjs/core/scope").Plugin;
export default _default;
