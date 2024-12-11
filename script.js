document.addEventListener('DOMContentLoaded', () => {
    const editor = document.querySelector('.editor');
    const fontFamilySelect = document.getElementById('fontFamily');
    const fontSizeSelect = document.getElementById('fontSize');
    const fontColorInput = document.getElementById('fontColor');
    const boldButton = document.getElementById('bold');
    const italicButton = document.getElementById('italic');
    const underlineButton = document.getElementById('underline');
    const clearButton = document.getElementById('clear');
    const textAlignSelect = document.getElementById('textAlign');
    const bulletListButton = document.getElementById('bulletList');
    const lineHeightSelect = document.getElementById('lineHeight');
    const letterSpacingSelect = document.getElementById('letterSpacing');
    const wordSpacingSelect = document.getElementById('wordSpacing');

    fontFamilySelect.addEventListener('change', () => {
        editor.style.fontFamily = fontFamilySelect.value;
    });

    fontSizeSelect.addEventListener('change', () => {
        editor.style.fontSize = fontSizeSelect.value;
    });

    fontColorInput.addEventListener('change', () => {
        editor.style.color = fontColorInput.value;
    });

    boldButton.addEventListener('click', () => {
        editor.classList.toggle('bold');
        boldButton.classList.toggle('active');
    });

    italicButton.addEventListener('click', () => {
        editor.classList.toggle('italic');
        italicButton.classList.toggle('active');
    });

    underlineButton.addEventListener('click', () => {
        editor.classList.toggle('underline');
        underlineButton.classList.toggle('active');
    });

    clearButton.addEventListener('click', () => {
        if (editor.innerHTML.trim() === '') {
            swal("El editor está vacío", "No hay nada que borrar.", "info");
            return;
        }

        swal({
            title: "¿Estás seguro?",
            text: "¿Estás seguro de que quieres borrar todo el contenido?",
            icon: "warning",
            buttons: true,
            dangerMode: true,
        }).then((willDelete) => {
            if (willDelete) {
                editor.innerHTML = '';
            }
        });
    });

    textAlignSelect.addEventListener('change', () => {
        editor.style.textAlign = textAlignSelect.value;
    });

    bulletListButton.addEventListener('click', () => {
        document.execCommand('insertUnorderedList');
        bulletListButton.classList.toggle('active');
    });

    lineHeightSelect.addEventListener('change', () => {
        editor.style.lineHeight = lineHeightSelect.value;
    });

    letterSpacingSelect.addEventListener('change', () => {
        editor.style.letterSpacing = letterSpacingSelect.value;
    });

    wordSpacingSelect.addEventListener('change', () => {
        editor.style.wordSpacing = wordSpacingSelect.value;
    });
});
