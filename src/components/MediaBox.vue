<template>
    <div>
        <UserAvatar/>
        <slot name="heading"></slot>
        <slot name="paragraph"></slot>
    </div>
</template>

<script>
    export default {
        name: "media-box"
    }
</script>

<style scoped>

</style>