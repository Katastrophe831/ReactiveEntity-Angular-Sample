import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserprofileHomeComponent } from './userprofile-home.component';

describe('UserprofileHomeComponent', () => {
	let component: UserprofileHomeComponent;
	let fixture: ComponentFixture<UserprofileHomeComponent>;

	beforeEach(async () => {
		await TestBed.configureTestingModule({
			declarations: [UserprofileHomeComponent],
		}).compileComponents();

		fixture = TestBed.createComponent(UserprofileHomeComponent);
		component = fixture.componentInstance;
		fixture.detectChanges();
	});

	it('should create', () => {
		expect(component).toBeTruthy();
	});
});
