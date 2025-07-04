function addStudent() {
  const name = document.getElementById("name").value.trim();
  const roll = document.getElementById("roll").value.trim();
  const studentClass = document.getElementById("class").value.trim();
  const section = document.getElementById("section").value.trim();

  if (!name || !roll || !studentClass || !section) {
    alert("Please fill all fields");
    return;
  }

  const table = document.getElementById("studentTableBody");

  const row = table.insertRow();
  row.insertCell(0).innerText = name;
  row.insertCell(1).innerText = roll;
  row.insertCell(2).innerText = studentClass;
  row.insertCell(3).innerText = section;

  const actionCell = row.insertCell(4);
  const deleteBtn = document.createElement("button");
  deleteBtn.innerText = "Delete";
  deleteBtn.onclick = function () {
    row.remove();
  };
  actionCell.appendChild(deleteBtn);

  // Clear form
  document.getElementById("name").value = "";
  document.getElementById("roll").value = "";
  document.getElementById("class").value = "";
  document.getElementById("section").value = "";
}
