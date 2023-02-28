function comprar(){

    let cantidad = document.getElementById('cantidad').value
    let bodega = document.getElementById('bodega').value
    let restanteBodega1 = document.getElementById('restanteBodega1').value
    let restanteBodega2 = document.getElementById('restanteBodega2').value
    
    let inicial1= 100000
    let inicial2= 230000




    if(bodega==1){
        bodega1(cantidad,restanteBodega1,inicial1)
        
    }else if(bodega==2){
        bodega2(cantidad,restanteBodega2,inicial2)
    }



    
}
function bodega1(cantidad,kgBodega1,inicial1){
    let total1= parseInt(kgBodega1)-parseInt(cantidad)
    document.getElementById('restanteBodega1').value=total1
    setlocalstorage1(total1)
        if (total1 <= inicial1/2 && total1> inicial1*0.10){
        alert(`El almacenamiento de la bodega 1 llego a la mitad`)

    }else if(total1<= inicial1*0.10){
        alert(`Queda 10% del arroz que habia en la bodega 1`)

    }
}
function bodega2(cantidad,kgBodega2,inicial2){
    let total2= parseInt(kgBodega2)-parseInt(cantidad)
    document.getElementById('restanteBodega2').value=total2
    setlocalstorage2(total2)
        if (total2 <= inicial2/2 && total2> inicial2*0.10){
        alert(`El almacenamiento de la bodega 2 llego a la mitad`)

    }else if(total2<= inicial2*0.10){
        alert(`Queda 10% del arroz que habia en la bodega 2`)

    }
}

function setlocalstorage1(total1){
  
    localStorage.setItem('bodega1', total1);
    
  
  }
  function setlocalstorage2(total2){
  
    localStorage.setItem('bodega2', total2);
    
  
  }
