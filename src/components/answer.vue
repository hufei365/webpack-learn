<template>
    <div class="answer" v-html="answer">{{answer}}</div>
</template>
<script>
export default {
    props: {
        answer: String
    }
}
</script>
