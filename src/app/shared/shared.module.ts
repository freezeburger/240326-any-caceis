import { NgModule } from '@angular/core'
import { NgImportModule } from './ng-import.module';
import { CisImportModule } from './cis-import.module';

/**
 * Provides all base components and angular functionnalities
 */
@NgModule({
  exports: [
    NgImportModule,
    CisImportModule
  ]
})
export class SharedModule { }
