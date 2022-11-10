import './Home.css'

import {Footer} from '../Footer/Footer.js'

export function Home(){

    return(
        <>
           <img src="https://firebasestorage.googleapis.com/v0/b/jjgtiendatcc.appspot.com/o/banner.jpg?alt=media&token=277b2663-b94b-4bd8-b6de-0b3c113541c9" alt="banner" className="w-100 img-fluid"/>

            <section>
                <div className="container">
                    <div className="row">
                        <div className="col-12 text-center">
                            <h1>INCUBUS</h1>
                            <p>
                            Incubus es una banda de rock alternativo estadounidense formado por el vocalista Brandon Boyd, guitarrista Mike Einziger y batería José Pasillas cuando estudiaban juntos y después expandieron con la inclusión del bajista Alex "Dirk Lance" Katunich y Gavin "DJ Lyfe" Koppell; ambos reemplazados finalmente por Ben Kenney y DJ Kilmore respectivamente. Para el 2001 tuvieron un enorme éxito con el sencillo "Drive", seguido de su álbum Morning View
                            </p>
                            <hr/>
                        </div>
                    </div>

                    <div className="row">
                        <div className="col-12 col-md-8">
                            <img src="https://firebasestorage.googleapis.com/v0/b/jjgtiendatcc.appspot.com/o/21753018_10155226596903999_29998736812000224_o.jpg?alt=media&token=335e9325-5a9f-4fe9-ba57-0a2333222108" className="img-fluid w-100" alt="live" />
                        </div>
                        <div className="col-12 col-md-4 align-self-center">
                            <p>
                                Incubus se forma en un garaje de Calabasas, California en enero de 1991. Empezaron tocando en pequeños clubes y fiestas, para saltar a telonear a todo un elenco de bandas consagradas de Hollywood como Poison.En el año 1990 Jose Pasillas (Percusión) conoce a Mike Einziger (guitarrista) quien pasaba la mayor parte de su tiempo tocando la guitarra y a Alex Katunich (bajo) quien había participado en una banda de jazz de la cual lo expulsan por no saber leer partituras. Los tres deciden juntarse a tocar por diversión versiones de Megadeth y Metallica. En muy poco tiempo logran hacerse conocidos en el barrio, pero, faltaba un vocalista. Es por ello que logran convencer a Brandon Boyd, quien era amigo desde primaria de Mike Einziger y que tenía un gran talento vocal
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            <Footer></Footer>


        </>
    )

}