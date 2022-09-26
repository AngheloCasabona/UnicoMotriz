
  module.exports = function () {
    var data = {
      clientes: [
        {
          id: 1,
          nameCliente: "Luisa",
          emailCliente: "luisa@gmail.com",
          claveCliente: "1234567",
          telefonoCliente: "950000123",
        },
        {
          id: 2,
          nameCliente: "Daniel",
          emailCliente: "daniel@gmail.com",
          claveCliente: "1111111",
          telefonoCliente: "963852741",
        },
        {
          id: 3,
          nameCliente: "Tejon",
          emailCliente: "tejon@gmail.com",
          claveCliente: "7654321",
          telefonoCliente: "936145728",
        },
        {
          id: 4,
          nameCliente: "Capibara",
          emailCliente: "capibara@gmail.com",
          claveCliente: "1233214",
          telefonoCliente: "951746328",
        },
      ],

      vehiculos:[
        {
          codeVehiculo: "MDF845",
          DAno:"2022-09-09",
          cliente:{
            id: 2,
            nameCliente: "Daniel",
            emailCliente: "daniel@gmail.com",
            claveCliente: "1111111",
            telefonoCliente: "963852741",
          },
          NMarca:"Toyota",
          NModelo:"Subaru",
        },
        {
          codeVehiculo: "P34TI5",
          DAno:"2012-09-02",
          cliente:{
            id: 4,
            nameCliente: "Capibara",
            emailCliente: "capibara@gmail.com",
            claveCliente: "1233214",
            telefonoCliente: "951746328",
          },
          NMarca:"Hyundai",
          NModelo:"XR1",
        },
        {
          codeVehiculo: "POO138",
          DAno:"2011-01-16",
          cliente:{
            id: 1,
            nameCliente: "Luisa",
            emailCliente: "luisa@gmail.com",
            claveCliente: "1234567",
            telefonoCliente: "950000123",
          },
          NMarca:"Porsche",
          NModelo:"SportTX",
        },
        {
          codeVehiculo: "PUB123",
          DAno:"2014-11-11",
          cliente:{
            id: 3,
            nameCliente: "Tejon",
            emailCliente: "tejon@gmail.com",
            claveCliente: "7654321",
            telefonoCliente: "936145728",
          },
          NMarca:"Toyota",
          NModelo:"Carina",
        },
      ],

      talleres: [
        {
          id:1,
          nameTaller: "TALLER 01",
          addressTaller: "LIMA MTZ 1"
        },
        {
          id:2,
          nameTaller: "TALLER 02",
          addressTaller: "LIMA MTZ 2",
        },
        {
          id:3,
          nameTaller: "TALLER 03",
          addressTaller: "LIMA MTZ 3",
        },
        {
          id:4,
          nameTaller: "TALLER 04",
          addressTaller: "LIMA MTZ 4",

        }
      ],

      mecanicos:[
        {
          id:1,
          nameMecanico: "PEDRO",
          emailMecanico:"Pedro@gmail.com",
          passwordMecanico: "mecanico21",
          taller:{
            id:2,
            nameTaller: "TALLER 02",


          }
        }

      ],
      historial: [
        {
          CHistorial:1,
          THistorial: "Texto-Prueba",
          Reserva_CReserva: 1,
        },
        {
          CHistorial:2,
          THistorial: "Texto-Prueba",
          Reserva_CReserva: 2,
        },
        {
          CHistorial:3,
          THistorial: "Texto-Prueba",
          Reserva_CReserva: 3,
        },
        {
          CHistorial:4,
          THistorial: "Texto-Prueba",
          Reserva_CReserva: 4,

        }
      ],
      reserva:[
        {
          CReserva:1,
          TDetalle: "Reserva-Prueba",
          historial:{
            historial:3,
          }
        }
      ],
      Productos:[
        { id: 1,
          nameProducto: "Faja",
          costoProducto: 28,
          ventaProducto: 44,
        },
        {id: 2,
          nameProducto: "Bujia",
          costoProducto: 30,
          ventaProducto: 38,
        },
        {id: 3,
          nameProducto: "Filtro de aire",
          costoProducto: 150,
          ventaProducto: 186,
        },
        {id: 4,
          nameProducto: "Radiador",
          costoProducto: 240,
          ventaProducto: 285,
      }]
    }

    return data
  }