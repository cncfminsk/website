import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './components/header/header.component';
import { RouterModule } from '@angular/router';
import { NzTabsModule } from 'ng-zorro-antd/tabs';
import { NzGridModule } from 'ng-zorro-antd/grid';
import { NzLayoutModule } from 'ng-zorro-antd/layout';
import { LayoutComponent } from './components/layout/layout.component';
import { FooterComponent } from './components/footer/footer.component';



@NgModule({
  declarations: [HeaderComponent, LayoutComponent, FooterComponent],
  imports: [
    CommonModule,
    RouterModule,
    NzTabsModule,
    NzGridModule,
    NzLayoutModule
  ],
  exports: [LayoutComponent]
})
export class LayoutModule { }
