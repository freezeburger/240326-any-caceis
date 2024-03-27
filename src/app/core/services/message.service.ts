import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { CisActionProcessor, CisActionPublisher, CisActionSubscriber, CisStateManager } from '../interfaces/cis-patterns';
import { AppActionTypes, AppGlobalAction } from '../interfaces/app-global-action';
import { APPLICATION_STATE_MANAGER } from '../tokens/state-manager';
import { Observable, catchError, filter, of, switchMap, tap } from 'rxjs';
import { AppMessage } from '../interfaces/app-message';
import { AppGlobalState } from '../interfaces/app-global-state';

const API_URL = 'http://localhost:5050/messages'; //https://httpstat.us/404
//const API_URL = 'https://httpstat.us/404';

@Injectable()
export class MessageService implements CisActionSubscriber<AppGlobalAction> {


  actionSource: CisStateManager<AppGlobalState, AppGlobalAction> = inject(APPLICATION_STATE_MANAGER);

  private http = inject(HttpClient);

  constructor() {
    console.log('MessageService Started');

    this.actionSource.action$
      .pipe(
        filter(this.isMessageRequest),
        switchMap(this.load)
      )
      .subscribe(this.notifyStateManager)
  }

  //@internals

  private notifyStateManager = (payload: AppMessage[]) => this.actionSource.process({
    type: AppActionTypes.MESSAGE_LIST_UPDATE,
    payload
  })

  private load = (): Observable<AppMessage[]> => {
    console.warn('MessageService Load Called')
   
    return this.http.get<AppMessage[]>(API_URL).pipe(
      catchError(err => {
        console.warn('catchError', err)
        return of(err)
      }),
      tap(() => console.log('Loading in Progress')),
      tap(console.log)
    );
  }

  private isMessageRequest = ({ type }: AppGlobalAction) => type === AppActionTypes.MESSAGE_LIST_REQUEST;


}
