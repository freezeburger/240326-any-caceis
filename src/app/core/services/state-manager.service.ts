import { Injectable } from '@angular/core';
import { CisStateManager } from '../interfaces/cis-patterns';

import { AppActionTypes, AppGlobalAction } from '../interfaces/app-global-action';
import { AppGlobalState } from '../interfaces/app-global-state';
import { BehaviorSubject, Observable } from 'rxjs';

/* 

RXJS 
- Observable
Sujet = observable avec un canal de publication. (next)
Subject
ReplaySubject
*BehaviorSubjet
AsyncSubject
*/

@Injectable()
export class StateManagerService implements CisStateManager<AppGlobalState, AppGlobalAction>{

  private _state = new BehaviorSubject<AppGlobalState>({
    messages: [],
    notifications: []
  })

  private _action = new BehaviorSubject<AppGlobalAction>({
    type: AppActionTypes.INIT,
    payload: null
  })

  public readonly action$ = this._action.asObservable();
  public readonly state$ = this._state.asObservable();

  public process(action: AppGlobalAction): void {
    this._action.next(action);
    console.table(action)

    // on(BooksApiActions.retrievedBookList, (_state, { books }) => books)

    if (AppActionTypes.MESSAGE_LIST_UPDATE === action.type)
      this._state.next({ ...this._state.value, messages: action.payload })

    if (AppActionTypes.NOTIFICATION_UPDATE === action.type)
      this._state.next({ ...this._state.value, notifications: action.payload })

  }

}

/* 
{
    messages:[],
    notifications:[],
  } 
*/
