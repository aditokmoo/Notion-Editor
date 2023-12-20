import createInput from "./createInput.js";

export default function handleOptionClick(options, elementName, elementType, elementClass, elementID, elementPlaceholder, elementTag) {
    const form_modal = document.getElementById('form_modal');
    const form_input = document.getElementById('form_input');

    options.map(({option_id}) => {
        const optionItem = document.getElementById(option_id)
        optionItem.addEventListener('click', () => {
            createInput(elementName, elementType, elementClass, elementID, elementPlaceholder, elementTag)
            form_modal.className = 'form_modal'
            form_input.style.display = 'none'
        })
    })
} 