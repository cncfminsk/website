import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { RouterModule } from "@angular/router";
import { NzGridModule } from "ng-zorro-antd/grid";
import { NzButtonModule } from "ng-zorro-antd/button";
import { NzCardModule } from "ng-zorro-antd/card";
import { HomePageComponent } from "./components/home-page/home-page.component";
import { RegistrationCardComponent } from "./components/registration-card/registration-card.component";
import { EventListComponent } from "./components/event-list/event-list.component";
import { CoreModule } from "../core/core.module";

@NgModule({
  declarations: [
    HomePageComponent,
    RegistrationCardComponent,
    EventListComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    NzGridModule,
    NzButtonModule,
    NzCardModule,
    CoreModule
  ],
  exports: [HomePageComponent]
})
export class HomePageModule {}
