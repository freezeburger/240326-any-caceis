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

export interface AppMessage{
    id:UniqueId;
    author:Author;
    title:TextShort;
    text:TextLong;
    creationDate:Timestamp;
}