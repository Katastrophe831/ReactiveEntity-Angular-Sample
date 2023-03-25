import { Entity, Field, ValidatorJS } from 'reactive-entity';

export class User extends Entity {
	@Field({ required: true })
	FIRSTNAME!: string;

	@Field({ required: true })
	LASTNAME!: string;

	@Field({ readonly: true, nonPersistent: true })
	DISPLAYNAME!: string;

	@Field()
	PASSWORD!: string;

	@Field({ nonPersistent: true })
	@ValidatorJS({ rules: 'min:6' })
	NEWPASSWORD!: string;

	@Field({ nonPersistent: true })
	@ValidatorJS({ rules: 'same:NEWPASSWORD' })
	CONFIRMPWD!: string;

	protected override onAfterChange(attribute: string): void {
		super.onAfterChange(attribute);

		if (['FIRSTNAME', 'LASTNAME'].includes(attribute)) {
			const fname = this.FIRSTNAME ?? '';
			const lname = this.LASTNAME ?? '';
			this.DISPLAYNAME = `${fname} ${lname}`.trim();
		}

		const pwdFields = ['NEWPASSWORD', 'CONFIRMPWD'] as any;
		if (pwdFields.includes(attribute)) {
			if (this.isFieldValid(pwdFields) && this.isFieldModified(pwdFields)) {
				this.PASSWORD = this.NEWPASSWORD;
			} else {
				this.PASSWORD = '';
			}
		}
	}

	protected override onFieldRequired(attribute: string, value: boolean): boolean {
		let result = super.onFieldRequired(attribute, value);

		if (this.getAppName() === 'REGISTER' && ['NEWPASSWORD', 'CONFIRMPWD'].includes(attribute)) {
			return true;
		}
		if (this.getAppName() === 'CHANGEPROFILE' && ['FIRSTNAME', 'LASTNAME'].includes(attribute)) {
			return false;
		}
		return result;
	}

	protected override onFieldReadonly(attribute: string, value: boolean): boolean {
		let result = super.onFieldReadonly(attribute, value);
		if (this.getAppName() === 'CHANGEPROFILE' && attribute === 'PASSWORD') {
			return true;
		}
		return result;
	}

	protected override onFieldHidden(attribute: string, value: boolean): boolean {
		let result = super.onFieldHidden(attribute, value);
		if (this.getAppName() === 'CHANGEPROFILE' && ['FIRSTNAME', 'LASTNAME', 'DISPLAYNAME'].includes(attribute)) {
			return true;
		}
		if (this.getAppName() === 'REGISTER' && ['PASSWORD'].includes(attribute)) {
			return true;
		}
		return result;
	}
}
