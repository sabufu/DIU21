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
        $scope.Grupo_ID ="DIU1.PCMasterRace";
        $scope.Curso ="2020/21";
        $scope.Github_ID ="https://github.com/sabufu/DIU21";
        
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
                feel1: "4",
                con1: "Poner de acuerdo a sus amigos y novio con los dias que pueden todos",
                ima1: "cartoon-planning.png",
                
                /*** PASO #2: DECICION ***/ 
                goal2: "Busca en Roadtrippers destinos a los que ir y ver que lugares pillan de camino",
                touch2: "Ordenador",
                feel2: "2",
                con2: "No termina de decidir a que sitios parar en la travesía de su viaje",
                ima2: "cartoon-PCangry.png",
                
                /*** PASO #3: ACTUA ***/ 
                
                goal3: "Decide ir hasta Lille que está al norte de Francia en varios coches con sus amigos y novio, donde pueden ver lugares muy interesantes por el camino",
                touch3: "móvil",
                feel3: "3",
                con3: "Preocupada por la cantidad de kilómetros de viaje y que el coche de uno de sus amigos es un poco viejo y no terminan de confiar",
                ima3: "cartoon-phone.png",
                
                /*** PASO #4: OBSERVA ***/ 
                
                goal4: "Se ha dado cuenta que la página le pone la ruta y calcula el precio de combustible que van a necesitar y también le recomienda sitios por la ruta elegida ",
                touch4: "ordenador",
                feel4: "4",
                con4: "Tiene que ver si desde el movil puede usarlo para guiarse cuando ya estén en el viaje porque hasta ahora solo habia mirado con el ordenador",
                ima4: "cartoon-PCtyping.png",
                
                 /*** PASO #5: ANALIZA ***/ 
                
                goal5: "Encuentra una ruta que le gustan los lugares que puede visitar en el trayecto",
                touch5: "móvil",
                feel5: "4",
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
                goal1: "Quiere organizar un viaje con sus hijas para disfrutar de unos días de relax con ellas",
                touch1: "Internet",
                feel1: "4",
                con1: "Tiene que entregar a su editorial un adelanto de su nuevo libro, por lo que no puede irse más de una semana",
                ima1: "cartoon-PChappy.png",
                
                /*** PASO #2: DECICION ***/ 
                goal2: "Sus hijas le recomiendan que use RoadTrippers, que está muy bien para planear un viaje, \
                        para establecer una ruta e ir marcando puntos de interés",
                touch2: "Ordenador",
                feel2: "1",
                con2: "La página sólo está en Inglés, y al no tener mucho conocimiento del idioma tiene que estar \
                        usando un traductor.",
                ima2: "cartoon-PCangry.png",
                
                /*** PASO #3: ACTUA ***/ 
                
                goal3: "Busca en guías de viaje de ejemplo de la página por si alguna le convence",
                feel3: "2",
                touch3: "ordenador (RoadTrippers)",
                con3: "No tiene claro a que sitio ir, por lo que hace uso de las recomendaciones de la página",
                ima3: "cartoon-thinking.png",
                
                /*** PASO #4: OBSERVA ***/ 
                
                goal4: "Hay un recomendación de Lanzarote y recuerda que una amiga que estuvo allí hace tiempo le gustó la experiencia. \
                        Se decide entonces por ir a Lanzarote.",
                touch4: "Ordenador",
                feel4: "2",
                con4: "Tiene que buscar medios de transporte, ya que la página no lo cubre",
                ima4: "cartoon-PCangry.png",
                
                 /*** PASO #5: ANALIZA ***/ 
                
                goal5: "Encuentra un avión barato y se dispone a hacer una reserva en un hotel",
                touch5: "Ordenador",
                feel5: "3",
                con5: "Mediante las páginas a las que le remite la web, busca ofertas pero muchas \
                       ya tienen reserva hecha",
                ima5: "cartoon-PCangry.png",

                
                /*** PASO #6: CONCLUSION ***/ 
                
                goal6: "Al final consigue reservar un bungalow a 10 min de la playa",
                touch6: "Ordenador (reserva OK)",
                feel6: "4",
                con6: "No es lo que quería, pero al menos algo es algo",
                ima6: "cartoon-PChard.png",
                
                
                
			}
		];
        
		$scope.model = $scope.Journeys[0];

	}])



