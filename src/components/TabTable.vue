<template>
    <div class="flex flex-col lg:flex-row justify-items-start">
        <div class="flex absolute left-0 w-screen overflow-auto lg:relative lg:overflow-visible lg:flex-col lg:w-auto">
            <div v-for="(workplace, index) in workplaces" :key="workplace.id" :ref="'tab-button-' + index">
                <button id="tab-button" class="tab-button" @click="setSelectedWorkplace(index, workplace)">
                    {{ workplace.acronym }}
                </button>
            </div>
        </div>

        <div id="tab-information" class="mt-20 lg:mt-0 text-dark-white lg:pl-10">
            <div class="flex text-base font-bold flex-wrap">
                <p class="">{{ selectedWorkplace.job }} at &shy;</p>
                <a class="link-text" :href="selectedWorkplace.link" target="_blank">{{ selectedWorkplace.name }}</a>
            </div>
            <div class="flex text-base flex-wrap">
                <p>{{ selectedWorkplace.startDate }} - &shy;</p>
                <p>{{ selectedWorkplace.endDate }}</p>
            </div>

            <div v-for="achievement in selectedWorkplace.achievements">
                <div class="flex mt-3">
                    <img src="../assets/terminal.svg" class="blue-icon h-4 mt-2 mr-1" />
                    <p>{{achievement}}</p>
                </div>
            </div>
        </div>
    </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import { Workplace } from '../classes/Workplace';
@Component
export default class TabTable extends Vue {
    private workplaces: Workplace[] = [];

    private data() {
        return{
            selectedWorkplace: {},
        };
    }

    private created() {
        const workplaceISP = new Workplace(1, 'Software Engineer', 'Instituto de Salud Pública', 'ISP', 'November 2019', 'July 2020', 'https://www.uv.mx/isp/');
        const workplaceIIBUV = new Workplace(2, 'Software Engineer', 'Instituto de Investigaciones Biológicas de la UV', 'IIBUV', 'February 2019', 'August 2020', 'https://www.uv.mx/iib/');
        const workplaceISP2 = new Workplace(3, 'Software Engineer Intern', 'Instituto de Salud Pública de la UV', 'ISP', 'February 2019', 'September 2019', 'https://www.uv.mx/isp/');
        const workplaceLania = new Workplace(4, 'Software Engineer Intern', 'Laboratorio Nacional de Informática Avanzada', 'LANIA', 'September 2018', 'December 2018', 'http://www.lania.mx/sitios/cel/');

        this.workplaces.push(workplaceISP, workplaceIIBUV, workplaceISP2, workplaceLania);

        workplaceISP.addAchievement('Implemented requirements engineering activities to develop an application intended to serve as '
        + 'a tool to collect data from medical centers by health sciences students, said data would allow competent authorities to analyze working conditions');

        workplaceISP.addAchievement('Designed and constructed the application. Construction was split in three modules: backend,'
        + ' using SpringBoot, Kotlin and PostgreSQL; web frontend, implemented with the VueJS framework; and the Android app.');

        workplaceIIBUV.addAchievement('Implemented requirements engineering activities to'
        + ' develop an application to create and manage photocollect data cards for the institute.');

        workplaceIIBUV.addAchievement('Designed and constructed the application using'
        + ' the following stack: ElectronJS framework for'
        + ' multiplatform support; VueJS for user interface');

        workplaceIIBUV.addAchievement('Verification and validation with the intended users in the institute.');

        workplaceISP2.addAchievement('Elicited requirements for an application to assist patients released from drug dependency rehabilitation '
        + 'centers to prevent a future relapse.');

        workplaceISP2.addAchievement('Documented those requirements in a software requirements specification document to help estimate the app '
        + 'development cost for the institute.');

        workplaceISP2.addAchievement('Designed the application high-fidelity prototype to validate the requirements with potential users in rehab'
        + 'centers in Xalapa, Veracruz.');

        workplaceLania.addAchievement('Ellaborated an evaluation report regarding available testing tools for VueJS and ExpressJS frameworks');

        workplaceLania.addAchievement('Automated the institution workers paid leave permits process to reduce paper and bureaucratic work.');
    }

    private mounted() {
        this.setSelectedWorkplace(0, this.workplaces[0]);
    }

    private setSelectedWorkplace(index: number, workplace: Workplace) {
            const tabInformationElement = document.getElementById("tab-information");
            
            const elements = document.getElementsByClassName('tab-button');
            const selectedButton = this.$refs['tab-button-' + index];
            elements.forEach(((element: any) => {
                element.classList.remove('tab-button-selected');
            }));

            tabInformationElement.classList.add('fade-in');
            tabInformationElement.addEventListener('animationend', function(e) {
                tabInformationElement.classList.remove('fade-in');
            })

            selectedButton[0].children[0].classList.add('tab-button-selected'),
            this.$data.selectedWorkplace = workplace;
    }
}
</script>