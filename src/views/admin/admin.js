

require('./admin.scss');

const PREFIX = '/mo1989'

const Ajax = require('../../components/common/ajax/ajax.js');

let params = {
    page: 1
}

function list(params){
    Ajax.get(PREFIX + '/list', params, (data)=>{
        console.log(data);
    
        let list = data.list;
    
        let tbody = '';
        for(let i = 0; i < data.list.length; i++){
            let blog = data.list[i];
            tbody += `<tr><td>${blog.title}</td><td> <a href="javascript:void(0);" class="cur-pointer view-detail">detail</a></td></tr>`
        }
    
        document.getElementById('tbody').innerHTML = tbody;
    });
}




const _ = require('../../components/common/base.js');

let pageBtns = document.querySelectorAll('.page-wrap .page');


Array.prototype.map.apply(pageBtns, [function(ele){
    ele.addEventListener('click', (e)=>{
    
    
        let value = parseInt(ele.getAttribute('value'));
    
        let newpage = params.page + value;
    
        if(newpage < 1){
            newpage = 1;
        }
    
        params.page = newpage;

        list(params);
    })
}]);

list(params);


function viewDetail(id){
    Ajax.get(PREFIX + '/detail/' + id, {}, function(){
        
    })
}