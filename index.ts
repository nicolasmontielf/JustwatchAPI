import { getIdByName, getInfoById } from './src/api.service';
import promptSync from 'prompt-sync';

const prompt = promptSync({ sigint: true });

function formatText(name: string, info: any) {
    console.log('------------------------------------')
    if (info.length > 0) {
        console.log(`Podes encontrar ${name.toUpperCase()} en:`)
        for (const item of info) {
            console.log(
                `-   ${item.package.clearName} en calidad ${item.presentationType}`
            )
        }
    } else {
        console.log(`No tienes disponible ${name.toUpperCase()} en ninguna plataforma :(`)
    }
    
    console.log('------------------------------------')
}

async function main(search: string) {
    try {
        const { id, name } = await getIdByName(search)
        const info = await getInfoById(id)

        formatText(name, info)
    } catch (error) {
        console.log("Hubo un error al buscar la pelicula o serie. Intentalo de nuevo.")
    }
}

(async () => {
    console.log("Bienvenido a JustWatch CLI. Para salir, presiona Ctrl+C")
    while (true) {
        const search: string = prompt('Que pelicula o serie buscas?: ');
        if (search.length === 0) {
            continue;
        }
        await main(search);
    }
})();