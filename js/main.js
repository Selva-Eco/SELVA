// Buttons Dinamic

function openSectionCalc() {
    $(".calculator").show();
    $(".form-imovel").hide();

    $("#btn-form").attr("aria-disabled", "true")
    $("#btn-calc").attr("aria-disabled", "false")

}

function openSectionForm() {
    $(".form-imovel").show();
    $(".calculator").hide();

    $("#btn-form").attr("aria-disabled", "false")
    $("#btn-calc").attr("aria-disabled", "true")
}

openSectionCalc();   