import { inject } from '@angular/core';
import { APPLICATION_STATE_MANAGER } from '../core/tokens/state-manager';
import { AppGlobalState } from '../core/interfaces/app-global-state';
import { CisActionCreator, CisStatePresenter } from '../core/interfaces/cis-patterns';
import { AppActionTypes, AppGlobalAction } from '../core/interfaces/app-global-action';
import { AppMessage, AppMessagePayload } from '../core/interfaces/app-message';
import { AppNotification } from '../core/interfaces/app-notification';


export abstract class StateConsumer implements CisStatePresenter<AppGlobalState>, CisActionCreator<AppActionTypes>{

  applicationState = inject(APPLICATION_STATE_MANAGER);

/**
 * TypeScript Overloads.
 * Use the correposnding payload to your "AppActionTypes" 
 */
  createAction(type: AppActionTypes.MESSAGE_LIST_REQUEST): (payload?: null) => void
  createAction(type: AppActionTypes.MESSAGE_LIST_UPDATE): (payload: AppMessage[]) => void
  createAction(type: AppActionTypes.MESSAGE_SEND_REQUEST): (payload: AppMessagePayload) => void
  createAction(type: AppActionTypes.MESSAGE_SEND_RESULT): (payload: AppMessage) => void
  createAction(type: AppActionTypes.NOTIFICATION_LIST_REQUEST): (payload: Omit<AppNotification, 'id'>) => void
  createAction(type: AppActionTypes.NOTIFICATION_LIST_UPDATE): (payload: AppNotification) => void
  createAction(type: AppActionTypes): (payload?: any) => void {
    return (payload?: any) => {
      this.applicationState.process({ type, payload })
    }
  }


}
