// console.log(DATASET)

function renderTool() {
	for (var i = 0; i < DATASET.tool.length; i++) {
		var option = document.createElement("option")
		option.text = DATASET.tool[i].name
		option.value = DATASET.tool[i].id
		
		// option.view = DATASET.tool[i].view
		option.setAttribute('view', DATASET.tool[i].view)

		document.getElementById("tool_selector").appendChild(option)
	}
}
renderTool()


function renderHole(view) {
	view = view.getAttribute("view")
	if (view == 2) {
		document.getElementById("uphole").style.display = "none"
		document.querySelectorAll('[for=up_rop2usc]')[0].innerHTML = "ROP to shoulder collar"
	}else if (view == 1) {
		document.getElementById("uphole").style.display = "block"
		document.querySelectorAll('[for=up_rop2usc]')[0].innerHTML = "HV to shoulder collar"
	}else{
		document.getElementById("uphole").style.display = "block"
		document.querySelectorAll('[for=up_rop2usc]')[0].innerHTML = "ROP to shoulder collar"
	}
}


function doCalculate() {
	document.getElementById("form_wrapper").style.display = "none"
	document.getElementById("result_wrapper").style.display = "block"
}


function backAction() {
	document.getElementById("calc_form").reset()
	document.getElementById("form_wrapper").style.display = "block"
	document.getElementById("result_wrapper").style.display = "none"
}