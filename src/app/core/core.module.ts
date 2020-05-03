import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { ArrowRightIconComponent } from "./components/arrow-right-icon/arrow-right-icon.component";
import { NzIconModule } from "ng-zorro-antd";
import { ArrowBgIconComponent } from "./components/arrow-bg-icon/arrow-bg-icon.component";
import { HTTP_INTERCEPTORS } from "@angular/common/http";
import { LoaderInterceptor } from "./interceptors/loader-interceptor";
import { BackgroundDirective } from "./directives/background.directive";
import { FlexGrowDirective } from "./directives/flex-grow.directive";
import { MarginBottomDirective } from "./directives/margin-bottom.directive";

@NgModule({
  declarations: [
    ArrowRightIconComponent,
    ArrowBgIconComponent,
    BackgroundDirective,
    FlexGrowDirective,
    MarginBottomDirective,
  ],
  imports: [CommonModule, NzIconModule],
  exports: [
    ArrowRightIconComponent,
    ArrowBgIconComponent,
    BackgroundDirective,
    FlexGrowDirective,
    MarginBottomDirective,
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: LoaderInterceptor, multi: true },
  ],
})
export class CoreModule {}
