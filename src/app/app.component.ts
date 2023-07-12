import { Component } from '@angular/core';
import { News } from "./models/News";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  title = 'blog-with-angular';

  newTitle: string = "";
  newDate: string = "";
  newImage: string = "";
  newContent: string = "";

  allNews: News[] = [];

  constructor() {
    this.allNews.push({
      title: "Monos astronautas se toman selfies en la Luna mientras comen pizza intergaláctica",
      date: "2022-05-12",
      image: "https://www.clarin.com/img/2014/08/19/SJQFecnQl_1256x620.jpg",
      content: `La NASA ha anunciado el descubrimiento de selfies tomados por monos astronautas en la Luna. Las imágenes muestran a los monos, llamados Bananas y Bubbles, saltando en gravedad reducida mientras disfrutan de una pizza flotante. Los científicos se sorprendieron al encontrar las fotos, ya que los monos fueron enviados como parte de un experimento secreto para estudiar los efectos de la ingravidez en los primates. Las imágenes se volvieron virales en las redes sociales en minutos, inspirando una nueva tendencia de "selfies espaciales". La NASA aclaró que las fotos fueron creadas por artistas digitales, pero la gente sigue divirtiéndose con la idea de monos espaciales y pizzas flotantes. Aunque la historia es falsa, no se descarta la posibilidad de enviar monos astronautas en el futuro. Los científicos continúan sus investigaciones en la exploración espacial, esperando que un día las imágenes surrealistas se conviertan en realidad.`
    });

    this.allNews.push({
      title: "Descubren población de unicornios en el Polo Norte: ¡El lugar más mágico del planeta!",
      date: "2023-03-20",
      image: "https://mymodernmet.com/wp/wp-content/uploads/2020/01/how-to-draw-a-unicorn-1.jpg",
      content: `En un acontecimiento que ha dejado perplejos a científicos y amantes de la fantasía por igual, un equipo de exploradores afirma haber descubierto una próspera población de unicornios en el Polo Norte. Este extraordinario hallazgo, realizado durante una expedición científica, ha dejado sin palabras a los expertos y ha dado lugar a un sinfín de especulaciones sobre cómo estas mágicas criaturas han llegado hasta allí.
      El equipo de investigación, liderado por el renombrado científico Dr. Cornelius Fictitious, partió en una aventura épica en busca de fenómenos sobrenaturales en las regiones polares. Su objetivo principal era estudiar los efectos del cambio climático en los ecosistemas árticos, pero nunca esperaron encontrarse con una sorpresa de tal magnitud.
      Según el Dr. Fictitious, mientras realizaban mediciones de temperatura y recogían muestras de hielo, divisaron a lo lejos una manada de criaturas majestuosas de colores vibrantes. Al acercarse con cautela, quedaron atónitos al darse cuenta de que no eran solo caballos corrientes, ¡eran unicornios!`
    });

    this.orderNews();
  }

  orderNews() {
    this.allNews = this.allNews.sort((first_news, second_news) => {
      return Date.parse(second_news.date) - Date.parse(first_news.date);
    });
  }

  verifyNews(news: News): boolean {

    const already_exist = this.allNews.find(old_news => old_news.title === news.title.trim());

    if (already_exist) {
      alert("¡Este titulo ya lo usaste en una noticia anterior!");
      return false;
    }

    if (news.title.trim() === "") {
      alert("¡El titulo esta vacio!");
      return false;
    }

    if (news.title.trim().length < 5) {
      alert("¡El titulo debe ser más largo!");
      return false;
    }

    if (news.date === "") {
      alert("¡Tu noticia debe tener una fecha!");
      return false;
    }

    if (!news.image.includes("http") || !news.image.includes("://")) {
      alert("¡La imagen debe ser un link valido!");
      return false;
    }

    if (news.content.length === 0 || news.content.length < 15) {
      alert("¡El contenido de tu noticia no supera los 15 caracteres!");
      return false;
    }

    return true;

  }

  saveNews() {

    const new_notice: News = {
      title: this.newTitle,
      date: this.newDate,
      image: this.newImage,
      content: this.newContent
    }

    if (this.verifyNews(new_notice)) this.allNews.push(new_notice);

    this.orderNews();
  }
}
