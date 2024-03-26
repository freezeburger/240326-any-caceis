import { InjectionToken } from "@angular/core";
import { CisStateManager } from "../interfaces/cis-state-manager";


export const APPLICATION_STATE_MANAGER = new InjectionToken<CisStateManager>('APPLICATION_STATE_MANAGER');