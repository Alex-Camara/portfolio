<template>
    <div class="flex items-center justify-center h-10">
        <p class="text-dark-white text-sm">{{ statementOne }}</p>
        <img src="../assets/love.svg" class="blue-icon h-3 mx-2 self-center cursor-pointer"/>
        <p class="text-dark-white text-sm mr-3">{{ statementTwo }}</p>
        <a :href="githubProjectLink" target="_blank">
            <img src="../assets/github.svg" class="white-icon h-5 self-center cursor-pointer"/>
        </a>
    </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
@Component
export default class FooterInfo extends Vue {
    private statementOne = 'Made with';
    private statementTwo = 'by Alex Cámara';
    private githubProjectLink = 'https://github.com/Alex-Camara/portfolio';
}
</script>