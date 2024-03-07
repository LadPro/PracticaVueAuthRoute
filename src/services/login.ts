import {ref, Ref} from "vue"
interface error {
    email: [""]
}


class authService {
    private jwt:string
    private message:string
    private status:boolean
    private notas:Ref<Array<string>>
    private urlNote
    private urlLogin 
    private urlRegister 
    
    constructor(){
        this.jwt = ""
        this.message = ""
        this.notas = ref([""])
        this.status = false
        this.urlNote = process.env.VUE_APP_URL_NOTES
        this.urlLogin = process.env.VUE_APP_URL_LOGIN
        this.urlRegister = process.env.VUE_APP_URL_REGISTER
    }

    getToken(){
        return this.jwt
    }

    getMessage(){
        return this.message
    }
    getStatus(){
        return this.status
    }
    getNotes(){
        return this.notas
    }

    async login (email:string, password:string){
        try {
            console.log(process.env.VUE_APP_URL_LOGIN)
            console.log(this.urlLogin)
            const res = await fetch(this.urlLogin,{
                method: "POST",
                headers:{
                    'Accept': 'application/json',
                    'Content-type': 'application/json'
                },
                body: JSON.stringify({
                    email: email,
                    password: password
                })
            })
            const response = await res.json()

            this.message = response.message
            this.jwt = response.token
            this.status = response.status
            
        }
        catch(error:any){
            console.log
            this.message = error
            this.status = false

        }
    }
    async register (name:string, email:string, password:string){
        try {
            const res = await fetch(this.urlRegister,{
                method: "POST",
                headers:{
                    'Accept': 'application/json',
                    'Content-type': 'application/json'
                },
                body: JSON.stringify({
                    email: email,
                    password: password,
                    name: name
                })
            })
            const response = await res.json()

            this.status = response.status
            if ("errors" in response){
                this.message = response.errors.email[0]
            }else{

                this.message = response.message
                this.jwt = response.token
            }
            
        }
        catch(error:any){
            console.log
            this.message = error
            this.status = false

        }
    }
    async postNotes (jwt:string, content:string){
        try {
            const res = await fetch(this.urlNote,{
                method: "POST",
                headers:{
                    'Accept': 'application/json',
                    'Content-type': 'application/json',
                    'Authorization': `Bearer ${jwt}`

                },
                body: JSON.stringify({
                    content: content
                })
            })
            const response = await res.json()

            this.message = response.message
            await this.fetchNotes(jwt)
            
        }
        catch(error:any){
            console.log
            this.message = error
            this.status = false

        }
    }
    async fetchNotes (jwt:string){
        try {
            const res = await fetch(this.urlNote,{
                method: "GET",
                headers:{
                    'Accept': 'application/json',
                    'Content-type': 'application/json',
                    'Authorization': `Bearer ${jwt}`

                },
            })
            const response = await res.json()
            this.notas.value = response
            
        }
        catch(error:any){
            console.log
            this.message = error
            this.status = false

        }
    }
}
export default authService