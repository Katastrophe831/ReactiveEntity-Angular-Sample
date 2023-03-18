import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from '../material/material.module';
import { EntityDirective } from './entity.directive';
import { InputComponent } from './input/input.component';
import { FormsModule } from '@angular/forms';
import { SelectComponent } from './select/select.component';
import { BaseComponent } from './base/base.component';

@NgModule({
	declarations: [EntityDirective, InputComponent, SelectComponent, BaseComponent],
	imports: [CommonModule, FormsModule, MaterialModule],
	exports: [EntityDirective, InputComponent, SelectComponent, BaseComponent],
})
export class EntityModule {}
