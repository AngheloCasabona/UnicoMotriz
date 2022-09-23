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
import { TallerComponent } from './page/taller/taller.component';
import { TallerListarComponent } from './page/taller/taller-listar/taller-listar.component';
import { ReservaComponent } from './page/reserva/reserva.component';
import { ReservaListarComponent } from './page/reserva/reserva-listar/reserva-listar.component';

import { TallerCreaeditaComponent } from './page/taller/taller-creaedita/taller-creaedita.component';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import{MatIconModule} from'@angular/material/icon';
import { FormsModule } from '@angular/forms';
import { FacturaComponent } from './page/factura/factura.component';
import { FacturaListarComponent } from './page/factura/factura-listar/factura-listar.component';
import { FacturaCreaeditaComponent } from './page/factura/factura-creaedita/factura-creaedita.component';


@NgModule({
  declarations: [
    AppComponent,
    ClienteComponent,
    ClienteListarComponent,
    VehiculoComponent,
    VehiculoListarComponent,
    MecanicoComponent,
    MecanicoListarComponent,
    TallerComponent,
    TallerListarComponent,
    ReservaComponent,
    ReservaListarComponent,

    TallerCreaeditaComponent,
    FacturaComponent,
    FacturaListarComponent,
    FacturaCreaeditaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatTableModule,

    MatInputModule,
    FormsModule,
    MatButtonModule,
    MatIconModule




  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
