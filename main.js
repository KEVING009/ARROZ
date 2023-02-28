function comprar(){

    let cantidad = document.getElementById('cantidad').value
    let bodega = document.getElementById('bodega').value

    let kgBodega1 = 100000
    let kgBodega2 = 230000


    if(bodega==1){
        bodega1()
    }else if(bodega==2){
        kgBodega2()
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
function bodega1(){
    
}
