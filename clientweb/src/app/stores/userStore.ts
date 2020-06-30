import { observable, computed, action, runInAction } from 'mobx';
import {
  IUser,
  IUserFormValues,
  IUserFormValuesLogin,
  IUserStats,
  IUserStatsFormPost,
  IUserStatsDropDowns
} from '../models/user';
import agent from '../api/agent';
import { RootStore } from './rootStore';

export default class UserStore {
  rootStore: RootStore;
  constructor(rootStore: RootStore) {
    this.rootStore = rootStore;
  }
  @observable user: IUser | null = null;
  @observable userStats: IUserStats | null = null;
  @observable dropdowns: IUserStatsDropDowns | null = null;
  @observable isLoading = false;

  @computed get isLoggedIn() {
    return !!this.user;
  }
  @computed get finishedRegistration() {
    return this.user?.registrationCompleted;
  }

  @action login = async (values: IUserFormValuesLogin) => {
    try {
      this.isLoading = true;
      const user = await agent.User.login(values);
      runInAction('Logging In', () => {
        this.user = user;
        this.isLoading = false;
      });
    } catch (error) {
      throw error;
    }
  };
  @action register = async (values: IUserFormValues) => {
    try {
      this.isLoading = true;
      const user = await agent.User.register(values);
      runInAction('Register', () => {
        this.user = user;
        this.isLoading = false;
      });
    } catch (error) {
      throw error;
    }
  };
  @action getUserInfo = async () => {
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
  @action getUserStats = async () => {
    try {
      this.isLoading = true;
      const userStats = await agent.User.getUserStats();
      runInAction('Get UserStats', () => {
        this.userStats = userStats;
        this.isLoading = false;
      });
    } catch (error) {
      throw error;
    }
  };
  @action postUserStats = async (values: IUserStatsFormPost) => {
    try {
      this.isLoading = true;
      const userStats = await agent.User.saveUserStats(values);
      runInAction('Save UserStats', () => {
        this.userStats = userStats;
        this.isLoading = false;
      });
    } catch (error) {
      throw error;
    }
  };
  @action getDropDowns = async () => {
    try {
      this.isLoading = true;
      const dropdowns = await agent.User.dropDowns();
      runInAction('Get Dropdowns', () => {
        this.dropdowns = dropdowns;
        this.isLoading = false;
      });
    } catch (error) {
      throw error;
    }
  };
}
