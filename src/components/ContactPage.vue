<template>
    <section
        :id="sectionId"
        :class="{ 'about-section': true, active: isActive }"
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
                proposer, ou simplement envie de discuter ? N'hésitez pas à me
                contacter.
            </h3>
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
    </section>
</template>

<script>
import SectionButton from "@/components/SectionButton.vue";
import CustomButton from "@/components/CustomButton.vue";
import FondAnimation from "@/components/FondAnimation.vue";
import axios from "axios";

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
            const messageContent = `
        Nom: ${this.lastName}
        Prénom: ${this.firstName}
        Email: ${this.email}
        Message: ${this.message}
      `;

            console.log("Message envoyé:", messageContent);
        },
        submitForm() {
            const formData = {
                firstName: this.firstName,
                lastName: this.lastName,
                email: this.email,
                message: this.message,
            };

            axios
                .post("http://localhost:3000/send-email", formData)
                .then((response) => {
                    console.log(response.data);
                
                    this.firstName = "";
                    this.lastName = "";
                    this.email = "";
                    this.message = "";
                })
                .catch((error) => {
                    console.error(
                        "Une erreur s'est produite lors de l'envoi du formulaire:",
                        error
                    );
                });
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
    margin-bottom: 70px;
    font-size: 22px; /* Augmentation de la taille de la police */
    max-width: 80%;
    min-height: 50px;
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
</style>
