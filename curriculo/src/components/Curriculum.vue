<template>

    <v-container class="grey lighten-4">
      <v-row no-gutters>
        <v-col
          cols="12"
          sm="6"
          md="4"
        >
            <v-img 
              class="image"
              lazy-src="../images/perfil.jpg"
              max-height="300"
              max-width="250"
              src="../images/perfil.jpg">
            </v-img>
           
        </v-col>
        <v-col
          cols="6"
          md="8"
        >
          <span>Laís Matie Hara</span> 
          <v-divider></v-divider>
          <p class="inicial">Em busca desafios que possam agregar conhecimento e adquirir experiência profissional na área tecnológica, especificamente na programação. Além disso, auxiliar no crescimento da  empresa, tendo como pontos fortes a determinação, facilidade de aprendizagem, simpatia, dinamismo, competência, versatilidade e a confiabilidade.</p>
        </v-col>  
      </v-row>
     
       <v-row no-gutters>
        <v-col
          cols="12"
          sm="6"
          md="4"
        >
            <span class="information">Informações</span>
            <div class="sec">
              <p class="sub">Idade: 20 anos <br>
              Estado civil: Solteira <br>
              Naturalidade: Miranda/MS<br>
              Nacionalidade: Brasil</p>
            </div>
            <div class="sec">
              <span class="title">Telefone:</span>
              <p class="text">00 00000-0000</p>
          </div>
           <div class="sec">
              <span class="title">Email:</span>
              <p class="text">lais@email.com</p>
          </div>
           <div class="sec">
              <span class="title">LinkedIn:</span>
              <p class="text">https://www.linkedin.com/in/laismatie</p>
          </div>
           <div class="sec">
              <span class="title">Localização:</span>
              <p class="text">Aquidauana, Mato Grosso do Sul</p>
          </div>
        </v-col>
       
        <v-col
          cols="6"
          md="8"
        >
         <v-divider></v-divider>
          <span class="information">Experiência</span> 
           <div class="sec">
            <span class="title">Estagiária de Desenvolvimento na Jera</span>
            <p class="sub">Estagiária de Desenvolvimento | Março 2021 - o momento</p>
            <p class="text">- Desenvolvimento web/mobile, uso de frameworks, suporte dentro dos times de desenvolvimento, uso de metodologias ágeis de projeto.</p>
          </div>
          <div class="sec">
            <span class="title">Técnico de Suporte em Tecnologia</span>
            <p class="sub">Técnico de Suporte em Tecnologia Escola Estadual Professora Marly Russo Rodrigues | Dezembro 2019 - Fevereiro 2021</p>
            <p class="text">- Auxiliar os segmentos da unidade escolar quanto ao uso de Tecnologias da Informação e da Comunicação e dos recursos midiáticos.</p>
          </div>
            <span class="information">Formação</span> 
           <div class="sec">
            <span class="title">Tecnologia em Sistemas para Internet - Instituto Federal de Educação, Ciência e Tecnologia de Mato Grosso do Sul (IFMS)</span>
            <p class="sub">Curso Superior 2019 - o momento</p>
          </div>
          <div class="sec">
            <span class="title">Técnico em Informática - Instituto Federal de Educação, Ciência e Tecnologia de Mato Grosso do Sul (IFMS)</span>
            <p class="sub">Ensino Médio 2015 - 2018</p>
          </div>
        </v-col>  
      </v-row>
    <v-row no-gutters>
      <v-col
          cols="12"
          sm="6"
          md="4"
        >
        </v-col>
        <v-col
          cols="6"
          md="8"
        >
         <span class="information">Formação Complementar</span> 
           <div class="sec">
            <p class="text">FORMAÇÃO VUE.JS (de 25/08/2020 a 12/12/2020) 110hrs;</p>
            <p class="text">GIT E GITHUB: ESTRATÉGIAS DE RAMIFICAÇÃO, CONFLITOS E PULL REQUESTS (de 11/03/2021 a 30/03/2021) 08hrs;</p>
            <p class="text">REDES PARTE 1: INTRODUÇÃO, CONCEITOS e PRÁTICA (de 20/07/2020 a 23/07/2020) 10hrs;</p>
            <p class="text">HTTP: ENTENDENDO A WEB POR BAIXO DOS PANOS (de 18/08/2020 a 24/08/2020) 14hrs;</p>
          </div>

          <v-row no-gutters>
          <v-col
          cols="12"
          sm="6"
          md="4"
        >
          <span class="information">Conhecimentos</span> 
          <p class="text">Javascript/Node.js/Banco de dados/HTML 5/CSS 3/Vue.js</p>
        </v-col>
         <v-col
          cols="12"
          sm="6"
           md="4"
        >
          <span class="information">Idiomas</span> 
          <p class="text">Inglês:  Compreende Razoavelmente, Fala Pouco, Lê Razoavelmente, Escreve Pouco.</p>
          <p class="text">Português: Compreende Bem, Fala Bem, Lê Bem, Escreve Bem</p>
        </v-col>
        </v-row>
        </v-col>
     
    </v-row>
    </v-container>
</template>

<script>

  export default {
    name: 'Curriculum',
    data: () => ({
    }),
  }
</script>
<style scoped>
p{
  font-family: 'Source Sans Pro', sans-serif;
  color: #666;
  font-size: 18px;
}
.text{
  font-family: 'Source Sans Pro', sans-serif;
  color: #666;
  font-size: 18px;
}
.sub{
  font-family: 'Source Sans Pro', sans-serif;
  color: black;
  font-size: 18px;
}
.image{
  border-radius: 10px;
  margin: 5px auto 10px auto;
}
span{
  font-family: 'Montserrat', sans-serif;
  font-size: 25px;
  color: black;
  font-weight: 600;
  padding-bottom: 10px;
}
.information{
  font-family: 'Montserrat', sans-serif;
  font-size: 20px; 
  color: black;
  font-weight:initial;
  padding-bottom: 10px;
  display: block;
}
.title{
  color: teal;
}
.inicial{
  font-size: 20px;
  padding: 10px 5px 10px 0px;  
}
.sec{
  padding: 10px;
}
</style>