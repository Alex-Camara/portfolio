<template>
    <div class="flex flex-col lg:flex-row justify-items-start">
        <div class="flex absolute left-0 w-full overflow-auto lg:flex lg:relative lg:overflow-visible lg:flex-col lg:w-auto">
            <div v-for="(workplace, index) in workplaces" :key="workplace.id" :ref="'tab-button-' + index">
                <button id="tab-button" class="tab-button" @click="setSelectedWorkplace(index, workplace)">
                    {{ workplace.acronym }}
                </button>
            </div>
        </div>

        <div id="tab-information" class="mt-20 lg:mt-0 text-dark-white lg:pl-10">
            <div class="flex text-base font-bold flex-wrap">
                <p class="">{{ selectedWorkplace.job }} at <span class="ml-1"></span></p>
                <a class="link-text" :href="selectedWorkplace.link" target="_blank">{{ selectedWorkplace.name }}</a>
            </div>
            <div class="flex text-base flex-wrap">
                <p>{{ selectedWorkplace.startDate }} - <span class="ml-1"></span></p>
                <p>{{ selectedWorkplace.endDate }}</p>
            </div>

            <div v-for="achievement in selectedWorkplace.achievements" :key="achievement">
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
        const workplaceKoalaWorkshop = new Workplace(1, 'Software Engineer',
        'Koala Workshop', 'Koala', 'March 2021', 'Present', 'https://koalaworkshop.com/');

        const workplaceIDisc = new Workplace(1, 'Software Engineer',
        'iDisc Information Technologies', 'iDisc', 'November 2020', 'Present', 'https://www.idisc.com');

        const workplaceISP = new Workplace(1, 'Software Engineer',
        'Observatorio de Educación Médica y Derechos Humanos', 'OBEME', 'November 2019', 'July 2020', 'https://www.uv.mx/isp/');

        const workplaceIIBUV = new Workplace(2, 'Software Engineer', 'Instituto de Investigaciones Biológicas de la UV',
        'IIBUV', 'February 2019', 'August 2020', 'https://www.uv.mx/iib/');

        const workplaceISP2 = new Workplace(3, 'Software Engineer Intern', 'Instituto de Salud Pública de la UV', 'ISP',
        'February 2019', 'September 2019', 'https://www.uv.mx/isp/');

        const workplaceLania = new Workplace(4, 'Software Engineer Intern', 'Laboratorio Nacional de Informática Avanzada',
        'LANIA', 'September 2018', 'December 2018', 'http://www.lania.mx/sitios/cel/');

        this.workplaces.push(workplaceKoalaWorkshop, workplaceIDisc, workplaceISP, workplaceIIBUV, workplaceISP2, workplaceLania);

         workplaceKoalaWorkshop.addAchievement('Implemented the frontend side for a student’s learning site new section called ‘learning lab’, aimed to strengthen the user’s grasp in ' +
        'previous concepts learned at the main site. (Laravel and Vue)'
    );

        workplaceKoalaWorkshop.addAchievement('Analized existing web platform in order to accomodate new requirements. (Laravel and Vue)');

        workplaceKoalaWorkshop.addAchievement('Reimplemented the platform’s frontend side in order to support API calls instead of laravel web routes. (Laravel and Vue)');

        workplaceIDisc.addAchievement('Interpreted and translated internal user requirements in order to propose an automated tool '
        + 'to assist in the daily tasks performed by the company’s linguists.');

        workplaceIDisc.addAchievement('Automated the company’s internal task translation process by the creation of a website ' +
        + 'platform that could perform the task identified in previous stages. (Laravel and React)');

        workplaceIDisc.addAchievement('Migrated and evolved a client’s CRM in order to accomodate to new requirements. Developed ' +
        + 'the product in several iterations in order to involve customer’s feedback and maximize the new product’s acceptation by the client. (Laravel)');

        workplaceISP.addAchievement('Implemented requirements engineering activities to develop an application intended '
        + 'to serve as a tool to collect data from medical centers by health sciences students, said data would allow competent '
        + 'authorities to analyze working conditions');

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
            const tabInformationElement: any = document.getElementById('tab-information');
            const elements = Array.from(document.getElementsByClassName('tab-button'));
            const selectedDivButton: any = this.$refs['tab-button-' + index];

            if (!selectedDivButton[0].children[0].classList.contains('tab-button-selected')) {
                elements.forEach(((element: any) => {
                    element.classList.remove('tab-button-selected');
                }));

                tabInformationElement.classList.add('fade-in');
                tabInformationElement.addEventListener('animationend', (e: any) => {
                    tabInformationElement.classList.remove('fade-in');
                });

                const selectedDivChildren = selectedDivButton[0].children[0];

                selectedDivButton[0].children[0].classList.add('tab-button-selected'),
                this.$data.selectedWorkplace = workplace;
            }
    }
}
</script>