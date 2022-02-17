const app = new Vue(
    {
        el: '#app',
        data: {
            numeroCasuale: '',
            arrayNumeriCasuali: [],
            erroreVerificato: false
        },

        mounted() {

            axios.get('https://flynn.boolean.careers/exercises/api/random/int/faccio_in_modo_che_mi_dia_errore')
            .then((pippo) => {
                console.log(pippo.data);
                this.numeroCasuale = pippo.data.response;
            }).catch((error) => {
                console.log(error);
                this.erroreVerificato = true;
            })

            axios.get('https://flynn.boolean.careers/exercises/api/random/int')
            .then((response) => {
                this.numeroCasuale = response.data.response;
            });

            /* genero dei numeri casuali*/
            axios.get('https://flynn.boolean.careers/exercises/api/array/integers?min=20&max=50&items=10')
            .then((rispostaDelServer) => {
                this.arrayNumeriCasuali = rispostaDelServer.data.response;
            });

        }
    }
)