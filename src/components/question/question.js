import { Component, h, render } from 'preact';



class Qbody extends Component {
	render({ body }) {
        console.log(body);
		return <div class="quiz-body" dangerouslySetInnerHTML={{ __html: body }}></div>;
	}
}

class Qanswer extends Component {
	constructor() {
		super();
	}
	render({answer}) {
		return <ul class="quiz-answer">
			{
				answer.map(item => {
					return <li> <div dangerouslySetInnerHTML={{ __html: item }}></div>  </li>
				})
			}
		</ul>
	}
}

class QanwerWithRules extends Qanswer{
	constructor(){
		super();
		
	}
	render({answer}){
		return  <div> <Qanswer answer={answer}> </Qanswer></div>
	}
}


class Quiz extends Component {
	constructor(dta) {
        super();
	}
	render() {
		return (
			<div class="wgt-quiz">
				<Qbody  body={this.data.body}/>
                <button onclick={this.toggleViewAnswer}> 查看答案</button>
				<QanwerWithRules answer={this.data.answer}/> 
			</div>
		);
    }
    toggleViewAnswer(...args){
        console.log(this);
    }
}


export  default Quiz