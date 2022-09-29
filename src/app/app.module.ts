import { ClienteCreaeditaComponent } from './page/cliente/cliente-creaedita/cliente-creaedita.component';
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


import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import{MatIconModule} from'@angular/material/icon';
import { FormsModule } from '@angular/forms';
import { FacturaComponent } from './page/factura/factura.component';
import { FacturaListarComponent } from './page/factura/factura-listar/factura-listar.component';
import { FacturaCreaeditaComponent } from './page/factura/factura-creaedita/factura-creaedita.component';
import { TallerCreaeditaComponent } from './page/taller/taller-creaedita/taller-creaedita.component';
import { FacturaDialogoComponent } from './page/factura/factura-listar/factura-dialogo/factura-dialogo.component';
import { MatDialogModule } from '@angular/material/dialog';
import { TallerDialogoComponent } from './page/taller/taller-listar/taller-dialogo/taller-dialogo.component';
import { FacturaBuscarComponent } from './page/factura/factura-buscar/factura-buscar.component';
import { TallerBuscarComponent } from './page/taller/taller-buscar/taller-buscar.component';


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
    ClienteCreaeditaComponent,

    TallerCreaeditaComponent,
    FacturaComponent,
    FacturaListarComponent,
    FacturaCreaeditaComponent,
    FacturaDialogoComponent,
    TallerDialogoComponent,
    FacturaBuscarComponent,
    TallerBuscarComponent,


  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatTableModule,
    MatInputModule,
    MatIconModule,
    MatButtonModule,
    FormsModule,
    MatDialogModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
