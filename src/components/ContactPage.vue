<template>
    <section
        :id="sectionId"
        class= "about-section"   
        :class="{ 'dark-mode': $store.state.isDarkMode }"  
    >
        <FondAnimation class="background" />
        <div class="container_btn">
            <SectionButton
                class="btn-top"
                :nextSection="prevSection"
                @changeSection="navigate"
                direction="up"
            />
        </div>

        <div class="content-contact">
            <h3 class="section-heading">
                Vous avez une opportunité de stage ou d'alternance à me
                proposer ? 
            </h3>
            <h3 class="section-subheading">N'hésitez pas à me contacter.</h3>
            <div class="content-form">
                <form @submit.prevent="submitForm">
                    <input type="text" placeholder="Prénom" v-model="firstName" />
                    <input type="text" placeholder="Nom" v-model="lastName" />
                    <input type="email" placeholder="Email" v-model="email" />
                    <textarea
                        placeholder="Veuillez écrire votre message ici"
                        v-model="message"
                    ></textarea>
                    <CustomButton
                        type="submit"
                        class="btn-custom"
                        buttonText="Envoyer"
                        background="#2ecc71"
                        @click="sendEmail"
                    />
                </form>
            </div>
        </div>
    </section>
</template>

<script>
import SectionButton from "@/components/SectionButton.vue";
import CustomButton from "@/components/CustomButton.vue";
import FondAnimation from "@/components/FondAnimation.vue";

export default {
  data() {
    return {
      sectionId: "about-section",
      firstName: "",
      lastName: "",
      email: "",
      message: "",
    };
  },

  components: {
    SectionButton,
    CustomButton,
    FondAnimation,
  },

  props: {
    prevSection: String,
    nextSection: String,
    isActive: Boolean,
  },

  methods: {
    navigate(section) {
      this.$emit("changeSection", section);
    },

    sendEmail() {
      const firstName = this.firstName;
      const lastName = this.lastName;
      const message = this.message;

      let subject, body;

      subject = encodeURIComponent("Demande de formulaire de contact");
      body = encodeURIComponent(
        `Bonjour Romain, \n\n ${message} \n\n Cordialement, \n\n ${firstName} ${lastName}`
      );

      const mailtoLink = `mailto:romainbezolles@gmail.com?subject=${subject}&body=${body}`;

      window.location.href = mailtoLink;

      this.firstName= ""
      this.lastName= ""
      this.email= ""
      this.message= "";


    },
  },
};
</script>


<style scoped>
.background {
    position: absolute !important;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    z-index: 1;
}

.btn-custom {
    margin-top: 50px;
}

.btn-top {
    z-index: 2;
    position: absolute;
}

.btn-top {
    top: 20px;
}

.content-form {
    width: 100%;
    padding: 10px;
    margin-left: 10px;
    margin-right: 10px;
}
.container_btn {
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 99;
}

.about-section {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 100vh;
    width: 100%;
    background-color: #0d0d0d;
    color: #ffffff;
    position: relative;
    overflow: hidden;
    animation: bounce-in-left 2s ease forwards;
}

.content-contact {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    z-index: 9;
}

.section-heading {
    margin-top: 80px;
    margin-bottom: 20px;
}

form {
    margin-top: 30px;
    margin-bottom: 50px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 20px;
    width: 100%;
}

input {
    max-width: 350px;
    width: 100%;
    height: 40px;
    text-align: start;
    padding: 10px;
    border: 1px solid #c4c4c4;
    border-radius: 5px;
}

textarea {
    max-width: 350px;
    width: 100%;
    height: 150px;
    padding: 10px;
    border: 1px solid #c4c4c4;
    border-radius: 5px;
    font-family: var(--font-text);
}

@media screen and (max-width: 410px) {
    .section-heading {
        font-size: 18px; /* Réduction de la taille de la police */
        text-align: center; /* Centrer le texte */
    }

    .section-subheading {
        font-size: 16px; /* Réduction de la taille de la police */
        text-align: center; /* Centrer le texte */
    }

    .content-form {
        padding: 10px; /* Ajout de padding pour l'espace autour du formulaire */
        margin: 0 10px; /* Ajout de margin pour éloigner le formulaire des bords */
    }

    input,
    textarea {
        max-width: 90%; /* Réduction de la largeur maximale des champs */
    }

    .btn-custom {
        margin-top: 30px; /* Réduction de la marge supérieure du bouton */
    }
}
</style>
