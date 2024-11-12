// Espera o DOM ser completamente carregado antes de adicionar o event listener
document.addEventListener("DOMContentLoaded", function () {
  // Captura o evento de click no botão submit
  document
    .getElementById("submitBtn")
    .addEventListener("click", function (event) {
      // Evitar que o formulário seja enviado (caso você tenha um formulário real)
      event.preventDefault();

      // Exibir o alerta
      alert("Sua mensagem foi enviada para o time de suporte!");
    });
});
function addToCart(event) {
    // Prevenir o comportamento padrão do link
    event.preventDefault();
  
    // Captura os dados do evento a partir dos atributos do botão
    const eventId = event.target.getAttribute("data-id");
    const eventTitle = event.target.getAttribute("data-title");
    const eventPrice = event.target.getAttribute("data-price");
  
    // Cria um objeto com as informações do evento
    const eventDetails = {
      id: eventId,
      title: eventTitle,
      price: eventPrice,
    };
  
    // Armazena o objeto no localStorage (conversão para string)
    let cart = JSON.parse(localStorage.getItem("cart")) || [];
    cart.push(eventDetails);
  
    // Salva o carrinho atualizado no localStorage
    localStorage.setItem("cart", JSON.stringify(cart));
  
    // Redireciona o usuário para a página do carrinho
    window.location.href = "carrinho.html";  // Aqui você coloca o caminho para a página de carrinho
  }
  