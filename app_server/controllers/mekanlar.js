var express = require('express');
var router = express.Router();
const anaSayfa=function(req, res, next)
  {
    res.render('anaSayfa', 
    { 
      "title": 'Ana Sayfa',
      "sayfaBaslik":{
        "siteAd":"MekanBul",
        "slogan":"civardaki mekanları keşfet!",
      },
      "mekan":[
        {
          "name":"Holly Stone",
          "adres":"Isparta Merkez",
          "puan":"4",
          "mesafe":"480m",
          "imkanlar":["Bira","Viski","Jaeger Master"]
        },
        {
          "name":"Sir Winston",
          "adres":"Isparta Merkez",
          "puan":"2",
          "mesafe":"560m",
          "imkanlar":["Bira","Viski","Jaeger Master"]
        },
      ]
    }

    
    
    );
  }
  const mekanBilgisi=function(req, res, next)
  {
    res.render('mekanBilgisi', {
       title: 'Mekan Bilgisi',
       "mekanBaslik":"Holly Stone",
       "mekanDetay":
       {
        "ad":"Holly stone",
        "adres":"Isparta Merkaz",
        "puan":"4",
        "saatler":[
        {
          "gunler":"Pazartesi-Cuma",
          "acilis":"9:00",
          "kapanis":"23:00",
          "kapali":false,
        },
        {
          "gunler":"Pazartesi-Cuma",
          "acilis":"10:00",
          "kapanis":"22:00",
          "kapali":false,
        }
      ],
      "imkanlar":["Bira","Viski","Jaeger Master"],
      "koordinatlar":{
        "enlem":"37.7",
        "boylam":"30.5",
      },
      "yorumlar":[{
        "yorumYapan":"Enderes",
        "puan":"4",
        "tarih":"20 Ekim 2022",
        "yorumMetni":"Eglenceli hahahaha"
      },
      {
        "yorumYapan":"UselessUser0",
        "puan":"1",
        "tarih":"20 Ekim 2022",
        "yorumMetni":"gereksiz"
      },
    ],
       } 
      }
      
      
      
      
      );
  }
  const yorumEkle=function(req, res, next)
  {
    res.render('yorumEkle', { title: 'Yorum ekle' });
  }

  


  module.exports = 
  {
    anaSayfa,mekanBilgisi,yorumEkle
  }