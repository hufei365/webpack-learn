const Tmpl = require('./header.hbs');

class Header{
    constructor($wrap){
        this.$wrap = $wrap;
    }

    render(data){
        this.$wrap.innerHTML = Tmpl(data);
    }
}

module.exports=Header;