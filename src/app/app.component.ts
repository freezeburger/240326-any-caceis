import { Component, inject } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CoreModule } from './core/core.module';
import { APPLICATION_STATE_MANAGER } from './core/tokens/state-manager';
import { SharedModule } from './shared/shared.module';
import { StateConsumer } from './components/state-consumer.directive';

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

  /*  asm = inject(APPLICATION_STATE_MANAGER); */

  //constructor( @Inject(APPLICATION_STATE_MANAGER) asm:CisStateManager ){}
}
