import { Injectable } from '@angular/core';
import {Product} from '../models/product';
@Injectable({
  providedIn: 'root'
})
export class ProductService {
  products:Product[] = [{
    id:"1",
    category:["phone"],
    name:"PlayStation VR + Caméra Sony",
    description:"Écran : OLED / Taille de l'écran : 5,7 pouces / Résolution : 1920 x RGB x 1080 (960 x RGB x 1080) / Taux de rafraichissement : 120 Hz, 90 Hz / Champ de vision : environ 100 degrés / Microphone : intégré / Capteurs : accéléromètre, gyroscope / Connexion : HDMI, USB / Garantie: 1 an",
    img:"https://www.zoom.com.tn/21518-thickbox_default/playstation-vr-camera-sony.jpg",
    price:1499
  },{
    id:"2",
    category:["phone"],
    name:"PC Portable MSI GF63 THIN 9RCX-678XFR - i5 9é Gèn - 8Go - 1To - Geforce GTX4Go - Noir",
    description:"Processeur: Intel Core i5-9300H, 4.1Ghz, 8Mo de cache / Mémoire: 8Go DDR4 (2667 MHz) / Disque dur : 1To HDD / Carte graphique: Nvidia Geforce® GTX 1050Ti, 4GB GDDR5 / Ecran: 15.6  FHD (1920x1080), anti-glare IPS Level / WiFi / Bluetooth / USB3.1 Type-C / USB 3.0 / Ethernet / HDMI / Port Jack / Backlit Keyboard / FreeDos / Garantie 2 ans",
    img:"https://www.zoom.com.tn/30530-thickbox_default/pc-portable-msi-gf63-thin-9rcx-i5-9e-gen-8go-1to-geforce-gtx4go-noir.jpg",
    price:2499
  },
  {
    id:"3",
    name:"Ecran HP 22f 22 Full HD - HDMI - VGA",
    category:["phone"],
    description:"21.5 pouces / Résolution : 1 920 x 1 080 / Luminosité (max) : 300 cd/m² / Rapport de contraste: 10000000:1 (dynamique) / Angle de vue : Horizontal 178°, vertical 178° / Temps de réponse : 5ms (gris à gris) / 1 x VGA / 1 x HDMI / Garantie: 1 an",
    img:"https://www.zoom.com.tn/25725-thickbox_default/ecran-hp-22f-22-full-hd-hdmi-vga.jpg",
    price:2199
  },
  {
    id:"4",

    name:"PC Portable Gaming ASUS TUF505DD-NR308T - R5-3550H - 8Go - 512SSD - Nvidia GTX 3Go",
    category:["phone"],
    description:"Processeur : AMD Ryzen5 3550H up to 3,7GHz, 4Mb cache L3, 4 Coeurs, 8Threads / RAM : 8Go DDR4 2400Mhz / Disque dur : SSD 512Go/M2.0(Micron 2200 SSD), Emplacement HDD / Carte graphique : Nvidia GeForce GTX 1050 - 3Go GDDR5 / Ecran 15.6 Led-backlit FHD (1920x1080), 60hz-Antiglare , IPS / Wifi / Bluetooth / USB 2.0 / USB 3.2(Gen1) / HDMI / Ethernet / Windows 10 famille langue unique 64bits / Keyboard Aura RGB / Garantie 2 ans + Asus Mouse & Sac à Dos",
    img:"https://www.zoom.com.tn/30525-thickbox_default/pc-portable-gaming-asus-tuf505dd-nr308t-r5-3550h-8go-512ssd-nvidia-gtx-3go.jpg",
    price:1200
  },
  {
    id:"5",
    name:"Smartphone Samsung Galaxy A80 - 128 Go - 6.7 - Double SIM - Gold +Power Bank 10000 mAh Offert",
    category:["computer"],
    description:"Processeur : Qualcomm Snapdragon 7150 Octo-Core 2.2GHz / RAM : 8Go / Capacité : 128 Go extensible à 512 Go via Micro SD / Ecran 6.7 pouces HFD+ Super AMOLED  / Résolution : 1080x2400 px / Appareils photo : Triple capteur rotatif 48MP + 8 MP + HQVGA Ouverture : f2.0 , f2.2 , f1.2 / Wi-Fi / Bluetooth / 4G / GPS / Android 9.0 Pie / Batterie 3700 mAh / Dual SIM / Garantie 1 an + Power Bank 10000 mAh Offert",
    img:"https://www.zoom.com.tn/28017-thickbox_default/smartphone-samsung-galaxy-a80-128-go-67-double-sim-gold-power-bank-10000-mah-offert.jpg",
    price:2500
    },
    {
      id:"6",
      name:"iMac Retina 4K 21.5 - Core i5 3.4GHz - 1To",
      category:["computer"],
      description:"Processeur : Intel Core i5 Quadricoeur 3.4 ~ 3.8 GHz / Mémoire : 8GB DDR4 / Disque dur : 1TB Fusion Drive / Carte graphique : Radeon Pro 560 avec 4 Go de VRAM / Écran : 21.5 Retina 4K (4 096 x 2 304) / Caméra FaceTime HD / Wi-Fi / Bluetooth / Clavier et souris Apple sans-fil / macOS High Sierra / Garantie 1 an",
      img:"https://www.zoom.com.tn/21161-thickbox_default/apple-imac-retina-4k-21-5-pouces-core-i5-3-4ghz-1to.jpg",
      price:5699
      },
      {
        id:"7",
        name:"Clavier gamer REDRAGON k506 Centaur",
        category:["computer"],
        description:"Clavier Gamer REDRAGON K506 Centaur / Connectivité: Filaire / Clavier mécanique QWERTY de 104 touches rétroéclairées / Type de clavier: Membrane / Type de commutateur: Mem-Chanical / Touches Macro: Non / Verrouillage Touche Windows: Oui / Rétro-éclairé: Oui, RGB 7 couleurs / Câble: caoutchouc renforcé. Prend en charge 12 kg et 10000 pompes. / Matrice: 100% anti-fantômes avec basculement à 26 touches / Construction: plastique ABS renforcé / Anti-éclaboussures: Oui / Poids: 1.1 kg / Dimensions: 44.5 × 16.5 × 3.7cm",
        img:"https://www.zoom.com.tn/29881-thickbox_default/clavier-gamer-redragon-k506-centaur.jpg",
        price:65
        },
        {
          id:"8",
          name:"Souris Razer Lancehead Tournament Edition",
          category:["computer"],
          description:"Véritable capteur optique 16 000 DPI 5G / Accélération: jusqu'à 1143cm/sec 50G / Réglage de la sensibilité à la volée / Boutons mécaniques de souris Razer / Roulette de la souris tactile conçue pour le jeu / Conception ambidextre avec prises latérales caoutchoutées / Neuf boutons Hyperesponse indépendamment programmables Ultrapolling 1 000Hz / Compatible avec Razer Synapse 3(Bêta) activé (à venir)",
          img:"https://www.zoom.com.tn/8202-thickbox_default/souris-razer-lancehead-tournament-edition.jpg",
          price:285
          }



];
  constructor() { }
  getProductById(id:string){
    return this.products.find(prod => prod.id==id);
  }
  getProducts(){

    return this.products;

  }
  getProductByCategory(category:string){
    // TODO check if indexOf return -1 if false
    return this.products.filter(product => (product.category.indexOf(category) != -1));
  }
  getByFilter(filter:string){
    return this.products.filter(product => (product.category.indexOf(filter) != -1) || (product.description.indexOf(filter)!= -1) || (product.name.indexOf(filter)!= -1) );
  }
  addProduct(product:Product){
    // Add the f uuid to generate an id 
    this.products.push(product)
  }
  deleteProduct(id:string){
    this.products.filter(product => product.id != id );
  }
}
