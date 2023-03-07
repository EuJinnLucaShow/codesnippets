document
  .getElementById("whichkey")
  .addEventListener("keydown", function (event) {
    document.getElementById("log").innerHTML = `
    <b>which: ${event.which}</b>
    <br>
    <b>keyCode:</b> ${event.keyCode}
    <br>
    <b>shiftKey:</b> ${event.shiftKey}
    <br>
    <b>altKey:</b> ${event.altKey}
    <br>
    <b>ctrlKey:</b> ${event.ctrlKey}
    <br>
    <b>metaKey:</b> ${event.metaKey}
    <br>
    <b>key:</b> ${event.key}
  `;
    this.value = ""; // очистить поле ввода
  });
