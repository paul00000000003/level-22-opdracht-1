function huiswerkMaken(vak, callback) {
    setTimeout(() => {
        console.log(`ok,ok ik ga nu mijn ${vak} huiswerk maken`);
        setTimeout(() => callback(vak), 6000);
    }, 5000);
};

function klaarMetHuiswerk(vak2) { console.log(`Kijk paps, mams, ik ben klaar met mijn ${vak2} huiswerk`); }

function huiswerkIntentie(vak3) {
    huiswerkMaken(vak3, klaarMetHuiswerk)
    console.log(`Nee ik heb geen zin om ${vak3} huiswerk te maken. Ga maar even wachten ......`);
}

huiswerkIntentie('wiskunde');
huiswerkIntentie('Frans');
huiswerkIntentie('Spaans');