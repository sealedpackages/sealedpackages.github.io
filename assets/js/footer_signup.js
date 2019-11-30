
function footer_email_signup(){
    const new_email = $('#subscribe_email').val();
    if (new_email){

        var formData = new FormData();
        var request = new XMLHttpRequest();
        formData.append("email", new_email);

        request.onload = function() {
            resp_obj = JSON.parse(request.response);
            console.log(resp_obj);
            $('#subscribe_email').val('');
            $('#subscribe_email').css('display','none');
            $('#subscribe_submit').css('display','none');
            $('#subscribe_email_check').css('display','block');
        };
        url = "https://app.sealedpackages.com/landing_page_subscribe";
        request.open("POST", url);
        request.send(formData);
    }
}
