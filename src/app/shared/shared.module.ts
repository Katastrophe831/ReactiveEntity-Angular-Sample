import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LayoutComponent } from './layout/layout.component';
import { MaterialModule } from './material/material.module';
import { FlexLayoutModule } from '@angular/flex-layout';
import { RouterModule } from '@angular/router';
import { EntityModule } from './entity/entity.module';

@NgModule({
	declarations: [LayoutComponent],
	imports: [CommonModule, RouterModule, FlexLayoutModule, MaterialModule, EntityModule],
	exports: [RouterModule, MaterialModule, FlexLayoutModule, LayoutComponent, EntityModule],
})
export class SharedModule {}
