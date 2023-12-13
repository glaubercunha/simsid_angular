import { Routes } from '@angular/router';
import { EstimativaItemListComponent } from './estimativa-item/components/estimativa-item-list/estimativa-item-list.component';

export const routes: Routes = [
  { path: "", pathMatch: 'full', component: EstimativaItemListComponent },
];