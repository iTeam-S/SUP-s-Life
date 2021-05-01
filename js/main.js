$("#signup").click(function(e){
    mdp = $("#pass").val();
    mdp2 = $("#re_pass").val();
	if(mdp != mdp2){
		e.preventDefault();
		$("#notif").append(
			"<p class='rouge'>La confirmation du mot de passe ne correspond pas</p>"
		)
    }
})

$("#r_signup").click(function(e){
    mdp = $("#r_pass").val();
    mdp2 = $("#r_re_pass").val();
	if(mdp != mdp2){
		e.preventDefault();
		$("#r_notif").append(
			"<p class='rouge'>La confirmation du mot de passe ne correspond pas</p>"
		)
    }
})

$("#email").change(function(e){
    verify('/verify_mail','email', 'notif_email', 'Adresse mail déjà utilisée', e);
})

$("#r_email").change(function(e){
    verify('/verify_mail','r_email', 'r_notif_email', 'Adresse mail déjà utilisée', e, false, 'rien','referant');
})

$("#email_log").change(function(e){
    verify('/verify_mail','email_log', 'notif_email_log', 'Vérifier votre adresse mail', e, true, 'your_pass');
})

$("#r_email_log").change(function(e){
    verify('/verify_mail','r_email_log', 'r_notif_email_log', 'Vérifier votre adresse mail', e, true, 'r_your_pass', 'referant');
})

$("#your_pass").change(function(e){
    verify('/verify_pass', 'your_pass', 'notif_pass_log', 'Mot de passe incorrecte', e, true, 'signin');
})

$("#r_your_pass").change(function(e){
    verify('/verify_pass', 'r_your_pass', 'r_notif_pass_log', 'Mot de passe incorrecte', e, true, 'r_signin', 'referant');
})

$("#login-form").submit(function(e){
    verify('/verify_mail','email_log', 'notif_email_log', 'Vérifier votre adresse mail', e, true);
    verify('/verify_pass', 'your_pass', 'notif_pass_log', 'Mot de passe incorrecte', e, true);
})

function verify(url_r ,id, notif, texte, e, log = false, attr = 'rien', table = 'etudiant'){
    email = $("#"+id).val();
    pass_mail = '';
    if(url_r == '/verify_pass'){
        pass_mail = $("#email_log").val();
    }
    if(id == 'r_your_pass'){
        pass_mail = $("#r_email_log").val();
    }
    $.ajaxSetup({
        headers: {
            'X-CSRF-TOKEN': $('meta[name="csrf-token"]').attr('content')
        }
    });

    $.ajax({
        url: url_r,
        method: "post",
        data : 'donne=' + email+'&pass_mail='+ pass_mail + '&table=' + table,
        dataType : "html",
        success : function(retour){
            if(log == false){
                if(retour != 0){
                    e.preventDefault();
                    if($("#"+notif).length){
                        $("#"+notif).empty();
                    }
                    $("#"+notif).append(
                        "<p class='rouge'>"+texte+"</p>"
                    )
                }
                else{
                    $("#"+notif).empty();
                }
            }
            else{
                if(retour != 1){
                    e.preventDefault();
                    if($("#"+notif).length){
                        $("#"+notif).empty();
                    }
                    $("#"+notif).append(
                        "<p class='rouge'>"+texte+"</p>"
                    )
                }
                else{
                    $("#"+notif).empty();
                    if(attr != 'rien'){
                        $("#"+attr).removeAttr("disabled");
                    }
                }
            }
        }
    })
}

