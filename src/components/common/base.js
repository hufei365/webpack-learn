const url = {
    query: function(key, url){
        if(!key){
            throw('The key can not be empty');
        }
        url = url || window.location.href;

        let reg = new RegExp('\\?[a-zA-Z_\\d=]*&?'+key+'=([a-zA-Z\\d_]+)[a-zA-Z_\\d=]*');

        return reg.exec(url)[1] || '';
        
    }
}

module.exports={
    url: url
}