import {ClickEvent, HoverEvent, LeaveEvent, LoadEvent} from "../EventLogger";

export default {
  methods: {
    logLoad(){
      this.logArticleEvent(new LoadEvent(window.location.href));
    },
    logClick(e){
      this.logArticleEvent(ClickEvent.fromEvent(e));
    },
    logHover(e){
      this.logArticleEvent(HoverEvent.fromEvent(e));
    },
    logLeave(e){
      this.logArticleEvent(LeaveEvent.fromEvent(e));
    },
  }
}
