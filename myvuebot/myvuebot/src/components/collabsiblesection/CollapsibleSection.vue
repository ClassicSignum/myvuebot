<template>
    <div>
        <div class="header">
            <span v-if="open" @click="open = !open">&#x25B2;
                Collapse
            </span>
            <span v-if="!open" @click="open = !open">&#x25B2;
                Expand
            </span>
        </div>
        <slot v-if="open"></slot>
    </div>
</template>

<script>
export default {
  name: 'CollapsibleSelection',
  data() {
    return {
      open: true,
    };
  },
};
</script>

<style lang="scss">

.header{
    background-color: #bbb;
    padding: 3px;
    cursor: pointer;
}

</style>
