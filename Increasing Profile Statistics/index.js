const counters = document.querySelectorAll(".counter");

counters.forEach(counter => {
    counter.innerText = '0';

    incrementCounter();

    function incrementCounter(){
        let currentNumber = +counter.innerText;
        const dataCeil = counter.getAttribute('data-ceil');
        //divided by 15 because it is the lowest of all the data-ceil, to get a common ration
        const increment = Math.ceil(dataCeil / 15);

        currentNumber += increment;

        if(currentNumber <= dataCeil){
            counter.innerText = currentNumber;
            setTimeout(incrementCounter, 50)
        }else{
            counter.innerText = dataCeil;
        }
    }
})