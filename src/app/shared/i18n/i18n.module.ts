import { NgModule, APP_INITIALIZER, LOCALE_ID } from '@angular/core';
import { CommonModule } from '@angular/common';

import {
	I18NEXT_SERVICE,
	I18NextModule,
	I18NextLoadResult,
	ITranslationService,
	defaultInterpolationFormat,
} from 'angular-i18next';

import resourcesToBackend from 'i18next-resources-to-backend';

const i18nextOptions = {
	//debug: true,
	fallbackLng: 'en',
	interpolation: {
		format: I18NextModule.interpolationFormat(defaultInterpolationFormat),
	},
};

export function appInit(i18next: ITranslationService) {
	return () => {
		let promise: Promise<I18NextLoadResult> = i18next
			.use(resourcesToBackend((lng: string, ns: string) => import(`../../../assets/lang/${lng}.json`)))
			.init(i18nextOptions);
		return promise;
	};
}

export function localeIdFactory(i18next: ITranslationService) {
	return i18next.language;
}

export const I18N_PROVIDERS = [
	{
		provide: APP_INITIALIZER,
		useFactory: appInit,
		deps: [I18NEXT_SERVICE],
		multi: true,
	},
	{
		provide: LOCALE_ID,
		deps: [I18NEXT_SERVICE],
		useFactory: localeIdFactory,
	},
];

@NgModule({
	declarations: [],
	imports: [CommonModule, I18NextModule.forRoot()],
})
export class I18nModule {
	static forRoot() {
		return {
			ngModule: I18nModule,
			providers: [I18N_PROVIDERS],
		};
	}
}
