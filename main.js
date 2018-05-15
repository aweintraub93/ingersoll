$(document).ready(function() {
      $("input").on("keyup keydown keypress change", function(e) {
            var income = $(".income").val(),
              family_size = $(".family_size").val();

            /**
             * First reset the display
             */

            $(".response.active").removeClass("active");
            $("#hide_this").removeClass("byebye");
            $("#hide_this").find("input").each(function() {
              $(this).removeAttr("disabled", "disabled");
            });

            /**
             * If both family size and income are defined, move on
             */

            if (family_size != "" && income != "") {
              family_size = parseFloat(family_size);
              income = parseFloat(income);

              /**
               * check income and family size and flag the correct answer
               */
              if ((income >= 30930 && income <= 61860) && (family_size == 5)) {
                $("#yes").addClass("active");
              } else if ((income >= 28620 && income <= 57240) && (family_size == 4)) {
                $("#yes").addClass("active");
              } else if ((income >= 25770 && income <= 51540) && (family_size == 3)) {
                $("#yes").addClass("active");
              } else if ((income >= 22920 && income <= 45840) && (family_size == 2)) {
                $("#yes").addClass("active");
              } else if ((income >= 20040 && income <= 40080) && (family_size == 1)) {
                $("#yes").addClass("active");
              } else if ((income <= 20040)) {
                $("#yes").addClass("active");
              } else {
                $("#no").addClass("active");
                $("#hide_this").addClass("byebye");
                $("#hide_this").find("input").each(function() {
                  $(this).attr("disabled", "disabled");
                });
              }

              /**
               * Calculate one third Income and output it
               */
              var income_third = ((income / 12) * 0.33).toFixed(2);
              $("#income-third").text("$" + income_third);

            }


            //
            //     // console.log("Change!");
            //     var this_input = $(this),
            //       this_row = this_input.closest(".item"),
            //       current = this_row.find(".current").val(),
            //       new_cost = this_row.find(".new_cost").find("span").text();
            //
            //     console.log("This is the fixed price of milk:" + new_cost);
            //     change = (current-new_cost).toFixed(2);
            //     console.log("this is a change in cost:" + change);
            //
            //
            //     this_row.find(".change").find("span").text(change);
            //
            //     if (current == "") {
            //       this_row.find(".new_cost").find("span").removeClass("active");
            //       this_row.find(".change").find("span").text("");
            //     } else {
            //       // console.log("Hello, world!");
            //       current = parseFloat(current);
            //       new_cost = parseFloat(new_cost);
            //       // change = this_row.find(".change").text();
            //
            //
            //       this_row.find(".new_cost").find("span").addClass("active");
            //     }
            //
            //     var current_total = 0,
            //       new_total = 0,
            //       change_total = 0;
            //
            //     $(".current").each(function() {
            //       var this_current_total = parseFloat($(this).val());
            //       current_total = current_total + this_current_total;
            //     });
            //
            //     $(".new_cost").each(function() {
            //       var this_new_total = parseFloat($(this).find("span").text());
            //       new_total = new_total + this_new_total;
            //     });
            //
            //     $(".change").each(function() {
            //       var this_change_total = parseFloat($(this).find("span").text());
            //       change_total = change_total + this_change_total;
            //     });
            //
            //     if (!isNaN(current_total)) {
            //       $(".total_current").find("span").text(current_total.toFixed(2));
            //     }
            //
            //     if (!isNaN(new_total)) {
            //       $(".total_new").find("span").text(new_total);
            //     }
            //
            //     if (!isNaN(change_total)) {
            //       $(".total_change").find("span").text(change_total.toFixed(2));
            //     }
            //
            //     if (change_total < 0) {
            //       $(".total_change").css("color", "red");
            //     } else {
            //       $(".total_change").css("color", "green");
            //     }
            //
            //
            //     // //console.log("Quantity", quantity);
            //     //
            //     // this_row.find(".current").find("span").text(pre_tariff_cost);
            //     // this_row.find(".post_total").find("span").text(post_tariff_cost);
            //     //
            //     // var pre_total = 0,
            //     //     post_total= 0;
            //     //
            //     // $(".pre_total").each(function () {
            //     //     var this_pre_total = parseFloat($(this).find("span").text());
            //     //     pre_total = pre_total + this_pre_total;
            //     // });
            //     //
            //     // $(".post_total").each(function () {
            //     //     var this_post_total = parseFloat($(this).find("span").text());
            //     //     post_total = post_total + this_post_total;
            //     //   });
            //     //
            //     // $("#pre_total").find("span").text(pre_total);
            //     // $("#post_total").find("span").text(post_total);
            //   });
            // });