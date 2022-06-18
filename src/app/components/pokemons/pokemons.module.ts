import {CUSTOM_ELEMENTS_SCHEMA, NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule} from "@angular/router";

// Components
import {ListComponent} from "./list/list.component";
import {FormsModule} from "@angular/forms";

const routes = [
  {path: "", redirectTo: "list", pathMatch: "full"},
  {
    path: "list",
    component: ListComponent,
  },
  // {
  //   path: "list-one/:id",
  //   component: ListOneComponent,
  // },
];

@NgModule({
  declarations: [
    ListComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    RouterModule.forChild(routes),
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class PokemonsModule {
}
