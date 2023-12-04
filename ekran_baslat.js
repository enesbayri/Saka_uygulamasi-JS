class Ekran{
    constructor(){
        this.sakaEn="";
        this.sakaTR="";
        this.randomResim="";
        this.sakaGetirBtn=document.getElementById("sakaGetirBtn");
        this.sonucDiv=document.querySelector(".sonuc");
        
        this.sakaGetirBtn.addEventListener("click",this.sakaGetir.bind(this));
    }
    async sakaGetir(){
        const saka=new SakaApi;
        const resim=new RandomResimApi;
        this.randomResim= await resim.randomResimGetir();
        this.sakaEn=await saka.sakayiGetir();
        const metin=new TranslateApi(this.sakaEn);
        this.sakaTR=await metin.metniCevir();
        this.sonucDiv.innerHTML=`
        <div class="card">
                    <div class="card-image">
                      <figure class="image is-16by9">
                        <img src="${this.randomResim}" alt="Placeholder image">
                      </figure>
                    </div>
                    <div class="card-content">
                      <div class="media">
                        <div class="media-content">
                          <p class="title is-4 has-text-danger pb-3">${this.sakaEn}</p>
                        </div>
                      </div>
                  
                  </div>
                  <div class="block"></div>
    
                  <div class="card-content">
                    <div class="media">
                      <div class="media-content">
                        <p class="title is-4 has-text-info pb-3">${this.sakaTR}</p>
                      </div>
                    </div>
                
                </div>
        `

    }
}