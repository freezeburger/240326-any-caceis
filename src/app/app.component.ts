import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CoreModule } from './core/core.module';
import { SharedModule } from './shared/shared.module';
import { StateConsumer } from './components/state-consumer.directive';
import { AppActionTypes } from './core/interfaces/app-global-action';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    SharedModule,
    CoreModule
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent extends StateConsumer {
  loadMessages = this.createAction(AppActionTypes.MESSAGE_LIST_REQUEST);
  sendMessage = this.createAction(AppActionTypes.MESSAGE_SEND_REQUEST);
}
