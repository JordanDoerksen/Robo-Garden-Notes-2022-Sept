// Plain JS
// document.addEventListener('DOMContentLoaded', ()=>{
//     console.log(document.getElementsByTagName('p'));
//     console.log(document.getElementById('example-id'));
//     console.log(document.getElementsByClassName('example-class'));
  
// });


// jQuery
// $(function(){
//     console.log($('p'));
//     console.log($('#example-id'));
//     console.log($('.example-class'));
// });

// Plain JS
document.addEventListener('DOMContentLoaded', ()=>{
    document.getElementById('toggle-div').addEventListener('click',() => {
        let myDiv = document.getElementById('example-div');
    });
});

// jQuery
$(function(){
    $('#toggle-div').click(function(){
        let myDiv = $('#example-div');
        myDiv.toggle();
    });
});