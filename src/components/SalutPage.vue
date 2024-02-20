<template>
    <section :id="sectionId">
        <img class="ordi" src="../assets/ordi.png" alt="" />
        <div class="blockTitle" @click="changeEmoji">
            <h2 class="section-title" ref="title">
                <!-- Titre initial vide -->
            </h2>
            <span class="emoji" ref="emoji"></span>
        </div>
        <p class="section-content" ref="content">
            <!-- Texte initial vide -->
        </p>

        <SectionButton
            class="btn"
            :nextSection="nextSection"
            @changeSection="navigate"
        />
    </section>
</template>

<script>
import SectionButton from "@/components/SectionButton.vue";

export default {
    name: "SectionPage",
    components: {
        SectionButton,
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

            
            const emojiText = "🤓";
            const titleText = "Salut ";
            const contentText = "Bienvenue sur le portfolio de Romain Bezolles";

            await this.typeWriter(titleText, this.$refs.title);

            await this.typeWriter(emojiText, this.$refs.emoji);

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
};
</script>

<style lang="scss" scoped>
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
    margin-bottom: 26px;
    font-size: 46px;
    margin-left: 4%;
}

.blockTitle {
    display: flex;
    justify-content: center;
    align-items: center;
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
    background-color: #0d0d0d;
    color: aliceblue;
    position: relative;
    overflow: hidden;

    .section-title {
        font-size: 46px;
        margin-bottom: 20px;
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
