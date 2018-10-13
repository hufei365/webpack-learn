const xhr = new XMLHttpRequest();



module.exports={
    get: function(url, params, success, error){
        

        let query = [];
        for(let k in params){
            query.push(k + '=' + params[k])
        }
        if(query.length){
            url = url + '?' + query.join('&');
        }
        xhr.open('GET', url);
        xhr.send();
        xhr.onreadystatechange=function(){
            if (xhr.readyState==4 && xhr.status==200) {
                success(JSON.parse(xhr.responseText));
            } else {
                
            }
        }
    }
}