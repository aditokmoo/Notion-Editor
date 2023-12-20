export default function createText(elementName, elementClass, elementID, elementTextContent) {
    const form_section = document.getElementById('form_section');
    // Create text element
    let text = document.createElement(elementName);
    // Define text element class
    text.className = elementClass;
    // Define text element ID
    text.id = elementID;
    // Define text element content
    text.textContent = elementTextContent
    // Append text element to form section
    form_section.appendChild(text)
    // Insert main input before
    form_section.insertBefore(text, form_input)
}