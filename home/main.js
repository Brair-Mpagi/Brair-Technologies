    
    // ............fixed navbar on scroll..........

    // When the window is scrolled
    window.onscroll = function() {
        var nav = document.getElementById('nav12');
        
        // Check if the vertical scroll offset is greater than 10 pixels
        if (window.pageYOffset > 10) {

            // If scrolled down > 10 px,
            nav.style.position = "fixed"; 
            nav.style.top = 0; 
        } else {
            // If scrolled back up reset to,
            nav.style.position = "static"; 
        }
    };

