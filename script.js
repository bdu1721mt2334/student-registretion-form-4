document.getElementById("btn").addEventListener("click", function () {
    let name = document.getElementById("name").value;
    let age = document.getElementById("age").value;
    let gender = document.getElementById("gender").value;
    let course = document.getElementById("course").value;
    let email = document.getElementById("email").value;

    if (name && age && email) {
        let table = document.getElementById("dataGoes");
        let row = table.insertRow();
        row.innerHTML = `
            <td class="border border-gray-300 px-4 py-2">${name}</td>
            <td class="border border-gray-300 px-4 py-2">${age}</td>
            <td class="border border-gray-300 px-4 py-2">${gender}</td>
            <td class="border border-gray-300 px-4 py-2">${course}</td>
            <td class="border border-gray-300 px-4 py-2">${email}</td>
            <td class="border border-gray-300 px-4 py-2">
                <button class="bg-yellow-500 px-2 py-1 text-white rounded edit">Edit</button>
                <button class="bg-red-500 px-2 py-1 text-white rounded delete">Delete</button>
            </td>
        `;

        // Clear inputs after adding
        document.getElementById("name").value = "";
        document.getElementById("age").value = "";
        document.getElementById("email").value = "";
    } else {
        alert("Please fill in all required fields");
    }
});

// Event delegation for edit and delete buttons
document.getElementById("dataGoes").addEventListener("click", function (event) {
    let target = event.target;
    let row = target.parentElement.parentElement;

    if (target.classList.contains("delete")) {
        row.remove();
    } else if (target.classList.contains("edit")) {
        document.getElementById("name").value = row.cells[0].innerText;
        document.getElementById("age").value = row.cells[1].innerText;
        document.getElementById("gender").value = row.cells[2].innerText;
        document.getElementById("course").value = row.cells[3].innerText;
        document.getElementById("email").value = row.cells[4].innerText;
        row.remove();
    }
});
