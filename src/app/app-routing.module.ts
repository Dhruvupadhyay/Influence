import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { AppComponent } from "./app.component";
import { DataComponent } from "./data/data.component";

const routes: Routes = [
  {
    path: "",
    component: AppComponent
  },
  {path:"charts", loadChildren:'./data/data.module#DataModule'}
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: []
})
export class AppRoutingModule {}