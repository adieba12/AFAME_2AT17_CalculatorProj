var numero,
  position,
  toSubtract = [],
  numeros = [],
  currentFont = 40,
  hisvalues = [];
function clearFunction(e, t) {
  return (
    (document.getElementById("display").value = ""), (numeros.length = 0), e
  );
}
function clearLast() {
  numeros.pop(), (document.getElementById("display").value = numeros.join(""));
}
function myFunction(e, t, n, s, o, l) {
  var r = event.target.value;
  numeros.push(r),
    (document.getElementById("display").value = numeros.join(""));
}
function result(numero, clearFunction, position, percentagem) {
  var o = 0,
    equal = 0;
  document.getElementById("display").style.height = "50px";
  var teste = document.getElementById("historyAccess"),
    para = document.createElement("p");
  function myFunctionNew() {
    document.querySelector("#historyAccess").appendChild(para),
      (para.textContent = document.getElementById("display").value),
      hisvalues.push(para.textContent);
  }
  if (
    (1 === document.getElementById("historyAccess").childElementCount &&
      myFunctionNew(),
    hisvalues.includes(document.getElementById("display").value) ||
      myFunctionNew(),
    para.addEventListener("click", function (e) {
      (numeros = (para = event.target.textContent).split("")),
        (document.getElementById("display").value = numeros.join("")),
        (document.querySelector("#historyAccess").style.height = "50px"),
        (document.querySelector("#historyAccess").style.position = "relative"),
        (document.getElementById("toClose").textContent = "hist\xf3rico"),
        (document.querySelector("#historyAccess").style.overflow = "hidden");
    }),
    (document.getElementById(
      "historyButton"
    ).textContent = document.getElementById("display").value),
    (document.getElementById("historyButton").onclick = function (e) {
      (document.querySelector("#historyAccess").style.height = "100%"),
        (document.querySelector("#historyAccess").style.overflow = "overlay"),
        (document.querySelector("#historyAccess").style.position = "fixed"),
        (document.getElementById("toClose").textContent = "voltar");
    }),
    (document.getElementById("toClose").onclick = function (e) {
      (document.querySelector("#historyAccess").style.height = "50px"),
        (document.querySelector("#historyAccess").style.overflow = "hidden"),
        (document.querySelector("#historyAccess").style.position = "relative"),
        (document.getElementById("toClose").textContent = "hist\xf3rico");
    }),
    numeros.includes("%"))
  ) {
    if (numeros.includes("-")) {
      (numeros[numeros.indexOf("-")] = "*"),
        (numeros[numeros.indexOf("%")] = "/100");
      var value = (document.getElementById("display").value = eval(
        numeros.join("")
      ));
      (toSubtract = numeros.slice(0, numeros.indexOf("*"))),
        (document.getElementById("display").value =
          eval(toSubtract.join("")) - value);
    } else if (numeros.includes("+")) {
      (numeros[numeros.indexOf("+")] = "*"),
        (numeros[numeros.indexOf("%")] = "/100");
      var value = (document.getElementById("display").value = eval(
        numeros.join("")
      ));
      (toSubtract = numeros.slice(0, numeros.indexOf("*"))),
        (document.getElementById("display").value =
          eval(toSubtract.join("")) + value);
    } else
      (numeros[numeros.indexOf("%")] = "*"),
        numeros.push(
          toString(
            (document.getElementById("display").value =
              eval(numeros.join("")) / 100)
          )
        );
  }
  var valores = document.getElementById("display").value;
  (numeros.length = 0),
    numeros.push((document.getElementById("display").value = eval(valores)));
}
