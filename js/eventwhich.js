document.addEventListener("keydown", function (event) {
  console.log(event);

  document.body.innerHTML = `
    &nbsp;&nbsp;&nbsp;
    <b>which: ${event.which}</b>
    <br>&nbsp;
    <b>keyCode:</b> ${event.keyCode}
    <br>&nbsp;&nbsp;&nbsp;
    <b>shiftKey:</b> ${event.shiftKey}
    </br>&nbsp;&nbsp;&nbsp;&nbsp;
    <b>altKey:</b> ${event.altKey}
    <br>&nbsp;&nbsp;&nbsp;
    <b>ctrlKey:</b> ${event.ctrlKey}
    <br>&nbsp;&nbsp;
    <b>metaKey:</b> ${event.metaKey}
    <br>&nbsp;&nbsp;
    <b>key:</b> ${event.key}
  `;
});

/*When a KeyboardEvent fires, you can test which key was pressed because that event contains information you can write logic against.

document.addEventListener("keydown", function(event) {
  console.log(event.which);
})
For example, by pressing a, you’ll get 65
*/
