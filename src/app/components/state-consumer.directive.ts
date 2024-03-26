import {  inject } from '@angular/core';
import { APPLICATION_STATE_MANAGER } from '../core/tokens/state-manager';


export abstract class StateConsumer {

  applicationState = inject(APPLICATION_STATE_MANAGER);

  loadMessages(){
    this.applicationState.process({type:'LOAD_MESSAGES'})
  }

  sendMessage( payload:any ){
    this.applicationState.process({type:'SEND_MESSAGES', payload})
  }

}
