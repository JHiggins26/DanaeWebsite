$(document).ready(function(){
    
    $('.book-cover-container').on('click', function(event){
        
        event.preventDefault();
        var e = $(this);

        var bookModalTitle = e.find('.book-info').data("modal-title");

        var bookModalDescription = e.find('.book-info').data("modal-description");
        
        var html = ' ';
        var shareUrl = window.location.href;
        
       
        html += '<div class="modal fade in text-center col-lg-6 col-md-4 col-sm-4 col-xs-4 col-lg-offset-0" id="modal-books" tabindex="-1" role="dialog" aria-labelledby="myModalLabel" aria-hidden="false">'+
        '<div class="modal-dialog">'+
            '<div class="modal-content">'+
                '<div class="modal-header">'+

                    '<button type="button" class="close" data-dismiss="modal" aria-label="Close" data-spy="affix" data-offset="0"><span aria-hidden="true">×</span></button>'+

                    '<h3 class="modal-title" id="title"></h3>'+
            
                    '<img id="imgId" height="200px">'+

                '</div>'+
                '<div class="modal-body">'+
            
                    '<p class="modal-desc" id=desc></p>'+
            
                '</div>'+
            '</div>'+
        '</div>'+
        '</div>';
        
        $("body").append(html);
                
        //Set title
        document.getElementById('title').innerHTML = bookModalTitle;

        
        //Set Book cover
        if(bookModalTitle === 'Sunny North to Sunny South') {
            
            document.getElementById('imgId').src="Style/img/SNSS-Book-Cover.jpg";
        }
        else if (bookModalTitle === 'Universal Goddess') {
            document.getElementById('imgId').src="Style/img/coming_soon_book_cover.jpg";
        }
        else { 
            document.getElementById('imgId').src="Style/img/coming_soon_book_cover.jpg";
        }
        
        
        //Set body
        document.getElementById('desc').innerHTML = bookModalDescription;

        $('#modal-books').modal();
  });
    
});






