<template>
    <section
        :id="sectionId"
        :class="{ 'skills-section': true, active: isActive }"
    >
        <div class="container_btn">
            <SectionButton
                class="btn-top"
                :nextSection="prevSection"
                @changeSection="navigate"
                direction="up"
            />
        </div>

        <div class="content">
            <h2 class="section-title" ref="title">Mes compétences</h2>
            <div class="skills-list">
                <div class="skill-category">
                    <p class="category-title">Langages de programmation:</p>
                    <ul>
                        <li>HTML</li>
                        <li>CSS</li>
                        <li>JavaScript</li>
                        <li>PHP</li>
                    </ul>
                </div>
                  <hr class="divider">
                <div class="skill-category">
                    <p class="category-title">Outils de développement:</p>
                    <ul>
                        <li>Git</li>
                        <li>GitHub</li>
                    </ul>
                </div>
            </div>
        </div>

      

        <div class="container_btn">
            <SectionButton
                class="btn-bot"
                :nextSection="nextSection"
                @changeSection="navigate"
            />
        </div>

        <img src="../assets/Ninja.png" alt="ninja" class="ninja" />
        <img src="../assets/Chef2.png" alt="Cuisinier" class="chef">
    </section>
</template>

<script>
import SectionButton from "@/components/SectionButton.vue";

export default {
    data() {
        return {
            sectionId: "skills-section",
        };
    },
    components: {
        SectionButton,
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
    },
};
</script>

<style lang=scss scoped>
.chef {
    z-index: -1;
    position: absolute;
    width: auto;
    height: 8rem;
    bottom: 60px;
    left: 60px;
}

.ninja {
    z-index: -1;
    position: absolute;
    width: 80px;
    height: auto;
    top: 60px;
    right: 60px;
}

.skills-section {
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
    animation: bounce-in-right 2s ease forwards;
}

@keyframes bounce-in-right {
    0% {
        opacity: 0;
        transform: translateX(200%);
    }
    60% {
        opacity: 1;
        transform: translateX(-30px);
    }
    80% {
        transform: translateX(10px);
    }
    100% {
        transform: translateX(0);
    }
}

.section-title {
    font-size: 36px;
    margin-bottom: 20px;
    text-align: center;
}

.skills-list {
    display: flex;
    justify-content: center;
    margin-bottom: 40px; /* Ajout d'espace en bas */
}

.skill-category {
    margin: 0 20px;
}

.category-title {
    font-size: 24px;
    margin-bottom: 10px;
}

.about-description {
    font-size: 20px;
    margin: 10px 0;
    max-width: 600px;
    text-align: center;
}

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
ul {
    display: flex;
    flex-direction: column;
    justify-content: baseline;
    align-items: baseline;

    li{
        list-style: none;
    }

}
.divider {
    width: 1px;
    background: white;
    border: 1px solid #ffffff;
    margin: 40px 0; /* Ajout d'espace en haut et en bas */
}
</style>
