interface PatientsProps {
    name: string,
    problem: string,
    hour: string,
    doctorId: number,
    image?: string
}

export const dataPatients:PatientsProps[] = [{
    doctorId: 1,
    name: "Patint 1",
    problem: "Problem 1",
    hour: '10:00',
    image: 'https://img.freepik.com/fotos-gratis/homem-bonito-e-confiante-sorrindo-com-as-maos-cruzadas-no-peito_176420-18743.jpg'
    },
    {
    doctorId: 1,
    name: "Patint 2",
    problem: "Problem 2",
    hour: '11:00'
    },
    {
    doctorId: 1,
    name: "Patint 3",
    problem: "Problem 3",
    hour: '14:00',
    image: 'https://img.freepik.com/fotos-gratis/estilo-de-vida-beleza-e-moda-conceito-de-emocoes-de-pessoas-jovem-gerente-de-escritorio-feminino-asiatico-ceo-com-expressao-satisfeita-em-pe-sobre-um-fundo-branco-sorrindo-com-os-bracos-cruzados-sobre-o-peito_1258-59329.jpg'
}]