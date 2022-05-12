import dayjs from "dayjs";
import duration from "dayjs/plugin/duration";
dayjs.extend(duration);

const EVENT_TYPE = {
  CLICK: 'click',
  MOUSE_MOVE: 'mouse-move',
  SCROLL: 'scroll',
  HOVER: 'hover',
  LEAVE: 'leave',
  READ: 'read',
  LOAD: 'load',
};

class Event {
  constructor(type){
    this.type = type;
    this.description = null;
    this.timestamp = Date.now();
  }

  constructSerializedObject(){
    return {
      type: this.type,
      timestamp: this.timestamp,
      description: this.description
    }
  }

  serialize(){
    return JSON.stringify(this.constructSerializedObject());
  }

  toString(){
    this.serialize();
  }

}

export class LoadEvent extends Event {
  constructor(){
    super(EVENT_TYPE.LOAD);
    this.description = 'Loaded page';
  }
}

export class ElementInteraction extends Event {
  constructor (type, targetId, targetDescription, verb){
    super(type);
    this.targetId = targetId;
    this.targetDescription = targetDescription;
    this.description = `${verb} ${targetDescription}`;
  }

  constructSerializedObject(){
    const obj = super.constructSerializedObject();
    obj.targetId = this.targetId;
    obj.targetDescription = this.targetDescription;

    return obj;
  }
}

const targetElementDescriptionFromEvent = (e) => {
  const innerText = e.target.innerText;
  return e.target.getAttribute('alt') || innerText.length > 25 ? `${innerText.substr(0,25)}...` : innerText;
}

export class ClickEvent extends ElementInteraction {
  static fromEvent(e){
    const id = e.target.id;
    let description =  targetElementDescriptionFromEvent(e);
    return new ClickEvent(id, description);
  }


  constructor(targetId, targetDescription){
    super(EVENT_TYPE.CLICK, targetId, targetDescription, 'Clicked');
  }
}

export class HoverEvent extends ElementInteraction {
  static fromEvent(e){
    const id = e.target.id;
    let description =  targetElementDescriptionFromEvent(e);
    return new HoverEvent(id, description);
  }


  constructor(targetId, targetDescription){
    super(EVENT_TYPE.HOVER, targetId, targetDescription, 'Moved mouse over');
  }
}

export class LeaveEvent extends ElementInteraction {
  static fromEvent(e){
    const id = e.target.id;
    let description =  targetElementDescriptionFromEvent(e);
    return new LeaveEvent(id, description);
  }

  constructor(targetId, targetDescription){
    super(EVENT_TYPE.LEAVE, targetId, targetDescription, 'Moved mouse away from');
  }
}

export class MouseMoveEvent extends Event {

  static fromEvent(e){
    return new MouseMoveEvent(e.x, e.y);
  }

  constructor(x, y){
    super(EVENT_TYPE.MOUSE_MOVE);
    this.x = x;
    this.y = y;
    this.description = `Moved mouse to  (${this.x}, ${this.y})`

  }

  constructSerializedObject(){
    const obj = super.constructSerializedObject();
    obj.x = this.x;
    obj.y = this.y;

    return obj;
  }

}

export class ScrollEvent extends Event {
  constructor(direction, position){
    super(EVENT_TYPE.SCROLL);
    this.direction = direction;
    this.position = position;
    this.description = `Scrolled ${direction} to ${position}`;
  }

  constructSerializedObject() {
    const obj = super.constructSerializedObject();
    obj.direction = this.direction;
    obj.position = this.position;

    return obj;
  }
}


export class ReadArticleEvent extends Event {
  constructor(title, time){
    super(EVENT_TYPE.READ);
    this.title = title;
    this.time = time;

    const duration = dayjs.duration(this.time, 'milliseconds').format('mm:ss');

    this.description = `Read ${title} for ${duration}`;
  }

  constructSerializedObject() {
    const obj = super.constructSerializedObject();
    obj.title = this.title;
    obj.time = this.time;

    return obj;
  }

}
