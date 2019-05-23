import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { ThirdPartyModule } from './third-party/third-party.module';
import { ComponentsModule } from './components/components.module';

@NgModule({
  imports: [
    CommonModule
  ],
  exports: [
    HttpClientModule,
    FormsModule,
    ThirdPartyModule,
    ComponentsModule
  ],
  declarations: []
})
export class SharedModule { }
