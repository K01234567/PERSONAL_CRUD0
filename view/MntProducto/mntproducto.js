var tabla;

console.log("Se ha cargado el script");

function init() {}

$(document).ready(function () {
  tabla = $("#producto_data")
    .dataTable({
      aProcessing: true, //Activamos el procesamiento del datatables

      aServerSide: true, //Paginación y filtrado realizados por el servidor
      dom: "Bfrtip", //Definimos los elementos del control de tabla
      buttons: [
        "copyHtm15",
         "excelHtml5", 
         "csvHtml5",
          "pdf"  ],
      ajax: {
        url: "../../controller/producto.php?op=listar",
        type: "get",
        dataType: "json",
        error: function (e) {},
      },
      bDestroy: true,

      bInfo: true,
      iDisplayLength: 10, //Por cada 10 registros hace una paginación
      order: [[0, "asc"]], //Ordenar (columna, orden)
      language: {
        sProcessing: "Procesando...",
        sLengthMenu: "Mostrar_MENU_ registros",
        sZeroRecords: "No se encontraron resultados",
        sEmptyTable: "Ningún dato disponible en esta tabla",
        sInfo: "Mostrando un total de _TOTAL_ registros",
        sInfoEmpty: "Mostrando un total de e registros",
        sInfoFiltered: "(filtrado de un total de _MAX_ registros)",
        sInfoPostFix: "",
        sSearch: "Buscar:",
        sUrl: "",
        sInfoThousands: ",",
        sLoadingRecords: "Cargando...",
        oPaginate: {
          sFirst: "Primero",

          sLast: "Último",

          sNext: "Siguiente",

          sPrevious: "Anterior",
        },
        oAria: {
          sSortAscending:
            ": Activar para ordenar la columna de manera ascendente",
          sSortDescending:
            ": Activar para ordenar la columna de manera descendente",
        },
      },
    })
    .dataTable();
});



function editar(prod_id) {
  console.log(prod_id);

}

 function eliminar(prod_id) {
  console.log(prod_id);
 }


 $(document).on( "click","#btnnuevo",function () {
    $('#modalmantenimiento').modal('show');
    

  
  });
init();
