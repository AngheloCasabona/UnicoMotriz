import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from "@angular/common/http";
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ClienteComponent } from './page/cliente/cliente.component';
import { ClienteListarComponent } from './page/cliente/cliente-listar/cliente-listar.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatTableModule } from "@angular/material/table";
import { VehiculoComponent } from './page/vehiculo/vehiculo.component';
import { VehiculoListarComponent } from './page/vehiculo/vehiculo-listar/vehiculo-listar.component';
import { MecanicoComponent } from './page/mecanico/mecanico.component';
import { MecanicoListarComponent } from './page/mecanico/mecanico-listar/mecanico-listar.component';
import { ProductoComponent } from './page/producto/producto.component';
import { ProductoListarComponent } from './page/producto/producto-listar/producto-listar.component';
import { TallerComponent } from './page/taller/taller.component';
import { TallerListarComponent } from './page/taller/taller-listar/taller-listar.component';
import { ReservaComponent } from './page/reserva/reserva.component';
import { ReservaListarComponent } from './page/reserva/reserva-listar/reserva-listar.component';
import { HistorialComponent } from './page/historial/historial.component';
import { HistorialListarComponent } from './page/historial/historial-listar/historial-listar.component';
import { ProductoDialogoComponent } from './page/producto/producto-listar/producto-dialogo/producto-dialogo.component';
@NgModule({
  declarations: [
    AppComponent,
    ClienteComponent,
    ClienteListarComponent,
    VehiculoComponent,
    VehiculoListarComponent,
    MecanicoComponent,
    MecanicoListarComponent,
    ProductoComponent
    ProductoListarComponent
    TallerComponent,
    TallerListarComponent,
    ReservaComponent,
    ReservaListarComponent,
    HistorialComponent,
    HistorialListarComponent,
    ProductoDialogoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatTableModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
