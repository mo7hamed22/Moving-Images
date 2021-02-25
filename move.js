var imges = document.images;
var btngo = document.getElementById("go");
var i = 0;
var Timer_id;
var flag = -1;

function go(value) {
    //    flag++;

    if (value == "go") {
        //value = "stop";
        btngo.innerHTML = value;
        Timer_id = setInterval(function () {
            i += 50;
            if (i >= 400) {
                i = 380;
            }

            imges[0].style = "left: " + i + "px";
            imges[1].style = "right: " + i + "px";
            imges[2].style = "bottom: " + i + "px";
            //            if (flag != 0) {
            //                stop();
            //            }

        }, 1000);
    }

}

function stop() {

    i = 0;
    imges[0].style = "left: " + i + "px";
    imges[1].style = "right: " + i + "px";
    imges[2].style = "bottom: " + i + "px";
//    go("go");

}



//    if (btngo.innerHTML == "stop") {
//        btngo.innerHTML = "go";
//        flag = -1;
//        //clear();
//
//
//    }






function rest() {
    i = 0;
    imges[0].style = "left: " + i + "px";
    imges[1].style = "right: " + i + "px";
    imges[2].style = "bottom: " + i + "px";
    clearInterval(Timer_id);
}

//function clear() {
//    
//}
