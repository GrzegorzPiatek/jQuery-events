$(document).ready(function() {

    $('#clickBtn').click(function() {
        alert('Button clicked');
    })

    function submitForm(event) {
        event.preventDefault();
        var formFields = $(this).serializeArray();

        alert(formFields[0].value);
    }

    $('#myForm').submit(submitForm);

    $('#displayArea').mousemove(function(event){
        var msg = "Mouse possition: " + event.pageX + ", " + event.pageY;
        $(this).text(msg);
        // $('#displayArea').text(msg);
    });

    $('body').mousemove(function(event){
        var msg = "Mouse possition: " + event.pageX + ", " + event.pageY;
        // console.log(msg);
    })
});
