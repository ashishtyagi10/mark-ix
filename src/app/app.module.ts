import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatFormFieldModule, MatInputModule, MatMenuModule, MatPaginatorModule, MatSortModule, MatTableModule} from '@angular/material';
import {FormsModule} from '@angular/forms';
import {DragDropModule} from '@angular/cdk/drag-drop';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatTableModule,
    MatSortModule,
    MatPaginatorModule,
    MatFormFieldModule,
    FormsModule,
    DragDropModule,
    MatInputModule,
    MatMenuModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
