import { APP_INITIALIZER, NgModule, PLATFORM_INITIALIZER, inject } from '@angular/core';
import { StateManagerService } from './services/state-manager.service';
import { APPLICATION_STATE_MANAGER } from './tokens/state-manager';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  providers:[
    StateManagerService,
    // { provide:StateManagerService, useClass:StateManagerService}
    { provide:APPLICATION_STATE_MANAGER, useExisting:StateManagerService},
  ],
  imports:[
    SharedModule //Requires HTTPClient
  ]
})
export class CoreModule { 

  applicationStateManager = inject(APPLICATION_STATE_MANAGER);

  constructor(){
    console.log(this)
  }
}
