import createInput from './createInput.js';

export default function handleOptionClick(options, elementName, elementType, elementClass, elementID, elementTag) {
	const form_modal = document.getElementById('form_modal');
	const form_input = document.getElementById('form_input');

	options.map(({ option_id, option_name }) => {
		const optionItem = document.getElementById(option_id);
		optionItem.addEventListener('click', () => {
			createInput(elementName, elementType, elementClass, elementID, option_name, elementTag);
			// Get all elements
			const elements = document.getElementsByClassName(elementClass);
			// Get last created element
			const newElement = elements[elements.length - 1];
			// Focus on new created element
			newElement.focus();
			// Hide form modal
			form_modal.className = 'form_modal';
			// Hide main form input
			form_input.style.display = 'none';
		});
	});
}
