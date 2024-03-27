import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { CisActionProcessor, CisActionPublisher, CisActionSubscriber, CisStateManager } from '../interfaces/cis-patterns';
import { AppActionTypes, AppGlobalAction } from '../interfaces/app-global-action';
import { APPLICATION_STATE_MANAGER } from '../tokens/state-manager';
import { Observable, filter, of as ObservableFactory, switchMap } from 'rxjs';
import { AppNotification } from '../interfaces/app-notification';


@Injectable()
export class NotifcationService implements CisActionSubscriber<AppGlobalAction> {

  actionSource: CisActionPublisher<AppGlobalAction> & CisActionProcessor<AppGlobalAction>= inject(APPLICATION_STATE_MANAGER);


  constructor(){

    this.actionSource.action$.pipe(
      filter( action => action.type === AppActionTypes.MESSAGE_LIST_UPDATE),
      switchMap(this.createNotification)
    ).subscribe(
      notification => this.actionSource.process({type:AppActionTypes.NOTIFICATION_UPDATE, payload:[notification] })
    )
  }

  private createNotification = ():Observable<AppNotification> => {
    return ObservableFactory({
      id:0,
      level:'MEDIUM',
      text:'Message list updated'
    })
  }



}
