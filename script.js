console.log("script.js actually loaded.")
function post() {
    $.post("/new", newUser)
    .done(function(data) {
      console.log(data);
    });
}

var newUser = {
    "name":"George",
    "photo":"http://angryjogger.com/wp-content/uploads/2013/04/ugly-guy.jpg",
    "scores":[
        2,
        3,
        1,
        1,
        2,
        4,
        3,
        4,
        4,
        3
    ]
}
post()