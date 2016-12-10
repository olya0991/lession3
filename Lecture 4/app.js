console.log('Hooray');

$('#send').on('click', function(event) {
    event.preventDefault();
    var title = $('#title-input').val();
    $('#title-input').val('');
    var text = $('#text-input').val();
    var container = $('.container');
    container.prepend('<article><h3>' + title +'</h3><p>'+ text +'</p></article>');
  }
);