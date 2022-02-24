func1 = (e) => {
    let initial = document.querySelector('#number').value;
    let returnResult = Math.floor(Math.random() * initial) + 1;
    document.querySelector("#result").innerHTML = returnResult;
    e.preventDefault()

};

document.querySelector("#button1").addEventListener("click", func1);