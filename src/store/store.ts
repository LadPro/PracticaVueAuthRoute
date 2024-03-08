import {defineStore} from 'pinia'
import authService from '@/services/login'

export const useNotes = defineStore('notes',{
    state: () => {
        return {
            jwt:"",
            message:"",
            status:false,
            notas: [""]
        }
    },
    getters:{
        auth: (state)=> state.jwt !== "",
        
    },
    actions:{
        async login(email:string, password:string ){
            const service = new authService
            
            await service.login(email, password)
            this.jwt = service.getToken()
            this.message = service.getMessage()
            this.status = service.getStatus()
        },  
        async register(name:string, email:string, password:string ){
            const service = new authService
            
            await service.register(name, email, password)
            this.jwt = service.getToken()
            this.message = service.getMessage()
            this.status = service.getStatus()
        } , 
        logout(){
            
            this.jwt = ""
            this.message = ""
            this.status = false
        },
        async getNotes(){
            const service = new authService
            const jwtSplited = this.jwt.split("|")

            await service.fetchNotes(jwtSplited[1])
            this.message = service.getMessage()
            this.notas = service.getNotes()

        },
        async postNote(content:string){
            const service = new authService
            // const jwtSplited = this.jwt.split("|")

            await service.postNotes(this.jwt, content)
            this.message = service.getMessage()
            this.notas = service.getNotes()
            
        }

    }
})