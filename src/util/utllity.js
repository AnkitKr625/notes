export function makeBold() {
    const selectedText = window.getSelection().toString();

    if (selectedText.length > 0) {
        const range = window.getSelection().getRangeAt(0);
        const newNode = document.createElement("span");
        newNode.classList.add('bold');
        range.surroundContents(newNode);
    }
}
export function makeItalic() {

}
export function makeUnderline() {

}