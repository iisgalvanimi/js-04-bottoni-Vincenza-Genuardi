const btns_nodeLst = document.querySelectorAll(".tab-btn");
const btns_arr = Array.from(btns_nodeLst)


btns_arr[0].addEventListener("click", evidenziaBottone);
btns_arr[1].addEventListener("click", evidenziaBottone);
btns_arr[2].addEventListener("click", evidenziaBottone);


function evidenziaBottone (e) {
    console.log("Evidenzio bottone " + e.target.id)

    for (let i = 0; i < btns_arr.lenght; i++) {
	    btns_arr[i].classList.remove("activeButtonClass");
    }
    e.target.classList.add("activeButtonClass");
}



  