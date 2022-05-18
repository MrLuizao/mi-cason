import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DataBehaviorService } from 'src/app/services/data-behavior.service';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.css']
})
export class BlogComponent implements OnInit {

  blogList: any;

  constructor(  private route: Router, private behaviourSrv: DataBehaviorService ) { window.scrollTo(0,0) }
  
  ngOnInit(): void {
    this.blogList = [
      {
        // id: new Date().getTime(),
        id: 'blog-1',
        title: '¿Qué es un crédito hipotecario?',
        titleLarge: '¿Qué es un crédito hipotecario?',
        subtitle: 'Los créditos hipotecarios son préstamos para comprar una casa.',
        textBody: 'Los créditos hipotecarios son préstamos para comprar una casa. Estos préstamos pueden ser a corto, mediano o largo plazo. El plazo en el que podrás pagar los préstamos para comprar una casa dependerán mucho del valor de la propiedad, los intereses, el enganche, la cantidad que puedas aportar de forma mensual y sobre todo del tipo de crédito que hayas solicitado. MiCason cuenta con los asesores más expertos en el tema del tipo de crédito que tu necesitas.',
        image:'assets/img/blog/blog-1.png',
        author: 'Dr. Cason',
        link:''
      },
      {
        id: 'blog-2',
        title: '¿Qué es el Fovissste?',
        titleLarge: '¿Qué es el Fovissste y qué tipos de crédito ofrece?',
        subtitle: 'El Fondo de la Vivienda del Instituto de Seguridad y Servicios Sociales de los Trabajadores del Estado (Fovissste)',
        textBody: 'El Fondo de la Vivienda del Instituto de Seguridad y Servicios Sociales de los Trabajadores del Estado (Fovissste), es una entidad que tiene el objetivo de otorgar créditos para comprar una casa a las personas que laboran en una institución pública o gubernamental. Así pues, es muy posible que, si estás interesado en adquirir una vivienda y trabajas en un organismo estatal, es una buena opción considerar al Fovissste para obtener financiación. Por tal motivo, es importante que conozcas más a fondo el organismo y cuáles son las modalidades de crédito que proporciona.',
        image:'assets/img/blog/blog-2.png',
        author: 'Dr. Cason',
        link:''
      },
      {
        id: 'blog-3',
        title: 'Crédito Fovissste',
        titleLarge: 'Crédito Fovissste',
        subtitle: 'Es el préstamo que se otorga a través de Sistema de Puntaje, al que se pueden inscribir los trabajadores en activo, de base, confianza y eventuales al servicio de Entidades Públicas del Estado y que aporten al FOVISSSTE.',
        textBody: 'Es el préstamo que se otorga a través de Sistema de Puntaje, al que se pueden inscribir los trabajadores en activo, de base, confianza y eventuales al servicio de Entidades Públicas del Estado y que aporten al FOVISSSTE.Para participar los derechohabientes deben tener mínimo 18 meses de aportaciones a la Subcuenta de Vivienda del SAR, ser la primera vez que ejercerán un préstamo del FOVISSSTE y no haber iniciado un trámite de pensión. Te prestan hasta $1,051,764; el monto exacto dependerá de tu salario básico mensual. El pago del crédito equivale al 30% del sueldo básico quincenal a través de nómina. Las tasas de interés aplicables van del 4% al 6%. El saldo del crédito se actualizará conforme a los aumentos a la Unidad de Medida y Actualización (UMA).',
        image:'assets/img/blog/blog-3.png',
        author: 'Dr. Cason',
        link:''
      },

    ]
  }

  goDetailBlog( param: any ){
    this.behaviourSrv.setItemBlog(param)
    
    this.route.navigateByUrl('blog-detail')
  }


}
