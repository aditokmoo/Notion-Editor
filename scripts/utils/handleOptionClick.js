import createInput from "./createInput.js";

export default function handleOptionClick(options, elementName, elementType, elementClass, elementID, elementTag) {
    const form_modal = document.getElementById('form_modal');
    const form_input = document.getElementById('form_input');

    options.map(({option_id, option_name}) => {
        const optionItem = document.getElementById(option_id)
        optionItem.addEventListener('click', () => {
            createInput(elementName, elementType, elementClass, elementID, option_name, elementTag)
            document.getElementById(elementID).focus();
            form_modal.className = 'form_modal'
            form_input.style.display = 'none'
        })
    })
} 