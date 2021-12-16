import { Injectable } from '@angular/core';
import { Meta } from '@angular/platform-browser';

@Injectable({
  providedIn: 'root'
})
export class SeoService {

  constructor( private meta: Meta) { }

  generateTags(config: any){

    config = {
      title: "MiCason - micason.mx",
      description: "Portal inmobiliario - micason.mx",
      image: "assets/img/logo-micason.jpeg",
      slug: "",
      ...config
    }

    this.meta.updateTag({name: 'title', content: config.title})
    this.meta.updateTag({name: 'description', content:config.description})
    this.meta.updateTag({name: 'image', content:config.image})

    // // this.meta.updateTag({ name: })

    // this.meta.updateTag({ property: 'og:type', content: 'portal-inmobiliario' })
    // this.meta.updateTag({ property: 'og: site_name', content: 'micason.mx' })
    // this.meta.updateTag({ property: 'og: title', content: config.title })
    // this.meta.updateTag({ property: 'og: description', content: config.description })
    // this.meta.updateTag({ property: 'og: image', content: config.image })
    // this.meta.updateTag({ property: 'og: url', content: `micason.mx/${config.slug}` })
    // // this.meta.updateTag({ property: 'og: url', content: `localhost/${config.slug}` })

  }
}
