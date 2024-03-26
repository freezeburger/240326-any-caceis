
import { FormGroup,FormControl } from "@angular/forms";

/**
 * FormMapping
 */
type MappedToForm<Type> = {
    [Properties in keyof Type]: FormControl<Type[Properties] |null>
}

/**
 * Timestamp
 */
export type Timestamp = number;

/**
 * A unique identifier within the same collection.
 */
export type UniqueId = number;

/**
 * Unbounded string
 */
export type TextLong = string;

/**
 * 140 characters maximum
 */
export type TextShort = string;

/**
 * An application user profile references
 */
export type Author = unknown;