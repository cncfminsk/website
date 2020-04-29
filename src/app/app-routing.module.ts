import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { HomePageComponent } from "./home-page/components/home-page/home-page.component";
import { EventPageComponent } from "./event-page/components/event-page/event-page.component";

const routes: Routes = [
  { path: "", pathMatch: "full", component: HomePageComponent },
  { path: "events", component: EventPageComponent },
  { path: "**", redirectTo: "" },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
