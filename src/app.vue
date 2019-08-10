<template>
<div>Layout

    <div>
        <qbody :body="body"></qbody>
        <qanswer :answer="getAnswer"></qanswer>
        <analysis-a> boook </analysis-a>
    </div>
</div>


</template>


<script>

import Body from './components/body';
import Answer from './components/answer';
import('./components/analysis');


const quizData = {
    body: '<p> This is quiz body</p>',
    answer: ['<p> answer1 </p> ', '<p>answer 2</p>']
}

export default {
    data(){return quizData},
    computed:{
        getAnswer(){
            return this.answer.join('<br/>');
        }
    },

    components: {
        qbody: Body,
        qanswer: Answer
    }
}
</script>

