import { Injectable } from '@angular/core';
import { State, Selector, Action, StateContext } from '@ngxs/store';
//import { Navigate } from '@ngxs/router-plugin';
//import { tap } from 'rxjs/operators';

export interface AppStateModel {
  unsavedChanges: boolean;
}

@State<AppStateModel>({
  name: 'app',
  defaults: {
    unsavedChanges: false,
  }
})
@Injectable()
export class AppState {

  constructor(
  ) {}

  }

