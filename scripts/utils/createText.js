export default function createText(elementName, elementClass, elementID, elementTextContent) {
	const form_section = document.getElementById('form_section');
	// Create text element
	let text = document.createElement(elementName);
	// Define text element class
	text.className = elementClass;
	// Define text element ID
	text.id = elementID;
	// Define text element content
	text.textContent = elementTextContent;
	// Append text element to form section
	form_section.appendChild(text);
	// Insert main input before
	form_section.insertBefore(text, form_input);
    // Event Listener for Edit
	text.addEventListener('click', () => {
		text.setAttribute('edit_type', 'click');
		text.setAttribute('contenteditable', 'true');
		// Event listener when saving on enter
		text.addEventListener('keydown', (e) => {
			if (e.key === 'Enter') {
				e.preventDefault();
				if (text && text.textContent.trim() === '') {
					// Delay removal to avoid event warnings
					setTimeout(() => {
						if (text.parentElement && text.parentElement.contains(text)) {
							text.parentElement.removeChild(text);
						}
					}, 0);
				}
			}
		});

		// Event listener when saving on mouse click
		text.addEventListener('blur', () => {
			if (text && text.textContent.trim() === '') {
				// Delay removal to avoid event warnings
				setTimeout(() => {
					if (text.parentElement && text.parentElement.contains(text)) {
						text.parentElement.removeChild(text);
					}
				}, 0);
			}
		});
	});
}