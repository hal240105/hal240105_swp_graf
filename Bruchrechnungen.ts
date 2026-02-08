type Bruch = [number, number, number];

function string_to_bruch(b1: string): Bruch | null {
    let ganze = 0;
    let zaehler = 0;
    let nenner = 1;

    const y = b1.split(" ");
    ganze = Number(y[0]);

    if (y.length === 2) {
        const x = y[1].split("/");
        zaehler = Number(x[0]);
        nenner = Number(x[1]);
        if (nenner === 0) {
            console.error("Nenner darf nicht 0 sein!");
            return null;
        }
    }


    return [ganze, zaehler, nenner];
}

function ggt(a: number, b: number): number {
    while (b !== 0) {
        const temp = b;
        b = a % b;
        a = temp;
    }
    return a;
}

function addieren(bruch1: Bruch, bruch2: Bruch): string {

    const z1 = bruch1[0] * bruch1[2] + bruch1[1];
    const z2 = bruch2[0] * bruch2[2] + bruch2[1];
    const nenner = bruch1[2] * bruch2[2];

   
    let zaehler = z1 * bruch2[2] + z2 * bruch1[2];

    
    const teiler = ggt(zaehler, nenner);
    zaehler /= teiler;
    const gekuerzterNenner = nenner / teiler;

    const ganze = Math.floor(zaehler / gekuerzterNenner);
    zaehler = zaehler % gekuerzterNenner;

    if (zaehler === 0) {
        return `Ergebnis: ${ganze}`;
    } else if (ganze === 0) {
        return `Ergebnis: ${zaehler}/${gekuerzterNenner}`;
    } else {
        return `Ergebnis: ${ganze} ${zaehler}/${gekuerzterNenner}`;
    }
}


const b1 = "18 1/16";
const b2 = "12 3/4";

const bruch1 = string_to_bruch(b1);
const bruch2 = string_to_bruch(b2);

if (bruch1 && bruch2) {
    console.log(addieren(bruch1, bruch2));
} else {
    console.error("Ungültiger Bruch");
}