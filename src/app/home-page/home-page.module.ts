import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { RouterModule } from "@angular/router";
import { NzGridModule } from "ng-zorro-antd/grid";
import { NzButtonModule } from "ng-zorro-antd/button";
import { NzCardModule } from "ng-zorro-antd/card";
import { NzAvatarModule } from "ng-zorro-antd/avatar";
import { NzIconModule } from "ng-zorro-antd/icon";
import { NzTypographyModule } from "ng-zorro-antd/typography";
import { NzSpinModule } from "ng-zorro-antd/spin";
import { HomePageComponent } from "./components/home-page/home-page.component";
import { RegistrationCardComponent } from "./components/registration-card/registration-card.component";
import { EventListComponent } from "./components/event-list/event-list.component";
import { CoreModule } from "../core/core.module";
import { ArticleListComponent } from "./components/article-list/article-list.component";
import { PartnerListComponent } from "./components/partner-list/partner-list.component";
import { BackgroundDirective } from "../core/directives/background.directive";
import { FlexGrowDirective } from "../core/directives/flex-grow.directive";
import { MarginBottomDirective } from "../core/directives/margin-bottom.directive";

@NgModule({
  declarations: [
    HomePageComponent,
    RegistrationCardComponent,
    EventListComponent,
    ArticleListComponent,
    PartnerListComponent,
  ],
  imports: [
    CommonModule,
    RouterModule,
    NzGridModule,
    NzButtonModule,
    NzCardModule,
    NzAvatarModule,
    NzTypographyModule,
    NzIconModule,
    NzSpinModule,
    CoreModule,
  ],
  exports: [HomePageComponent],
})
export class HomePageModule {}
