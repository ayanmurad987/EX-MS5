var 

tabChange = (tag, idName) => {
 console.log("tabChange---", tag, idName);
 tag.id = idName;
 var _body = document.getElementsByClassName('body');
 console.log(_body)
 _body.id = idName;

}