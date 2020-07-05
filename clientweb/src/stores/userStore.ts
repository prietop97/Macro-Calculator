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

export default class UserStore {
  rootStore: RootStore;
  constructor(rootStore: RootStore) {
    this.rootStore = rootStore;
  }
  @observable user: UserI | null = null;
  @observable userStats: UserStats | null = null;
  @observable dropdowns: UserStatsDropDowns | null = null;
  @observable isLoading = false;

  @computed get isLoggedIn() {
    return !!this.user;
  }
  @computed get finishedRegistration() {
    return this.user?.registrationCompleted;
  }

  @action login = async (values: UserFormValuesLogin) => {
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
  @action register = async (values: UserFormValues) => {
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
  @action postUserStats = async (values: UserStatsFormPost) => {
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
