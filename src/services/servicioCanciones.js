export async function servicioCanciones(){

    const URI="https://api.spotify.com/v1/artists/3YcBF2ttyueytpXtEzn1Za/top-tracks?market=US"
    const TOKEN="Bearer BQDm7U4KIdJJzuDya3cdzxdNmCM_VMrGYeVVSyUTGZVnLi9kOARZO1c1-kLiGT6tZ_6IMFjfmB3ab5oUo-6Y39bZANEd6_cH_tzapMawxH6qZ9oCt0coSuJJdOBo60KZN2A5LmuUuCuU7rK8Qn_HbIaPDGMsumBTgqiB4XNUNpq3iJ1hbSM"
    const PETICION={
        method:"GET",
        headers:{Authorization:TOKEN}
    }

    let respuesta=await fetch(URI,PETICION)
    let canciones=await respuesta.json()

    return canciones
}