$(function(){

    $('#search').keyup(function(){
    
        $.ajax({
            type: "POST",
            url: "/articles/search/",
            data: {
                'search_text' : $('#search').val(),
                'csrfmiddlewaretoken' : $("input[name=csrfmiddlewaretoken]").val()
            },
            success: searchSucess,
            dataType: 'html'
        });
    
    });

});

function searchSuccess(data, textStatus, jqXHR)
{
    $('#search-results').html(data);
}