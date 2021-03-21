/*******************************************/
/*             PERSONA.JS                  */
/*     Datos para PERSONA TEMPLATE         */   
/*          [DIU] UX Toolkit v1.0 2019    */                        
/*          ver 1.1 26/Feb/2020            */
/*******************************************/
    
/****  README:       */
/****  Modifica los datos para las Personas      */
/****  v.1.1 Incluye nombre de tu grupo de prácticas (Grupo.ID), curso académico y enlace a github ***/
/****  Las imagenes para  'Photo'  están en carpeta ./photos **/
/****  Si se usan nuevas imágenes se deben añadir a esa carpeta **/
/****  Los valores de rating están entre 1..5 **/
/****  recursos de imágenes:  https://www.vectorstock.com/royalty-free-vectors/vectors-by_zdeneksasek ***/



angular.module("angular", [])
	.controller("controller", ["$scope", function($scope) { 
        $scope.Grupo_ID ="DIU1.PCMasterRace";
        $scope.Curso ="2020/21";
        $scope.Github_ID ="https://github.com/sabufu/DIU21";
        
		$scope.PersonaIndex = 0;
		$scope.Personas = [
			{		
                
                
                /*************************************/
                /**** PRIMERA PERSONA          *******/
                /*** Cambiar datos             *******/
                /*************************************/
                
                
				Id: 0,
				Name: "Sara",
				Photo: "11.jpg",
				Quote: "Wanderlust",
				Age: 25,
				Occupation: "Estudiante de un máster de energía nuclear",
				Family: "Con pareja desde hace 1 año",
				Location: "Madrid Capital",
				Character: "Le gusta descubrir lugares nuevos y salir con sus amigos de cervezas",
				PersonalityTraits: [
					{ Name: "Introvertido/reservado Vs  Extrov/activo ", Value: 4 },
					{ Name: "Realista/práctico  Vs    Intuición/imaginativo", Value: 2 },
					{ Name: "Racional/analitico  Vs   Emocional/impulsivo", Value: 4 },
					{ Name: "Flemático/apático  Vs   Colérico/visceral", Value: 5 }
				], 
				Goals: ["Terminar el master y encontrar un trabajo que le motive en un lugar en el que pueda vivir con su novio", "Descubrir mundo", "Sacarse el C1 de inglés"],
				Frustrations: ["Le gusta mucho planear viajes con sus amigos y su novio pero el master le ocupa mucho tiempo", "Le gustaría tener una mejor relación con su familia con la que apenas se habla","Va justa de dinero y le cuesta pedírselo a sus padres"],
				Bio: "Es de toledo y se fue a madrid a estudiar un grado de ingniería de la energía y actualmente esta estudiando un máster. Su familia está en Toledo, sus padres y su hermano pequeño. No tiene una buena relación con ellos desde que murieron sus abuelos en un accidente de tráfico. Ha encontrado trabajos esporádicos como camarera. A su grupo de amigos y a su novio actual los conoció en la carrera y es con lo que queda siempre para salir y hacer viajes.",
				Tech: [ 
					{ Name: "TIC/Internet", Value: 2 },
					{ Name: "Movil", Value: 3 },
					{ Name: "RRSS", Value: 4 },
					{ Name: "Software", Value: 2 }
					
				], 
                Contextos: "Está a punto de terminar el máster y lo quiere celebrar por todo lo alto haciendo un viajazo con sus amigos y su novio",  
				PreferredChannels: [
					{ Name: "Publicidad Tradicional", Value: 2 },
					{ Name: "Online & Social Media", Value: 4 },
					{ Name: "Recomendaciones & sugerencias", Value: 2 },
					{ Name: "Persona confianza (amigos, boca a boca)", Value: 3 }
				]
			},
			{	
                
                /*************************************/
                /**** SEGUNDA PERSONA          *******/
                /*** Cambiar datos             *******/
                /*************************************/
                
                
				Id: 1,
				Name: "Nuria",
				Photo: "nuria.png",
				Quote: "Los recuerdos nunca mueren",
				Age: 59,
				Occupation: "Escritora",
				Family: "Viuda con dos hijas",
				Location: "Oviedo (Asturias)",
				Character: "Le encanta pasar tiempo con sus hijas.",
				PersonalityTraits: [
					{ Name: "Introvertido/reservado Vs  Extrov/activo ", Value: 2 },
					{ Name: "Realista/práctico  Vs    Intuición/imaginativo", Value: 5 },
					{ Name: "Racional/analitico  Vs   Emocional/impulsivo", Value: 4 },
					{ Name: "Flemático/apático  Vs   Colérico/visceral", Value: 3 }
				], 
				Goals: ["Escribir una historia con sus hijas", "Hacer colaboraciones con grandes escritores"],
				Frustrations: ["En estos años no está ganando mucho dinero, teme tener que vender sus cosas \
								para subsistir.", "No puede comprarse el coche de sus sueños por esa falta de dinero", "Debido a los plazos de sus libros no tiene mucho tiempo para pasar con su familia"],
				Bio: "Nació y se crió en Oviedo junto a sus padres, la pasión por la lectura y los libros nació cuando empezó el colegio. Su género favorito siempre ha sido la fantasía y la ciencia ficción. Estudió el Grado en Lengua Española y sus literaturasen la Universidad de Asturias. A los 28 años publicó su primer bestseller con el que subió rápidamente \
				      en el ránking de mejores escritores ed fantasía. A los 30 años se casó con un filólogo, con el cual tuvo sus dos hijas mellizas dos años después. \
				      Después de esos acontecimientos siguió escribiendo libros pero ninguno de los que ha publicado ha tenido tanto éxito. \
				      Hace un par de años perdió a su marido en un accidente de coche, y desde entonces prefiere pasar más tiempo a solas excepto cuando está con sus hijas, por eso ha decidido hacer un viaje con ellas.",
				Tech: [
					{ Name: "TIC/Internet", Value: 3 },
					{ Name: "Mobile", Value: 4 },
					{ Name: "RRSS", Value: 2 },
					{ Name: "Software", Value: 1 }
					
				], 
                Contextos:   "Lleva un tiempo pensando en hacer un viaje con sus hijas, y ha decidido hacerlo" ,
				PreferredChannels: [
					{ Name: "Publicidad Tradicional (Ads)", Value: 4 },
					{ Name: "Online & Social Media", Value: 2 },
					{ Name: "Recomendaciones & sugerencias", Value: 3 },
					{ Name: "Persona confianza (amigos, boca a boca)", Value: 4 }
				]
			}
		];
		$scope.model = $scope.Personas[0];

	}])