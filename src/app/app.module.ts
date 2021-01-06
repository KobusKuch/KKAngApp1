import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgxsModule } from '@ngxs/store';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AppState } from './app.state';
import { environment } from '../environments/environment';
import { EtenComponent } from './eten/eten.component';
import { OverviewComponent } from './overview/overview.component';
import { ConsumptionComponent } from './consumption/consumption.component';
import { MyfoodComponent } from './myfood/myfood.component';
import { TrendsComponent } from './trends/trends.component';
import { TargetsComponent } from './targets/targets.component';
import { SettingsComponent } from './settings/settings.component';
import { DishDetailsEditComponent } from './consumption/dish-details-edit/dish-details-edit.component';

@NgModule({
  declarations: [
    AppComponent,
    EtenComponent,
    OverviewComponent,
    ConsumptionComponent,
    MyfoodComponent,
    TrendsComponent,
    TargetsComponent,
    SettingsComponent,
    DishDetailsEditComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgxsModule.forRoot([AppState], {
      developmentMode: !environment.production
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
