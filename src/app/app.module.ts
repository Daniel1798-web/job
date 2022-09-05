import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './views/home/home.component';
import { HeaderComponent } from './components/header/header.component';
import { InformComponent } from './components/inform/inform.component';
import { FooterComponent } from './components/footer/footer.component';
import { JobsListComponent } from './components/jobs-list/jobs-list.component';
import { EmpleadosComponent } from './components/empleados/empleados.component';
import { JobCardComponent } from './components/job-card/job-card.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HeaderComponent,
    InformComponent,
    FooterComponent,
    JobsListComponent,
    EmpleadosComponent,
    JobCardComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
