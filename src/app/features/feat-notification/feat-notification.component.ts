import { Component } from '@angular/core';
import { StateConsumer } from '../../components/state-consumer.directive';

@Component({
  selector: 'app-feat-notification',
  templateUrl: './feat-notification.component.html',
  styleUrl: './feat-notification.component.scss'
})
export class FeatNotificationComponent extends StateConsumer {
}
