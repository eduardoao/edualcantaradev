import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule } from '@angular/forms';
import { NouisliderModule } from 'ng2-nouislider';
import { JwBootstrapSwitchNg2Module } from 'jw-bootstrap-switch-ng2';
import { RouterModule } from '@angular/router';

import { SectionsComponent } from './sections.component';
import { MediumComponent } from './medium/medium.component';
import { CarouselModule } from 'ngx-owl-carousel-o';

@NgModule({
  declarations: [
    SectionsComponent,
    MediumComponent
  ],
  entryComponents: [
  ],
  imports: [
    CommonModule,
    FormsModule,
    NgbModule,
    RouterModule,
    NouisliderModule,
    JwBootstrapSwitchNg2Module,
    CarouselModule
  ],
  exports: [
    SectionsComponent,
    MediumComponent
  ]
})
export class SectionsModule { }
