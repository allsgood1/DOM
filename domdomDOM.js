


document.addEventListener('DOMContentLoaded', function () {

    let button = document.createElement('button');
    let btnText = document.createTextNode('Add Square');
    button.classList.add('button');
    button.appendChild(btnText);
    document.body.appendChild(button);

    let containerDiv = document.createElement("div");

    containerDiv.style.display = "flex";
    containerDiv.style.flexDirection = "row";
    containerDiv.style.flexWrap = "wrap";
    document.body.appendChild(containerDiv);
    
    let num = 0;
    
    button.addEventListener("click", function () {
        var div = document.createElement('div');
        div.classList.add('skwares');
        
        num++;
        div.setAttribute('id', num);
        let idDisplay = document.createElement('span');
        idDisplay.classList.add('id-display');
        idDisplay.innerText = num;
        
        
        
        div.style.width = "100px";
        div.style.height = "100px";
        div.style.background = "blue";
        div.style.margin = "5px";
        containerDiv.appendChild(div);
        
        var colors = ['red', 'blue', 'green', 'purple', 'pink', 'yellow', 'orange']

        div.addEventListener("click", function(e){
            e.target.style.background = colors[Math.floor(Math.random() * colors.length)];
        })

        div.addEventListener("dblclick", function(){
        if (div.id % 2 == 0) {
            if (document.contains(div.nextSibling)) {
                div.nextSibling.remove()
            } else {
                alert('There is no square to delete u dummy')
            }
    
            } else {
                if (document.contains(div.previousSibling)) {
                    div.previousSibling.remove()
                } else {
                    alert('There aint never none to delete!!!!!!!')
                }
            }
        })
        
    })
    
    







})