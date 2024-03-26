
export enum AppActionTypes {
    /**
     * Inicates initialization.
     */
        INIT = 'AppActionTypes:INIT',
    /**
     * Requires loading "messages" from the server.
     */
    MESSAGE_LIST_REQUEST = 'AppActionTypes:MESSAGE_LIST_REQUEST',
    /**
     * Incoming "messages" list from server.
     */
    MESSAGE_LIST_UPDATE = 'AppActionTypes:MESSAGE_LIST_UPDATE',
    /**
     * Requires sending a single "message" to the server.
     */
    MESSAGE_SEND_REQUEST = 'AppActionTypes:MESSAGE_SEND_REQUEST',
    /**
     * Server response from a "message" creation.
     */
    MESSAGE_SEND_RESULT = 'AppActionTypes:MESSAGE_SEND_RESULT',
    /**
     * Requires loading "notifications" from the server.
     */
    NOTIFICATION_REQUEST = 'AppActionTypes:NOTIFICATION_LIST_REQUEST',
    /**
     * Incoming "notifications"  list from server.
     */
    NOTIFICATION_UPDATE = 'AppActionTypes:NOTIFICATION_LIST_UPDATE',
} 

export interface AppGlobalAction {
    type: AppActionTypes;
    payload?: any;
}
