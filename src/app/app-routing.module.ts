import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
	{
		path: 'dashboard',
		loadChildren: () => import('./dashboard/dashboard.module').then((m) => m.DashboardModule),
	},
	{
		path: 'tour',
		loadChildren: () => import('./tour/tour.module').then((m) => m.TourModule),
	},
	{
		path: 'userprofile',
		loadChildren: () => import('./userprofile/userprofile.module').then((m) => m.UserprofileModule),
	},
	{
		path: '**',
		redirectTo: 'dashboard',
		pathMatch: 'full',
	},
];

@NgModule({
	imports: [RouterModule.forRoot(routes)],
	exports: [RouterModule],
})
export class AppRoutingModule {}
