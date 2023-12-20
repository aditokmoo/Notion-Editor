const form_input = document.getElementById('form_input');
const form_modal = document.getElementById('form_modal');
import { heading_options, paragraph_options } from "./utils/options.js";
import createInput from "./utils/createInput.js";
import modalTheme from "./utils/modalTheme.js";
import handleOptionClick from "./utils/handleOptionClick.js";

// Add Event Listener
form_input.addEventListener('input', (e) => {
    e.preventDefault();
	if (e.target.value === '/1') {
        // Show modal
		form_modal.className = 'form_modal active';
        // Activate modal
		modalTheme(heading_options, e.target.value);
        // Handle click on option
        handleOptionClick(heading_options, 'input', 'text', 'h1_option_input', 'heading_input', 'Heading 1', 'h1');
	} else if (e.target.value === '/+1') {
        // Show modal
		form_modal.className = 'form_modal active';
        // Activate modal
		modalTheme(paragraph_options, e.target.value);
        // Handle click on option
        handleOptionClick(paragraph_options, 'input', 'text', 'p_option_input', 'paragraph_input', 'Paragraph 1', 'p')
	} else {
		form_modal.className = 'form_modal';
	}
});

form_input.addEventListener('keydown', (e) => {
    if(e.target.value === '#') {
        if (e.keyCode === 32) {
            e.preventDefault();
            // Create input on shortcut
            createInput('input', 'text', 'h1_option_input', 'heading_input', 'Heading 1', 'h1')
            // Set created input to be focued
            document.getElementById('heading_input').focus();
            // Clear main form input value
            form_input.value = ''
        }
    } else if(e.target.value === '>>#') {
        if (e.keyCode === 32) {
            e.preventDefault();
            // Create input on shortcut
            createInput('input', 'text', 'p_option_input', 'paragraph_input', 'Paragraph 1', 'p')
            // Set created input to be focued
            document.getElementById('paragraph_input').focus();
            // Clear main form input value
            form_input.value = ''
        }
    }
})