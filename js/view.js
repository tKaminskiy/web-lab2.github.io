import { controller } from "./controller.js";
import { model } from "./model.js";

export const view = {
  addContact(id, name, surname, phone) {
    const tbody = document.querySelector(".table-main tbody");
    const newRow = document.createElement("tr");
    newRow.classList.add("table__row");
    newRow.setAttribute("data-id", id);
    newRow.innerHTML = `
      <td class="table__row__name">${name}</td>
      <td class="table__row__surname">${surname}</td>
      <td class="table__row__number">${phone}</td>
      <td class="table__buttons">
        <button class="btn table__button button-delete">
            <svg class="delete-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 30 30" width="30px" height="30px">
                <path d="M 14.984375 2.4863281 A 1.0001 1.0001 0 0 0 14 3.5 L 14 4 L 8.5 4 A 1.0001 1.0001 0 0 0 7.4863281 5 L 6 5 A 1.0001 1.0001 0 1 0 6 7 L 24 7 A 1.0001 1.0001 0 1 0 24 5 L 22.513672 5 A 1.0001 1.0001 0 0 0 21.5 4 L 16 4 L 16 3.5 A 1.0001 1.0001 0 0 0 14.984375 2.4863281 z M 6 9 L 7.7929688 24.234375 C 7.9109687 25.241375 8.7633438 26 9.7773438 26 L 20.222656 26 C 21.236656 26 22.088031 25.241375 22.207031 24.234375 L 24 9 L 6 9 z"/>
            </svg>
        </button>
        <button class="btn table__button button-edit">
            <svg class="edit-icon" fill="#000000" version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="800px" height="800px" viewBox="0 0 528.899 528.899" xml:space="preserve">
              <g>
                <path d="M328.883,89.125l107.59,107.589l-272.34,272.34L56.604,361.465L328.883,89.125z M518.113,63.177l-47.981-47.981
                  c-18.543-18.543-48.653-18.543-67.259,0l-45.961,45.961l107.59,107.59l53.611-53.611
                  C532.495,100.753,532.495,77.559,518.113,63.177z M0.3,512.69c-1.958,8.812,5.998,16.708,14.811,14.565l119.891-29.069
                  L27.473,390.597L0.3,512.69z"/>
              </g>
            </svg>     
        </button>       
      </td>
    `;
    tbody.appendChild(newRow);
  },

  updateContact(id, name, surname, phone) {
    const row = document.querySelector(`.table__row[data-id="${id}"]`);
    if (!row) {
      console.error(`Row with data-id ${id} not found`);
      return;
    }
    row.querySelector(".table__row__name").innerText = name;
    row.querySelector(".table__row__surname").innerText = surname;
    row.querySelector(".table__row__number").innerText = phone;
  },

  sortTable(rows, sortKey) {
    rows.sort((a, b) => {
      const nameA = a
        .querySelector(`.table__row__${sortKey}`)
        .innerText.toLowerCase();
      const nameB = b
        .querySelector(`.table__row__${sortKey}`)
        .innerText.toLowerCase();
      return nameA.localeCompare(nameB);
    });
    const tbody = document.querySelector(".table-main tbody");
    rows.forEach((row) => tbody.appendChild(row));
  },

  closeAddModal() {
    controller.addModal.classList.remove("add-contact_active");
  },

  openAddModal() {
    controller.addModal.classList.add("add-contact_active");
  },

  clearAddModal() {
    controller.nameAddModal.value = "";
    controller.surnameAddModal.value = "";
    controller.phoneAddModal.value = "";
    controller.errorMessage.innerHTML = "";
  },

  closeEditModal() {
    controller.editModal.classList.remove("edit-contact_active");
  },

  openEditModal() {
    controller.editModal.classList.add("edit-contact_active");
  },

  clearEditModal() {
    controller.nameEditModal.value = "";
    controller.surnameEditModal.value = "";
    controller.phoneEditModal.value = "";
    controller.editErrorMessage.innerHTML = "";
  },

  editContact(name, surname, phone) {
    console.log(document.querySelectorAll(".table__row__name").innerHTML);
    if (name != "") {
      document.querySelectorAll(".table__row__name").innerHTML = name;
    }
    if (surname != "") {
      document.querySelectorAll(".table__row__surname").innerHTML = surname;
    }
    if (phone != "") {
      document.querySelectorAll(".table__row__phone").innerHTML = phone;
    }
  },

  sortTable(rows, sortKey) {
    rows.sort((a, b) => {
      const nameA = a
        .querySelector(".table__row__name")
        .textContent.trim()
        .toLowerCase();
      const nameB = b
        .querySelector(".table__row__name")
        .textContent.trim()
        .toLowerCase();

      return nameA.localeCompare(nameB);
    });

    controller.contactsTable.querySelector("tbody").innerHTML = "";

    rows.forEach((row) => {
      controller.contactsTable.querySelector("tbody").appendChild(row);
    });
  },
};
