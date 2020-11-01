export default {
  created() {
    this.$store.dispatch('getParts');
  },
  computed: {
    parts() {
      return this.$store.state.robots.parts || {
        // if parts null
        heads: [],
        arms: [],
        torsos: [],
        bases: [],
      };
    },
  },
};
