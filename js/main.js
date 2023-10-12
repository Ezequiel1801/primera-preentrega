// Subprocesos

function motherIntel(){
    let opcionIntel = prompt("1- Mother Asrock Z390 Phantom Gaming 4S Wi-Fi BULK Pack ($42.100) || 2- Mother ASUS PRIME B660M-K D4 ($99.500) || 3-Mother ASUS ROG MAXIMUS Z690 HERO EVA 12th/13th Gen DDR5 ($497.630) || 0- VOLVER ATRAS");
    while(opcionIntel!=="0"){
        switch(opcionIntel){
            case "1":
                pregunta = prompt("¿Está seguro de sumar 'Mother Asrock Z390 Phantom Gaming 4S Wi-Fi BULK Pack' a su carrito de compras? 1- SI || 2- NO");
                if(pregunta==="1"){
                    costo=42100;
                    costoTotal += costo;
                    alert("Producto sumado con exito, usted lleva un total de: $" + costoTotal);
                }else if(pregunta==="2"){
                    alert("Operacion cancelada");
                }else{
                    alert("Por favor, ingrese una opcion valida");
                }
                break;
            case "2":
                pregunta = prompt("¿Está seguro de sumar 'Mother ASUS PRIME B660M-K D4' a su carrito de compras? 1- SI || 2- NO");
                if(pregunta=="1"){
                    costo=99500;
                    costoTotal += costo;
                    alert("Producto sumado con exito, usted lleva un total de: $" + costoTotal);
                }else if(pregunta==="2"){
                    alert("Operacion cancelada");
                }else{
                    alert("Por favor, ingrese una opcion valida");
                }
                break;
            case "3":
                pregunta = prompt("¿Está seguro de sumar 'Mother ASUS ROG MAXIMUS Z690 HERO EVA 12th/13th Gen DDR5' a su carrito de compras? 1- SI || 2- NO");
                if(pregunta=="1"){
                    costo=497630;
                    costoTotal += costo;
                    alert("Producto sumado con exito, usted lleva un total de: $" + costoTotal);
                }else if(pregunta==="2"){
                    alert("Operacion cancelada");
                }else{
                    alert("Por favor, ingrese una opcion valida");
                }
                break;
            default:
                alert("Por favor ingrese una opcion valida");
                break;
        }  
        opcionIntel = prompt("1- Mother Asrock Z390 Phantom Gaming 4S Wi-Fi BULK Pack. ($42.100) || 2- Mother ASUS PRIME B660M-K D4 ($99.500) || 3-Mother ASUS ROG MAXIMUS Z690 HERO EVA 12th/13th Gen DDR5 ($497.630) || 0- VOLVER ATRAS");
    }
}
function motherAmd(){
    let opcionAMD= prompt("1- Mother MSI A320M-A PRO AM4 ($73.000) || 2- Mother MSI B450 Gaming Plus Max DDR4 AM4 ($122.000) || 3- Mother ASUS ROG STRIX X670E-A GAMING WIFI AM5 DDR5 ($420.860) || 0- VOLVER ATRAS")
    while(opcionAMD!="0"){
        switch(opcionAMD){
            case "1":
                pregunta = prompt("¿Está seguro de sumar 'Mother MSI A320M-A PRO AM4' a su carrito de compras? 1- SI || 2- NO");
                if(pregunta==="1"){
                    costo=73000;
                    costoTotal += costo;
                    alert("Producto sumado con exito, usted lleva un total de: $" + costoTotal);
                }else if(pregunta==="2"){
                    alert("Operacion cancelada");
                }else{
                    alert("Por favor, ingrese una opcion valida");
                }
                break;
            case "2":
                pregunta = prompt("¿Está seguro de sumar 'Mother MSI B450 Gaming Plus Max DDR4 AM4' a su carrito de compras? 1- SI || 2- NO");
                if(pregunta==="1"){
                    costo=122000;
                    costoTotal += costo;
                    alert("Producto sumado con exito, usted lleva un total de: $" + costoTotal);
                }else if(pregunta==="2"){
                    alert("Operacion cancelada");
                }else{
                    alert("Por favor, ingrese una opcion valida");
                }
                break;
            case "3":
                pregunta = prompt("¿Está seguro de sumar 'Mother ASUS ROG STRIX X670E-A GAMING WIFI AM5 DDR5' a su carrito de compras? 1- SI || 2- NO");
                if(pregunta==="1"){
                    costo=420860;
                    costoTotal += costo;
                    alert("Producto sumado con exito, usted lleva un total de: $" + costoTotal);
                }else if(pregunta==="2"){
                    alert("Operacion cancelada");
                }else{
                    alert("Por favor, ingrese una opcion valida");
                }
                break;
            default:
                alert("Por favor ingrese una opcion valida");
                break;
        }
        opcionAMD = prompt("1- Mother MSI A320M-A PRO AM4 ($73.000) || 2- Mother MSI B450 Gaming Plus Max DDR4 AM4 ($122.000) || 3- Mother ASUS ROG STRIX X670E-A GAMING WIFI AM5 DDR5 ($420.860) || 0- VOLVER ATRAS")
    }
}
function graficaNvidia(){
    let opcionNvidia = prompt("1- ASUS GeForce GTX 1660 SUPER 6GB GDDR6 OC TUF ($337.930) || 2- ASUS GeForce RTX 3070 Ti 8GB GDDR6 ROG STRIX GAMING OC ($571.250) || 3. Zotac GeForce RTX 4090 24GB GDDR6X Trinity OC White Edition ($1.672.900) || 0- VOLVER ATRAS");
    while(opcionNvidia!=="0"){
        switch(opcionNvidia){
            case "1":
                pregunta = prompt("¿Está seguro de sumar 'ASUS GeForce GTX 1660 SUPER 6GB GDDR6 OC TUF' a su carrito de compras? 1- SI || 2- NO");
                if(pregunta==="1"){
                    costo=337930;
                    costoTotal += costo;
                    alert("Producto sumado con exito, usted lleva un total de: $" + costoTotal);
                }else if(pregunta==="2"){
                    alert("Operacion cancelada");
                }else{
                    alert("Por favor, ingrese una opcion valida");
                }
                break;
            case "2":
                pregunta = prompt("¿Está seguro de sumar 'ASUS GeForce RTX 3070 Ti 8GB GDDR6 ROG STRIX GAMING OC' a su carrito de compras? 1- SI || 2- NO");
                if(pregunta==="1"){
                    costo=571250;
                    costoTotal += costo;
                    alert("Producto sumado con exito, usted lleva un total de: $" + costoTotal);
                }else if(pregunta==="2"){
                    alert("Operacion cancelada");
                }else{
                    alert("Por favor, ingrese una opcion valida");
                }
                break;
            case "3":
                pregunta = prompt("¿Está seguro de sumar 'Zotac GeForce RTX 4090 24GB GDDR6X Trinity OC White Edition' a su carrito de compras? 1- SI || 2- NO");
                if(pregunta==="1"){
                    costo=1672900;
                    costoTotal += costo;
                    alert("Producto sumado con exito, usted lleva un total de: $" + costoTotal);
                }else if(pregunta==="2"){
                    alert("Operacion cancelada");
                }else{
                    alert("Por favor, ingrese una opcion valida");
                }
                
                break;
            default:
                alert("Por favor ingrese una opcion valida");
                break;
        }
        opcionNvidia = prompt("1- ASUS GeForce GTX 1660 SUPER 6GB GDDR6 OC TUF ($337.930) || 2- ASUS GeForce RTX 3070 Ti 8GB GDDR6 ROG STRIX GAMING OC ($571.250) || 3. Zotac GeForce RTX 4090 24GB GDDR6X Trinity OC White Edition ($1.672.900) || 0- VOLVER ATRAS");
    }
}
function graficaAmd(){
    let opcionRadeon = prompt("1- Asrock Radeon RX 550 2GB GDDR5 Phantom Gaming ($97.600) || 2- Asrock RX 5700 XT 8GB GDDR6 CHALLENGER PRO ($362.650) || 3- XFX Radeon RX 7900 XTX 24GB GDDR6 SPEEDSTER MERC 310 ($1.335.900) || 0- VOLVER ATRAS");
    while(opcionRadeon!=="0"){
        switch(opcionRadeon){
            case "1":
                pregunta = prompt("¿Está seguro de sumar 'Asrock Radeon RX 550 2GB GDDR5 Phantom Gaming' a su carrito de compras? 1- SI || 2- NO");
                if(pregunta==="1"){
                    costo=97600;
                    costoTotal += costo;
                    alert("Producto sumado con exito, usted lleva un total de: $" + costoTotal);
                }else if(pregunta==="2"){
                    alert("Operacion cancelada");
                }else{
                    alert("Por favor, ingrese una opcion valida");
                }
                break;
            case "2":
                pregunta = prompt("¿Está seguro de sumar 'Asrock RX 5700 XT 8GB GDDR6 CHALLENGER PRO' a su carrito de compras? 1- SI || 2- NO");
                if(pregunta==="1"){
                    costo=362650;
                    costoTotal += costo;
                    alert("Producto sumado con exito, usted lleva un total de: $" + costoTotal);
                }else if(pregunta==="2"){
                    alert("Operacion cancelada");
                }else{
                    alert("Por favor, ingrese una opcion valida");
                }
                break;
            case "3":
                pregunta = prompt("¿Está seguro de sumar 'XFX Radeon RX 7900 XTX 24GB GDDR6 SPEEDSTER MERC 310' a su carrito de compras? 1- SI || 2- NO");
                if(pregunta==="1"){
                    costo=1335900;
                    costoTotal += costo;
                    alert("Producto sumado con exito, usted lleva un total de: $" + costoTotal);
                }else if(pregunta==="2"){
                    alert("Operacion cancelada");
                }else{
                    alert("Por favor, ingrese una opcion valida");
                }
                break;
            default:
                alert("Por favor ingrese una opcion valida");
                break;
        }
        opcionRadeon = prompt("1- Asrock Radeon RX 550 2GB GDDR5 Phantom Gaming ($97.600) || 2- Asrock RX 5700 XT 8GB GDDR6 CHALLENGER PRO ($362.650) || 3- XFX Radeon RX 7900 XTX 24GB GDDR6 SPEEDSTER MERC 310 ($1.335.900) || 0- VOLVER ATRAS");
    }
}
function procesadorIntel(){
    let opcionProceIntel = prompt("1- Procesador Intel Core I3 12100 12gen ($145.700) || 2- Procesador Intel Core I5 12600k 12gen ($392.230) || 3- Procesador Intel Core I7 12700k 12gen ($468.780) || 0- VOLVER ATRAS");
    while(opcionProceIntel!=="0"){
        switch(opcionProceIntel){
            case "1":
                pregunta = prompt("¿Está seguro de sumar 'Procesador Intel Core I3 12100 12gen' a su carrito de compras? 1- SI || 2- NO");
                if(pregunta==="1"){
                    costo=145700;
                    costoTotal += costo;
                    alert("Producto sumado con exito, usted lleva un total de: $" + costoTotal);
                }else if(pregunta==="2"){
                    alert("Operacion cancelada");
                }else{
                    alert("Por favor, ingrese una opcion valida");
                }
                break;
            case "2":
                pregunta = prompt("¿Está seguro de sumar 'Procesador Intel Core I5 12600k 12gen' a su carrito de compras? 1- SI || 2- NO");
                if(pregunta==="1"){
                    costo=392230;
                    costoTotal += costo;
                    alert("Producto sumado con exito, usted lleva un total de: $" + costoTotal);
                }else if(pregunta==="2"){
                    alert("Operacion cancelada");
                }else{
                    alert("Por favor, ingrese una opcion valida");
                }
                break;
            case "3":
                pregunta = prompt("¿Está seguro de sumar 'Procesador Intel Core I7 12700k 12gen' a su carrito de compras? 1- SI || 2- NO");
                if(pregunta==="1"){
                    costo=468780;
                    costoTotal += costo;
                    alert("Producto sumado con exito, usted lleva un total de: $" + costoTotal);
                }else if(pregunta==="2"){
                    alert("Operacion cancelada");
                }else{
                    alert("Por favor, ingrese una opcion valida");
                }
                break;
            default:
                alert("Por favor, ingrese una opcion valida");
                break;
        }
        opcionProceIntel = prompt("1- Procesador Intel Core I3 12100 12gen ($145.700) || 2- Procesador Intel Core I5 12600k 12gen ($392.230) || 3- Procesador Intel Core I7 12700k 12gen ($468.780) || 0- VOLVER ATRAS");
    }
}
function procesadorRyzen(){
    let opcionAMDRyzen = prompt("1- Procesador AMD RYZEN 3 3200G 4.0GHz Turbo ($84.900) || 2- Procesador AMD Ryzen 5 5600 4.4GHz Turbo ($169.500) || 3- Procesador AMD Ryzen 7 7700X 5.4GHz Turbo ($500.000) || 0- VOLVER ATRAS");
    while(opcionAMDRyzen!=="0"){
        switch(opcionAMDRyzen){
            case "1":
                pregunta = prompt("¿Está seguro de sumar 'Procesador AMD RYZEN 3 3200G 4.0GHz Turbo' a su carrito de compras? 1- SI || 2- NO");
                if(pregunta==="1"){
                    costo=84900;
                    costoTotal += costo;
                    alert("Producto sumado con exito, usted lleva un total de: $" + costoTotal);
                }else if(pregunta==="2"){
                    alert("Operacion cancelada");
                }else{
                    alert("Por favor, ingrese una opcion valida");
                }
                break;
            case "2":
                pregunta = prompt("¿Está seguro de sumar 'Procesador AMD Ryzen 5 5600 4.4GHz Turbo' a su carrito de compras? 1- SI || 2- NO");
                if(pregunta==="1"){
                    costo=169500;
                    costoTotal += costo;
                    alert("Producto sumado con exito, usted lleva un total de: $" + costoTotal);
                }else if(pregunta==="2"){
                    alert("Operacion cancelada");
                }else{
                    alert("Por favor, ingrese una opcion valida");
                }
                break;
            case "3":
                pregunta = prompt("¿Está seguro de sumar 'Procesador AMD Ryzen 7 7700X 5.4GHz Turbo' a su carrito de compras? 1- SI || 2- NO");
                if(pregunta==="1"){
                    costo=500000;
                    costoTotal += costo;
                    alert("Producto sumado con exito, usted lleva un total de: $" + costoTotal);
                }else if(pregunta==="2"){
                    alert("Operacion cancelada");
                }else{
                    alert("Por favor, ingrese una opcion valida");
                }
                break;
            default:
                alert("Por favor, ingrese una opcion valida");
                break;
        }
        opcionAMDRyzen = prompt("1- Procesador AMD RYZEN 3 3200G 4.0GHz Turbo ($84.900) || 2- Procesador AMD Ryzen 5 5600 4.4GHz Turbo ($169.500) || 3- Procesador AMD Ryzen 7 7700X 5.4GHz Turbo ($500.000) || 0- VOLVER ATRAS");
    }
}
function almacenamientoHhd(){
    let opcionHhd = prompt("1- Disco Rígido WD 1TB BLUE 64MB SATA 6.0GB/s ($45.650) || 2- Disco Rigido WD 2TB BLUE 256MB SATA 6.0GB/s ($62.650) || 3- Disco Rígido HDD Seagate BarraCuda 2TB 256MB 5400rpm SATA 3.5 ($90.500) || 0- VOLVER ATRAS");
    while(opcionHhd!=="0"){
        switch(opcionHhd){
            case "1":
                pregunta = prompt("¿Está seguro de sumar 'Disco Rígido WD 1TB BLUE 64MB SATA 6.0GB/s' a su carrito de compras? 1- SI || 2- NO");
                if(pregunta==="1"){
                    costo=45650;
                    costoTotal += costo;
                    alert("Producto sumado con exito, usted lleva un total de: $" + costoTotal);
                }else if(pregunta==="2"){
                    alert("Operacion cancelada");
                }else{
                    alert("Por favor, ingrese una opcion valida");
                }
                break;
            case "2":
                pregunta = prompt("¿Está seguro de sumar 'Disco Rigido WD 2TB BLUE 256MB SATA 6.0GB/s' a su carrito de compras? 1- SI || 2- NO");
                if(pregunta==="1"){
                    costo=62650;
                    costoTotal += costo;
                    alert("Producto sumado con exito, usted lleva un total de: $" + costoTotal);
                }else if(pregunta==="2"){
                    alert("Operacion cancelada");
                }else{
                    alert("Por favor, ingrese una opcion valida");
                }
                break;
            case "3":
                pregunta = prompt("¿Está seguro de sumar 'Disco Rígido HDD Seagate BarraCuda 2TB 256MB 5400rpm SATA 3.5' a su carrito de compras? 1- SI || 2- NO");
                if(pregunta==="1"){
                    costo=90500;
                    costoTotal += costo;
                    alert("Producto sumado con exito, usted lleva un total de: $" + costoTotal);
                }else if(pregunta==="2"){
                    alert("Operacion cancelada");
                }else{
                    alert("Por favor, ingrese una opcion valida");
                }
                break;
            default:
                alert("Por favor, ingrese una opcion valida");
                break;
        }
        opcionHhd = prompt("1- Disco Rígido WD 1TB BLUE 64MB SATA 6.0GB/s ($45.650) || 2- Disco Rigido WD 2TB BLUE 256MB SATA 6.0GB/s ($62.650) || 3- Disco Rígido HDD Seagate BarraCuda 2TB 256MB 5400rpm SATA 3.5 ($90.500) || 0- VOLVER ATRAS");
    }
}
function almacenamientoSsd(){
    let opcionSsd = prompt("1- Disco Sólido SSD Kingston 240GB A400 500MB/s ($16.150) || 2- Disco Solido SSD Team 480GB T-Force Vulcan Z 540MB/s ($21.900) || 3- Disco Sólido SSD Kingston 960GB A400 500MB/s ($44.170) || 0- VOLVER ATRAS");
    while(opcionSsd!=="0"){
        switch(opcionSsd){
            case "1":
                pregunta = prompt("¿Está seguro de sumar 'Disco Sólido SSD Kingston 240GB A400 500MB/s' a su carrito de compras? 1- SI || 2- NO");
                if(pregunta==="1"){
                    costo=16150;
                    costoTotal += costo;
                    alert("Producto sumado con exito, usted lleva un total de: $" + costoTotal);
                }else if(pregunta==="2"){
                    alert("Operacion cancelada");
                }else{
                    alert("Por favor, ingrese una opcion valida");
                }
                break;
            case "2":
                pregunta = prompt("¿Está seguro de sumar 'Disco Solido SSD Team 480GB T-Force Vulcan Z 540MB/s' a su carrito de compras? 1- SI || 2- NO");
                if(pregunta==="1"){
                    costo=21900;
                    costoTotal += costo;
                    alert("Producto sumado con exito, usted lleva un total de: $" + costoTotal);
                }else if(pregunta==="2"){
                    alert("Operacion cancelada");
                }else{
                    alert("Por favor, ingrese una opcion valida");
                }
                break;
            case "3":
                pregunta = prompt("¿Está seguro de sumar 'Disco Sólido SSD Kingston 960GB A400 500MB/s' a su carrito de compras? 1- SI || 2- NO");
                if(pregunta==="1"){
                    costo=44170;
                    costoTotal += costo;
                    alert("Producto sumado con exito, usted lleva un total de: $" + costoTotal);
                }else if(pregunta==="2"){
                    alert("Operacion cancelada");
                }else{
                    alert("Por favor, ingrese una opcion valida");
                }
                break
            default:
                alert("Por favor, ingrese una opcion valida");
                break;
        }
        opcionSsd = prompt("1- SSD Kingston 240GB A400 500MB/s ($16.150) || 2- SSD Team 480GB T-Force Vulcan Z 540MB/s ($21.900) || 3- SSD Kingston 960GB A400 500MB/s ($44.170) || 0- VOLVER ATRAS");
    }
}
function almacenamientoM2(){
    let opcionm2 = prompt("1- M.2 WD 240GB Green SN350 2400MB/s NVMe PCI-Express x4 ($17.900) || 2- SSD M.2 Crucial 500GB P3 3500MB/s NVMe PCI-E x4 ($31.000) || 3- SSD M.2 Team 1TB Cardea A440 PRO 7400MB/s NVMe 1.4 PCIe Gen4 x4 Graphene ($113.800) || 0- VOLVER ATRAS");
    while(opcionm2!=="0"){
        switch(opcionm2){
            case "1":
                pregunta = prompt("¿Está seguro de sumar 'M.2 WD 240GB Green SN350 2400MB/s NVMe PCI-Express x4' a su carrito de compras? 1- SI || 2- NO");
                if(pregunta==="1"){
                    costo=17900;
                    costoTotal += costo;
                    alert("Producto sumado con exito, usted lleva un total de: $" + costoTotal);
                }else if(pregunta==="2"){
                    alert("Operacion cancelada");
                }else{
                    alert("Por favor, ingrese una opcion valida");
                }
                break;
            case "2":
                pregunta = prompt("¿Está seguro de sumar 'SSD M.2 Crucial 500GB P3 3500MB/s NVMe PCI-E x4' a su carrito de compras? 1- SI || 2- NO");
                if(pregunta==="1"){
                    costo=31000;
                    costoTotal += costo;
                    alert("Producto sumado con exito, usted lleva un total de: $" + costoTotal);
                }else if(pregunta==="2"){
                    alert("Operacion cancelada");
                }else{
                    alert("Por favor, ingrese una opcion valida");
                }
                break;
            case "3":
                pregunta = prompt("¿Está seguro de sumar 'SSD M.2 Team 1TB Cardea A440 PRO 7400MB/s NVMe 1.4 PCIe Gen4 x4 Graphene' a su carrito de compras? 1- SI || 2- NO");
                if(pregunta==="1"){
                    costo=113800;
                    costoTotal += costo;
                    alert("Producto sumado con exito, usted lleva un total de: $" + costoTotal);
                }else if(pregunta==="2"){
                    alert("Operacion cancelada");
                }else{
                    alert("Por favor, ingrese una opcion valida");
                }
                break;
            default:
                alert("Por favor, ingrese una opcion valida");
                break;
        }
        opcionm2 = prompt("1- M.2 WD 240GB Green SN350 2400MB/s NVMe PCI-Express x4 ($17.900) || 2- SSD M.2 Crucial 500GB P3 3500MB/s NVMe PCI-E x4 ($31.000) || 3- SSD M.2 Team 1TB Cardea A440 PRO 7400MB/s NVMe 1.4 PCIe Gen4 x4 Graphene ($113.800) || 0- VOLVER ATRAS");
    }
}

//Procesos generales

function procesarMotherboard(){
    let motherboard = prompt("1- Motherboards Intel. 2- Motherboards AMD. 0- VOLVER ATRAS");
                while(motherboard!=="0"){
                  switch(motherboard){
                        case "1":
                            motherIntel();
                            break;
                        
                        case "2":
                            motherAmd();
                            break;
    
                        default:
                            alert("Por favor ingrese una opcion valida");
                            break;
                    }  
                    motherboard = prompt("1- Motherboards Intel. 2- Motherboards AMD. 0- VOLVER ATRAS");
                }
}
function procesarGrafica(){
    let grafica = prompt("1- Graficas Nvidia. 2- Graficas AMD. 0-VOLVER ATRAS");
    while(grafica!=="0"){
        switch(grafica){
            case "1":
                graficaNvidia();
                break;
            case "2":
                graficaAmd();
                break;
            default:
                alert("Por favor ingrese una opcion valida");
                break;
        }
        grafica = prompt("1- Graficas Nvidia. 2- Graficas AMD. 0-VOLVER ATRAS");
    }
}
function procesarProcesador(){
    let procesador = prompt("1- Intel. 2- AMD Ryzen. 0- VOLVER ATRAS");
    while(procesador!=="0"){
        switch(procesador){
            case "1":
                procesadorIntel();
                break;
            case "2":
                procesadorRyzen();
                break;
        }
        procesador = prompt("1- Intel. 2- AMD Ryzen. 0- VOLVER ATRAS");
    }
}
function ProcesarAlmacenamiento(){
    let almacenamiento = prompt("1- HHD. 2- SSD. 3- M.2. 0- VOLVER ATRAS");
    while(almacenamiento!=="0"){
        switch(almacenamiento){
            case "1":
                almacenamientoHhd();
                break;
            case "2":
                almacenamientoSsd();
                break;
            case "3":
                almacenamientoM2();
                break;
        }
        almacenamiento = prompt("1- HHD. 2- SSD. 3- M.2. 0- VOLVER ATRAS");
    }
}
function procesarOperacion(operacion){
    while(operacion!=="0"){
        switch(operacion){
            case "1":
                procesarMotherboard();
            break;
            case "2":
                procesarGrafica();
            break
            case "3":
                procesarProcesador();
                break;
            case "4":
                ProcesarAlmacenamiento();
                break;
        }
        operacion = prompt("Para realizar una compra ingrese la opcion que desee 1- Motherboard. 2- Tarjetas graficas. 3- Procesadores. 4- Almacenamiento. o ingrese 0 para finalizar la compra");
    }
}

alert("Bienvenido a Gaming Cave, ¡acá podes encontrar diversos componentes para tu build!")
let operacion = prompt("Para realizar una compra ingrese la opcion que desee 1- Motherboard. 2- Tarjetas graficas. 3- Procesadores. 4- Almacenamiento. o ingrese 0 para cancelar");
let costo=0;
let costoTotal=0;
let pregunta="";

procesarOperacion(operacion);

if(costo===0){
    alert("¡Gracias por visitar la pagina!")
}else{
    alert("Gracias por su compra, el costo total es de: $" + costoTotal);
}