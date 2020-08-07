import axios, { AxiosResponse } from 'axios';
import {
  UserI,
  UserFormValues,
  UserFormValuesLogin,
  UserStatsFormPost,
  UserStats,
  UserStatsDropDowns
} from '../models/user';
import { toast } from 'react-toastify';
import { history } from '../index';
import { DailyMealPlan, MealPreview } from '../models/meals';

axios.defaults.baseURL = 'http://localhost:5000/api';
axios.interceptors.request.use(
  (config) => {
    const token = window.localStorage.getItem('jwt');
    if (token) config.headers.Authorization = `Bearer ${token}`;
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);
axios.interceptors.response.use(undefined, (error) => {
  if (error.message === 'Network Error' && !error.response) {
    toast.error('Network error - make sure API is running!');
    throw error;
  }
  const { status, data, config } = error.response;
  if (status === 404) {
    history.push('/notfound');
  }
  if (
    status === 400 &&
    config.method === 'get' &&
    data.errors.hasOwnProperty('id')
  ) {
    history.push('/NotFound');
  }
  if (status === 500) {
    toast.error('Server error - check the terminal for more info!');
  }
});

const responseBody = (response: AxiosResponse) => response.data;

const requests = {
  get: (url: string) =>
    axios
      .get(url)
      .then(responseBody)
      .catch((err) => err.message),
  post: (url: string, body: {}) => axios.post(url, body).then(responseBody),
  put: (url: string, body: {}) => axios.put(url, body).then(responseBody),
  delete: (url: string) => axios.delete(url).then(responseBody)
};

const User = {
  current: (): Promise<UserI> => requests.get('/users'),
  login: (user: UserFormValuesLogin): Promise<UserI> =>
    requests.post('/users/login', user),
  register: (user: UserFormValues): Promise<UserI> =>
    requests.post('/users/register', user)
};

const UserStat = {
  current: (): Promise<UserStats> => requests.get('/userstats'),
  post: (userStats: UserStatsFormPost): Promise<UserStats> =>
    requests.post('/userstats', userStats),
  dropDowns: (): Promise<UserStatsDropDowns> =>
    requests.get('/userstats/dropdowns')
};

const MealPlan = {
  current: (date: string): Promise<DailyMealPlan> =>
    requests.get(`/dailymealplan/${date}`),
  add: (meal: MealPreview): Promise<null> =>
    requests.post(`/dailymealplan/meals`, meal)
};

export default {
  User,
  UserStat,
  MealPlan
};
