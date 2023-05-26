let hCont = $('.history_slide');
let hBtn = $('.history_btn li');
let hIndex; 




hCont.slick({});


/* 버튼을 클릭하면 해당 index를 찾아서 가기 */
hBtn.click(function(e){
    e.preventDefault();
    let target=$(this); //클릭한 그것
    let index=target.index(); //클릭한 그것의 index 번호
    //console.log(index) -0 1 2 3

    if(index == 0){
        hIndex = 0
    }else if(index == 1){
        hIndex = 4
    }else if(index == 2){
        hIndex = 8
    }else if(index == 3){
        hIndex = 12
    }else if(index == 4){
        hIndex = 16
    }
    //console.log(hIndex) - 0 4 8 12 16
    hCont.slick('slickGoTo',hIndex);

    hBtn.removeClass('active')
    target.addClass('active')
});

hCont.on('beforeChange', function(event, slick, currentSlide, nextSlide){
    //console.log(nextSlide); - 페이지 번호 뜸
    if(nextSlide>=0 && nextSlide<=3 /* 0,1,2,3 */){
        hBtn.removeClass('active')
        hBtn.eq(0).addClass('active')
    }else if(nextSlide>=4 && nextSlide<=7 /* 4,5,6,7 */){
        hBtn.removeClass('active')
        hBtn.eq(1).addClass('active')
    }else if(nextSlide>=8 && nextSlide<=11 /* 8,9,10,11 */){
        hBtn.removeClass('active')
        hBtn.eq(2).addClass('active')
    }else if(nextSlide>=12 && nextSlide<=15 /* 12,13,14,15 */){
        hBtn.removeClass('active')
        hBtn.eq(3).addClass('active')
    }else if(nextSlide>=16 && nextSlide<=19 /* 16,17,18,19 */){
        hBtn.removeClass('active')
        hBtn.eq(4).addClass('active')
    }
    $('.history_page em').text(nextSlide + 1) 
    //페이지 번호가 0부터 시작되서 +1 해줌
  });

  //history_poster

  let posterBtn = $('.poster_btn ul li');
  let posterCont = $('.poster_cont .poster');

       /* posterCont를 모두 안보이게 */
posterCont.hide().eq(0).show(); //다 숨기고 0번은 보이게

posterBtn.click(function(e){
    e.preventDefault();
    let target = $(this);
    let index = target.index();
    //console.log(index)
    posterCont.hide().eq(index).fadeIn();
    posterCont.find('figure').removeClass('move')
    posterCont.eq(index).find('figure').addClass('move')

    /* click 한 거에 active주기   */
    posterBtn.removeClass('active')
    target.addClass('active')
})


//history_cider
$('.cider_bottle').slick({
    dots:true,
    centerMode:true,
    centerPadding: "400px"
});


//memory-slider
let mCount = $('.memory-slider');
let mBtn = $('.memory-btn li');
let mbg = $('.history-slider-bg');
let mIndex;

mCount.slick({
    fade:true,
    autoplay:true
});

mBtn.click(function(e){
    e.preventDefault();
    let target=$(this);
    let index=target.index();
    //console.log(index)
    if(index == 0){
        mIndex = 0;
    }else if(index == 1){
        mIndex = 4;
    }else if(index == 2){
        mIndex = 8;
    }else if(index == 3){
        mIndex = 12;
    }else if(index == 4){
        mIndex = 16;
    }

    mCount.slick('slickGoTo',mIndex);
})

mCount.on('beforeChange', function(event, slick, currentSlide, nextSlide){
    console.log(nextSlide);

    if(nextSlide >= 0 && nextSlide <= 3){
        mbg.removeClass("bg-item-01 bg-item-02 bg-item-03 bg-item-04 bg-item-05").addClass("bg-item-01")
    }else if(nextSlide >= 4 && nextSlide <= 7){
        mbg.removeClass("bg-item-01 bg-item-02 bg-item-03 bg-item-04 bg-item-05").addClass("bg-item-02")
    }else if(nextSlide >= 8 && nextSlide <= 11){
        mbg.removeClass("bg-item-01 bg-item-02 bg-item-03 bg-item-04 bg-item-05").addClass("bg-item-03")
    }else if(nextSlide >= 12 && nextSlide <= 15){
        mbg.removeClass("bg-item-01 bg-item-02 bg-item-03 bg-item-04 bg-item-05").addClass("bg-item-04")
    }else if(nextSlide >= 16 && nextSlide <= 19){
        mbg.removeClass("bg-item-01 bg-item-02 bg-item-03 bg-item-04 bg-item-05").addClass("bg-item-05")
    }

    $('.memory_page_btn em').text(nextSlide + 1)
    //페이지 번호가 0부터 시작되서 +1 해줌
    mCount.slick('slickPlay');
  });
