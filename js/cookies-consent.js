
C = {
    // Message banner title
    bannerTitle: '<i class="fas fa-cookie-bite"></i> ',

    // Message banner message
    bannerMessage: "Questo sito, unicamente a scopo di analisi del traffico, utilizza cookie tecnici anonimizzati di \"terze parti\"" +
                    " (impostati da un sito " +
                   "web diverso da quello visitato). Chiudendo questo banner o cliccando su un qualunque elemento " +
                   "della pagina si accetta l'utilizzo dei cookie. Se preferisci puoi <a class=\"light\" href=\"javascript:optOut()\">negare il consenso</a>, oppure consultare la sezione apposita.",

    // Message banner dismiss button
    bannerButton: "OK",

    // Link to your cookie policy.
    bannerLinkURL: "cookies.html",

    // Link text
    bannerLinkText: "Cookie Policy",
    
    // Link text
    buttonClass: "btn-light btn-xs",    

    // millisecs to wait for
    timeoutInterval: 5500,

    createDiv: function () {
        var banner = $(
            '<div class="alert cookies-alert bg-primary alert-dismissible fade in show" ' +
            'role="alert" style="position: fixed; bottom: 0; width: 100%; ' +
            'margin-bottom: 0">' +

            '<button class="btn btn-xs mr-0" onclick="optIn()" data-dismiss="alert" aria-label="Close" style="position: fixed; right: 10px;"><i class="fas fa-times"></i></button>'+

            '<div class="container text-center"><div class="row"><div class="col col-12"><strong>' + this.bannerTitle + '</strong> ' +
            this.bannerMessage + ' <a class="light" href="' + this.bannerLinkURL + '">' +
            this.bannerLinkText + '</a></div></div><div class="row"><div class="col col-12"><button type="button" class="btn ' +
             this.buttonClass + '" onclick="optIn()" data-dismiss="alert" aria-label="Accept">' +
            this.bannerButton + '</button></div></div></div></div>'
        );
        $("body").append(banner);
        setTimeout(function(){
          if (!hasOptedIn() && !optedOut) {
            // console.log("opting in because not denying permission");
            optIn();
            banner.remove();
          } 
        }, this.timeoutInterval);
    },

    init: function() {
        if (!hasOptedIn())
            this.createDiv();
    }
}

$(document).ready(function() {
    if(typeof hasOptedIn !== "undefined") {C.init();}
})