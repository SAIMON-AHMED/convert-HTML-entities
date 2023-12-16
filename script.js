function convertHTML(str) {

  if (/<>/g.test(str)) {
    return str.replace(/<>/g, "&lt;&gt;")
  }

  if (/&/g.test(str)) {
    return str.replace(/&/g, "&amp;")
  }

  if (/</g.test(str)) {
    return str.replace(/</g, "&lt;")
  }

  if (/>/g.test(str)) {
    return str.replace(/>/g, "&gt;")
  }

  if (/"/g.test(str)) {
    return str.replace(/"/g, "&quot;")
  }

  if (/'/g.test(str)) {
    return str.replace(/'/g, "&apos;")
  }

  return str;
}

console.log(convertHTML("<>"));
