
/**
 * id
 * level LOW MEDIUM HIGH
 * text string
 * 
 */

import { TextShort, UniqueId } from "./app.generic";

export type AppNotificationLevel =  'LOW' | 'MEDIUM' | 'HIGH';

export interface AppNotification{
    id:UniqueId;
    level: AppNotificationLevel;
    text:TextShort;
}