import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'cis-cis-lib',
  template: `
    <p>
      cis-lib works!
    </p>
  `,
  styles: ``,
  changeDetection:ChangeDetectionStrategy.OnPush
})
export class CisLibComponent {

}
