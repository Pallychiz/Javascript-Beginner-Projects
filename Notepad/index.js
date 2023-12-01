const btn = document.getElementById('btn');
const app = document.getElementById('app');

btn.addEventListener('click', addNotepad)

function addNotepad(){
    const notes = getNotes();
    const noteObj = {
        id: Math.floor(Math.random() * 10000),
        content: ''
    };
    const noteEl = createNoteEl(noteObj.id, noteObj.content);

    app.insertBefore(noteEl, btn);

    notes.push(noteObj);

    saveNote(notes);
}

function getNotes(){
    return JSON.parse(localStorage.getItem('notepad') || '[]');
}

function createNoteEl(id, content){
    const element = document.createElement('textarea');
    element.classList.add('note');
    element.placeholder = 'Empty Note';
    element.value = content;

    element.addEventListener('dblclick', ()=>{
        const warning = confirm('Do you want to delete this Notepad?');
        if(warning){
            deleteNote(id, element);
        }
    })

    element.addEventListener('input', ()=>{
        updateNote(id, element.value);
    })

    return element;
}

function saveNote(notes){
    localStorage.setItem('notepad', JSON.stringify(notes))
}

function deleteNote(id, element){
    const notes = getNotes().filter((note)=>note.id != id);
    saveNote(notes);
    app.removeChild(element);
}

function updateNote(id, content){
    const notes = getNotes();
    const target = notes.filter((note) => note.id == id)[0];
    target.content = content;
    saveNote(notes);
}

getNotes().forEach((note) => {
    const noteEl = createNoteEl(note.id, note.content);
    app.insertBefore(noteEl, btn);
});

