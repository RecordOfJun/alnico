$(function(){

    //메인 베너 이미지
    /*var s=[],cnt=0,btn=false,setId=0,a=-1,b=1,t=0;
		s[0]=1,s[1]=0,s[2]=0,s[3]=0;

		naviRoundBt(cnt);  //등근 버튼 최초 0 으로 첫번재 버튼 표시`
		autoPlay();       //슬라이드 자동실행
		
		function autoPlay(){	
			setId=setInterval(slide,3000);	//3초 후에 다음 슬라이드 호출 실행 함.
		}


    function slide(z){ //슬라이드 호출 매개변수 z

        
        $('.slide').eq(cnt).stop().animate({left:0},0).animate({left:(100*a)+'%'},1000);

        if(a==-1){ //next 우측에서 좌측으로 이동
            cnt++; //다음 슬라이드 카운트
            if(cnt>3){cnt=0;} //마지막 슬라이드 보다 크면 처음 슬라이드 번호 0이 오도록
        }

        else if(b==-1){  //prev 좌측에서 우측으로 이동
            cnt--; //이전 슬라이드 카운트
            if(cnt<0){cnt=3;}//처음 슬라이드 보다 작으면 마지막 슬라이드 번호 2가 오도록

        }

        if(btn==true){ //둥근버튼이 클릭 상태라면
            cnt=z;   //클릭한 index번호 매개변수 z로 전달받아 cnt에 기억..현재 슬라이드로 전환
            btn=false; //클릭한 둥근 버튼이 클릭이 안된 상태로 초기화 ... cnt값 유지하기위해
        }

        $('.slide').eq(cnt).stop().animate({left:(100*b)+'%'},0).animate({left:0},1000);

        naviRoundBt(cnt); //둥근버튼 호출 실행
        s[0]=0, s[1]=0, s[2]=0,s[3]=0; //현재 실행중인 배열 변수 모두 초기화
        s[cnt]=1;  //현재 실행중인 슬라이드번호 배열변수 s에 1을 할당

    }*/



    //슬라이드 네비게이션 둥근버튼 초기화 와 현재 진행 슬라이드 표시
    function naviRoundBt(z){
        $('.slide_num li').removeClass('on'); //모든 슬라이드 네비게이션 둥근 버튼 초기화
        $('.slide_num li').eq(z).addClass('on');// 현재 실행중인 슬라이드 둥근버튼 표시
    }


    //일시정지와 재시작 이벤트 네비게이션 둥근버튼 3개와 좌우 화살표 버튼 마우스 오버시 이벤트
    $('.navBt,.btnRight,.btnLeft').on('mouseenter', function(){ //마우스가 올려져 있을 때
        clearInterval(setId); //setInterval정지
    });

    $('.navBt,.btnRight,.btnLeft').on('mouseleave', function(){ //마우스가 벗어났을 때
        
        if(t==0){ //정지 플레이버튼이 실행중이면
            autoPlay(); //setInterval실행 다시 재시작
        }
        else{        //만약 정지 상태라면 재시작 안함.
            return false; //버튼 이벤트 취소
        }
    });  

    //정지 버튼과 플레이 버튼 이벤트
    $('.btnStopPlay').on('click', function(){
        if(t==0){  /* 변수 t값이 0이면 정지.(버튼 클릭시) */
            $(this).css({backgroundImage:'url(img/play.png)'});  /* 플레이 버튼으로 변경 */
            clearInterval(setId); /* setInterval중지 */
            t=1;  /* 변수 t값 1로 변경.... */
        }
        else{
            $(this).css({backgroundImage:'url(img/stop.png)'});  /* 정지 버튼으로 변경 */
            autoPlay(); /* 반복실행 재시작 */
            t=0;  /* 다음에 정지 버튼을 클릭할 수 있도록 해줌. */
        }

    });

    $('.navBt').eq(0).on({
        click:function(){
            btn=true;
            naviRoundBt(0); //네비게이션 둥근버튼 하이라이트
            if(s[0]!=1){   //슬라이드 첫번째가 아니라면 
                a=1,b=-1;
                slide(0);//이전 슬라이드 실행
            }
        }
    });


    $('.navBt').eq(1).on({
        click:function(){
            btn=true;
            naviRoundBt(1); //둥근버튼이 하이라이트 되면
            if(s[1]!=1){    //슬라이드 두번째가 아니면
                if(s[0]==1){ //현재 실행중인 슬라이드가 클릭한 번호보다 작으면
                    a=-1,b=1; //다음 슬라이드 실행
                    slide(1);
                }
                else if(s[3]==1){ //실행중인 슬라이드가 클릭한 번호보다 크다면
                    a=1,b=-1;  //이전 슬라이드 실행
                    slide(1);
                }
            }
        }
    });

    $('.navBt').eq(2).on({
        click:function(){
            btn=true;
            naviRoundBt(2);
            if(s[3]!=1){  //네번째가 아니라면
                a=-1, b=1; //다음 슬라이드 실행
                slide(2);
            }
        }
    });


    //좌우 화살표 버튼 이벤트 (이전슬라이드와 다음슬라이드)
    $('.btnLeft').on('click', function(){
        a=1, b=-1;  //이전슬라이드
        if(s[0]==1){ //첫번째 슬라이드 이면
            slide(3);// 마지막 슬라이드 실행
        }
        else if(s[1]==1){ //두번째 슬라이드 이면
            slide(0);  //첫번째 슬라이드 실행
        }
        else if(s[2]==1){ //세번째 슬라이드 이면
            slide(1);  //두번째 슬라이드 실행
        }   
        else if(s[3]==1){ //네번째 슬라이드 이면
            slide(2);  //세번째 슬라이드 실행
        }      
    });


    $('.btnRight').on('click', function(){
        a=-1, b=1;  //다음 슬라이드
        if(s[0]==1){ //첫번째 슬라이드 이면
            slide(1);// 두번째 슬라이드 실행
        }
        else if(s[1]==1){ //두번째 슬라이드 이면
            slide(2);  //세번째 슬라이드 실행
        }
        else if(s[2]==1){ //세번째 슬라이드 이면
            slide(3);  //네번째 슬라이드 실행
        }  
        else if(s[3]==1){ //네번째 슬라이드 이면
            slide(0);  //첫번째 슬라이드 실행
        }       
    });








    //sitemap
    $('.sitebox').click(function(){
		$('#sitemap').fadeIn();
		$('.sitmap_close_button').click(function(){
			$('#sitemap').fadeOut();
		});
	});


    $('.depth1>ul>li').hover(function(){

        //$('.logo a').addClass('logocolor');

        $(this).find('.depth2').stop().slideDown(300);

    },function(){

        //$('.logo a').removeClass('logocolor');

        $(this).find('.depth2').stop().slideUp(0);

    });

    $(window).scroll(function(){
        if($(this).scrollTop()>300){
            $("#fixeduser").fadeIn();
        } else{
            $("#fixeduser").fadeOut();
        }

    });


    //페이지 이동
    function swing(){
        $('.down').animate({'bottom':'20px'},1000).animate({'bottom':'50px'},1000);
      }
      setInterval(swing,1000);
    
    
    
      $('.down').click( function(){
        $('html,body').animate({scrollTop:$('.section2').offset().top-100},800);
        return false;
      });



    //top
    $('.top_go').click( function(){
        $('html,body').animate( { scrollTop : 0},400);
        return false;
    });

    //draggable
    /*$(function(){
		$('.draggable').draggable({//지정된 요소를 드래그함
			cursor:"move", opacity:1, stack:'.draggable'
		});

		//stack: 나중에 잡은 개체가 맨 위로 올라옴
		//bind는 dragstart,dragstop을 새로운 객체로 생성해 실행함수를 만듦
		$('.draggable').bind('dragstart',function(){});
        $('.draggable').bind('dragstop',function(){});
	});

    $('.draggable ul').click(function(){
        $(this).find('.fold').slideToggle( 'fast' );
    });*/





    //fixeduser
    $('.list').click(function(){
        $(this).find('span').toggleClass('close');
        $(this).find('.user_layer').slideToggle( 'fast' );
    });


    //footer
    $('.site_link').click(function(){
        $(this).find('span').toggleClass('impo_close');
        $(this).find('.footer_layer').slideToggle( 'fast' );
    });


    //section-board
    $(function(){
        $('.section3 .board .tablist li:nth-child(1)').click(function(){
            $('.tabcont').css('display','none');
            $('.notice').css('display','block');
        
            $('.section3 .board .tablist li').removeClass('Bactive');
            $(this).addClass('Bactive');
        });
        
        $('.section3 .board .tablist li:nth-child(2)').click(function(){
            $('.tabcont').css('display','none');
            $('.news').css('display','block');
            
            $('.section3 .board .tablist li').removeClass('Bactive');
            $(this).addClass('Bactive');
        });
        
        $('.section3 .board .tablist li:nth-child(3)').click(function(){
            $('.tabcont').css('display','none');
            $('.event').css('display','block');
        
            $('.section3 .board .tablist li').removeClass('Bactive');
            $(this).addClass('Bactive');
        });
        
        $('.section3 .board .tablist li:nth-child(4)').click(function(){
            $('.tabcont').css('display','none');
            $('.scholarship').css('display','block');
        
            $('.section3 .board .tablist li').removeClass('Bactive');
            $(this).addClass('Bactive');
        });
    
        $('.section3 .board .tablist li:nth-child(5)').click(function(){
            $('.tabcont').css('display','none');
            $('.hire').css('display','block');
        
            $('.section3 .board .tablist li').removeClass('Bactive');
            $(this).addClass('Bactive');
        });
    
    });



    //smallBanner

    var banner=$('.visual01>ul>li');
    var button1=$('.arrow1_1_center>img.next');
    var button2=$('.arrow1_1_center>img.prev');
    var current=0;
    var setIntervalId00;
    var p=$('.sBan_number>p');

    timer(); //사용자 지정함수
    function timer(){
        setIntervalId00=setInterval(function(){
            var prev=banner.eq(current);
            var pn=p.eq(current);

            move(prev,0, '-100%');
            pn.removeClass('bl');

            current++;
            if(current==banner.size()){current=0;}

            var next=banner.eq(current);
            var pnn=p.eq(current);
            move(next, '100%', 0);
            pnn.addClass('bl');
        },3000)
    }

    function move(tg, start, end){
        tg.css('left', start).stop().animate({left:end},{duration:500,ease:'easeOutCubic'});
    }

    $('.visual1').on({mouseover:function(){
        clearInterval(setIntervalId00);
        },mouseout:function(){
            timer();
        }

    });

    button1.click(function(){
        var prev=banner.eq(current);
        var pn=p.eq(current);

        move(prev, 0, '-100%');
        pn.removeClass('bl');

        current++;

        if(current==banner.size()){current=0;}
        var next=banner.eq(current);
        var pnn=p.eq(current);
        move(next, '100%', 0);
        pnn.addClass('bl');
    });


    button2.click(function(){
        var prev=banner.eq(current);
        var pn=p.eq(current);

        move(prev, 0, '100%');
        pn.removeClass('bl');

        current--;

        if(current==banner.size()){current=0;}
        var next=banner.eq(current);
        var pnn=p.eq(current);
        move(next, '-100%', 0);
        pnn.addClass('bl');
    });

    
});