import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ConsumptionComponent } from './consumption/consumption.component';
import { DishDetailsEditComponent } from './consumption/dish-details-edit/dish-details-edit.component';
import { EtenComponent } from './eten/eten.component';
import { MyfoodComponent } from './myfood/myfood.component';
import { OverviewComponent } from './overview/overview.component';
import { SettingsComponent } from './settings/settings.component';
import { TargetsComponent } from './targets/targets.component';
import { TrendsComponent } from './trends/trends.component';


const routes: Routes = [
  { path: '', component: EtenComponent },
  { path: 'overview', component: OverviewComponent },
  {
     path: 'consumption', component: ConsumptionComponent,
     children: [
       { path: 'new', component: DishDetailsEditComponent }
     ] 
  },
  { path: 'myfood', component: MyfoodComponent },
  { path: 'trends', component: TrendsComponent },
  { path: 'targets', component: TargetsComponent },
  { path: 'settings', component: SettingsComponent }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
