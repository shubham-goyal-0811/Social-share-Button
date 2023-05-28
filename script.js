let sg = document.getElementById('fb');
sg.onclick = function() {
  let postUrl = encodeURI(document.location.href); 
  window.open(`https://www.facebook.com/sharer.php?u=${postUrl}`, 'targetWindow',`toobar=no,location=no,status=no,menubar=no,scrollbars=yes,resizeable=yes,width=SomeSize,height=SomeSize`);
};

let t = document.getElementById('tw');
t.onclick = function() {
  let postUrl = encodeURI(document.location.href); 
  let postTitle = encodeURI("Hi everyone, please check this out: ");
  window.open(`https://twitter.com/share?url=${postUrl}&text=${postTitle}`,'targetWindow',`toobar=no,location=no,status=no,menubar=no,scrollbars=yes,resizeable=yes,width=SomeSize,height=SomeSize`);
};

let lin = document.getElementById('siddham');
lin.onclick = function() {
  let postUrl = encodeURI(document.location.href); 
  let postTitle = encodeURI("Hi everyone, please check this out: ");
  window.open(`https://www.linkedin.com/shareArticle?url=${postUrl}&title=${postTitle}`,'targetWindow',`toobar=no,location=no,status=no,menubar=no,scrollbars=yes,resizeable=yes,width=SomeSize,height=SomeSize`);
};
let wp = document.getElementById('shubham');
wp.onclick = function() {
  let postUrl = encodeURI(document.location.href); 
  let postTitle = encodeURI("Hi everyone, please check this out: ");
  window.open(`https://wa.me/?text=${postTitle} ${postUrl}`,'targetWindow',`toobar=no,location=no,status=no,menubar=no,scrollbars=yes,resizeable=yes,width=SomeSize,height=SomeSize`);
};
document.addEventListener("DOMContentLoaded", function() {
  var ser = document.getElementById("sear11");
  ser.onclick = function search() {
    var query = document.getElementById("search-input").value;
    window.location.href = "https://sanji.to/search?keyword=" + encodeURIComponent(query);
  };
});

