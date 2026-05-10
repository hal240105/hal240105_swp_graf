// alter < 20 rejected
// alter >= 20 resolved

function checkOven() {
    return new Promise((resolve, reject) => {
        const isOvenHot = true;
        if (isOvenHot) {
            return resolve({ success: true, message: "Ofen ist bereit!" });
        }
        return reject({ success: false, message: "Ofen ist defekt." });
    });
}

function bakePizza(name) {
    return new Promise((resolve, reject) => {
        if (name === "") {
            return reject("Fehler: Keine Pizza ausgewählt.");
        }
        return resolve("Pizza " + name + " ist fertig gebacken!");
    });
}

checkOven()
    .then((result) => {
        console.log(result.message);
        return bakePizza("Margherita");
    })
    .then((msg) => {
        console.log(msg);
    })
    .catch((err) => {
        console.error("Pizza-Bestellung gescheitert:", err);
    });