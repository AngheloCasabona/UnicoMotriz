import { MantenimientoComponent } from './page/mantenimiento/mantenimiento.component';
import { DetalleVentaCreaeditaComponent } from './page/detalleventa/detalleventa-creaedita/detalleventa-creaedita.component';
import { DetalleVentaDialogoComponent } from './page/detalleventa/detalleventa-listar/detalleventa-dialogo/detalleventa-dialogo.component';
import { ClienteCreaeditaComponent } from './page/cliente/cliente-creaedita/cliente-creaedita.component';
import { ProductoDialogoComponent } from './page/producto/producto-listar/producto-dialogo/producto-dialogo.component';
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
import { DetalleVentaComponent } from './page/detalleventa/detalleventa.component';
import { DetalleVentaListarComponent } from './page/detalleventa/detalleventa-listar/detalleventa-listar.component';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import{MatIconModule} from'@angular/material/icon';
import { FormsModule } from '@angular/forms';
import { FacturaComponent } from './page/factura/factura.component';
import { FacturaListarComponent } from './page/factura/factura-listar/factura-listar.component';
import { FacturaCreaeditaComponent } from './page/factura/factura-creaedita/factura-creaedita.component';
import { FacturaBuscarComponent } from './page/factura/factura-buscar/factura-buscar.component';
import { FacturaDialogoComponent } from './page/factura/factura-listar/factura-dialogo/factura-dialogo.component';
import { TallerCreaeditaComponent } from './page/taller/taller-creaedita/taller-creaedita.component';
import { TallerBuscarComponent } from './page/taller/taller-buscar/taller-buscar.component';
import { TallerDialogoComponent } from './page/taller/taller-listar/taller-dialogo/taller-dialogo.component';
import { MatDialogModule } from '@angular/material/dialog';
import { ClienteDialogoComponent } from './page/cliente/cliente-listar/cliente-dialogo/cliente-dialogo.component';
import { ClienteBuscarComponent } from './page/cliente/cliente-buscar/cliente-buscar.component';
import { ProductoComponent } from './page/producto/producto.component';
import { ProductoListarComponent } from './page/producto/producto-listar/producto-listar.component';
import { productoCreaeditaComponent } from './page/producto/producto-creaedita/producto-creaedita.component';
import { ProductoBuscarComponent } from './page/producto/producto-buscar/producto-buscar.component';
import { MecanicoDialogoComponent } from './page/mecanico/mecanico-listar/mecanico-dialogo/mecanico-dialogo.component';
import { MecanicoCreaeditaComponent } from './page/mecanico/mecanico-creaedita/mecanico-creaedita.component';
import { MecanicoBuscarComponent } from './page/mecanico/mecanico-buscar/mecanico-buscar.component';
import { VehiculoBuscarComponent } from './page/vehiculo/vehiculo-buscar/vehiculo-buscar.component';
import { VehiculoCreaeditaComponent } from './page/vehiculo/vehiculo-creaedita/vehiculo-creaedita.component';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { DateAdapter, MatNativeDateModule, MAT_DATE_LOCALE } from '@angular/material/core';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatSelectModule } from '@angular/material/select';
import { MatFormFieldModule } from '@angular/material/form-field';
import { CustomDateAdapter } from './custom-adapter';
import { PersonalizacionComponent } from './page/personalizacion/personalizacion.component';
import { PersonalizacionBuscarComponent } from './page/personalizacion/personalizacion-buscar/personalizacion-buscar.component';
import { PersonalizacionCreaeditaComponent } from './page/personalizacion/personalizacion-creaedita/personalizacion-creaedita.component';
import { PersonalizacionListarComponent } from './page/personalizacion/personalizacion-listar/personalizacion-listar.component';
import { MantenimientoListarComponent } from './page/mantenimiento/mantenimiento-listar/mantenimiento-listar.component';
import { MantenimientoCreaeditaComponent } from './page/mantenimiento/mantenimiento-creaedita/mantenimiento-creaedita.component';
import { MantenimientoBuscarComponent } from './page/mantenimiento/mantenimiento-buscar/mantenimiento-buscar.component';
import { MantenimientoDialogoComponent } from './page/mantenimiento/mantenimiento-listar/mantenimiento-dialogo/mantenimiento-dialogo.component';
import { PersonalizacionDialogoComponent } from './page/personalizacion/personalizacion-listar/personalizacion-dialogo/personalizacion-dialogo.component';


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
    DetalleVentaComponent,
    DetalleVentaListarComponent,
    DetalleVentaCreaeditaComponent,
    TallerCreaeditaComponent,
    FacturaComponent,
    FacturaListarComponent,
    FacturaCreaeditaComponent,
    FacturaDialogoComponent,
    TallerDialogoComponent,
    FacturaBuscarComponent,
    TallerBuscarComponent,
    ClienteDialogoComponent,
    ClienteBuscarComponent,
    ProductoListarComponent,
    productoCreaeditaComponent,
    ProductoDialogoComponent,
    ProductoBuscarComponent,
    ProductoComponent,
    MecanicoDialogoComponent,
    MecanicoCreaeditaComponent,
    MecanicoBuscarComponent,
    DetalleVentaDialogoComponent,
    VehiculoBuscarComponent,
    VehiculoCreaeditaComponent,
    PersonalizacionComponent,
    PersonalizacionBuscarComponent,
    PersonalizacionCreaeditaComponent,
    PersonalizacionListarComponent,
    MantenimientoListarComponent,
    MantenimientoCreaeditaComponent,
    MantenimientoBuscarComponent,
    MantenimientoDialogoComponent,
    PersonalizacionDialogoComponent,
    MantenimientoComponent
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
    MatDialogModule,
    MatFormFieldModule,
    MatSelectModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatToolbarModule,
    MatSnackBarModule
  ],
  providers: [{ provide: MAT_DATE_LOCALE, useValue: 'es-ES' },
  { provide: DateAdapter, useClass: CustomDateAdapter }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
