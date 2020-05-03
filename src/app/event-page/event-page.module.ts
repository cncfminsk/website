import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { NzGridModule } from "ng-zorro-antd/grid";
import { NzCardModule } from "ng-zorro-antd/card";
import { NzAvatarModule } from "ng-zorro-antd/avatar";
import { NzTypographyModule } from "ng-zorro-antd/typography";
import { NzModalModule } from "ng-zorro-antd/modal";
import { NzDividerModule } from "ng-zorro-antd/divider";
import { CoreModule } from "../core/core.module";
import { NgScrollbarModule } from "ngx-scrollbar";
import { EventPageComponent } from "./components/event-page/event-page.component";
import { EventCardComponent } from "./components/event-card/event-card.component";
import { EventModalComponent } from "./components/event-modal/event-modal.component";

@NgModule({
  declarations: [EventPageComponent, EventCardComponent, EventModalComponent],
  imports: [
    CommonModule,
    NzGridModule,
    NzCardModule,
    NzAvatarModule,
    NzModalModule,
    NzDividerModule,
    CoreModule,
    NzTypographyModule,
    NgScrollbarModule,
  ],
})
export class EventPageModule {}
