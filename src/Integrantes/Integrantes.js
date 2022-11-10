export function Integrantes(){

    let integrantes=[
        {
            nombre:"Brandon Boyd",
            instrumento:"Vocalista",
            edad:46,
            fotografia:"https://firebasestorage.googleapis.com/v0/b/jjgtiendatcc.appspot.com/o/integrante1.jfif?alt=media&token=d4c3364e-f4c8-41f6-9d90-e894f2981cd1"
        },
        {
            nombre:"Mike Einziger",
            instrumento:"Guitarrista",
            edad:45,
            fotografia:"https://firebasestorage.googleapis.com/v0/b/jjgtiendatcc.appspot.com/o/Mike_Einziger_of_Incubus_live_2004.jpg?alt=media&token=548bb3fe-69fa-43aa-9c7d-88cdb71712e3"
        },
        {
            nombre:"José Antonio Pasillas",
            instrumento:"Baterista",
            edad:46,
            fotografia:"https://firebasestorage.googleapis.com/v0/b/jjgtiendatcc.appspot.com/o/800px-Jose_Pasillas.jpg?alt=media&token=c83b2c43-e9a5-443f-9906-f311b418e06a"
        },
        {
            nombre:"Benjamin Lee Kenney",
            instrumento:"Bajista",
            edad:46,
            fotografia:"https://firebasestorage.googleapis.com/v0/b/jjgtiendatcc.appspot.com/o/artista2.jpg?alt=media&token=424f0ff9-9519-4476-b4a0-8ff66ef18876"

        }
    ]

    return(

        <div className="row row-cols-1 row-cols-md-4 g-0 mt-5">

            {
                integrantes.map(function(integrante){
                    return(
                        <>
                            <div className="col mt-3 bg-dark p-5">
                                <div className="card h-100">
                                    <img src={integrante.fotografia} alt="foto" className="img-fluid w-100 h-100"/>
                                    <h4 className="text-center">{integrante.nombre}</h4>
                                    <br/>
                                    <h5 className="text-center">Edad: {integrante.edad}</h5>
                                    <h5 className="text-center">Rol: {integrante.instrumento}</h5>

                                </div>
                            </div>
                        </>
                    )
                })
            }

        </div>
      
    )
}