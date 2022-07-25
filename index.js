async function sendMessage(count) {
  function waitSec(ms) {
    return new Promise((resolve) => {
      setTimeout(() => resolve(true), ms);
    });
  }

  const msgBox = document.querySelectorAll("div[contentEditable='true']")[1];

  for (let i = 1; i <= count; i++) {
    try {
      const keyboardEvent = new KeyboardEvent("keydown", {
        code: "Enter",
        key: "Enter",
        charCode: 13,
        keyCode: 13,
        view: window,
        bubbles: true,
      });
      msgBox.dispatchEvent(new InputEvent("input", { data: i, bubbles: true }));
      await waitSec(1);
      msgBox.dispatchEvent(keyboardEvent);
    } catch (e) {
      console.log("error ", e);
    }
  }
}
