require('./blog.scss');


const _ = require('../../components/common/base.js');

let pageBtns = document.querySelectorAll('.page-wrap .page');


Array.prototype.map.apply(pageBtns, [function(ele){
    ele.addEventListener('click', (e)=>{
    
    
        let value = parseInt(ele.getAttribute('value'));
    
        let curpage = /(\d+)$/.exec(location.href) ;
    
        let newpage = parseInt((curpage ? curpage[1] : 1)) + value;
    
        if(newpage < 1){
            newpage = 1;
        }
    
        window.location.href = curpage ? location.href.replace(/\d+$/, newpage) : location.href + '/1';
    
    })
}]);