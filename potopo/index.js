$(document).ready(function(){
    // 스킬 부분 

    let gauge_bar = ['95%','95%','90%','90%','90%','90%']
    let percent = ['95','95','90','90','90','90']
    let skill_color = ['#ec845a','#43b9f8','#7ac2eb','#eeaf4b','rgb(255 200 128)','rgb(128 58 189)']
    
    for (let i = 0; i < skill_color.length; i++) {
        $('.object').eq(i).css ({
            color: skill_color[i]
        });
        $('.gauge_bar').eq(i).css({
            backgroundColor: skill_color[i]
        });
    }

    $('.gauge_bar').each(function(i) {
        $(this).animate({
            width: gauge_bar[i] 
        }, 1000);
    });

    $('.percent').each(function(i) {
        $(this).prop('Counter', 0).animate({
            Counter: percent[i] 
        }, {
            duration: 1000,
            step: function(now) {
                $(this).text(Math.ceil(now) + '%'); 
            }
        });
    });


        // 헤더 애니메이션
        $('.header_border')
        .animate({
            left: '-10%',
            top: '435px',
            opacity: 0
        }, 500, 'linear').animate({
            left: '30%',
            top: '435px',
            opacity: 0.1
        }, 500, 'linear').animate({
            left: '50%',
            top: '435px',
            transform: 'translateX(-50%)',
            opacity: 1
        }, 500, 'linear');

    $(window).on('scroll',function(){

        //페이지 상단 
        var scrollTop = $(window).scrollTop();
        var career_Top = $('.career').offset().top;
        var skill_Top = $('.skill').offset().top;
        var portfolio_one_Top = $('.portfolio_one').offset().top;
        var portfolio_Two_Top = $('.portfolio_two').offset().top;
        
        var about_me_Top = $('.about_me').offset().top;
        var contact_Top = $('.contact').offset().top;

        if(scrollTop >= (career_Top - 700)){
            $('.career').fadeIn(500); 
    
            $('.career').animate({
                opacity: 1
            }, 500, 'linear');
        }

        if(scrollTop >= (skill_Top - 700)){
            $('.skill').fadeIn(500); 
    
            $('.skill').animate({
                opacity: 1
            }, 500, 'linear');
        }

        if(scrollTop >= (portfolio_one_Top - 700)){
            $('.portfolio_one').fadeIn(500); 
    
            $('.portfolio_one').animate({
                opacity: 1
            }, 500, 'linear');
        }
        if(scrollTop >= (portfolio_Two_Top - 700)){
            $('.portfolio_two').fadeIn(500); 
    
            $('.portfolio_two').animate({
                opacity: 1
            }, 500, 'linear');
        }

        if(scrollTop >= (about_me_Top - 700)){
            $('.about_me').fadeIn(500); 
    
            $('.about_me').animate({
                opacity: 1
            }, 500, 'linear');
        }

        if(scrollTop >= (contact_Top - 700)){
            $('.contact').fadeIn(500); 
    
            $('.contact').animate({
                opacity: 1
            }, 500, 'linear');
        }

    })

})