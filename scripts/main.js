// Define main elements
const form_input = document.getElementById('form_input');
const form_modal = document.getElementById('form_modal');
// Imports
import { heading_options, paragraph_options } from "./utils/options.js";
import modalTheme from "./utils/modalTheme.js";
import handleOptionClick from "./utils/handleOptionClick.js";
import handleShortcuts from "./utils/handleShortcuts.js";

// Event listener on main form and modal
form_input.addEventListener('input', (e) => {
    e.preventDefault();
	if (e.target.value === '/1') {
        // Show modal
		form_modal.className = 'form_modal active';
        // Activate modal
		modalTheme(heading_options, e.target.value);
        // Handle click on option
        handleOptionClick(heading_options, 'input', 'text', 'h1_option_input', 'heading_input', 'h1');
	} else if (e.target.value === '/+1') {
        // Show modal
		form_modal.className = 'form_modal active';
        // Activate modal
		modalTheme(paragraph_options, e.target.value);
        // Handle click on option
        handleOptionClick(paragraph_options, 'input', 'text', 'p_option_input', 'paragraph_input', 'p')
	} else {
		form_modal.className = 'form_modal';
	}
});

// Event listener for shortcuts
form_input.addEventListener('keydown', (e) => {
    if(e.target.value === '#') {
        handleShortcuts(e, 'input', 'text', 'h1_option_input', 'heading_input', 'Heading 1', 'h1');
    } else if(e.target.value === '>>#') {
        handleShortcuts(e, 'input', 'text', 'h1_option_input', 'expanded_heading_input', 'Expandable Heading 1', 'h1');
    } else if(e.target.value === '+#') {
        handleShortcuts(e, 'input', 'text', 'p_option_input', 'paragraph_input', 'Paragraph 1', 'p');
    } else if(e.target.value === '+>>#') {
        handleShortcuts(e, 'input', 'text', 'p_option_input', 'expanded_paragraph_input', 'Expandable Paragraph 1', 'p');
    }
})