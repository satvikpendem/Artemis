const draggables = document.getElementsByClassName("task");

const wrapper = document.getElementsByClassName("wrapper")[0];

wrapper.addEventListener("dragover", dragover);
wrapper.addEventListener("drop", drop);

for (const draggable of draggables) {
  draggable.addEventListener("dragstart", function(e) {
    e.dataTransfer.setData("srcID", e.target.id);
  });
}

function dragover(e) {
  e.preventDefault();
}

function drop(e) {
  e.preventDefault();
  let srcID = e.dataTransfer.getData("srcID");
  e.target.appendChild(document.getElementById(srcID));
}
