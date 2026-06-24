const presupuestos = {
    1: 10000,
    2: 8000,
    3: 5000
};

mostrarPresupuesto();

function mostrarPresupuesto(){

    const categoria =
    document.getElementById("categoria").value;

    document.getElementById(
        "presupuesto"
    ).innerHTML =
    "$" + presupuestos[categoria];
}

document
.getElementById("categoria")
.addEventListener(
    "change",
    mostrarPresupuesto
);

function registrarGasto(){

    const categoria =
    document.getElementById("categoria").value;

    const monto =
    parseFloat(
        document.getElementById("gasto").value
    );

    if(isNaN(monto) || monto <= 0){

        alert("Ingrese un monto válido");
        return;
    }

    if(
        monto >
        presupuestos[categoria]
    ){

        alert(
        "❌ El monto ingresado es mayor al presupuesto fijado."
        );

        return;
    }

    presupuestos[categoria] -= monto;

    mostrarPresupuesto();

    const nombres = {
        1:"🍔 Comida",
        2:"🚌 Transporte",
        3:"🎮 Entretenimiento"
    };

    const item =
    document.createElement("li");

    item.innerHTML =
    `${nombres[categoria]} - $${monto}`;

    document
    .getElementById("historial")
    .prepend(item);

    document.getElementById(
        "gasto"
    ).value = "";

    alert("✅ Operación exitosa");
}