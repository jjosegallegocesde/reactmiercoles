import {servicioCanciones} from '../services/servicioCanciones.js'

//necesito usar el hook USESTATE
//PARA ALMACENAR LA RESPUESTA DEL SERVICIO DE FORMA GLOBAL
import { useState,useEffect } from 'react'

export function Music(){


    //CREANDO MI PRIMER USESTATE
    const[canciones,setCanciones]=useState(null)
    const[estamosCargando,setEstamosCargando]=useState(true)

    //USANDO MI PRIMER USEEFFECT
    useEffect(function(){

        servicioCanciones()
        .then(function(respuesta){
            setCanciones(respuesta)
            setEstamosCargando(false)
        })

    },[])

    if(estamosCargando==true){

        return(
            <>
                <h1>Estamos cargando...</h1>
            </>
        )

    }else{

        return(
            <>
                <h1>estan listas las canciones</h1>
                {
                    canciones.tracks.map(function(cancion){
                        return(
                            <h5>{cancion.name}</h5>
                        )
                    })
                }
            </>
        )

    }

    
   
}