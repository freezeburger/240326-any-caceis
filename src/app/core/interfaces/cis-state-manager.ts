import { BehaviorSubject } from "rxjs";
import { AppGlobalAction } from "./app-global-action";
import { AppGlobalState } from "./app-global-state";

/**
 * Presenter service for the global application state.
 * No component sould directly acess any core services.
 * 
 * Use the STATE_MANAGER token for injection;
 */
export interface CisStateManager {

    /**
     * state$ is global state object.
     * Call the async in template pipe for eas-of-use
     */
    readonly state$:BehaviorSubject<AppGlobalState>;

    /**
     * Actions perform state modifications.
     * @param action 
     */
    process( action:AppGlobalAction):void;

}
