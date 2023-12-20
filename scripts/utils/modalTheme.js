export default function modalTheme(options, value) {
    const form_modal = document.getElementById('form_modal');
    form_modal.innerHTML = `
        <div class='modal_header'>
            <h3 class="form_modal_title">Add blocks</h3>
            <p class="form_modal_text">Keep typing to filter, or escape to exit</p>
            <span class="form_modal_filter_text">Filtering keyword <div class="keyword">${value.split('/')[1]}</div></span>
        </div>
        <ul class="option_list">
            ${options
                .map(
                    ({ option_id, option_name, option_shortcut }) =>
                        `<li id="${option_id}">
                            <span class="option_icon"><i class="ph ph-text-t"></i></span>
                            <div class="flex">
                                <span class="option_name">${option_name}</span>
                                <span class="option_shortcut">${option_shortcut}</span>
                            </div>
                        </li>`
                )
                .join('')}
        </ul>
    `;
}