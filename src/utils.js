let box = document.createElement('div');

box.style.position="fixed";
box.style.bottom="12px";
box.style.left="20px";

document.body.appendChild(box); 

export function assert(condition, msg){
    if(condition){
        box.appendChild(createItem(msg));
    }
}

function createItem(msg){
    let node = document.createElement('p');

    node.textContent = msg || '';

    return node;
}