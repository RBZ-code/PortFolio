<template>
    <section :id="sectionId" class="container">
        <FondAnimation class="background" />
        <!-- <img class="ordi" src="../assets/ordi.png" alt="" /> -->
        <div class="content">
            <div class="blockTitle" @click="changeEmoji">
                <h2 class="section-title" ref="title">
                    Salut <span class="emoji" ref="emoji">🤓</span>
                </h2>
            
            </div>
            <p class="section-content" ref="content">
                <!-- Texte initial vide -->
            </p>
        </div>
        <SectionButton
            class="btn"
            :nextSection="nextSection"
            @changeSection="navigate"
        />
    </section>
</template>

<script>
import FondAnimation from "@/components/FondAnimation.vue";
import SectionButton from "@/components/SectionButton.vue";

export default {
    name: "SectionPage",
    components: {
        SectionButton,FondAnimation
    },
    props: ["prevSection", "nextSection"],
    data() {
        return {
            emojis: ["😎", "🤓"], 
            isActive: false,
        };
    },
    
    methods: {
        navigate(section) {
            this.$emit("changeSection", section);
        },
        async changeEmoji() {
            if (this.$refs.emoji.textContent === this.emojis[0]) {
                this.$refs.emoji.textContent = this.emojis[1];
            } else {
                this.$refs.emoji.textContent = this.emojis[0];
            }
        },

        async typeWriter(text, element, delay = 50) {
            if (!element) return;

            for (let i = 0; i < text.length; i++) {
                await new Promise((resolve) => setTimeout(resolve, delay));

                if (element) {
                    element.textContent += text.charAt(i);
                }
            }
        },

        async eraseText(element, delay = 60) {
            if (!element) return;

            const text = element.textContent;
            for (let i = text.length - 1; i >= 0; i--) {
                await new Promise((resolve) => setTimeout(resolve, delay));

                if (element && element.textContent) {
                    element.textContent = text.slice(0, i);
                }
            }
        },

        async startTyping() {

            
           
            const contentText = "Bienvenue sur le portfolio de Romain Bezolles";

            await this.typeWriter(contentText, this.$refs.content);

            await new Promise((resolve) => setTimeout(resolve, 1000));

            await this.eraseText(this.$refs.content);

            const newText = "N'hésitez pas à explorer ce portfolio.";

            await this.typeWriter(newText, this.$refs.content);

            await new Promise((resolve) => setTimeout(resolve, 1000));

            await this.eraseText(this.$refs.content);

            const lastText = "Bonne navigation !";

            await this.typeWriter(lastText, this.$refs.content);
        },
    },
    mounted() {
        this.startTyping();
    },
    watch: {
    isActive: function(newValue) {
        if (newValue) {
            this.startTyping(); // Appel de startTyping() si la page est active
        } else {
            // Remettre le contenu à l'état initial si la page n'est plus active
            this.$refs.title.textContent = "";
            this.$refs.emoji.textContent = "";
            this.$refs.content.textContent = "";
        }
    },
},
};
</script>

<style lang="scss" scoped>
.container{
    // position: relative;
    overflow: hidden;
    padding: 0;

}

.background {
    position: absolute !important;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    z-index: 1;
}

.content{
    animation: bounce-in-right 2s ease forwards;
    z-index: 2;
}


@keyframes bounce-in-right {
    0% {
        opacity: 0;
        transform: translateY(-300%);
    }
    60% {
        opacity: 1;
        transform: translatey(+30px);
    }
    80% {
        transform: translateY(-10px);
    }
    100% {
        transform: translateY(0);
    }
}
.btn {
    z-index: 2;
    position: absolute;
    bottom: 100px;
}

.ordi {
    width: 600px;
    position: absolute;
    top: 150px;
    opacity: 0.5;
    z-index: 1;
}

.emoji {
    display: block;
    align-self: center;
    font-size: 46px;
}

.blockTitle {
    cursor: pointer;
    transition: all 0.35s linear;
    z-index: 2;

    &:hover {
        transform: translateY(-5px);
    }
}

section {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 100vh;
    width: 100%;
    background-color: #0D0D0D;
    color: aliceblue;
    position: relative;
    overflow: hidden;

    .section-title {
        font-size: 46px;
        margin-bottom: 20px;
        display: flex;
        justify-content: center;
        align-items: center;
        
    }
}

.section-content {
    padding: 0;
    margin-top: 10px;
    height: fit-content;
    font-size: 30px;
    text-align: center;
    line-height: 1.5;
    min-height: 50px;
    position: relative;
    display: inline-block;
    z-index: 2;


}
</style>
