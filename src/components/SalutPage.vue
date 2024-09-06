<template>
    <section :id="sectionId" class="container" :class="{ 'dark-mode': $store.state.isDarkMode }">
        <FondAnimation class="background" />
       
        <div class="content">
            <div class="blockTitle">
                <h2 class="section-title" ref="title">
                    Salut !
                </h2>
            
            </div>
            <p class="section-content" ref="content">
                
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
    
    methods: {
        navigate(section) {
            this.$emit("changeSection", section);
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

            
           
            const contentText = "Bienvenue sur mon portfolio.";

            await this.typeWriter(contentText, this.$refs.content);

            await new Promise((resolve) => setTimeout(resolve, 1000));

            await this.eraseText(this.$refs.content);

            const newText = "N'hésitez pas à explorer ce portfolio.";

            await this.typeWriter(newText, this.$refs.content);

            await new Promise((resolve) => setTimeout(resolve, 1000));

            await this.eraseText(this.$refs.content);

            const lastText = "Bonne navigation .";

            await this.typeWriter(lastText, this.$refs.content);
        },
    },
    mounted() {
        this.startTyping();
    },
    watch: {
    isActive: function(newValue) {
        if (newValue) {
            this.startTyping(); 
        } else {
          
            this.$refs.title.textContent = "";
            this.$refs.emoji.textContent = "";
            this.$refs.content.textContent = "";
        }
    },
},
};
</script>

<style lang="scss" scoped>
@import url("https://fonts.googleapis.com/css2?family=Bebas+Neue&display=swap");

.container {
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

.content {
  animation: bounce-in-right 2s ease forwards;
  z-index: 2;
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
    font-size: 64px;
    margin-bottom: 20px;
    display: flex;
    justify-content: center;
    align-items: center;
    font-family: "Bebas Neue", sans-serif;
    background: linear-gradient(white, #3498db);
    -webkit-background-clip: text;
    background-clip: text;
    -webkit-text-fill-color: transparent;
  }
}

.dark-mode .section-title {
  background: linear-gradient(black, #3498db);
  -webkit-background-clip: text;
  background-clip: text;
  -webkit-text-fill-color: transparent;
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

