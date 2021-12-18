import { Injectable } from '@angular/core';
import { Meta } from '@angular/platform-browser';

@Injectable({
  providedIn: 'root'
})
export class SeoService {

  constructor( private meta: Meta) { }

  generateTags(config: any){

    config = {
      title: "MiCason micason.mx",
      description: "Portal inmobiliario micason.mx",
      slogan: "Gestión Inmediata micason.mx",
      description2: "Somos un portal inmobiliario que gestiona de manera inmediata los créditos de tipo social así como créditos Bancarios. En MiCason apoyamos a encontrar el mejor desarrollo inmobiliario con la mejor plusvalía ajustándonos al presupuesto de cada cliente. - micason.mx",
      description3: "Creamos un puente entre el desarrollador y el cliente con atención personalizada, la mejor asesoría de manera segura e inmediata te sugerimos siempre la mejor tasa del mercado en cuanto a créditos. - micason.mx",
      keywordsPositive: "micason.mx Portal Inmobiliari Agencia Inmobiliaria Gestión inmobiliaria Gestión de créditos inmobiliarios Asesoría inmobiliaria Asesoría en la gestión inmobiliaria Gestor Asesor de créditos social Créditos inmobiliarios Créditos sociales Créditos bancarios Inmobiliaria Portal Agencia Apoyo con créditos Casas nuevas Gestión de crédito para casas nuevas Desarrollos inmobiliarios Departamentos nuevos Casas en Morelos Casas en Ciudad de México Casas nuevas en Estado de México Desarrollos inmobiliarios exclusivosDesarrollos inmobiliarios al alcance de tu crédito Plusvalía en desarrollos inmobiliarios CDMX Plusvalía en desarrollos inmobiliarios Morelos Plusvalía en desarrollos inmobiliarios Edo. Mex. Preventas en desarrollos Inmobiliarios Diseños exclusivos Inmobiliarios CDMX Departamentos nuevos en preventa Inmobiliario Futuro Futuro patrimonio Patrimonio Primera inversión Inversión inmobiliaria Portal Inmobiliario Casas en venta Patrimonio familiar Financiamiento inmobiliario Mercado de vivienda Viviendas Inmuebles Compra de inmuebles Crédito familiar Mercado abierto inmobiliario Mercado inmobiliario Agencias inmobiliarias Casas Casas de descanso nuevas Casas foráneas Casas para vacacionar Casas para vivir mejor Fraccionamiento fin de semana Fraccionamiento con alberca Casas iluminadas Casas lindas Casas bellas con jardín Casas con jardínCasas con mucha luz Nuevas casas construidas en Morelos Nuevas casas construidas en CDMX Nuevas casas construidas en Estado de México La casa de tu sueños Las casas de tus sueños Nueva casa de tu sueños Encuentra tu casa Empresa Inmobiliaria",
      keywordsNegative: "micason.mx mi cason cason cazon mi cazon calzon picazon Desarrollos baratos ",

      image: "assets/img/logo-micason.jpeg",
      slug: "",
      ...config
    }

    this.meta.updateTag({name: 'title', content: config.title})
    this.meta.updateTag({name: 'description', content:config.description})
    this.meta.updateTag({name: 'slogan', content:config.slogan})
    this.meta.updateTag({name: 'description2', content:config.description2})
    this.meta.updateTag({name: 'description3', content:config.description3})
    this.meta.updateTag({name: 'positives', content:config.keywordsPositive})
    this.meta.updateTag({name: 'negatives', content:config.keywordsNegative})

    this.meta.updateTag({name: 'image', content:config.image})

  }
}
