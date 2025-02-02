import { defineStore } from 'pinia'
import type { UserProfile } from '../types/user'
export const useUserStore = defineStore('user', {
    state: () => ({
        isAuthenticated: false,
        userProfile: null as UserProfile | null,
    }),
    actions: {
        async login(name: string, password: string) {
            console.log("login", name, password) // TODO: ログイン処理を実装
            this.isAuthenticated = true
            this.userProfile = { name }
        },
        async logout() {
            this.isAuthenticated = false
            this.userProfile = null
        },
    },
})
