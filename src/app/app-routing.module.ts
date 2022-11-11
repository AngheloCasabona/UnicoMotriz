import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ClienteCreaeditaComponent } from './page/cliente/cliente-creaedita/cliente-creaedita.component';
import { ClienteComponent } from './page/cliente/cliente.component';
import { FacturaCreaeditaComponent } from './page/factura/factura-creaedita/factura-creaedita.component';
import { FacturaComponent } from './page/factura/factura.component';
import { MecanicoComponent } from './page/mecanico/mecanico.component';
import { productoCreaeditaComponent } from './page/producto/producto-creaedita/producto-creaedita.component';
import { ProductoComponent } from './page/producto/producto.component';
import { ReservaComponent } from './page/reserva/reserva.component';
import { TallerCreaeditaComponent } from './page/taller/taller-creaedita/taller-creaedita.component';
import { TallerComponent } from './page/taller/taller.component';
import { VehiculoComponent } from './page/vehiculo/vehiculo.component';
import { DetalleVentaComponent } from './page/detalleventa/detalleventa.component';
import { DetalleVentaCreaeditaComponent } from './page/detalleventa/detalleventa-creaedita/detalleventa-creaedita.component';


const routes: Routes = [
  {
    path: 'clientes', component: ClienteComponent, children:[
      { path: 'nuevo', component: ClienteCreaeditaComponent },
      { path: 'edicion/:id', component: ClienteCreaeditaComponent }
    ]
  },{
    path: 'vehiculos', component: VehiculoComponent, children:[

    ]
  },{
    path: 'talleres', component: TallerComponent, children:[
      { path: 'nuevo', component: TallerCreaeditaComponent },
      { path: 'edicion/:id', component: TallerCreaeditaComponent }
    ]
  },

 {
    path:"facturas", component: FacturaComponent, children:[
      { path: 'nuevo', component: FacturaCreaeditaComponent },
      { path: 'edicion/:id', component: FacturaCreaeditaComponent }
    ]
  }, {
    path:'mecanicos',component: MecanicoComponent,children:[

    ]
  },
  {
    path:"reserva", component:ReservaComponent, children:[]
  },
  {
    path: "productos", component: ProductoComponent, children:[
      {path: 'nuevo', component: productoCreaeditaComponent},
      { path: 'edicion/:id', component: productoCreaeditaComponent }
    ]
  },
  {
    path:"detalleventa", component: DetalleVentaComponent,children:[
      {path:'nuevo', component: DetalleVentaCreaeditaComponent},
      {path:'edicion/:id', component: DetalleVentaCreaeditaComponent}
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
