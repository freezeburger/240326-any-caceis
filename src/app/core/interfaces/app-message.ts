/* 
export interface AppMessage{
    id:number;
    author:unknown;
    title:string;
    text:string;
    creationDate:number;
} 
*/

import { Author, TextLong, TextShort, Timestamp, UniqueId } from "./app.generic";

/**
 * Message as received from server.
 */
export interface AppMessage{
    id:UniqueId;
    author:Author;
    title:TextShort;
    text:TextLong;
    creationDate:Timestamp;
}

/**
 * Represents a user iinput to send to the server
 */
export type AppMessagePayload = Omit<AppMessage, 'id'> ;



/* 
Découverte des utils typescript 
Partial - des cléfs incluses
Omit - toutes les clés sauf
Pick - uniquement les clef coisies
*/

