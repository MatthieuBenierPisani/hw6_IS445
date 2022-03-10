const words = [{
    term: "Procrastination",
    definition: "Avoidance of doing a task that needs to be accomplished"
  }, {
    term: "Tautology",
    definition: "logical argument constructed in such a way that it is logically irrefutable"
  }, {
    term: "Oxymoron",
    definition: "figure of speech that juxtaposes elements that appear to be contradictory"
}];

function addCitations() {
    var tag ="<dl>"

    for (let i = 0; i < words.length; i++) {
      tag = tag + "<strong><dt>" + words[i]["term"] + "</strong></dt>" + "<dd>" + words[i]["definition"] + "</dd>";
    }
    tag += "</dl>";
    document.getElementById("content").innerHTML = tag;
}
