// hide and show menu
// $(document).ready(function(){
//     $(".fa-bars").click(function(){
//       $(".side-bar").toggle(300);

//     });
//   });



$(window).on("orientationchange load resize", function () {
    var width = $(document).width();
    var menuVisible = false;
    $('.fa-bars').click(function () {
        if (menuVisible) {
            $('.side-bar').css({
                'display': 'none',
            });
            $('.container-body').css({
                'width': '100%',
            });

            $('.statistical_month_year').css({
                //     'width': '49%',
                'padding': '0 8%'
            });
            $('#curve_chart').css({
                //     'width': '49%',
                'text-align': '-webkit-right'
            });

            menuVisible = false;
            return;
        } else {
            // if (width <= 1400) {
            //     $('.side-bar').css({
            //         'display': 'block',
            //         'animation': 'mymove 0.3s none',
            //         'width': '18%'
            //     });

            //     $('.container-body').css({
            //         'width': '82%',
            //         'float': 'right'
            //     });

            //     menuVisible = true;
            // }

            // if (width <= 1372) {
            //     $('.side-bar').css({
            //         'display': 'block',
            //         'animation': 'mymove 0.3s none',
            //         'width': '25%'
            //     });

            //     $('.container-body').css({
            //         'width': '75%',
            //         'float': 'right'
            //     });

            //     menuVisible = true;
            // }

            // if (width <= 1024) {
            //     $('.side-bar').css({
            //         'display': 'block',
            //         'animation': 'mymove 0.3s none',
            //         'width': '30%',
            //     });

            //     $('.container-body').css({
            //         'width': '70%',
            //         'float': 'right'
            //     });

            //     menuVisible = true;
            // }

            // if (width <= 850) {
            //     $('.side-bar').css({
            //         'display': 'block',
            //         'animation': 'mymove 0.3s none',
            //         'width': '35%',
            //     });

            //     $('.container-body').css({
            //         'width': '65%',
            //         'float': 'right'
            //     });

            //     menuVisible = true;
            // }

            // if (width <= 720) {
            //     $('.side-bar').css({
            //         'display': 'block',
            //         'animation': 'mymove 0.3s none',
            //         'width': '40%',
            //     });

            //     $('.container-body').css({
            //         'width': '60%',
            //         'float': 'right'
            //     });

            //     menuVisible = true;
            // }


            // if (width <= 630) {
            //     $('.side-bar').css({
            //         'display': 'block',
            //         'animation': 'mymove 0.3s none',
            //         'width': '45%',
            //     });
            //     $('.side-bar').css({
            //         'display': 'block',
            //         'animation': 'mymove 0.3s none',
            //         'width': '55%',
            //     });

            //     menuVisible = true;
            // }
            // if (width <= 556) {
            //     $('.side-bar').css({
            //         'display': 'block',
            //         'animation': 'mymove 0.3s none',
            //         'width': '55%',
            //     });
            //     $('.side-bar').css({
            //         'display': 'block',
            //         'animation': 'mymove 0.3s none',
            //         'width': '45%',
            //     });

            //     menuVisible = true;
            // }
            // if (width <= 480) {
            //     $('.side-bar').css({
            //         'display': 'block',
            //         'animation': 'mymove 0.3s none',
            //         'width': '100%',
            //     });
            //     menuVisible = true;
            // }


            $('.side-bar').css({
                'display': 'block',
                'animation': 'mymove 0.3s none',
               
            });

            // $('.container-body').css({
            //     'width': '82%',
            //     'float': 'right'
            // });

            menuVisible = true;
            return;
        }

    });

});


$(window).on("orientationchange load resize", function () {
    var width = $(document).width();
    if (width > 768) {
        // for show iamges
        $('.side-bar').show();
    }
});



$(document).ready(function () {
    $('#example').DataTable({
        language: {
            sLengthMenu: "Show _MENU_",
            "info": "Showing page _PAGE_ of _PAGES_"
        }
    });



});

