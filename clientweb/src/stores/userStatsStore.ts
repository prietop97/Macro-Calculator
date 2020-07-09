import { observable, action, runInAction, computed } from 'mobx';
import {
  UserStats,
  UserStatsFormPost,
  UserStatsDropDowns
} from '../models/user';
import agent from '../api/agent';
import { RootStore } from './rootStore';
import { history } from '../index';

export default class UserStatsStore {
  rootStore: RootStore;
  constructor(rootStore: RootStore) {
    this.rootStore = rootStore;
  }
  @observable userStats: UserStats | null = null;
  @observable dropdowns: UserStatsDropDowns | null = null;
  @observable isLoading = false;

  @computed get calories() {
    if (this.userStats) {
      return (
        (this.userStats?.carbsGrams + this.userStats?.proteinGrams) * 4 +
        this.userStats?.fatGrams * 9
      );
    }
    return 0;
  }

  @action getUserStats = async (): Promise<void> => {
    try {
      this.isLoading = true;
      const userStats = await agent.UserStat.current();
      runInAction('Get UserStats', () => {
        this.userStats = userStats;
        this.isLoading = false;
      });
      if (!userStats) history.push('/getmacros');
    } catch (error) {
      throw error;
    }
  };
  @action postUserStats = async (values: UserStatsFormPost): Promise<void> => {
    try {
      this.isLoading = true;
      const userStats = await agent.UserStat.post(values);
      runInAction('Save UserStats', () => {
        this.userStats = userStats;
        this.isLoading = false;
      });
      history.push('/dashboard');
    } catch (error) {
      throw error;
    }
  };
  @action getDropDowns = async (): Promise<void> => {
    try {
      this.isLoading = true;
      const dropdowns = await agent.UserStat.dropDowns();
      runInAction('Get Dropdowns', () => {
        this.dropdowns = dropdowns;
        this.isLoading = false;
      });
    } catch (error) {
      throw error;
    }
  };
}
