import { Injectable } from '@angular/core';
import { CisStateManager } from '../interfaces/cis-state-manager';
import { BehaviorSubject } from 'rxjs';
import { AppGlobalAction } from '../interfaces/app-global-action';
import { AppGlobalState } from '../interfaces/app-global-state';

@Injectable()
export class StateManagerService implements CisStateManager{

  state$ = new BehaviorSubject<AppGlobalState>({
    messages:[]
  });

  process(action: AppGlobalAction): void {
    console.table(action)
  }

}
