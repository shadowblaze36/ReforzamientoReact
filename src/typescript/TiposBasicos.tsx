export const TiposBasicos = () => {
    const nombre: string = 'Jorge';
    const edad: number = 27;
    const estaActivo: boolean = false;

    const poderes: string[] = []; //['Velocidad', 'Volar', 'Respirar en el agua'];

    

    return (
        <> 
        <h3>Tipos basicos</h3>
        {nombre}, {edad}, {(estaActivo) ? 'activo' : 'no activo'}
        <br></br>
        {poderes.join(', ')}
        </>
    )
}
