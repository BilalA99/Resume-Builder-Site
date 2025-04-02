

	function mortCalc(myform) {
		var price=document.Form1.Amount.value
		var price=parseInt(price,10)
			if (isNaN(price)){
					alert("Please enter a number. Do not use a dollar sign or commas.");}
		var interest=document.Form1.Rate.value
		var interest=parseFloat(interest)
		var numYears=document.Form1.Years.value
		var numYears=parseInt(numYears,10)
		
	document.Form1.Payment.value=monthly(price,interest,numYears)
	document.Form1.Payment.value=punctuation(document.Form1.Payment.value)
	}
	
	

	
	function monthly(price,interest,numYears) {
		var IntRate=interest/1200
		var Pmts=numYears*12
		var pay=price
		return pay*(IntRate/(1-(1/Math.pow(1+IntRate,Pmts))))
	}

	function punctuation(valuein) {
		var formatStr=""
		var Odollars=""
		var decpos=valuein.indexOf(".")
		if (decpos==-1)
			decpos=valuein.length
		var dollars=valuein.substring(0,decpos)
		var Fdollars=dollars.length
		if (Fdollars>3) {
			while (Fdollars>0) {
			Tdollars=dollars.substring(Fdollars-3,Fdollars)
			if (Tdollars.length==3) {
				Odollars=","+Tdollars+Odollars
				Fdollars=Fdollars-3
			} else {
				Odollars=Tdollars+Odollars
				Fdollars=0
				}
			}
		if (Odollars.substring(0,1)==",")
			dollars=Odollars.substring(1,Odollars.length)
		else
			dollars=Odollars
		}
		var cents=valuein.substring(decpos+1,decpos+3)
		if (cents=="")
			cents="00"
		var formatStr="$"+dollars+"."+cents
	
		return formatStr
			}
