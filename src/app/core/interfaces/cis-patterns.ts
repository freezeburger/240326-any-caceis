import { BehaviorSubject, Observable } from "rxjs";

/**
 * Presenter service for the global application state.
 * No component sould directly acess any core services.
 * 
 * Use the STATE_MANAGER token for injection;
 */
export interface CisStateManager<S, A> extends CisActionPublisher<A>, CisActionProcessor<A>, CisStatePublisher<S> {
}

/**
 * Publish an action observbale action stream.
*/
export interface CisActionPublisher<A> {
    readonly action$: Observable<A>;
}

export interface CisActionSubscriber<A> {
    actionSource: CisActionPublisher<A>
}

export interface CisActionProcessor<A> {
    /**
     * Actions perform state modifications.
     * @param action 
     */
    process(action: A): void;
}

export interface CisActionCreator<T> {
    createAction(type: T): (payload?: any) => void;
}

export interface CisStatePublisher<S> {
    /**
     * state$ is global state object.
     * Call the async in template pipe for eas-of-use
     */
    readonly state$: Observable<S>;
}

export interface CisStatePresenter<S> {
    readonly applicationState: CisStatePublisher<S>
}

