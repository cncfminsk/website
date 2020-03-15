import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { RouterModule } from "@angular/router";
import { NzGridModule } from "ng-zorro-antd/grid";
import { NzButtonModule } from "ng-zorro-antd/button";
import { HomePageComponent } from "./components/home-page/home-page.component";
import { RegistrationCardComponent } from "./components/registration-card/registration-card.component";

@NgModule({
  declarations: [HomePageComponent, RegistrationCardComponent],
  imports: [CommonModule, RouterModule, NzGridModule, NzButtonModule],
  exports: [HomePageComponent]
})
export class HomePageModule {}
