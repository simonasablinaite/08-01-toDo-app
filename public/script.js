function deleteNote(id) {
   fetch(`/?id=${id}`, {method: 'DELETE'})
       .then(res => window.location = res.url);
}

function editNote(id, element) {
    const container = element.parentElement
                             .parentElement;

    const noteText = container.querySelector('.note-text');
    noteText.contentEditable = true;

setTimeout(() => {
        noteText.focus();

        const range = document.createRange();
        const selection = window.getSelection();
        range.childNodes = noteText.childNodes[0];
        range.setStart(childNode, childNode.length);
        range.collapse(true);

        selection.revomeAllRanges();
        selection.addRange(range);
    }, 0)

    container.querySelectorAll('.buttons>button')
             .forEach(button => button.classList.add('hidden'))
    container.querySelectorAll('.edit')
             .forEach(button => button.classList.remove('hidden'))
}

function saveEdit(id, element) {
    const container = element.parentElement.parentElement;
    const noteText = container.querySelector('.note-text');
    noteText.contentEditable = false;

    fetch('/', {method: 'PATCH', 
               headers:{ 'Content-Type': 'aplication/json'},
               body: JSON.stringify({id, note: noteText.innerText})})

container.querySelectorAll('.buttons>button')
         .forEach(button => button.classList.add('hidden'));
container.querySelectorAll('.standard')
         .forEach(button => button.classList.remove('hidden'));
}         

