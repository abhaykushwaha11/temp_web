function convertTemperature() 
    {
    const degrees = parseFloat(document.getElementById("degrees").value);
    const inp_type = document.getElementById("inp_type").value;
    const out_type = document.getElementById("out_type").value;
    let result;
    

    if (inp_type === "fahrenheit"&&out_type==="celsius") {
        //convert F-> C
        result = ((degrees - 32) * 5) / 9;
    }else if (inp_type === "fahrenheit"&&out_type==="kelvin") {
        // Convert F-> K
        result = ((degrees - 32) * 5) / 9+273.15;
    } else if (inp_type === "kelvin"&&out_type==="celsius") {
        // Convert to Kelvin-> C
        result = degrees - 273.15;
    } else if (inp_type === "kelvin"&&out_type==="fahrenheit") {
        // Convert k-> F
        result = ((degrees-273.15)*9)/5+32;
    } else if (inp_type === "celsius"&&out_type==="fahrenheit") {
        // Convert c-> f
        result = (degrees * 9) / 5 + 32;
    }else if (inp_type === "celsius"&&out_type==="kelvin") {
        // Convert c-> k
        result = degrees + 273.15;
    }
    else {//convert cc ff kk
        result = degrees ;
    }
    
    if (out_type === "kelvin") {
        document.getElementById("result").innerHTML = 
                    result.toFixed(4) + " K";
    } else if (out_type === "fahrenheit") {
        document.getElementById("result").innerHTML = result.toFixed(4) + " °F";
    } else {
        document.getElementById("result").innerHTML = result.toFixed(4) + " °C";
    }
    }