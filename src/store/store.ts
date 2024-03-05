import {defineStore} from 'pinia'
import authService from '@/services/login'

export const useNotes = defineStore('notes',{
    state: () => {
        return {
            jwt:"",
            message:"",
            status:false
        }
    },
    actions:{
        async login(email:string, password:string ){
            const service = new authService
            
            await service.login(email, password)
            this.jwt = service.getToken()
            this.message = service.getMessage()
            this.status = service.getStatus()
        }  
    }
})