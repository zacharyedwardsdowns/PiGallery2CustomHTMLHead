function newObserver(selector, callback) {
  return new MutationObserver(function (mutations, mutationInstance) {
    const element = document.querySelector(selector);
    if (element) {
      callback(element);
    }
  });
}

function callback(element) {
  element.setAttribute("loop", "");
}

const observer = newObserver("video", callback);

function observe() {
  observer.observe(document, {
    childList: true,
    subtree: true,
  });
}

observe();
