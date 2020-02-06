function renderTool() {
	for (var i = 0; i < DATASET.tool.length; i++) {
		var option = document.createElement("option")
		option.text = DATASET.tool[i].name
		option.value = DATASET.tool[i].id
		option.setAttribute('view', DATASET.tool[i].view)

		document.getElementById("tool_selector").appendChild(option)
	}
}
renderTool()

function renderUpholePin() {
	var option = document.createElement("option")
	option.text = "PIN"
	option.value = "pin"

	document.getElementById("up_connection").appendChild(option)
}

function renderUpholeBox() {
	var option = document.createElement("option")
	option.text = "BOX"
	option.value = "box"

	document.getElementById("up_connection").appendChild(option)
}

function renderDownholePin() {
	var option = document.createElement("option")
	option.text = "PIN"
	option.value = "pin"

	document.getElementById("down_connection").appendChild(option)
}

function renderDownholeBox() {
	var option = document.createElement("option")
	option.text = "BOX"
	option.value = "box"

	document.getElementById("down_connection").appendChild(option)
}

function getParamFromFun(func) {
	var STRIP_COMMENTS = /((\/\/.*$)|(\/\*[\s\S]*?\*\/))/mg
	var ARGUMENT_NAMES = /([^\s,]+)/g
	var fnStr = func.toString().replace(STRIP_COMMENTS, '')
	var result = fnStr.slice(fnStr.indexOf('(')+1, fnStr.indexOf(')')).match(ARGUMENT_NAMES)
	if(result === null)
		result = []
	return result
}

function renderHole(elem) {
	var tool_view = parseInt(elem.getAttribute("view"))
	var tool_id = parseInt(elem.getAttribute("value"))

	if (tool_view == 2) {
		document.getElementById("uphole").style.display = "none"
		document.querySelectorAll('[for=up_rop2usc]')[0].innerHTML = "ROP to shoulder collar"
	}else if (tool_view == 1) {
		document.getElementById("uphole").style.display = "block"
		document.querySelectorAll('[for=up_rop2usc]')[0].innerHTML = "HV to shoulder collar"
	}else{
		document.getElementById("uphole").style.display = "block"
		document.querySelectorAll('[for=up_rop2usc]')[0].innerHTML = "ROP to shoulder collar"
	}

	if (!isNaN(tool_id)) {
		document.getElementById("calc_btn").disabled = false

		document.getElementById("up_connection").options.length = 0
		document.getElementById("down_connection").options.length = 0

		var isUpholePin = typeof DATASET.tool.find(el => el.id === tool_id).uphole.pin
		var isUpholeBox = typeof DATASET.tool.find(el => el.id === tool_id).uphole.box

		var isDownholePin = typeof DATASET.tool.find(el => el.id === tool_id).downhole.pin
		var isDownholeBox = typeof DATASET.tool.find(el => el.id === tool_id).downhole.box

		if (isUpholePin !== "undefined") {
			renderUpholePin()
		}

		if (isUpholeBox !== "undefined") {
			renderUpholeBox()
		}

		if (isDownholePin !== "undefined") {
			renderDownholePin()
		}

		if (isDownholeBox !== "undefined") {
			renderDownholeBox()
		}
	}else{
		document.getElementById("calc_btn").disabled = true
		return
	}

}

function backAction() {
	document.getElementById("calc_form").reset()
	document.getElementById("form_wrapper").style.display = "block"
	document.getElementById("result_wrapper").style.display = "none"
}

function doCalculate() {
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
		if (req.hole.uphole.crossover < 1 || isNaN(req.hole.uphole.crossover)) {
			alert("Uphole PIN require Crossover value")
			return
		}
		var res_uphole = DATASET.tool.find(el => el.id === req.id_tool).uphole.pin(req.hole.uphole.rop2usc, req.hole.uphole.crossover)
	}else if (req.hole.uphole.conn == "box") {
		var res_uphole = DATASET.tool.find(el => el.id === req.id_tool).uphole.box(req.hole.uphole.rop2usc, req.hole.uphole.crossover)
	}

	if (req.hole.downhole.conn == "pin") {
		if (req.hole.downhole.crossover < 1 || isNaN(req.hole.downhole.crossover)) {
			alert("Downhole PIN require Crossover value")
			return
		}
		var res_downhole = DATASET.tool.find(el => el.id === req.id_tool).downhole.pin(req.hole.downhole.rop2usc, req.hole.downhole.crossover)
	}else if (req.hole.downhole.conn == "box") {
		var res_downhole = DATASET.tool.find(el => el.id === req.id_tool).downhole.box(req.hole.downhole.rop2usc, req.hole.downhole.crossover)
	}

	console.log(res_uphole, res_downhole)

	
	// Uphole result section
	document.getElementById("res_tool_name").innerHTML = DATASET.tool.find(el => el.id === req.id_tool).name

	document.getElementById("up_res_conn").innerHTML = req.hole.uphole.conn.toUpperCase()
	document.getElementById("up_res_rop2usc").innerHTML = req.hole.uphole.rop2usc
	document.getElementById("up_res_crossover").innerHTML = req.hole.uphole.crossover

	document.getElementById("up_fin_len_res").value = res_uphole.fin_len+" inch"

	var comment_list = [
		"Extender can be adjusted without crossover added, please check with gauges after installation",
		"Your extender can’t be adjusted, please check collar and crossover length",
		"Your extender can’t be adjusted, please check collar length",
		"Extender can be adjusted, please check with gauges after installation",
		"There is no available extender type with this result"
	]

	if (res_uphole.extender.final_ext.length > 0 && req.hole.uphole.crossover == 0) {
		var valid_comment = comment_list[0]
	}else if(res_uphole.extender.final_ext.length > 0 && req.hole.uphole.crossover > 0) {
		var valid_comment = comment_list[3]
	}

	if (res_uphole.extender.final_ext.length == 0 && req.hole.uphole.crossover == 0) {
		var invalid_comment = comment_list[2]
	}else if(res_uphole.extender.final_ext.length == 0 && req.hole.uphole.crossover > 0) {
		var invalid_comment = comment_list[1]
	}

	if (res_uphole.extender.final_ext.length > 0) {
		document.getElementById("up_res_invalid_ext").style.display = "none"
	}else{
		document.getElementById("up_res_invalid_ext").style.display = "block"
	}
	
	// this comment can be modified later, 
	// if we need to know the result is 
	// below or beyond the limit
	document.getElementById("up_res_invalid_ext_text").innerHTML = comment_list[4] 

	document.getElementById("up_valid_comment").innerHTML = valid_comment
	document.getElementById("up_invalid_comment").innerHTML = invalid_comment


	// clean all list before writing new result
	document.getElementById("up_res_ext_list").innerHTML = ""

	// iterate available extender
	for (var i = 0; i < res_uphole.extender.final_ext.length; i++) {
		var cur_ext = res_uphole.extender.final_ext[i]

		var node = document.createElement("li")

		// check if extender are ext 2.5"
		if (cur_ext.tolerance == 0) {
			var ext_type_string = cur_ext.name+": min "+cur_ext.min+'", max '+cur_ext.max+'"'
		}else{
			var ext_type_string = cur_ext.name+": min "+cur_ext.min+'", max '+cur_ext.max+'", with ext 2.5"'
		}

		// append the element
		var textnode = document.createTextNode(ext_type_string)
		node.appendChild(textnode)
		document.getElementById("up_res_ext_list").appendChild(node)
	}









	// document.getElementById("form_wrapper").style.display = "none"
	document.getElementById("result_wrapper").style.display = "block"
}