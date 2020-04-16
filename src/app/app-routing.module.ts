import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { HomePageComponent } from "./home-page/components/home-page/home-page.component";

const routes: Routes = [
  { path: "", pathMatch: "full", component: HomePageComponent },
  { path: "events", component: HomePageComponent },
  { path: "**", redirectTo: "" },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
