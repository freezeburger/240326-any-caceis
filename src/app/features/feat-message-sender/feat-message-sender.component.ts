import { Component } from '@angular/core';
import { StateConsumer } from '../../components/state-consumer.directive';
import { AppActionTypes } from '../../core/interfaces/app-global-action';
import { FormControl, FormGroup } from '@angular/forms';
import { AppMessagePayload } from '../../core/interfaces/app-message';
import { MappedToForm } from '../../core/interfaces/app.generic';

@Component({
  selector: 'app-feat-message-sender',
  templateUrl: './feat-message-sender.component.html',
  styleUrl: './feat-message-sender.component.scss'
})
export class FeatMessageSenderComponent  extends StateConsumer {

  private sendMessage = this.createAction(AppActionTypes.MESSAGE_SEND_REQUEST);

  messageForm = new FormGroup<MappedToForm<AppMessagePayload>>({
    author: new FormControl(''),
    title:new FormControl(''),
    text:new FormControl(''),
    creationDate:new FormControl(null)
  })

  send(){
    // TODO Validation de saisie 
    this.sendMessage(this.messageForm.value as AppMessagePayload);
  }

}
