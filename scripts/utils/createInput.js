import createText from "./createText.js";

export default function createInput(elementName, elementType, elementClass, elementID, elementPlaceholder, elementTag, elementValue) {
    const form_section = document.getElementById('form_section');
    const form_input = document.getElementById('form_input');
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
    // Set input value if exist
    input.value = elementValue ? elementValue : '';
    // Append input element to parent element
    form_section.appendChild(input);
    // Hide main form
    form_input.style.display = 'none'
    // Add Event Listener on input
    input.addEventListener('keypress', (e) => {
        if (e.key === 'Enter') {
            e.preventDefault();
            createText(elementTag, elementTag, elementTag, e.target.value)
            const newText = document.getElementById(elementTag);
            form_section.insertBefore(input, newText)
            input.style.display = 'none'
            form_input.style.display = 'block'
            form_input.value = ''
            // Shop main form
            form_input.style.display = 'block'
          }
    })
}