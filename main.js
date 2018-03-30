$(document).ready(function(){
  $("input").on("keyup keydown keypress change", function(e){
    // console.log("Change!");
    var this_input = $(this),
        this_row = this_input.closest(".item");
        current = this_row.find(".current").val(),
        // console.log(current);
        new_cost = this_row.find(".new_cost").find("span").text();
        console.log("This is the fixed price of milk:" + new_cost);
        change = new_cost - current;
        console.log("this is a change in cost:" + change);

    this_row.find(".change").find("span").text(change);

    if(current == ""){
      this_row.find(".new_cost").find("span").removeClass("active");
    } else{
      // console.log("Hello, world!");
      current = parseFloat(current);
      new_cost = parseFloat(new_cost);
      // change = this_row.find(".change").text();


      this_row.find(".new_cost").find("span").addClass("active");
    }





    // //console.log("Quantity", quantity);
    //
    // this_row.find(".current").find("span").text(pre_tariff_cost);
    // this_row.find(".post_total").find("span").text(post_tariff_cost);
    //
    // var pre_total = 0,
    //     post_total= 0;
    //
    // $(".pre_total").each(function () {
    //     var this_pre_total = parseFloat($(this).find("span").text());
    //     pre_total = pre_total + this_pre_total;
    // });
    //
    // $(".post_total").each(function () {
    //     var this_post_total = parseFloat($(this).find("span").text());
    //     post_total = post_total + this_post_total;
    //   });
    //
    // $("#pre_total").find("span").text(pre_total);
    // $("#post_total").find("span").text(post_total);
  });
});
