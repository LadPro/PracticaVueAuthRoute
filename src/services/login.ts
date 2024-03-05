import {ref, Ref} from "vue"

class authService {
    private jwt:string
    private message:string
    private status:boolean
    private urlNote
    private urlLogin 
    private urlRegister 
    
    constructor(){
        this.jwt = ""
        this.message = ""
        this.status = false
        this.urlNote = process.env.VUE_APP_URL_NOTES
        this.urlLogin = "http://127.0.0.1:8000/api/auth/login"
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

    async login (email:string, password:string){
        try {
            console.log("http://127.0.0.1:8000/api/auth/login")
            const res = await fetch("http://127.0.0.1:8000/api/auth/login",{
                method: "POST",
                headers:{
                    'Accept': 'application/json',
                    'Content-type': 'application/json'
                },
                body: JSON.stringify({
                    "email": email,
                    "password": password
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
}
export default authService