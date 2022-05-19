import {ScrollEvent} from "@/EventLogger";
import articleLogger from "@/mixins/articleLogger";

export default {
  mounted(){
    let isScrolling;
    let lastScroll = 0;
    document.addEventListener('scroll', this.scrollSpy)
  },
  beforeDestroy() {
    document.removeEventListener('scroll', this.scrollSpy);
  },
  data() {
    return {
      isScrolling: null,
      lastScroll: 0
    }
  },
  mixins: [articleLogger],
  methods: {
    scrollSpy(e){
      window.clearTimeout(this.isScrolling);
      this.isScrolling = setTimeout(()=>{
        const currentScroll = window.scrollY;
        let direction = currentScroll > this.lastScroll? 'down' : 'up';
        this.logArticleEvent(new ScrollEvent(direction, currentScroll))
        this.lastScroll = currentScroll;

      }, 200)
    }
  }
}
