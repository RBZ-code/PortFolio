<template>
    <section :id="sectionId">
        <div class="section-container">
            <div class="section-buttons">
                <button
                    v-if="prevSection"
                    @click="navigate(prevSection)"
                    class="section-button"
                >
                    ↑
                </button>
            </div>
            <h2 class="section-title">{{ title }}</h2>
            <p class="section-content">{{ content }}</p>
            <div class="section-buttons">
                <button
                    v-if="nextSection"
                    @click="navigate(nextSection)"
                    class="section-button"
                >
                    ↓
                </button>
            </div>
        </div>
    </section>
</template>

<script>
export default {
    name: "SectionPage",
    props: ["title", "content", "prevSection", "nextSection", "contactButton"],
    computed: {
        sectionId() {
            return this.title.toLowerCase().replace(/\s+/g, "-");
        },
    },
    methods: {
        navigate(section) {
            this.$emit("changeSection", section);
        },
    },
};
</script>

<style scoped>
section {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 100vh;
    width: 100%;
    background-color: black;
}

.section-container {
    border-radius: 10px;
    padding: 20px;
    margin: 20px auto;
    max-width: 800px;
    min-width: 80%;
    height: 60vh;
    background-color: #f9f9f9;
    display: flex;
    flex-direction: column;
    justify-content: center;
    position: relative;
}

.section-title {
    font-size: 24px;
    color: #2c3e50;
    margin-bottom: 10px;
}

.section-content {
    font-size: 18px;
    color: #333;
}

.section-buttons {
    margin-top: 20px;
    margin-bottom: 20px;
}

.section-button {
    font-size: 20px;
    background-color: #3498db;
    color: white;
    border: none;
    border-radius: 5px;
    padding: 10px 20px;
    margin-right: 10px;
    cursor: pointer;
}

.section-button:hover {
    background-color: #2980b9;
}
</style>
