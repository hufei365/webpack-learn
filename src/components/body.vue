<template>
    <div class="body" v-html="body"> {{body}}</div>
</template>

<script>



export default {
    props: {
        body: String
    }
}
</script>

