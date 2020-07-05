import { observable, computed, action, runInAction } from 'mobx';
import {
  UserI,
  UserFormValues,
  UserFormValuesLogin,
  UserStats,
  UserStatsFormPost,
  UserStatsDropDowns
} from '../models/user';
import agent from '../api/agent';
import { RootStore } from './rootStore';
import { history } from '../index';

export default class UserStore {
  rootStore: RootStore;
  constructor(rootStore: RootStore) {
    this.rootStore = rootStore;
  }
  @observable user: UserI | null = null;
  @observable isLoading = false;

  @computed get isLoggedIn() {
    return !!this.user;
  }

  @action login = async (values: UserFormValuesLogin): Promise<void> => {
    try {
      this.isLoading = true;
      const user = await agent.User.login(values);
      runInAction('Logging In', () => {
        this.user = user;
        this.isLoading = false;
      });
      this.rootStore.commonStore.setToken(user.token);
      user.registrationCompleted
        ? history.push('/dashboard')
        : history.push('/getmacros');
    } catch (error) {
      throw error;
    }
  };
  @action logout = (): void => {
    this.rootStore.commonStore.setToken(null);
    this.user = null;
    history.push('/');
  };
  @action register = async (values: UserFormValues): Promise<void> => {
    try {
      this.isLoading = true;
      const user = await agent.User.register(values);
      runInAction('Register', () => {
        this.user = user;
        this.isLoading = false;
      });
      this.rootStore.commonStore.setToken(user.token);
      history.push('/getmacros');
    } catch (error) {
      throw error;
    }
  };
  @action getUserInfo = async (): Promise<void> => {
    try {
      this.isLoading = true;
      const userInfo = await agent.User.current();
      runInAction('Get Current User Info', () => {
        this.user = userInfo;
        this.isLoading = false;
      });
    } catch (error) {
      throw error;
    }
  };
}
