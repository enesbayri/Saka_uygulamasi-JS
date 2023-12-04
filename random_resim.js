
class RandomResimApi{
    constructor(){
        this.apiUrl="https://api.unsplash.com/";
        this.clientId="Client-ID WWWO2MIvPTsBY5DIoH42YWMPGEf1JETMfIOJkaOZMA0"

    }
    async randomResimGetir() {
       try {
            const resim= await axios.get(this.apiUrl+"photos/random",{
                headers:{
                    Authorization:this.clientId
                },
                params:{
                    query:'car'
                }
            });
            return resim.data.urls.regular;
       } catch (error) {
            console.log(error);
       }
    }
}