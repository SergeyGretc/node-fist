document.addEventListener("click", (event) => {
  if (event.target.dataset.type === "remove") {
    const id = event.target.dataset.id;

    remove(id).then(() => {
      event.target.closest("li").remove();
    });
  } else if (event.target.dataset.type === "edit") {
    const id = event.target.dataset.id;

    const newNoteTitle = prompt("Введите новый заголовок");
    if (newNoteTitle) {
      edit(newNoteTitle, id);
    }
  }
});

async function remove(id) {
  await fetch(`/${id}`, { method: "DELETE" });
}

async function edit(title, id) {
  await fetch(`/${id}`, {
    method: "PUT",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ title: title, id: id }),
  });
}
// document.addEventListener("click", (event) => {
//   if (event.target.dataset.type === "remove") {
//     const id = event.target.dataset.id;

//     remove(id).then(() => {
//       event.target.closest("li").remove();
//     });
//   } else if (event.target.dataset.type === "edit") {
//     const id = event.target.dataset.id;

//     const newNoteTitle = prompt("Введите новый заголовок");
//     if (newNoteTitle) {
//       edit(id, newNoteTitle);
//     }
//   }
// });

// // async function add(e) {
// //   e.preventDefault();
// //   const { title } = e.target;

// //   await fetch(`/`, {
// //     method: "POST",
// //     headers: { "Content-Type": "application/json" },
// //     body: JSON.stringify({ title: title, id: id }),
// //   });
// // }
// async function remove(id) {
//   await fetch(`/${id}`, { method: "DELETE" });
// }

// async function edit(id, title) {
//   await fetch(`/${id}`, {
//     method: "PUT",
//     headers: { "Content-Type": "application/json" },
//     body: JSON.stringify({ title: title, id: id }),
//   });
// }
