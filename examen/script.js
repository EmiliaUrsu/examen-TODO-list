
  let myNodelist = document.getElementsByTagName("li");
  let i;
    for (i = 0; i < myNodelist.length; i++) {
  let span = document.createElement("SPAN");
  let txt = document.createTextNode("\u00D7");
  span.className = "close";
  span.appendChild(txt);
  myNodelist[i].appendChild(span);


  let  closebtns = document.getElementsByClassName("close");
  let  y;
    for (y = 0; y < closebtns.length; y++) {
       closebtns[y].addEventListener("click", function() {
    this.parentElement.style.display = 'none';
  });
  }
 }

  let list = document.querySelector('ul');
   list.addEventListener('click', function(ev) {
    if (ev.target.tagName === 'LI') {
    ev.target.classList.toggle('checked');
  }
}, false);


let tasks = []

function newElement() {
  var li = document.createElement("li");
  var inputValue = document.getElementById("myInput").value;
  var t = document.createTextNode(inputValue);
  li.appendChild(t);
  if (inputValue === '') {
    alert("Hey you !, write something!");
  } else {
    document.getElementById("myTasks").appendChild(li);
  }
  document.getElementById("myInput").value = "";

  var span = document.createElement("SPAN");
  var txt = document.createTextNode("\u00D7");
  span.className = "close";
  span.appendChild(txt);
  li.appendChild(span);

  for (n = 0; n < close.length; n++) {
    close[n].onclick = function() {
      let div = this.parentElement;
      div.style.display = "none";
    }
  }
}



