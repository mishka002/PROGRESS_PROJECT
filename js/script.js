$(function () {
    $(".more-btn-1").click(function () {
        $("#list_1").toggle(2000)
    })
    $(".more-btn-2").click(function () {
        $("#list_2").toggle(2000)
    })
    $(".more-btn-3").click(function () {
        $("#list_3").toggle(2000)
    })
    $(".more-btn-4").click(function () {
        $("#list_4").toggle(2000)
    })
    $(".more-btn-5").click(function () {
        $("#list_5").toggle(2000)
    })
    $(".more-btn-6").click(function () {
        $("#list_6").toggle(2000)
    })
    $(".more-btn-7").click(function () {
        $("#list_7").toggle(2000)
    })
    $(".more-btn-8").click(function () {
        $("#list_8").toggle(2000)
    })
    $(".more-btn-9").click(function () {
        $("#list_9").toggle(2000)
    })
    $(".more-btn-10").click(function () {
        $("#list_10").toggle(2000)
    })
    $(".more-btn-11").click(function () {
        $("#list_11").toggle(2000)
    })
    $(".more-btn-12").click(function () {
        $("#list_11").toggle(2000)
    })
    $(".more-btn-13").click(function () {
        $("#list_13").toggle(2000)
    })
    $(".more-btn-14").click(function () {
        $("#list_14").toggle(2000)
    })
    $(".more-btn-15").click(function () {
        $("#list_15").toggle(2000)
    })
    $(".more-btn-16").click(function () {
        $("#list_16").toggle(2000)
    })
    $(".more-btn-17").click(function () {
        $("#list_17").toggle(2000)
    })
    $(".more-btn-18").click(function () {
        $("#list_18").toggle(2000)
    })
    $(".more-btn-19").click(function () {
        $("#list_19").toggle(2000)
    })
    $(".more-btn-20").click(function () {
        $("#list_20").toggle(2000)
    })
    $(".more-btn-21").click(function () {
        $("#list_21").toggle(2000)
    })
})
// list more btn for about
$(function () {
    $(".showed-panel, #hide-porfos").hide();
    $("#show-more-porfos").click(function () {
        $(".showed-panel").toggle(2000)
        $("#show-more-porfos").hide()
        $("#hide-porfos").toggle()
    })
    $("#hide-porfos").click(function () {
        $(".showed-panel").toggle()
        $("#hide-porfos").hide()
        $("#show-more-porfos").show()
    })
})
//end
// language btn
$(function () {
    $("#lang").click(function () {
        $(".lan").toggle(2000)
    })
})
// end
// responsive menu
function openNav() {
    document.getElementById("mySidenav").style.width = "100%";
}
function closeNav() {
    document.getElementById("mySidenav").style.width = "0";
}
// end
// min gallery for porfolio
function myFunction(n) {
    let a = document.getElementById(n).src;
    document.getElementById("imgb_1").innerHTML = "<img src='" + a + "' class='fadee zoom'>";
    document.getElementById("imgb_2").innerHTML = "<img src='" + a + "' class='fadee zoom'>";
    document.getElementById("imgb_3").innerHTML = "<img src='" + a + "' class='fadee zoom'>";
    document.getElementById("imgb_4").innerHTML = "<img src='" + a + "' class='fadee zoom'>";
    document.getElementById("imgb_5").innerHTML = "<img src='" + a + "' class='fadee zoom'>";
    document.getElementById("imgb_6").innerHTML = "<img src='" + a + "' class='fadee zoom'>";
    document.getElementById("imgb_7").innerHTML = "<img src='" + a + "' class='fadee zoom'>";
    document.getElementById("imgb_8").innerHTML = "<img src='" + a + "' class='fadee zoom'>";
    document.getElementById("imgb_9").innerHTML = "<img src='" + a + "' class='fadee zoom'>";
    document.getElementById("imgb_10").innerHTML = "<img src='" + a + "' class='fadee zoom'>";
    document.getElementById("imgb_11").innerHTML = "<img src='" + a + "' class='fadee zoom'>";
    document.getElementById("imgb_12").innerHTML = "<img src='" + a + "' class='fadee zoom'>";
    document.getElementById("imgb_13").innerHTML = "<img src='" + a + "' class='fadee zoom'>";
    document.getElementById("imgb_14").innerHTML = "<img src='" + a + "' class='fadee zoom'>";
    document.getElementById("imgb_15").innerHTML = "<img src='" + a + "' class='fadee zoom'>";
    document.getElementById("imgb_16").innerHTML = "<img src='" + a + "' class='fadee zoom'>";
    document.getElementById("imgb_17").innerHTML = "<img src='" + a + "' class='fadee zoom'>";
    document.getElementById("imgb_18").innerHTML = "<img src='" + a + "' class='fadee zoom'>";
    document.getElementById("imgb_19").innerHTML = "<img src='" + a + "' class='fadee zoom'>";
    document.getElementById("imgb_20").innerHTML = "<img src='" + a + "' class='fadee zoom'>";
    document.getElementById("imgb_21").innerHTML = "<img src='" + a + "' class='fadee zoom'>";
}
// end