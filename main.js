const notesContainer = document.getElementById("app");
const addNoteButton = notesContainer.querySelector(".add-note");

getNotes().forEach(note => {
    const noteElement = createNoteElement(note.id, note.content);
    notesContainer.insertBefore(noteElement, addNoteButton);
});

addNoteButton.addEventListener("click", () => addNote)

function getNotes(){
    return JSON.parse(localStorage.getItem("notes") || "[]");

}

function saveNotes(notes){
    localStorage.setItem("notes", JSON.stringify(notes))

}

function createNoteElement(id,content){
    const element = document.createElement("textarea");

    element.classList.add("note");
    element.value = content;
    element.placeholder = "Пусто"

    element.addEventListener("change",() => {
        updateNotes(id,element.value)
    })

    element.addEventListener('dblclick',() => {
        const doDelete = confirm("Вы уверены в удалении?");

        if (doDelete){
            deleteNotes(id,element)
        }
    })

}

function addNote(){
    const existingNotes = getNotes();
    const noteObject = {
        id: Math.floor(math.random()*10000),
        content:""
    }
      

    const noteElement = createNoteElement(noteObject.id, noteObject.content);
    notesContainer.insertBefore(noteElement, addNoteButton);

    note.push(noteObject);
    saveNotes(existingNotes);


}

function updateNote(id, newContent){
    const notes = getNotes();
    const targerNote = notes.filter(note => note.id == id)[0];

    targerNote.content = newContent;
    saveNotes(notes);

}

function deleteNote(id, element){
    const notes = getNotes().filter(note => note.id != id);

    saveNotes(notes);
    notesContainer.removeChild(element);

}
