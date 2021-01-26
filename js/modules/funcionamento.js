export default function initFuncionaento() {
	const funcionamento  = document.querySelector('[data-semana]');
	const diasSemana     = funcionamento.dataset.semana.split(',').map(Number);
	const horarioSemana  = funcionamento.dataset.horario.split(',').map(Number);

	const dataAgora    = new Date();
	const diaAgora     = dataAgora.getDay(); 
	const horarioAgora = dataAgora.getHours(); 

	const semanaAberto  = diasSemana.indexOf(diaAgora) !== -1;

	const horarioAberto = (horarioAgora >= horarioSemana[0] && horarioAgora < horarioSemana[1])

	if(semanaAberto && horarioAberto) {
		funcionamento.classList.add ('aberto');
	}
}



/*
const agora = new Date();
const futuro = new Date('Dec 24 2020 23:59');

//console.log(agora.getDate());

//console.log(futuro);

function transformDay(tempo) {
    return tempo / (24 * 60 * 60 * 1000); // Para converter em horas, basta remover o 24
}

const diasAgora  = transformDay(agora.getTime());
const diasFuturo = transformDay(futuro.getTime());

console.log(Math.floor(diasFuturo - diasAgora));
*/