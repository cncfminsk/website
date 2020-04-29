import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { ArrowRightIconComponent } from "./components/arrow-right-icon/arrow-right-icon.component";
import { NzIconModule } from "ng-zorro-antd";
import { ArrowBgIconComponent } from "./components/arrow-bg-icon/arrow-bg-icon.component";
import { HTTP_INTERCEPTORS } from "@angular/common/http";
import { LoaderInterceptor } from "./interceptors/loader-interceptor";

@NgModule({
  declarations: [ArrowRightIconComponent, ArrowBgIconComponent],
  imports: [CommonModule, NzIconModule],
  exports: [ArrowRightIconComponent, ArrowBgIconComponent],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: LoaderInterceptor, multi: true },
  ],
})
export class CoreModule {}
