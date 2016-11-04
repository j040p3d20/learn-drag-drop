
function contentDragStrart(ev)
{
    console.log("contentDragStrart");
}

$(function(){
    $('.content')
    .attr("draggable",true)
    .on('dragstart',contentDragStrart)
    ;
});
