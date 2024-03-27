import { NgModule } from '@angular/core';
import { SharedModule } from '../shared/shared.module';
import { FeatMessageSenderComponent } from './feat-message-sender/feat-message-sender.component';
import { FeatNotificationComponent } from './feat-notification/feat-notification.component';
import { FeatBookComponent } from './feat-book/feat-book.component';
import { FeatBookService } from './feat-book/feat-book.service';


@NgModule({
  declarations: [FeatMessageSenderComponent, FeatNotificationComponent, FeatBookComponent],
  exports: [FeatMessageSenderComponent, FeatNotificationComponent, FeatBookComponent],
  imports: [
    SharedModule
  ],
  providers:[
    FeatBookService
  ]
})
export class FeaturesModule { }
