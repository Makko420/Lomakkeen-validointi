function validate() {
    var value = document.getElementById("username").value;
    var value2 = document.getElementById("postNmbr").value;
    var value3 = document.getElementById("gmail").value;

    const rbs = document.querySelectorAll('input[name="sukupuoli"]');
    let selectedValue;
    for (const rb of rbs) {
        if (rb.checked) {
            selectedValue = rb.value;
            break;
        }
    }

    if (value.length < 6) {
        alert("Varmista että (Käyttäjä ID) on vähintään 6 merkkiä pitkä")
    } else if (document.getElementById("pwd").value == "") {
        alert("Salasana ei saa olla tyhjä")
    } else if (document.getElementById("name").value == "") {
        alert("Nimi ei saa olla tyhjä")
    } else if (document.getElementById("osoite").value == "") {
        alert("Osoite ei saa olla tyhjä")
    } else if (document.getElementById("maa").value == "valitse") {
        alert("Valitse jokin maa tai muu")
    } else if (value2.length != 5) {
        alert("Postinumeron pitää olla 5 numeroa pitkä")
    } else  if (!value3.includes("@") || value3.length < 5) {
        alert("Ei ole kelvollinen sähköposti")
    } else if (selectedValue != 1) {
        alert("Valitse sukupuoli")
    } else if (!document.getElementById("kieli1").checked && !document.getElementById("kieli2").checked) {
        alert("Valitse kieli")
    } else {
        alert("Lomake täytetty!")
    }
}

