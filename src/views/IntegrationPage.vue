<template>
    <section class="projets-section">
        <div class="container_btn">
            <SectionButton
                class="btn-top"
                :nextSection="prevSection"
                @changeSection="navigate"
                direction="up"
            />
        </div>

        <div class="content">
            <Animation :cards="cardsData" />
        </div>

        <div class="container_btn">
            <SectionButton
                class="btn-bot"
                :nextSection="nextSection"
                @changeSection="navigate"
            />
            
        </div>
    </section>
</template>

<script>
import Animation from "@/components/AnimationCards.vue";
import SectionButton from "@/components/SectionButton.vue";

export default {
    data() {
        return {
           
            cardsData: [
                {
                    image: "../assets/snake.png",
                    header: "Snake",
                    content: "Quelques Jeux à essayer",
                },
                {
                    image: "https://plus.unsplash.com/premium_photo-1669658981858-b2ae0d7581a3?q=80&w=1108&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
                    header: "Applications",
                    content: "Mini applications plus au moins utiles",
                },
                {
                    image: "https://images.unsplash.com/photo-1460661419201-fd4cecdf8a8b?q=80&w=1160&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
                    header: "Intégrations",
                    content: "Content 2",
                },
                {
                    image: "https://images.unsplash.com/photo-1637416067365-2b5e7e8fe8fa?q=80&w=1035&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
                    header: "Animations",
                    content: "Content 2",
                },
            ],
        };
    },
    components: {
        SectionButton,
        Animation,
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
        toGames() {
            this.$router.push("/games");
        },
        
    },
};
</script>

<style scoped>
.container_btn {
    display: flex;
    justify-content: center;
    align-items: center;
}

.btn-bot,
.btn-top {
    z-index: 2;
    position: absolute;
}

.btn-bot {
    bottom: 20px;
}

.btn-top {
    top: 20px;
}

.projets-section {
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
    overflow-y: visible;
    background: yellow;
}
</style>
