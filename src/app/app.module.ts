import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HistorialComponent } from './page/historial/historial.component';
import { HistorialListarComponent } from './page/historial/historial-listar/historial-listar.component';
import { ReservaComponent } from './page/reserva/reserva.component';
import { ReservaListarComponent } from './page/reserva/reserva-listar/reserva-listar.component';
import{ MatTableModule } from '@angular/material/table';

@NgModule({
  declarations: [
    AppComponent,
    HistorialComponent,
    HistorialListarComponent,
    ReservaComponent,
    ReservaListarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    MatTableModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
