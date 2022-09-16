module.exports = function () {
    var data = {
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
      ]

    }

    return data
  }
