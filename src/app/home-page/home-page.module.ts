import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { RouterModule } from "@angular/router";
import { NzGridModule } from "ng-zorro-antd/grid";
import { NzButtonModule } from "ng-zorro-antd/button";
import { NzCardModule } from "ng-zorro-antd/card";
import { NzAvatarModule } from "ng-zorro-antd/avatar";
import { NzTypographyModule } from "ng-zorro-antd/typography";
import { NzSpinModule } from "ng-zorro-antd/spin";
import { HomePageComponent } from "./components/home-page/home-page.component";
import { RegistrationCardComponent } from "./components/registration-card/registration-card.component";
import { EventListComponent } from "./components/event-list/event-list.component";
import { CoreModule } from "../core/core.module";
import { ArticleListComponent } from "./components/article-list/article-list.component";
import { PartnerListComponent } from "./components/partner-list/partner-list.component";
import { BackgroundDirective } from './directives/background.directive';
import { FlexGrowDirective } from './directives/flex-grow.directive';
import { MarginBottomDirective } from './directives/margin-bottom.directive';

@NgModule({
  declarations: [
    HomePageComponent,
    RegistrationCardComponent,
    EventListComponent,
    ArticleListComponent,
    PartnerListComponent,
    BackgroundDirective,
    FlexGrowDirective,
    MarginBottomDirective,
  ],
  imports: [
    CommonModule,
    RouterModule,
    NzGridModule,
    NzButtonModule,
    NzCardModule,
    NzAvatarModule,
    NzTypographyModule,
    NzSpinModule,
    CoreModule,
  ],
  exports: [HomePageComponent],
})
export class HomePageModule {}
