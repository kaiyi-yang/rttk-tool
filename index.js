function processFormData() {
    const form = document.getElementById("form"); 
    let form_id = new Array();
    let form_value = new Array();
    let data = new Array();

    for (let i = 0; i < form.length; i++) {
        form_id.push(form[i].id);
        form_value.push(form[i].value);
        data.push([form_id[i], form_value[i]]);
    }
    console.log(data);

    const handler = '([id, val]) => { const element = document.getElementById(id); if (val == "true") { element.checked = true; } else { element.value = val; }}';
    const href = `javascript:(() => {${JSON.stringify(data)}.map(${handler})})()`;
    console.log(href);
    document.getElementById("button").href = href;

    return data;
}

function radioBoy(sex){
    if (sex.value == "false"){sex.value = "true"; document.getElementById("sex-sex-1").value = "false";}
    else {document.getElementById("sex-sex-1").value = "false";}
}

function radioGirl(sex){
    if (sex.value == "false"){sex.value = "true"; document.getElementById("sex-sex-0").value = "false";}
    else {document.getElementById("sex-sex-0").value = "false";}
}










