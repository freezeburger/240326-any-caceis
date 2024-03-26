import { AppMessage } from "./app-message";
import { AppNotification } from "./app-notification";

export interface AppGlobalState{
    messages:AppMessage[];
    notifications:Array<AppNotification>;
}