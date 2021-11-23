import {observable, action, makeObservable} from 'mobx';

class NotifyStore {
  @observable notifications = [];
  @observable notificationsToClose = [];
  notificationsContent = {};

  @action notify = (note, key) => {
    if (this.includesNote(note)) {
      return;
    }

    const newKey = new Date().getTime() + Math.random();

    this.notificationsContent[key || newKey] = note;
    this.notifications.push(key || newKey);
  }

  @action removeFromNotificationList = (key) => {
    this.notifications.remove(key);
    delete this.notificationsContent[key];
  }

  @action closeNotify = (key) => {
    this.notificationsToClose.push(key);
  }

  @action removeFromCloseList = (key) => {
    this.notificationsToClose.remove(key);
  }

  includesNote = (note) =>
    Object.keys(this.notificationsContent).some((notificationKey) =>
      this.notificationsContent[notificationKey].message === note.message);

  constructor() {
    makeObservable(this);

    window.notify = (...args) => {
      this.notify(...args);
    };

    window.cancelNotify = (...args) => {
      this.closeNotify(...args);
    };
  }
}

export default NotifyStore;
