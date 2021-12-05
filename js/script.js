(function ($) {
  $(function () {
  
    $("#btn__search").click(function (event) {
      event.preventDefault();
      $(".form-mobie").toggleClass("actives");
      $(".form-mobie").addClass("smooth");
    });
  var $window = $(window).width();
  if ($window > 992) {
    $("#open").click(function (event) {
      event.preventDefault();
      $("#close").css("display" ,"block");
      $("#open").css("display" , "none");
      $("#set-width").addClass("main__w");
      $("#set-width-sd").css("width", "104px");
      $("#set-width").addClass("smooths");
      $("#set-width-sd").addClass("smooths");
      $(".siderbar-menu__lnk").addClass("margin-right");
      $(".sider-bar_name").addClass("sider-name-opa");
      $(".siderbar-menu__list").addClass("sider-name-br"); 
      $(".siderbar-menu").css("padding","20px 0");
      $("#set-width-sd").addClass("collapse-siderbar");
    });

    $("#close").click(function (event) {
      event.preventDefault();
      $("#close").css("display" ,"none");
      $("#open").css("display" , "block");
      $("#set-width").removeClass("main__w");
      $("#set-width-sd").css("width", "260px");
      $("#set-width").removeClass("smooths");
      $("#set-width-sd").removeClass("smooths");
      $(".siderbar-menu__lnk").removeClass("margin-right");
      $(".sider-bar_name").removeClass("sider-name-opa");
      $(".siderbar-menu__list").removeClass("sider-name-br");
      $(".siderbar-menu").css("padding","20px 0");
      $("#set-width-sd").removeClass("collapse-siderbar");
    });

    if ($(".siderbar-menu__list").length > 0) {
    $(".siderbar-menu__list").on({
      
      mouseenter: function () {
        if ($(this).parents(".collapse-siderbar").length === 0) return; 
           $("#set-width-sd").css("width", "260px");
            $(".siderbar-menu__lnk").addClass("margin-right");
            $("#set-width").removeClass("smooths");
            $("#set-width-sd").removeClass("smooths");
            $(".siderbar-menu__lnk").removeClass("margin-right");
            $(".sider-bar_name").removeClass("sider-name-opa");
            $(".siderbar-menu__list").removeClass("sider-name-br");
            $(".siderbar-menu").css("padding","20px 0");
      },
      mouseleave: function () {
        if ($(this).parents(".collapse-siderbar").length === 0) return; 
        $("#set-width-sd").css("width", "104px");
        $(".siderbar-menu__lnk").addClass("margin-right");
        $("#set-width").removeClass("smooths");
        $("#set-width-sd").removeClass("smooths");
        $(".siderbar-menu__lnk").addClass("margin-right");
        $(".sider-bar_name").addClass("sider-name-opa");
        $(".siderbar-menu__list").addClass("sider-name-br"); 
        $(".siderbar-menu").css("padding","20px 0");
      }
  });
    }
    

      // $(".siderbar").mousemove(function () {
      //    if($(this).length > 0) {
      //     $("#set-width-sd").css("width", "260px");
      //     $(".siderbar-menu__lnk").addClass("margin-right");
      //     $("#set-width").removeClass("smooths");
      //     $("#set-width-sd").removeClass("smooths");
      //     $(".siderbar-menu__lnk").removeClass("margin-right");
      //     $(".sider-bar_name").removeClass("sider-name-opa");
      //     $(".siderbar-menu__list").removeClass("sider-name-br");
      //    }else {
      //     $('.siderbar').off('mouseenter mouseleave');
      //    }
      // });

      // $(".siderbar").mouseover(function (){
      //   console.log(1);
      //     $("#set-width-sd").css("width", "104px");
      //     $(".siderbar-menu__lnk").removeClass("margin-right");
      //     $("#set-width").addClass("smooths");
      //     $("#set-width-sd").addClass("smooths");
      //     $(".siderbar-menu__lnk").addClass("margin-right");
      //     $(".sider-bar_name").addClass("sider-name-opa");
      //     $(".siderbar-menu__list").addClass("sider-name-br");
      // });
   
  }else{
    let mainSidebar = $("#set-width-sd");
    mainSidebar.append('<div class="bg_sidebar"></div>');
    $("#open").click(function (event) {
      event.preventDefault();
      $("#close").css("display" ,"block");
      $("#open").css("display" , "none");
      $(".siderbar-menu").addClass("active").addClass("mobie");
      $(".siderbar").css("visibility" , "visible");
      $(".bg_sidebar").addClass("active");
      mainSidebar.css("transition","0.5s");
       $('.sider-bar').css("transition","0.5s");
    });
  
    $(".bg_sidebar").click(function (event) {
      event.preventDefault();
      $("#close").css("display" ,"none");
      $("#open").css("display" , "block");
      $(".siderbar-menu").removeClass("active");
      $(".bg_sidebar").removeClass("active");
      $(".siderbar").css("visibility" , "hidden");
      $(".bg_sidebar").removeClass("activde");
    });
  }
    if($(".checkbox-none").length > 0){
      $('.checkbox-none').change(function(){
        console.log(1);
        if ($(this).prop("checked")) {
          $(this).parents(".form-group").find("#start").removeAttr("disabled", "disabled");
        }else{
          console.log(2);
          $(this).parents(".form-group").find("#start").attr("disabled", "disabled");
        }
      })
    };
    
    $(".header-menu-user__name").click(function (event) {
      event.preventDefault();
      $(".header-menu-user-all").slideToggle(300);
    });
  });
})(jQuery);
