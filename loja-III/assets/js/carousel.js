const swiper1 = new Swiper('.swiper1', { // Inicializa o primeiro swiper
    direction: 'horizontal',
    loop: true,
    pagination: {
      el: '.swiper1 .swiper-pagination', // Seletor específico para a paginação
      clickable: true,
    },
    // ... outras opções.



    
  });

  const swiper2 = new Swiper('.swiper2', { // Inicializa o segundo swiper
  direction: 'horizontal', // Define a direção do slide (horizontal ou vertical)
  loop: true, // Define se o slide deve entrar em loop (continuar infinitamente)
  pagination: {
      el: '.swiper2 .swiper-pagination', // Seletor do elemento de paginação
      clickable: true, // Permite que a paginação seja clicável
  },
  // ... outras opções (você pode usar as mesmas do swiper1 ou personalizar)
});

    //onst swiper = new Swiper('.swiper', {
         // Remova ou comente a linha abaixo para o movimento horizontal
       // direction: 'horizontal',  

       //loop: true,
       //pagination: {
            //l: '.swiper-pagination',
            // clickable: true, // Permite clicar na paginação para navegar
         //
         // Se precisar de botões:
         // navigation: {
         //     nextEl: '.swiper-button-next',
         //     prevEl: '.swiper-button-prev',
         // },
         //crollbar: {
            //l: '.swiper-scrollbar',