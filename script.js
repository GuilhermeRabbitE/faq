$(document).ready(function() {
    $(".seta").click(function() {
        var $pergunta = $(this).closest(".pergunta");  // Encontra o elemento de pergunta
        $pergunta.next("p").slideToggle(500);  // Exibe ou esconde o parágrafo
        $(this).toggleClass("rotacionar");  // Rotaciona a seta
    });
});