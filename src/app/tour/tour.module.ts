import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TourRoutingModule } from './tour-routing.module';
import { TourHomeComponent } from './tour-home/tour-home.component';
import { SharedModule } from '../shared/shared.module';

@NgModule({
	declarations: [TourHomeComponent],
	imports: [CommonModule, SharedModule, TourRoutingModule],
	exports: [TourHomeComponent],
})
export class TourModule {}
