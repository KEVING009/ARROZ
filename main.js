function comprar(){

    let cantidad = document.getElementById('cantidad').value
    let bodega = document.getElementById('bodega').value

    let kgBodega1 = 100000
    let kgBodega2 = 230000


    if(bodega==1){
        bodega1(cantidad,kgBodega1)
    }else if(bodega==2){
        bodega2(cantidad,kgBodega2)
    }

    if (kgBodega1 <= kgBodega1/2 && kgBodega1> kgBodega1*0.10){
        alert(`El almacenamiento de la bodega 1 llego a la mitad`)

    }else if(kgBodega1<= kgBodega1*0.10){
        alert(`Queda 10% del arroz que habia en la bodega 1`)

    }
    if (kgBodega2 <= kgBodega2/2 && kgBodega2> kgBodega2*0.10){
        alert(`El almacenamiento de la bodega 2 llego a la mitad`)

    }else if(kgBodega2<= kgBodega2*0.10){
        alert(`Queda 10% del arroz que habia en la bodega 2`)

    }
    
}
function bodega1(cantidad,kgBodega1){
    let total1= parseInt(kgBodega1)-parseInt(cantidad)
    document.getElementById('kgBodega1').value=total1
    setlocalstorage1(total1)
}
function bodega2(cantidad,kgBodega2){
    let total2= parseInt(kgBodega2)-parseInt(cantidad)
    document.getElementById('kgBodega2').value=total2
    setlocalstorage2(total2)
}

function setlocalstorage1(total1){
  
    localStorage.setItem('bodega1', total1);
    
  
  }
  function setlocalstorage2(total2){
  
    localStorage.setItem('bodega2', total2);
    
  
  }
