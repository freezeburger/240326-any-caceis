import { APP_INITIALIZER, ErrorHandler, NgModule, PLATFORM_INITIALIZER, inject } from '@angular/core';
import { StateManagerService } from './services/state-manager.service';
import { APPLICATION_STATE_MANAGER } from './tokens/state-manager';
import { SharedModule } from '../shared/shared.module';
import { NotifcationService } from './services/notifcation.service';
import { MessageService } from './services/message.service';
import { CustomErrorHandlerService } from './services/custom-error-handler.service';
import { HTTP_INTERCEPTORS } from '@angular/common/http';

@NgModule({
  providers:[
    StateManagerService,
    NotifcationService,
    MessageService,
    CustomErrorHandlerService,
    { provide:ErrorHandler, useExisting:CustomErrorHandlerService },
    // { provide:StateManagerService, useClass:StateManagerService}
    { provide:APPLICATION_STATE_MANAGER, useExisting:StateManagerService},
    { provide:HTTP_INTERCEPTORS, useExisting:CustomErrorHandlerService, multi:true},
  ],
  imports:[
    SharedModule //Requires HTTPClient
  ]
})
export class CoreModule { 

  applicationStateManager = inject(APPLICATION_STATE_MANAGER);
  notificationSrv = inject(NotifcationService);
  msgService = inject(MessageService);

  constructor(){
    console.log(this)
  }
}
