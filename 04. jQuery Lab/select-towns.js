function attachEvents() {
    $('#items li').on('click', buttonClicked)
    $('#showTownsButton').on('click', show)

    function show() {
        let itemText = $('#items li[data-selected=true]').toArray().map(li => li.textContent).join(', ')
        $('#selectedTowns').text('Selected towns: ' + itemText)
    }

    function buttonClicked() {
        let li = $(this)
        if (li.attr('data-selected')) {
            li.removeAttr('data-selected')
            li.css('background', '');
        } else {
            li.attr('data-selected', 'true')
            li.css('background', '#DDD')
        }
    }
}