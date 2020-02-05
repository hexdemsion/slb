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

function backAction() {
	document.getElementById("calc_form").reset()
	document.getElementById("form_wrapper").style.display = "block"
	document.getElementById("result_wrapper").style.display = "none"
}

function doCalculate() {
	// document.getElementById("form_wrapper").style.display = "none"
	document.getElementById("result_wrapper").style.display = "block"

	var req = {
	    "id_tool": null,
	    "hole": {
	    	"uphole": {"conn": null, "rop2usc": null, "crossover": null},
	    	"downhole": {"conn": null, "rop2usc": null, "crossover": null}
	    }
	}	

	req.id_tool = parseInt(document.getElementById("tool_selector").value)

	req.hole.uphole.conn = document.getElementById("up_connection").value
	req.hole.uphole.rop2usc = parseInt(document.getElementById("up_rop2usc").value)
	req.hole.uphole.crossover = parseInt(document.getElementById("up_crossover").value)

	req.hole.downhole.conn = document.getElementById("down_connection").value
	req.hole.downhole.rop2usc = parseInt(document.getElementById("down_rop2usc").value)
	req.hole.downhole.crossover = parseInt(document.getElementById("down_crossover").value)

	if (req.hole.uphole.conn == "pin") {
		var res_uphole = DATASET.tool.find(el => el.id === req.id_tool).uphole.pin(req.hole.uphole.rop2usc, req.hole.uphole.crossover)
	}else if (req.hole.uphole.conn == "box") {
		var res_uphole = DATASET.tool.find(el => el.id === req.id_tool).uphole.box(req.hole.uphole.rop2usc, req.hole.uphole.crossover)
	}

	if (req.hole.downhole.conn == "pin") {
		var res_downhole = DATASET.tool.find(el => el.id === req.id_tool).downhole.pin(req.hole.downhole.rop2usc, req.hole.downhole.crossover)
	}else if (req.hole.downhole.conn == "box") {
		var res_downhole = DATASET.tool.find(el => el.id === req.id_tool).downhole.box(req.hole.downhole.rop2usc, req.hole.downhole.crossover)
	}

	console.log(res_uphole, res_downhole)

}


// console.log(ecoscope_uphole_box(233, 14.5))
// console.log(optidrill900_downhole_pin(45, 14.5))