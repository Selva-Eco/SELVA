var currentTabPessoa = 0; // Current tab is set to be the first tab (0)
showTabPessoa(currentTabPessoa); // Display the current tab

    function showTabPessoa(n) {
        // This function will display the specified tab of the form...
        var x = document.getElementsByClassName("tab");
        x[n].style.display = "table";
        //... and fix the Previous/Next buttons:
        if (n == 0) {
        document.getElementById("prevBtn").style.display = "none";
        } else {
        document.getElementById("prevBtn").style.display = "inline";
            document.getElementById("nextBtn").style.display = "inline";
        }
        if (n == (x.length - 1)) {
        document.getElementById("nextBtn").style.display = "none";
        } else if(n == (x.length - 2)){
            document.getElementById("nextBtn").innerHTML = "Calcular";
        } else {
        document.getElementById("nextBtn").innerHTML = "Next";
        }
        //... and run a function that will display the correct step indicator:
        fixStepIndicator(n)
}

function nextPrevPessoa(n) {
    // This function will figure out which tab to display
    var x = document.getElementsByClassName("tab");
    // Exit the function if any field in the current tab is invalid:
    if (n == 1 && !validateForm()) return false;
    // Hide the current tab:
    x[currentTabPessoa].style.display = "none";
    // Increase or decrease the current tab by 1:
    currentTabPessoa = currentTabPessoa + n;
    // if you have reached the end of the form...
    console.log(currentTabPessoa,x.length);
    
    if (currentTabPessoa >= x.length -1 ) {
      // ... the form gets submitted:
  //    document.getElementById("regForm").submit();
        calctCo2();
  //    return false;
    }
    // Otherwise, display the correct tab:
    showTabPessoa(currentTabPessoa);
}

function validateForm() {
    // This function deals with validation of the form fields
    var x, y, i, valid = true;
    x = document.getElementsByClassName("tab");
    y = x[currentTabPessoa].getElementsByTagName("input");
    // A loop that checks every input field in the current tab:
    for (i = 0; i < y.length; i++) {
      // If a field is empty...
        if (y[i].value == "") {
        // add an "invalid" class to the field:
            y[i].className += " invalid";
        // and set the current valid status to false
            valid = false;
        }
    }
    // If the valid status is true, mark the step as finished and valid:
    if (valid) {
        document.getElementsByClassName("step")[currentTabPessoa].className += " finish";
    }
    return valid; // return the valid status
}

function fixStepIndicator(n) {
    // This function removes the "active" class of all steps...
    var i, x = document.getElementsByClassName("step");
    for (i = 0; i < x.length; i++) {
        x[i].className = x[i].className.replace(" active", "");
    }
    //... and adds the "active" class on the current step:
    x[n].className += " active";
}

function calctCo2(){
      //Consumo energia
        var radio_energia = document.querySelector('input[name="calc_energy_type"]:checked').value;
        var energia = parseFloat(document.getElementsByName('energia_p')[0].value);
        var calc_energia = 0;
        console.log("energia", energia , radio_energia);
        if(radio_energia == "KWh"){
            calc_energia= energia *  0.0006 * 12;
        }else if(radio_energia == "Reais" ){
            calc_energia= energia * 0.00065 * 12;
        }


        var radio_gas = document.querySelector('input[name="calc_gas_type"]:checked').value;
        var gas = parseFloat(document.getElementsByName('gas_p')[0].value);
        var calc_gas = 0;
        if(radio_gas === "Reais"){
            calc_gas = gas * 0.00054 * 2.75 * 12;
        }else if(radio_gas === "M3"){
            calc_gas = gas * 0.54 * 2.75 * 12 / 1000 ;
        }else if(radio_gas === "Botijao"){
            calc_gas = gas * 5.4 * 0.00053;
        }

        //Alimentação
        var bovino = document.getElementsByName('bovino_p')[0].value;
        var calc_bovino = 0;
        if(bovino === 'alto'){
            calc_bovino = 0.538;
        }else if(bovino === 'medio'){
            calc_bovino = 0.538 * 0.7;
        }else if(bovino === 'baixo'){
            calc_bovino = 0.538 * 0.3;
        }
        var ave_peixe = document.getElementsByName('ave_peixe_p')[0].value;
        var calc_ave_peixe = 0;
        if(ave_peixe === 'alto'){
            calc_ave_peixe = 0.172;
        }else if(ave_peixe === 'medio'){
            calc_ave_peixe = 0.172 * 0.7;
        }else if(ave_peixe === 'baixo'){
            calc_ave_peixe = 0.172 * 0.3;
        }
        var suina = document.getElementsByName('suina_p')[0].value;
        var calc_suina = 0;
        if(suina === 'alto'){
            calc_suina = 0.244;
        }else if(suina === 'medio'){
            calc_suina = 0.244 * 0.7;
        }else if(suina === 'baixo'){
            calc_suina = 0.244 * 0.3;
        }
        var hibrida = document.getElementsByName('hibrida_p')[0].value;
        var calc_hibrida = 0;
        if(hibrida === 'alto'){
            calc_hibrida = 0.313;
        }else if(hibrida === 'medio'){
            calc_hibrida = 0.313 * 0.7;
        }else if(hibrida === 'baixo'){
            calc_hibrida = 0.313 * 0.3;
        }
        var vegana = document.getElementsByName('vegana_p')[0].value;
        calc_vegana = 0;

        //Transporte Individual
        var carro = parseInt(document.getElementsByName('carro_p')[0].value);
        var calc_carro = 0;

        if(carro <= 3  && carro > 0){
          calc_carro = 0.000175 * 950 * 0.7;
        }if(carro > 3){
          calc_carro =  0.000175 * 9500;
        }

        var moto = parseInt(document.getElementsByName('moto_p')[0].value);
        var calc_moto = 0;

        if(moto <= 3 && moto > 0){
          calc_moto = 0.000175 * 950 * 0.7;
        }if(moto > 3){
          calc_moto =  0.000175 * 9500;
        }
      
        var bicicleta = document.getElementsByName('bicicleta_p')[0].value;
        var calc_bicicleta = 0;

        //Transporte Urbano
        var onibus = parseInt(document.getElementsByName('onibus_p')[0].value);
        var calc_onibus = 0;
        if(onibus > 0 ){
          calc_onibus =  0.0028 * 9500/20;
        }
        var trem = document.getElementsByName('trem_p')[0].value;
        var calc_trem = 0;

        //Viagens
        var trechos = parseInt(document.getElementsByName('trechos_p')[0].value);
        var pessoas = parseInt(document.getElementsByName('pessoas_p')[0].value);
        var calc_aviao = 0;
        if(trechos > 0 && pessoas > 0){
            calc_aviao = 0.36486 * pessoas * trechos;
        }



        var reultado = calc_energia + calc_gas + calc_bovino + calc_ave_peixe + calc_suina + calc_hibrida + calc_vegana + calc_carro + calc_moto + calc_bicicleta + calc_onibus + calc_trem + calc_aviao; 
        document.getElementById("resultado_p").innerHTML = reultado.toFixed(2);
        var reais = reultado.toFixed(2) * 70;
        document.getElementsByName("amountInput")[0].setAttribute('value', reais);
        document.getElementById("qfinal").innerHTML = reais.toFixed(2);
}