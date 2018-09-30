module.exports = function check(str, bracketsConfig) {
  // your solution
  var arr = [];
  var open = [];
  var close = [];

  function openBracket (char){
  	return open.indexOf(char) >= 0;
  }

  function closeBracket (char){
  	return close.indexOf(char) >= 0;
  }
  
  function peek(){
  	return arr[arr.length - 1];
  }

  for (var i = 0; i < bracketsConfig.length; i++ ){
  	open.push(bracketsConfig[i][0]);
  	close.push(bracketsConfig[i][1]);
  }

  for (var i = 0; i < str.length; i++){
  	var char = str[i];

  	if(openBracket(char) && closeBracket(char)){
  		if (peek() === char){
  			arr.pop();
  		}
  		else{
  			arr.push(char);
  		}

  	}
  	else if (openBracket(char)){
  		arr.push(char);
  	}
  	else if (closeBracket(char)){
  		if (peek() === open[close.indexOf(char)]) {
                arr.pop();
            } else {
                return false;
            }
        } else{
        	return false;
        }
  }
  	return arr.length === 0;

}
