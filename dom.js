// document.addEventListener("DOMContentLoaded", function () {
// let paragraph = document.createElement('p');

//     let text = document.createTextNode('This can be whatever you want it to be');

//     paragraph.style.color = "red";
//     paragraph.style.textTransform = "uppercase";
//     paragraph.className = "some-paragraph";

//     paragraph.appendChild(text);
//     document.body.appendChild(paragraph);



// })


document.addEventListener('DOMContentLoaded', function () {
    let div = document.createElement('div');
    
    // div.style.width = "100px";
    // div.style.height = "100px";
    // div.style.background = "red";
    // div.style.color = "white";
    
    div.classList.add('header-container');
    
    
    let h1 = document.createElement('h1');
    h1.classList.add('h1');
    let h2 = document.createElement('h2');
    h2.classList.add('h2');
    let h3 = document.createElement('h3');
    h3.classList.add('h3');
    let h4 = document.createElement('h4');
    h4.classList.add('h4');
    let h5 = document.createElement('h5');
    h5.classList.add('h5');
    let h6 = document.createElement('h6');
    h6.classList.add('h6');
    
    let ache1 = document.createTextNode('This is an h1');
    let ache2 = document.createTextNode('This is h2');
    let ache3 = document.createTextNode('This is h3');
    let ache4 = document.createTextNode('This is h4');
    let ache5 = document.createTextNode('This is h5');
    let ache6 = document.createTextNode('This is h6');
    
    
    h1.appendChild(ache1);
    h2.appendChild(ache2);
    h3.appendChild(ache3);
    h4.appendChild(ache4);
    h5.appendChild(ache5);
    h6.appendChild(ache6);
    
    
    
    div.appendChild(h1);
    div.appendChild(h2);
    div.appendChild(h3);
    div.appendChild(h4);
    div.appendChild(h5);
    div.appendChild(h6);
    
    
    document.body.appendChild(div);
    
    var colors = ['red', 'yellow', 'green', 'purple', 'pink', 'blue', 'orange', 'silver'];
    
    div.addEventListener("dblclick", function (e) {
        e.target.style.color = colors[Math.floor(Math.random() * colors.length)];
    })
    
    let button = document.createElement('button');
    let btnText = document.createTextNode('Click to add new list item');
    button.classList.add('button');
    
    button.appendChild(btnText);
    document.body.appendChild(button);
    let count = 1;
    
    button.addEventListener("click", function () {
        
        let pie = document.createElement('h1');
        let h1Text = document.createTextNode("This is line item " + count);
        
        count++
        pie.appendChild(h1Text);
        document.body.appendChild(pie);
        
        pie.addEventListener("click", function (e) {
            e.target.style.color = colors[Math.floor(Math.random() * colors.length)];
        })

        pie.addEventListener("dblclick", function(){
            pie.remove();

        })
    })
})





