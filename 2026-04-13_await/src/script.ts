/// <reference lib="dom" />

async function holePokemon(nr: number) {
    const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${nr}`);
    if (!response.ok) {
        throw new Error("Pokémon nicht gefunden: " + response.status);
    }

    const data = await response.json();
    const imgUrl = data.sprites.other["official-artwork"].front_default;

    const container = document.getElementById("pokemon-container")!;
    container.innerHTML = "";

    const img = document.createElement("img");
    img.src = imgUrl;
    img.alt = data.name;
    container.appendChild(img);

    const name = document.createElement("p");
    name.textContent = data.name;
    container.appendChild(name);
}

const button = document.getElementById("hole-pokemon")!;

button.addEventListener("click", async () => {
    const input = document.getElementById("pokemon-nr") as HTMLInputElement;
    const nr = parseInt(input.value);

    if (isNaN(nr) || nr < 1 || nr > 1025) {
        alert("Bitte eine gültige Nummer (1–1025) eingeben!");
        return;
    }

    try {
        await holePokemon(nr);
        console.log(`Pokémon #${nr} geladen`);
    } catch (e) {
        if (e instanceof Error) {
            console.log("Fehler aufgetreten: ", e.message);
        } else {
            console.log("Fehler aufgetreten: ", e);
        }
    } finally {
        console.log("IMMER");
    }
});