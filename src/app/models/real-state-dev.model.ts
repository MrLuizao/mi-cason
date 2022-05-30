export class RealStateDevModel{
    bedrooms!: string;
    cardSubtitle!: string;
    contactPhone!:  string;
    costNew!: number;
    costPrev!:  string;
    description!: string;
    id: any;
    image!: string;
    image2!:  string;
    image3!:  string;
    image4!:  string;
    maxPrice!: string;
    minPrice!:  string;
    mtsGround!:  string;
    mtsInmueble!:  number;
    name!:  string;
    title!:  string;
    ubication!: string;
    zone!: string;
    amenities!: any;
}

export class AmenitiesModel{
    Ecotecnologías!: boolean;
    Alberca?: boolean;
    asadores?: boolean;
    vigilance?: boolean;
    aquaZone?: boolean;
    courts?: boolean;
    gymExterior?: boolean;
    palapa?: boolean;
    steakhouse?: boolean;
    coffeBar?: boolean;
    petZone?: boolean;
    gym?: boolean;
    childArea?: boolean;
    loungeBar?: boolean;
    playroom?: boolean;
    joggin?: boolean;
    greenAreas?: boolean;

    constructor (){
        this.Ecotecnologías = false;
        this.Alberca = false;
        this.asadores = false;
        this.vigilance = false;
        this.aquaZone = false;
        this.courts = false;
        this.gymExterior = false;
        this.palapa = false;
        this.steakhouse = false;
        this.coffeBar = false;
        this.petZone = false;
        this.gym = false;
        this.childArea = false;
        this.loungeBar = false;
        this.playroom = false;
        this.childArea = false;
        this.joggin = false;
        this.greenAreas = false;
    }
}

