
import { ChangeDetectionStrategy, ChangeDetectorRef, Component, EventEmitter, Input, NgZone, Output, Renderer2, inject } from '@angular/core';
import { FeatBookService } from './feat-book.service';


@Component({
  selector: 'app-feat-book',
  templateUrl: './feat-book.component.html',
  styleUrl: './feat-book.component.scss',
  //changeDetection:ChangeDetectionStrategy.OnPush
})
export class FeatBookComponent {

  time = Date.now()

  @Input() book = '';
  @Output() bookChange = new EventEmitter<string>();

  srv = inject(FeatBookService)

  constructor(
    private zone: NgZone,
    private cd: ChangeDetectorRef, 
    private rd:Renderer2) {


    /* this.zone.runOutsideAngular(() => setInterval(() => {
      this.time = Date.now()
      console.log(this.time)
      if(Math.random() > 0.1) this.cd.detectChanges()
    }, 1000)
    )
 */
  }


}
