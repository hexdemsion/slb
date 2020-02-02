/*ECOSCOPE*/
function ecoscope_uphole_box(rop2usc, crossover) {
	if (crossover == 0) {
		var fin_len = rop2usc-215
	}else{
		var fin_len = rop2usc-216.678+crossover-1.838
	}
	console.log(fin_len)
}
// ecoscope_uphole_box(233, 14.5)
// ecoscope_uphole_box(233, 0)

function ecoscope_uphole_pin(rop2usc, crossover) {
	var fin_len = rop2usc-216.678+crossover+3.257
	console.log(fin_len)
}
// ecoscope_uphole_pin(233, 14.5)

function ecoscope_downhole_box(rop2usc) {
	var fin_len = rop2usc-53.125-1.678
	console.log(fin_len)
}
// ecoscope_downhole_box(69.225)

function ecoscope_downhole_pin(rop2usc, crossover) {
	var fin_len = rop2usc-53.125+crossover+3.4
	console.log(fin_len)
}
// ecoscope_downhole_pin(69.225, 10)






/* ARC 6 */
function arc6_uphole_box(rop2usc, crossover) {
	if (crossover == 0) {
		var fin_len = rop2usc-73.0625
	}else{
		var fin_len = rop2usc-74.74+crossover-1.838
	}
	console.log(fin_len)
}
// arc6_uphole_box(87.3125, 19)
// arc6_uphole_box(87.3125, 0)

function arc6_uphole_pin(rop2usc, crossover) {
	var fin_len = rop2usc-74.74+crossover+3.257
	console.log(fin_len)
}
// arc6_uphole_pin(87.3125, 14.5)

function arc6_downhole_pin(rop2usc, crossover) {
	var fin_len = rop2usc-110.15+crossover+3.4
	console.log(fin_len)
}
// arc6_downhole_pin(123, 14.5)

function arc6_downhole_box(rop2usc) {
	var fin_len = rop2usc-110.15-1.678
	console.log(fin_len)
}
// arc6_downhole_box(123)








/* ARC 8 */
function arc8_uphole_box(rop2usc, crossover) {
	if (crossover == 0) {
		var fin_len = rop2usc-73.288
	}else{
		var fin_len = rop2usc-74.966+crossover-1.838
	}
	console.log(fin_len)
}
// arc8_uphole_box(87.3125, 19)
// arc8_uphole_box(85.625, 0)

function arc8_uphole_pin(rop2usc, crossover) {
	var fin_len = rop2usc-74.966+crossover+3.257
	console.log(fin_len)
}
// arc8_uphole_pin(87.3125, 19)

function arc8_downhole_pin(rop2usc, crossover) {
	var fin_len = rop2usc-110.19+crossover+3.417
	console.log(fin_len)
}
// arc8_downhole_pin(121, 14.5)

function arc8_downhole_box(rop2usc) {
	var fin_len = rop2usc-110.19-1.678
	console.log(fin_len)
}
// arc8_downhole_box(121)






/* ARC 9 */
function arc9_uphole_box(rop2usc, crossover) {
	if (crossover == 0) {
		var fin_len = rop2usc-73.288
	}else{
		var fin_len = rop2usc-74.966+crossover-1.838
	}
	console.log(fin_len)
}
// arc9_uphole_box(89.9375, 19)
// arc9_uphole_box(89.9375, 0)

function arc9_uphole_pin(rop2usc, crossover) {
	var fin_len = rop2usc-74.966+crossover+3.257
	console.log(fin_len)
}
// arc9_uphole_pin(87.3125, 19)

function arc9_downhole_pin(rop2usc, crossover) {
	var fin_len = rop2usc-110.19+crossover+3.417
	console.log(fin_len)
}
// arc9_downhole_pin(127, 14.5)

function arc9_downhole_box(rop2usc) {
	var fin_len = rop2usc-110.19-1.678
	console.log(fin_len)
}
// arc9_downhole_box(121)



/* SONICSCOPE */
function sonicscope_uphole_box(rop2usc, crossover) {
	if (crossover == 0) {
		var fin_len = rop2usc-99-178
	}else{
		var fin_len = rop2usc-97.5+crossover-1.838
	}
	console.log(fin_len)
}

function sonicscope_uphole_pin(rop2usc, crossover) {
	var fin_len = rop2usc-97.5+crossover+3.257
	console.log(fin_len)
}

function sonicscope_downhole_pin(rop2usc, crossover) {
	var fin_len = rop2usc-61.955+crossover+3.4
	console.log(fin_len)
}

function sonicscope_downhole_box(rop2usc) {
	var fin_len = rop2usc-61.955-1.678
	console.log(fin_len)
}



/* TELESCOPE IWOB */
function telescope_iwob_uphole_box(rop2usc, crossover) {
	var fin_len = rop2usc-227.25+crossover-1.838
	console.log(fin_len)
}

function telescope_iwob_uphole_pin(rop2usc, crossover) {
	var fin_len = rop2usc-227.25+crossover+3.257
	console.log(fin_len)
}

function telescope_iwob_downhole_pin(rop2usc, crossover) {
	var fin_len = rop2usc-44.25+crossover+3.4
	console.log(fin_len)
}

function telescope_iwob_downhole_box(rop2usc) {
	var fin_len = rop2usc-44.25-1.678
	console.log(fin_len)
}





/* TELESCOPE NON-IWOB */
function telescope_non_iwob_uphole_box(rop2usc, crossover) {
	var fin_len = rop2usc-227.25+crossover-1.838
	console.log(fin_len)
}

function telescope_non_iwob_uphole_pin(rop2usc, crossover) {
	var fin_len = rop2usc-227.25+crossover+3.257
	console.log(fin_len)
}

function telescope_non_iwob_downhole_pin(rop2usc, crossover) {
	var fin_len = rop2usc-20.25+crossover+3.4
	console.log(fin_len)
}

function telescope_non_iwob_downhole_box(rop2usc) {
	var fin_len = rop2usc-20.25-1.678
	console.log(fin_len)
}







/* GYROPULSE */
function gyropulse_uphole_box(rop2usc, crossover) {
	var fin_len = rop2usc-221.71+crossover-1.838
	console.log(fin_len)
}

function gyropulse_uphole_pin(rop2usc, crossover) {
	var fin_len = rop2usc-221.71+crossover+3.257
	console.log(fin_len)
}

function gyropulse_downhole_pin(rop2usc, crossover) {
	var fin_len = rop2usc-20.25+crossover+3.417
	console.log(fin_len)
}

function gyropulse_downhole_box(rop2usc) {
	var fin_len = rop2usc-20.25-1.678
	console.log(fin_len)
}


/* VPWD */
function vpwd_uphole_pin(rop2usc, crossover) {
	var fin_len = rop2usc-117.125+crossover+1.25
	console.log(fin_len)
}

function vpwd_downhole_box(rop2usc) {
	var fin_len = rop2usc-16
	console.log(fin_len)
}



/* IMPULSE */
function impulse_uphole_pin(rop2usc, crossover) {
	var fin_len = rop2usc-124.125+crossover+1.25
	console.log(fin_len)
}

function impulse_downhole_box(rop2usc, crossover) {
	if (crossover == 0) {
		var fin_len = rop2usc-98.25
	}else{
		var fin_len = rop2usc+crossover-98.25
	}
	console.log(fin_len)
}



/* GEOSPHERE RECEIVER */
function geosphere_receiver_uphole_pin(rop2usc, crossover) {
	var fin_len = rop2usc-98.25+crossover+1.25
	console.log(fin_len)
}

function geosphere_receiver_downhole_box(rop2usc, crossover) {
	if (crossover == 0) {
		var fin_len = rop2usc-84.875
	}else{
		var fin_len = rop2usc-82.875+crossover-2
	}
	console.log(fin_len)
}



/* GEOSPHERE TRANSMITTER */
function geosphere_transmitter_uphole_pin(rop2usc, crossover) {
	var fin_len = rop2usc-133.75+crossover+1.25
	console.log(fin_len)
}

function geosphere_transmitter_downhole_box(rop2usc, crossover) {
	if (crossover == 0) {
		var fin_len = rop2usc-40.125
	}else{
		var fin_len = rop2usc-40.125+crossover-2
	}
	console.log(fin_len)
}





/* MICROSCOPE 675 */
function microscope675_uphole_box(rop2usc, crossover) {
	if (crossover == 0) {
		var fin_len = rop2usc-57.9875-1.678
	}else{
		var fin_len = rop2usc-57.9875-1.678+crossover
	}
	console.log(fin_len)
}

function microscope675_uphole_pin(rop2usc, crossover) {
	var fin_len = rop2usc-57.9875+crossover+3.257
	console.log(fin_len)
}

function microscope675_downhole_pin(rop2usc, crossover) {
	var fin_len = rop2usc-95.5+crossover+3.417
	console.log(fin_len)
}

function microscope675_downhole_box(rop2usc) {
	var fin_len = rop2usc-95.5-1.678
	console.log(fin_len)
}