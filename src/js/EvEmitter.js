export default function EvEmitter() {}

let proto = EvEmitter.prototype;

proto.on = function (eventName, listener) {
  if (!eventName || !listener) return this;

  // set events hash
  let events = (this._events = this._events || {});
  // set listeners array
  let listeners = (events[eventName] = events[eventName] || []);
  // only add once
  if (!listeners.includes(listener)) {
    listeners.push(listener);
  }

  return this;
};

proto.emitEvent = function (eventName, args) {
  let listeners = this._events && this._events[eventName];
  if (!listeners || !listeners.length) return this;

  // copy over to avoid interference if .off() in listener
  listeners = listeners.slice(0);
  args = args || [];

  for (let listener of listeners) {
    // trigger listener
    listener.apply(this, args);
  }

  return this;
};

proto.allOff = function () {
  delete this._events;
  return this;
};

