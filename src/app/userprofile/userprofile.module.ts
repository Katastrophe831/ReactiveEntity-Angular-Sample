import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../shared/shared.module';
import { UserprofileHomeComponent } from './userprofile-home/userprofile-home.component';
import { RegisterComponent } from './register/register.component';
import { ChangeprofileComponent } from './changeprofile/changeprofile.component';
import { UserprofileRoutingModule } from './userprofile-routing.module';
import { EntityFormComponent } from './entity-form/entity-form.component';

@NgModule({
	declarations: [UserprofileHomeComponent, RegisterComponent, ChangeprofileComponent, EntityFormComponent],
	imports: [CommonModule, SharedModule, UserprofileRoutingModule],
	exports: [UserprofileHomeComponent, RegisterComponent, ChangeprofileComponent, EntityFormComponent],
})
export class UserprofileModule {}
