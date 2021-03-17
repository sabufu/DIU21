/*******************************************/
/*             JOURNEY.JS                  */
/*     Datos para USER JOURNEY MAP         */   
/*          [DIU] UX Toolkit v1.0 2019     */                        
/*          ver 1.1 26/Feb/2020            */
/*******************************************/
    
/****  README:       */
/****  v.1.1 Incluye nombre de tu grupo de prácticas (Grupo.ID), curso académico y enlace a github ***/
/****  Modifica los datos para los Journey Map (uno para cada Persona)  */
/****  Usa los 6 pasos y sigue las instrucciones */   
/****  Las imagenes para  'Photo', 'feelX', 'imaX' están en carpeta ./photos **/
/****  Si se usan nuevas imágenes se deben añadir a esa carpeta **/
/****  Los valores de rating están entre 1..5 **/
/****  recursos de imágenes:  https://www.vectorstock.com/royalty-free-vectors/vectors-by_zdeneksasek ***/




angular.module("angular", [])
    .controller("controller", ["$scope", function($scope) { 
        $scope.Grupo_ID ="DIU1.ABCDEF";
        $scope.Curso ="2020/21";
        $scope.Github_ID ="https://github.com/mgea/UX-DIU-Toolkit";
        
        $scope.JourneyIndex = 0;
        
        $scope.Journeys = [
            {       
                
                /*************************************/
                /**** PRIMER USER JOURNEY MAP  *******/
                /*** Cambiar datos             *******/
                /*************************************/
                
                Id: 0,
                Name: "Sara",
                Photo: "11.jpg",
    
                /*** PASO #1: INSPIRACION ***/ 
                goal1: "quiere preparar un viaje con sus amigos y su novio para celebrar que termina el máster",
                touch1: "Internet",
                feel1: "5",
                con1: "Poner de acuerdo a sus amigos y novio con los dias que pueden todos",
                ima1: "cartoon-planning.png",
                
                /*** PASO #2: DECICION ***/ 
                goal2: "Busca en internet destinos a los que ir y ver que lugares pillan de camino",
                touch2: "Ordenador",
                feel2: "4",
                con2: "No termina de decidir a que sitios parar en la travesía de su viaje",
                ima2: "cartoon-PCangry.png",
                
                /*** PASO #3: ACTUA ***/ 
                
                goal3: "Decide ir hasta Lille que está al norte de Francia en varios coches con sus amigos y novio, donde pueden ver lugares muy interesantes por el camino",
                touch3: "móvil",
                feel3: "3",
                con3: "Preocupada por la cantidad de kilómetros de viaje y que el coche de uno de sus amigos es un poco viejo y no terminan de confiar",
                ima3: "cartoon-phone.png",
                
                /*** PASO #4: OBSERVA ***/ 
                
                goal4: "Ha encontrado una página que le pone la ruta y calcula el precio de combustible que van a necesitar y también le recomienda sitios por la ruta elegida ",
                touch4: "ordenador",
                feel4: "4",
                con4: "Tiene que ver si desde el movil puede usarlo para guiarse cuando ya estén en el viaje porque hasta ahora solo habia mirado con el ordenador",
                ima4: "cartoon-PCtyping.png",
                
                 /*** PASO #5: ANALIZA ***/ 
                
                goal5: "Encuentra una ruta que le gustan los lugares que puede visitar en el trayecto",
                touch5: "móvil",
                feel5: "5",
                con5: "Llama a sus amigos para ver que les parece la ruta que le da la aplicación pero algunos se quejan de que el trayecto es muy largo",
                ima5: "cartoon-phoning.png",
                
                
                /*** PASO #6: CONCLUSION ***/ 
                
                goal6: "Finalmente todos los amigos aceptan la ruta y deciden tranochar en campings que haya de camino",
                touch6: "móvil",
                feel6: "3",
                con6: "Les preocupa hacer el viaje sin reservas pero asi van disfrutando al momento del viaje según les apetezca en el momento",
                ima6: "cartoon-resting.png",
                
			},
			{	
                /*************************************/
                /**** SEGUNDO USER JOURNEY MAP *******/
                /***      Cambiar datos        *******/
                /*************************************/
                
				Id: 1,
				Name: "Nuria",
                Photo: "nuria.png",
                
				 /*** PASO #1: INSPIRACION ***/ 
                goal1: "Quiere hacer un viaje con sus hijas",
                touch1: "Libro",
                feel1: "3",
                con1: "Quiere ir a un lugar tranquilo, con buen tiempo, no le gustan las grandes ciudades",
                ima1: "cartoon-going.png",
                
                /*** PASO #2: DECICION ***/ 
                goal2: "Decide buscar posibles sitios en webs, se decide por RoadTrippers.",
                touch2: "Ordenador",
                feel2: "2",
                con2: "No tiene claro el sitio dónde quiere ir.",
                ima2: "cartoon-teamthinking.png",
                
                /*** PASO #3: ACTUA ***/ 
                
                goal3: "Finalmente se decide por Lanzarote, le gusta la playa y a sus hijas le parecen estupendo el sitio",
                touch3: "Ordenador(RoadTrippers)",
                feel3: "4",
                con3: "Está preocupada por el método de transporte, le tiene miedo a los aviones. Prefiere ir en barco",
                ima3: "cartoon-phoningangry.png",
                
                /*** PASO #4: OBSERVA ***/ 
                
                goal4: "Busca una oferta en hoteles y bungalows cerca de playa",
                touch4: "Ordenador",
                feel4: "3",
                con4: "Encuentra un buen sitio, pero el avión es bastante más barato que el barco. No sabe que hacer",
                ima4: "cartoon-phone-street.png",
                
                 /*** PASO #5: ANALIZA ***/ 
                
                goal5: "Reserva a través de la web, al final se decide por ir en barco, aunque le cueste más ",
                touch5: "Ordenador",
                feel5: "2",
                con5: "Sus hijas no están del todo de acuerdo con su decisión, ya que ellas prefieren que gaste menos dinero",
                ima5: "cartoon-phone-sitting.png",

                
                /*** PASO #6: CONCLUSION ***/ 
                
                goal6: "Al final sus hijas entienden su miedo por los aviones y acceden a ir en barco. Consigue reservar",
                touch6: "Ordenador (reserva OK)",
                feel6: "4",
                con6: "Les queda planificar que van a hacer allí durante el tiempo que estén",
                ima6: "cartoon-PChard.png",
                
                
                
			}
		];
        
		$scope.model = $scope.Journeys[0];

	}])



