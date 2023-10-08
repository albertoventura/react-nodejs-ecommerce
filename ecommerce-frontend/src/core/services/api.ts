import axios from "axios";

export const productsDB = [
      { 
        "id": 1, 
        "title": "Airpods Apple, com Estojo de Recarga, Bluetooth", 
        "description": "Airpods Apple, com Estojo de Recarga, Bluetooth, Branco\nO Novo AirPods traz uma experiência nova em usar fones de ouvido sem fio. É só tirá-los do estojo e estão prontos para uso com seu iPhone, Apple Watch, iPad ou Mac. Ele oferece cinco horas de som e três horas para conversar com apenas uma carga. Eles acompanham seu ritmo graças ao estojo que proporciona várias cargas adicionais para mais de 24 horas de uso." ,
        "price":120,
        //"cover": "https://i.imgur.com/uXrbyfA.jpg"
        "cover": "https://res.cloudinary.com/practicaldev/image/fetch/s--kE4YH6op--/c_imagga_scale,f_auto,fl_progressive,h_420,q_auto,w_1000/https://miro.medium.com/max/1400/1%2AGh4eaAQU432ZQH7qsVbJ_A.png"
      },
      { 
        "id": 2, 
        "title": "Notebook Gamer Lenovo Gaming 3i Intel Core i5-11300H", 
        "description": "Lenovo ideapad Gaming 3i\nNovo design com 11ª Geração de Processadores Intel Core i5-11300H e placa de vídeo NVIDIA GeForce GTX 1650 4GB. Ideal para gamers e usuários que também precisam de alta performance. Com tela de 15.6'' Full HD WVA Antirreflexo para melhor definição de imagem e cores. O armanezamento SSD PCIe NVMe é 10x mais rápido* que um HDD 2.5” SATA, você terá mais segurança ao armazenar seus dados. O teclado retroiluminado em LED branco, deixa o computador mais atraente e também favorece a performance para jogos em lugares com pouca iluminação.",
        "price": 379.9,
        //"cover": "https://i.imgur.com/bM5IUKe.jpg"
        "cover": "https://res.cloudinary.com/practicaldev/image/fetch/s--kE4YH6op--/c_imagga_scale,f_auto,fl_progressive,h_420,q_auto,w_1000/https://miro.medium.com/max/1400/1%2AGh4eaAQU432ZQH7qsVbJ_A.png"
      },
      { 
        "id": 3, 
        "title": "Teclado Mecânico Gamer HyperX Alloy", 
        "description": "Teclado HyperX Alloy MKW100, HKBM1-R-EUA/G - 4P5E1AA#ABA\nObtenha uma iluminação radiante e por tecla com efeitos dinâmicos para adicionar um toque de estilo ao seu setup de PC. Estrutura em alumínio durável\nCom uma estrutura de alumínio sólida, o Alloy MKW100 foi projetado para fornecer estabilidade quando os toques em teclas estiverem a todo vapor. O descanso para pulso removível ajuda a reduzir a fadiga de longas sessões de jogos ou de trabalho.",
        "price": 199.99,
        //"cover": "https://i.imgur.com/ldh1Q8O.jpg"
        "cover": "https://res.cloudinary.com/practicaldev/image/fetch/s--kE4YH6op--/c_imagga_scale,f_auto,fl_progressive,h_420,q_auto,w_1000/https://miro.medium.com/max/1400/1%2AGh4eaAQU432ZQH7qsVbJ_A.png"
      },
      { 
        "id": 4, 
        "title": "Monitor Gamer Husky Tempest 34", 
        "description": "O Monitor Gamer Husky Gaming Tempest LED 34 UltraWide Curvo traz a experiência de imersão completa para o seus jogos! A tela Curva UltraWide, formato 21:9, e Quad HD (QHD), com taxa de atualização de 144Hz, confere maior campo de visão e amplifica a experiência de imersão durante seus jogos.",
        "price": 2099.99,
        //"cover": "https://i.imgur.com/sRmbcWW.jpeg"
        "cover": "https://res.cloudinary.com/practicaldev/image/fetch/s--kE4YH6op--/c_imagga_scale,f_auto,fl_progressive,h_420,q_auto,w_1000/https://miro.medium.com/max/1400/1%2AGh4eaAQU432ZQH7qsVbJ_A.png"
      },
      { 
        "id": 5, 
        "title": "Soundbar LG SNH5, 4.1 Canais, Bluetooth, 600W RMS", 
        "description": "O LG Sound Bar SNH5 uniu-se ao DTS Virtual:X para transformar sua casa em um verdadeiro cinema e deixar a exibição dos seus filmes favoritos muito mais imersiva. O LG Sound Bar SNH5 suporta saída para 4.1 canais para que você possa assistir à TV com um som mais envolvente.",
        "price": 1099.99,
        //"cover": "https://i.imgur.com/w7SeQsa.jpg"
        "cover": "https://res.cloudinary.com/practicaldev/image/fetch/s--kE4YH6op--/c_imagga_scale,f_auto,fl_progressive,h_420,q_auto,w_1000/https://miro.medium.com/max/1400/1%2AGh4eaAQU432ZQH7qsVbJ_A.png"
      },
      { 
        "id": 6, 
        "title": "Smartwatch Samsung Galaxy Watch 5, BT, 40mm", 
        "description": "O smartwatch que oferece o mais completo conjunto de funções de monitoramento para o acompanhamento da Saúde e do Bem-Estar de uma maneira precisa e confiável. Possui os recursos essenciais e mais avançados para medir e acompanhar o estado da sua Saúde, funções como monitor de Batimento Cardíaco, Pressão Arterial, Eletrocardiograma, Oxímetro, Detecção de Queda e Chamada de Emergência, programa de Coaching do Sono para monitorar e melhorar a qualidade do seu Sono , além da Bioimpedância para avaliar a composição corporal de maneira rápida e interativa, e verificar a evolução os resultados dos exercícios refletidos no seu corpo. Possui uma série de funções avançadas de treinos com mais de 95 modalidades. ",
        "price": 1139.00,
        //"cover": "https://i.imgur.com/Ua4bURp.jpg"
        "cover": "https://res.cloudinary.com/practicaldev/image/fetch/s--kE4YH6op--/c_imagga_scale,f_auto,fl_progressive,h_420,q_auto,w_1000/https://miro.medium.com/max/1400/1%2AGh4eaAQU432ZQH7qsVbJ_A.png"
      }
    ];

/* export const api = axios.create({
    data: products,
}) */

