function calculateSum() {
    if(document.querySelector('input').value.length == 0){
        document.querySelector('.summa').innerHTML = 'Ma ei saa öelda, mis summa on, kui sa ei ütle, mida liita!'
    } else {
        const liidetav1 = document.querySelector('#liidetav1').value;
    const liidetav2 = document.querySelector('#liidetav2').value;
    const sum = liidetav1 + liidetav2;
    document.querySelector('.summa').innerHTML = `Kui liita ${liidetav1} ja ${liidetav2}, saame ${sum}.`
    }
}
