import { Component } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { User } from '../entities/User';

@Component({
	selector: 'app-changeprofile',
	templateUrl: './changeprofile.component.html',
	styleUrls: ['./changeprofile.component.scss'],
})
export class ChangeprofileComponent {
	public user!: User;

	public data: object | null = null;

	constructor(private _snackBar: MatSnackBar) {
		this.user = new User();
		this.user.setAppName('CHANGEPROFILE');
	}

	save() {
		try {
			this.user.validate();
			this.data = this.user.toData();
		} catch (e) {
			this.data = null;
			this._snackBar.open((e as Error).message, '', { duration: 2500 });
		}
	}
}
