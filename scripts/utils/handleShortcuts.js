import createInput from './createInput.js';

export default function handleShortcuts(
	e,
	element,
	elementType,
	elementClass,
	elementID,
	elementPlaceholder,
	elementTag
) {
	const form_input = document.getElementById('form_input');
	if (e.key === ' ') {
		e.preventDefault();
		// Create input on shortcut
		createInput(element, elementType, elementClass, elementID, elementPlaceholder, elementTag);
		// Get all elements
		let elements = document.getElementsByClassName(elementClass);
		// Get last created element
		const newElement = elements[elements.length - 1];
		// Focus on new created element
		newElement.focus();
		// Clear main form input value
		form_input.value = '';
	}
}
