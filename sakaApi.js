
class SakaApi{
    constructor(){
        this.apiUrl="https://api.chucknorris.io/";

    }
    async sakayiGetir() {
       try {
            const sakam= await axios.get(this.apiUrl+"/jokes/random");
            return sakam.data.value;
       } catch (error) {
            console.log(error);
       }
    }
}