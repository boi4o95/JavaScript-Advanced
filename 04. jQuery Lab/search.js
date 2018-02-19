function search() {
    let searchText = $('#searchText').val()
    let matches = 0

    $('#towns li').each(function () {
        if ($(this).text().indexOf(searchText) !== -1) {
            $(this).css('font-weight', 'bold')
            matches++
        } else {
            $(this).css('font-weight', '')
        }
    })

    $('#result').text(matches + ' matches found."')
    $('#searchText').val('')
}