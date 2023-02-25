import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { CreateComponent } from './coche/create/create.component';
import { RouterModule } from '@angular/router';
import { IndexComponent } from './coche/index/index.component';
import { CommonModule } from '@angular/common';
import { ViewComponent } from './coche/view/view.component';
import { EditComponent } from './coche/edit/edit.component';


@NgModule({
  declarations: [
    AppComponent,
    CreateComponent,
    EditComponent,
    ViewComponent    ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    RouterModule,
    CommonModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
