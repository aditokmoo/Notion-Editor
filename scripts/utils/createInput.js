import createText from "./createText.js";

export default function createInput(elementName, elementType, elementClass, elementID, elementPlaceholder, elementTag) {
    const form_section = document.getElementById('form_section');
    // Create input element
    let input = document.createElement(elementName);
    // Define input type
    input.type = elementType;
    // Define Input class
    input.className = elementClass;
    // Define input ID
    input.id = elementID;
    // Define input placeholder
    input.placeholder = elementPlaceholder;
    // Append input element to parent element
    form_section.appendChild(input);
    // Insert main input before
    form_section.insertBefore(input, form_input)
    // Add Event Listener on input
    input.addEventListener('keypress', (e) => {
        if (e.keyCode === 13) {
            e.preventDefault();
            createText(elementTag, elementTag, elementTag, e.target.value)
            const newText = document.getElementById(elementTag);
            input.style.display = 'none'
            form_input.style.display = 'block'
            form_input.value = ''
            form_section.insertBefore(newText, input)
          }
    })
}