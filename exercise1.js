let btn = document.getElementById("btn10");
let cnt = 1;
function textremover() {
    let box1 = document.getElementById("containment");
    let len1 = box1.getElementsByTagName("*").length;
    // console.log(len1);
    if (len1 == 0) {
        document.getElementById("dummytxt1").style = "display:block";
    }
    else {
        document.getElementById("dummytxt1").style = "display:none";
    }
}

function removenode(id1) {
    let element = document.getElementById(id1);
    element.parentElement.remove();
    textremover();

}


btn.addEventListener('click', function (e) {
    let textarea = document.getElementById('txtarea');
    let val = textarea.value;
    let newdiv2 = document.createElement("div");
    newdiv2.innerHTML = `<div>Note ${cnt}</div>`;
    cnt++;
    newdiv2.innerHTML += `<div style="max-width: 250px;word-break: break-all;">${val}</div>`;
    newdiv2.innerHTML += `<br>`;
    newdiv2.setAttribute('class', 'nodebox');

    newdiv2.style.border = "3px solid black";
    // newdiv2.style.minHeight="150px";
    newdiv2.style.height = "fit-content";
    newdiv2.style.Width = "200px";
    newdiv2.style.width = "fit-content";
    newdiv2.style.margin = "7px";
    let html1 = `<button id="lol${cnt}" onclick="removenode(this.id)">Delete Node</button>`;
    newdiv2.innerHTML += html1;
    let container2 = document.getElementById("containment");
    container2.append(newdiv2);
    textremover();
})



let srchbar2 = document.getElementById("srchbar1");
srchbar2.addEventListener('input', function () {

    let coll = document.getElementsByClassName('nodebox');
    let srchval = srchbar2.value;
    for (let i = 0; i < coll.length; i++) {
        if (coll[i].textContent.includes(srchval)) {
            coll[i].style.display = "block";
        }
        else {
            coll[i].style.display = "none";
        }
    }
})
