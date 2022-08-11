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
function deleteNote(id) {
   fetch(`/?id=${id}`, {method: 'DELETE'})
       .then(res => window.location = res.url);
}

function saveEdit(element) {
    const container = element.parentElement.parentElement;
    const noteText = container.querySelector('.note-text');
    noteText.contentEditable = false;

container.querySelectorAll('.buttons>button')
         .forEach(button => button.classList.add('hidden'));
container.querySelectorAll('.standard')
         .forEach(button => button.classList.remove('hidden'))

}         

