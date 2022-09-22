// document.querySelector('.calculateSum').addEventListener('click', onBtnClick);
function onBtnClick() {
    getFeedback()
};

function getSum(arr1, arr2) {
    const sum = arr1 + arr2;
    return sum
}

function getInputValues() {
    const liidetav1 = parseInt(document.querySelector('#liidetav1').value);
    const liidetav2 = parseInt(document.querySelector('#liidetav2').value);

    return {liidetav1, liidetav2}
}

function getFeedback() {
    if(document.querySelector('input').value.length == 0){
        document.querySelector('.summa').innerHTML = 'Ma ei saa öelda, mis summa on, kui sa ei ütle, mida liita!'
    } else {
        const {liidetav1, liidetav2} = getInputValues()
        getSum(liidetav1, liidetav2)
        document.querySelector('.summa').innerHTML = `Kui liita ${liidetav1} ja ${liidetav2}, saame ${getSum(liidetav1, liidetav2)}.`
    }
}