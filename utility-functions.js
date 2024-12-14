// New version of output function
function output(message = "", outputTag = "outputTag", shouldAppend = true) {
  debugger;
  if (shouldAppend !== true || shouldAppend !== false)
    console.warn("shouldAppend must be Boolean");
  if (shouldAppend) window[outputTag].innerHTML += message;
  else window[outputTag].innerHTML = message;
}
