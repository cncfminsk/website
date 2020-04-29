import { BrowserModule } from "@angular/platform-browser";
import { LOCALE_ID, NgModule } from "@angular/core";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { NZ_I18N, ru_RU } from "ng-zorro-antd";
import { FormsModule } from "@angular/forms";
import { HttpClientModule } from "@angular/common/http";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { registerLocaleData } from "@angular/common";
import localeRu from "@angular/common/locales/ru";
import { LayoutModule } from "./layout/layout.module";
import { HomePageModule } from "./home-page/home-page.module";
import { EventPageModule } from "./event-page/event-page.module";
import { ServiceWorkerModule } from "@angular/service-worker";
import { environment } from "../environments/environment";

registerLocaleData(localeRu, "ru-RU");

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    LayoutModule,
    HomePageModule,
    EventPageModule,
    ServiceWorkerModule.register("ngsw-worker.js", {
      enabled: environment.production,
    }),
  ],
  providers: [
    { provide: NZ_I18N, useValue: ru_RU },
    { provide: LOCALE_ID, useValue: "ru-RU" },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
