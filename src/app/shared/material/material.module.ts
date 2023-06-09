import { NgModule, LOCALE_ID } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatFormFieldModule, MAT_FORM_FIELD_DEFAULT_OPTIONS } from '@angular/material/form-field';
import { MatRadioModule } from '@angular/material/radio';
import { MatSelectModule } from '@angular/material/select';
import { MatSliderModule } from '@angular/material/slider';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatMenuModule } from '@angular/material/menu';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatBadgeModule } from '@angular/material/badge';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatListModule } from '@angular/material/list';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatCardModule } from '@angular/material/card';
import { MatStepperModule } from '@angular/material/stepper';
import { MatTabsModule } from '@angular/material/tabs';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { MatChipsModule } from '@angular/material/chips';
import { MatIconModule } from '@angular/material/icon';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatDialogModule } from '@angular/material/dialog';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatTableModule } from '@angular/material/table';
import { MatSortModule } from '@angular/material/sort';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MAT_DATE_FORMATS } from '@angular/material/core';

@NgModule({
	imports: [
		CommonModule,
		MatSidenavModule,
		MatIconModule,
		MatToolbarModule,
		MatButtonModule,
		MatListModule,
		MatCardModule,
		MatProgressBarModule,
		MatInputModule,
		MatSnackBarModule,
		MatProgressSpinnerModule,
		MatDatepickerModule,
		MatAutocompleteModule,
		MatTableModule,
		MatDialogModule,
		MatTabsModule,
		MatTooltipModule,
		MatSelectModule,
		MatPaginatorModule,
		MatChipsModule,
		MatButtonToggleModule,
		MatSlideToggleModule,
		MatBadgeModule,
		MatCheckboxModule,
		MatGridListModule,
		MatStepperModule,
		MatSliderModule,
		MatFormFieldModule,
		MatRadioModule,
		MatExpansionModule,
		MatSortModule,
	],
	exports: [
		CommonModule,
		MatSidenavModule,
		MatIconModule,
		MatToolbarModule,
		MatButtonModule,
		MatListModule,
		MatCardModule,
		MatProgressBarModule,
		MatInputModule,
		MatSnackBarModule,
		MatMenuModule,
		MatProgressSpinnerModule,
		MatDatepickerModule,
		MatAutocompleteModule,
		MatTableModule,
		MatDialogModule,
		MatTabsModule,
		MatTooltipModule,
		MatSelectModule,
		MatPaginatorModule,
		MatChipsModule,
		MatButtonToggleModule,
		MatSlideToggleModule,
		MatBadgeModule,
		MatCheckboxModule,
		MatGridListModule,
		MatStepperModule,
		MatSliderModule,
		MatFormFieldModule,
		MatRadioModule,
		MatExpansionModule,
		MatSortModule,
	],
	providers: [
		{ provide: LOCALE_ID, useValue: 'en' },
		//{ provide: MAT_FORM_FIELD_DEFAULT_OPTIONS, useValue: { appearance: 'outline' } },
	],
	declarations: [],
})
export class MaterialModule {
	static forRoot() {
		return {
			ngModule: MaterialModule,
			providers: [],
		};
	}
}
