import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { NzGridModule } from "ng-zorro-antd/grid";
import { NzCardModule } from "ng-zorro-antd/card";
import { NzAvatarModule } from "ng-zorro-antd/avatar";
import { NzTypographyModule } from "ng-zorro-antd/typography";
import { CoreModule } from "../core/core.module";
import { EventPageComponent } from "./components/event-page/event-page.component";
import { EventCardComponent } from "./components/event-card/event-card.component";

@NgModule({
  declarations: [EventPageComponent, EventCardComponent],
  imports: [
    CommonModule,
    NzGridModule,
    NzCardModule,
    NzAvatarModule,
    CoreModule,
    NzTypographyModule,
  ],
})
export class EventPageModule {}
