


document.addEventListener('DOMContentLoaded', function() {
    
    let button = document.createElement('button');
    let btnText = document.createTextNode('Add Square');
    button.classList.add('button');
    button.appendChild(btnText);
    document.body.appendChild(button);

    button.addEventListener("click", function() {
        var div = document.createElement('div');

        
        div.style.width = "100px";
        div.style.height = "100px";
        div.style.background = "black";
        div.style.color = "red";
        div.style.margin = "5px";
        document.body.appendChild(div);
       
    })







})