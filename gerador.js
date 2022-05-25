let campo = document.getElementById('campo-senha');
const btn = document.getElementById('btn');
let quant = document.getElementById('quant-senha');
let profile = document.getElementById('profile');


function gerarPass() {

    //Profile Low 10
    if (profile.value == 'low') {
        let charLow = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz';
        let pass = '';
        let result;
        for (let i = 0; i < quant.value; i++) {
            pass += charLow[Math.floor(Math.random() * charLow.length)];
            campo.value = pass;
        }
    } else if (profile.value == 'med') {
        //Profile Medium 10
        const charMedium = '0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
        let pass = '';
        let result;
        for (let i = 0; i < quant.value; i++) {
            pass += charMedium[Math.floor(Math.random() * charMedium.length)];
            campo.value = pass;
        }
    } else if (profile.value == 'high') {
        //profile High 10
        const charHigh = '!@#$%&*()[{}]0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%&*()[{}]';
        let pass = '';
        let result;
        for (let i = 0; i < quant.value; i++) {
            pass += charHigh[Math.floor(Math.random() * charHigh.length)];
            campo.value = pass;
        }
    }

}





