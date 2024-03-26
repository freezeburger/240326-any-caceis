import { InjectionToken } from "@angular/core";
import { CisStateManager } from "../interfaces/cis-patterns";
import { AppGlobalState } from "../interfaces/app-global-state";
import { AppGlobalAction } from "../interfaces/app-global-action";


export const APPLICATION_STATE_MANAGER = new InjectionToken<CisStateManager<AppGlobalState,AppGlobalAction>>('APPLICATION_STATE_MANAGER');
