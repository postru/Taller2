
$(document).ready(function(){
    $('#buscador').click(function(){
        console.log('Entro a la funcion');
        $.ajax({
            url: "https://www.datos.gov.co/resource/m99e-2ah6.json",
            type: "GET",
            success: function(data) {
                for(var i = 0; i < data.length; i++){
                    let fila = Object.values(data[i]);
                    agregarFila(fila[0],fila[1],fila[2],fila[3],fila[4],fila[5],fila[6],fila[7],fila[8],fila[9],fila[10],fila[11]);
                }
                console.log([1]);
            },
            error: function(data) {
                console.log("no funciono");
            }
        });
    });
});
function agregarFila(Numero, Convocatoria, Id_contrato, Razon_Social,codigo_Dane, Departamento, Ciudad_Municipio, Inv_Mintic, Inv_Privada, Inv_Total,Fecha_Corte) {
   
    let htmlTags = '<tr>'+
         '<td>' + Numero + '</td>'+
         '<td>' + Convocatoria + '</td>'+
         '<td>' + Id_contrato + '</td>'+
         '<td>' + Razon_Social + '</td>'+
         '<td>' + codigo_Dane + '</td>'+
         '<td>' + Departamento + '</td>'+
         '<td>' + Ciudad_Municipio + '</td>'+
         '<td>' + Inv_Mintic + '</td>'+
         '<td>' + Inv_Privada + '</td>'+
         '<td>' + Inv_Total + '</td>'+
         '<td>' + Fecha_Corte + '</td>'+
         
       '</tr>';
       
    $('#tabla1 tbody').append(htmlTags);
 
 }


