import {configure} from 'mobx';
import Notify from '../stores/Notify';
import Auth from '../stores/Session/Auth/AuthStore';

configure({enforceActions: 'observed'});

export default function configureStore() {
  const NotifyStore = new Notify();
  const AuthStore = new Auth();

  return {
    stores: {
      NotifyStore,
      AuthStore
    }
  };
}
