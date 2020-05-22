import * as axios from "axios";

const instance = axios.create({
    withCredentials: true,
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    headers: {
        "API-KEY": "968ee89b-e4be-47cf-9e8c-efade8706065"
    }
});

export const usersAPI = {
    getUsers(currentPage = 1, pageSize = 10) {
        return instance.get(`users?page=${currentPage}&count=${pageSize}`).then(response => {
            return response.data;
        })
    }
};

export const authAPI = {
    auth() {
        return instance.get(`auth/me`).then(response => {
            return response.data;
        })
    }
};

export const profileAPI = {
  getProfile(id) {
      return instance.get(`profile/${id}`).then(response => {
          return response.data;
      })
  }
};

export const followAPI = {
    follow(id){
        return instance.post(`follow/${id}`, {}).then(response => {
            return response.data.resultCode;
        })
    },
    unfollow(id){
        return instance.delete(`follow/${id}`).then(response => {
            return response.data.resultCode;
        })
    }
};