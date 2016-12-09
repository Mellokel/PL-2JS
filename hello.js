var fs = require('fs');
var result2 = [];
fs.readFile("access.log", function(err, data) {
   
	var reg = /\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}/g;
	var reg2 = /\d{1,3}\.\d{1,3}\.\d{1,3}\./g;
	var src = data.toString();
	result = src.match(reg);// ищем полные ip
	
	uniqueArray = result.filter(function(item, pos) {
    return result.indexOf(item) == pos;
}) // уникальные ip
	
	var obj = {};
	
	uniqueArray.forEach(function(item, i, uniqueArray) {
		var mask = item.match(reg2);
		if (!obj[mask]) obj[mask] = []; // если такого свойства у объекта нет - создаем
		
		obj[mask].push(item);
}); // у каждого Ip выделяем маску и по маске записываем элемент в объект
	
	console.log(obj);
	
	
});