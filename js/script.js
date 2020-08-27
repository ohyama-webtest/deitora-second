$(function(){

  
  jQuery(window).on("scroll", function($){
    if(jQuery(this).scrollTop() > 100){
      jQuery('.totop').show();
    } else{
      jQuery('.totop').hide();
    }
  });
  
  jQuery('totop').click(function(){
    jQuery('body,html').animate({
      scrollTop:0
    }, 500)
    return false;
  });
  
  jQuery('a[href^="#"]').click(function() {
    // 移動速度を指定（ミリ秒）
    let speed = 300;
    // hrefで指定されたidを取得
    let id = jQuery(this).attr("href");
    // idの値が#のみだったらターゲットをhtmlタグにしてトップへ戻るようにする
    let target = jQuery("#" == id ? "html" : id);
    // ページのトップを基準にターゲットの位置を取得
    let position = jQuery(target).offset().top;
    // ターゲットの位置までspeedの速度で移動
    jQuery("html, body").animate(
      {
        scrollTop: position
      },
      speed
      );
      return false;
    });
    
    jQuery(window).on("scroll", function() {
      // トップから100px以上スクロールしたら
      if (100 < jQuery(this).scrollTop()) {
        // is-showクラスをつける
        jQuery('.totop').addClass( 'is-show' );
      } else {
        // 100pxを下回ったらis-showクラスを削除
        jQuery('.totop').removeClass( 'is-show' );
      }
    });
    
    $('.menu ul a li').click(function(){
      $('.menu ul a li').removeClass('click-menu');
      $(this).addClass('click-menu');
    });
    
    
    
    
    $('.accordion-item').click(function(){
      
      $(this).next().slideToggle();
      $(this).children('.accordion-show').toggleClass('is-open');
    });
    
    
    
    
    
    $('.accordion-item').click(function(){
      if($(this).children('.accordion-a').hasClass('hide')){
        $(this).children('.accordion-a').removeClass('hide');
        $(this).children('.accordion-b').addClass('hide');
      } else if ($(this).children('.accordion-b').hasClass('hide')) {
        $(this).children('.accordion-b').removeClass('hide');
        $(this).children('.accordion-a').addClass('hide');
      } 
    });

    $(".offcanvas-right").hiraku({
      btn:"#offcanvas-btn-right",
      direction:"right"
    });
    
  });
  