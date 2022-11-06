const valorTicket=200;



const nombre = document.getElementById('name');
const apellido = document.getElementById('lastname');
const mail = document.getElementById('mail');
const cantidad = document.getElementById('cantitickets');
const categoria = document.getElementById('catego');
const botonCalcular = document.getElementById('calcu');
const botonReset = document.getElementById('reset');
const p = document.getElementById('resumen');

function pagar(){

    let valor= (cantidad.value) * valorTicket;

    p.innerHTML = `Total a pagar : $${valor*categoria.value}`;     
    
    if (cantidad.value>0 && nombre.value!='' && apellido.value!='' && categoria.value>0 && mail.value!='') {
        
        console.log('✅ all conditions are met');
        window.confirm("Todos los datos estan ok "+nombre.value+" "+apellido.value)
      } else{
        alert('⛔️Rellenar debidamente los campos');
        if (cantidad.value<0) {
            
            alert('Cantidad es menor que 0');
          }
        if (nombre.value=='') {
            
            alert('Llenar nombre');
          }

         if (apellido.value=='') {
            
            alert('Llenar apellido');
         }

         if (categoria.value==0) {
            
            alert('Seleccionar categoria');
         }
         if (mail.value=='') {
            
            alert('Llenar email');
         }
      }

}

//boton calcular
botonCalcular.addEventListener('click',pagar);
//boton reset
botonReset.addEventListener('click',()=>{
    p.textContent='Total a pagar : $';
    document.getElementById('name').value = '';
    document.getElementById('lastname').value = '';
    document.getElementById('mail').value = '';
    document.getElementById('cantitickets').value = '';
    document.getElementById('catego').value =0;
    
    
});
