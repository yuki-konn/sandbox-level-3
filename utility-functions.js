// New version of output function
function output(message = "", outputTag = "outputTag", shouldAppend = true) {
  debugger;
  // if (shouldAppend !== true || shouldAppend !== false)
  //   console.warn("shouldAppend must be Boolean");
  if (shouldAppend) window[outputTag].innerHTML += message;
  else window[outputTag].innerHTML = message;
}

function refresh() {
  outputTag.innerHTML = "";
  outputTag1.innerHTML = "";
  outputTag2.innerHTML = "";
  outputTag3.innerHTML = "";
  outputTag4.innerHTML = "";
  outputTag5.innerHTML = "";
}
