import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { ArrowRightIconComponent } from "./components/arrow-right-icon/arrow-right-icon.component";
import { NzIconModule } from "ng-zorro-antd";

@NgModule({
  declarations: [ArrowRightIconComponent],
  imports: [CommonModule, NzIconModule],
  exports: [ArrowRightIconComponent]
})
export class CoreModule {}
