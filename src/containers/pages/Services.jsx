import Footer from "components/navigation/Footer"
import Navbar from "components/navigation/Navbar"
import Header from "components/services/Header"
import ServicesList from "components/services/ServicesList"
import Layout from "hocs/layouts/Layout"
import iconcamera from 'assets/img/services/iconcamera.png'
import { useEffect } from "react"
import {Helmet}from'react-helmet-async'
const posts_design  = [
    {
      title: 'LOGO TIPO',
      img: iconcamera,
      href: '#',
      category: { name: 'Article', href: '#' },
      minidescription: 'É essencial que as empresas apresentem uma marca forte',
      description:'e com personalidade, vindo a ser reconhecidas no mercado, afinal marcas vencedoras não apresentam somente benefícios funcionais, mas também emocionais.',
      date: 'Mar 16, 2020',
      datetime: '2020-03-16',
      imageUrl:
        'https://images.unsplash.com/photo-1496128858413-b36217c2ce36?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1679&q=80',
      readingTime: '6 min',
      author: {
        name: 'Roel Aufderehar',
        href: '#',
        imageUrl:
          'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
      },
    },
    {
      title: 'IDENTIDADE VISUAL',
      href: '#',
      img: iconcamera,
      category: { name: 'Video', href: '#' },
      minidescription: 'A  idealização da identidade visual de uma empresa,',
      description:'A  idealização da identidade visual de uma empresa, está intrinsicamente atrelada aos valores  e ao público que ela almeja , ou seja,  nela está o ponto de partida de todas as informações, valores e personalidade.',
      date: 'Mar 10, 2020',
      datetime: '2020-03-10',
      imageUrl:
        'https://images.unsplash.com/photo-1547586696-ea22b4d4235d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1679&q=80',
      readingTime: '4 min',
      author: {
        name: 'Brenna Goyette',
        href: '#',
        imageUrl:
          'https://images.unsplash.com/photo-1550525811-e5869dd03032?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
      },
    },
    {
      title: 'IMPRESSOS',
      href: '#',
      img: iconcamera,
      category: { name: 'Case Study', href: '#' },
      minidescription:'Ainda hoje, os impressos são o material gráfico de propaganda mais utilizado ',
      description:'Ainda hoje, os impressos são o material gráfico de propaganda mais utilizado para mostrar o seu negócio aos seus clientes. Para maior comodidade.',
      date: 'Feb 12, 2020',
      datetime: '2020-02-12',
      imageUrl:
        'https://images.unsplash.com/photo-1492724441997-5dc865305da7?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1679&q=80',
      readingTime: '11 min',
      author: {
        name: 'Daniela Metz',
        href: '#',
        imageUrl:
          'https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
      },
    },
    {
      title: 'EMBALAGEM',
      href: '#',
      img: iconcamera,
      category: { name: 'Case Study', href: '#' },
      minidescription:'O bom design de embalagem pode garantir uma ótima comunicação com o consumidor',
      description:'informando sobre o produto e seu caráter. É considerada uma poderosa ferramenta de marketing.',
      date: 'Feb 12, 2020',
      datetime: '2020-02-12',
      imageUrl:
        'https://images.unsplash.com/photo-1492724441997-5dc865305da7?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1679&q=80',
      readingTime: '11 min',
      author: {
        name: 'Daniela Metz',
        href: '#',
        imageUrl:
          'https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
      },
    },
    {
      title: 'WEB DESIGN',
      href: '#',
      img: iconcamera,
      category: { name: 'Case Study', href: '#' },
      minidescription:'A internet tem papel determinante no planejamento de comunicação para expandir',
      description:'r sua presença no mercado. Como mídia ou ponto-de-venda, é o meio mais ágil e direto para alcançar o público-alvo.',
      date: 'Feb 12, 2020',
      datetime: '2020-02-12',
      imageUrl:
        'https://images.unsplash.com/photo-1492724441997-5dc865305da7?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1679&q=80',
      readingTime: '11 min',
      author: {
        name: 'Daniela Metz',
        href: '#',
        imageUrl:
          'https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
      },
    },
    {
      title: 'VETORIZAÇÃO',
      href: '#',
      img: iconcamera,
      category: { name: 'Case Study', href: '#' },
      minidescription:'Criação de artes e trabalhos com a qualidade exigida ',
      description:'no mercado atual ou até mesmo uma remodelação de um trabalho mal produzido.',
      date: 'Feb 12, 2020',
      datetime: '2020-02-12',
      imageUrl:
        'https://images.unsplash.com/photo-1492724441997-5dc865305da7?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1679&q=80',
      readingTime: '11 min',
      author: {
        name: 'Daniela Metz',
        href: '#',
        imageUrl:
          'https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
      },
    },
  ]
  


function Services(){
  useEffect(()=>{
      window.scrollTo(0,0)
  },[])
    return(
        <Layout>
          <Helmet>
            <title>Murkiva | Services</title>
            <meta name="description" content="Agencia de software y marketing digital. Servicios de creacion de pagina web y desarrollo de aplicaciones." />
            <meta name="keywords" content='agencia de software, agencia de marketing, creacion de pagina web' />
            <meta name="robots" content='all' />
            <link rel="canonical" href="https://www.murkiva.com/" />
            <meta name="author" content='Murkiva' />
            <meta name="publisher" content='Murkiva' />

            {/* Social Media Tags */}
            <meta property="og:title" content='Murkiva | Software Agency' />
            <meta property="og:description" content='Agencia de software y marketing digital. Servicios de creacion de pagina web y desarrollo de aplicaciones.' />
            <meta property="og:url" content="https://www.murkiva.com/" />
            <meta property="og:image" content='https://bafybeicwrhxloesdlojn3bxyjqnxgsagtd4sl53a7t4cn4vfe2abmybzua.ipfs.w3s.link/lightbnuilbg.jpg' />

            <meta name="twitter:title" content='Murkiva | Software Agency' />
            <meta
                name="twitter:description"
                content='Agencia de software y marketing digital. Servicios de creacion de pagina web y desarrollo de aplicaciones.'
            />
            <meta name="twitter:image" content='https://bafybeicwrhxloesdlojn3bxyjqnxgsagtd4sl53a7t4cn4vfe2abmybzua.ipfs.w3s.link/lightbnuilbg.jpg' />
            <meta name="twitter:card" content="summary_large_image" />
        </Helmet>
            <Navbar/>
            <div className="pt-28 ">
                <Header/>
                <div className="py-12 bg-neon">

                </div>
                <ServicesList posts={posts_design} section_title={'Design Services'}/>
            </div>
                <Footer/>
        </Layout>
    )
}
export default Services