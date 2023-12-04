
class TranslateApi{
    constructor(metinEng){
        this.apiUrl="https://translation.googleapis.com/language/translate/v2";
        this.key="AIzaSyBsLUeni79fnoUDbzzZis04-hsqp5o2nbg"
        this.metinEng=metinEng;

    }
    async metniCevir() {
       try {
            const metin= await axios.get(this.apiUrl,{
                params:{
                    target:'tr',
                    key:this.key,
                    q:this.metinEng,
                }
            });
            return metin.data.data.translations[0].translatedText;
       } catch (error) {
            console.log(error);
       }
    }
}